---
id: huzzler
name: "Huzzler"
url: https://huzzler.so/submit-product
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Huzzler

Started as an indie founder community; now mainly a software review site and startup directory (claims about 25K page views a month and DR 69+). Free listing is fine; the badge upgrades the link to dofollow.

## Before you start
- Account needed. Sign up with name, unique username, email and password, or Google. Use `submission.preferred_login`; if creating an account, `submission.allow_account_creation` must be true.
- Badge on the user's site turns the free link dofollow. Check `launch_settings.add_badge_to_site`.

## Field map (product form behind login; expected fields, unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Sign-up: name, username, email, password | text | `founder.name`, a handle from `founder.twitter` or `product.name`, `submission.email`, generated password stored only in the browser |
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short | `product.tagline` |
| Description | long text | `product.description_long` |
| Category | select | closest to `product.categories[0]` |
| Pricing | select | `product.pricing_model`, `product.pricing_details` |
| Logo / screenshots | images | `assets.logo_square`, `assets.screenshots` |
| Competitors / alternatives (if asked) | list | `product.competitors_alternatives` |
| Plan | Free / Launch Boost $29 | Free |

## Steps
1. Search https://huzzler.so for `product.name`; if found, mark `live` and stop.
2. Open https://huzzler.so/submit-product and sign in or sign up.
3. Fill the product form, choose the free listing.
4. If the user approved the badge, add it and note it.
5. Submit, screenshot to `.launchkit/evidence/huzzler.png`, `launchkit mark huzzler submitted`.

## Make the listing perform
- Huzzler gets most traffic from "alternatives to X" and review pages. Name real competitors in the description (from `product.competitors_alternatives`) so the product can show on those pages.
- Write the description like a review summary: what it does, pricing, who it suits. Avoid hype; the site positions itself as reviews.

## Gotchas
- Launch Boost ($29 one-time) pins the product first on competitor alternatives pages. Skip unless approved.

## After submitting
- Log the listing URL when it appears. Edit it from the account later if pricing changes.
