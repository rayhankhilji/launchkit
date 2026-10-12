---
id: saasworthy
name: "SaaSworthy"
url: https://www.saasworthy.com/vendorsportal/index.php?r=site/login
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# SaaSworthy

A large SaaS discovery and comparison site (category lists like "Email Marketing Software", "CRM Software", "Help Desk Software", with SW Scores). Vendors get a free basic listing; paid programs (AI visibility, lead programs, sponsored spots) are sold through sales. Worth doing for B2B SaaS.

## Before you start
- The old URL `/list-your-product` (and `/get-listed`) now returns 404. "SW for Business > List Your Product" in the header opens a popup; the working entry is the **Vendor Portal**.
- The Vendor Portal first asks to "Keep Your Contact Details Up-to-Date" (name, email, phone with country code). A **phone number** is needed; the profile has no phone key, so ask the user or mark `needs_human`.
- Account creation is needed. Only continue if `submission.allow_account_creation` is true.
- Paid options (AI visibility, "Request a Call Back" sales calls) are optional. Skip with budget 0.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `founder.name` |
| Email | email | `submission.email` (product-domain email preferred) |
| Phone | country code + number | ask the user |
| Product name (after login, unconfirmed) | text | `product.name` |
| Website | URL | `product.url` |
| Category | select | closest SaaSworthy list to `product.categories[0]` (e.g. "CRM Software", "Help Desk Software", "SEO Software", "Scheduling Software") |
| Short description | text | `product.description_short` |
| Detailed description | text | `product.description_long` |
| Features | list | `product.key_features` |
| Pricing plans | per-plan rows | `product.pricing_details`; free trial from `product.free_trial` |
| Logo | image | `assets.logo_square` |
| Screenshots / video | images, URL | `assets.screenshots`, `links.demo_video` |

## Steps
1. Search saasworthy.com for `product.name`. If a profile exists, claim it from the profile page instead of creating a new one.
2. Open https://www.saasworthy.com/vendorsportal/index.php?r=site/login. Fill the contact details form (name, email, phone) and continue.
3. Sign up or log in with `submission.email`; verify the email if `submission.inbox_access` allows it.
4. Add the product and fill every field in the map. Skip paid upgrades.
5. Screenshot the saved profile to `.launchkit/evidence/saasworthy.png`; `launchkit mark saasworthy submitted`.

## Make the listing perform
- Every list page shows an SW Score per product (its formula isn't public). Fill pricing plans and features in full, since comparison pages display them side by side and empty fields stand out.
- Pick the most specific list. Each list page is an SEO landing page ("Best X software"), so a narrow list ranks you higher.
- Reviews: invite real users through the profile's review link. No incentives, no self-reviews.

## Gotchas
- Header links to `/list-your-product` 404 when opened directly; use the Vendor Portal URL.
- Expect a sales follow-up call or email after signup. Tell the user it's optional.

## After submitting
- Profiles go through editorial review. Search the product name after a week, then `launchkit mark saasworthy live --listing-url <url>`.
