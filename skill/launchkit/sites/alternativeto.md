---
id: alternativeto
name: "AlternativeTo"
url: https://alternativeto.net/
category: Software Review Site
mode: form
pricing: Free
login: email            # email + password; X/Twitter and Facebook login were discontinued
captcha: turnstile      # Cloudflare challenge on most pages, may need a human click
backlink_required: no
review_time: "2-7 days"
verified: true
last_checked: 2026-10-12
---

# AlternativeTo

A crowdsourced "alternatives to X" site run from Sweden. People land here from Google searches like "Notion alternatives", so the value is long-tail traffic from the pages of the big products you list yourself against. Free, no paid listing tier.

Checked 2026-10-12: home page and "New App Releases" load live; most other pages (FAQ, login, add form) sit behind a Cloudflare challenge. The add flow below is from the site's FAQ (2024 snapshot) and is unconfirmed field by field.

## Before you start
- `product.competitors_alternatives` must have 3-8 well-known products. This is the whole point of the listing.
- `assets.logo_square` (square PNG, 256px+) and 1-4 `assets.screenshots`.
- The product must support English. Unreleased products and waitlist pages get rejected.
- Account: sign up with `submission.email` + password. Don't use a personal profile to promote the product, the FAQ says those accounts get blocked for spam.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Application name | text | `product.name` (one entry only, no "Pro"/"Free" editions) |
| Website / official URL | URL | `product.url` |
| Short description | ~1-2 sentences | `product.description_short` |
| Description | free text | `product.description_long`, mention editions/tiers inside the text |
| Platforms | multi-select | map `product.platforms`: web -> Online, mac -> Mac, windows -> Windows, ios -> iPhone/iPad, android -> Android, chrome extension -> Chrome |
| License | select | `product.open_source` true -> Open Source; else map `product.pricing_model`: free -> Free, freemium -> Freemium (or "Free with limited functionality"), paid -> Commercial / Paid |
| Tags | chips | `product.tags` + `product.categories`, lowercase, reuse tags the competitors already have |
| Logo / icon | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` (best first) |
| Source code | URL | `product.repo_url` if open source |
| Alternative to | search | each item in `product.competitors_alternatives` |

## Steps
1. Open https://alternativeto.net/. If a Cloudflare check needs a click, mark `needs_human` with "Cloudflare check on alternativeto" and stop.
2. Search for `product.name`. If it's already listed, see "After submitting" for claiming and stop.
3. Sign in (or sign up with `submission.email`). Click the user icon (top right) -> **Suggest new application**.
4. Fill the fields from the map. Click **Submit the application**. Screenshot to `.launchkit/evidence/alternativeto.png`.
5. For each competitor: open its page, click **Contribute to this page** -> **Suggest Alternatives**, search for `product.name`, add it.
6. `launchkit mark alternativeto submitted --note "pending approval, 2-7 days"`

## Make the listing perform
- Ranking on a competitor's page comes from user likes. Add yourself to the 3-5 competitors that your users actually switch from, not to every giant.
- Pick the license honestly. "Free" and "Open Source" filters are heavily used; a wrong license gets reported and edited.
- Use the same tags the top alternatives on those pages use, so you show up in the same filters.
- Write the description for someone comparing: what it replaces, what it does differently, who it's for.

## Gotchas
- One entry per product. Separate free and pro editions get merged or rejected.
- Products on free subdomains or with non-English UIs are usually rejected.
- Approval can take up to a week. Don't resubmit in the meantime.

## After submitting
- Check https://alternativeto.net/browse/new-apps/ and search for the name after a few days.
- To get owner/admin rights, email support@alternativeto.net from an address on the product's domain with your username. Draft this for the user with `lk draft`.
- Ask real users to like the app on the competitor pages. Never create accounts to like it yourself.
