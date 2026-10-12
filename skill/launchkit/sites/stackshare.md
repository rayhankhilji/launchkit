---
id: stackshare
name: StackShare
url: https://stackshare.io/
category: Software Review Site
mode: form
pricing: Free
login: github
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# StackShare

Developer tool catalog where engineers compare tools and show the stacks their companies use. Worth it only for developer tools, APIs, infrastructure and dev-facing SaaS. Not a fit for consumer or non-technical products.

## Before you start
- Requires sign-in with GitHub or Google. There is no email/password option. Use `submission.preferred_login`; GitHub fits best.
- Need: `assets.logo_square`, `product.tagline_short`, `product.description_short`, `links.docs`, `product.repo_url` if open source.
- Skip if `product.target_audience` is not developers or technical teams. Mark `skipped` with "not a dev tool".

## Field map

The tool form opens only after login (fields unconfirmed). Expected fields:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website | URL | `product.url` |
| Tagline / short description | short text | `product.tagline_short` |
| Description | text | `product.description_short` |
| Category / layer | picker (AI, Developer Tools, Infrastructure, Databases, Business Tools, Utilities) | closest match to `product.categories[0]` |
| Logo | image | `assets.logo_square` |
| GitHub repo | URL, optional | `product.repo_url` if `product.open_source` |
| Docs / Twitter | URL, optional | `links.docs`, `links.twitter` |

## Steps
1. Search https://stackshare.io/ for `product.name`. If the tool page exists, mark `live` with that URL.
2. On the homepage click **List a Tool**. A modal opens with **Continue with GitHub** and **Continue with Google**.
3. Sign in with the chosen provider. If 2FA or a new OAuth approval needs the user, mark `needs_human` with "StackShare OAuth login".
4. Fill the tool form using the mapping above and submit.
5. Screenshot the result to `.launchkit/evidence/stackshare.png`, then `lk mark stackshare submitted --note "added tool"`.

## Make the listing perform
- StackShare traffic comes from comparison pages ("X vs Y") and alternatives. Put the closest competitors from `product.competitors_alternatives` in the description so people searching those names find you.
- Tools gain weight when companies add them to their stacks. Ask the user to add the product to their own company stack and to invite real users to do the same.
- Keep the tagline concrete: what it does in under 10 words.

## Gotchas
- curl and fast automation hit a Vercel security checkpoint (HTTP 429). Use the real browser and go slowly.
- New tools may be moderated before they show in search. Duplicates of existing tools get merged.

## After submitting
- Open the tool page from your profile, confirm logo and description render, and record the URL with `--listing-url`.
