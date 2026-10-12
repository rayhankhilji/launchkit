---
id: ramen-club-ex-indie-worldwide
name: "Ramen Club (ex-Indie Worldwide)"
url: https://ramenclub.com/
category: Community
mode: post
pricing: Paid
login: email           # members.ramenclub.com checkout, then Slack
captcha: unknown
backlink_required: no
review_time: instant after payment
verified: true
last_checked: 2026-10-12
---

# Ramen Club (formerly Indie Worldwide)

indieworldwide.co now redirects to ramenclub.com. It's a paid Slack community of 500+ bootstrapped SaaS founders, run by Charlie Ward, with a monthly demo day, two live workshops a month, mentors and tool discounts. Not free any more: GBP 25/month or GBP 170 lifetime, plus tax, with a 30-day money-back guarantee. Their FAQ says it's not aimed at ecommerce or D2C companies.

## Before you start
- This costs money. With `launch_settings.budget_usd` at 0, mark `skipped` with "paid community (GBP 25/mo)". Otherwise mark `needs_human` with the price and let the user decide and pay.
- Only a fit for bootstrapped SaaS. Skip for ecommerce, D2C, agencies.
- After joining, the user posts from their own Slack account. You only draft.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Plan | Monthly GBP 25 / Lifetime GBP 170 | user's choice (`members.ramenclub.com/join?plan=monthly` or `?plan=lifetime`) |
| Checkout name / email | text | `founder.name`, `submission.email` |
| Payment | card | the user enters it. Never you. |
| Slack intro | message | `founder.name`, what `product.name` does (`product.tagline`), stage (`product.status`), what you need help with |
| Demo day signup | form inside the community (unconfirmed) | `product.name`, `product.url`, `links.demo_video` |
| Member directory profile | text (unconfirmed) | `founder.bio_short`, `product.url` |

## Steps
1. Open https://ramenclub.com/ and read the pricing section. Confirm with the user before going further.
2. If approved, the user completes checkout at members.ramenclub.com and accepts the Slack invite.
3. Draft an intro post and a "here's what I'm building, roast my landing page" post from `copy.launch_post_story`. Save with `launchkit draft ramen-club-ex-indie-worldwide -`, mark `drafted`.
4. Ask the user to sign up for the next monthly demo day (details are inside Slack, unconfirmed from outside).
5. When posted, `launchkit mark ramen-club-ex-indie-worldwide submitted --listing-url <slack message link>`.

## Make the listing perform
- Demo day is the main launch moment. Prepare a 2-3 minute walkthrough recorded from `links.demo_video`.
- Members respond to honest numbers and specific asks ("my trial-to-paid is low, here's the funnel"). Use only profile numbers.
- Tag the relevant in-house mentor (growth, sales, SEO, legal) with one clear question instead of a general "thoughts?".

## Gotchas
- Old guides and lists still say "Indie Worldwide, free". Both are out of date.
- Ramen Space is a separate paid London coworking membership. Not needed.

## After submitting
- Stay active a few days after posting. Refund window is 30 days if the user decides it's not worth it.
