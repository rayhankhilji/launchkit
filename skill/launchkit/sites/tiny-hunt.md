---
id: tiny-hunt
name: "Tiny Hunt"
url: https://tinyhunt.dev/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "free queue up to 84 days; launches daily at 8:00 UTC"
verified: true
last_checked: 2026-10-12
---

# Tiny Hunt

Daily launch board for small projects (run by DirEasy). Launches go live at 8:00 AM UTC. Free launches need a badge and a site DR of at least 10, and the queue can be long.

## Before you start
- Account needed: Google, GitHub, or email and password. Create one only if `submission.allow_account_creation` is true.
- Free requirements: site DR 10 or higher, and the Tiny Hunt square badge with a backlink on the site. Only use free if `launch_settings.add_badge_to_site` is true.
- Daily caps: 20 free, 10 Premium, 6 Premium Plus per day. Free can be scheduled up to 210 days ahead and may wait up to 84 days.
- Paid: Premium $9.90 per launch (skip queue), Premium Plus $12.90 (featured embeds, 14 days promoted, 7 days spotlight), SEO Growth $49 (review article), DR Booster $30 to $90. Ask before paying.
- Have `product.name`, `product.url`, `product.tagline`, `product.description_medium`, `product.categories`, `assets.logo_square`, `assets.screenshots` ready.

## Field map
Behind login; exact fields and order are unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Project name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Description | long text | `product.description_medium` |
| Categories | select (AI, Developer Tools, Productivity, Marketing, SEO, ...) | closest matches to `product.categories` |
| Pricing | select | map `product.pricing_model` |
| Logo | square image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Plan | Free / Premium / Premium Plus | Free unless approved |
| Launch date | date | first free date offered, or `product.launch_date` |

## Steps
1. Open https://tinyhunt.dev/submit (or **Submit Project**) and sign in.
2. Fill the fields and upload images.
3. Choose **Free Launch**, add the square badge to the site if allowed, and pick the date.
4. Submit. Screenshot to `.launchkit/evidence/tiny-hunt.png`.
5. `launchkit mark tiny-hunt submitted --note "free, launch <date> 8:00 UTC"`

## Make the listing perform
- Ranking uses upvotes and comments. Be ready at 8:00 UTC on launch day to share the page and post `copy.maker_comment`.
- The weekly top 5 go into the newsletter and the weekly top 1 gets an X post.
- Per the FAQ, the top 3 of the day get a dofollow link even without paying.

## Gotchas
- Sites under DR 10 are not accepted for the free plan.
- Removing the badge can cost the free listing its link.

## After submitting
- The dashboard shows the scheduled date. Return on launch day to reply to comments.
