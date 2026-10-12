---
id: framer-marketplace
name: "Framer Marketplace"
url: https://www.framer.com/marketplace/
category: No-Code
mode: manual
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Framer Marketplace

Framer's community marketplace for site templates, components, plugins and vectors (the URL now opens on /marketplace/templates/). Buyers are designers and founders building sites in Framer. Worth it only if the product can ship as a Framer plugin (editor integration), a component, or a template that showcases it.

## Before you start
- Artifact: a Framer template (a Framer project with a remix link), a component, a plugin (built with the Framer plugin API), or a vector set. A plain product listing is not possible.
- A Framer account, then join the creator program from https://www.framer.com/creators ("Become a creator"). The submission form sits in the creator dashboard behind login, so its exact fields are unconfirmed.
- Money: Framer says creators keep 100% of Marketplace earnings (0% platform fee). Paid listings link out to the creator's own checkout (live listings use Polar, Lemon Squeezy style links and dub.sh short links). Free templates link to a framer.link remix URL.
- Affiliate option: 50% of a referred user's subscription for 12 months. Ask the user if they want the referral link on their own site.

## Field map

Unconfirmed (dashboard is behind login). Based on what public listings display:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Type | Template / Component / Plugin / Vector | what the user built |
| Name | short | one or two words for templates; for plugins, `product.name` |
| Short description | one line | `product.tagline` |
| Description | long text | what it does, how to use it, then one line on `product.name` with `product.url` |
| Categories / style | select | closest match. Template categories include Portfolio, Startup, SaaS, Agency, Listings, Publishing |
| Price | Free or $ amount | ask the user. Free uses the remix link |
| Purchase or remix link | URL | external checkout URL or framer.link remix URL |
| Thumbnail and gallery | images | real screenshots from the project, `assets.screenshots` for plugins |
| Creator profile | name, avatar, links | `founder.name`, `founder.avatar`, `links.twitter` |

## Steps
1. This is `manual`. Explain the options above and recommend a plugin if the product has an API designers would use inside Framer (forms, analytics, CMS sync, AI copy), otherwise a template.
2. The user builds the artifact in Framer and joins the creator program at https://www.framer.com/creators.
3. Submit from the creator dashboard. Expect a review by Framer before it appears. Review time isn't published.
4. `launchkit mark framer-marketplace submitted --note "Framer creator review"`

## Make the listing perform
- The templates page sorts by Trending, Best and Recent. A launch spike in the first days pushes a listing into Trending, so share the listing link the day it goes live.
- Free templates and plugins get far more remixes and installs. Use free to drive users to the product.
- Thumbnails should show the actual design, not mockups with sales text.
- For plugins, show the result inside the Framer canvas in the first screenshot.

## Gotchas
- Help-center articles about submission have moved (old URLs return 404). Use the creator dashboard and the /creators page as the source of truth.
- Don't use third-party logos or paid stock assets you can't redistribute.

## After submitting
- Find the listing under Marketplace by searching the name. Keep the remix link and checkout link working, and update the template when Framer ships breaking changes.
