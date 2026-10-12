---
id: pitchwall
name: "Pitchwall"
url: https://pitchwall.co/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "manual review; free launches wait at least 30 days"
verified: true
last_checked: 2026-10-12
---

# Pitchwall

Startup launch and feedback platform focused on AI, SaaS, open-source and other tech products (DR 70 per their pricing).
Each launch gets homepage time and a permanent product page with a dofollow link. Every submission is reviewed by hand.

## Before you start
- The submit page starts with a plan choice: **Free** (1 day on the homepage, at least a 30-day wait, dofollow link,
  newsletter and X mention not guaranteed), Pro $49 (2 days, 2-week wait), Premium $99 (2 days, pick your date).
- They accept beta and alpha products only with a clear landing page and working product. They reject agencies, service
  businesses, non-tech products and landing pages with nothing to try.
- The form fields appear after picking a plan and weren't visible without an account; the map below is unconfirmed.
- Assets: `assets.logo_square`, `assets.screenshots`.

## Field map (unconfirmed; check on the live form)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | one line | `product.tagline` |
| Description | text | `product.description_long` |
| Category | select | closest match to `product.categories[0]` (AI, SaaS, Developer tools...) |
| Pricing | select | `product.pricing_model` |
| Logo, images | images | `assets.logo_square`, `assets.screenshots` |
| Maker / email | text | `founder.name`, `submission.email` |

## Steps
1. Search https://pitchwall.co/ for `product.name`. If listed, mark `live`.
2. Open https://pitchwall.co/submit and click the **Free** plan.
3. Sign in or create the account it asks for, then fill the form.
4. Submit. Screenshot to `.launchkit/evidence/pitchwall.png`.
5. `launchkit mark pitchwall submitted --note "free, earliest launch 30+ days out"`

## Make the listing perform
- Free launches get one homepage day. Tell the user the date when it's assigned so they share it that day.
- Newsletter picks are based on usefulness and market relevance. A specific problem statement in the first sentence of
  the description helps more than a feature list.
- Show the working product: a screenshot of the real app first, not a marketing banner.

## Gotchas
- If `launch_date` is less than 30 days away, the free launch will land after it. That's fine; don't upgrade without approval.
- Service businesses get rejected. Don't submit an agency or consulting offer.

## After submitting
- Product page pattern: `https://pitchwall.co/product/<slug>`. Check the confirmation email for the date, mark `live` then.
