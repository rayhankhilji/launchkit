---
id: microlaunch
name: "Microlaunch"
url: https://microlaunch.net/
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Microlaunch

Launch platform where products stay in a monthly leaderboard (about 140 products in October 2026). Visitors rate the idea and the product, and leave "roasts" (honest feedback). Good for indie makers who want feedback, not just traffic.

## Before you start
- The homepage has **New Launch** and **Signup** buttons; the launch form is behind login. Login method not confirmed.
- Paid packs (https://microlaunch.net/premium): **Launch Pro $49** (discounted to $39 when we checked): pick your launch date, 2x boosts, Product of the Day spot, DR64+ dofollow backlinks, verified reviews and badge, deals marketplace. **Launch Plus $99** (discounted to $79): plus extra SEO pages, 3 automatic boosts, mention on X and a Reddit post.
- A free launch path was not visible on public pages. If the form only offers paid packs, mark `needs_human` with the prices.
- Assets: `assets.logo_square`, `assets.screenshots`.

## Field map
Unconfirmed (form behind login). Listings show: name, tagline, category, product type (Web App, SaaS, Desktop App...), idea and product ratings, roasts, maker.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website | URL | `product.url` |
| Tagline | short | `product.tagline` |
| Description | text | `product.description_medium` |
| Category | select (Productivity Tools, AI & Assistants, Marketing & Growth, Analytics & Data, Payments & Banking...) | closest to `product.categories[0]` |
| Type | select (Web App, SaaS, Desktop App, Mobile...) | from `product.platforms` |
| Logo / images | uploads | `assets.logo_square`, `assets.screenshots` |
| Deal | optional | `product.deal_or_promo_code` |
| Launch pack | free / Pro / Plus | free if offered, else stop |

## Steps
1. Search microlaunch.net for `product.name`. If listed, mark `live`.
2. Click **Signup**, then **New Launch**. Fill the form.
3. If a free option exists, take it and submit. If not, screenshot the packs and mark `needs_human`.
4. `launchkit mark microlaunch submitted --note "<pack>, launch month <month>"`.

## Make the listing perform
- Ranking runs over the whole month (leaderboard by month and week, split into Business and Consumer). Ask for honest ratings and roasts across the month, not one spike.
- Reply to every roast on the listing. Engaged makers rank and convert better.
- Major feature releases can be relaunched later.

## Gotchas
- Discount codes on the premium page change often. Never apply paid packs without approval.

## After submitting
- Check the monthly leaderboard weekly and pass roasts to the user as product feedback.
