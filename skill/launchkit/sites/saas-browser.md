---
id: saas-browser
name: "SaaS Browser"
url: https://saasbrowser.com/add-your-saas
category: Software Review Site
mode: form
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: false
last_checked: ""
---

# SaaS Browser

A SaaS search engine and market-research database (about a million SaaS listings, run by Two Phase LLC). It crawls and adds SaaS automatically; paid plans ($49+/month) are for people exporting data, not for listing. A listing helps you get found by researchers and investors, but it brings little direct traffic.

Unconfirmed: in October 2026 the live site sat behind a Cloudflare "verify you are human" check, so this guide is based on an archived copy from 2025. Fields are not confirmed.

## Before you start
- The site likely already has the product if it has been live for a while. Search first.
- "Add Your SaaS" is in the header and links to `/add-your-saas`. The header also has Login / Sign Up (`/users/sign_up`), so expect an email account.
- If the Cloudflare check shows a CAPTCHA you can't pass, mark `needs_human` ("Cloudflare check").

## Field map (expected, unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| SaaS website / domain | URL | `product.url` (they key listings on the domain) |
| Name | text | `product.name` |
| Description | text | `product.description_short` |
| Category | select | closest match to `product.categories[0]` from their category list (e.g. "Project Management Software", "CRM", "Email Marketing Software", "Website Builders") |
| Email | email | `submission.email` |

## Steps
1. Open https://saasbrowser.com/ and search for the domain from `product.url`. If a listing exists, `launchkit mark saas-browser live --listing-url <url>` and stop.
2. Open https://saasbrowser.com/add-your-saas. If asked, sign up at `/users/sign_up` with `submission.email`.
3. Fill what the form asks using the map. Leave optional fields blank rather than guessing.
4. Submit, screenshot to `.launchkit/evidence/saas-browser.png`, then `launchkit mark saas-browser submitted --note "<confirmation>"`.

## Make the listing perform
- Listings are organised by category, country and technology used. Make sure the site's homepage clearly states what it does in the title and meta description, because their crawler pulls from it.
- Country pages are a browse path. If the company country is in the profile, make sure it shows on the site's footer or about page.

## Gotchas
- Don't buy a plan. The paid plans are data exports for prospecting, not listing upgrades.

## After submitting
- Search the domain again after a week or two.
