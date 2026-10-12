# Concurrency and background runs

The queue is safe for parallel use: `lk next` claims targets under a file lock, so N workers never get
the same site. The real limits are browser instances and the user's CPU and RAM, plus sites rate-limiting
a single IP or account.

## Choose a mode with the user

| Setting | When | Cost |
|---|---|---|
| `concurrency: 1`, attended | Default. The user is nearby and solves CAPTCHAs when you ping them | 1 browser |
| `concurrency: 1`, background | The user walks away. Blockers go to `needs_human` and are reviewed at the end | 1 browser |
| `concurrency: 2–4` | The user wants speed and has a decent machine (16 GB+ RAM) | 1 browser context per worker, roughly 300–800 MB each |
| `> 4` | Not recommended: sites start rate-limiting and CAPTCHAs increase | — |

Only use concurrency > 1 if you can actually run independent browser sessions at the same time. Workers that
share a single tab will clobber each other.

## How to run N workers

Each worker is an independent agent (subagent, background task, or separate terminal session) with:
- its **own browser context/tab** (e.g. a separate Playwright MCP instance, or one tab per worker in a shared
  browser if your tool can address tabs explicitly),
- a unique `--worker` id (`w1`, `w2`, ...),
- the same loop from docs/03.

Examples by agent:
- **Claude Code**: start N subagents (Task tool), each told: "Follow `.claude/skills/launchkit/docs/03-submission-loop.md`
  with worker id wK until `lk next` returns nothing. Only use browser tab K." To share login cookies, use an
  isolated browser per subagent signed into Google once, or split by mode (one worker on `form`, one drafting `post`/`pitch`, which
  needs no browser).
- **Cursor / Codex / others** without subagents: run sequentially (concurrency 1), or have the user open extra agent
  sessions in the same project and give each a worker id.
- **Devin / cloud agents**: use child sessions only if each has access to the same `.launchkit/` (same repo or branch),
  otherwise split the queue by category (`--category`) per session and merge the state afterwards.

Split work so that parallel workers don't hit the same site family at once, e.g. worker 1
`--category "AI Directory"`, worker 2 `--category "Launch Platform"`, worker 3 `--modes post,pitch` (drafts only, no browser).

## Background runs

- In background mode, never block waiting for the user. Mark `needs_human` and continue.
- Print a short progress line every 10 sites. At the end, give one consolidated list of what's needed from the user.
- If the session or worker dies, the next run calls `lk release-stale` and resumes. State is on disk.

## Resuming later

The queue is persistent. "Continue launchkit" means: `lk status` → `lk release-stale` → loop. The user can revisit
`needs_human` items with `lk list --status needs_human`, and after fixing them mark each one
`submitted`/`live` (or ask you to re-claim it with `lk next --id <id>`).
