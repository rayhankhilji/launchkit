---
id: r-appideas
name: "r/AppIdeas"
url: https://www.reddit.com/r/AppIdeas/submit
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

# r/AppIdeas

**Does not accept launches (checked 2026-10-12).** About 105k members. The sub is for app ideas only; rule 2 says it
is "not for sharing completed projects or for advertising an existing or upcoming project". Posts with app store links
or mailing list invites are removed. AutoMod also removes posts from accounts younger than a month or under 50 karma.

## Before you start
- Default action: `launchkit mark r-appideas skipped --note "ideas only, no promotion"`.
- Only possible use: a pre-launch product where the founder wants feedback on the idea itself, with no link, no name
  promotion and no waitlist.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | the idea in plain words, e.g. `An app that turns receipt photos into tax-ready expense reports` |
| Body | markdown editor | the problem, who has it, how the app would work, the open questions; no links, no waitlist, no store link |
| Flair | picker | none, flair is disabled |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |


## Steps
1. Mark skipped by default and explain to the user.
2. If the user wants idea feedback before launch: draft with `launchkit draft r-appideas -`, mark `drafted`, post only
   with `allow_social_posting` true and explicit approval.

## Gotchas
- Low-effort LLM wrapper ideas and AI-written posts are removed.
- Distributing sideloaded APKs here gets a ban.
