---
id: software-advice
name: "Software Advice"
url: https://app.g2digitalmarkets.com/get-listed/start
category: Software Review Site
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Software Advice

A buyer-advice site for B2B software, now part of G2 Digital Markets (with Capterra and GetApp). One free vendor profile is shared across those sites, so this single listing can appear on Capterra and GetApp too. High value for B2B SaaS; low for consumer apps.

## Before you start
- "Get Your Product Listed" on softwareadvice.com/vendors goes to https://app.g2digitalmarkets.com/get-listed/start, which redirects to the G2 seller login.
- You must be validated through **LinkedIn or a business email**. Options shown: Continue with LinkedIn, Continue with Google, Create an account (email). A gmail address may not validate; use a product-domain `submission.email`.
- Only create an account if `submission.allow_account_creation` is true. If LinkedIn is the only option that works and the user hasn't connected it, mark `needs_human`.
- Paid buyer-acquisition programs (pay per lead / click) are optional. Skip with budget 0.

## Field map (behind login; based on public vendor pages, unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Work email / login | email | `submission.email` |
| Company name | text | `company.legal_name` |
| Company website | URL | `product.url` |
| Product name | text | `product.name` |
| Category | select | closest to `product.categories[0]` |
| Product description | text | `product.description_long` |
| Target audience / company sizes | checkboxes | from `product.target_audience` |
| Pricing (starting price, model, free trial, free version) | fields | `product.pricing_model`, `product.pricing_details`, `product.free_trial` |
| Deployment / platforms | checkboxes | `product.platforms` |
| Features | checklist | tick only features in `product.key_features` |
| Logo | image | `assets.logo_square` |
| Screenshots / video | images, URL | `assets.screenshots`, `links.demo_video` |
| Country / founded | fields | `company.country`, `company.founded_year` |

## Steps
1. Search softwareadvice.com and capterra.com for `product.name`. If a profile exists, claim it in the same portal instead of creating one.
2. Open https://app.g2digitalmarkets.com/get-listed/start. Choose **Create an account** with `submission.email`, or **Continue with Google** if that's the preferred login.
3. Verify the email (needs `submission.inbox_access`). Then follow the "get listed" wizard and fill fields per the map.
4. Skip any paid program screens. Submit the profile for review.
5. Screenshot the confirmation to `.launchkit/evidence/software-advice.png`; `launchkit mark software-advice submitted --note "G2 Digital Markets review"`.

## Make the listing perform
- Category ranking on these sites depends on review count and recency. After approval, the user should send their own customers the portal's review invite link. Never write or pay for reviews.
- Fill pricing and features fully; buyers filter by price and feature, and empty fields drop you from filtered results.

## Gotchas
- Not confirmed: whether pre-launch products are accepted. Submit only once the product is live.
- Expect sales calls about paid lead programs. They're optional.

## After submitting
- Approval email arrives from G2 Digital Markets. Then check the Software Advice and Capterra pages and `launchkit mark software-advice live --listing-url <url>`.
