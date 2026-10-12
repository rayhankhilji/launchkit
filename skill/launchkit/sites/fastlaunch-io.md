---
id: fastlaunch-io
name: "FastLaunch (.io)"
url: https://fastlaunch.io/projects/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "scheduled launch; 08:00 UTC on the chosen day"
verified: true
last_checked: 2026-10-12
---

# FastLaunch (.io)

Daily launch platform built on the open-source Open-Launch template (same as Firsto and Launch Vault). Five free launches per day with a schedule window up to 180 days. Free links are dofollow only for the daily top 3.

## Before you start
- Sign in at https://fastlaunch.io/sign-in (method not visible logged out; Open-Launch sites usually offer Google, GitHub and email).
- Ask for a preferred launch date; free slots can be booked up to 180 days out.
- Have `assets.logo_square`, one product image, and short + long descriptions ready.

## Field map (Open-Launch form, behind login; unconfirmed on this site)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Website URL | URL | `product.url` |
| Short description / tagline | short | `product.tagline` |
| Description | long text | `product.description_long` |
| Categories | up to 3 | closest to `product.categories` |
| Tech stack | tags | from `product.tags` if they're technologies; otherwise skip |
| Platforms | web / mobile / desktop etc. | `product.platforms` |
| Pricing | Free / Freemium / Paid | `product.pricing_model` |
| GitHub URL / X URL | optional | `product.repo_url` or `links.github`; `links.twitter` |
| Logo | image | `assets.logo_square` |
| Product image | image | `assets.screenshots[0]` |
| Launch type + date | Free / Premium | Free, earliest date on or after `product.launch_date` |

## Steps
1. Search https://fastlaunch.io for `product.name`; if found, mark `live` and stop.
2. Open https://fastlaunch.io/projects/submit, sign in.
3. Fill each step, choose **Free Launch** and the date.
4. Submit, screenshot to `.launchkit/evidence/fastlaunch-io.png`, `launchkit mark fastlaunch-io submitted --note "free launch <date> 08:00 UTC"`.

## Make the listing perform
- Launches open at 08:00 UTC. Rankings come from upvotes during the day; top 3 earn the dofollow link and a homepage spot.
- Pick a day that matches the user's own announcement so their traffic lands on the FastLaunch page in the first hours.
- Write the first comment with `copy.maker_comment`.

## Gotchas
- Premium ($9.90, discounted from $29) and Sponsor ($149) are upsells. Skip with budget 0.
- Don't confuse with fastlaunch.dev, a different site.

## After submitting
- Project page: `https://fastlaunch.io/projects/<slug>`. Check on launch day and log it as `live`. Support: support@fastlaunch.io.
