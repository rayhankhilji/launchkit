---
id: software-informer
name: "Software Informer"
url: https://software.informer.com/submit.html
category: Software Review Site
mode: form
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Software Informer

A Windows (and Mac, via macdownload.informer.com) software catalog fed partly by its desktop client that scans installed programs. It only fits **downloadable desktop software**. Skip web-only SaaS.

## Before you start
- Check `product.platforms`. No Windows or macOS app: `launchkit mark software-informer skipped --note "desktop catalog, web app not eligible"`.
- `/submit.html` says you must log in to send a new program or update one. Sign up at https://software.informer.com/login.php (email). Only if `submission.allow_account_creation` is true.
- The partners page says PAD files can be used to add/update programs, and only links on the developer's own domain are accepted.
- Free "Today's highlight" spot: requires a backlink to Software Informer and PNG icons at 16x16, 32x32 and 48x48. Optional; ask the user before adding a backlink.
- The submit form itself is behind login and was not seen. Fields below are expected, unconfirmed.

## Field map (expected)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| PAD file URL (preferred) | URL | ask the user if they have one |
| Program name | text | `product.name` |
| Version | text | ask the user |
| Developer / company | text | `company.legal_name` |
| Developer website | URL | `product.url` |
| Download URL | URL on the developer's own domain | ask the user |
| OS | select | from `product.platforms` |
| License / price | select | map `product.pricing_model`: free -> Freeware, freemium/paid -> Shareware/Commercial |
| Category | select | closest to `product.categories[0]` |
| Short description | text | `product.description_short` |
| Long description | text | `product.description_long` |
| Icon | PNG 16/32/48 | resized `assets.logo_square` |
| Screenshot | image | `assets.screenshots[0]` |

## Steps
1. Search software.informer.com for `product.name`. If listed, log in and use the update flow instead.
2. Sign up / log in at https://software.informer.com/login.php with `submission.email`; confirm the email.
3. Open https://software.informer.com/submit.html and fill the form per the map (or paste the PAD URL).
4. Submit, screenshot to `.launchkit/evidence/software-informer.png`; `launchkit mark software-informer submitted`.

## Make the listing perform
- The desktop client tracks installed programs and shows update notices, so a PAD file that keeps the version current keeps the listing useful. How category ranking works wasn't published.

## Gotchas
- Download links on third-party hosts (GitHub releases, file lockers) may be rejected; use the developer domain.

## After submitting
- Search the program name after a week or two.
