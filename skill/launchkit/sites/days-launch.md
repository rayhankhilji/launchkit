---
id: days-launch
name: "Days Launch"
url: https://dayslaunch.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "free: reviewed, 5 listed per day; Pro: list now"
verified: true
last_checked: 2026-10-12
---

# Days Launch

Small launch directory built on the Mkdirs template (by @nogeek_cn). Free listings need a backlink to Days Launch; only 5 free listings go live per day.

## Before you start
- Plans (https://dayslaunch.com/pricing): **Free $0**: 3 dofollow links, reviewed, only 5 listed per day, publish the day you want, **backlink to their site required**, no support. **Pro $9.9**: list now, no backlink required, featured at the top, social and newsletter share. **Sponsor $19.9/week**.
- Free needs a backlink. Check `launch_settings.add_badge_to_site`; if "no", mark `skipped`.
- Login: email + password, Google or GitHub (on /auth/login).

## Field map
The form is behind login. Mkdirs-based submit forms usually ask for the fields below; confirm on the live form.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Link | URL | `product.url` |
| Description | short | `product.tagline` or `product.description_short` |
| Introduction | markdown | `product.description_long` |
| Categories | multi-select | map `product.categories` |
| Tags | multi-select | map `product.tags` |
| Icon / logo | image | `assets.logo_square` |
| Image | screenshot | `assets.screenshots[0]` |
| Plan | Free / Pro | **Free** unless approved |

## Steps
1. Search dayslaunch.com for `product.name`. If listed, mark `live`.
2. Open https://dayslaunch.com/submit, sign in with Google/GitHub/email.
3. Fill the form, choose Free, submit.
4. Give the user the backlink/badge snippet to add to their site.
5. `launchkit mark days-launch submitted --note "free; backlink required; 5/day queue"`.

## Make the listing perform
- Pick a publish day; free listings appear in the 5 daily slots. Share on that day.
- Use specific categories and tags: browse pages by category and tag are the main traffic source.

## Gotchas
- No support on the free plan. If the listing doesn't appear, check the backlink is live.

## After submitting
- Check the dashboard for approval.
