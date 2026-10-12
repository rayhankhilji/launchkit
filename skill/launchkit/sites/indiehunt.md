---
id: indiehunt
name: "IndieHunt"
url: https://indiehunt.io/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "about 24-48 hours, then the chosen Monday"
verified: true
last_checked: 2026-10-12
---

# IndieHunt

Weekly launch board for AI tools and indie SaaS, part of the same "Hunt" network as EarlyHunt. Launches go live Monday 08:00 UTC and compete for 7 days. Same form and rules as EarlyHunt, so submit both in the same session with slightly different copy.

## Before you start
- Login: email, Google or GitHub.
- Free launch needs an IndieHunt badge (or link) on the user's site. Ask if `add_badge_to_site` is "ask".
- 15 free slots per week, shared. Premium ($19) is unlimited.
- Prepare a 200+ word description, a logo and a preview image.

## Field map (mirrors the EarlyHunt form on the same platform)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website URL | URL | `product.url` (autofill can fetch logo, preview, name, categories) |
| Project name | text | `product.name` |
| Short description | 10-200 chars | `product.tagline` |
| Full description | 200+ words | `product.description_long` plus features and a short FAQ from `copy.faq`. Don't reuse the exact EarlyHunt text |
| Maker name | text | `founder.name` |
| Categories | 1-3 | closest to `product.categories` |
| Logo | upload or URL | `assets.logo_square` |
| Preview image | image | `assets.og_image` or `assets.screenshots[0]` |
| Screenshots, video, X handle | optional | `assets.screenshots`, `links.demo_video`, `founder.twitter` |
| Plan | Free / Premium $19 | Free |
| Launch week | calendar | first Monday with a free slot on or after `product.launch_date` |

## Steps
1. Search https://indiehunt.io for `product.name`; if found, mark `live` and stop.
2. Open https://indiehunt.io/submit and sign in.
3. Add details, URL and categories; choose **Free**.
4. Pick a launch week and complete badge verification (give the user the code).
5. Submit, screenshot to `.launchkit/evidence/indiehunt.png`, `launchkit mark indiehunt submitted --note "free, week of <date>"`.

## Make the listing perform
- Don't schedule IndieHunt and EarlyHunt for the same week if you can help it; the user can only push one link hard on a Monday. A week apart works well.
- Free links are nofollow; the weekly top 3 earn dofollow and a Hall of Fame badge. Upvotes during the live week drive the ranking.
- Every launch gets a launch story post, so concrete feature detail in the description helps it rank.

## Gotchas
- The bare homepage sometimes returns a blank "ok" page to scripts; /submit and /pricing work normally.
- Premium Launcher (bulk paid launches across the network) is a partner product. Ignore it.

## After submitting
- Watch the email for approval and scheduling. Mark `live` with the project URL on launch Monday.
