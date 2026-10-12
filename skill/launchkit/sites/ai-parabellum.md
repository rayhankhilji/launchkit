---
id: ai-parabellum
name: "AI Parabellum"
url: https://aiparabellum.com/submit-your-ai-tool/
category: AI Directory
mode: form
pricing: Paid
login: unknown
captcha: turnstile
backlink_required: no
review_time: "24 hours"
verified: true
last_checked: 2026-10-12
---

# AI Parabellum

An AI tools directory where each listing is a dedicated, indexed article page. Submission is **paid only** on 2026-10-12. No free option.

## Before you start
- Plans (one-time, promo prices):
  - Basic listing: $39 (list $99). Listed within 24 hours, dedicated indexed article page.
  - Featured listing: $89 (list $199). Featured on every page for 30 days, newsletter mention, verified badge.
- Payment is `needs_human`. Refund if not approved. Listings are permanent.
- Checkout runs on https://submit.aiparabellum.com/login.html, which showed a Cloudflare challenge. Hand it to the user.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your AI tool URL | URL | `product.url` |
| Plan | button | Basic unless the user picked Featured |
| Checkout and product details | unconfirmed, behind Cloudflare | `product.name`, `product.description_medium`, `product.categories[0]`, `assets.logo_square`, `submission.email` |

## Steps
1. Get approval for $39 or $89.
2. Open https://aiparabellum.com/submit-your-ai-tool/ and enter `product.url`.
3. Pick the plan. It moves to submit.aiparabellum.com. If a Cloudflare check appears, stop and hand off.
4. The user finishes login and payment. Then fill product details from the profile.
5. `launchkit mark ai-parabellum needs_human --note "paid, Cloudflare on checkout"`

## Make the listing perform
- Each listing is written as an article, so give them a solid `product.description_long` with features and use cases. Longer, specific pages rank better.
- Featured adds sitewide placement for 30 days and a newsletter slot. Worth it only around a launch date.

## Gotchas
- Not allowed: adult, explicit or NSFW tools, and AI tool directories.
- Our data said Free/Paid. Only paid plans were shown.

## After submitting
- Live within 24 hours of approval. Search aiparabellum.com for `product.name`.
