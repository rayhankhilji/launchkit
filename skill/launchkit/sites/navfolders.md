---
id: navfolders
name: "NavFolders"
url: https://navfolders.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: yes
review_time: "within 72 hours"
verified: true
last_checked: 2026-10-12
---

# NavFolders

A curated "smart bookmark" directory of web tools, built on the same directory template as SaaSFame. Listings are
permanent and the free plan advertises 3 dofollow links. Little community activity; this is a backlink listing.

## Before you start
- Login: **Google or GitHub** only.
- **Free plan requires a NavFolders badge in the site footer before you click the free submit button.** They verify the
  backlink at that moment; without it the product doesn't enter review. Ask the user first.
- Pro is $9.9 (featured, no badge), Sponsor $19.9/week. Skip with budget 0.
- Assets: `assets.logo_square` (icon) and `assets.og_image` or a screenshot (cover image).

## Field map (behind login; standard fields of this directory template, confirm on the page)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Link | URL | `product.url` |
| Description | short, about 160 chars | `product.description_short` |
| Introduction | markdown, long | `product.description_long`, with `product.key_features` as a short list |
| Categories | multi-select | closest match to `product.categories` (Image, Video, Productivity, Marketing, Developer...) |
| Tags | multi-select | web / mac / windows / ios / android from `product.platforms`, plus marketing if relevant |
| Icon | image, square | `assets.logo_square` |
| Image | image, wide | `assets.og_image` or `assets.screenshots[0]` |

## Steps
1. Search https://navfolders.com/search for `product.name`. If listed, mark `live`.
2. If the user approved, copy a badge (Dark, Light or Transparent) from https://navfolders.com/pricing into the site footer
   and deploy it.
3. Open https://navfolders.com/submit, sign in with Google or GitHub, fill the form.
4. Choose **Free**, click the free submit button so they run the badge check. Pick the publish date if offered.
5. Screenshot to `.launchkit/evidence/navfolders.png`; `launchkit mark navfolders submitted --note "free, badge verified"`.

## Make the listing perform
- Pages are found through categories and tags, so fill tags for every platform the product supports.
- Write the Introduction for search: what it is, who it's for, 3-5 features, how to start.

## Gotchas
- If the badge check fails, the free button won't proceed. Check the badge is in server-rendered HTML, not injected late.
- The homepage promotes SuperLaunch List; that's a separate site.

## After submitting
- Listing URL pattern: `https://navfolders.com/item/<slug>`. Expect it within 72 hours. Keep the badge up.
