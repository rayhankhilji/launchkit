---
id: nick-launches
name: "Nick Launches"
url: https://nicklaunches.com/submit/
category: Launch Platform
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: yes
review_time: "manual review before the chosen launch week"
verified: true
last_checked: 2026-10-12
---

# Nick Launches

Weekly launch board run by one maker. You pick a launch week, the product sits on that week's board (78-116 launches a
week since July 2026) ranked by upvotes, then stays as a permanent page with a dofollow link. 800+ AI and 770+
Productivity products, so category pages are busy.

## Before you start
- Login: Google or email/password.
- **Free launches need the "Featured on Nick Launches" badge on the site to stay listed** (light or dark variant,
  244x56, from https://nicklaunches.com/badges/). Ask the user first. Paid plans make the badge optional.
- Their public readiness check needs no account: `POST https://nicklaunches.com/api/v1/launch-readiness/` with the URL
  returns badge status, duplicates and the next free weeks. Use it to confirm the badge before submitting.
- Assets: `assets.logo_square`, `assets.screenshots`.
- They also expose an MCP server that only creates drafts. Use the browser form here; the plan and week still need a human.

## Field map (browser form, prefilled from the URL)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product URL | URL, prefills the rest | `product.url` |
| Name | text | `product.name` |
| Tagline | one line | `product.tagline` |
| Description | text | `product.description_long` |
| Categories | up to 3 | best matches for `product.categories` (AI, Productivity, Developer Tools, Marketing...) |
| Pricing | free / freemium / paid | `product.pricing_model` (trial -> freemium if a free tier exists, else paid) |
| Twitter username | handle | from `links.twitter` |
| Target keyword | phrase | the search phrase buyers use, from `product.tags[0]` or `product.categories[0]` |
| Logo, screenshots | images | `assets.logo_square`, `assets.screenshots` (replace scraped ones if wrong) |
| Plan, launch week | picker | Free; earliest week on or after `product.launch_date` |

## Steps
1. Search the site for `product.name`. If listed, mark `live`.
2. If the user agreed, add the badge to the site footer, then run the readiness check above.
3. Open https://nicklaunches.com/submit/, sign in, paste `product.url`, review every prefilled field against the map.
4. Click through to the plan step (/submit/plan/), pick **Free** and the week, submit. Use "Save draft" if the user
   wants to choose the week themselves, and mark `needs_human`.
5. Screenshot to `.launchkit/evidence/nick-launches.png`; `launchkit mark nick-launches submitted --note "week <n>"`.

## Make the listing perform
- A week is a long window: the user can keep sharing the listing all week. Pick a week with no other big launch for them.
- Target keyword feeds the page's SEO. Use the plain phrase people search, not the product name.
- Post `copy.maker_comment` on launch day and reply to comments; free listings can top the weekly board.

## Gotchas
- Removing the badge later can delist a free launch.
- Paid plans exist (Pro and Ultimate); skip unless approved.

## After submitting
- Product page: `https://nicklaunches.com/products/<slug>/`. Check it at the start of the launch week, mark `live`.
