---
id: flippa
name: "Flippa"
url: https://flippa.com/sell
category: Startup Database
mode: manual
pricing: "Paid (listing packages from $29; success fees from 3 to 5% and up by tier; brokerage $499 for 6 months)"
login: "Flippa account"
captcha: unknown
backlink_required: no
review_time: "unknown; listings are vetted before going live"
verified: true
last_checked: 2026-10-12
---

# Flippa

Marketplace for buying and selling online businesses: SaaS, ecommerce, content sites, apps, YouTube and social
channels, marketplaces, AI tools, plugins, and domains. Listing here means putting the business up for sale.
Manual mode: never start a listing for the user. Explain the process and let them decide.

## Before you start
- Only relevant if the user wants to sell the business or test buyer interest. Ask directly.
- Flippa's sell page starts with a URL (website, store, app, channel, or domain) and asks for the asset type.
- Buyers expect verified numbers: revenue and traffic connected via Stripe, Google Analytics, or similar.
- Brokerage needs consistent monthly profit and usually 12 months of trading history with financials.

## Field map
Prepare for the user:
| Item | Source |
|---|---|
| Asset URL | `product.url` |
| Asset type | SaaS, ecommerce, content, app, etc. from `company.business_model` |
| Title and summary | `product.tagline`, `product.description_long` |
| Revenue, profit, traffic | User must connect accounts; never enter estimates |
| Asking price | User decides |
| Screenshots | `assets.screenshots` |
| Reason for selling, tech stack, assets included | Ask the user |

## Steps
1. Tell the user what Flippa is and that listing is a sale offer, not a directory entry.
2. If they want to proceed, they open https://flippa.com/sell and enter the URL.
3. They pick a listing package on the pricing page (from $29) and connect revenue and analytics sources.
4. Mark `skipped` or `needs_human` with a note of what they chose.

## Make the listing perform
- Verified revenue and traffic integrations are what buyers filter on; unverified listings get little attention.
- Twelve months of clean P&L supports a higher multiple and qualifies for brokerage.
- A clear "reason for selling" and handover plan reduces buyer questions.

## Gotchas
- Fees vary by asking price and package. Read the current pricing page before quoting the user.
- Public listings can alert customers and competitors that the business is for sale.

## After submitting
- Nothing to automate. Record the user's decision in the queue note.
