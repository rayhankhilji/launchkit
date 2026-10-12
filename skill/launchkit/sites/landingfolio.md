---
id: landingfolio
name: "Landingfolio"
url: https://www.landingfolio.com/submit
category: Design Gallery
mode: form
pricing: Paid
login: email           # Landingfolio account with Pro membership
captcha: unknown
backlink_required: no
review_time: unknown (email on approval)
verified: true
last_checked: 2026-10-12
---

# Landingfolio

A landing page and component inspiration library (about 960 sites, 800 sections) used by designers and developers. Submitting is a Pro member perk now, so it costs money even though there's no per-entry fee.

## Before you start
- Requires Pro: $49/year or $59 lifetime (30-day refund). With `launch_settings.budget_usd` below 49, mark `needs_human` with "Landingfolio: submissions need Pro ($49/yr)" and stop.
- A curator accepts or rejects every page; most are rejected.
- What gets a yes (from the submit page): a live page for a real product, strong typography, colour and layout, loads fast and works on mobile. No template demos, placeholder copy, or broken pages.

## Field map
The submit form is behind Pro login. From the public "How it works" section:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| URL | URL | `product.url` (they screenshot it automatically) |
| Other fields | unconfirmed | if asked: `product.name`, category matching `product.categories[0]` |

## Steps
1. Search landingfolio.com (cmd+K) for `product.name`. If listed, mark `live` and stop.
2. Get the user's approval for Pro. If not, mark `needs_human` and stop.
3. User buys Pro at https://www.landingfolio.com/pricing (Stripe). Never enter card details.
4. Log in, open https://www.landingfolio.com/submit, paste `product.url`, submit.
5. Screenshot to `.launchkit/evidence/landingfolio.png`, then `launchkit mark landingfolio submitted --note "Pro submission, curator review"`.

## Make the listing perform
- The automated pre-filter captures the page first. Make sure the URL loads fast without cookie walls or popups that cover the hero.
- Landingfolio breaks pages into sections (hero, pricing, features, testimonials). A page with a strong pricing or feature section can show up in those component libraries too.
- Mobile layout matters; they offer mobile previews.

## Gotchas
- The assignment list said Free; submissions require paid Pro as of 2026-10-12.

## After submitting
- Track submissions from the profile page; approved pages trigger an email.
