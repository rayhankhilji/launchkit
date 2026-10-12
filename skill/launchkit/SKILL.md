---
name: launchkit
description: Submit the user's startup to 470+ startup directories, launch platforms, AI/SaaS directories and communities using the agent's browser tool. Interviews the user first, builds a knowledge base (.launchkit/profile.json), then works through a shared queue one site at a time or with parallel workers. Use when the user asks to launch, list, promote, or submit their product/startup to directories, Product Hunt alternatives, or similar sites.
---

# Launchkit: agent-driven startup directory submissions

You are going to submit the user's startup to directories with **your browser tool**, driven by a
queue that the `launchkit` CLI / MCP server keeps in `.launchkit/`. Read this whole file, then read the
doc for each phase **before** starting that phase.

## Tooling

- CLI: `launchkit <cmd>` if installed globally, otherwise `node .launchkit/tool/bin/launchkit.mjs <cmd>`.
  Below, `lk` means whichever works. Every queue command prints JSON.
- MCP: if the `launchkit` MCP server is connected, the `launchkit_*` tools do the same things as the CLI.
- Browser: any browser-control tool you have (Playwright MCP, Chrome DevTools MCP, Claude in Chrome,
  Cursor/Devin built-in browser, computer use). If you have none, stop and help the user set one up:
  [docs/07-browser-setup.md](docs/07-browser-setup.md).

If `.launchkit/state.json` does not exist, run `lk init` first.

## Phases (always in this order)

1. **Interview + knowledge base**: [docs/01-interview.md](docs/01-interview.md)
   Research their site/repo first, then ask only what's still missing, in small batches. Save everything to
   `.launchkit/profile.json`. Don't move on until `lk validate` passes and the user confirms the summary.
2. **Copy + assets**: [docs/02-copy-and-assets.md](docs/02-copy-and-assets.md)
   Write every length variant of the copy plus post/pitch drafts, and make sure the logo and screenshot files exist.
3. **Run settings**: ask about concurrency (default 1), which modes to run (default `form` only), budget
   (default $0), account creation, badges, and attended vs background. Save them to `launch_settings`.
   See [docs/04-parallel-and-background.md](docs/04-parallel-and-background.md).
4. **Submission loop**: [docs/03-submission-loop.md](docs/03-submission-loop.md), with per-mode handling in
   [docs/05-site-types.md](docs/05-site-types.md).
   `lk next` → open the URL in the browser → fill and submit → `lk mark <id> <status>` → repeat.
5. **Wrap-up**: `lk report`, then give the user the `needs_human` list (CAPTCHAs, email verifications,
   payments) and the drafts that are waiting for their approval.

## Non-negotiable rules (details: [docs/06-rules-and-safety.md](docs/06-rules-and-safety.md))

- **Never pay.** Never enter card or payment details. Stop at any checkout and mark it `needs_human`.
- **Never bypass CAPTCHAs** or bot checks. In attended mode, hand off to the user; otherwise mark `needs_human`.
- **Never post to Reddit, HN, X, or any community** unless `launch_settings.allow_social_posting` is true
  **and** the user has approved that specific draft. By default, save drafts with `lk draft`.
- Never store passwords in launchkit files. Use the browser's existing sessions, Google/GitHub OAuth, or the password manager.
- One submission per site. Never create duplicate accounts or listings. Check `lk list --search` before adding custom targets.
- Use only facts from the profile. Never invent metrics, reviews, testimonials, or funding.
- Follow each site's rules and self-promotion policy. If a site forbids what you're about to do, skip it with a note.
- Every claimed target must end up marked (`submitted` / `drafted` / `needs_human` / `failed` / `skipped`). Never leave one `in_progress`.

## Quick reference

```
lk init --agent claude          # workspace + skill + MCP config
lk profile                      # read the knowledge base
lk profile set '{"product":{"tagline":"..."}}'
lk validate
lk status
lk next --worker w1             # claim 1 (respects launch_settings.modes / budget)
lk next --n 3 --worker w2 --modes form --category "AI Directory"
lk mark <id> submitted --listing-url https://... --note "pending review" --evidence .launchkit/evidence/<id>.png
lk mark <id> needs_human --note "hCaptcha on submit"
lk mark <id> skipped --note "paid only ($49)"
lk draft <id> - < post.md       # save a post/pitch draft
lk release-stale --minutes 30
lk report
```
