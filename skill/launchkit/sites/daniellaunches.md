---
id: daniellaunches
name: "DanielLaunches"
url: https://daniellaunches.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: optional
review_time: "free: review queue; Pro: skips it"
verified: true
last_checked: 2026-10-12
---

# DanielLaunches

Daily launch board (8 launches a day) by Daniel Smidstrup. Each product gets a permanent launch page with public traffic stats, and winners get featured in a marketing guide.

## Before you start
- Plans (https://daniellaunches.com/pricing): **Standard, free**: permanent page, 2 backlinks (VerifiedDR DR 70 + DanielLaunches DR 59), public traffic stats, **requires their badge**; remove the badge and the listing and backlinks go offline. **Pro $9.99 one-time**: no badge, one of four featured spots on launch day, skips the review queue.
- Free needs the badge. Check `launch_settings.add_badge_to_site`; if "no", mark `skipped`.
- Login: /login; method not confirmed.
- Traffic stats are public. Tell the user.

## Field map
The submit form loads client-side after login, so fields are unconfirmed. Expect the standard set:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website | URL | `product.url` |
| Tagline | short | `product.tagline` |
| Description | text | `product.description_medium` |
| Category | select | closest to `product.categories[0]` |
| Logo / images | uploads | `assets.logo_square`, `assets.screenshots` |
| Launch date | date | earliest free date offered |
| Plan | Standard / Pro | **Standard** unless approved |

## Steps
1. Search daniellaunches.com/tools for `product.name`. If listed, mark `live`.
2. Open https://daniellaunches.com/submit, log in.
3. Fill the form, choose Standard, pick a date.
4. Copy the badge code to the user. Verification is automatic once it's on the site.
5. `launchkit mark daniellaunches submitted --note "free; badge required; launch <date>"`.

## Make the listing perform
- Only 8 launches a day, so a launch gets real homepage time. Share on launch day; winners appear on /winners and in a guide.
- Keep the badge up permanently or the backlinks drop.

## Gotchas
- Pro changes launch day only. After that, Standard and Pro pages are the same.

## After submitting
- The launch page shows traffic stats. Share them with the user after launch.
