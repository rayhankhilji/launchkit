---
id: aura
name: "Aura++"
url: https://auraplusplus.com/projects/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: optional
review_time: "free: scheduled launch, queue; all launches go live 8:00 AM UTC"
verified: true
last_checked: 2026-10-12
---

# Aura++

Indie launch platform (DR 73, claims 40k+ monthly traffic) with daily launches at 8:00 AM UTC and limited daily slots. Votes and comments decide the daily ranking.

## Before you start
- Plans (https://auraplusplus.com/pricing): **Free $0**: 5 slots a day, standard queue, scheduling up to 365 days out, homepage feature, at least one Pinterest post. **Dofollow only if the product finishes top 3 for the day AND shows the Aura++ badge.** **Premium $29**: guaranteed dofollow, skip the free queue, launch blog post, social posts, up to 60 days ahead. **Premium Plus $69**: spotlight placement plus a 7-day site-wide ad. A discount code was running when we checked.
- Login: Sign in / Sign up pages; provider list not confirmed. Use `submission.preferred_login`.
- Assets: `assets.logo_square`, `assets.screenshots`.

## Field map
The submit form is behind login. Their pricing page says you add product details, screenshots and categories, and that auto-fill works if you launched elsewhere. Confirm exact fields on the form.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Website | URL | `product.url` |
| Tagline | short | `product.tagline` |
| Description | text | `product.description_long` |
| Categories | multi-select | map `product.categories` |
| Logo | square | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Plan and launch date | Free / Premium / Premium Plus | **Free**, earliest date offered |

## Steps
1. Search auraplusplus.com for `product.name`. If listed, mark `live`.
2. Open https://auraplusplus.com/projects/submit and sign in.
3. Fill the form, choose **Launch for Free**, pick the date, submit.
4. If `add_badge_to_site` allows it, copy the badge code for the user (needed for the dofollow).
5. `launchkit mark aura submitted --note "free launch <date>, dofollow needs top 3 + badge"`.

## Make the listing perform
- Ranking is mainly votes and comments on launch day. Launch at 8:00 AM UTC means Europe is awake first; tell the user to share early in the day.
- Their Launch Guide (/launch-guide) and Launch Kit cover promotion. Reply to every comment on the listing.

## Gotchas
- Many add-ons (DR Booster, guest posts, Bids). Skip them.

## After submitting
- Check the launch day and remind the user.
