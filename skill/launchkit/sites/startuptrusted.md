---
id: startuptrusted
name: "StartupTrusted"
url: https://startuptrusted.com/submit
category: Startup Database
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: yes
review_time: "manual review for free, instant for paid"
verified: true
last_checked: 2026-10-12
---

# StartupTrusted

StartupTrusted is an indie startup and SaaS directory run by the maker of LaunchIgniter. Free listings need a badge on your site; paid plans skip the badge and get published right away. Small audience, but a quick dofollow link.

## Before you start
- Login required: **Continue with Google** or email at https://startuptrusted.com/login?callbackUrl=/submit. Use `submission.preferred_login`.
- Decide the plan with the user:
  - **Free**: add the StartupTrusted badge to the user's homepage. The site checks the badge automatically before submission, then a human reviews.
  - **Pro** $11 one-time: dofollow link, instant publish, no badge.
  - **Featured** $19 one-time: homepage spot plus Pro benefits.
- Free needs a code change on the user's site. Only add the badge if the user agrees and the repo is available.
- Have `assets.logo_square`, `product.tagline`, `product.description_medium`, `product.categories`.

## Field map
The form is behind login, so order and limits are unconfirmed. Public listings show:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website URL | URL | `product.url` |
| Name | text | `product.name` |
| Tagline | short text | `product.tagline` |
| Description | long text | `product.description_medium` (use `product.description_long` if a larger box is offered) |
| Logo | image | `assets.logo_square` |
| Category | select | closest to `product.categories[0]` |
| Tags | multi | `product.tags` |
| Pricing | select | map `product.pricing_model`: free -> Free, freemium -> Freemium, paid -> Paid |
| Plan | Free / Pro / Featured | Free unless the user approved spend |

## Steps
1. If going Free, copy the badge snippet from the submit page and add it to the user's homepage footer, deploy, and confirm it is live.
2. Open https://startuptrusted.com/submit and sign in.
3. Fill fields from the map, pick the plan.
4. For Free, run the badge check; it must pass before you can submit.
5. Submit, screenshot to `.launchkit/evidence/startuptrusted.png`.
6. `launchkit mark startuptrusted submitted --note "free: manual review"` (or `live` for paid).

## Make the listing perform
- Featured ($19) is the only placement on the homepage; free listings live in category pages, so the category choice decides who sees it.
- Write the tagline as a plain statement of what it does; listings are cards with name, tagline and logo only.

## Gotchas
- Removing the badge later can get a free listing removed. Tell the user.
- Payments are one-time, not subscriptions.

## After submitting
- Find the listing via the site search. Check the dashboard for review status.
