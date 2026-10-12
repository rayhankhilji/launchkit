---
id: submit-hunt
name: "Submit Hunt"
url: https://www.submithunt.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: optional
review_time: "editorial review, free launch delayed about 1 week"
verified: true
last_checked: 2026-10-12
---

# Submit Hunt

Daily launch board pitched as a Product Hunt alternative, with daily, weekly, monthly and yearly rankings and a top 3 badge. Free launches wait about a week and get a dofollow link only with their badge.

## Before you start
- Sign-in is required ("Log in to your account"; signing in creates an account if none exists). The login provider buttons did not render in a headless browser, so the method is unconfirmed. Use `submission.preferred_login`; only proceed if `submission.allow_account_creation` is true.
- Have `product.name`, `product.url`, `product.tagline`, `product.description_medium`, `product.categories`, `product.tags`, `assets.logo_square`, `assets.screenshots` ready.
- Plans: Standard Launch free (7 days on homepage, about 1 week delay, dofollow only with the SubmitHunt badge, otherwise nofollow, one free product per user). Premium Launch $20 per launch (skip the queue, 14 days on homepage, newsletter, dofollow with no badge). Featured Spot $50 one-time (7 days in the feed with a gradient border). Ask before paying.

## Field map
Behind login, so exact fields and order are unconfirmed. Expected:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Short description | text, shown on the card | `product.tagline` |
| Description | long text | `product.description_medium` |
| Category | select (SaaS, AI/ML, Productivity, Marketing, Web App, Developer Tools, Health & Fitness, Education, Design, E-commerce, Mobile App, Social, Gaming, Chrome Extension, API/Service, Other) | closest match to `product.categories[0]` |
| Tags | text / multi | `product.tags` |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Plan | Standard / Premium / Featured | Standard unless approved |

## Steps
1. Open https://www.submithunt.com/submit and sign in.
2. Fill the product fields and upload images.
3. Choose **Standard Launch**. Add the badge to the site only if `launch_settings.add_badge_to_site` is true.
4. Submit. Screenshot to `.launchkit/evidence/submit-hunt.png`.
5. `launchkit mark submit-hunt submitted --note "free, launch in ~1 week"`

## Make the listing perform
- Daily rank decides the top 3 badge. Launches flip at a fixed daily time (a countdown shows on the homepage); share the page right after it goes live.
- SaaS and AI/ML are the largest categories. A smaller fitting category (Developer Tools, Design, Chrome Extension) gets you nearer the top of its page.
- Cards show "Verified" for listings with the badge, which adds trust on the board.

## Gotchas
- Free is one product per user. Extra products require Premium.
- Free listings leave the homepage after 7 days; the listing page stays indexable.

## After submitting
- Check the dashboard for the launch date. On launch day reply to comments and check the daily ranking.
