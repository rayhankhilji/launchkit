#!/usr/bin/env node
import * as core from '../lib/core.mjs';

const HELP = `launchkit - queue + knowledge base for agent-driven startup directory submissions

Usage: launchkit <command> [options]

Setup
  init [--agent claude|cursor|codex|claude-md|all] [--global]
                         Create .launchkit/ (queue, profile template, local copy of this tool)
                         and install the agent skill/rules + MCP config.
  install --agent <a>    Install skill/rules only.
  mcp                    Run the MCP server over stdio.

Knowledge base
  profile                Print .launchkit/profile.json
  profile set <json>     Deep-merge a JSON patch into the profile
  validate               Check the profile for missing fields

Queue
  next [--n 1] [--worker id] [--modes form,post] [--category "AI Directory"] [--id <id>] [--retry] [--include-paid]
                         Atomically claim target(s); prints JSON
  mark <id> <status> [--note ..] [--listing-url ..] [--account ..] [--evidence path] [--badge-required] [--cost 0]
                         status: ${core.STATUSES.join(' | ')}
  add --name .. --url .. [--category ..] [--mode form] [--pricing Free] [--notes ..]
  list [--status ..] [--mode ..] [--category ..] [--search ..] [--json]
  draft <id> <file|->    Save a post/pitch draft (reads stdin with -)
  release-stale [--minutes 30]
  status [--json]
  report                 Write .launchkit/report.md
  guide <id>             Print the site guide for a target

Writing
  lint-copy <file|-> [--max 160]   Flag em dashes, AI-slop words and overlong copy
  lint-copy --profile              Lint every copy field in the profile
`;

function parse(argv) {
  const pos = [], o = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const k = a.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      const v = argv[i + 1];
      if (v === undefined || v.startsWith('--')) o[k] = true; else { o[k] = v; i++; }
    } else pos.push(a);
  }
  return { pos, o };
}
const tty = process.stdout.isTTY && !process.env.NO_COLOR;
const c = (code) => (s) => (tty ? `\x1b[${code}m${s}\x1b[0m` : String(s));
const orange = c('38;5;208'), dim = c('2'), bold = c('1'), green = c('32'), yellow = c('33'), blue = c('34'), red = c('31');
const LOGO = `${orange('  ▲')}  ${bold('launchkit')} ${dim('· your agent launches your startup')}`;
const STATUS_COLOR = { submitted: green, live: green, drafted: blue, needs_human: yellow, failed: red, in_progress: orange, pending: dim, skipped: dim };
const out = (x) => console.log(typeof x === 'string' ? x : JSON.stringify(x, null, 2));
const csv = (v) => (typeof v === 'string' ? v.split(',').map((s) => s.trim()).filter(Boolean) : undefined);

async function main() {
  const { pos, o } = parse(process.argv.slice(2));
  const cmd = pos[0];
  switch (cmd) {
    case 'init': {
      const r = core.init();
      console.log(`\n${LOGO}\n\n  ${green('✓')} Workspace ready at ${bold(r.dir)}\n  ${green('✓')} ${r.total} targets in the queue (${r.added} new)`);
      if (o.agent) {
        const { install } = await import('../lib/install.mjs');
        out(install(csv(o.agent), { global: !!o.global }));
      }
      console.log(`\n  ${bold('Next:')} tell your agent ${orange('"Launch my startup with launchkit."')}\n  ${dim('It will research your site, interview you, then start submitting.')}\n`);
      break;
    }
    case 'install': {
      const { install } = await import('../lib/install.mjs');
      out(install(csv(o.agent || 'claude'), { global: !!o.global }));
      break;
    }
    case 'mcp': { const { serve } = await import('../lib/mcp.mjs'); serve(); break; }
    case 'profile':
      if (pos[1] === 'set') out(core.setProfile(JSON.parse(pos.slice(2).join(' '))));
      else out(core.getProfile());
      break;
    case 'validate': { const r = core.validateProfile(); out(r); process.exitCode = r.ok ? 0 : 2; break; }
    case 'next':
      out(core.next({ n: o.n, worker: o.worker, modes: csv(o.modes), categories: o.category ? [o.category] : undefined, id: o.id, retry: !!o.retry, includePaid: !!o.includePaid, priority: o.priority ? Number(o.priority) : undefined }));
      break;
    case 'mark':
      if (!pos[1] || !pos[2]) throw new Error('usage: launchkit mark <id> <status> [--note ..]');
      out(core.mark(pos[1], pos[2], { note: o.note === true ? undefined : o.note, listing_url: o.listingUrl, account: o.account, evidence: o.evidence, badge_required: o.badgeRequired ? true : undefined, cost_usd: o.cost !== undefined ? Number(o.cost) : undefined }));
      break;
    case 'add':
      out(core.addTarget({ name: o.name, url: o.url, category: o.category, mode: o.mode, pricing: o.pricing, notes: o.notes, priority: o.priority }));
      break;
    case 'list': {
      const rows = core.list({ status: o.status, mode: o.mode, category: o.category, search: o.search });
      if (o.json) out(rows.map(({ history, ...t }) => t));
      else for (const t of rows) console.log(`${(STATUS_COLOR[t.status] || dim)(t.status.padEnd(12))} ${dim(t.mode.padEnd(7))} ${t.id.padEnd(42)} ${dim(t.url)}`);
      break;
    }
    case 'draft': {
      const fs = await import('node:fs');
      const content = pos[2] === '-' ? fs.readFileSync(0, 'utf8') : fs.readFileSync(pos[2], 'utf8');
      out(core.saveDraft(pos[1], content));
      break;
    }
    case 'release-stale': out(core.releaseStale(Number(o.minutes || 30))); break;
    case 'status': {
      const s = core.status();
      if (o.json) { out(s); break; }
      const done = (s.byStatus.submitted || 0) + (s.byStatus.live || 0) + (s.byStatus.drafted || 0);
      const w = 30, fill = Math.round((done / Math.max(1, s.total)) * w);
      console.log(`\n${LOGO}\n\n  ${orange('█'.repeat(fill))}${dim('░'.repeat(w - fill))}  ${bold(done)}/${s.total} done · ${s.queued_for_current_settings} queued for current settings\n`);
      for (const [k, v] of Object.entries(s.byStatus)) if (v) console.log(`  ${(STATUS_COLOR[k] || dim)(k.padEnd(12))} ${v}`);
      console.log('');
      break;
    }
    case 'report': out(core.report()); break;
    case 'guide': {
      const g = core.guidePath(pos[1]);
      if (!g) throw new Error(`No guide for "${pos[1]}". See skill/launchkit/docs/05-site-types.md`);
      const fs = await import('node:fs');
      console.log(fs.readFileSync(g, 'utf8'));
      break;
    }
    case 'lint-copy': {
      const { lintCopy, lintProfile } = await import('../lib/lint.mjs');
      let r;
      if (o.profile) r = lintProfile(core.getProfile());
      else {
        const fs = await import('node:fs');
        const text = !pos[1] || pos[1] === '-' ? fs.readFileSync(0, 'utf8') : fs.existsSync(pos[1]) ? fs.readFileSync(pos[1], 'utf8') : pos.slice(1).join(' ');
        r = lintCopy(text, { maxChars: o.max ? Number(o.max) : undefined });
      }
      out(r);
      process.exitCode = r.ok ? 0 : 3;
      break;
    }
    case undefined: case 'help': case '--help': case '-h': console.log(`\n${LOGO}\n\n${HELP}`); break;
    default: throw new Error(`Unknown command "${cmd}". Run "launchkit help".`);
  }
}

main().catch((e) => { console.error(`${red('✗')} launchkit: ${e.message}`); process.exit(1); });
