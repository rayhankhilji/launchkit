---
id: toolfio
name: Toolfio
url: https://toolfio.com/submit
category: Software Review Site
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: optional
review_time: unknown (premium is instant)
verified: true
last_checked: 2026-10-12
---

# Toolfio

Indie tool directory. Free listings require your domain to be DR 20 or higher and a permanent badge on your site. Premium ($18.99 one-time) skips the badge, approves instantly and features you on the homepage.

## Before you start
- Free tier rules: domain rating 20+, permanent badge with backlink. Bots recheck the badge and remove listings when it disappears.
- Ask the user before adding the badge (`launch_settings.add_badge_to_site`). New domains under DR 20 cannot use the free tier, so mark `skipped` with "free needs DR 20+, premium $18.99".
- Plans: Free ($0, ~1500 char listing, 1 backlink), Premium ($18.99, AI-written ~3500 char listing, 3 backlinks), Review Article ($39.99), Press ($299).
- Product must be live and working. Landing pages and waitlists are rejected.

## Field map

The submit page asks you to choose a plan first. The form after the plan choice was not fully visible (unconfirmed). Expect:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Plan | Free / Premium / Review Article | Free if eligible and badge approved |
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Description | about 1500 chars on free | `product.description_medium` |
| Category | picker | closest to `product.categories[0]` |
| Pricing | select | map `product.pricing_model` |
| Logo / screenshot | image | `assets.logo_square`, `assets.screenshots[0]` |
| Email | email | `submission.email` |
| Badge URL / check | free only | page where the badge is placed |

## Steps
1. Check eligibility: domain DR 20+ and badge approval, or an approved $18.99 spend.
2. Open https://toolfio.com/submit and pick the plan.
3. Fill the form with the mapping above. If it requires an account, follow `submission.allow_account_creation`.
4. For free, add the badge to the homepage or footer before submitting. Stop at payment for paid plans.
5. Screenshot to `.launchkit/evidence/toolfio.png`, `lk mark toolfio submitted --note "<plan>"`.

## Make the listing perform
- Write clear, factual copy with real pricing. Their guidelines reject vague or misleading listings.
- Premium listings get a permanent homepage spot and a longer SEO listing; free listings get neither.
- Questions go to hello@toolfio.com.

## Gotchas
- Badge removal later leads to delisting, so keep it in a global footer.
- No gambling, adult, illegal, or SEO-only sites.

## After submitting
- Look up the listing once approved and save its URL with `--listing-url`. Confirm the badge is still live.
