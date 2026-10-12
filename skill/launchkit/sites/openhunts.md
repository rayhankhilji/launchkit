---
id: openhunts
name: "OpenHunts"
url: https://openhunts.com/projects/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: optional
review_time: "free queue about 60 weeks, or next available week with the badge"
verified: true
last_checked: 2026-10-12
---

# OpenHunts

Weekly launch platform pitched as a Product Hunt alternative for indie makers. Launches go live **Mondays at 8:00 AM UTC**,
stay on the homepage for 7 days, and community votes decide the weekly ranking. It's not an open-source project, despite
older lists calling it one.

## Before you start
- Login: Google, GitHub or email/password at /sign-in.
- Free plan has 20 slots a week and the queue was **about 60 weeks** on 2026-10-12. Adding the OpenHunts badge to the site
  skips that queue. Without the badge, a free launch is effectively too late to matter. Ask the user about the badge.
- Free gets a dofollow link only if the product finishes top 3, and a Twitter/newsletter shout-out if it's #1.
- Premium $9.9 (normally $19): launch next Monday or a chosen week, guaranteed dofollow. Highlight $20+. Approval only.
- Assets: `assets.logo_square`, `assets.screenshots`.

## Field map (Open Launch style form behind login; confirm on the page)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | required | `product.name` |
| Website URL | required URL | `product.url` |
| Description | text | `product.description_long` |
| Logo | required image | `assets.logo_square` |
| Product image | image | `assets.screenshots[0]` |
| Categories | up to 3 | best matches for `product.categories` |
| Tech stack / tags | chips | technology tags from `product.tags` |
| Platforms | checkboxes | `product.platforms` |
| Pricing | select | `product.pricing_model` mapped to Free / Freemium / Paid |
| GitHub, Twitter | optional URLs | `product.repo_url`, `links.twitter` |
| Launch week and plan | picker | Free; with badge, earliest Monday on or after `product.launch_date` |

## Steps
1. Search https://openhunts.com/ for `product.name`. If listed, mark `live`.
2. If the user agreed, add the OpenHunts badge (offered in the submit flow and on the pricing page) to the site footer.
3. Open https://openhunts.com/projects/submit, sign in, fill the form, pick the launch week and **Free**.
4. Screenshot to `.launchkit/evidence/openhunts.png`, then
   `launchkit mark openhunts submitted --note "free, launches Monday <date> 08:00 UTC"`.
5. If the user refused the badge and the queue is still about a year, mark `skipped` with "free queue ~60 weeks".

## Make the listing perform
- The week starts Monday 8:00 UTC. Votes in the first day set the order people see for the rest of the week; have the
  user share the link Monday morning.
- Post `copy.maker_comment` on the launch page and answer every comment; engagement is visible on the card.
- Detail pages are built for search and AI answers, so the description should name the problem and audience plainly.

## Gotchas
- Premium price shows as a discount from $19; treat the discount as temporary.
- Highlight placements are weekly ads, not a launch. Skip.

## After submitting
- Project page: `https://openhunts.com/projects/<slug>`. Check on launch Monday and at week end for the final rank.
