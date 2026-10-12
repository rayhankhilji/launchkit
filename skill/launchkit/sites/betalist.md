---
id: betalist
name: "BetaList"
url: https://betalist.com/submit
category: Launch Platform
mode: form
pricing: Paid
login: email
captcha: unknown
backlink_required: no
review_time: "depends on paid plan (shown at checkout)"
verified: true
last_checked: 2026-10-12
---

# BetaList

BetaList features pre-launch and recently launched tech startups to early adopters (70k+ newsletter subscribers, per their advertise page). **There is no free option any more**: their FAQ says all submissions are paid, with an automatic full refund if the startup isn't selected. With `launch_settings.budget_usd` at 0, prepare everything and mark `needs_human`.

## Before you start
- Check fit against https://betalist.com/criteria before anything else. They reject: products launched weeks ago or with big press coverage, blogs/newsletters/courses/agencies, template or default-Bootstrap landing pages, explainer-video-only pages, LaunchRock/Unbounce-style hosted pages, free subdomains (`*.vercel.app`, `*.netlify.app`, `*.herokuapp.com`), and direct App Store / Play / Kickstarter links. If `product.url` hits any of these, mark `skipped` ("not a fit: <reason>").
- The landing page must let visitors sign up, download or log in. "Follow us on X" doesn't count.
- Assets: `assets.logo_square` (icon) and `assets.screenshots`.
- Account: email + password, a magic link, or a "Sign in with" social button on https://betalist.com/login (which providers wasn't visible logged out).
- Decide with the user: which paid plan (price shown at the end of the form). Never pay without approval.

## Field map
The form sits behind login, so this list comes from their FAQ (the fields you can edit later). Confirm order and limits on the live form.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Startup name | text | `product.name` |
| Website URL | own domain only | `product.url` (BetaList adds `ref=betalist` and UTM params itself, don't add your own) |
| Pitch (one-liner) | short, unconfirmed limit | `product.tagline` |
| Description | text | `product.description_medium` |
| Icon | square image | `assets.logo_square` |
| Images | screenshots | `assets.screenshots`, best first |
| Plan | paid options | stop here, `needs_human` |

## Steps
1. Open https://betalist.com/submit. You'll be sent to /login. Sign in with `submission.preferred_login` or email.
2. Fill the fields above. Stage matters: if `product.status` is pre-launch, say so in the description. They feature each startup once pre-launch and once at launch.
3. At the plan step, screenshot the plan list and prices to `.launchkit/evidence/betalist.png`.
4. `launchkit mark betalist needs_human --note "Paid only; plans at checkout, full refund if rejected"`.

## Make the listing perform
- Selection is editorial. They pick startups with a clear value proposition, an idea they haven't seen before and a well-designed landing page. Lead the pitch with the new idea, not generic benefits.
- Trending Startups ranks by engagement, including how many tweets the post gets. Ask the user to share the listing on X on feature day.
- Newsletter inclusion is guaranteed only on some plans; otherwise only the most popular featured startups make it (at least 24h after featuring).
- If featured pre-launch, come back at launch for the second feature (a few weeks apart).

## Gotchas
- "Boost" ($99/week) is a separate ad product for already-featured startups. Skip it.
- Changing domain later requires the old URL to 301 to the new one.
- Contact details never appear on the listing, but scrapers harvest featured startups. Expect sales emails.

## After submitting
- Status lives at https://betalist.com/dashboard. The "Visit Site" button is a dofollow 301 with `ref=betalist`; check analytics for source "betalist".
