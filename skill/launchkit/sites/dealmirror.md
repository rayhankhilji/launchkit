---
id: dealmirror
name: "DealMirror"
url: https://dealmirror.com/product-deal-request/
category: Deals / LTD
mode: form
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: "unknown (admin approves vendor, then the deal)"
verified: true
last_checked: 2026-10-12
---

# DealMirror

Lifetime-deal marketplace for SaaS, AI tools, WordPress themes and plugins, and design assets. Vendors keep up to 70% per sale (minus PayPal fees and taxes). Buyers are freelancers, agency owners and growth marketers who expect steep one-time prices.

## Before you start
- Business decision: mark `needs_human` ("requires deal terms decision") unless the user opted in to an LTD and `product.deal_or_promo_code` describes it.
- Decide price tiers and code delivery with the user. DealMirror refunds buyers within 30 days (60 for Prime members), so the user carries refund risk.
- The first step is a short request form. Full product details go in a vendor account after admin approval.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `founder.name` |
| Email | email | `submission.email` |
| Website Link | URL | `product.url` |
| Product Description | textarea | `product.description_medium`, then one line on the proposed deal and `product.pricing_details` |

## Steps
1. Open https://dealmirror.com/product-deal-request/ (header link "Submit a deal").
2. Fill the four fields from the map.
3. Click **Submit Detail**. Screenshot the confirmation to `.launchkit/evidence/dealmirror.png`.
4. `launchkit mark dealmirror submitted --note "Deal request sent; admin approval then vendor account"`.

## Make the listing perform
- The site's "Our Top Picks" sidebar shows entry tiers around $29-$59. Plan the first tier in that range.
- Best fit categories: AI Tools, Marketing Software, SEO Tools, Lead Generation, WordPress plugins. Say which one in the description.
- Their sales events (Black Friday, Easter sale with 40% off lifetime plans) drive most traffic. Ask to be included in the next sitewide sale.
- Mention your support channel and update cadence. Their FAQ pushes buyers to "redeem, test, decide", so a fast reply in the first week cuts refunds.

## Gotchas
- After approval, you register as a vendor and submit the actual deal for a second approval.
- The 70% share is quoted after PayPal fees, so confirm with the admin how payouts are sent.

## After submitting
- Admin sends an approval email, then vendor login. Questions go to the contact address on https://dealmirror.com/how-vendorship-works/.
