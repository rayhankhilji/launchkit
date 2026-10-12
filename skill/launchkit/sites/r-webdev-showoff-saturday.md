---
id: r-webdev-showoff-saturday
name: "r/webdev (Showoff Saturday)"
url: https://www.reddit.com/r/webdev/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "instant (AutoModerator or mods may remove it later)"
verified: true
last_checked: "2026-10-12"
---

# r/webdev (Showoff Saturday)

About 3.3M web developers. Sharing your own project or asking for feedback is allowed only on Saturdays, with the
`Showoff Saturday` flair. On any other day it is removed. Commercial promotion is banned even on Saturday: "think
project, not product".

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- Schedule for a Saturday. The rules don't state a timezone; post mid-Saturday US time (15:00-20:00 UTC) so it is
  Saturday everywhere that matters.
- A technical angle: stack, a hard problem you solved, performance numbers. `product.repo_url` helps if open source.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | what you built plus the tech, e.g. `I built a PDF diff viewer that runs fully in the browser with WebAssembly` |
| Body | markdown editor | technical write-up: what it does (1-2 lines), stack, the interesting problem, what you want feedback on; `product.url` and `product.repo_url` at the end |
| Flair | picker | `Showoff Saturday` (required; unflaired posts get removed) |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |

Text, Image, Gallery and Poll posts are allowed; video uploads are not. A Text post with one screenshot linked in
the body is the safe choice.

## Steps
1. Confirm the day is Saturday. If not, save the draft and note "post on Saturday".
2. Open https://www.reddit.com/r/webdev/submit. Text tab.
3. Title about the project and the tech, not marketing. No pricing, no "launching today", no signup ask.
4. Body: 150-300 words, technical, first person. End with a specific question for developers.
5. Flair: `Showoff Saturday`.
6. Save the draft: `launchkit draft r-webdev-showoff-saturday -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-webdev-showoff-saturday drafted`.
7. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/webdev/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
8. `launchkit mark r-webdev-showoff-saturday submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-webdev-showoff-saturday.png`.

## Make the listing perform
- Developers upvote interesting implementation details (rendering tricks, no-backend designs, tiny bundle sizes).
- Free, no-login demos do much better than signup walls.
- Reply to code and UX critique calmly and in detail.

## Gotchas
- Paid SaaS pitched as a product counts as commercial promotion (rule 4) and can get a ban. Frame it as the build.
- LLM-sounding posts are removed under the low-effort rule.
- Reddit's 9:1 guideline applies: the account should not be mostly self-promotion.

## After submitting
- Check it shows on https://www.reddit.com/r/webdev/new with the flair, logged out.
