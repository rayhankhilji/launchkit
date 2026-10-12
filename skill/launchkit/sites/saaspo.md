---
id: saaspo
name: "Saaspo"
url: https://saaspo.com/submit
category: Design Gallery
mode: form
pricing: Free
login: none
captcha: turnstile
backlink_required: no
review_time: "unknown, says ASAP"
verified: true
last_checked: 2026-10-12
---

# Saaspo

A curated gallery of SaaS websites (3,100+ pages, plus sections, OG images and templates) by Andy Hooke, with a weekly "7 best SaaS designs" email to 3,000+ designers. Free four-field form. A good fit for any SaaS with a well-designed marketing site.

## Before you start
- Site should look polished; Saaspo is curated. Otherwise mark `skipped` ("not a fit").
- Need `founder.name`, `submission.email`, `product.url`, and `founder.twitter` or `links.twitter` if there is one.
- The page has Cloudflare Turnstile. If it shows an interactive challenge, mark `needs_human`.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your name | 256 chars, required | `founder.name` |
| Your email | email, required | `submission.email` |
| Your Twitter @ | 256 chars, optional | `founder.twitter` handle with `@`, else `links.twitter` handle, else empty |
| Website URL | 256 chars, required | `product.url` (homepage, no ref params) |

## Steps
1. Search https://saaspo.com/ for `product.name` or its domain (listings are titled by domain, e.g. `framer.com/`). If listed, mark `live` and stop.
2. Open https://saaspo.com/submit ("Know a great design you think we should feature? Fill out the form below").
3. Fill the four fields.
4. Wait for Turnstile to pass, then click **Submit**.
5. Screenshot the success message to `.launchkit/evidence/saaspo.png`.
6. `launchkit mark saaspo submitted --note "manual review"`

## Make the listing perform
- Listings are filtered by page type (landing, pricing, product, about, customers, blog), industry, style and stack (Webflow, Next.js, Framer, WordPress). Make sure the homepage, pricing and about pages exist and look finished; each can be added as its own example.
- A good OG image helps: Saaspo has a separate OG images gallery (384+). Check `assets.og_image` is set on the site before submitting.
- The Twitter handle lets the curator tag you when the site is shared; fill it if the user has one.

## Gotchas
- Sponsor logos ("Add your logo here!") on the homepage are paid ads, separate from submissions.
- Saaspo sits behind Cloudflare; repeated automated loads can trigger a block. Load the page once.

## After submitting
- No email confirmation is promised. Re-check the site for the domain after 1-3 weeks and mark `live` with the listing URL.
