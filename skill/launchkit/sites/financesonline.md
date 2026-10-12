---
id: financesonline
name: "FinancesOnline"
url: https://financesonline.com/add-product/
category: Software Review Site
mode: form
pricing: Free/Paid
login: none
captcha: recaptcha      # reCAPTCHA on the add-product form
backlink_required: no
review_time: "unknown; a rep contacts you"
verified: true
last_checked: 2026-10-12
---

# FinancesOnline

B2B and SaaS review site with editorial review pages and "alternatives"/"pricing" articles (claims 2.5M+ monthly readers, 14k vendors). The form is a lead form: their team writes the review page and pitches paid advertising. A free listing is possible but not guaranteed fast.

## Before you start
- B2B software only.
- Decide the time zone (for their call) with the user, or default to the one for `company.country`.

## Field map (Ninja Forms, checked live, in order)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your Name* | text | `founder.name` |
| Product Name* | text | `product.name` |
| Your Job Title* | text | `founder.role` |
| Your Email* | email | `submission.email` |
| Product Website URL* | URL | `product.url` |
| Category* | long dropdown (e.g. "AI Software", "Accounting Software", "Business Intelligence Software") | closest match to `product.categories[0]`; prefer a general one over "for Small Business" variants unless that fits |
| Monthly Advertising Budget* | None / <$1,000 / $1,000-5,000 / $5,000-10,000 / >$10,000 | "None" when `budget_usd` is 0 |
| Your Skype ID | optional | leave blank |
| Time zone* | dropdown | from `company.country` |
| Consent checkbox* | checkbox | tick |

## Steps
1. Search financesonline.com for `product.name`. If a review page exists, stop and mark `live`.
2. Open https://financesonline.com/add-product/. Fill the form from the map.
3. If reCAPTCHA shows a challenge, mark `needs_human`.
4. Click submit. Screenshot to `.launchkit/evidence/financesonline.png`.
5. `launchkit mark financesonline submitted --note "lead form sent; rep follows up"`

## Make the listing perform
- Their review pages rank for "<product> pricing" and "<product> alternatives". Keep your public pricing page clear so they copy correct numbers.
- When the rep emails, send screenshots, `product.description_long` and `product.key_features` to get a fuller page.
- Their annual awards favour products with reviews on the site; ask a few real customers to review.

## Gotchas
- Choosing "None" for budget may slow things down; that's fine.
- Hidden honeypot field exists; leave any invisible field empty.

## After submitting
- Search the site in 2-4 weeks. Forward any rep email to the user (paid offers are their call).
