---
id: terminal-trove
name: "Terminal Trove"
url: https://terminaltrove.com/submit/
category: Dev / Open Source
mode: form
pricing: Free
login: none
captcha: turnstile
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Terminal Trove

A curated directory of CLI and TUI tools ("The $HOME of all things in the terminal") with a weekly newsletter and a "Tool of the Week". Only relevant if the product is, or ships, a terminal tool.

## Before you start
- Criteria on the page: ideally cross platform, standalone binaries preferred, **must have an image preview (PNG, GIF or MP4)**, must not already be listed. If the product has no CLI/TUI, mark `skipped` with "not a terminal tool".
- Preview images are given as URLs (fields for PNG and GIF), so host them first: a terminal screenshot and ideally an animated GIF of real usage (`assets.demo_gif`, `assets.screenshots[0]`).
- Have install commands ready (brew, cargo, npm, go install, curl script).
- The page has a Cloudflare Turnstile/recaptcha check. If it shows a challenge, hand off (`needs_human`).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| name * | text | `product.name` (lowercase binary name if that's how it's known) |
| url * | domain without https:// | `product.url` with the scheme removed |
| tagline * | ~100 chars | `product.tagline` |
| source code | URL | `product.repo_url`, then click **autofill** (pulls language, license, releases) |
| describe your tool * | 100-400 chars | `product.description_medium` trimmed |
| 2-3 standout features * | 60-400 chars | first 2-3 of `product.key_features` as prose |
| what makes this different? * | 50-500 chars | the design choice vs `product.competitors_alternatives` (keyboard model, speed, single binary) |
| other notable features | up to 400 chars | remaining `product.key_features` |
| who is this for / when to use it * | 60-300 chars | `product.target_audience` + top `product.use_cases` |
| anything else we should know? | 1000 chars, not published | similar tools, launch date |
| Technical details (language, license) | radio lists | from repo; autofill usually sets these |
| Image preview | PNG URL, GIF URL | hosted `assets.screenshots[0]`, hosted `assets.demo_gif` |
| Categories | checkboxes | map `product.categories`/`product.tags` to TUI, CLI, AI, LLM, Git, Monitoring, Networking, Security, DevOps, Docker, Kubernetes, Database, Text editors |
| Install instructions | text | exact commands per platform from `links.docs` |
| are you the author? | yes / no | yes |
| I confirm that I have read the submission criteria * | checkbox | tick |

## Steps
1. Search terminaltrove.com for the tool name. If listed, mark `live` and stop.
2. Open https://terminaltrove.com/submit/. Fill Basic Info, paste the repo and click **autofill**.
3. Fill each Description box, checking the live minimum counters.
4. Expand Technical Details, Image Preview, Categories, Install Instructions, Author & Confirmation and fill them. The counter at the bottom shows fields left.
5. Click **SUBMIT**. On a challenge, mark `needs_human`. Screenshot the result to `.launchkit/evidence/terminal-trove.png`.
6. `launchkit mark terminal-trove submitted --note "curated, awaiting review"`

## Make the listing perform
- The GIF is the listing. Record a 10-20 second real session (vhs or asciinema to GIF) with readable font size.
- "What makes this different" is where curators decide. Be specific and technical, not adjectives.
- Tool of the Week picks tend to be polished, cross-platform, single-binary tools with a clear README.

## Gotchas
- Answers are saved in the browser as you go, so a reload won't lose them.
- Email fallback exists (curator at the domain) but the form is preferred.
- "Advertise" is paid. Skip.

## After submitting
- New tools appear under "New" on the homepage once approved.
