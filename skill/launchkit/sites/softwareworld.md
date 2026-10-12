---
id: softwareworld
name: SoftwareWorld
url: https://www.softwareworld.co/register/
category: Software Review Site
mode: form
pricing: Paid ($99 one-time for a new listing, claiming an existing profile is free)
login: email
captcha: recaptcha
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# SoftwareWorld

B2B software review and ranking site with category "best of" lists and vendor profiles. Claiming an existing profile is free, but publishing a brand new listing costs a one-time $99 approval fee, so for a new product this is a paid site.

## Before you start
- Search the site for `product.name` first. If a profile already exists, the free claim path applies.
- Needs a vendor account: business email + password, then email verification. Only proceed if `submission.allow_account_creation` is true and `submission.inbox_access` lets you click the link.
- New listing with `launch_settings.budget_usd` at 0: stop and mark `skipped` with "paid only ($99)".
- Use the vendor flow only. The "Reviewer Login" (LinkedIn/Google) is for writing reviews. Never write or request reviews.

## Field map

Step 1, vendor account (`/register/`):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Full Name | text, required | `founder.name` |
| Business Email | email, required, company domain | `submission.email` (must be on the `product.url` domain) |
| What would you like to manage? | radio: Software / Services / Both | Software |
| Password / Confirm Password | required | generate per `submission.password_policy`, never write it to launchkit files |
| Terms checkbox | required | tick |
| reCAPTCHA | Google reCAPTCHA | do not solve, hand to the user |

Step 2, listing form in the vendor dashboard: not visible without an account (unconfirmed). Expect product name, website, logo, description, category, pricing and features. Use `product.name`, `product.url`, `assets.logo_square`, `product.description_medium`, `product.categories[0]`, `product.pricing_details`, `product.key_features`.

## Steps
1. Open https://www.softwareworld.co/ and search for `product.name`. If found, look for a claim option on the profile.
2. Open https://www.softwareworld.co/register/ (a Cloudflare check may run first, wait for it).
3. Fill the account fields above, tick the terms box. If a reCAPTCHA challenge appears, mark `needs_human` with "reCAPTCHA on SoftwareWorld signup".
4. Click **Create Vendor Account**, then verify the email.
5. In the dashboard choose **Claim profile** (free) or **Submit new listing** (stops at the $99 payment step; follow the budget rule).
6. Screenshot the confirmation to `.launchkit/evidence/softwareworld.png` and run `lk mark softwareworld submitted --note "claim sent"` (or `skipped`).

## Make the listing perform
- Rankings are by category. Pick the narrowest category that matches `product.categories[0]` instead of a broad one.
- Fill every profile field: pricing, features, screenshots, deployment. Thin profiles do not get placed in "best" lists.
- Sponsored placement is offered on top of the listing. Skip it unless the user asks.

## Gotchas
- Free email domains (gmail etc.) are likely rejected, the field asks for a business email.
- The $99 fee is charged after account activation, not at signup, so it is easy to create an account you then cannot use for free.
- Reviewer login and vendor login are separate. Use **Vendor Login** at https://www.softwareworld.co/login/.

## After submitting
- Check the vendor dashboard for approval status. Once approved, find the profile URL by searching the site and save it with `--listing-url`.
