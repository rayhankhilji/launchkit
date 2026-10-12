---
id: openfuture
name: "OpenFuture"
url: https://openfuture.ai/submit-tool
category: AI Directory
mode: form
pricing: Free/Paid
login: google            # Google or Discord only
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# OpenFuture

A general AI tools database with topic pages (Productivity, Developer Tools, Finance, E-commerce, Health and more).
Low priority: the submit form sits behind a login and the site footer is stuffed with gambling spam links, which suggests
little editorial care and weak SEO value. Do it only after the stronger directories are done.

## Before you start
- Login is Google or Discord only (no email signup). Use Google if `submission.preferred_login` is google; otherwise ask
  the user whether a Discord login is fine. If `submission.allow_account_creation` is false, mark `needs_human`.
- Have `assets.logo_square`, one screenshot from `assets.screenshots`, `product.tagline` and `product.description_long` ready.
- The form fields and any paid tier are only visible after login. Everything in the field map below is unconfirmed.

## Field map (unconfirmed, form is behind login)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Short description / tagline | short text | `product.tagline` |
| Description | long text | `product.description_long` (fall back to `product.description_medium`) |
| Category / topic | select | closest topic: dev tools -> Developer Tools, money -> Finance, shops -> E-commerce, else Productivity |
| Pricing | select | `product.pricing_model`: free -> Free, freemium -> Freemium, paid -> Paid |
| Logo / image | upload | `assets.logo_square`, then `assets.screenshots[0]` if a cover image is asked for |
| Tags | chips | first 5 of `product.tags` |

## Steps
1. Open https://openfuture.ai/submit-tool. The page says "You Need To Log In To Submit A Tool".
2. Click **Login** in the header, then **Login with Google** (or **Login with Discord** if the user agreed).
3. Back on Submit Tool, search the site first for `product.name`. If it is already listed, `launchkit mark openfuture live --listing-url <url>` and stop.
4. Fill the form with the field map. If a paid plan is the only option, stop and mark `skipped` ("paid only") at budget 0.
5. Submit, screenshot the confirmation to `.launchkit/evidence/openfuture.png`.
6. `launchkit mark openfuture submitted --note "<confirmation text>"`

## Make the listing perform
- Listings are grouped by topic. Pick the narrowest topic instead of Productivity so the tool is not lost in the biggest bucket.
- Use the plain, verb-led `product.tagline`; the site shows short descriptions on cards.
- Do not pay for any featured slot here. Traffic and link value look low.

## Gotchas
- The footer injects hundreds of casino links. Don't click anything in the footer.
- A feedback widget iframe ("General Feedback / I have an idea / I found a bug") overlays the page. Close it if it covers the form.

## After submitting
- Check the Ai Tools list or search for `product.name` after a week. If nothing shows after 4 weeks, leave it as submitted.
