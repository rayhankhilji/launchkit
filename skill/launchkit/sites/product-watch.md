---
id: product-watch
name: "Product Watch"
url: https://productwatch.io/
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: optional
review_time: "free: 30-day queue, or launch-day slot with the badge"
verified: true
last_checked: 2026-10-12
---

# Product Watch

Community product launch platform with daily, monthly and yearly leaderboards, upvotes, comments and award winners.
Every product gets a permanent page with a dofollow link from a DR 72 domain, free tier included.

## Before you start
- Free: 30-day queue. **Embedding the Product Watch badge skips the queue** and gets a featured spot on launch day.
  Ask the user about the badge.
- Priority Pass (one-time, price shown only in checkout): instant launch, top featured spot, 5-upvote head start, 2x vote
  multiplier, daily and weekly newsletter. Promoted plans are custom via email. Skip with budget 0.
- Use "Submit your product" in the header; it asks you to sign in first. Login method wasn't visible without a browser
  session.
- Assets: `assets.logo_square`, `assets.screenshots`, `links.demo_video` (they support a YouTube link).

## Field map (from listing data; form fields unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Tagline | one line | `product.tagline` |
| Website link | URL | `product.url` |
| Description | text | `product.description_long` |
| Categories / tags | multi-select | from AI, Productivity, Web App, SaaS, Dev Tools, Marketing, Design Tools, API... mapped from `product.categories` |
| Logo, gallery | images | `assets.logo_square`, `assets.screenshots` |
| YouTube video | URL | `links.demo_video` if it's YouTube |
| Social links | URLs | `links.twitter`, `links.linkedin` |
| Launch date | date | earliest free date on or after `product.launch_date` |

## Steps
1. Search https://productwatch.io/ for `product.name`. If listed, mark `live`.
2. If the user agreed, add the badge to the site (code is in the submit flow and /pricing).
3. Click **Submit your product**, sign in, fill the form from the map, choose the free option and a launch date.
4. Screenshot to `.launchkit/evidence/product-watch.png`, then
   `launchkit mark product-watch submitted --note "free, launch <date>"`.

## Make the listing perform
- Ranking uses upvotes, engagement, recency and relevance. Launches open at 09:00 UTC; the user should share the link and
  reply to comments in the first hours.
- Paid Priority Pass launches start with extra votes, so a free launch rarely wins the day. Aim for the category page
  and the permanent link, and set expectations with the user.
- Add the demo video: product pages with video stand out in the feed.

## Gotchas
- Without the badge, the free launch lands 30 days later. Fine if `launch_date` is far out.

## After submitting
- Product page: `https://productwatch.io/products/<slug>`. Check on launch day, mark `live`.
