# launchkit

Have your coding agent submit your startup to **470+ startup directories, launch platforms, AI/SaaS directories,
communities and press outlets** using its own browser tool.

The agent first **interviews you** (after researching your site or repo) and builds a knowledge base. Then it works
through a persistent queue, filling forms one site at a time or with several parallel workers. It drafts Reddit/HN
posts and press pitches for your approval, and leaves a report of what's live, pending, and needs you
(CAPTCHAs, email verification, payments).

Works with Claude Code, Cursor, Codex, Windsurf, Devin, and any agent that can read markdown and run a shell command or MCP server.

## Quick start

```bash
# unzip launchkit somewhere, then in your product's repo (or any folder):
node /path/to/launchkit/bin/launchkit.mjs init --agent claude   # or cursor | codex | all
# once it's on GitHub: npx github:<you>/launchkit init --agent claude
```

Then tell your agent: **"Launch my startup with launchkit."**

`init` creates `.launchkit/` (queue, profile template, a local copy of the tool), installs the skill
(`.claude/skills/launchkit`, `.cursor/rules/launchkit.mdc`, or a block in `AGENTS.md`), and registers the
`launchkit` MCP server in `.mcp.json` / `.cursor/mcp.json`.

Your agent also needs a browser tool. See [skill/launchkit/docs/07-browser-setup.md](skill/launchkit/docs/07-browser-setup.md).

## What's inside

| Path | What |
|---|---|
| `skill/launchkit/SKILL.md` | Entry point the agent follows |
| `skill/launchkit/docs/01-interview.md` | Research-first interview → `.launchkit/profile.json` |
| `skill/launchkit/docs/02-copy-and-assets.md` | Copy at every length limit, post/pitch drafts, logo/screenshots |
| `skill/launchkit/docs/03-submission-loop.md` | Per-site browser procedure + statuses |
| `skill/launchkit/docs/04-parallel-and-background.md` | 1 vs N workers, background runs, resuming |
| `skill/launchkit/docs/05-site-types.md` | form / post / pitch / pr / manual handling, Product Hunt etc. |
| `skill/launchkit/docs/06-rules-and-safety.md` | No payments, no CAPTCHA bypass, no unapproved posting, no invented facts |
| `data/directories.json` | 477 targets: name, category, submit URL, pricing, priority, mode |
| `bin/launchkit.mjs` | Zero-dependency CLI (Node 18+) |
| `lib/mcp.mjs` | Zero-dependency stdio MCP server exposing the same operations |

## The queue

```
launchkit status
launchkit next --worker w1                 # atomically claim the next site (JSON)
launchkit mark <id> submitted --listing-url https://...
launchkit mark <id> needs_human --note "hCaptcha"
launchkit list --status needs_human
launchkit report                           # .launchkit/report.md
```

Statuses: `pending → in_progress → submitted | live | drafted | needs_human | failed | skipped`.
Claims use a file lock, so parallel workers never take the same site; `release-stale` recovers from crashed workers.

Modes per target: `form` (≈270, automated by default), `post` (≈80 communities, drafted for approval),
`pitch` (≈50 press/newsletters, drafted), `pr` (awesome lists), `manual` (≈70 app stores/marketplaces, suggestions only).
You choose which modes run, the budget (default $0, so paid-only sites are skipped), and the concurrency in
`launch_settings` during the interview.

## Safety defaults

Never pays, never bypasses CAPTCHAs, never posts to communities without your per-draft approval, never stores
passwords, never invents facts, ignores instructions embedded in websites. See `docs/06-rules-and-safety.md`.

## Tests

`npm test` covers the CLI, parallel claim safety, and the MCP handshake.
