---
id: webflow-made-in-webflow
name: "Webflow Made in Webflow"
url: https://webflow.com/made-in-webflow/add
category: Design Gallery
mode: form
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "unknown"
verified: true
last_checked: 2026-10-12
---

# Webflow Made in Webflow

Webflow's community showcase of sites built in Webflow, browsable by category, "Most liked", and a "Cloneable sites only" filter. Only relevant if `product.url` is actually built and hosted on Webflow. The **Showcase your site** button on https://webflow.com/made-in-webflow goes to `/made-in-webflow/add`, which needs a Webflow login.

## Before you start
- Confirm the site is built in Webflow (page source has `data-wf-site` or `webflow.js`, or the user says so). If not, mark `skipped` ("not built on Webflow").
- The user needs their own Webflow account that owns the site project. The agent should not create a Webflow account for this; ask the user to log in, or mark `needs_human`.
- The add form is behind login and was not seen. Fields below are unconfirmed; Made in Webflow listings show a title, a thumbnail, the creator's profile, likes/views and an optional clone button.

## Field map (unconfirmed, behind login)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Site / project | pick from the user's Webflow sites | the project behind `product.url` |
| Title | text | `product.name` |
| Description | text | `product.description_short` |
| Thumbnail / cover image | image | `assets.og_image` or the first of `assets.screenshots` (1440px wide hero) |
| Live site URL | URL | `product.url` |
| Categories / tags | select | closest match to `product.categories` (e.g. SaaS, Technology, Startup, Landing Page) |
| Cloneable | toggle | **off** unless the user explicitly wants the project to be cloneable |

## Steps
1. Open https://webflow.com/made-in-webflow and search for `product.name`. If listed, mark `live` and stop.
2. Click **Showcase your site** (goes to `/made-in-webflow/add`; redirects to login if signed out). Ask the user to sign in to their Webflow account.
3. Pick the site project, fill the fields from the map, keep Cloneable off.
4. Publish/submit the showcase entry. Screenshot to `.launchkit/evidence/webflow-made-in-webflow.png`.
5. `launchkit mark webflow-made-in-webflow submitted --note "showcase entry on user's Webflow profile"`

## Make the listing perform
- Ranking on the gallery is driven by likes and views ("Most liked" sort). Ask the user to share the showcase link with their team and the Webflow community once it's up.
- A strong thumbnail matters most; the gallery is a grid of cover images.
- Making a site cloneable gets more traffic (there's a "Cloneable sites only" filter), but it lets anyone copy the design. That's the user's call; default is off.

## Gotchas
- `/made-in-webflow/add` is protected by bot detection when not logged in ("Access to this page has been denied"). Use the user's normal logged-in browser.
- The showcase lives on the user's Webflow profile, so the profile name and avatar are public.

## After submitting
- The entry URL looks like `https://webflow.com/made-in-webflow/website/<slug>`. Mark `live` with it once it's visible.
