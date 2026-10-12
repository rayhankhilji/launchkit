---
id: topai-tools
name: "TopAI.tools"
url: https://topai.tools/submit
category: AI Directory
mode: form
pricing: Paid
login: unknown          # header has SIGN IN; checkout goes straight to Stripe
captcha: none
backlink_required: no
review_time: "48 hours (Fast Track)"
verified: true
last_checked: 2026-10-12
---

# TopAI.tools

Large AI tools discovery site (claims 3m+ monthly page views) with categories, use cases, deals and a Top 100 list.
There is no free submission: both options are one-time payments.

## Before you start
- **Fast Track** $47 one-time (live within 48 hours, "Just landed" homepage section, permanent listing, free edits).
  **Featured Listing** $229 one-time (featured 7 days, boosted search, top category spots).
- At `launch_settings.budget_usd` below 47, mark `skipped` ("paid only, $47 min").
- If the user approves the spend, mark `needs_human` and let them pay. **SUBMIT NOW** goes to a Stripe checkout
  (buy.stripe.com); tool details are collected after payment (unconfirmed).
- Rejected tools get an automatic refund.

## Field map (collected after payment, unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Email (Stripe) | email | `submission.email` |
| Tool name | text | `product.name` |
| URL | URL | `product.url` |
| Short description | short text | `product.tagline` |
| Description | long text | `product.description_long` |
| Category / use cases | select | closest to `product.categories`, plus `product.use_cases` |
| Pricing | select | `product.pricing_model` |
| Logo | upload | `assets.logo_square` |

## Steps
1. Search topai.tools for `product.name`. If listed, use **Update Tool** in the footer for edits and mark `live`.
2. Only with an approved budget: click **SUBMIT NOW** under Fast Track, hand checkout to the user (`needs_human`).
3. After payment, fill the details form with the field map. `launchkit mark topai-tools submitted --note "Fast Track paid, live in 48h"`.

## Make the listing perform
- The site sells itself on matching users to the right tool, so use-case and category fields drive placement. Fill all of them.
- The **Verified** badge can't be bought. Email hello@topai.tools after listing to ask for a hands-on review; it needs
  accurate pricing and an actively maintained product.
- Featured ($229) only lasts 7 days. Time it with a launch week if the user ever buys it.

## After submitting
- Tools are never removed unless the owner asks or they break the Terms. Edits are free later.
