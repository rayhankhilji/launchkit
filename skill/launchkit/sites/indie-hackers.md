---
id: indie-hackers
name: "Indie Hackers"
url: https://www.indiehackers.com/products/new
category: Launch Platform
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# Indie Hackers

Community of bootstrapped founders. Two parts: a product page in the Products Database (with self-reported revenue) and posts. Product updates compete daily on "The Build Board", which resets each day.

## Before you start
- Account needed (Sign in / Join). /products/new redirects to sign in, so form fields below are unconfirmed.
- The Products Database shows name, tagline, category, business model and monthly revenue (self-reported). Ask the user whether to show revenue.
- Read the community guidelines (/about). Pure ads get removed. Value-first posts (lessons, numbers, mistakes) do well; milestone posts ("first $1k MRR") do best.

## Field map
Product page (unconfirmed):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Tagline | short | `product.tagline` |
| Website | URL | `product.url` |
| Description | text | `product.description_medium` |
| Category | select | closest to `product.categories[0]` |
| Business model | select | `company.business_model` / `product.pricing_model` |
| Monthly revenue | number, public | only with the user's OK |
| Logo | image | `assets.logo_square` |

Post: title (specific, lesson or number-led) and body drafted from `copy.launch_post_story`.

## Steps
1. Draft both with `lk draft indie-hackers -`: product page fields and a post with a concrete title like "I launched X 30 days ago: 212 signups, what worked". Mark `drafted`.
2. Only if `allow_social_posting` is true and the user approved: sign in, add the product (**ADD YOUR PRODUCT**), then post an update via **SUBMIT AN UPDATE** linked to the product.
3. `launchkit mark indie-hackers submitted --listing-url <post url>`.

## Make the listing perform
- Updates linked to a product enter The Build Board, which ranks by votes until daily voting closes. Post early in the day (US time) to get a full day.
- Titles with real numbers and an honest lesson get read. Avoid "Check out my app".
- The user must reply to comments. Ending with a specific question invites discussion.
- Post milestones regularly (launch, first customer, revenue numbers). Each update is another chance on the board.

## Gotchas
- Repeated link drops without discussion read as spam and get removed.

## After submitting
- Reply to comments within the first few hours.
