---
id: spotsaas
name: Spotsaas
url: https://partners.spotsaas.com/listing/new
category: Software Review Site
mode: form
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: up to 2 weeks
verified: true
last_checked: 2026-10-12
---

# Spotsaas

SaaS comparison and review site for B2B buyers. The basic vendor listing is free with no credit card. Paid growth plans (custom pricing) add extra categories, CTAs and analytics.

## Before you start
- Only B2B products fit. They require a live, commercial product with a real company and accountable owner, a defined category and original product.
- Needs a vendor portal account (work email + password) at https://partners.spotsaas.com/login. Only proceed if `submission.allow_account_creation` is true.
- Use a work email on the `product.url` domain. Free mail domains will likely fail ownership checks.
- If the product is already listed, use the claim path at https://www.spotsaas.com/buyer-intent/claim-profile (verifies the company email domain, usually approved within hours).

## Field map

Login screen:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Work email | email | `submission.email` |
| Password | password | per `submission.password_policy`, never stored in launchkit files |
| Keep me signed in for 30 days | checkbox | leave unticked |

Listing application (behind login, field list unconfirmed). Public docs say a complete profile covers:

| Section | Fill with |
|---|---|
| Product name, website | `product.name`, `product.url` |
| Description | `product.description_medium` |
| Category | closest match to `product.categories[0]` |
| Logo | `assets.logo_square` |
| Screenshots | `assets.screenshots` (at least 3) |
| Features | `product.key_features` |
| Pricing | `product.pricing_details`, `product.free_trial` |
| Integrations | from `product.key_features` if listed, otherwise skip |

## Steps
1. Search https://www.spotsaas.com/ for `product.name`. If a profile exists, use the claim link instead.
2. Open https://partners.spotsaas.com/listing/new. You will be sent to the vendor sign-in page.
3. Create the vendor account (sign-up link on that page), verify the email if asked.
4. Fill the listing application with the mapping above. Record any field names you see in the run notes.
5. Submit and screenshot the confirmation to `.launchkit/evidence/spotsaas.png`.
6. `lk mark spotsaas submitted --note "manual review, up to 2 weeks"`.

## Make the listing perform
- Spotsaas says complete profiles rank higher in category pages and AI search answers. Add a logo, 3+ screenshots, pricing and features on day one.
- Verified reviews drive placement. The user can invite real customers later. Do not write or request reviews yourself.
- Pick one precise category. Extra categories are a paid feature.

## Gotchas
- Listings are reviewed by hand, up to two weeks. Consumer apps and landing pages without a product get rejected.
- Growth plan sales emails may follow. The free Starter listing does not need them.

## After submitting
- Check the vendor portal for status. When approved, save the public profile URL with `--listing-url`.
