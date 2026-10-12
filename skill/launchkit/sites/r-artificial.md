---
id: r-artificial
name: "r/artificial"
url: https://www.reddit.com/r/artificial/submit
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

# r/artificial

About 1.35M members, mostly AI news and discussion. Self-promotion is capped at 10% of the user's activity, the first
post or comment can't be promotion, and "No selling" is a rule. A product launch is a weak fit; a substantive
technical or research post that mentions the project can work.

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- The user must already participate in r/artificial. If their account has no history there, mark `needs_human` with
  "needs organic r/artificial participation first (10% self-promo rule)".
- The mods ask anyone unsure to modmail first. If the post is borderline, suggest the user does that.
- A real AI angle is required (the product uses or is about AI/ML).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | concrete and descriptive, no clickbait, e.g. `How we cut LLM extraction errors from 12% to 3% with schema-guided decoding` |
| Body | markdown editor | what you did and learned, the method, numbers if real, limitations; product link once at the end with "I built this" |
| Flair | picker | `Project` for a build post (others seen: News, Discussion, Research, Tutorial, Question, Ethics / Safety) |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |

Text, Link, Image, Video and Poll posts are allowed. Use Text.

## Steps
1. Check the 10% participation rule with the user.
2. Open https://www.reddit.com/r/artificial/submit. Text tab.
3. Write a technical post, not a pitch. No pricing, no signup ask.
4. Flair: `Project`.
5. Save the draft: `launchkit draft r-artificial -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-artificial drafted`.
6. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/artificial/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
7. `launchkit mark r-artificial submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-artificial.png`.

## Make the listing perform
- Only "News" and "Discussion" posts usually reach the top here; project posts need a genuinely interesting
  technical finding to travel.
- Weekday mornings US time. Engage with skeptical comments with evidence.

## Gotchas
- Sharing chat dumps, AI art or tool-request posts is removed. AutoMod is aggressive against new accounts.
- "No selling": don't mention discounts or plans.

## After submitting
- Check https://www.reddit.com/r/artificial/new logged out. If AutoMod removed it, the user can modmail with the link.
