---
id: r-software
name: "r/software"
url: https://www.reddit.com/r/software/submit
category: Reddit
mode: post
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "instant (AutoModerator karma filter)"
verified: true
last_checked: "2026-10-12"
---

# r/software

About 379k members asking for and sharing desktop and mobile software. Self-promotion is a permanent ban **unless** the software is open source, or you post on a **Wednesday** with the "Self-Promotion Wednesdays" flair and offer something of value (a deal, a useful write-up). The "Release" rule prefers open-source software that's fully usable without paying.

## Before you start
- Fits downloadable or installable software best (Windows, macOS, Linux, iOS, Android). Pure web SaaS fits poorly.
- Pick the path:
  - Open-source and free to use: a normal post with a "Release" flair is allowed any day.
  - Closed or paid: Wednesday only, "Self-Promotion Wednesdays" flair, with a real offer (`product.deal_or_promo_code`) or something useful beyond the pitch.
- There's a secret minimum karma. AutoModerator removes posts from low-karma accounts. The mods offer manual review by modmail.
- Reddit login (Google, Apple, or email/username). The post form needs a login. Flairs below were read from recent posts.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | r/software |
| Post type | Text, Link or Image (no video) | Text with an inline screenshot from `assets.screenshots[0]` |
| Title | 300 chars | "<name>: <what it does>" in plain words, e.g. "Magellan, a file visualizer focused on images" |
| Flair | picker | "Release :Windows:" / ":macOS:" / ":Linux:" / ":iOS:" / ":Android:" / ":Other:" by `product.platforms[0]` for open-source releases, or "Self-Promotion Wednesdays" for anything else |
| Body | 40,000 chars | What it does, platforms, price (free, donation or paid), the licence and repo (`product.repo_url`) if open source, the offer for Wednesday posts, download link |

## Steps
1. Open https://www.reddit.com/r/software/submit (on a Wednesday if using the self-promo path).
2. Choose **Text**, write the title, pick the flair, add one screenshot inline, write the body.
3. `launchkit draft r-software -` with title, flair, body and which day to post, then `launchkit mark r-software drafted`.
4. Only if `allow_social_posting` is true and the user approved: post, then `launchkit mark r-software submitted --listing-url <url>`.

## Make the listing perform
- Readers here look for alternatives to big-name tools. Name what it replaces (`product.competitors_alternatives`). Recent top posts are open-source clones of Office and AutoCAD.
- State price and platform in the first two lines.
- The pinned "Weekly Discovery Thread" (new each Friday) allows relevant self-promotion "if transparent". It's a good second touch, or a fallback for closed-source products.

## Gotchas
- Releases should be new programs or big updates, not a changelog for every version.
- No piracy, no video downloaders.
- Low-effort or badly formatted posts get removed.

## After submitting
- Check the post survived AutoModerator (logged-out view). If removed for karma, the user can modmail for manual review.
