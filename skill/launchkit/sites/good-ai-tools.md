---
id: good-ai-tools
name: "Good AI Tools"
url: https://goodaitools.com/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Good AI Tools

A small AI tools directory run alongside the Submitmatic / SubmitSaaS directory-submission service (their banner ad links there). It has pricing filter pages (free, free trial, freemium, paid), a "Featured AI Tools" strip and about 50 categories including "Directories", "Dev Tools" and "Chrome Extensions".

## Before you start
- Login: **Log in with Google**, or "Create an account" (email). Both `/submit` and `/get-started` show only the login wall when signed out.
- Assets to have ready: `assets.logo_square`, `assets.screenshots[0]`, `product.description_short`, `product.description_long`.
- No public pricing page (`/pricing` is 404). The homepage has a featured strip, so a paid featured option probably exists after login. Unconfirmed. Take the free option only.

## Field map

The form is behind login and was not seen. Expected fields, unconfirmed; match labels on the live form:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Short description | short text | `product.description_short` |
| Description | long text | `product.description_long` |
| Category | select | closest of their categories to `product.categories[0]` (e.g. "Dev Tools", "AI Assistants", "Content Creation", "Productivity & Management") |
| Pricing | select | `product.pricing_model`: free -> Free, freemium -> Freemium, trial -> Free Trial, paid -> Paid |
| Logo | image | `assets.logo_square` |
| Screenshot | image | `assets.screenshots[0]` |

## Steps
1. Search the site (header search) for `product.name`. If listed, mark `live` and stop.
2. Open https://goodaitools.com/submit, click **Log in with Google** (or create an email account if `submission.preferred_login` isn't google).
3. Fill the fields. If a plan choice appears, choose the free one; if the only path is paid, mark `skipped` ("paid only").
4. Submit, screenshot to `.launchkit/evidence/good-ai-tools.png`.
5. `launchkit mark good-ai-tools submitted --note "<what the confirmation said>"`

## Make the listing perform
- Every card shows category and pricing label (e.g. "AI Assistants Freemium"). Get both right; the pricing filter pages (`/pricing/free`, `/pricing/freemium`) are a main browse path.
- If the product is free, it can also show on their "Free Tools" page, which is in the top nav.

## Gotchas
- The banner "We Submit Your SaaS to 140+ Directories" is an ad for a paid service, not part of the submission.

## After submitting
- Check "Latest" (`/latest`) after a few days for the listing and mark `live`.
