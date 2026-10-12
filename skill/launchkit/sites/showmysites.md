---
id: showmysites
name: "ShowMySites"
url: https://www.showmysites.com/
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: optional
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# ShowMySites

Showcase directory for SaaS, AI tools, blogs and marketplaces. Each user gets a profile with site pages under `/username/site/`. Free covers up to 25 sites; the link becomes dofollow after a reciprocal link or badge is verified.

## Before you start
- Account needed. Sign up with Google, or email with username, email, password and password confirmation. Use `submission.preferred_login`; create an account only if `submission.allow_account_creation` is true.
- Have `product.name`, `product.url`, `product.description_short`, `product.description_medium`, `assets.logo_square`, `assets.screenshots` ready.
- Free: up to 25 active listings, nofollow until a reciprocal ShowMySites link or badge is verified. Premium: $10 one-time per account, no reciprocal link, custom anchor text, and Founder's Choice homepage spotlight for the first site. Ask the user before paying.

## Field map
The add-site form is behind login, so fields and order are unconfirmed.

Sign-up (email path):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Username | text | short slug of `product.name` or `founder.name` |
| Email | email | `submission.email` |
| Password / Confirm | text | per `submission.password_policy` |

Add site (expected):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Site name | text | `product.name` |
| Site URL | URL | `product.url` |
| Short description | text | `product.description_short` |
| Description | long text | `product.description_medium` |
| Category | select (SaaS, AI, Blogs, Marketplaces, Tools, ...) | closest match to `product.categories[0]` |
| Logo / screenshot | image | `assets.logo_square`, `assets.screenshots[0]` |

## Steps
1. Open https://www.showmysites.com/ and click **Sign up** (or **Log in**).
2. Use Google or the email form. Confirm the email if asked (needs `submission.inbox_access`).
3. From the dashboard click the add site / submit button and fill the fields above.
4. If `launch_settings.add_badge_to_site` is true, add the badge or a plain link to ShowMySites on the site, then use the verify button.
5. Submit. Screenshot to `.launchkit/evidence/showmysites.png`.
6. `launchkit mark showmysites submitted --note "awaiting review"`

## Make the listing perform
- The homepage Founder's Choice spot only goes to Premium accounts. On free, the leaderboard and category pages are where views come from.
- Fill every field and add a real screenshot; the site reviews and verifies each listing before it appears.
- If the user has several products, list them all under one account; the free plan allows 25.

## Gotchas
- Without the reciprocal link or badge the backlink stays nofollow.
- Premium is per account, not per site.

## After submitting
- The listing appears at `/<username>/<site>/` after review. Check the link rel once the badge is verified.
