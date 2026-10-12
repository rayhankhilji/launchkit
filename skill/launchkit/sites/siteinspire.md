---
id: siteinspire
name: "Siteinspire"
url: https://www.siteinspire.com/
category: Design Gallery
mode: form
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "unknown, editor picks"
verified: true
last_checked: 2026-10-12
---

# Siteinspire

A long-running showcase (since 2009, 8,000+ sites, 250k monthly visitors) of high-end web design, picked by Daniel Howells. Audience is mostly agencies and designers. No sponsored submissions: everything is chosen on merit. Only worth it for a genuinely distinctive site.

## Before you start
- Bar is high and leans toward agency, portfolio, typographic and editorial work. A standard SaaS page rarely fits; mark `skipped` ("not a fit") unless the design stands out.
- Login: "Sign in" with email; they email you a one-time code (no password). Needs `submission.inbox_access` or the user to read the code. If no inbox access, mark `needs_human`.
- The about page says: "You can submit a site after registering as a member, and creating a new submission." The submission form is behind login and was not seen, so the field map below is unconfirmed.

## Field map (unconfirmed, behind login)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website URL | URL | `product.url` |
| Title | text | `product.name` |
| Categories (Style / Type / Subject / Platform) | multi-select | closest matches to the site's look and `product.categories` (seen on the site: Minimal, Typographic, Grid Layout, Unusual Layout, Web & Interactive Design, E-Commerce...); add the build platform if listed |
| Credits | profile links | designer/agency profile if one exists; otherwise `founder.name` |
| Email | from account | `submission.email` |

## Steps
1. Search the site for `product.name`. If listed, mark `live` and stop.
2. Click **Sign In** -> **Create an account** (or **Continue with email**). Enter `submission.email`, then the emailed code.
3. From the account area, start a new submission. Fill the fields you see using the map above; report any new fields in the evidence note.
4. Submit, screenshot to `.launchkit/evidence/siteinspire.png`.
5. `launchkit mark siteinspire submitted --note "editor review, no notice on rejection"`

## Make the listing perform
- Credits matter here: listings link to designer and agency profiles, and profiles get their own pages. If the user used a studio, add it as a credit.
- Listings are tagged by style, type, subject and platform. Accurate style tags (e.g. Minimal, Typographic, Unusual Layout) put the site on high-traffic category pages.
- Accepted sites can make "Today's Best", weekly and monthly lists, and the weekly edit email.

## Gotchas
- Paid options (Premium Profiles $250/mo, job posts $100-300/mo, ads) are for agencies and advertisers. They don't get a site listed. Skip.
- Siteinspire rate-limits automated requests (HTTP 429). Browse slowly.

## After submitting
- Outbound links carry `?ref=siteinspire`, so the user will see it in analytics if the site is picked. Re-check after a few weeks.
