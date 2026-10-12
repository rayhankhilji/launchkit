---
id: next-launch
name: "Next Launch"
url: https://nextlaunch.io/projects/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: optional
review_time: "launches on the chosen date at 8:00 UTC; free dates fill 5 a day"
verified: true
last_checked: 2026-10-12
---

# Next Launch

Daily launch board built on the open-source Open Launch codebase (repo ruguodev/next-launch). Products launch at
8:00 AM UTC, the community upvotes, and the daily top 3 get a winner badge. Free launches are capped at 5 a day.

## Before you start
- Login: Google, GitHub or email/password. `/submit` is a 404; the form is at `/projects/submit`.
- Free launch: queue up to 180 days out, dofollow link **only if the product finishes top 3 of its day and the Next Launch
  badge is on the site**. Badge rules (https://nextlaunch.io/legal/badges): visible image, at least 150x44 px, linked to
  https://nextlaunch.io with dofollow, ideally in the footer of every page. Ask the user before adding it.
- Premium launch $9: 10 slots a day, earlier dates, guaranteed dofollow, no badge. Only with approval.
- Assets: `assets.logo_square` under **1 MB**, `assets.screenshots[0]` as the product image.

## Field map (4-step form: Project Info, Details, Launch Date, Review)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name (step 1) | required | `product.name` |
| Website URL | required URL | `product.url` |
| Description | rich text | `product.description_long` |
| Logo | required image, max 1 MB | `assets.logo_square` |
| Product image | image | `assets.screenshots[0]` |
| Categories (step 2) | required, max 3 | best matches for `product.categories` |
| Tech stack | type and press Enter | main tools from `product.tags` that are technologies (React, Python...) |
| Platforms | checkboxes | `product.platforms` (web, ios, android, desktop, api...) |
| Pricing | select | `product.pricing_model`: free -> Free, freemium -> Freemium, paid/trial -> Paid |
| GitHub URL | optional | `product.repo_url` if `product.open_source` |
| Twitter URL | optional | `links.twitter` |
| Launch type and date (step 3) | Free / Premium, calendar | Free; earliest open date on or after `product.launch_date` |

## Steps
1. Search https://nextlaunch.io/ for `product.name`. If listed, mark `live`.
2. Open https://nextlaunch.io/projects/submit and sign in.
3. Step 1 Project Info, step 2 Details, step 3 pick Free and a date, step 4 Review then **Submit**.
4. Screenshot to `.launchkit/evidence/next-launch.png`, then
   `launchkit mark next-launch submitted --note "free launch <date> 08:00 UTC"`.

## Make the listing perform
- Launch time is fixed at 8:00 UTC, so the first hours fall in the European morning. Tell the user to share the listing
  then and to reply to comments during that day.
- Top 3 of the day is what earns the dofollow link and a winner badge on free. Pick a date the user can actively promote,
  not just the earliest one.
- Three accurate categories put the product on three category pages. Don't spend one on a loose fit.

## Gotchas
- Logo over 1 MB fails the upload. Compress first.
- Free dates far out are common; if the earliest is weeks after `launch_date`, still book it and note the date.

## After submitting
- Project page: `https://nextlaunch.io/projects/<slug>`. Check it on launch day and mark `live`.
