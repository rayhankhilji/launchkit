---
id: startup-ranking
name: "Startup Ranking"
url: https://www.startupranking.com/startup/create/url-validation
category: Startup Database
mode: form
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "60-80 days free, 24 hours paid"
verified: true
last_checked: 2026-10-12
---

# Startup Ranking

Startup Ranking lists 80,000+ startups by country and ranks them with an "SR Score" built from web presence (links, SEO, traffic) and social presence (Facebook and X engagement). A free listing is slow to approve but gives a profile page and a country rank.

## Before you start
- Login required: "Login with Google", Facebook, LinkedIn or X (they read name, email and picture). Use `submission.preferred_login` when it is one of these.
- Needs `product.url`, `product.tagline`, `product.description_medium`, `assets.logo_square`, `company.country`, `links.twitter`. Their FAQ says the X handle must be exact and any Facebook page must be public, or social scores stay at zero.
- Ask the user before buying "SR Faster Approval" ($99, approval within 24 hours).

## Field map
The create flow starts with a URL check; later steps are behind login and unconfirmed, but the public profile layout shows these fields:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website URL (validation step) | URL | `product.url` (bare domain, no tracking params) |
| Startup name | text | `product.name` |
| One-liner / tagline | short text | `product.tagline_short` |
| Description | text | `product.description_medium` |
| Logo | image | `assets.logo_square` |
| Country / city | select | `company.country`, `company.city` |
| Founded | year | `company.founded_year` |
| Category / tags | select | closest to `product.categories[0]`, tags from `product.tags` |
| Twitter / X | handle | handle from `links.twitter` |
| Facebook | URL | the user's public page if one exists |
| Founders / team | names | `founder.name`, `founder.role`, `founder.linkedin` |

## Steps
1. Open https://www.startupranking.com/startup/create/url-validation. You'll be sent to the login page; click **Login with Google** (or the matching provider).
2. Enter `product.url` and continue. If the startup already exists, use **Edit** on its profile to claim it instead of creating a duplicate.
3. Fill each step from the map. Skip "SR Booster", "SR AutoRankr" and advertising offers.
4. On the approval step choose the free option unless the user approved $99.
5. Submit, screenshot to `.launchkit/evidence/startup-ranking.png`.
6. `launchkit mark startup-ranking submitted --note "free approval 60-80 days"`

## Make the listing perform
- SR Score is web plus social. Linking the exact X account and a public Facebook page is the cheapest way to raise it; backlinks and traffic do the rest.
- Rank is shown per country, so the right `company.country` matters more than the global rank.
- Fill every profile field; incomplete profiles are what their FAQ blames for slow approvals.

## Gotchas
- The submitted URL is the key: changing domains later means a new profile.
- Paid upsells are pushed throughout (Faster Approval $99, SR Booster directory submissions). None are needed.

## After submitting
- Check the dashboard for approval status. After approval, the profile shows SR Score updates weekly.
