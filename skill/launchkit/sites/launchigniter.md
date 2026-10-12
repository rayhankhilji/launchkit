---
id: launchigniter
name: "LaunchIgniter"
url: https://launchigniter.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "manual review; launch week assigned, can slip if free slots run out"
verified: true
last_checked: 2026-10-12
---

# LaunchIgniter

Weekly launch platform (claims 10,000+ makers, DR 75). Each product gets a week on the homepage, the community upvotes
and comments, and the top 3 of the week get a Winner badge. Same owner as SaaSGrow and StartupTrusted.

## Before you start
- Free launches **require the LaunchIgniter badge on the product homepage**. Check `launch_settings.add_badge_to_site`;
  if it's "ask", ask the user before adding it. Without the badge the free launch won't pass review.
- On the free plan only the **top 3 products of the week get a dofollow link**. Basic ($12 one-time) and Pro ($15) give a
  lifetime dofollow link, no badge and a guaranteed date. Only buy with the user's approval.
- Account: their llms.txt says free submission uses email verification, so `inbox_access` may be needed for the code.
- Assets: `assets.logo_square`, `assets.screenshots`.

## Field map (form is behind login; fields inferred from listing pages)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | one line, shown under the name | `product.tagline` |
| Description | long text | `product.description_long` |
| Categories / tags | multi-select | from their list (AI, AI Agents, Developer Tools, Marketing Sales, No Code Platforms, Productivity, SaaS, SEO Tools, Vibe Coding Tools, Web App...) mapped from `product.categories` |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Launch week | picker | earliest week on or after `product.launch_date` |
| Plan | Free / Basic / Pro | Free unless the user approved spend |

## Steps
1. Search https://launchigniter.com/ for `product.name`. If listed, mark `live` and stop.
2. If the user agreed, add the badge snippet (shown in the submit flow) to the product homepage first, and confirm it's live.
3. Open https://launchigniter.com/submit, sign up or sign in, verify the email if asked.
4. Fill the form, choose the launch week, choose **Free Launch**, run the badge check.
5. If their checker is blocked by Cloudflare on the user's site, use the manual badge confirmation option they offer.
6. Submit, screenshot to `.launchkit/evidence/launchigniter.png`, then
   `launchkit mark launchigniter submitted --note "free launch, week of <date>, badge added"`.

## Make the listing perform
- The dofollow link on the free plan depends on finishing top 3, so the launch week matters. Pick a week when the user can
  share the listing link with their audience and reply to comments.
- Upvotes and comments drive rank. Post `copy.maker_comment` as the first comment on launch day.
- "Vibe Coded" is a separate tag on the homepage; use it only if the product was built that way.

## Gotchas
- The homepage pushes a "$99 directory submission service". That's an upsell, not part of launching.
- Free launch dates are not guaranteed. A week can slip if free slots fill up.

## After submitting
- Listing URL pattern: `https://launchigniter.com/product/<slug>`. Check /weekly-winners after the week ends.
- Keep the badge up; removing it can get a free listing pulled.
