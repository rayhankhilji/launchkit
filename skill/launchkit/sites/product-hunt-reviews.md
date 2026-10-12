---
id: product-hunt-reviews
name: "Product Hunt Reviews"
url: https://www.producthunt.com/
category: Software Review Site
mode: form
pricing: Free
login: google           # PH sign-in: Google, X, LinkedIn, Apple, email (per sign-in dialog; unconfirmed list)
captcha: turnstile      # Cloudflare challenge on many PH pages for automated browsers
backlink_required: no
review_time: "instant (reviews appear as posted)"
verified: true
last_checked: 2026-10-12
---

# Product Hunt Reviews

Every Product Hunt product has a reviews page (`/products/<slug>/reviews`, live examples: Attio, Granola, Raycast). It's not a separate submission: the product page must exist first, then real users leave reviews. This guide is about setting that up, not about writing reviews.

## Before you start
- The product needs a Product Hunt product page. If the `product-hunt` launch isn't done or drafted, do that guide first; it creates the page.
- The user must be listed as a maker on the page to reply to reviews and see review notifications.
- Never post reviews from the user's or any made-up account. Only real customers review.

## Field map
No form. What to fill on the product page (maker settings, via "Edit product"; unconfirmed field names):

| Item | Fill with |
|---|---|
| Product name / tagline | `product.name` / `product.tagline_short` (PH tagline limit is 60 chars) |
| Description | `product.description_short` |
| Website | `product.url` |
| Topics | 3 from `product.categories` |
| Makers | `founder.name` (PH account) |
| Links | `links.twitter`, `links.github` |

## Steps
1. Open https://www.producthunt.com/ and search for `product.name`. If the page is missing, mark `skipped` with "needs PH product page first (see product-hunt)".
2. Open `https://www.producthunt.com/products/<slug>/reviews` and copy the URL into `.launchkit/` notes.
3. If signed in as the maker, check the page details match the profile and fix anything stale.
4. Draft a short ask for customers (2-3 sentences, first person, link to the reviews page) with `lk draft product-hunt-reviews -`.
5. Screenshot the reviews page to `.launchkit/evidence/product-hunt-reviews.png`. `launchkit mark product-hunt-reviews drafted --note "review ask drafted; page exists"`

## Make the listing perform
- Review count and rating show on the product page and in PH search; a few detailed reviews beat many one-liners.
- Ask after a good moment (a support fix, a feature shipped), not right at signup.
- Reply to every review as the maker, especially critical ones. PH can send review notifications to Slack.
- Link the reviews page from your changelog or app's feedback menu.

## Gotchas
- Don't ask for upvotes or reviews in bulk channels; PH treats vote/review rings as manipulation and can remove them.
- Cloudflare may block automated browsing; mark `needs_human` if so.

## After submitting
- Recheck the reviews page monthly and note the count with `launchkit mark product-hunt-reviews live --listing-url <reviews url>` once reviews appear.
