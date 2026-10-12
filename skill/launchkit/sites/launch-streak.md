---
id: launch-streak
name: "Launch Streak"
url: https://launchstreak.dev/
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

# Launch Streak

Gamified launch board: makers keep a daily activity streak and earn "sparks" that buy promotion and relaunches. Advertises a free dofollow backlink. Sister site of Fast Launch (.dev) and LaunchPanda.

## Before you start
- Sign in is **Google only** ("No passwords"). If `submission.preferred_login` isn't Google or there's no logged-in Google session, mark `needs_human`.
- The launch form isn't visible without signing in. Fields below are expected, not confirmed.

## Field map (behind login; unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product URL | URL | `product.url` |
| Name | text | `product.name` |
| Tagline | short | `product.tagline_short` |
| Description | text | `product.description_short` |
| Category | Design, Marketing, Dev Tools, No-Code, Media, Other | closest to `product.categories[0]` |
| Logo | image | `assets.logo_square` |

## Steps
1. Check the category pages (/dev-tools, /marketing, /design, /no-code, /media, /other) for `product.name`; if listed, mark `live` and stop.
2. Click sign in, choose Google.
3. Open the launch or submit option in the dashboard and fill the fields.
4. Submit, screenshot to `.launchkit/evidence/launch-streak.png`, `launchkit mark launch-streak submitted`.

## Make the listing perform
- Ranking and promotion come from streaks and sparks earned by daily activity. That needs the founder to log in daily; tell the user and let them decide. Don't run daily activity for them.
- One clear category and a short tagline; cards are compact.

## Gotchas
- Sponsored slots are paid. Skip.
- Google-only login means an agent can't create an account here without the user's Google session.

## After submitting
- Log the listing URL once visible.
