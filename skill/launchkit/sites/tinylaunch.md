---
id: tinylaunch
name: "TinyLaunch"
url: https://www.tinylaunch.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: "free: weekly launch about 4 weeks out; Premium: next Monday"
verified: true
last_checked: 2026-10-12
---

# TinyLaunch

Weekly launch platform for small and indie products (founder: @chrissyinspace). Launches start on Mondays and stay on the homepage for several days. It also publishes an agent workflow at https://www.tinylaunch.com/llms.txt.

## Before you start
- Plans (https://www.tinylaunch.com/pricing): **Standard, free**: standard queue (about 4 weeks per llms.txt), on the homepage for multiple days, badge and high-authority backlink only for the top 3. **Premium $39/launch**: skip the queue (next Monday), guaranteed backlink, shown between 3rd and 4th place in random rotation.
- Login: email one-time code (6 digits). `submission.inbox_access` must allow reading the code, or the user types it.
- Required for every startup (llms.txt): name, tagline, description, category, logo, plus a maker profile (first name, last name, handle, optional X handle).
- Do not use their API. Use the website form like any other site.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Email | email | `submission.email` |
| One-time code | 6 digits | from inbox, or ask the user |
| Maker first name / last name | text | split `founder.name` |
| Maker handle | lowercase handle | from `founder.twitter` handle or the user |
| X handle | optional | `founder.twitter` |
| Startup name | text | `product.name` |
| Website | URL | `product.url` |
| Tagline | short | `product.tagline` |
| Description | text | `product.description_medium` |
| Category | single select from their list | closest to `product.categories[0]`; don't invent names |
| Logo | PNG/JPG square | `assets.logo_square` |
| Launch plan | Standard / Premium | **Standard** unless the user approved $39 |

## Steps
1. Search tinylaunch.com for `product.name`. If listed, mark `live` and stop.
2. Click **Submit Product**, sign in with `submission.email`, enter the code.
3. Create the maker profile if asked, then fill the startup form.
4. Choose the free Standard launch, note the assigned week, screenshot.
5. `launchkit mark tinylaunch submitted --note "free weekly launch, week of <date>"`.

## Make the listing perform
- Voting runs all week, so a steady stream of upvotes from the user's own audience beats a single push. Top 3 get the badge and the backlink.
- The tagline is the card text: make it concrete and short.
- Premium launches rotate in at places 3-4, so a free launch has to beat them on votes.

## Gotchas
- Upsells on the pricing page ($9 AI audit, $279 submission service). Skip them.

## After submitting
- Remind the user of the launch Monday so they can share it.
