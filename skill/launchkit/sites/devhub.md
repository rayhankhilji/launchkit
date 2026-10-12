---
id: devhub
name: "DevHub"
url: https://devhub.best/projects/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: yes
review_time: "free queue up to 60 days; launches 08:00 UTC"
verified: true
last_checked: 2026-10-12
---

# DevHub

Daily launch board for dev tools and tech products (built on the DirEasy boilerplate). Up to 5 free launches per day, ranked by upvotes and comments. Free launches need their badge and a site with Ahrefs DR 10 or more.

## Before you start
- Login: Google, GitHub, or email/password at https://devhub.best/sign-in. Use `submission.preferred_login`.
- Free launch requirements (from their pricing page): add the DevHub badge to the site and verify the backlink, and the site's DR must be at least 10 at submission time. If the user's domain is brand new, expect rejection; mark `skipped` with "DR under 10" if you know it is.
- Have `assets.logo_square`, `assets.screenshots` and `product.description_medium` ready.
- Ask for a preferred launch date. Free launches can be scheduled up to 90 days ahead.

## Field map (form is behind login; fields below are expected, not confirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Project name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline / short description | short text | `product.tagline` |
| Description | long text | `product.description_long` |
| Categories | select | closest to `product.categories` (they have dev-heavy categories such as Design Tools, Developer Tools, Freelancers) |
| Logo | image | `assets.logo_square` |
| Screenshots / cover | image | `assets.screenshots[0]` |
| Pricing | select | `product.pricing_model` |
| Launch type | Free / Premium / Premium Plus | Free |
| Launch date | date | earliest free date on or after `product.launch_date` |
| Badge verification | check | after the user adds the badge |

## Steps
1. Search https://devhub.best for `product.name`. If found, mark `live` and stop.
2. Open https://devhub.best/projects/submit, sign in.
3. Fill the form, choose **Free Launch**, pick the date.
4. Show the user the badge code. Once it's on their site, run the backlink check in the form.
5. Submit, screenshot to `.launchkit/evidence/devhub.png`, `launchkit mark devhub submitted --note "free launch <date>"`.
6. If DR or badge blocks you, mark `needs_human` with the reason.

## Make the listing perform
- Launches go live at 08:00 UTC. Only 5 free slots a day means your product is guaranteed a spot on that day's homepage list.
- Ranking is upvotes plus comments. Top 3 of the day earn a dofollow link; top 1 daily gets shared on their X account; top 5 of the week go in their newsletter. Tell the user to share the DevHub link on launch morning.
- Post `copy.maker_comment` as the first comment and answer every reply that day.
- Developer audience: lead the description with what it does technically, not marketing copy.

## Gotchas
- "Outbid" bid slots on the homepage start at $10 and the paid plans (Premium $9.90, Premium Plus $12.90, SEO package $49, DR Booster $50) are upsells. Skip unless budget allows.
- The free queue can be long (up to 60 days stated).

## After submitting
- Listing lives at `https://devhub.best/projects/<slug>`. Check it on the launch date and log the URL with `launchkit mark devhub live --listing-url <url>`.
