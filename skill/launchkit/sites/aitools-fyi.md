---
id: aitools-fyi
name: "aitools.fyi"
url: https://aitools.fyi/submit
category: AI Directory
mode: form
pricing: Paid
login: none
captcha: hcaptcha
backlink_required: no
review_time: "weeks to months (via third party)"
verified: true
last_checked: 2026-10-12
---

# aitools.fyi

AI tools directory with a 21,600-subscriber newsletter. Its Submit link now redirects to a Boost My Tool Tally form that charges $37 and promises submission to "1 established AI tools directory with DR 40+", not necessarily aitools.fyi. No free path. Skip at budget 0.

## Before you start
- `aitools.fyi/submit` redirects to https://tally.so/r/2EkV4g?ref=boostmytool.com (Boost My Tool). That's a reseller, and the form says approval and the specific directory aren't guaranteed.
- Payment is a Stripe card field inside the form (protected by invisible hCaptcha).
- Only consider it if the user approves $37 knowing the listing may land on a different directory.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Email * | email | `submission.email` |
| Tool Link * | URL | `product.url` |
| Tool Name * | text | `product.name` |
| Tool Description * | textarea | `product.description_medium` |
| Pricing * | text | `product.pricing_model` + `product.pricing_details` |
| Additional Information | textarea | category and `product.tags` |
| Bonus free directory submissions | checkbox | user's choice |
| Terms checkboxes | 2 required | only with user approval |
| Card details | Stripe | never fill; user only |

## Steps
1. Search https://aitools.fyi/ for `product.name`. If listed, mark `live` and stop.
2. At budget 0: `launchkit mark aitools-fyi skipped --note "submit redirects to Boost My Tool, $37, directory not guaranteed"`.
3. If the user approves the spend: fill everything except the card, then mark `needs_human` with "enter card and submit Tally form".

## Make the listing perform
- Sponsorships (Oct 2026): Maximum Exposure $447/week (home and category placement plus a newsletter blast), Category Sponsorship $197/month. Both showed "No spots available".
- If the tool is already listed (many are, from earlier imports), a category sponsorship is the only lever. Not worth it at small budgets.

## Gotchas
- Older lists say aitools.fyi is free to submit. That stopped; the free form is gone.
- "Submit a blog post" (a separate Tally form) is for guest content, not tool listings.

## After submitting
- Boost My Tool sends a report. Check which directory it actually went to before marking anything `live`.
