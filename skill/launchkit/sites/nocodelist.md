---
id: nocodelist
name: "NoCodeList"
url: https://nocodelist.co/submit
category: No-Code
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# NoCodeList

The No Code List, a directory of 300+ no-code tools, agencies and resources with upvotes and endorsements, run by QREW Technologies (built on Bubble). Listing is free; paid sponsorship is optional. Small but on-topic audience of no-code makers and agencies, plus a weekly "new tools" email.

## Before you start
- Account: you must be logged in to submit. Sign up at https://nocodelist.co/signup with email (magic link) or **Sign Up with a Password**. If `submission.allow_account_creation` is false, mark `needs_human`.
- Have `assets.logo_square` and `product.description_short` ready.

## Field map

The submit page offers four types: NoCode Software, NoCode Agency, NoCode Resource, NoCode Product Stack. The form itself is behind login; fields below are inferred from public tool cards and unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Submission type | tabs | **NoCode Software** for a product |
| Name | text | `product.name` |
| Website | URL | `product.url` (the site adds `?ref=nocodelist` itself) |
| Short description | one line on the card | `product.tagline` |
| Description | text | `product.description_short` |
| Category | one of ~70 | map `product.categories[0]`: AI -> Machine Learning / AI, automation -> Automation (Workflows), app builder -> App Builders or Web Apps, site builder -> Websites or Landing Pages, forms -> Forms, analytics -> Dashboards / Analytics |
| Logo | image | `assets.logo_square` |
| Pricing | if asked | map `product.pricing_model` |

## Steps
1. Open https://nocodelist.co/ and search the categories for `product.name`. If listed, mark `live`.
2. Go to https://nocodelist.co/submit. If it shows "To Submit, you have to be Logged In", sign up with `submission.email`. If a magic link is needed and `submission.inbox_access` is none, mark `needs_human`.
3. Choose **NoCode Software**, fill the fields, submit.
4. Screenshot the confirmation to `.launchkit/evidence/nocodelist.png`.
5. `launchkit mark nocodelist submitted`

## Make the listing perform
- Cards show endorsements and upvotes. Ask the user to have two or three real users endorse it after it goes live.
- Pick the narrowest fitting category; big ones like Web Apps are crowded.
- Top Tools (nocodelist.co/top-tools) ranks by upvotes.

## Gotchas
- Paid options: Sponsored Homepage Slot $150/week, Friends and Affiliates Slot $300/year. Skip unless budget allows.
- Questions go to stefan@nocodelist.co or @thenocodelist on X.

## After submitting
- Check the chosen category page for the card. Logged-in submitters can edit their listing later.
