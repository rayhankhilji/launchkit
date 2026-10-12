---
id: aibesttop
name: "AIBestTop"
url: https://aibesttop.com/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "72 hours (free)"
verified: true
last_checked: 2026-10-12
---

# AIBestTop

Indie AI directory built on a directory boilerplate (Mkdirs-style, "Built with Luolink"). Free listings need a backlink; the paid tiers are cheap and add a featured spot. Worth it for the dofollow links if the user accepts a badge.

## Before you start
- Login required: email + password, Google or GitHub (https://aibesttop.com/auth/login). Use `submission.preferred_login`.
- Free plan requires a backlink to aibesttop.com on the user's site. Check `launch_settings.add_badge_to_site`; skip at budget 0 if the user says no.
- Have `assets.logo_square` and the best of `assets.screenshots` (16:9) ready.

## Field map

The form sits behind login, so these fields are the standard set for this boilerplate and are unconfirmed:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Link | URL | `product.url` |
| Name | text | `product.name` |
| Categories | multi-select | 1-2 closest to `product.categories` |
| Tags | multi-select | best matches from `product.tags` |
| Description | short text (~160 chars) | `product.description_short` |
| Introduction | markdown | `product.description_long`, plus a "Features" list from `product.key_features` and a "Use cases" list |
| Logo / Icon | image | `assets.logo_square` |
| Image | image, 16:9 | `assets.screenshots[0]` or `assets.og_image` |

After saving, the boilerplate asks you to pick a plan (Free / Pro) and, for Free, verify the backlink.

## Steps
1. Search the site for `product.name`. If listed, mark `live` and stop.
2. Add the AIBestTop badge or text link to the user's homepage or footer if approved.
3. Open https://aibesttop.com/submit, sign in, fill the form and save.
4. Choose **Free**, complete backlink verification, submit. Screenshot to `.launchkit/evidence/aibesttop.png`.
5. `launchkit mark aibesttop submitted --note "free, backlink, ~72h review"`

## Make the listing perform
- Plans (Oct 2026): Free $0 (3 dofollow links, listed within 72 hours, backlink required), Pro $9.9 one-time (no backlink, featured at top of listings, social and newsletter share), Sponsor $19.9/week (ad on almost every page). Pro is the only upgrade worth raising with the user.
- Free and Pro both let you choose the publish day. Set it to the user's launch day so the listing appears with other launch traffic.
- The Introduction is rendered markdown and indexed. Headed sections (what it does, features, use cases, pricing) make the page rank for long-tail searches.
- Listings appear in Collections, Categories and Tag pages. More accurate tags means more entry points.

## Gotchas
- Removing the backlink later breaks the "permanent link with backlink maintenance" terms.
- You can edit the listing anytime from the dashboard after approval.

## After submitting
- Status shows in the user dashboard. Mark `live` once published and record the listing URL.
