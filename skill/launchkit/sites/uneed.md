---
id: uneed
name: "Uneed"
url: https://www.uneed.best/submit-a-tool
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "free: launch date assigned, at most 5 months out; Fast-track about 14 days"
verified: true
last_checked: 2026-10-12
---

# Uneed

Daily launchpad by Thomas Sanlis with a community that votes, a 26k subscriber newsletter and around 125k monthly visitors (their pricing page). Known for policing fake votes. Good traffic for indie SaaS and dev tools.

## Before you start
- Launch options (https://www.uneed.best/pricing): **Join the line, free**: Uneed assigns a date at most 5 months out; you need an upvote score of 10 to stay published and 20 for the do-follow backlink (75 DR). **Skip the line $29.99**: pick your date, backlink guaranteed. **Fast-track $14.99**: slot in about 14 days, backlink from a score of 10. **Relaunch $15** for an already launched product.
- With budget 0, join the free line and tell the user the date can be months away.
- Assets: `assets.logo_square`, `assets.screenshots`, `assets.og_image`.

## Field map
Step one is public; the rest appears after Uneed scrapes the page and asks you to sign up, so later fields are unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your product name* | text, becomes `uneed.best/tool/<slug>` | `product.name` |
| Your product address* | URL | `product.url` |
| (after scrape) Tagline | short | check the scraped value; replace with `product.tagline` |
| (after scrape) Description | text | `product.description_medium` |
| (after scrape) Category / tags | select | closest to `product.categories[0]` |
| (after scrape) Pricing | select | map `product.pricing_model` |
| (after scrape) Logo, images | uploads | `assets.logo_square`, `assets.screenshots` |
| Launch option | Join the line / Skip / Fast-track | **Join the line** unless the user approved spend |

## Steps
1. Search uneed.best for `product.name`. If a tool page exists, mark `live` and stop.
2. Open https://www.uneed.best/submit-a-tool, type the name and URL, click **Preview my product**.
3. Review every scraped field and overwrite with profile copy (scrapes often grab a meta title).
4. Sign up when asked (use `submission.preferred_login`), save, choose **Join the line**.
5. Note the assigned date. `launchkit mark uneed submitted --note "free line, launch date <date>"`.

## Make the listing perform
- The score threshold (10 to stay, 20 for the backlink) is the main hurdle. On launch day the user should share the Uneed page with their own audience; launches run for one day.
- The daily podium gets a badge, and the weekly top products go into the newsletter. Paid launches choose a date, so free launches often face them; Tuesday to Thursday is the busiest.
- Uneed actively removes cheated votes. Never ask for votes from vote-exchange groups.
- Add a deal or promo code (`product.deal_or_promo_code`) if the form offers it; Uneed has a deals section.

## Gotchas
- Missing the score threshold unpublishes the listing. Warn the user before the date.
- Upsells (Auto-Submit $249, Public Review $147, Uneed Pro) appear around checkout. Skip them.

## After submitting
- Add the launch date to the user's calendar. The page lives at `https://www.uneed.best/tool/<slug>`.
