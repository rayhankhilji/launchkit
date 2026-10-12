---
id: startup-fame
name: "Startup Fame"
url: https://startupfa.me/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: yes
review_time: "about 7 days (free); under 30 seconds (paid)"
verified: true
last_checked: 2026-10-12
---

# Startup Fame

Reviewed startup directory (DR 80+) with category, location and founder pages. The free Verified plan needs a Startup Fame badge on the homepage; paid plans are monthly subscriptions that skip the badge.

## Before you start
- The submit page is client-rendered and did not load in a headless browser (it showed a 404 shell), so the form fields and login method are unconfirmed. Open it in a normal browser.
- Have `product.name`, `product.url`, `product.tagline`, `product.description_medium`, `product.categories`, `company.country`, `assets.logo_square`, `assets.screenshots` ready.
- Free Verified: add the Startup Fame badge to the homepage, a bot checks it, then review takes about 7 days. The dofollow link lasts while the listing stays listed.
- Highlight $19/month (daily Today's Highlights) and Spotlight $149/month (homepage priority, limited spots, 0 left when checked) are recurring. Never pick them without user approval.

## Field map
Unconfirmed. Based on what listings show publicly:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Startup name | text | `product.name` |
| Website URL | URL | `product.url` (they add UTM tags to outbound links themselves) |
| Tagline | short text | `product.tagline` |
| Description | long text | `product.description_medium` |
| Category | select (Artificial Intelligence, Developer Tools, Marketing, Productivity, Launch Platforms, Gaming, Sales, Finance, Communication, SEO, ...) | closest match to `product.categories[0]` |
| Location | country | `company.country` |
| Founder | name / social | `founder.name`, `founder.twitter` |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Plan | Verified / Highlight / Spotlight | Verified |

## Steps
1. Open https://startupfa.me/submit. Sign in with `submission.preferred_login` if asked; create an account only if allowed.
2. Fill the fields as they appear and record any field not in this map.
3. Choose **Verified**. If `launch_settings.add_badge_to_site` is true, add the badge to the homepage, then run the badge check. If not allowed, stop and ask the user.
4. Submit. Screenshot to `.launchkit/evidence/startup-fame.png`.
5. `launchkit mark startup-fame submitted --note "Verified, review ~7 days"`

## Make the listing perform
- Pick the narrowest category and set the country; location and founder pages are extra entry points.
- Edits are unlimited, so add screenshots and update copy after approval.
- The dashboard shows click stats; check them after a week to see if the listing earns traffic.

## Gotchas
- The badge must stay on the homepage (not a subpage). Removing it can drop the listing and its link.
- Their FAQ advises against mass directory submissions; keep the copy specific to the product, not generic.

## After submitting
- Wait about 7 days for review. Confirm the listing page and its dofollow link once approved.
