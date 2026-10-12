---
id: goodfirms
name: "GoodFirms"
url: https://www.goodfirms.co/get-listed
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: turnstile      # Cloudflare challenge in front of goodfirms.co
backlink_required: no
review_time: "unknown; 4-step research verification"
verified: true
last_checked: 2026-10-12
---

# GoodFirms

B2B review directory for IT service companies and software products. Free listing ("free forever, no card"), with Pro and sponsored plans on top. Mostly agencies; software products have their own category pages.

Checked 2026-10-12: home page loads live; the get-listed page is Cloudflare-gated for automation and was read through a text proxy. The signup form itself is behind login and unconfirmed.

## Before you start
- Account: **Apply for free listing** sends you to https://myaccount.goodfirms.co/users/login (sign up there with `submission.email`).
- Decide whether to list as software (product) or as a company (services). Use software unless the user sells services.
- Free tier includes: research verification, public profile with portfolio and reviews, Leader Matrix ranking, limited public RFPs. Pro (Zoho subscription) and sponsorship (quote) are paid.

## Field map (behind login, unconfirmed)

| Field | Limit / format | Fill with |
|---|---|---|
| Software name | text | `product.name` |
| Website | URL | `product.url` |
| Tagline / summary | short | `product.tagline` |
| Description | text | `product.description_long` |
| Categories | multi-select | from `product.categories` |
| Pricing model / starting price | select + text | `product.pricing_model`, `product.pricing_details`, `product.free_trial` |
| Platforms / deployment | checkboxes | `product.platforms` |
| Features | checklist | `product.key_features` |
| Logo / screenshots | images | `assets.logo_square`, `assets.screenshots` |
| Company info | text | `company.founded_year`, `company.team_size`, `company.country` |
| Contact | name, email | `founder.name`, `submission.email` |

## Steps
1. Search goodfirms.co for `product.name`. If Cloudflare blocks it, mark `needs_human`.
2. Open https://www.goodfirms.co/get-listed and click **Apply for free listing**. Sign up.
3. Choose the software listing, fill the profile from the map, submit for verification.
4. Screenshot to `.launchkit/evidence/goodfirms.png`. `launchkit mark goodfirms submitted --note "free listing, pending verification"`

## Make the listing perform
- Ranking (Leader Matrix) uses reviews, profile completeness and verification. Fill every section.
- Send the review link to real customers; GoodFirms verifies reviewers.
- The site pitches its AI-search visibility; a complete profile with pricing and features is what gets quoted.

## Gotchas
- Pro and sponsorship offers come by email; skip with budget 0.

## After submitting
- Vendor login at https://myaccount.goodfirms.co/users/login. Check the public profile once verified.
