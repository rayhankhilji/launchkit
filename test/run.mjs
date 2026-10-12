import { execFileSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';

const BIN = path.resolve('bin/launchkit.mjs');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'lk-'));
const lk = (...a) => execFileSync('node', [BIN, ...a], { cwd: tmp, encoding: 'utf8' });
const lkj = (...a) => JSON.parse(lk(...a));

console.log(lk('init', '--agent', 'all'));
assert.ok(fs.existsSync(path.join(tmp, '.launchkit/state.json')));
assert.ok(fs.existsSync(path.join(tmp, '.launchkit/tool/bin/launchkit.mjs')));
assert.ok(fs.existsSync(path.join(tmp, '.claude/skills/launchkit/SKILL.md')));
assert.ok(fs.existsSync(path.join(tmp, '.cursor/rules/launchkit.mdc')));
assert.match(fs.readFileSync(path.join(tmp, 'AGENTS.md'), 'utf8'), /launchkit:start/);
assert.equal(JSON.parse(fs.readFileSync(path.join(tmp, '.mcp.json'), 'utf8')).mcpServers.launchkit.command, 'node');
lk('install', '--agent', 'codex');
assert.equal((fs.readFileSync(path.join(tmp, 'AGENTS.md'), 'utf8').match(/launchkit:start/g) || []).length, 1, 'AGENTS block idempotent');

// validate fails on empty profile
let failed = false;
try { lk('validate'); } catch (e) { failed = true; assert.match(e.stdout, /product.name/); }
assert.ok(failed);
lk('profile', 'set', JSON.stringify({ product: { name: 'Acme', url: 'https://acme.dev', tagline: 'Rockets for devs', description_short: 'x', description_long: 'y', categories: ['Dev'], pricing_model: 'freemium' }, founder: { name: 'R', email: 'r@a.dev' }, submission: { email: 'launch@a.dev' }, assets: { logo_square: 'https://acme.dev/logo.png' } }));
assert.equal(lkj('validate').ok, true);

// local tool copy works too
execFileSync('node', ['.launchkit/tool/bin/launchkit.mjs', 'status'], { cwd: tmp });

// first claim is highest priority form target
const first = lkj('next', '--worker', 'w1');
assert.equal(first.claimed[0].id, 'product-hunt');
assert.equal(first.claimed[0].status, 'in_progress');
lk('mark', 'product-hunt', 'needs_human', '--note', 'choose launch date');

// paid targets excluded with budget 0
const all = lkj('list', '--json', '--mode', 'form');
const paidIds = new Set(all.filter((t) => t.pricing === 'Paid').map((t) => t.id));
assert.ok(paidIds.size > 0);

// parallel claims: 8 workers x 10 claims, no duplicates
const N = 8, K = 10;
const results = await Promise.all(Array.from({ length: N }, (_, i) => new Promise((res, rej) => {
  const ids = [];
  const run = (k) => {
    if (k === 0) return res(ids);
    const c = spawn('node', [BIN, 'next', '--worker', `p${i}`], { cwd: tmp });
    let out = ''; c.stdout.on('data', (d) => (out += d));
    c.on('close', (code) => { if (code) return rej(new Error('next failed')); ids.push(...JSON.parse(out).claimed.map((t) => t.id)); run(k - 1); });
  };
  run(K);
})));
const flat = results.flat();
assert.equal(flat.length, N * K);
assert.equal(new Set(flat).size, flat.length, 'no target claimed twice');
assert.ok(flat.every((id) => !paidIds.has(id)), 'paid-only skipped at budget 0');
console.log(`parallel: ${flat.length} unique claims across ${N} workers`);

// release stale + mark + report
assert.equal(lkj('release-stale', '--minutes', '0').released.length, N * K);
lk('mark', flat[0], 'submitted', '--listing-url', 'https://x.test/acme', '--evidence', 'e.png');
lk('add', '--name', 'My Custom Dir', '--url', 'https://custom.test');
assert.equal(lkj('next', '--id', 'my-custom-dir').claimed[0].id, 'my-custom-dir');
fs.writeFileSync(path.join(tmp, 'd.md'), '# draft');
lk('draft', 'r-sideproject', 'd.md');
const rep = lkj('report');
assert.equal(rep.summary.submitted, 1);
assert.match(fs.readFileSync(rep.file, 'utf8'), /needs_human/);

// MCP handshake + tool call
const mcp = spawn('node', [BIN, 'mcp'], { cwd: tmp });
const replies = [];
let buf = '';
mcp.stdout.on('data', (d) => { buf += d; let i; while ((i = buf.indexOf('\n')) >= 0) { replies.push(JSON.parse(buf.slice(0, i))); buf = buf.slice(i + 1); } });
const send = (m) => mcp.stdin.write(JSON.stringify(m) + '\n');
send({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 't', version: '0' } } });
send({ jsonrpc: '2.0', method: 'notifications/initialized' });
send({ jsonrpc: '2.0', id: 2, method: 'tools/list' });
send({ jsonrpc: '2.0', id: 3, method: 'tools/call', params: { name: 'launchkit_next', arguments: { worker: 'mcp', modes: ['post'] } } });
send({ jsonrpc: '2.0', id: 4, method: 'tools/call', params: { name: 'launchkit_mark', arguments: { id: 'nope', status: 'live' } } });
await new Promise((r) => setTimeout(r, 800));
mcp.kill();
assert.equal(replies.find((r) => r.id === 1).result.serverInfo.name, 'launchkit');
assert.ok(replies.find((r) => r.id === 2).result.tools.length >= 10);
const claimed = JSON.parse(replies.find((r) => r.id === 3).result.content[0].text).claimed[0];
assert.equal(claimed.mode, 'post');
assert.equal(replies.find((r) => r.id === 4).result.isError, true);
console.log(`mcp ok, claimed ${claimed.id}`);
console.log('ALL TESTS PASSED');
