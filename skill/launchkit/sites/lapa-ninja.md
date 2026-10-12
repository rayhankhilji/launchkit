---
id: lapa-ninja
name: "Lapa Ninja"
url: https://www.lapa.ninja/
category: Design Gallery
mode: form
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "unknown, no reply if not picked"
verified: true
last_checked: 2026-10-12
---

# Lapa Ninja

A curated gallery of 7,300+ landing pages (since 2015) with full-page screenshots and recordings, read by designers looking for layout ideas. There is no web form: the footer says "Submit your website" next to `hi@lapa.ninja`, so submission is an email to the curators. Worth it only for a polished, design-led landing page.

## Before you start
- The user's site must be visually strong. If it's a plain template or a dashboard-style app page, mark `skipped` ("not a fit").
- Have `product.url`, `product.name`, `product.tagline` and one or two `assets.screenshots` (full-page, 1440px wide) ready.
- This mode sends an email from the user's address. Draft it and get approval before sending (docs/05: never email without explicit approval). If there's no inbox access, save the draft and mark `needs_human`.
- `/submit/` returns a 404, so don't look for a form. The site sits behind Cloudflare and can block automated browsing; if you hit "Attention Required", stop and use the email route.

## Field map

| Field (email) | Limit / format | Fill with |
|---|---|---|
| To | email | `hi@lapa.ninja` |
| Subject | short | "Landing page submission: `product.name`" |
| Site link | URL | `product.url` (no ref params) |
| One line on the product | 1 sentence | `product.tagline` |
| Category hint | text | closest Lapa category: SaaS, AI, Fintech, Portfolio, E-commerce, Agency (from `product.categories[0]`) |
| Credits | text | `founder.name`, `founder.website` or `links.twitter`, plus designer/agency if known |
| Attachment | optional | skip; a link is enough |
| From | email | `submission.email` |

## Steps
1. Open https://www.lapa.ninja/ and search for `product.name`. If a listing exists, `launchkit mark lapa-ninja live --listing-url <url>` and stop.
2. Write a 4-6 line plain email from the field map. No sales pitch, no attachments.
3. Save it with `lk draft lapa-ninja -` and show it to the user.
4. Send only after approval, from `submission.email`. Screenshot the sent mail to `.launchkit/evidence/lapa-ninja.png`.
5. `launchkit mark lapa-ninja submitted --note "emailed hi@lapa.ninja"`, or mark `drafted` if the user will send it.

## Make the listing perform
- Lapa files sites by category (SaaS, AI, Fintech, Portfolio...). Name the category in the email so the curator doesn't have to guess.
- The listing card shows a short blurb under the name. Give them a clean one-sentence `product.tagline` they can paste.
- Hero clarity matters: Lapa pages are browsed as thumbnails, so a strong first screen is what gets picked.
- Mention the stack if notable (Framer, Webflow, Next.js); Lapa has build and template sections that reference it.

## Gotchas
- Cloudflare blocks repeat automated visits quickly. Don't retry in a loop.
- Paid "Pro" is for browsing, not for listings. There's no paid fast track.
- Support questions go to `support@lapa.ninja`, not the submission address.

## After submitting
- No confirmation is sent. Re-check the site search for `product.name` after 2-4 weeks and mark `live` with the listing URL if it appears.
