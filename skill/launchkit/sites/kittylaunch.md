---
id: kittylaunch
name: "KittyLaunch"
url: https://kittylaunch.com/
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: yes
review_time: "queue-based launch date (free); weekly competition Monday to Sunday UTC"
verified: true
last_checked: 2026-10-12
---

# KittyLaunch

Weekly launch platform with good docs. Free Launch gives a permanent listing, 7 days on the homepage, a queued launch date and three dofollow links once the product is badge-verified.

## Before you start
- Sign in via **Get Started Free** on the homepage (there's no public /submit URL; it 404s). Then choose the option to submit a product.
- KittyLaunch may ask you to support other makers' products before the form opens. Follow the screen, but never upvote or comment on behalf of the user without asking.
- Badge verification is needed for the 3 dofollow links. Check `launch_settings.add_badge_to_site`.
- The website URL can't be changed on relaunch. Double check `product.url`.

## Field map

Step 1, Core Details:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short | `product.tagline` |
| Short description | text | `product.description_short` |
| Full description | rich text | `product.description_long` with headings: problem, who it's for, main features |
| Category | select | closest to `product.categories[0]` |
| Tags | multi | `product.tags` (only relevant ones; unrelated tags get moderated) |
| Pricing type | select | `product.pricing_model` |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Demo video URL | optional | `links.demo_video` |

Step 2, Launch Settings: Launch Plan **Free Launch**; launch option **Next Available Week** or **Schedule a Date** (a Monday); badge verification.

Step 3, Engagement & Deals: first comment from `copy.maker_comment`; deal from `product.deal_or_promo_code` if any.

## Steps
1. Search https://kittylaunch.com for `product.name`; if found, mark `live` and stop.
2. Click **Get Started Free**, sign in, open the submit flow.
3. Fill the three steps. Don't use **Launch Now** unless it's Monday; later days get fewer days in the weekly competition.
4. Give the user the badge code, then run the verification check. You can **Save as Draft** while waiting.
5. Submit, screenshot to `.launchkit/evidence/kittylaunch.png`, `launchkit mark kittylaunch submitted --note "free launch week of <date>"`.

## Make the listing perform
- Weekly leaderboard resets Monday UTC. Launch on a Monday so the product gets the full week.
- Their media team picks products to share on socials based on a complete page: name, tagline, short and full descriptions, tags, logo, screenshots, pricing, working site. Fill all of it.
- First comment: why you built it, who it serves, what feedback you want (their own guidance).

## Gotchas
- Skip the line ($9), SuperKitty ($29), Spotlight ($15/week, $49/month), Highlight ($9/month) and Review Article ($29) are paid. Skip unless approved.
- Free launch weeks fill up; the calendar marks full weeks.

## After submitting
- Product page is permanent. Log it as `live` on launch day.
