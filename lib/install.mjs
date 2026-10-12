import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { PKG_ROOT, homeDir } from './core.mjs';

const MARK_START = '<!-- launchkit:start -->';
const MARK_END = '<!-- launchkit:end -->';

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, ent.name), d = path.join(dst, ent.name);
    if (ent.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  }
}

function upsertBlock(file, block) {
  const body = `${MARK_START}\n${block.trim()}\n${MARK_END}\n`;
  let cur = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
  const re = new RegExp(`${MARK_START}[\\s\\S]*?${MARK_END}\\n?`);
  cur = re.test(cur) ? cur.replace(re, body) : (cur ? cur.replace(/\n*$/, '\n\n') : '') + body;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, cur);
}

function mergeMcpJson(file, key = 'mcpServers') {
  let cfg = {};
  if (fs.existsSync(file)) {
    try { cfg = JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return { file, skipped: 'existing file is not valid JSON; add the launchkit server manually' }; }
  }
  cfg[key] = cfg[key] || {};
  cfg[key].launchkit = { command: 'node', args: ['.launchkit/tool/bin/launchkit.mjs', 'mcp'] };
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(cfg, null, 2) + '\n');
  return { file };
}

const POINTER = `## Launchkit (startup directory submissions)

When the user asks to launch, list, or submit their startup/product to directories, launch sites, or communities,
follow \`.launchkit/tool/skill/launchkit/SKILL.md\` exactly (read it and the docs it links before acting).
Any copy you write for the user follows \`.launchkit/tool/skill/human-writing/SKILL.md\` (no em dashes, no AI slop).
Queue/state CLI: \`node .launchkit/tool/bin/launchkit.mjs <command>\` (or the \`launchkit\` MCP server tools).`;

export function install(agents = ['claude'], { global = false, cwd = process.cwd() } = {}) {
  const skillSrc = path.join(PKG_ROOT, 'skill', 'launchkit');
  const done = [];
  const all = agents.includes('all') ? ['claude', 'cursor', 'codex'] : agents;
  for (const a of all) {
    if (a === 'claude') {
      const base = global ? path.join(os.homedir(), '.claude', 'skills') : path.join(cwd, '.claude', 'skills');
      copyDir(skillSrc, path.join(base, 'launchkit'));
      copyDir(path.join(PKG_ROOT, 'skill', 'human-writing'), path.join(base, 'human-writing'));
      done.push({ agent: 'claude', skill: path.join(base, 'launchkit', 'SKILL.md'), mcp: mergeMcpJson(path.join(cwd, '.mcp.json')) });
    } else if (a === 'cursor') {
      const rule = `---\ndescription: Submit the user's startup to launch directories with the browser tool (launchkit)\nalwaysApply: false\n---\n\n${POINTER}\n`;
      const f = path.join(cwd, '.cursor', 'rules', 'launchkit.mdc');
      fs.mkdirSync(path.dirname(f), { recursive: true });
      fs.writeFileSync(f, rule);
      done.push({ agent: 'cursor', rule: f, mcp: mergeMcpJson(path.join(cwd, '.cursor', 'mcp.json')) });
    } else if (a === 'codex' || a === 'agents') {
      const f = path.join(cwd, 'AGENTS.md');
      upsertBlock(f, POINTER);
      done.push({ agent: 'codex/AGENTS.md', file: f });
    } else if (a === 'claude-md') {
      const f = path.join(cwd, 'CLAUDE.md');
      upsertBlock(f, POINTER);
      done.push({ agent: 'CLAUDE.md', file: f });
    } else {
      throw new Error(`Unknown agent "${a}". Use claude, cursor, codex, claude-md, or all.`);
    }
  }
  return { workspace: homeDir(cwd), installed: done };
}
