---
id: indie-deals
name: "Indie Deals"
url: https://indie.deals/submit
category: Deals / LTD
mode: form
pricing: Paid
login: email, Google, or GitHub
captcha: unknown
backlink_required: "yes on the $19 Standard plan"
review_time: "up to 96 hours on Standard; instant on Pro and Sponsor"
verified: true
last_checked: 2026-10-12
---

# Indie Deals

Deals directory for indie software (indie.deals). Every listing plan is paid per product, with no revenue share. The submit form sits behind a login, so the fields below the plan choice are unconfirmed.

## Before you start
- Pick a plan with the user. Spending money is a `needs_human` decision.
  - Standard, $19: manual review within 96 hours, pay only after approval, needs a validated backlink to Indie.Deals on your site, no permanent backlink back to you.
  - Pro, $49: published immediately, 15 days featured, permanent backlink, newsletter and social shoutout, priority support.
  - Sponsor, $99: premium placement on product, category, tag and search pages, newsletter, social and video shoutouts, a review article, limited slots.
- You need an actual discount for their users. If `product.deal_or_promo_code` is empty, mark `needs_human` ("requires deal terms decision").
- For Standard, the user must add a link to https://indie.deals on `product.url` (footer is fine) before submitting.

## Field map
The form loads only after login at https://indie.deals/auth/login?callbackUrl=%2Fsubmit. Fill whatever it asks with:

| Likely field | Fill with |
|---|---|
| Product name | `product.name` |
| Website URL | `product.url` |
| Tagline / short description | `product.tagline_short` |
| Description | `product.description_medium` |
| Category / tags | `product.categories`, `product.tags` mapped to their list |
| Logo / screenshots | `assets.logo_square`, `assets.screenshots` |
| Deal / discount and code | `product.deal_or_promo_code` |
| Regular pricing | `product.pricing_model`, `product.pricing_details` |
| Plan | Standard, Pro or Sponsor (user's choice) |

Record the real field list in the run log so this guide can be updated.

## Steps
1. Open https://indie.deals/submit. It redirects to login.
2. Sign in with `submission.preferred_login` (email, Google or GitHub). Create an account only if `submission.allow_account_creation` is true.
3. Fill the form from the map. Stop before payment.
4. Screenshot to `.launchkit/evidence/indie-deals.png` and `launchkit mark indie-deals needs_human --note "Form filled; user picks plan and pays"`.

## Make the listing perform
- Pro is the cheapest way to get featured placement (15 days) and a permanent backlink. Standard gives neither.
- Lead with the discount in the tagline ("50% off the first year of ..."). Deal size is what browsers compare.
- Pick one specific category instead of several broad ones.
- If the user chooses Pro, time it with the main launch week so the 15 featured days overlap the traffic spike.

## Gotchas
- Standard listings need the backlink validated. Confirm the link is live on the site before submitting.
- Pricing is per product. A second product is a second listing.

## After submitting
- Standard: approval email within 96 hours, then payment. Pro and Sponsor go live right away.
