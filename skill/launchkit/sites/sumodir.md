---
id: sumodir
name: "SumoDir"
url: https://sumodir.com/submit
category: Startup Database
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: yes
review_time: "up to 14 days free, instant paid"
verified: true
last_checked: 2026-10-12
---

# SumoDir

SumoDir is a business directory for startups, SaaS, apps and local businesses that trades listings for dofollow backlinks. The submit flow has three steps: Submission Type, Details, Publish.

## Before you start
- Pick a plan with the user:
  - **Free** $0: requires a "Featured on SumoDir" badge on the homepage or footer, reviewed within about 14 days, 1 dofollow link, description up to 1,500 characters. The site scans for the badge and deletes listings if it is removed.
  - **Premium** $15 one-time: instant listing, 3 dofollow links, up to 2,500 characters, no badge.
  - **Review Article** $49: a written review post.
- Free needs the badge code added to the user's site:
  `<a href="https://sumodir.com" target="_blank" rel="dofollow"><img src="https://sumodir.com/badge.png" alt="Featured on SumoDir" width="200" height="54" /></a>`
  Only add it with the user's consent.
- No crypto, adult or gambling sites.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Step 1: plan | Free / Premium / Review | Free unless spend approved |
| Step 1: website URL + **Verify** | URL | `product.url` (exact homepage where the badge sits) |
| Step 2: details (name, description, category, tags, logo) | unconfirmed; description 1,500 chars free / 2,500 premium | `product.name`, `product.description_long` trimmed to the limit, closest category to `product.categories[0]`, `product.tags`, `assets.logo_square` |
| Step 3: publish | - | review and confirm |

## Steps
1. For Free: add the badge snippet to the homepage or footer, deploy, confirm it renders.
2. Open https://sumodir.com/submit. Step 1 shows "Choose submission type"; keep **Free Listing** or click **Switch to Premium Listing** if approved.
3. Paste `product.url` into the box and click **Verify**. It fails if the badge is missing.
4. Step 2 Details: fill from the map. If a login or CAPTCHA appears, follow `submission.preferred_login` or mark `needs_human`.
5. Step 3 Publish. Screenshot to `.launchkit/evidence/sumodir.png`.
6. `launchkit mark sumodir submitted --note "free: up to 14 days"`

## Make the listing perform
- Use most of the character limit with concrete use cases and feature names; SumoDir pages are built to rank in search, so keyword-rich, specific text is what brings traffic.
- Pick the narrowest matching category; the 30+ category pages are the main browse path.
- The $30 / 30-day homepage promotion slot was sold out on 2026-10-12.

## Gotchas
- The badge must stay up. The site rescans.
- Premium copy is AI-written by them; review it after publish.

## After submitting
- Check the category page or site search for the listing after approval.
