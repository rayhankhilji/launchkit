---
id: admire-the-web
name: "Admire The Web"
url: https://admiretheweb.com/submit/
category: Design Gallery
mode: form
pricing: Paid
login: none            # paid via Paddle checkout; account optional (needed for supporter discount)
captcha: unknown
backlink_required: no
review_time: "within 30 days"
verified: true
last_checked: 2026-10-12
---

# Admire The Web

A hand-picked web design gallery browsed by designers, agencies and founders, sorted by category and colour. Small but steady audience. Submissions cost money now, with a refund if the site is not accepted.

## Before you start
- Price: $15 per submission, or $5 per submission on the $5/month Supporter plan. Rejected sites get a full refund.
- With `launch_settings.budget_usd` below 15, mark `needs_human` with "Admire The Web: $15 per entry, refunded if rejected" and stop.
- Only design-led sites have a chance. Agency, Portfolio, Product and Landing are their largest categories.
- Have `assets.screenshots[0]` (full-page, 1440 px wide) handy in case the form after checkout asks for it.

## Field map
Clicking **Submit a website** opens a Paddle checkout overlay (product 522147). The site details form is collected in or after that checkout and was not visible without paying, so the fields below are unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Email (Paddle checkout) | email | `submission.email` |
| Country / postcode (Paddle) | select / text | `company.country`; let the user confirm |
| Payment (Paddle) | card / PayPal | user only; never fill card details |
| Website URL | URL | `product.url` |
| Site title | text | `product.name` |
| Category | select | Product for a SaaS or app, Landing for a single landing page, Service for agencies or services |

## Steps
1. Search admiretheweb.com for `product.name`. If listed, `launchkit mark admire-the-web live --listing-url <url>` and stop.
2. Get budget approval. Without it, mark `needs_human` (see above).
3. Open https://admiretheweb.com/submit/ and click **Submit a website** under "Website submission $15".
4. In the Paddle overlay, enter `submission.email` and hand the payment to the user.
5. Fill whatever site details follow with the map above. Screenshot the confirmation to `.launchkit/evidence/admire-the-web.png`.
6. `launchkit mark admire-the-web submitted --note "paid $15, review within 30 days, refund if rejected"`.

## Make the listing perform
- Their tags include Site of the day, Responsive, Product and Landing. A clean responsive product page with a strong hero has the best odds.
- They feature colour palettes, so a site with a distinctive, consistent palette stands out in the colour filters.
- Newsletter ($150, about 2,000 subscribers) and site advert ($100) are paid add-ons. Skip them unless the user asks.

## Gotchas
- The assignment list said Free; it is paid ($15) as of 2026-10-12.
- The page also has a newsletter signup form with a hidden honeypot field named `website`. Do not fill it.

## After submitting
- Check the Index page and the matching category after a few weeks. If nothing after 30 days, the entry was rejected and the refund should arrive.
