---
id: dailypings
name: "DailyPings"
url: https://dailypings.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: optional
review_time: "free: once the badge is detected; Premium: instant"
verified: true
last_checked: 2026-10-12
---

# DailyPings

Small launch directory (Ahrefs DR 63 per the site) with a permanent page per listing, voting and a Monday newsletter. No queue and no launch day.

## Before you start
- Plans (https://dailypings.com/pricing): **Free with badge $0**: listed once their badge is verified on your homepage; dofollow while the badge stays up; 24 hours in "Newly launched"; checked daily, remove it and you're unfeatured. **Premium $19 one-time**: live instantly, no badge, permanent dofollow, 7 days in "Newly launched", weekly newsletter.
- Free needs the badge, so check `launch_settings.add_badge_to_site`. If "no", mark `skipped` ("free tier requires badge").
- Login: /submit redirects to /sign-in. Method not confirmed.

## Field map
Their "How it works": paste your URL, they pre-fill name, tagline and thumbnail, you edit, then pick a tier. Remaining fields are unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| URL | URL | `product.url` |
| Name (pre-filled) | text | check, replace with `product.name` |
| Tagline (pre-filled) | short | `product.tagline` |
| Thumbnail (pre-filled) | image | replace with `assets.og_image` or first screenshot if the scrape is poor |
| Description / FAQ | text | `product.description_medium`, `copy.faq` |
| Tier | Free with badge / Premium | **Free with badge** unless approved |

## Steps
1. Search dailypings.com/browse for `product.name`. If listed, mark `live`.
2. Open https://dailypings.com/submit?tier=free_with_badge, sign in.
3. Paste the URL, fix the pre-filled fields, add description and FAQ.
4. Copy the badge snippet. The user (or the agent, if it manages the site and the user agreed) adds it to the homepage.
5. `launchkit mark dailypings submitted --note "goes live after badge detected"`.

## Make the listing perform
- The page includes a description and FAQ "written to be quoted". Fill the FAQ with real questions from `copy.faq`: that content is what search and AI answers pick up.
- Votes affect ordering. Share the listing with the user's audience on day one while it's in "Newly launched".

## Gotchas
- Removing the badge later unfeatures the listing and drops the dofollow.

## After submitting
- Recheck after the badge is added; the listing should go live within a day.
