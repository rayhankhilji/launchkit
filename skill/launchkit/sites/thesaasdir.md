---
id: thesaasdir
name: TheSaaSDir
url: https://thesaasdir.com/submit/
category: Software Review Site
mode: form
pricing: Free/Paid
login: none
captcha: none
backlink_required: optional
review_time: instant with verified badge, otherwise up to 7 days
verified: true
last_checked: 2026-10-12
---

# TheSaaSDir

Small indie SaaS directory. Free listings need a badge on your site. Paid listings ($19) skip the badge, get 3 dofollow links and a featured spot. A $29 bundle also lists you on TheAIToolsDir.

## Before you start
- No account. One form on one page.
- Free tier: badge required. Ask the user first (`launch_settings.add_badge_to_site`). Without badge approval and with $0 budget, mark `skipped` with "badge or $19 required".
- Need: `product.tagline`, `product.description_medium`, one screenshot from `assets.screenshots`.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product URL | URL, required, has Auto-fill button | `product.url` (you can click Auto-fill, then correct every field) |
| Product name | 200 chars, required | `product.name` |
| Tagline | 200 chars, required | `product.tagline` |
| Description | required | `product.description_medium` |
| Screenshot | image, optional | `assets.screenshots[0]` |
| Categories | up to 3 checkboxes | map `product.categories` to: AI, NoCode, LowCode, DevTools, API, DevOps, Design, UX, CMS, Payment, Ecommerce, CRM, Sales, Marketing, Email, Analytics, Support, Community, HR, Finance, Education, Health, Legal, Security, QA, Mobile, Productivity, Database, Frontend, Backend, Project, Events, Survey, Other |
| Tags | comma separated | 3-6 items from `product.tags` |
| Email | required | `submission.email` |
| Tier | Free / $19 / $29 | Free, unless the user approved a paid tier |
| Badge verification | button, free tier only | add badge, then click **Verify Badge** |

Badge code shown on the form (replace `your-product` with the slug they show):
`<a href="https://thesaasdir.com/product/your-product?ref=badge" rel="dofollow"><img src="https://thesaasdir.com/badge/your-product.svg" alt="Featured on TheSaaSDir" width="160" height="44"></a>`

## Steps
1. Open https://thesaasdir.com/submit/.
2. Enter `product.url`, optionally click **Auto-fill**, then overwrite name, tagline and description with profile copy.
3. Upload the screenshot, tick up to 3 categories, add tags and email.
4. Select **Free**. If the user approved the badge, have it added to the site homepage or footer, then click **Verify Badge**.
5. Submit. Screenshot to `.launchkit/evidence/thesaasdir.png`, then `lk mark thesaasdir submitted --note "free, badge verified"` (or "pending 7 day review").

## Make the listing perform
- Badge-verified free listings go live immediately; unverified ones wait up to 7 days.
- Pick categories that people browse: the first ticked category is likely the primary one.
- Leave hidden fields empty. The form has a honeypot field that flags bots.

## Gotchas
- Removing the badge later may drop the listing or the dofollow link.
- Auto-fill copies your meta tags, which are often too salesy. Replace them.

## After submitting
- Open the product page from the confirmation, check the link and logo, and save it with `--listing-url`.
