---
id: softwaresuggest
name: "SoftwareSuggest"
url: https://www.softwaresuggest.com/vendors
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# SoftwareSuggest

A B2B software marketplace based in India with a strong India and Asia buyer audience. Free product listing (with leads on a 3-day delay); paid plans start at $4,000 for 6 months. Good for B2B SaaS that sells to India or SMBs.

## Before you start
- Required on step 1: a **business email** (free mail likely rejected) and a **phone number**. The profile has no phone key, so ask the user or mark `needs_human`.
- Free plan includes: product listing, leads with a 3-day delay, review collection, badges, and a **free Premium Listing for funded startups**. If `company.funding_stage` shows funding, mention this to the user.
- Paid (skip with budget 0): Basic $4,000 / 6 months, Gold $9,000 / 6 months, Platinum $15,000 / 12 months.
- Their listing guidelines want: name and logo, plain text without symbols or HTML, and at least one real UI screenshot or video (no stock images or marketing text in screenshots).

## Field map (vendor signup, two steps)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name * | text | `founder.name` |
| Business Email * | email | `submission.email` (product domain) |
| Organization * | text | `company.legal_name` |
| Phone * | tel | ask the user |
| Website * | URL | `product.url` |
| Company Head Office * | country/city | `company.country` (+ `company.city`) |
| No. of Employees * | select: Freelancer, 2-9, 10-49, ... 501+ | map `company.team_size` |
| No. of Customers * | select | ask the user, or the smallest honest range |
| Software / Service * | text | `product.name` |
| Category Name * | select | closest to `product.categories[0]` |
| Competitors | multi-select, optional | `product.competitors_alternatives` |

After signup, the vendor portal profile (unconfirmed fields): description (`product.description_long`, plain text), features (`product.key_features`), pricing (`product.pricing_details`), logo (`assets.logo_square`), screenshots (`assets.screenshots`), video (`links.demo_video`).

## Steps
1. Search softwaresuggest.com for `product.name`. If it exists, use the claim option on the profile.
2. Open https://www.softwaresuggest.com/vendors and click **List Your Software** / **Get Started** on the Free plan.
3. Fill step 1 (Name to Company Head Office), continue, then step 2 (employees, customers, product, category, competitors). Submit.
4. Verify the email if asked, log into the vendor portal and complete the profile. Skip paid upgrades.
5. Screenshot to `.launchkit/evidence/softwaresuggest.png`; `launchkit mark softwaresuggest submitted`.

## Make the listing perform
- Competitors chosen at signup drive "alternatives" and comparison pages, a large share of their traffic. Pick 2-3 well-known ones.
- Paid members are listed above free ones; free listings compete on reviews. Use their free review-collection tools with real customers only.
- Funded startups: ask for the free Premium Listing explicitly.

## Gotchas
- Avoid symbols, special characters and HTML in descriptions; their guidelines reject them.
- Expect a sales call after signup. It's optional.

## After submitting
- Search the product name after approval and mark `live` with the URL.
