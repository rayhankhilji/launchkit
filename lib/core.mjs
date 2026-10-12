import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const PKG_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const STATUSES = ['pending', 'in_progress', 'submitted', 'live', 'drafted', 'needs_human', 'failed', 'skipped'];
export const MODES = ['form', 'post', 'pitch', 'pr', 'manual'];
const TERMINAL = new Set(['submitted', 'live', 'skipped']);

export function homeDir(cwd = process.cwd()) {
  return path.resolve(process.env.LAUNCHKIT_DIR || path.join(cwd, '.launchkit'));
}
const p = (dir, ...rest) => path.join(dir, ...rest);

export function loadDirectories() {
  return JSON.parse(fs.readFileSync(p(PKG_ROOT, 'data', 'directories.json'), 'utf8'));
}

function readJSON(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) {
    if (e.code === 'ENOENT') return fallback;
    throw new Error(`Could not parse ${file}: ${e.message}`);
  }
}
function writeJSON(file, data) {
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2) + '\n');
  fs.renameSync(tmp, file);
}

const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
function withLock(dir, fn) {
  const lock = p(dir, '.lock');
  const start = Date.now();
  for (;;) {
    try { fs.mkdirSync(lock); break; } catch (e) {
      if (e.code !== 'EEXIST') throw e;
      try { if (Date.now() - fs.statSync(lock).mtimeMs > 15000) fs.rmSync(lock, { recursive: true, force: true }); } catch {}
      if (Date.now() - start > 30000) throw new Error('Timed out waiting for .launchkit/.lock');
      sleep(20 + Math.random() * 40);
    }
  }
  try { return fn(); } finally { fs.rmSync(lock, { recursive: true, force: true }); }
}

function requireInit(dir) {
  if (!fs.existsSync(p(dir, 'state.json'))) throw new Error(`No launchkit workspace at ${dir}. Run "launchkit init" first.`);
}

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const s = p(src, ent.name), d = p(dst, ent.name);
    if (ent.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  }
}

export function init(dir = homeDir()) {
  fs.mkdirSync(dir, { recursive: true });
  for (const sub of ['assets', 'drafts', 'evidence']) fs.mkdirSync(p(dir, sub), { recursive: true });
  const toolDir = p(dir, 'tool');
  if (path.resolve(PKG_ROOT) !== path.resolve(toolDir)) {
    for (const sub of ['bin', 'lib', 'data', 'skill', 'templates']) copyDir(p(PKG_ROOT, sub), p(toolDir, sub));
    fs.copyFileSync(p(PKG_ROOT, 'package.json'), p(toolDir, 'package.json'));
  }
  if (!fs.existsSync(p(dir, 'profile.json'))) fs.copyFileSync(p(PKG_ROOT, 'templates', 'profile.json'), p(dir, 'profile.json'));
  if (!fs.existsSync(p(dir, '.gitignore'))) fs.writeFileSync(p(dir, '.gitignore'), 'evidence/\ntool/\n.lock\n*.tmp\n');
  return withLock(dir, () => {
    const state = readJSON(p(dir, 'state.json'), { version: 1, created_at: new Date().toISOString(), targets: {} });
    let added = 0;
    for (const d of loadDirectories()) {
      if (!state.targets[d.id]) { state.targets[d.id] = { ...d, status: 'pending', attempts: 0 }; added++; }
      else Object.assign(state.targets[d.id], { name: d.name, url: d.url, category: d.category, pricing: d.pricing, pricing_detail: d.pricing_detail, inactive: d.inactive, notes: d.notes, mode: state.targets[d.id].mode_override || d.mode, priority: d.priority });
    }
    writeJSON(p(dir, 'state.json'), state);
    return { dir, added, total: Object.keys(state.targets).length };
  });
}

export function getProfile(dir = homeDir()) {
  requireInit(dir);
  return readJSON(p(dir, 'profile.json'), {});
}

function deepMerge(a, b) {
  if (Array.isArray(b) || typeof b !== 'object' || b === null) return b;
  const out = { ...(a && typeof a === 'object' && !Array.isArray(a) ? a : {}) };
  for (const [k, v] of Object.entries(b)) out[k] = v === null ? null : deepMerge(out[k], v);
  return out;
}
export function setProfile(patch, dir = homeDir()) {
  requireInit(dir);
  return withLock(dir, () => {
    const merged = deepMerge(readJSON(p(dir, 'profile.json'), {}), patch);
    writeJSON(p(dir, 'profile.json'), merged);
    return merged;
  });
}

const REQUIRED = [
  'product.name', 'product.url', 'product.tagline', 'product.description_short', 'product.description_long',
  'product.categories', 'product.pricing_model', 'founder.name', 'founder.email', 'submission.email',
  'assets.logo_square', 'launch_settings.concurrency', 'launch_settings.modes',
];
const get = (o, k) => k.split('.').reduce((v, part) => (v == null ? v : v[part]), o);
export function validateProfile(dir = homeDir()) {
  const prof = getProfile(dir);
  const missing = REQUIRED.filter((k) => { const v = get(prof, k); return v == null || v === '' || (Array.isArray(v) && !v.length); });
  const warnings = [];
  const t = get(prof, 'product.tagline') || '';
  if (t.length > 60) warnings.push(`product.tagline is ${t.length} chars; many sites cap at 60. Add product.tagline_short.`);
  const s = get(prof, 'product.description_short') || '';
  if (s.length > 160) warnings.push(`product.description_short is ${s.length} chars; keep <= 160.`);
  for (const k of ['assets.logo_square', 'assets.logo_wide']) {
    const f = get(prof, k);
    if (f && !/^https?:/.test(f) && !fs.existsSync(path.resolve(dir, '..', f)) && !fs.existsSync(path.resolve(f))) warnings.push(`${k} file not found: ${f}`);
  }
  for (const f of get(prof, 'assets.screenshots') || []) {
    if (!/^https?:/.test(f) && !fs.existsSync(path.resolve(dir, '..', f)) && !fs.existsSync(path.resolve(f))) warnings.push(`screenshot not found: ${f}`);
  }
  return { ok: missing.length === 0, missing, warnings };
}

function loadState(dir) { requireInit(dir); return readJSON(p(dir, 'state.json')); }

export function guidePath(id) {
  const f = path.join(PKG_ROOT, 'skill', 'launchkit', 'sites', `${id}.md`);
  return fs.existsSync(f) ? f : null;
}

function withGuide(t) {
  const guide = guidePath(t.id);
  return guide ? { ...t, guide } : { ...t, guide: null, guide_fallback: path.join(PKG_ROOT, 'skill', 'launchkit', 'docs', '05-site-types.md') };
}

function eligible(t, opts, settings) {
  if (t.inactive && !opts.id) return false;
  const modes = opts.modes || settings.modes || ['form'];
  if (!modes.includes(t.mode)) return false;
  if (opts.categories?.length && !opts.categories.includes(t.category)) return false;
  const excl = settings.exclude_categories || [];
  if (excl.includes(t.category)) return false;
  if ((settings.exclude_ids || []).includes(t.id)) return false;
  if (opts.priority && t.priority !== opts.priority) return false;
  const budget = Number(settings.budget_usd || 0);
  if (t.pricing === 'Paid' && budget <= 0 && !opts.includePaid) return false;
  if (t.status === 'pending') return true;
  if (opts.retry && t.status === 'failed' && (t.attempts || 0) < (opts.maxAttempts || 2)) return true;
  return false;
}

export function next(opts = {}, dir = homeDir()) {
  const n = Math.max(1, Number(opts.n || 1));
  const worker = opts.worker || `w-${process.pid}`;
  return withLock(dir, () => {
    const state = loadState(dir);
    const settings = readJSON(p(dir, 'profile.json'), {}).launch_settings || {};
    const ids = opts.id ? [opts.id] : null;
    const list = Object.values(state.targets)
      .filter((t) => (ids ? ids.includes(t.id) && !TERMINAL.has(t.status) && t.status !== 'in_progress' : eligible(t, opts, settings)))
      .sort((a, b) => a.priority - b.priority);
    const claimed = list.slice(0, n).map((t) => {
      Object.assign(t, { status: 'in_progress', worker, claimed_at: new Date().toISOString(), attempts: (t.attempts || 0) + 1 });
      return t;
    });
    writeJSON(p(dir, 'state.json'), state);
    return { worker, claimed: claimed.map(withGuide), remaining: list.length - claimed.length };
  });
}

export function mark(id, status, extra = {}, dir = homeDir()) {
  if (!STATUSES.includes(status)) throw new Error(`Unknown status "${status}". Use one of: ${STATUSES.join(', ')}`);
  return withLock(dir, () => {
    const state = loadState(dir);
    const t = state.targets[id];
    if (!t) throw new Error(`Unknown target id "${id}". Use "launchkit list" to see ids.`);
    t.status = status;
    t.updated_at = new Date().toISOString();
    if (status !== 'in_progress') { delete t.worker; delete t.claimed_at; }
    for (const k of ['note', 'listing_url', 'account', 'badge_required', 'cost_usd']) if (extra[k] !== undefined) t[k] = extra[k];
    if (extra.evidence) t.evidence = [...(t.evidence || []), extra.evidence];
    t.history = [...(t.history || []), { at: t.updated_at, status, note: extra.note }].slice(-10);
    writeJSON(p(dir, 'state.json'), state);
    return t;
  });
}

export function addTarget(t, dir = homeDir()) {
  if (!t.name || !t.url) throw new Error('add needs --name and --url');
  const id = t.id || t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
  return withLock(dir, () => {
    const state = loadState(dir);
    if (state.targets[id]) throw new Error(`Target "${id}" already exists`);
    state.targets[id] = { id, name: t.name, url: t.url, category: t.category || 'Custom', pricing: t.pricing || 'Free', priority: Number(t.priority || 2), mode: t.mode || 'form', notes: t.notes || 'Added by user', status: 'pending', attempts: 0, custom: true };
    writeJSON(p(dir, 'state.json'), state);
    return state.targets[id];
  });
}

export function releaseStale(minutes = 30, dir = homeDir()) {
  return withLock(dir, () => {
    const state = loadState(dir);
    const cutoff = Date.now() - minutes * 60000;
    const released = [];
    for (const t of Object.values(state.targets)) {
      if (t.status === 'in_progress' && Date.parse(t.claimed_at || 0) < cutoff) {
        t.status = 'pending'; delete t.worker; delete t.claimed_at; released.push(t.id);
      }
    }
    writeJSON(p(dir, 'state.json'), state);
    return { released };
  });
}

export function list(filter = {}, dir = homeDir()) {
  const state = loadState(dir);
  return Object.values(state.targets).filter((t) =>
    (!filter.status || t.status === filter.status) && (!filter.mode || t.mode === filter.mode) &&
    (!filter.category || t.category === filter.category) && (!filter.search || `${t.name} ${t.notes}`.toLowerCase().includes(filter.search.toLowerCase())));
}

export function status(dir = homeDir()) {
  const state = loadState(dir);
  const settings = readJSON(p(dir, 'profile.json'), {}).launch_settings || {};
  const byStatus = Object.fromEntries(STATUSES.map((s) => [s, 0]));
  const byMode = {};
  let queued = 0;
  for (const t of Object.values(state.targets)) {
    byStatus[t.status] = (byStatus[t.status] || 0) + 1;
    byMode[t.mode] = byMode[t.mode] || Object.fromEntries(STATUSES.map((s) => [s, 0]));
    byMode[t.mode][t.status]++;
    if (eligible(t, {}, settings)) queued++;
  }
  return { total: Object.keys(state.targets).length, queued_for_current_settings: queued, byStatus, byMode };
}

export function saveDraft(id, content, dir = homeDir()) {
  requireInit(dir);
  const file = p(dir, 'drafts', `${id.replace(/[^a-z0-9-]/gi, '_')}.md`);
  fs.writeFileSync(file, content);
  return { file };
}

export function report(dir = homeDir()) {
  const state = loadState(dir);
  const s = status(dir);
  const order = ['needs_human', 'submitted', 'live', 'drafted', 'failed', 'in_progress', 'skipped', 'pending'];
  const lines = [`# Launchkit report`, ``, `Generated ${new Date().toISOString()}`, ``, `| Status | Count |`, `|---|---|`];
  for (const k of order) lines.push(`| ${k} | ${s.byStatus[k] || 0} |`);
  for (const k of order.filter((x) => x !== 'pending')) {
    const rows = Object.values(state.targets).filter((t) => t.status === k);
    if (!rows.length) continue;
    lines.push('', `## ${k} (${rows.length})`, '', '| Site | Mode | Note | Listing |', '|---|---|---|---|');
    for (const t of rows) lines.push(`| [${t.name}](${t.url}) | ${t.mode} | ${(t.note || '').replace(/\|/g, '/').replace(/\n/g, ' ')} | ${t.listing_url || ''} |`);
  }
  const file = p(dir, 'report.md');
  fs.writeFileSync(file, lines.join('\n') + '\n');
  return { file, summary: s.byStatus };
}
