---
id: newtools-site
name: "NewTools.site"
url: https://newtools.site/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: yes
review_time: "24-72 hours (free)"
verified: true
last_checked: 2026-10-12
---

# NewTools.site

An indie directory for new tools and AI products with category and tag pages. The free plan gives a listing on your chosen date in exchange for a reciprocal link. It runs on the same template as CollectAI.Tools.

## Before you start
- Login: required before submitting (Google or GitHub on the login page). Use `submission.preferred_login`.
- Assets: `assets.logo_square` (1:1, PNG/JPEG, max 1 MB) and a 16:9 image from `assets.screenshots` or `assets.og_image` (PNG/JPEG, max 1 MB). Resize before upload.
- Free plan needs a reciprocal link to `https://newtools.site` on the user's site. Ask first (`launch_settings.add_badge_to_site`). Pro is $9.9 one-time (no link, featured), Sponsor $19.9/week. Skip both at budget 0.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Link | URL, https:// | `product.url` (the **AI Autofill** button may prefill; replace its text with profile copy) |
| Name | text | `product.name`; their guide: core use case in 3-6 words if the name alone is unclear |
| Categories | multi-select | closest matches to `product.categories` |
| Tags | multi-select | 3-5 specific tags from `product.tags`, plus the pricing tag for `product.pricing_model` |
| Description | short text | `product.description_short` (problem and outcome, concrete) |
| Introduction | Markdown | `product.description_long` and a bullet list of `product.key_features` |
| Logo | 1:1, PNG/JPEG, max 1 MB | `assets.logo_square` |
| Image | 16:9, PNG/JPEG, max 1 MB | `assets.screenshots[0]` |
| Plan | Free / Pro / Sponsor | Free |
| Publish date | date | `product.launch_date` if set |

## Steps
1. Search newtools.site for `product.name`. If listed, mark `live` and stop.
2. Open https://newtools.site/submit, sign in.
3. Fill the fields in order. Choose **Free**.
4. Add the reciprocal link to the user's site if approved, note the page.
5. Submit, screenshot to `.launchkit/evidence/newtools-site.png`.
6. `launchkit mark newtools-site submitted --note "free, reciprocal link on <page>"`

## Make the listing perform
- Their own guidance: a clear title with the use case, a concrete description of the user problem and result, 3-5 specific tags, and real screenshots. Generic text and auto-grabbed images get less attention.
- Set the publish date to the main launch day so this listing adds to the same spike.

## Gotchas
- Review time is stated two ways: "usually 24-48 hours" in the guidelines and "72 hours" on pricing. Expect up to 72h.
- Images over 1 MB are rejected. Compress first.
- Removing the reciprocal link later can get the listing pulled.

## After submitting
- Check the dashboard after 72 hours and mark `live` with the listing URL.
