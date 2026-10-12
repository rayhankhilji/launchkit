---
id: microns-acquire-listing-to-sell
name: "Microns / Acquire (listing to sell)"
url: https://acquire.com/
category: Startup Database
mode: manual
pricing: "Paid (listing fee $25, $50, or $100 per month by asking price, plus 6 to 8% closing fee)"
login: "Acquire.com seller account"
captcha: unknown
backlink_required: no
review_time: "unknown; Acquire reviews listings before they go live"
verified: true
last_checked: 2026-10-12
---

# Microns / Acquire (listing to sell)

Acquire.com is a marketplace to sell startups to its buyer base (the site says 500k+ buyers). The public site
now carries Acquire branding; Microns is a separate, smaller marketplace and was not researched here. Listing
means offering the company for sale, so this is manual: explain it and let the user decide.

## Before you start
- Ask the user if they want to sell or test buyer interest. Do nothing otherwise.
- Seller pricing seen: under $250k asking price, $25/month plus 8% closing fee; $250k to $1M, $50/month plus 7%;
  over $1M, $100/month plus 6%.
- "Guided by Acquire" adds advisory support for profitable SaaS with $100k+ revenue.
- Buyers expect connected revenue data (Stripe, Paddle, or similar) and analytics.

## Field map
Prepare for the user:
| Item | Source |
|---|---|
| Startup name and URL | `product.name`, `product.url` |
| Business type | `company.business_model` |
| Short pitch | `product.tagline` |
| Description | `product.description_long` |
| Founded | `company.founded_year` |
| Team size | `company.team_size` |
| Revenue, profit, growth | User connects payment provider; no estimates |
| Asking price, reason for selling | User decides |

## Steps
1. Explain the fees and that the listing is visible to buyers.
2. If the user proceeds, they sign up at https://acquire.com/ as a seller.
3. They build the listing, connect revenue data, and set an asking price.
4. Mark `skipped` or `needs_human` with the user's decision.

## Make the listing perform
- Connected, verified revenue is what buyers screen on first.
- A clear, honest reason for selling and handover plan reduces back and forth.
- Profitable SaaS with $100k+ revenue can qualify for Guided by Acquire, which brings advisor help.

## Gotchas
- Monthly fees run until the listing is removed, plus a closing fee on sale.
- Listing publicly can signal to customers that the company may change hands.

## After submitting
- Nothing to automate. Record the user's decision.
