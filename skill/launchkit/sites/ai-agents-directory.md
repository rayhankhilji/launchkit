---
id: ai-agents-directory
name: "AI Agents Directory"
url: https://aiagentsdirectory.com/submit-agent
category: AI Directory
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: yes
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# AI Agents Directory

A directory and "landscape map" of AI agents with a 20K+ newsletter, a leaderboard and an agent chat helper (DIRA). Only worth it if the product really is an AI agent or agent tooling. The submit page is **behind a sign-in** ("Sign In to Continue"), so the form fields below are not confirmed.

## Before you start
- The free listing requires an AAD badge backlink on the user's site. Ask the user before adding it.
- Paid tiers from https://aiagentsdirectory.com/sponsor (2026-10-12):
  - Free: $0, category placement, one newsletter mention, no-follow backlink, badge required.
  - Starter: $49, 5-day visibility boost.
  - Growth: $99 promo (list $149), up to 3 categories, dofollow backlink, social posts, top category placement, landscape highlight, no badge needed.
  - Ecosystem Partner: $499 promo (list $999), one-time, up to 5 categories, one month featured on site and newsletter.
- Login method is unconfirmed. /login returned a 404 page on 2026-10-12. The sign-in is a modal on the submit page. Create an account only if `submission.allow_account_creation` is true.

## Field map

Unconfirmed (form is behind sign-in). Expect, and map like this:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Agent name | text | `product.name` |
| Website | URL | `product.url` |
| Short description / tagline | short text | `product.tagline` |
| Description | long text | `product.description_medium` |
| Category | select, up to 1 free | closest agent category to `product.categories[0]` (e.g. Coding, Sales, Marketing, SEO, Video, Voice) |
| Pricing | select | map `product.pricing_model` |
| Logo | image | `assets.logo_square` |
| Contact email | email | `submission.email` |

## Steps
1. Open https://aiagentsdirectory.com/submit-agent and click **Sign In to Continue**.
2. Sign in with `submission.preferred_login` if offered. Stop for the user on any CAPTCHA.
3. Fill the form with the map. Write down the real field names and limits for this guide.
4. Choose the Free tier unless the user approved a paid one. Stop at any payment.
5. If free, add the badge snippet to the user's site only with approval.
6. Screenshot to `.launchkit/evidence/ai-agents-directory.png`, then `launchkit mark ai-agents-directory submitted`.

## Make the listing perform
- The site is sorted by agent category and shown on a landscape map. Pick the one category where buyers would look.
- Search on the site suggests Coding, Sales, Marketing, SEO, Video, Voice. Use those words in the tagline if they fit.

## Gotchas
- The newsletter box on the submit page is not the submission form.
- No-follow on the free tier. Dofollow starts at Growth.

## After submitting
- Search the directory for `product.name`. Keep the badge live for as long as the free listing should stay up.
