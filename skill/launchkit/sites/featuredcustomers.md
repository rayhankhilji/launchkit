---
id: featuredcustomers
name: "FeaturedCustomers"
url: https://www.featuredcustomers.com/vendor-solutions
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: none
backlink_required: no
review_time: "unknown; their team verifies the vendor"
verified: true
last_checked: 2026-10-12
---

# FeaturedCustomers

B2B customer-reference platform: vendor profiles built from case studies, testimonials and customer logos (55k+ vendor profiles). Useful if the user already has named customers or case studies; thin for pre-revenue products.

## Before you start
- Phone number is required on the claim form. Ask the user once.
- Tiers: Verified Vendor (free: update company info and branding, sample customer references, consideration for Customer Success Reports). Premium Vendor (paid, price via demo: removes competitor info, multiple categories, analytics).
- References need real customer names and quotes the user can share. Never invent them.

## Field map ("Get Your Company Listed" form, checked live)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First Name* | text | first part of `founder.name` |
| Last Name* | text | rest of `founder.name` |
| Your Email* | email | `submission.email` |
| Phone Number* | tel | from the user |
| Your Company* | text | `company.legal_name` or `product.name` |

After verification (unconfirmed, inside the vendor extranet): logo `assets.logo_square`, description `product.description_medium`, category from `product.categories[0]`, customer references from the user.

## Steps
1. Search the vendor directory https://www.featuredcustomers.com/vendors for `product.name`.
2. Open https://www.featuredcustomers.com/vendor-solutions, click **Get Verified for Free** (or **Add your company**). The listing form opens.
3. Fill the five fields and submit. Skip **Upgrade to Premium** and **Schedule a Demo**.
4. Screenshot to `.launchkit/evidence/featuredcustomers.png`. `launchkit mark featuredcustomers submitted --note "free verified vendor request"`

## Make the listing perform
- Rank and Customer Success Report placement come from the number and quality of references. Upload customer logos and short quotes with names and titles.
- Link existing case studies on the user's site; they get indexed as references.

## Gotchas
- Free profiles show competitor info next to yours; only Premium removes it.
- Expect a sales follow-up by phone.

## After submitting
- Vendor login: https://www.featuredcustomers.com/extranet/login. Profile URL: `https://www.featuredcustomers.com/vendor/<slug>`.
