---
id: aitoolhunt
name: "AIToolHunt"
url: https://aitoolhunt.co/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "up to 30 days (free), instant (paid)"
verified: true
last_checked: 2026-10-12
---

# AIToolHunt

Indie AI directory (aitoolhunt.co) on a directory boilerplate. Profiles include categories, tags, FAQ and related tools, and it advertises 3 dofollow links at DR 50+. Free needs a homepage badge and has a slow queue.

## Before you start
- Login required: email + password, Google or GitHub (https://aitoolhunt.co/auth/login).
- Free plan requires the AIToolHunt badge/link on the user's homepage. Check `launch_settings.add_badge_to_site`.
- Have `assets.logo_square` and a 16:9 image (`assets.screenshots[0]` or `assets.og_image`).

## Field map

Form is behind login; fields unconfirmed, expected from the boilerplate:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Link | URL | `product.url` |
| Name | text | `product.name` |
| Categories | multi-select | 1-2 closest to `product.categories` |
| Tags | multi-select | `product.tags` |
| Description | ~160 chars | `product.description_short` |
| Introduction | markdown | `product.description_long` + features + use cases + an FAQ from `copy.faq` |
| Logo | image | `assets.logo_square` |
| Image | 16:9 image | `assets.screenshots[0]` |
| Plan | Free / Basic / Pro / Sponsor | Free |

## Steps
1. Search the site for `product.name`. If listed, mark `live` and stop.
2. Add the badge to the user's homepage if approved.
3. Open https://aitoolhunt.co/submit, sign in, fill, choose **Free**, complete badge verification, submit.
4. Screenshot to `.launchkit/evidence/aitoolhunt.png`. `launchkit mark aitoolhunt submitted --note "free, badge verified, up to 30 days"`

## Make the listing perform
- Profiles have an FAQ block. Feed it 3-4 entries from `copy.faq`; FAQ content helps the page rank.
- Plans (Oct 2026): Free (badge, reviewed within 30 days), Basic $15 (instant, no badge), Pro $19 (was $39; 15 days homepage Featured + featured badge), Sponsor $39 (was $79; 15-day rotating sponsor showcase, possible free guest post).
- If the user pays for Pro, time it with the launch week, since the featured window is only 15 days.

## Gotchas
- The free queue can take up to 30 days. Don't wait on it; mark submitted and move on.
- Removing the badge can remove the free listing.

## After submitting
- Check the dashboard for status. Mark `live` with the listing URL when published.
