---
id: peerlist-projects
name: "Peerlist Projects"
url: https://peerlist.io/
category: Community
mode: post
pricing: Free
login: google           # Google SSO, also email; GitHub etc. are integrations, not login
captcha: unknown        # peerlist.io sits behind Cloudflare; a bot check may appear
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# Peerlist Projects

Peerlist is a professional network for developers and designers. Adding the product as a **Project** on the founder's
profile is free, permanent and indexed by Google; it's also the prerequisite for a Peerlist Launchpad launch (separate
guide: `peerlist-launchpad`). Note: peerlist.io/projects now redirects to the Launchpad page.

## Before you start
- Account: the founder's Peerlist profile (sign up at peerlist.io/signup, Google SSO is easiest). Don't create one unless allowed.
- Assets: up to 4 cover images (`assets.screenshots`, `assets.og_image`), `links.demo_video` (URL), tech stack list.

## Field map (Work tab > Add Project; fields from help.peerlist.io)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Project name | text | `product.name` |
| Tagline | short text | `product.tagline_short` (or `product.tagline` if it fits) |
| Project URL | URL | `product.url` (demo link or landing page) |
| Cover images | up to 4 | Best screenshots, the first is the thumbnail |
| Video URL | URL | `links.demo_video` (YouTube/Loom) |
| Tools and tech stack | tag picker | From `product.tags` that are technologies; ask the user if unclear |
| Project category | dropdown | closest match to `product.categories[0]` (e.g. Productivity, DevTool, AI, SaaS, Marketing) |
| Open source? | Yes/No | `product.open_source`; add `product.repo_url` if asked |
| Project description | text, "highly recommended" | `product.description_long`; more detail helps SEO per Peerlist |
| Collaborators | optional | Co-founders with Peerlist profiles |

## Steps
1. Open https://peerlist.io/ and log in (or ask the user to). Go to the profile's **Work** tab > **Add Project**.
2. Draft all fields; save with `launchkit draft peerlist-projects -` and mark `drafted`.
3. Only if `allow_social_posting` is true and the user approved: fill the form in the order above and click **Save/Add Project**.
4. `launchkit mark peerlist-projects submitted --listing-url <project url>`.

## Make the listing perform
- Fill every field, especially the description; Peerlist says detail improves Google discoverability.
- Then share it in a Peerlist Scroll post with one screenshot and a specific question (exact post options unconfirmed without login).
- If the user wants a launch, Launchpad runs weekly: launches open Monday 00:00-23:59 UTC and the top 3 get a profile badge
  and newsletter feature. Use the `peerlist-launchpad` guide.
- Connect GitHub/Dribbble/Product Hunt integrations on the profile so the maker looks real.

## Gotchas
- Plain HTTP fetches of peerlist.io get a Cloudflare check; use the real browser.
- "Featured launch" slots on Launchpad are paid ads; skip with budget 0.

## After submitting
- The project shows on the founder's profile and can be selected when launching on Launchpad.
