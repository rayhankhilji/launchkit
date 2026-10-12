---
id: devhunt
name: "DevHunt"
url: https://devhunt.org/login
category: Launch Platform
mode: form
pricing: Free/Paid
login: github
captcha: unknown
backlink_required: no
review_time: "listed on submit; launches run Monday to Sunday weekly"
verified: true
last_checked: 2026-10-12
---

# DevHunt

Open-source launchpad for developer tools only (run by John Rush / MarsX). Each week a batch launches on the home page and signed-in developers vote. Worth it for dev tools, APIs, CLIs, SDKs, MCP servers and AI coding tools. Not a fit for anything else: they reject non-developer tools.

## Before you start
- Fit check: the product must be for developers. If `product.target_audience` isn't developers, mark `skipped` ("not a fit: dev tools only").
- Assets: `assets.logo_square`, `assets.screenshots` (several), optional `links.demo_video`.
- Login: GitHub (preferred for this audience) or Google.
- Pricing (FAQ): a **free listing** gets a permanent page at `/tool/<slug>` with a **nofollow** link but no launch week. A **launch costs $19** (pick the week, newsletter spot, permanent dofollow link). **Boosted $49** (above equal-vote launches, own post on X). With budget 0, do the free listing and tell the user the launch is $19.

## Field map
The submit form is behind login. Fields per the FAQ; confirm limits on the form.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Website | URL | `product.url` |
| Slogan / short description | short text | `product.tagline` |
| Description | text | `product.description_long` |
| Categories | multi-select | map `product.categories`/`tags` to their list: AI, AI Coding, AI Agents, MCP, Open Source, DevOps, Code, API, DB, Testing, Security, Monitoring, CLI, IDE, Hosting, Auth, Payments, UI Library, Analytics, Framework, Boilerplate, Other |
| Pricing | select | map `product.pricing_model` (free / freemium / paid) |
| GitHub repo | URL | `product.repo_url` if `product.open_source` |
| Logo | square image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Video | URL | `links.demo_video` |
| Launch week | week picker (paid) | leave unset unless the user approved $19 |

## Steps
1. Search https://devhunt.org/all-dev-tools for `product.name`. If it exists, mark `live` with the URL and stop.
2. Click **Submit** (goes to /login). Sign in with GitHub.
3. Open your account and choose to submit a new tool. Fill the fields above.
4. On the launch step, take the free listing only. Screenshot to `.launchkit/evidence/devhunt.png`.
5. `launchkit mark devhunt submitted --note "free listing (nofollow); launch week costs \$19"`.

## Make the listing perform
- Pick the most specific category (MCP, CLI, AI Coding) over "AI": category pages are where the long-tail traffic lands.
- Open source tools do well; put the GitHub link in and mention the license in the description.
- If the user pays to launch, voting runs the whole week, so a steady push beats one spike. Winners get the Tuesday newsletter, social mentions and a badge.
- Voters are developers. Write the description like a README intro: what it does, how to install, one code-level detail.

## Gotchas
- Fake-engagement services and NSFW tools are banned.
- The free listing link is nofollow. The dofollow link only comes with a paid launch.

## After submitting
- The tool page is `https://devhunt.org/tool/<slug>`. Scheduled launches show on /upcoming.
