---
id: collectai-tools
name: "CollectAI.Tools"
url: https://collectai.tools/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: yes
review_time: "72 hours (free)"
verified: true
last_checked: 2026-10-12
---

# CollectAI.Tools

A small indie AI tools directory with category and tag pages ("Text-to-Image", "Free", "No Signup Required", "For Developers"). The free plan gives a permanent dofollow listing in exchange for a backlink to collectai.tools.

## Before you start
- Assets: `assets.logo_square` (1:1 PNG/JPEG, keep under 1 MB) and one 16:9 screenshot from `assets.screenshots` (under 1 MB). The submit form appears to use the same template as NewTools.site, which states these limits; confirm on the live form.
- Login: Google or GitHub only (the `/submit` page redirects to `/auth/login`). Use `submission.preferred_login`.
- Free plan requires a backlink to `https://collectai.tools` on the user's site. Ask the user before adding it (`launch_settings.add_badge_to_site`). If they say no, skip; Pro is $9.9 one-time and is not allowed at budget 0.

## Field map

Form fields are behind login. The list below is from the shared template (NewTools.site shows it publicly); verify each label when you see the form.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Link | URL starting https:// | `product.url` (then you may click **AI Autofill**, but overwrite its text with profile copy) |
| Name | text | `product.name` |
| Categories | multi-select | closest match to `product.categories` (e.g. coding tools -> "For Developers"/"Code", image apps -> "Text-to-Image") |
| Tags | multi-select | 3-5 from `product.tags`, plus the pricing tag that matches `product.pricing_model` (Free / Freemium / Paid) |
| Description | textarea, short | `product.description_short` |
| Introduction | Markdown | `product.description_long` plus a short bullet list of `product.key_features` |
| Logo | 1:1, PNG/JPEG, max 1 MB | `assets.logo_square` |
| Image | 16:9, PNG/JPEG, max 1 MB | `assets.screenshots[0]` or `assets.og_image` |
| Plan / payment | Free / Pro $9.9 / Sponsor $19.9 wk | Free |

## Steps
1. Search the site for `product.name`. If listed, mark `live` with the URL and stop.
2. Open https://collectai.tools/submit, sign in with Google or GitHub.
3. Fill the fields above. Pick the **Free** plan.
4. Add the backlink: a plain link to `https://collectai.tools` on the user's site (footer or a "Featured on" strip), only if the user approved it. Note the page URL where it lives.
5. Submit, screenshot the confirmation or dashboard entry to `.launchkit/evidence/collectai-tools.png`.
6. `launchkit mark collectai-tools submitted --note "free plan, backlink on <page>, review up to 72h"`

## Make the listing perform
- The free plan lets you "publish your product the day you want". Pick the same date as the user's main launch so both listings go live together.
- Their homepage cards show the description plus 2-3 tags. Use a description that says what it does in the first 10 words and pick tags users filter by: pricing tag first, then "No Signup Required" if true.
- Listings with a real screenshot look far better than the auto-grabbed one. Upload `assets.screenshots[0]`.

## Gotchas
- "Permanent link with backlink maintenance": if the user removes the backlink later, the listing can be pulled. Tell the user.
- Skip the Pro and Sponsor upsells at budget 0.

## After submitting
- Check the dashboard after 72 hours. When live, mark `live` with the listing URL.
