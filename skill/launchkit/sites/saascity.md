---
id: saascity
name: "SaaSCity"
url: https://saascity.io/saascity?submit=1
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "about 273 days (free queue), 24 hours (paid)"
verified: true
last_checked: 2026-10-12
---

# SaaSCity

An indie launch directory drawn as a pixel city: each product is a building, bigger and higher for paid tiers. Free listings exist but wait in a queue; paid tiers jump it. Its main value is a dofollow link and a little launch-week traffic.

## Before you start
- Account: email + password (min 6 chars) or Google at `/login`. Only create one if `submission.allow_account_creation` is true.
- Tiers on `/pricing` (one-time): **Free** $0 (dofollow link, map placement, upvotes, but you must embed the SaaSCity badge and the queue was estimated at about 273 days), **Quick Pass** $19.99 (no badge, live within 24h), **Premium** $39.99 (adds a launch blog post with 3 links), **Max** $99 (2x2 building, longer blog post, 30 days of billboard, ticker and homepage feature). Skip paid with budget 0.
- Badge: the free tier requires embedding the SaaSCity badge on the user's site. Ask if `launch_settings.add_badge_to_site` is "ask"; if declined and budget is 0, mark `skipped` ("badge required for free tier").
- Needs `assets.logo_square`, `product.tagline`, `product.description_medium`, `assets.screenshots`.

## Field map (submit form behind login; public description, not every field confirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Description | text | `product.description_medium` |
| Category | select | closest to `product.categories[0]` (AI, Developer Tools, Marketing, Productivity, Design, Analytics...) |
| Pricing | select | map `product.pricing_model`: free -> Free, freemium -> Freemium, paid -> Paid |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Launch date / tier | select | earliest free slot |

## Steps
1. Search saascity.io for `product.name`; if it has a building already, mark `live`.
2. Open https://saascity.io/saascity?submit=1 (or click **Submit my project**). Step 0 is the account panel: **Sign up** with `submission.email` and a generated password (6+ chars), leave the product-updates box unticked, click **Create account**. Use **Sign up with Google** instead if `submission.preferred_login` is google. Confirm the email if asked.
3. Continue to the project form and fill it per the map.
4. At the tier step pick **Free** ("Join the Queue") and add the badge to the user's site. Don't enter card details.
5. Submit, screenshot to `.launchkit/evidence/saascity.png`; `launchkit mark saascity submitted --note "free queue, about 273 days, badge required"`.

## Make the listing perform
- Launches are grouped by day and voted on. Share the listing link with the user's own audience on launch day; the leaderboard is upvote-driven.
- A clear tagline matters more than usual: the city view only shows the building and name until hovered.
- Pick a category with fewer projects. The sidebar shows counts (SaaS & B2B about 1,775, AI & ML about 392, Productivity about 251), so a niche category stands out more on the map.

## Gotchas
- The "Directory submissions, done for you, from $99" link is an upsell for a submission service. Skip it.
- Prices and tiers change often. Re-read `/pricing` before telling the user a number.

## After submitting
- The dashboard shows queue position and launch date. Tell the user the date so they can share it.
