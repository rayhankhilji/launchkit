import readline from 'node:readline';
import fs from 'node:fs';
import * as core from './core.mjs';

const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const str = { type: 'string' };
const TOOLS = [
  { name: 'launchkit_init', description: 'Create or refresh the .launchkit workspace (queue of 470+ directories, profile template).', inputSchema: { type: 'object', properties: {} }, run: () => core.init() },
  { name: 'launchkit_status', description: 'Counts of targets by status and mode, plus how many are queued for the current launch_settings.', inputSchema: { type: 'object', properties: {} }, run: () => core.status() },
  { name: 'launchkit_profile_get', description: 'Read the startup knowledge base (.launchkit/profile.json).', inputSchema: { type: 'object', properties: {} }, run: () => core.getProfile() },
  { name: 'launchkit_profile_set', description: 'Deep-merge a JSON patch into the knowledge base. Arrays replace; null clears a field.', inputSchema: { type: 'object', properties: { patch: { type: 'object' } }, required: ['patch'] }, run: (a) => core.setProfile(a.patch) },
  { name: 'launchkit_profile_validate', description: 'Check the knowledge base for missing required fields and length/asset warnings.', inputSchema: { type: 'object', properties: {} }, run: () => core.validateProfile() },
  {
    name: 'launchkit_next', description: 'Atomically claim the next target(s) to work on. Safe to call from parallel workers; each target is handed to exactly one worker.',
    inputSchema: { type: 'object', properties: { n: { type: 'integer', minimum: 1 }, worker: str, modes: { type: 'array', items: { enum: core.MODES } }, categories: { type: 'array', items: str }, id: { ...str, description: 'Claim one specific target id' }, retry: { type: 'boolean' }, include_paid: { type: 'boolean' } } },
    run: (a) => core.next({ n: a.n, worker: a.worker, modes: a.modes, categories: a.categories, id: a.id, retry: a.retry, includePaid: a.include_paid }),
  },
  {
    name: 'launchkit_mark', description: 'Record the outcome for a target. Statuses: submitted, live, drafted, needs_human, failed, skipped, pending.',
    inputSchema: { type: 'object', properties: { id: str, status: { enum: core.STATUSES }, note: str, listing_url: str, account: { ...str, description: 'Login method/email used (never a password)' }, badge_required: { type: 'boolean' }, cost_usd: { type: 'number' }, evidence: { ...str, description: 'Path to screenshot or confirmation' } }, required: ['id', 'status'] },
    run: (a) => core.mark(a.id, a.status, a),
  },
  { name: 'launchkit_list', description: 'List targets, optionally filtered by status, mode, category, or search text.', inputSchema: { type: 'object', properties: { status: { enum: core.STATUSES }, mode: { enum: core.MODES }, category: str, search: str } }, run: (a) => core.list(a).map(({ history, ...t }) => t) },
  { name: 'launchkit_add_target', description: 'Add a custom site to the queue.', inputSchema: { type: 'object', properties: { name: str, url: str, category: str, mode: { enum: core.MODES }, pricing: str, notes: str }, required: ['name', 'url'] }, run: (a) => core.addTarget(a) },
  { name: 'launchkit_save_draft', description: 'Save a post/pitch draft to .launchkit/drafts/<id>.md for the user to review.', inputSchema: { type: 'object', properties: { id: str, content: str }, required: ['id', 'content'] }, run: (a) => core.saveDraft(a.id, a.content) },
  { name: 'launchkit_release_stale', description: 'Return in_progress targets older than N minutes to pending (after a crashed worker).', inputSchema: { type: 'object', properties: { minutes: { type: 'number' } } }, run: (a) => core.releaseStale(a.minutes ?? 30) },
  { name: 'launchkit_report', description: 'Write .launchkit/report.md summarising every submission.', inputSchema: { type: 'object', properties: {} }, run: () => core.report() },
];

export function serve() {
  const send = (msg) => process.stdout.write(JSON.stringify(msg) + '\n');
  const rl = readline.createInterface({ input: process.stdin });
  rl.on('line', (line) => {
    if (!line.trim()) return;
    let msg;
    try { msg = JSON.parse(line); } catch { return send({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }); }
    const { id, method, params } = msg;
    if (id === undefined) return;
    const reply = (result) => send({ jsonrpc: '2.0', id, result });
    try {
      if (method === 'initialize') {
        return reply({ protocolVersion: params?.protocolVersion || '2025-06-18', capabilities: { tools: {} }, serverInfo: { name: 'launchkit', version: pkg.version }, instructions: 'Queue + knowledge base for submitting a startup to directories. Follow the launchkit SKILL.md workflow: interview -> profile -> claim with launchkit_next -> submit in browser -> launchkit_mark.' });
      }
      if (method === 'ping') return reply({});
      if (method === 'tools/list') return reply({ tools: TOOLS.map(({ run, ...t }) => t) });
      if (method === 'tools/call') {
        const tool = TOOLS.find((t) => t.name === params?.name);
        if (!tool) return send({ jsonrpc: '2.0', id, error: { code: -32602, message: `Unknown tool ${params?.name}` } });
        try {
          const out = tool.run(params.arguments || {});
          return reply({ content: [{ type: 'text', text: JSON.stringify(out, null, 2) }] });
        } catch (e) {
          return reply({ content: [{ type: 'text', text: `Error: ${e.message}` }], isError: true });
        }
      }
      send({ jsonrpc: '2.0', id, error: { code: -32601, message: `Method not found: ${method}` } });
    } catch (e) {
      send({ jsonrpc: '2.0', id, error: { code: -32603, message: e.message } });
    }
  });
}
