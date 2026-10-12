---
id: shipboost
name: "ShipBoost"
url: https://shipboost.io/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "next weekly cohort after review"
verified: true
last_checked: 2026-10-12
---

# ShipBoost

Weekly launchboard for bootstrapped SaaS founders. Free launches get one week on the board and a permanent listing, but need the ShipBoost badge on the site. Premium reserves a week and adds an editorial article.

## Before you start
- Account needed. Sign-in offers Google, an email magic link, or email and password. Use `submission.preferred_login`; create an account only if `submission.allow_account_creation` is true.
- Have `product.name`, `product.url`, `product.tagline`, `product.description_medium`, `assets.logo_square`, `assets.screenshots` ready.
- The free plan requires a verified ShipBoost badge on the site. Only proceed with free if `launch_settings.add_badge_to_site` is true; otherwise ask the user about Premium.
- Premium is shown as $19 early access (regular $29). It reserves a launch week, adds featured placement, a hand-written article on their blog, and a guaranteed dofollow link. Needs user approval.

## Field map
The form is behind login, so fields and order are unconfirmed. Drafts can be saved before submitting.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Description | long text | `product.description_medium` |
| Category | select (Marketing, Sales, Analytics, Support, Productivity, Development, Design, Finance, AI, Product, ...) | closest match to `product.categories[0]` |
| Tags | multi select | `product.tags` |
| Pricing | select | map `product.pricing_model` |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Plan | Free / Premium | Free unless the user approved Premium |
| Launch week | picker (Premium) | `product.launch_date` week |

## Steps
1. Open https://shipboost.io/submit and sign in.
2. Fill the product fields, upload logo and screenshots, and save a draft first.
3. Choose **Free Launch**. Copy the badge snippet and add it to the site homepage only if the user allowed it.
4. Click submit / verify badge. Screenshot to `.launchkit/evidence/shipboost.png`.
5. `launchkit mark shipboost submitted --note "free, queued for next weekly cohort"`

## Make the listing perform
- The top 3 of each week are decided by upvotes. After the top 3, Premium listings sit above free ones, so free listings need votes to be seen.
- Rally votes in the first day of the cohort week; the board resets weekly.
- Write the tagline for SaaS buyers: what it does and for whom. The audience is bootstrapped founders.

## Gotchas
- Free launches go into the next available weekly cohort after review; you cannot pick the week.
- If the badge is removed, the free listing loses its verified status.
- Ad slots (product $29/30 days, banner $49, sidebar $59) are separate upsells. Skip them.

## After submitting
- Track status in the dashboard. On launch week, reply to comments and share the launch page.
