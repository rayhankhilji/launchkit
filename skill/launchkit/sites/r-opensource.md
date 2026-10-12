---
id: r-opensource
name: "r/opensource"
url: https://www.reddit.com/r/opensource/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: instant
verified: true
last_checked: "2026-10-12"
---

# r/opensource

388k people into open source. Sharing your own project is normal here with the **Promotional** flair, as long as the repo has an OSI-approved license and you stick around to discuss it. Only for open-source products.

## Before you start
- Fit check: `product.open_source` must be true and `product.repo_url` must have a LICENSE file with an OSI-listed license (Rule 4). Source-available, "fair code" or no-license repos get removed. Otherwise mark `skipped`.
- Images and video posts are disabled. Use a text or link post, with screenshots in the repo README.
- Reddit's 10% guideline applies: the account shouldn't only post its own projects (Rule 2).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Post type tab | Text or Link | Text, with `product.repo_url` in the body |
| Title | 300 chars | the sub's common pattern: `<name> (<license>): <what it does, in plain words>`, e.g. "Sill (Apache 2.0): stream any macOS window to iPhone" |
| Body | Markdown | why it exists, what it does, how to run it, what help you want (issues, contributors, testers), license, `product.repo_url` |
| Flair | required: Promotional, Alternatives, Discussion, Community | **Promotional** (sharing a project, yours or anyone's) |

## Steps
1. Open https://www.reddit.com/r/opensource/ and confirm the repo license is on https://opensource.org/licenses.
2. Draft from `copy.show_hn_body` / `copy.reddit_post`. Mention the license and whether there is a paid hosted version.
3. `launchkit draft r-opensource -` with title, body, flair. `launchkit mark r-opensource drafted`.
4. Only with posting allowed and user approval: Create Post, Text, fill in, flair **Promotional**, Post. Screenshot to `.launchkit/evidence/r-opensource.png`, `launchkit mark r-opensource submitted --listing-url <url>`.

## Make the listing perform
- Putting the license in the title (as top posts do) signals right away that it qualifies.
- Self-hosted alternatives to paid tools land well. Say which paid tool it replaces (`product.competitors_alternatives`).
- Ask for something specific: testers on a platform, help with a feature, translations. Contributors respond to concrete asks.
- If there is an open-core or paid cloud tier, say so in the body. Hiding it gets called out.

## Gotchas
- Rule 3: all AI-generated content counts as low effort and is ban-worthy. Write it by hand.
- Rule 6: drive-by posts from accounts that never reply get removed. Plan to answer comments.
- Wrong flair gets removed (Rule 8).

## After submitting
- Answer questions in the thread, link GitHub issues, and thank people who star or contribute.
