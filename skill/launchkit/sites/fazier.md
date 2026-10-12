---
id: fazier
name: "Fazier"
url: https://fazier.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: yes
review_time: "free: reviewed and listed within 30 days; paid: publish now or schedule"
verified: true
last_checked: 2026-10-12
---

# Fazier

Product Hunt style daily launch site run by Falak Digital, with daily and monthly leaderboards. Easy free listing if the user is willing to put a Fazier badge on their homepage or footer.

## Before you start
- Plans on https://fazier.com/submit: **Basic (free)**: reviewed and listed within 30 days, homepage feature only "if selected", and **a backlink to Fazier on your homepage or footer is required**. **Lite $29** (one-time, publish now or schedule, no backlink needed, high-authority backlink for top 3 daily). **Premium $49** (15 days promotion, guaranteed DR 83+ backlink). **Super $99** (pinned on the homepage 15 days). Prices were discounted on the day we checked.
- Free tier needs the badge, so check `launch_settings.add_badge_to_site`. If it's "ask", ask the user before submitting; if "no", mark `skipped` ("free tier requires badge").
- Assets: `assets.logo_square`, `assets.screenshots`, `links.demo_video` if any.
- Login: Sign In / Join modal on the site. Provider list wasn't visible without opening it; use `submission.preferred_login`.

## Field map
The launch form opens after sign in, so field names below are the typical Fazier form and are unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short (about 60 chars) | `product.tagline` |
| Description | text | `product.description_medium` |
| Category / topics | select | closest to `product.categories[0]` |
| Pricing | select | map `product.pricing_model` |
| Logo | square image | `assets.logo_square` |
| Gallery | images | `assets.screenshots` |
| Launch date | date (paid tiers only) | leave default on the free tier |
| Plan | Basic / Lite / Premium / Super | **Basic (free)** unless the user approved spend |

## Steps
1. Search fazier.com for `product.name`. If it's listed, mark `live` and stop.
2. Open https://fazier.com/submit, click **Submit** under Basic (Free with embed badge). Sign in.
3. Fill the form. Copy the embed badge code Fazier shows and give it to the user (or add it if the agent manages their site and the user agreed).
4. Submit, screenshot to `.launchkit/evidence/fazier.png`.
5. `launchkit mark fazier submitted --note "free; up to 30 days review; badge required"`.

## Make the listing perform
- Their Launch Guide (Notion, linked in the header) and Help Center explain ranking. Top 3 of the day get the badge and the backlink, so the user should share the launch on launch day.
- The badge must stay on the page during review; reviewers check it.
- Monthly leaderboard at /leaderboard/monthly gives a second chance at visibility.

## Gotchas
- Upsells (Product Hunt checklist, 100+ directory service) are pushed on the pricing page. Skip them.

## After submitting
- Listings live at `https://fazier.com/launches/<domain>`. Check back within 30 days.
