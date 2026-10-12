---
id: launchclash
name: "LaunchClash"
url: https://launchclash.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# LaunchClash

A small weekly launch directory. Products sit under "Upcoming", then "Launched This Week", then "Launched", and the
week's top upvoted products go on the /winners page. Traffic is modest; it's worth ten minutes for the listing and link.
Same template and owner as My Launch Stash (both carry the "We submit your SaaS to 140+ directories" ad).

## Before you start
- Login is **Google only** (both /login and /signup offer just "Log in with Google"). Use the user's Google account.
  If `submission.preferred_login` isn't google and the user has no Google account, mark `needs_human`.
- Have `assets.logo_square` and at least one of `assets.screenshots` ready.
- The submit form is behind login, so field names below come from the public listing pages and are partly unconfirmed.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short, about 50-80 chars (cards show one line) | `product.tagline_short`, else `product.tagline` |
| Description | long text | `product.description_long` (falls back to `description_medium`) |
| Categories | multi-select | up to 3-4 from their list: AI Assistants, Analytics & Data, APIs, Automation, Content Creation, Design Tools, Dev Tools, Marketing, No Code & Low Code, Productivity & Management, SEO, Software, Video... map from `product.categories` |
| Pricing | select | `product.pricing_model`: free -> Free, freemium -> Freemium, paid -> Paid, trial -> Free trial |
| Logo | image | `assets.logo_square` |
| Screenshot / image | image | `assets.screenshots[0]` |
| Launch date / week | picker (if shown) | earliest free week on or after `product.launch_date` |

## Steps
1. Open https://launchclash.com/ and search for `product.name`. If it's already listed, mark `live` with the URL and stop.
2. Go to https://launchclash.com/submit and click **Log in with Google**.
3. Fill the form using the field map. Use the exact category names from their list.
4. If a plan step appears, pick the free option. Skip any "featured" upgrade unless the user approved spend.
5. Submit, screenshot the confirmation to `.launchkit/evidence/launchclash.png`.
6. `launchkit mark launchclash submitted --note "<confirmation text, launch week if shown>"`

## Make the listing perform
- Cards show name, tagline, category and pricing badge only. A short, concrete tagline beats a long one.
- Ranking inside the week is by upvotes. Tell the user the launch week so they can share the listing link that week.
- "Productivity & Management", "AI Assistants" and "Content Creation" are the busiest categories; pick a narrower one
  (e.g. "Dev Tools", "SEO") if it fits, so the product isn't buried.

## Gotchas
- The top banner and sidebar ads are for a paid submission service. Ignore them.
- A free listing may carry a nofollow link or require their badge; confirm on the form and record it in the note.

## After submitting
- Listing URL pattern: `https://launchclash.com/product/<slug>`. Check it during the launch week and on /winners after.
