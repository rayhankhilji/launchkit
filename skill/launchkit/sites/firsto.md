---
id: firsto
name: "Firsto"
url: https://firsto.co/projects/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "queued; free launch date can be months out"
verified: true
last_checked: 2026-10-12
---

# Firsto

Daily launch platform for indie products (Open-Launch based, DR around 59). Launches go live 08:00 UTC each day. Free launches are permanent but the queue is long (up to about 180 days) and only the daily top 3 get a dofollow link.

## Before you start
- Sign in at https://firsto.co/sign-in (method not visible logged out; Open-Launch sites usually offer Google, GitHub and email).
- 5 free slots per day. Check the date picker early and tell the user how far out the first free date is.
- The dofollow link for a top-3 finish requires the Firsto badge on the user's site.

## Field map (Open-Launch form, behind login; unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Website URL | URL | `product.url` |
| Short description / tagline | short | `product.tagline` |
| Description | long text | `product.description_long` |
| Categories | up to 3 | closest to `product.categories` |
| Tech stack | tags | technologies from `product.tags` (skip if none) |
| Platforms | multi-select | `product.platforms` |
| Pricing | Free / Freemium / Paid | `product.pricing_model` |
| GitHub / X URLs | optional | `product.repo_url`, `links.twitter` |
| Logo | image | `assets.logo_square` |
| Product image | image | `assets.screenshots[0]` |
| Launch plan + date | Free / Premium / Pro | Free, earliest free date |

## Steps
1. Search https://firsto.co for `product.name`; if found, mark `live` and stop.
2. Open https://firsto.co/projects/submit, sign in.
3. Fill the form, choose **Free Launch**, pick the first open date on or after `product.launch_date`.
4. Submit, screenshot to `.launchkit/evidence/firsto.png`, `launchkit mark firsto submitted --note "free launch <date>"`.

## Make the listing perform
- Ranking is daily upvotes. Plan the user's own social post for the Firsto launch day at 08:00 UTC and link straight to the Firsto page.
- Add the badge before launch day so a top-3 finish turns into a dofollow link.
- First comment: `copy.maker_comment`, plus one specific question asking for feedback.

## Gotchas
- Premium ($19.90, launch within 24h, guaranteed dofollow) and Pro ($59.90, 2 weeks on the homepage plus a mini review) skip the queue. Paid reviews run $199 to $399. Skip unless approved and in budget.
- If the free date is months away, still book it; it costs nothing.

## After submitting
- Project page `https://firsto.co/projects/<slug>`. Mark `live` on launch day.
