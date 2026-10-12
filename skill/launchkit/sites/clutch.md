---
id: clutch
name: "Clutch"
url: https://clutch.co/get-listed
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: turnstile      # Cloudflare challenge in front of most pages
backlink_required: no
review_time: "unknown (profile review by Clutch team)"
verified: true
last_checked: 2026-10-12
---

# Clutch

Review and ranking site for B2B service providers: dev shops, agencies, IT services, consultants. It is not a software directory. Only worth doing if the user's company sells services.

## Before you start
- Fit check: if `company.business_model` is a software product (SaaS, app), mark `skipped` with "Clutch lists service providers, not software". Ask the user if unsure.
- Tiers (checked live): Basic free profile (basic info and analytics, limited case studies, no website link from directory pages, listed below verified providers). Verified $499/year (website link, ranking above non-verified, unlimited case studies). Advertiser: custom pricing.
- Clutch ranks on verified client reviews, which Clutch collects by interviewing clients. Plan for the user to line up 3+ clients.

## Field map (profile builder; behind login, unconfirmed)

| Field | Limit / format | Fill with |
|---|---|---|
| Company name | text | `company.legal_name` |
| Website | URL | `product.url` |
| Tagline | short | `product.tagline` |
| Description | text | `product.description_long` |
| Founded / employees | year / range | `company.founded_year`, `company.team_size` |
| Location | address | `company.city`, `company.country` |
| Services / service lines | % split | from `product.categories` (e.g. 70% Custom Software Development) |
| Min project size / hourly rate | ranges | ask the user; don't guess |
| Logo | image | `assets.logo_square` |
| Contact | name, email | `founder.name`, `submission.email` |

## Steps
1. Open https://clutch.co/get-listed. If the Cloudflare check needs a click, mark `needs_human`.
2. Under **Basic**, click **Create a Free Profile**. Sign up with `submission.email`.
3. Fill the profile from the map. Skip "Get Clutch Verified" unless budget allows $499.
4. Screenshot to `.launchkit/evidence/clutch.png`. `launchkit mark clutch submitted --note "free profile created"`

## Make the listing perform
- Reviews drive rank and the annual "Leader" awards. Clutch calls or surveys the client; give the user the review link to send.
- Set service-line percentages carefully: you rank in a category only for the share you claim.
- Add 2-3 portfolio items with real client names the user approves.

## Gotchas
- Free profiles get no link from directory pages and appear below verified ones.
- Expect sales calls about Verified and ads.

## After submitting
- Profile URL: `https://clutch.co/profile/<slug>`. Respond to reviews from the dashboard.
