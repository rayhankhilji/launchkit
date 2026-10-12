---
id: cssnectar
name: "CSSnectar"
url: https://cssnectar.com/suggest-site/
category: Design Gallery
mode: form
pricing: Paid
login: none            # Gravity Forms page; a login widget exists but isn't required
captcha: unknown
backlink_required: no
review_time: "within 24 hours"
verified: true
last_checked: 2026-10-12
---

# CSSnectar

A web design awards gallery (WordPress) that reviews entries fast and posts accepted ones to its social accounts. Small audience of designers and agencies. Paid entry with a refund on rejection.

## Before you start
- $9 (USD) per submission, refunded if rejected. With `launch_settings.budget_usd` below 9, mark `needs_human` and stop.
- Screenshot: JPG or PNG, 2 MB max (`assets.screenshots[0]`). Logo: 1 MB max (`assets.logo_square`).
- Payment is on the same form: PayPal or Debit/Credit Card (Stripe). The user does that part.

## Field map
All seen live on the form:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website Title * | text | `product.name` |
| Website URL * | URL | `product.url` |
| E-Mail Address | email | `submission.email` |
| Website Description | textarea | `product.description_medium` |
| Please Select Categories | checkboxes | Technology, Mobile & Apps, Services, Web & Interactive, Business & Corporate. Tick 1-2 that fit `product.categories` |
| Please Select Site Features | checkboxes | true ones: Minimal, Responsive, Typographic, Animated, Illustrated, Scroll, WebGL, One Page, Grid |
| Please Select Site Colors | checkboxes | 1-2 dominant brand colours (Black, Blue, Purple, etc.) |
| Screenshot | JPG/PNG, 2 MB | `assets.screenshots[0]` |
| Designer/Agency Name * | text | `company.legal_name` or `founder.name` |
| Designer/Agency URL * | URL | `founder.website` or `product.url` |
| Designer/Agency Country * | select | `company.country` |
| Email * | email | `submission.email` |
| Logo | 1 MB | `assets.logo_square` |
| About Designer/Agency | textarea | `founder.bio_short` |
| Subscribe | checkbox, pre-ticked | untick unless the user wants the newsletter |
| Payment Method | PayPal / Stripe | user picks |
| **Pay Now** | button | user clicks after paying |

## Steps
1. Search cssnectar.com for `product.name`. If listed, mark `live` and stop.
2. Get approval for $9.
3. Open https://cssnectar.com/suggest-site/ and fill the fields above in order. Untick **Subscribe**.
4. Stop before **Pay Now**: mark `needs_human` with "CSSnectar form filled, needs $9 payment" or let the user pay in the open tab.
5. Screenshot the confirmation to `.launchkit/evidence/cssnectar.png`, then `launchkit mark cssnectar submitted --note "paid $9, review within 24h"`.

## Make the listing perform
- Fast review (24 hours) means a weekday morning submission can be live the same day; time it with the user's other launch posts.
- Accepted sites are shared on CSSnectar's social accounts. Have `links.twitter` set so a tag is possible.
- Choose features honestly; visitors filter by feature and colour.

## Gotchas
- The assignment list said Free; it is $9 as of 2026-10-12.
- There are two email fields (site and designer). Fill both.

## After submitting
- Check the gallery the next day. Refund for rejected entries goes back via the payment method.
