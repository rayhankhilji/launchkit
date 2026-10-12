---
id: hunt-startup
name: "Hunt Startup"
url: https://huntstartup.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: yes
review_time: "within 24 hours"
verified: true
last_checked: 2026-10-12
---

# Hunt Startup

Small startup directory and launch site. The free "Starter" listing is nofollow unless you add their badge, then it becomes dofollow. Processing is quick (within 24 hours).

## Before you start
- /submit redirects to /auth. Sign up with Google or email (`submission.preferred_login`). If no login exists and `submission.allow_account_creation` is false, mark `needs_human`.
- Badge for dofollow: check `launch_settings.add_badge_to_site`.

## Field map (form behind login; expected fields, unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Startup name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short | `product.tagline` |
| Description | long text | `product.description_medium` |
| Category | select (SaaS, AI, Marketing, Productivity, ...) | closest to `product.categories[0]` |
| Logo | image | `assets.logo_square` |
| Screenshot | image | `assets.screenshots[0]` |
| Listing type | Starter / Premium / Featured | Starter (free) |

## Steps
1. Search https://huntstartup.com for `product.name`; if found, mark `live` and stop.
2. Open https://huntstartup.com/submit, sign in at /auth.
3. Fill the form and choose **Starter Listing**.
4. If the user approved the badge, give them the badge code from /get-featured.
5. Submit, screenshot to `.launchkit/evidence/hunt-startup.png`, `launchkit mark hunt-startup submitted --note "starter, nofollow unless badge"`.

## Make the listing perform
- The homepage shows featured listings first (8 spots). Free listings sit in the category feeds, so the category choice matters most. Pick the exact one, not a broad one.
- Keep the tagline under about 60 chars so it doesn't truncate on cards.

## Gotchas
- Premium Listing is $7 one-time (permanent dofollow, no badge); Featured is $10 per week. Cheap, but still ask before paying.

## After submitting
- Expect approval within 24 hours. Log the listing URL as `live`.
