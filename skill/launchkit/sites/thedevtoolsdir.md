---
id: thedevtoolsdir
name: "TheDevToolsDir"
url: https://thedevtoolsdir.com/submit/?tier=free
category: Dev / Open Source
mode: form
pricing: Free/Paid
login: none
captcha: none
backlink_required: yes
review_time: "instant with badge, else up to 7 days"
verified: true
last_checked: 2026-10-12
---

# TheDevToolsDir

A small developer tools directory sorted by function (CI/CD, Monitoring, Auth...). Value is mostly the dofollow backlink, not traffic. Free listing needs a badge on your site.

## Before you start
- Free tier: 1 dofollow link, **badge required** on your site as a dofollow link. Live immediately if the badge is already there, otherwise reviewed within 7 days. Removing the badge later gets the listing unpublished after 7 days' notice.
- Check `launch_settings.add_badge_to_site`. If "ask", ask the user before adding the badge. If "no", the free tier won't work: mark `skipped` with "badge required".
- Paid $19 (3 links, featured, no badge) and $29 (also on TheSaaSDir) are skipped unless the user approved the spend.
- No account needed.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product URL | URL, has **Auto-fill** button | `product.url`, then click Auto-fill and review what it fills |
| Product Name * | 200 chars | `product.name` |
| Tagline * | 200 chars | `product.tagline` |
| Description * | textarea | `product.description_medium` (what it does, key features, who it's for) |
| Screenshot | image upload | `assets.screenshots[0]` |
| Categories * | up to 3 checkboxes | map `product.categories`/`product.tags` to CI/CD, Monitoring, Observability, Logging, Error Tracking, Databases, Caching, Search, Message Queues, APIs, API Gateways, Auth, Security, Secrets, Testing, Code Quality, IDEs & Editors, Version Control, Build Tools, Package Managers, Containers, Orchestration, Infrastructure, Serverless, Hosting, CDN, Feature Flags, Documentation, Analytics, Other |
| Tags | comma separated | `product.tags` joined, plus pricing model word (Free, Freemium) |
| Your Email * | email | `submission.email` |
| Choose Your Plan | radio | **Free** |
| Add Badge to Your Site | HTML snippet | give the snippet to the user (or add it if you have repo access and approval) |

## Steps
1. Search the site for `product.name`. If listed, mark `live` and stop.
2. If approved, add the badge HTML to the site footer first so the listing goes live instantly.
3. Open https://thedevtoolsdir.com/submit/?tier=free, enter the URL, click **Auto-fill**, then correct every field from the profile.
4. Pick up to 3 categories, keep **Free** selected, submit. Screenshot to `.launchkit/evidence/thedevtoolsdir.png`.
5. `launchkit mark thedevtoolsdir submitted --note "free tier, badge <added|pending>"`

## Make the listing perform
- Pick the most specific category first; "Other" gets buried.
- Tags show on cards, so lead with the problem keyword people search ("feature flags", "error tracking").
- Featured placement is paid only.

## Gotchas
- Auto-fill can pull marketing copy from your homepage; replace it with profile copy.
- Hidden honeypot field on the form; never fill fields you can't see.

## After submitting
- Listing URL pattern: `https://thedevtoolsdir.com/product/<slug>`. Keep the badge in place.
