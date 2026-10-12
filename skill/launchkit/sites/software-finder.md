---
id: software-finder
name: "Software Finder"
url: https://my.softwarefinder.com/signup
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: "same day (claim)"
verified: true
last_checked: 2026-10-12
---

# Software Finder

A B2B software marketplace with comparisons, verified reviews and pay-per-lead programs. A free vendor profile is offered ("claim it in minutes, start getting found the same day"). Useful for B2B SaaS; paid programs are lead-gen sales.

## Before you start
- Entry: softwarefinder.com/vendors > **Get started free** or **Claim Your Profile**, which goes to the vendor portal https://my.softwarefinder.com/signup.
- Signup needs a **work email** and a **phone number** (with country). The profile has no phone key, so ask the user or mark `needs_human`.
- Only create an account if `submission.allow_account_creation` is true.
- Paid: Pay Per Lead, Buyer Intelligence, Premium Placement (prices via consultation). Skip with budget 0 and decline the "free consultation" call unless the user wants it.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First Name * | text | first word of `founder.name` |
| Last Name * | text | rest of `founder.name` |
| Work Email * | email | `submission.email` (product domain) |
| Phone Number * | country select + tel | ask the user |
| Continue | button | next step |
| Product name (next step, unconfirmed) | text | `product.name` |
| Website | URL | `product.url` |
| Category | select | closest to `product.categories[0]` |
| Description | text | `product.description_long` |
| Features | list | `product.key_features` |
| Pricing | fields | `product.pricing_model`, `product.pricing_details`, `product.free_trial` |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| CTA link | URL | `product.url` or `links.pricing_page` |

## Steps
1. Search softwarefinder.com for `product.name`. If a profile exists, use **Claim Your Profile** on it.
2. Open https://my.softwarefinder.com/signup. Fill First Name, Last Name, Work Email, Phone, click **Continue**.
3. Verify the email if asked (needs `submission.inbox_access`), then complete the product profile per the map.
4. Skip any paid program offers. Save/submit.
5. Screenshot to `.launchkit/evidence/software-finder.png`; `launchkit mark software-finder submitted`.

## Make the listing perform
- The vendor page lists screenshots, features, pricing and CTAs as the profile building blocks; listings with all four filled show up better in category comparisons.
- Verified reviews show on the listing. Have real customers review through the portal's invite link; no incentives.

## Gotchas
- A gmail address may be rejected as non-work email.

## After submitting
- Check the category page the same week and mark `live` with the URL.
