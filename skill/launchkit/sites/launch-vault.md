---
id: launch-vault
name: "Launch Vault"
url: https://www.launchvault.dev/projects/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: yes
review_time: "badge verification, then the chosen Monday 08:00 UTC"
verified: true
last_checked: 2026-10-12
---

# Launch Vault

Weekly launch platform (Open-Launch based, DR about 58, newsletter of 5,000+). Launches open Monday 08:00 UTC and compete all week. 25 free slots per week; free launches need badge verification before they're scheduled.

## Before you start
- Sign in at https://www.launchvault.dev/sign-in (method not visible logged out; Open-Launch sites usually offer Google, GitHub and email).
- Badge on the user's site is required for any free launch (not just for the link). Check `launch_settings.add_badge_to_site`; if "never", mark `skipped`.
- Free dofollow only for the weekly top 3 (with badge).

## Field map (Open-Launch form, behind login; unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Website URL | URL | `product.url` |
| Short description / tagline | short | `product.tagline` |
| Description | long text | `product.description_long` |
| Categories | up to 3 | closest to `product.categories` (e.g. Artificial Intelligence, Developer Tools, Productivity, SaaS, Marketing) |
| Tech stack | tags | technologies from `product.tags` |
| Platforms | multi | `product.platforms` |
| Pricing | Free / Freemium / Paid | `product.pricing_model` |
| GitHub / X URLs | optional | `product.repo_url`, `links.twitter` |
| Logo | image | `assets.logo_square` |
| Product image | image | `assets.screenshots[0]` |
| Launch plan + week | Free / Premium | Free, first open Monday |
| Badge verification | check | after the badge is live |

## Steps
1. Search https://www.launchvault.dev for `product.name`; if found, mark `live` and stop.
2. Open https://www.launchvault.dev/projects/submit, sign in.
3. Fill the form, choose **Free**, pick a launch week.
4. Give the user the badge code; verify once it's on the site.
5. Submit, screenshot to `.launchkit/evidence/launch-vault.png`, `launchkit mark launch-vault submitted --note "free, week of <date>"`.

## Make the listing perform
- A full week of exposure from Monday. Upvotes over the week decide the top 3, who get the dofollow link and newsletter mention. Ask the user to share the page early in the week.
- First comment: `copy.maker_comment`.

## Gotchas
- Premium ($9.99, guaranteed permanent dofollow, priority review) and Premium + JustTools ($14.99, adds a second listing) are paid. Skip unless approved.

## After submitting
- Project page `https://www.launchvault.dev/projects/<slug>`. Support: support@launchvault.dev.
