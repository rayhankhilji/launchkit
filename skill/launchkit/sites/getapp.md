---
id: getapp
name: "GetApp"
url: https://www.getapp.com/
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: unknown        # getapp.com returns a Cloudflare block to automated browsers
backlink_required: no
review_time: "3-5 business days (via G2 vetting)"
verified: false
last_checked: 2026-10-12
---

# GetApp

Software comparison site for small and mid-size businesses. It shares one vendor system with Capterra and Software Advice, which G2 bought from Gartner in early 2026 (now "G2 Digital Markets").

Checked 2026-10-12: getapp.com blocked every automated visit with a Cloudflare "Attention Required" page. The listing path below is inferred from Capterra's vendor page, which sends all new products to G2's product request form. Unconfirmed for GetApp directly.

## Before you start
- Run `capterra` (and `g2`) first. There is no separate GetApp submission; a listing approved in the G2 Digital Markets portal shows up on GetApp too.
- B2B SaaS only. Mark `skipped` with "not B2B" for consumer apps.

## Field map
Same form as G2. Use the field map in `g2.md`, then fill the portal fields listed in `capterra.md` (features, deployment, pricing, screenshots).

| Field | Limit / format | Fill with |
|---|---|---|
| Integrations (portal, after approval) | multi-select | only tools named in `product.key_features` or `product.description_long` |
| Languages / countries (portal) | multi-select | English + `company.country` unless the profile says more |

## Steps
1. Search getapp.com for `product.name`. If Cloudflare blocks the page, skip the search.
2. If `capterra` or `g2` is already `submitted`/`live`: `launchkit mark getapp submitted --note "covered by G2 Digital Markets listing; recheck in 2 weeks"` and stop.
3. Otherwise open https://www.g2.com/products/new and follow `g2.md`.
4. Screenshot whatever confirmation you get to `.launchkit/evidence/getapp.png`.

## Make the listing perform
- GetApp's category pages sort by reviews and by paid placement. Reviews collected on Capterra count here too, so one review push helps all three sites.
- The integrations list matters more on GetApp than on Capterra: buyers filter by "works with". Fill it in the portal.
- Keep pricing current; GetApp shows "starting price" on every card.

## Gotchas
- Don't create a second vendor account just for GetApp. Duplicates slow approval.
- Paid PPC (cost per click) is optional. Skip with budget 0.

## After submitting
- Check getapp.com search for the product 1-2 weeks after the Capterra listing goes live. If missing, ask in the vendor portal at https://app.g2digitalmarkets.com/login.
