---
id: startup-inspire
name: "Startup Inspire"
url: https://www.startupinspire.com/signup
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: "instant approval (per pricing page); FAQ also mentions team review"
verified: true
last_checked: 2026-10-12
---

# Startup Inspire

Old startup gallery (15,000+ startups listed) with market pages and a founders section. One startup per account is free and listed permanently. Low traffic value, but quick.

## Before you start
- Needs a free account (signup at `/signup`). Create one only if `submission.allow_account_creation` is true.
- Have `product.name`, `product.url`, `product.tagline`, `product.description_long`, `company.business_model`, `product.target_audience`, `company.country`, `assets.logo_square`, `assets.screenshots` ready.
- Pricing (EUR, lifetime): Free 1 startup; Starter €6 (1 startup); Standard €19 (up to 5); Premium €49 (unlimited, promo banner, homepage header, 30-day boost). Free covers one product; do not buy without approval.

## Field map
The site is an Angular app and the submit form is behind login, so fields and order are unconfirmed. The FAQ says it asks for:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Startup name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Description / pitch | long text | `product.description_long` |
| Business model | text | `company.business_model` |
| Target market | text | `product.target_audience` |
| Unique value proposition | text | first item of `product.key_features` as one sentence |
| Market / category | select (Fintech, Human resources, Fundraising, Coding Platform, API technology, ...) | closest match to `product.categories[0]` |
| Country | select | `company.country` |
| Logo / screenshots | images | `assets.logo_square`, `assets.screenshots` |

## Steps
1. Open https://www.startupinspire.com/signup and create the account (or **Account** to log in).
2. Click **Submit Startup**. It routes through `/pricing`; pick **Free**.
3. Fill the fields above in the order shown and upload images.
4. Submit. Screenshot to `.launchkit/evidence/startup-inspire.png`.
5. `launchkit mark startup-inspire submitted --note "free plan"`

## Make the listing perform
- The FAQ says listings with a clear value proposition, a real business model and good visuals get featured. Fill every optional field and add screenshots.
- Choose a market page that matches the product; those pages are how visitors browse.
- You can edit the listing from the dashboard later, so update screenshots as the product changes.

## Gotchas
- The pricing page says "Instant Approval" while the FAQ says the team reviews submissions. Expect either.
- The header links to ProductInspire, a sister site. It is a separate submission.

## After submitting
- Check "Recently added" on the homepage or the dashboard for the listing.
