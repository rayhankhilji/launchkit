---
id: r-advancedentrepreneur
name: "r/advancedentrepreneur"
url: https://www.reddit.com/r/advancedentrepreneur/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "instant (AutoModerator or mods may remove it later)"
verified: false
last_checked: "2026-10-12"
---

# r/advancedentrepreneur

**Does not accept launch or product posts (checked 2026-10-12).** The submit text and rules say: no self-promotion,
link posts disabled, no AI or crypto businesses, no surveys, no asking for investors or partners. About 82k
established business owners discussing operations ("How do you stop being involved in every little thing?").

## Before you start
- Default action: `launchkit mark r-advancedentrepreneur skipped --note "no self-promotion allowed"`.
- Only if the user wants to take part as a founder: a discussion post with no link and no product name.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | a real operating question or lesson, e.g. `How did you hand off support without quality dropping?` |
| Body | markdown editor | context and commentary from the founder (required by the rules); no link, no product mention |
| Flair | picker | none, flair is disabled |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |

Text posts only. Links, images and video are disabled.

## Steps
1. Mark skipped by default (see above) and tell the user why.
2. If the user asks for a discussion post: write it, then `launchkit draft r-advancedentrepreneur -` and mark `drafted`.
3. Post only with `allow_social_posting` true and explicit approval, then mark `submitted --listing-url <post url>`.

## Make the listing perform
- This is not a launch channel. Value here is reputation: thoughtful answers on other threads.
- AI or crypto products are banned outright, even in discussion.

## Gotchas
- "DM me" requests are banned. Blog links count as blog spam.
