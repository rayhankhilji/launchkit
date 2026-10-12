---
id: kick-product
name: "Kick Product"
url: https://www.kickproduct.com/auth/signup
category: Launch Platform
mode: form
pricing: Free
login: email
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Kick Product

New product launch site that advertises "Free forever" launches. Its pricing page lists every paid tier as "TBD" and public counters show 0, so treat it as early-stage with little traffic. Free and quick if a login exists.

## Before you start
- Account needed: sign up at https://www.kickproduct.com/auth/signup. Needs `submission.allow_account_creation: true`; otherwise mark `needs_human`.
- No badge or backlink rule was published at check time.

## Field map (form behind login; expected, unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Sign-up email / password | text | `submission.email`, a generated password per `submission.password_policy` |
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short | `product.tagline` |
| Description | long text | `product.description_medium` |
| Category | select | closest to `product.categories[0]` |
| Logo / screenshots | images | `assets.logo_square`, `assets.screenshots` |
| Launch date (if asked) | date | `product.launch_date` or next available |

## Steps
1. Search the site for `product.name`; if found, mark `live` and stop.
2. Sign up, confirm the email if required (needs `submission.inbox_access`; otherwise pause for the user).
3. Find the submit or launch button in the dashboard and fill the form.
4. Submit, screenshot to `.launchkit/evidence/kick-product.png`, `launchkit mark kick-product submitted`.

## Make the listing perform
- With a small audience, the value is the indexed page and any backlink. Use full descriptions and all screenshots so the page stands on its own in search.
- If there's a launch day leaderboard, ask the user to share the link that day.

## Gotchas
- Paid tiers are "TBD" and ad codes like LAUNCH40 appear on the site. Don't pay for anything.
- If the dashboard shows no working submit flow, mark `failed` with "no submit flow after signup".

## After submitting
- Check back in a few days and log the URL if it's live.
