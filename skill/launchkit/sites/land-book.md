---
id: land-book
name: "Land-book"
url: https://land-book.com/
category: Design Gallery
mode: form
pricing: Free
login: email           # free Landbook account required (land-book.com/register)
captcha: turnstile     # Cloudflare check on login/register pages
backlink_required: no
review_time: "a few days to 1 month; no reply after a month means rejected"
verified: true
last_checked: 2026-10-12
---

# Land-book

One of the largest landing page galleries, browsed by designers and marketers for inspiration, filtered by type (Landing, Portfolio, Ecommerce, Blog) and page section. Website submissions are free; template listings are paid. Strong fit for a polished SaaS or product landing page.

## Before you start
- Free Landbook account needed. Register at https://land-book.com/register with `submission.email`, then verify the email. Needs `submission.inbox_access` or the user.
- Login and register pages show a Cloudflare check. If it asks for interaction, mark `needs_human`.
- Ignore "Get Pro" ($9/month or $72/year); it isn't needed to submit.
- Read https://land-book.com/submission-guidelines (summarised below).

## Field map
The website submit form is only shown to logged-in users; fields are unconfirmed beyond what the guidelines describe.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website URL | URL | `product.url` |
| Title | text | `product.name` plus short tagline, e.g. "Acme - Invoices in 30 seconds" (matches how listings read) |
| Type / category | select | Landing Page for a product site; Portfolio or Ecommerce only if true |
| I'm the author of this website | checkbox | tick it when the user built the site (adds it to their profile "Made" tab) |
| Screenshot | likely auto-captured | if upload is offered: full-page `assets.screenshots[0]` at 1440 px |

## Steps
1. Search land-book.com for `product.name`. If listed, mark `live` and stop.
2. Sign in (or register and verify). Cloudflare challenge -> `needs_human`.
3. Find **Submit** in the header or account menu once logged in (the /submit path itself 404s; use the in-app button).
4. Fill the fields, tick **I'm the author of this website**, submit.
5. Screenshot to `.launchkit/evidence/land-book.png`, then `launchkit mark land-book submitted --note "review a few days to 1 month"`.

## Make the listing perform
- Review criteria from their guidelines: current design trends, aesthetics, usability and accessibility, and content. Real copy and real product shots beat placeholder sections.
- Listing titles that read "Product | What it does" (e.g. "Terms.so: Never touch DocuSign again.") get clicks. Use `product.tagline` after the name.
- They feature on the homepage only when picked; you get an email if featured.
- The "Made" tab builds the founder's profile. Tick authorship so the listing credits them.

## Gotchas
- Templates go through /submit-template and get a paid feature link if approved. Don't use that path for a product site.
- Plain HTTP fetches get 403 from Cloudflare; use the real browser.

## After submitting
- No news in a month means not featured. You can resubmit after meaningful redesigns.
