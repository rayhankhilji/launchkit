---
id: aws-marketplace
name: "AWS Marketplace"
url: https://aws.amazon.com/partners/marketplace/
category: App Store / Marketplace
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "weeks; plan 45 days ahead of a launch"
verified: true
last_checked: 2026-10-12
---

# AWS Marketplace

Amazon's catalogue where enterprises buy software on their AWS bill, often against committed spend. Free to list; AWS takes a listing fee on sales (3% for SaaS public offers, tiered for private offers). Worth it for B2B SaaS that sells to mid-market or enterprise; not for consumer or early pre-revenue tools.

## Before you start
- The old Marketplace Management Portal now lives inside AWS Partner Central. The user signs in with the AWS account that will be seller of record.
- Seller registration: public company profile, tax interview, and for paid products a bank account (US banks or supported regions) and KYC. Must sell production-ready, publicly available software.
- For SaaS: integration with the AWS Marketplace Metering or Entitlement APIs and an SNS subscription for subscribe/unsubscribe events. This is engineering work.
- Logo, product description, highlights, EULA, support details, pricing dimensions.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product title | text | `product.name` |
| Short description | text | `product.description_short` |
| Long description | text | `product.description_long` |
| Highlights | up to 3 bullets | top 3 of `product.key_features` |
| Product categories | up to 3 | closest to `product.categories` |
| Search keywords | list | `product.tags` |
| Logo | PNG | `assets.logo_square` |
| Video / resources | URLs | `links.demo_video`, `links.docs` |
| Support information | text | `founder.email` / support page |
| Pricing model | contract, usage, contract + consumption, free | map `product.pricing_model`; free -> free; paid -> contract or usage per `product.pricing_details` |
| Fulfilment URL | URL | user's SaaS registration endpoint |
| EULA | standard or custom | AWS Standard Contract unless the user has their own |

Field list is from AWS docs; the Partner Central forms are behind login and were not seen directly.

## Steps
1. Manual. Don't register or create products.
2. Suggest it in the wrap-up only if `product.target_audience` is enterprise or mid-market and the user has revenue. Explain the metering integration and fees.
3. `launchkit mark aws-marketplace needs_human --note "needs seller registration + SaaS integration"`

## Make the listing perform
- Enterprise buyers search by category and use case; put the job-to-be-done words in the title area and highlights.
- Private offers are where most deals close. The listing exists to make procurement easy, so co-sell with the AWS Partner Network (ACE) once listed.
- A free trial offer increases top-of-funnel installs.

## Gotchas
- Pricing model changes need AWS approval and some can only happen every 90-120 days.
- You preview a limited listing URL and must approve it before it goes public.

## After submitting
- Watch the request log in Partner Central for "Action required". After approval, link the listing on the user's pricing page as "Buy on AWS".
