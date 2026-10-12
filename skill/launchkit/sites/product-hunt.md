---
id: product-hunt
name: "Product Hunt"
url: https://www.producthunt.com/posts/new
category: Launch Platform
mode: form
pricing: Free
login: unknown
captcha: turnstile
backlink_required: no
review_time: "scheduled; launches start 12:01 AM Pacific"
verified: false
last_checked: 2026-10-12
---

# Product Hunt

The largest launch platform. A good launch day brings real traffic and a durable badge. Every Product Hunt page returned a Cloudflare check to our research browser on 2026-10-12, so the form fields below come from Product Hunt's long-standing launch flow and are **unconfirmed**. Read each label on the live form.

## Before you start
- Per launchkit rules, **prepare the draft only. The user picks the date and clicks schedule.** Don't launch on their behalf.
- Login: the user's own personal account (PH uses social sign in; providers not confirmed). A product posted by a brand-new account gets less reach; an account with some activity helps.
- Assets: square thumbnail (240x240, GIF allowed), gallery images 1270x760 (at least 2), optional YouTube video (`links.demo_video`).
- The founder should be listed as a maker. Hunters are optional; anyone can self-hunt.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product URL | URL | `product.url` |
| Name | 40 chars | `product.name` |
| Tagline | 60 chars | `product.tagline` (cut to 60, no product name, no emoji) |
| Description | 500 chars | `product.description_short` or trimmed `description_medium` |
| Launch tags / topics | up to 3 | closest PH topics to `product.categories` |
| Links (App Store, Play, etc.) | URLs | store links if `product.platforms` has them |
| X account | handle | `links.twitter` |
| Thumbnail | 240x240 | `assets.logo_square` |
| Gallery | 1270x760, 2+ | `assets.screenshots` resized |
| Video | YouTube URL | `links.demo_video` |
| Makers | PH users | the founder, co-founders |
| Shoutouts | other PH products | tools the product is built with, optional |
| First comment (maker comment) | text | `copy.maker_comment` |
| Pricing | free / free options / paid | map `product.pricing_model`: free -> Free, freemium/trial -> Free options, paid -> Paid |
| Promo / offer | optional | `product.deal_or_promo_code` |
| Launch date | date picker | **leave to the user** |

## Steps
1. Search producthunt.com for `product.name`. If a page exists, mark `live` and stop; relaunch rules apply.
2. Have the user sign in (the Cloudflare check may need a human).
3. Open https://www.producthunt.com/posts/new, enter the URL, fill every field above, save as draft.
4. Stop before scheduling. Mark `needs_human` with "draft ready; pick date and schedule".
5. After the user schedules: `launchkit mark product-hunt submitted --note "scheduled <date>"`.

## Make the listing perform
- Days reset at 12:01 AM Pacific. Launch then to get the full 24 hours. Tuesday to Thursday has the most traffic and the most competition; weekends are quieter and easier to rank.
- Featuring is editorial: PH curates which launches appear on the homepage. Clear tagline, real gallery images (not just logos) and an active maker matter more than raw upvotes.
- First comment: who you are, why you built it, what's different, an ask for specific feedback. Post it right after launch.
- Tell supporters the product is live and ask them to check it out and comment. Don't ask for upvotes directly or share direct upvote links; PH penalises vote solicitation and vote rings.
- Reply to every comment through the day.

## Gotchas
- Launches can't be moved freely once live. Double-check the URL and name before scheduling.
- Paid "Launch" upsells and promoted placements exist. Skip them with budget 0.

## After submitting
- On the day, track rank and comments. Top 5 of the day earns a badge for the website.
