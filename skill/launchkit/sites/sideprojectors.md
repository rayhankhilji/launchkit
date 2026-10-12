---
id: sideprojectors
name: "SideProjectors"
url: https://www.sideprojectors.com/project/new
category: Launch Platform
mode: form
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# SideProjectors

Marketplace (from Sydney, Australia) to showcase, sell or buy side projects and find co-founders. Also has daily launches and a newsletter. Use it to showcase; only list for sale if the user wants to sell.

## Before you start
- Account needed: **Login / Sign-up** in the header. /project/new shows "Project not found" when logged out, so the form fields below are unconfirmed.
- Project types from the site menu: SaaS, Website, Mobile app, E-commerce store, Desktop app, Blog, Domain name, Browser extension.
- Ask the user: showcase only, or also for sale / seeking a co-founder? Default to showcase.
- Membership (paid) exists; not needed to showcase.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Purpose | Showcase / Sell / Seek co-founder | Showcase unless the user said otherwise |
| Project type | SaaS / Website / Mobile app / ... | from `product.platforms` and `product.categories` |
| Project name | text | `product.name` |
| URL | URL | `product.url` |
| Short description | short | `product.tagline` |
| Description | text | `product.description_long` |
| Tech stack / tags | tags | `product.tags` |
| Images | uploads | `assets.logo_square`, `assets.screenshots` |
| Asking price, revenue, traffic | sale listings only | only with the user's numbers; never guess |

## Steps
1. Search sideprojectors.com for `product.name`. If listed, mark `live`.
2. Click **Sign-up** (or Login), then **+ SUBMIT A PROJECT**.
3. Choose Showcase, fill the form, submit, screenshot.
4. `launchkit mark sideprojectors submitted`.

## Make the listing perform
- Readers are makers and small buyers. Say how it's built and what it does today, with real numbers if the user has them.
- A showcase can later switch to a sale listing; good engagement then helps.
- Their help section has a "Showcasing a Project" page; follow it for category choice.

## Gotchas
- Sale listings show public revenue and traffic figures. Never fill these without the user.

## After submitting
- Check the project page and the daily launches list.
