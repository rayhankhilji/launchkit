---
id: peerpush
name: "Peerpush"
url: https://peerpush.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: optional
review_time: "free: waits behind paid launches; paid: instant"
verified: true
last_checked: 2026-10-12
---

# Peerpush

Launch platform and community for SaaS and indie products (peerpush.net now redirects to peerpush.com). Products earn
points from upvotes, comments, follows, visits and ratings, and win daily, weekly and monthly awards decided at midnight
UTC. They also run a newsletter (about 32k readers per their site).

## Before you start
- Account: sign up at https://peerpush.com/auth/login (method not visible without opening the page in a browser).
- Flow: paste the URL, Peerpush reads the site and drafts the listing, you check every field, then pick a plan.
- Free launch waits behind paid ones. Standard $39 one-time is instant; $89 adds 7 days of promotion, $229 adds 30.
  A user account with 400 PeerPush points can launch instantly for free. Skip paid tiers with budget 0.
- Assets: `assets.logo_square`, `assets.screenshots`, `links.demo_video` if any, a trial or signup link.

## Field map (AI-drafted from the URL; overwrite with profile values)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product URL | URL | `product.url` |
| Name | text | `product.name` |
| Tagline | one line | `product.tagline` |
| Description | text | `product.description_long`; replace any made-up claims in the AI draft |
| Categories / tags | chips | from `product.categories` and `product.tags` |
| Pricing | select | `product.pricing_model` |
| Logo, screenshots | images | `assets.logo_square`, `assets.screenshots` |
| Video | URL | `links.demo_video` |
| Plan | Free / Standard / promotion | Free |

## Steps
1. Search https://peerpush.com/ for `product.name`. If listed, mark `live`.
2. Open https://peerpush.com/submit, paste `product.url`, sign in when asked.
3. Read the generated draft line by line. Fix anything not backed by the profile (pricing, numbers, features).
4. Choose **Free**, confirm, screenshot to `.launchkit/evidence/peerpush.png`.
5. `launchkit mark peerpush submitted --note "free queue behind paid launches"`

## Make the listing perform
- Their own rules: clear description, real visuals and a trial link rank better. Add the demo video if one exists.
- A link from the product site back to its Peerpush page counts as verification and gives a small ranking boost.
  Suggest it to the user; it's optional.
- Points decay when activity stops. The user should be active (comment, upvote others) during launch week, not only on day one.
- Awards close at midnight UTC, so the launch day is a UTC day. Plan sharing around that.

## Gotchas
- The auto draft can invent features or wrong pricing. Never publish it unchecked.
- Revenue badges need verified revenue; skip unless the user has it.

## After submitting
- Listing URL pattern: `https://peerpush.com/p/<slug>`. Check the account dashboard for the launch date, mark `live`.
