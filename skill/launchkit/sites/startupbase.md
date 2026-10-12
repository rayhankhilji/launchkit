---
id: startupbase
name: "StartupBase"
url: https://startupbase.io/launch
category: Launch Platform
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: optional
review_time: "free queue about 4-5 weeks; Premium from next day"
verified: true
last_checked: 2026-10-12
---

# StartupBase

Community launch platform with daily launches, collections (featured, trending, verified, AI agents, dev tools) and a 16.9K newsletter. Free launches wait in a queue and need a badge; Premium picks a date and gets a homepage feature.

## Before you start
- Login: Google, LinkedIn or X. Email code login is only for existing accounts, so a new user needs one of the social logins.
- Have `product.name`, `product.url`, `product.tagline`, `product.description_medium`, `assets.logo_square`, `assets.screenshots` ready.
- Free: $0, permanent listing, StartupBase badge required, queue about 4 to 5 weeks. Premium from $39 one-time: launch tomorrow or any date within 30 days, guaranteed homepage feature, permanent dofollow without badge. Add-ons (longer homepage time, newsletter, review article, LinkedIn posts) cost extra. Ask before paying.
- "Outrank" (pay what you want from $15) is a separate product, not a launch. Do not pick it.

## Field map
The page says founders add the product, logo and pitch, then pick a date. Exact fields are behind login and unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Pitch / description | long text | `product.description_medium` |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Category / tags | select | `product.categories`, `product.tags` |
| Plan | Free / Premium | Free unless approved |
| Launch date | date | next free queue slot, or `product.launch_date` for Premium |

## Steps
1. Open https://startupbase.io/launch and sign in with Google, LinkedIn or X (match `submission.preferred_login`).
2. Add the product, logo and pitch.
3. Choose **Free**. Add the badge to the site only if `launch_settings.add_badge_to_site` is true.
4. Pick the launch date offered and submit. Screenshot to `.launchkit/evidence/startupbase.png`.
5. `launchkit mark startupbase submitted --note "free queue, launch <date>"`

## Make the listing perform
- Launch day matters: share the product page that morning and post `copy.maker_comment` as the first comment.
- Getting into the trending and verified collections keeps the page visible after launch day; the badge makes the product verified.
- Use a tagline that names the user and the job; the daily list shows tagline only.

## Gotchas
- The free queue is weeks long. Do not upgrade to jump it without approval.
- Premium add-ons appear during checkout. Skip them.

## After submitting
- The dashboard shows the scheduled date. On launch day return to reply to comments.
