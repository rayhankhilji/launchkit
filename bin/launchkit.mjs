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
const out = (x) => console.log(typeof x === 'string' ? x : JSON.stringify(x, null, 2));
const csv = (v) => (typeof v === 'string' ? v.split(',').map((s) => s.trim()).filter(Boolean) : undefined);

async function main() {
  const { pos, o } = parse(process.argv.slice(2));
  const cmd = pos[0];
  switch (cmd) {
    case 'init': {
      const r = core.init();
      out(`Workspace ready: ${r.dir} (${r.total} targets, ${r.added} new)`);
      if (o.agent) {
        const { install } = await import('../lib/install.mjs');
        out(install(csv(o.agent), { global: !!o.global }));
      }
      out('Next: ask your agent to "launch my startup with launchkit" - it will interview you first.');
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
      else for (const t of rows) console.log(`${t.status.padEnd(12)} ${t.mode.padEnd(7)} ${t.id.padEnd(42)} ${t.url}`);
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
      console.log(`Targets: ${s.total}   queued for current settings: ${s.queued_for_current_settings}`);
      for (const [k, v] of Object.entries(s.byStatus)) if (v) console.log(`  ${k.padEnd(12)} ${v}`);
      break;
    }
    case 'report': out(core.report()); break;
    case undefined: case 'help': case '--help': case '-h': console.log(HELP); break;
    default: throw new Error(`Unknown command "${cmd}". Run "launchkit help".`);
  }
}

main().catch((e) => { console.error(`launchkit: ${e.message}`); process.exit(1); });
