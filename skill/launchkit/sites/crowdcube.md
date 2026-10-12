---
id: crowdcube
name: Crowdcube
url: https://www.crowdcube.com/
category: Crowdfunding / Awards
mode: manual
pricing: Paid
login: Crowdcube account (needed to apply to raise)
captcha: Cloudflare check on the site; scripted browsers get blocked
backlink_required: no
review_time: unknown, not published on any page reached
verified: false
last_checked: 2026-10-12
---

# Crowdcube

UK and EU equity crowdfunding. The site is live, but the listed raise page (crowdcube.com/raise) returns "Page not found" on 2026-10-12, and Cloudflare blocks non-human browsers. The raise flow, fields and fees below are unconfirmed. Start from the homepage and follow its "raise" link.

## Before you start
- This is a regulated securities offering in the UK or EU. Only the founder decides, with a lawyer and accountant.
- Crowdcube charges the company a success fee on funds raised plus other costs. The exact current rate was not visible. Confirm it on the site before advising.
- The homepage first asks the visitor to pick a country or region of residence (UK, US, Spain, France, Germany, other).
- Expect to need: a UK or EU company, a pitch deck, financials and forecasts, a valuation and target, and a campaign video.

## Field map
Not confirmed. Typical first-step fields for a raise enquiry:
| Site field | Profile key / instruction |
|---|---|
| Country / region of residence | `company.country` |
| Company name | `company.legal_name` |
| Website | `product.url` |
| What the company does | `product.description_short` |
| Industry | best match from `product.categories` |
| Founder name, email | `founder.name`, `founder.email` |
| Stage, revenue, amount raised so far | `company.funding_stage`, `company.funding_raised`; revenue from the founder |
| Target raise and valuation | founder only |
| Pitch deck | founder uploads |

## Steps
1. Open https://www.crowdcube.com/ in a normal browser and pick the country.
2. Follow the "raise" link from the menu or footer. Note the current URL and fees.
3. Explain the fees and legal work to the founder and ask if they want to apply.
4. If yes, draft the company description and a list of facts they must supply. The founder creates the account and applies.

## Make the listing perform
- Crowdcube campaigns that open with committed investors from the founder's own network get more traction from the wider crowd. Line those up first.
- Lead the pitch with customers and revenue. Use real numbers only.

## Gotchas
- The old /raise link is dead. Don't report it as the current route.
- Cloudflare will block an automated browser. A human must do this flow.

## After submitting
- Log `needs-human`.
