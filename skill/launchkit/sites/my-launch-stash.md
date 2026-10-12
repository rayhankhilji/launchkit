---
id: my-launch-stash
name: "My Launch Stash"
url: https://mylaunchstash.com/get-started
category: Launch Platform
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# My Launch Stash

A product launch directory for SaaS and app launches, built on the same template (and by the same people) as
LaunchClash. There's no weekly leaderboard here, just Latest, Explore, category pages and a paid "Featured Products" row.
Low traffic; submit for the listing and backlink, don't expect launch-day users.

## Before you start
- Login is **Google only** ("Log in with Google" on /get-started and /signup).
- Have `assets.logo_square` and one screenshot ready.
- The form sits behind login, so the field list is inferred from the public pages and the LaunchClash twin.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | one line | `product.tagline` |
| Description | long text | `product.description_long` |
| Categories | multi-select | from their list (AI Assistants, Analytics & Data, Dev Tools, Launch Platforms, Marketing, No Code & Low Code, Productivity & Management, SEO, Software, Web Development...) mapped from `product.categories` |
| Pricing | select | `product.pricing_model`: free -> Free, freemium -> Freemium, paid -> Paid, trial -> Free trial |
| Logo | image | `assets.logo_square` |
| Image | image | `assets.screenshots[0]` |

## Steps
1. Search https://mylaunchstash.com/ for `product.name`. If listed, mark `live` and stop.
2. Open https://mylaunchstash.com/get-started and click **Log in with Google**.
3. Fill the fields from the map. Pick the free plan if a plan step shows up.
4. Submit and screenshot to `.launchkit/evidence/my-launch-stash.png`.
5. `launchkit mark my-launch-stash submitted --note "<confirmation text>"`

## Make the listing perform
- Featured cards on the homepage show the full description sentence, so open `description_long` with the clearest
  one-sentence summary of what the product does.
- Choose the most specific category. "Software" and "Productivity & Management" are crowded catch-alls.
- If the user is doing LaunchClash too, use the same account and keep the copy consistent but don't paste the identical
  description; vary the first line so the two pages aren't duplicates.

## Gotchas
- The header ad is for a paid submission service, not part of the listing flow.
- Featured placement is paid; price isn't shown publicly. Skip with budget 0.

## After submitting
- Listing URL pattern: `https://mylaunchstash.com/product/<slug>`. Check it a few days later and mark `live`.
