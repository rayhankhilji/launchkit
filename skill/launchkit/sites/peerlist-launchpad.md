---
id: peerlist-launchpad
name: "Peerlist Launchpad"
url: https://peerlist.io/launchpad
category: Launch Platform
mode: form
pricing: Free
login: unknown
captcha: unknown
backlink_required: no
review_time: "launches go live the Monday of the chosen week"
verified: true
last_checked: 2026-10-12
---

# Peerlist Launchpad

Weekly launchpad on Peerlist, a professional network for developers and designers. Projects get early users and feedback from that audience. Weekly leaderboard; top 3 get a profile badge and a newsletter feature.

## Before you start
- You need a Peerlist profile (Create Profile / Log in). The founder should launch from their own profile: launches are tied to a person.
- Launch opens every Monday from 12:00am to 11:59pm UTC and the week runs Monday to Sunday (e.g. "Week 42, Oct 12 - Oct 18").
- Launching is free. A paid "Featured launch" slot is sold separately ("Book your slot"). Skip it.
- The launch form is behind login, so fields below are unconfirmed.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Project name | text | `product.name` |
| Tagline | short (cards show one line) | `product.tagline` |
| Project URL | URL | `product.url` |
| Description | text | `product.description_medium` |
| Categories | multi (Marketing, AI, Productivity, DevTool, SaaS, Ecommerce, Gaming, SEO Tools...) | map `product.categories`, 2-3 max |
| Logo, images, video | uploads | `assets.logo_square`, `assets.screenshots`, `links.demo_video` |
| Collaborators | Peerlist users | co-founders if they have profiles |
| Launch week | week picker | the next week the user can be online on Monday |

## Steps
1. Ask the user to log in to Peerlist (or allow account creation via `submission.preferred_login`). The profile should have a real name, photo and `founder.bio_short`.
2. Open https://peerlist.io/launchpad, click **Launch**, fill the form.
3. Pick the week, submit, screenshot.
4. `launchkit mark peerlist-launchpad submitted --note "launches Monday <date>"`.

## Make the listing perform
- Voting lasts the week; Monday is when the launch appears and gets the most attention. The user should post on Peerlist Scroll and their own channels that Monday.
- The audience is builders. DevTool, AI and Productivity categories fit best; show how it's built.
- Reply to every comment. Top 3 get the badge and newsletter feature.

## Gotchas
- A thin or empty Peerlist profile hurts credibility. Fill it before launching.

## After submitting
- Check the leaderboard at https://peerlist.io/launchpad on launch week.
