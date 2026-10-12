---
id: rockethub
name: "RocketHub"
url: https://www.rockethub.com/rockethub-deal-partner-application
category: Deals / LTD
mode: form
pricing: Free
login: none
captcha: reCAPTCHA
backlink_required: no
review_time: "unknown (application, then product audit)"
verified: true
last_checked: 2026-10-12
---

# RocketHub

Lifetime-deal marketplace for entrepreneurs. You apply, their team audits the product, then they prep and run a launch campaign to their audience. Deal terms are described as favorable but no percentage is public, and no listing fee was shown.

## Before you start
- Business decision: mark `needs_human` ("requires deal terms decision") unless the user opted in to an LTD.
- The application asks for revenue, paying customers, 12-month sales and funding. These are not in the profile. Ask the user for each bucket; never guess.
- Process on https://www.rockethub.com/launch: Application, Product Audit, Campaign Prep, Launch, Grow.

## Field map
In page order:

| Field on the site | Type | Fill with |
|---|---|---|
| Name (First, Last) | text, required | `founder.name` split |
| Email | required | `founder.email` |
| Role / Title | required | `founder.role` |
| Your Profile URL (LinkedIn or Facebook) | required | `founder.linkedin` |
| Company Name (Legal Name) | optional | `company.legal_name` |
| Product Name | required | `product.name` |
| Website / Product URL | required | `product.url` |
| What Would You Like Us to Know About Your Product? | required | `product.description_medium`, what sets it apart, and one line on why an LTD now |
| When Was Your Product Released? | Unreleased, Alpha/Beta, 0-6 months, 6-12 months, 1-2 years, 3+ years | from `product.launch_date` and `product.status` |
| Product Type | SaaS, Info Product/Course, WordPress Plugin/Shopify Add-On, Template/Asset Library, SOP/Document, Other | SaaS for web apps; else closest |
| Current MRR / Revenue | 6 buckets, $0-$1K to $20K+ | ask user |
| Number of Paying Customers | 5 buckets | ask user |
| Total Sales of Product in Last 12 Months | 5 buckets | ask user |
| Total Number of Customers | 4 buckets | ask user |
| Is Your Company VC or Angel Funded? | Yes / No | from `company.funding_stage` (bootstrapped = No) |
| Competitors | optional, top 3 names and URLs | `product.competitors_alternatives` |
| Launched a LTD Previously? | Yes / No | ask user |
| How'd You Hear About Us? | Referred, Facebook Groups, Newsletter, Ads, Forum, Other | Other |
| Referral Source | optional | "launchkit directory list" or leave blank |
| CAPTCHA | reCAPTCHA | user solves |

## Steps
1. Open https://www.rockethub.com/launch and click **APPLY NOW** (opens the application URL above).
2. Fill every field from the map. Stop and ask for the revenue and customer buckets.
3. At the reCAPTCHA, hand off to the user to solve and click **Submit**.
4. Screenshot to `.launchkit/evidence/rockethub.png`; `launchkit mark rockethub needs_human --note "Application filled; user solves CAPTCHA and submits"`.

## Make the listing perform
- The page stresses mature products with real customers. Honest traction numbers help; "Unreleased" or "Alpha/Beta" will likely be declined.
- Use the overview box to name the buyer (`product.target_audience`) and two concrete outcomes. Their audience is founders and marketers buying tools.
- Listing real competitors helps them price the deal against what buyers know.
- Do not confuse this with "Startup Perks" (https://www.rockethub.com/startup-perk-partners), which is a discount listing, not an LTD launch.

## Gotchas
- Required dropdowns have no "prefer not to say" option.
- Profile URL must be LinkedIn or Facebook, not a personal site.

## After submitting
- Wait for an email from their launch team for the product audit. Audit feedback may ask for product changes before a launch date is set.
