---
id: r-androidapps
name: "r/androidapps"
url: https://www.reddit.com/r/androidapps/submit
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

# r/androidapps

**No longer accepts self-promotion (checked 2026-10-12).** Rule 3: "Any self-promotion, tester requests, new app ideas
or app feedback are not allowed in r/androidapps." It points developers to the sister sub r/droidappshowcase (about
18k members). The old wiki still describes a [Self Promo] flair; that is outdated. r/androidapps (579k) is now
questions and "looking for app" posts.

## Before you start
- Only relevant if `product.platforms` includes Android and the app is live on an approved store.
- Default action here: `launchkit mark r-androidapps skipped --note "self-promo banned; use r/droidappshowcase"`.
- Suggest r/droidappshowcase to the user instead (add it with `launchkit add --name "r/droidappshowcase" --url
  https://www.reddit.com/r/droidappshowcase/submit --category Reddit --mode post`).

## r/droidappshowcase rules (for the alternative)
- 1 app post per week per account; account at least 24 hours old with 2+ karma and a verified email.
- Link straight to the app page on an approved domain (Play Store, F-Droid, GitHub etc., see their
  wiki/approved-domains). No direct APK links.
- Use their suggested template (wiki/suggested-post-template): what the app does, features, link. Link-only posts are removed.
- Tester or beta requests go to r/droidapptesters instead.

## Field map (r/droidappshowcase)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | `<product.name> - <product.tagline>` |
| Body | markdown editor | their template: what it does, key features from `product.key_features`, price model from `product.pricing_model`, Play Store link |
| Flair | picker | pick the matching flair (Promo/Giveaway only for a real giveaway) |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |


## Steps
1. Mark r/androidapps skipped with the note above.
2. If the user wants the alternative, add r/droidappshowcase and draft the post there with `launchkit draft`.
3. Post only with `allow_social_posting` true and explicit approval.

## Gotchas
- Posting promotion in r/androidapps risks a ban; English is required in title and body.
