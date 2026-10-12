---
id: awwwards
name: "Awwwards"
url: https://www.awwwards.com/submit/
category: Design Gallery
mode: form
pricing: Paid
login: email           # account is created in step 2 of the checkout; social options unconfirmed
captcha: unknown
backlink_required: no
review_time: "up to 1 week to publish, then up to 3 months of SOTD eligibility"
verified: true
last_checked: 2026-10-12
---

# Awwwards

The biggest web design award site. A jury and Pro members score every approved site, and the best get Honorable Mention, Site of the Day (SOTD), Developer Award or Site of the Month. Worth it only for a design-led, custom-built site, and every entry costs money.

## Before you start
- Paid only: Standard Submission is $65 per website. "Standard + User Pro" is $165 a year (Pro plans also give 10-50% off submissions). With `launch_settings.budget_usd` below 65, mark `needs_human` with "Awwwards costs $65 per entry" and stop.
- Templates are rejected. Only custom work (or a demo of a template the submitter designed and built) is accepted.
- Ready a 1600x1200 px thumbnail (crop of the hero from `assets.screenshots[0]` or `assets.og_image`), plus extra images or short screen-recorded videos of the best sections at the same size.
- Account: created during checkout (step 02 "Sign Up"). Use `submission.email`.
- All purchases are final and non-refundable, so get explicit user approval first.

## Field map
Step 01 is visible without login; later steps are behind sign-up and checkout, so their fields below come from the FAQ and are unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| URL (step 01) | URL with http(s):// | `product.url` |
| Account sign up (step 02) | email + password | `submission.email`, browser-generated password |
| Payment (step 03) | card, or "Free - Use your free credit" | user enters card; never fill card details yourself |
| Website title | text | `product.name` |
| Description | text | `product.description_short` |
| Main thumbnail | 1600x1200 px | hero crop from `assets.screenshots[0]` |
| Extra images / videos | 1600x1200 px | remaining `assets.screenshots`, `assets.demo_gif` as video if possible |
| Categories / tags / technologies | chips | closest of their categories (e.g. "Mobile & Apps", "Business & Corporate") and real stack tags (React, WebGL, GSAP, Framer, Webflow) |
| Additional credits | Awwwards usernames | collaborators' usernames only if the user gives them |
| Country / credits | text | `company.country`, `company.legal_name` or `founder.name` |

## Steps
1. Search awwwards.com for `product.name` first. If it exists, `launchkit mark awwwards live --listing-url <url>` and stop.
2. Confirm budget and approval with the user. If not approved, mark `needs_human` with "paid: $65, non-refundable".
3. Open https://www.awwwards.com/submit/ and click **Buy Standard**. This opens /standard-submission/.
4. Step 01: paste `product.url` into **URL** and continue.
5. Step 02: sign up with `submission.email`. Mark `needs_human` on any CAPTCHA.
6. Step 03: hand the payment step to the user. Never type card details.
7. After payment, open User panel > Submissions and fill the draft (title, description, thumbnail, media, tags). Drafts can be edited until sent for review, then they lock, so check everything before sending.
8. Screenshot the "under review" state to `.launchkit/evidence/awwwards.png`, then `launchkit mark awwwards submitted --note "Awwwards paid entry, review up to 1 week"`.

## Make the listing perform
- Honorable Mention needs a jury score of 6.5+ and a user (Pro member) score of 6.5+. Design, usability, creativity and content are scored, so submit only when the site is finished, fast and polished on mobile.
- Add several section images and at least one video. The FAQ says more media gives better visibility and quality.
- Pick technology tags honestly. Pages like "WebGL sites", "Framer", "Webflow" and "React Websites" are browse paths that bring traffic.
- Submit early in the week so approval (manual, slower on weekends) lands on a weekday when voting is active.
- A site is eligible for SOTD for 3 months after approval; share the listing so friends with Pro accounts can see it, but never ask for or buy votes.

## Gotchas
- Pro plans and Academy upsells appear on the same page. Skip them unless the user asks.
- No refunds, even if the site is rejected.
- Jury scores are only shown to SOTD winners.

## After submitting
- Track status in User panel > Submissions; nominee status shows in the top right of the submission.
- If it wins anything, Awwwards provides a badge; adding it is optional (`launch_settings.add_badge_to_site`).
