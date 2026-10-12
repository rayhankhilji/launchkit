---
id: ai-depot
name: "AI Depot"
url: https://aidepot.co/submit/start
category: AI Directory
mode: form
pricing: Paid
login: none
captcha: unknown
backlink_required: no
review_time: "24 hours after payment"
verified: true
last_checked: 2026-10-12
---

# AI Depot

A small AI tools and startups directory. The **Submit Tool** link goes straight to a Stripe checkout: **$19.00**, "Get your startup approved on AI Depot within 24-hours" (seller name Kintu Labs). No free route was found.

## Before you start
- $19 needs the user's approval. Payment is `needs_human`.
- Stripe asks only for an email and card details. Product details are probably collected after payment (unconfirmed). Keep `product.name`, `product.url`, `product.description_short`, and `assets.logo_square` ready.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Email (Stripe) | email | `submission.email` |
| Card details, name, country | payment | user only, never the agent |
| Post-payment product form | unconfirmed | `product.name`, `product.url`, `product.description_short`, `product.categories[0]`, `assets.logo_square` |

## Steps
1. Ask the user if they want to pay $19 for AI Depot.
2. If yes, open https://aidepot.co/submit/start (the homepage "Submit Tool" button). It redirects to checkout.stripe.com.
3. Fill the email with `submission.email`, then hand the browser to the user for the card.
4. After payment, fill whatever product form appears with the profile values above and record the real fields for this guide.
5. `launchkit mark ai-depot needs_human --note '$19 Stripe checkout'`, then `submitted` once the user has paid and the form is done.

## Make the listing perform
- With a tiny directory like this, the value is mostly one more backlink and an indexed page. Keep the description plain and keyword-first (what it does, who for).

## Gotchas
- https://aidepot.co/submit is a 404. Use /submit/start.
- Every visit to /submit/start creates a new Stripe session. Don't reload it in a loop.

## After submitting
- Approval is promised within 24 hours. Search aidepot.co for `product.name` the next day.
