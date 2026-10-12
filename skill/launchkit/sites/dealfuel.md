---
id: dealfuel
name: "DealFuel"
url: https://www.dealfuel.com/submit-deal/
category: Deals / LTD
mode: form
pricing: Free
login: "email + password or Google (DealFuel account)"
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# DealFuel

Deals marketplace for marketers, designers and small businesses (software, templates, graphics, courses). The header link **Submit a Deal** goes to /submit-deal/, which redirects to a login page. The deal form itself, vendor terms and review time are unconfirmed because they are behind the login.

## Before you start
- Business decision: mark `needs_human` ("requires deal terms decision") unless the user opted in and `product.deal_or_promo_code` holds the offer.
- Logging in needs a DealFuel account (email and password, or Google). Only create one if `submission.allow_account_creation` is true.
- No public vendor commission or fee was found. Do not tell the user it is free to sell until the form shows terms.

## Field map
Login page (public):

| Field on the site | Fill with |
|---|---|
| Username or Email Address | `submission.email` |
| Password | per `submission.password_policy`, else hand off to the user |
| Remember Me | leave unchecked |
| Login with Google | use if `submission.preferred_login` is google |

Deal form (unconfirmed). Plan to use: `product.name`, `product.url`, `product.description_medium`, deal price and regular price (user decides; regular from `product.pricing_details`), the offer from `product.deal_or_promo_code`, `assets.logo_square`, `assets.screenshots`, and a category mapped to theirs. Record the real fields in the run log.

## Steps
1. Open https://www.dealfuel.com/ and click **Submit a Deal** in the header.
2. On the redirect to /account/, log in (or register only if allowed).
3. Fill the deal form from the plan above. Stop before any terms acceptance or payment.
4. Screenshot to `.launchkit/evidence/dealfuel.png`; `launchkit mark dealfuel needs_human --note "Deal form filled; user confirms price and terms"`.

## Make the listing perform
- Pick the closest of their categories: Marketing, Design, Multimedia, Business Management, Invoicing & Payment, Human Assistance, CRM, Hosting, Social Media Management, Content Management, Web Development, Utility Software, Graphic Design Resources.
- Their buyers browse by discount. Show the regular price next to the deal price so the saving is clear.
- Use `product.description_medium` with two concrete use cases. Buyers here are solo marketers and freelancers.

## Gotchas
- If the form demands information the profile lacks (tax details, payout account), stop and mark `needs_human`.

## After submitting
- Check the DealFuel account dashboard and `submission.email` for approval. Update this guide with the real form fields.
