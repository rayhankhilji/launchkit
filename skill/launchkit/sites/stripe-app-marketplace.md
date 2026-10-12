---
id: stripe-app-marketplace
name: "Stripe App Marketplace"
url: https://docs.stripe.com/stripe-apps/publish-app
category: App Store / Marketplace
mode: manual
pricing: Free
login: email           # Stripe account
captcha: none
backlink_required: no
review_time: "about 4 business days"
verified: true
last_checked: 2026-10-12
---

# Stripe App Marketplace

Apps that run inside the Stripe Dashboard or connect to Stripe accounts (marketplace.stripe.com). Relevant if the product works with Stripe data: billing, accounting, CRM, support, analytics. Listing is free.

## Before you start
- Artifact: a Stripe App built with the Stripe CLI (`stripe apps`), `distribution_type` set to public, permissions granted with explanations, no localhost redirect URIs, and a Live mode public install URL.
- The business can't be on Stripe's prohibited and restricted list.
- Assets: square 1:1 logo matching the manifest icon, three key-feature images (PNG or JPG, max 10 MB each) showing the app in the Stripe Dashboard with no real customer data, privacy policy URL, test credentials and a screen recording of complex flows.

## Field map (Write your listing)

| Field | Limit / format | Fill with |
|---|---|---|
| Name | 35 chars, no "Stripe", "app", "free", "paid"; same as stripe-app.json | `product.name` |
| Logo | square 1:1 | `assets.logo_square` |
| Built by | 80 chars | `company.legal_name` |
| Category | dropdown (Stripe may change it) | closest to `product.categories[0]`, e.g. Support, Sales, Accounting |
| Subtitle | 80 chars | `product.tagline` |
| Works with | from manifest | Stripe objects the app uses |
| Key features (x3) | title 80 chars + description + image | 1: core value, 2-3: main use cases from `product.use_cases` |
| Pricing | Free / Free trial available / paid options | map `product.pricing_model`, no hidden fees |
| Headquarters | country | `company.country` |
| Languages | English required | English |
| Privacy policy / Terms | URL | privacy URL, terms URL |
| Support | email / URL | `founder.email` |
| Testing instructions + credentials | text | admin-level test login, steps incl. onboarding |

## Steps
1. Manual mode. Don't submit. Suggest it only if the product integrates with Stripe.
2. If the user wants help: they run `stripe apps set distribution public`, upload the version, and select it on the Apps page in the Dashboard.
3. Draft the name, subtitle, three key features and testing notes for them.
4. They submit for review, wait about 4 business days, then click **Publish** after approval.
5. `launchkit mark stripe-app-marketplace needs_human --note "Stripe App, user submits from Dashboard"`

## Make the listing perform
- The first key feature must state the main problem solved for Stripe users; Stripe requires this order.
- Use the Stripe object names users know (invoices, subscriptions, customers) in the subtitle.
- No jargon or hyperbole; Stripe edits listings that oversell.
- After publishing, share install links (Create install links doc) on the product site and in onboarding emails.

## Gotchas
- Any change to the app or listing needs a new review.
- Screenshots of a test-mode app or with real customer data get rejected.

## After submitting
- Stripe may email listing change requests before you can publish.
