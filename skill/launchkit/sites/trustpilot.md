---
id: trustpilot
name: "Trustpilot"
url: https://signup.business.trustpilot.com/create-account
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: recaptcha      # reCAPTCHA on the signup form
backlink_required: no
review_time: "instant account; email/domain verification needed"
verified: true
last_checked: 2026-10-12
---

# Trustpilot

Consumer review platform. The free business account claims your company page and sends 50 review invitations a month. Most useful for consumer products and e-commerce; for B2B SaaS it's a secondary trust signal.

## Before you start
- A work email on the product's domain. Trustpilot verifies the business by domain email.
- Decide with the user whether a public review page is wanted; anyone can then post reviews, good or bad.
- Paid plans are 12-month contracts: Starter $99/mo, Plus $319/mo (14-day trial), Premium $799/mo, billed annually per domain. Free is enough here.

## Field map (4-step signup: Business details -> Additional details -> Personal details -> Activate account)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Business location | dropdown (country) | `company.country` |
| Business name | lookup / text | `company.legal_name` or `product.name`; pick the existing match if lookup finds one |
| Business website | 128 chars | domain only from `product.url` (e.g. `example.com`) |
| Additional details (step 2) | category, company size | closest category to `product.categories[0]`; size from `company.team_size` |
| Personal details (step 3) | name, job title, work email, phone | `founder.name`, `founder.role`, `submission.email`; phone only if the user gives one |
| Activate account (step 4) | email link | needs inbox access |

Steps 2-4 were not opened (they follow a reCAPTCHA submit), so their exact fields are unconfirmed.

## Steps
1. Search trustpilot.com for the domain. If a page exists, you're claiming it with the same flow.
2. Open https://signup.business.trustpilot.com/create-account. Fill step 1 from the map.
3. If reCAPTCHA asks for an image challenge, mark `needs_human` with "Trustpilot reCAPTCHA".
4. Finish steps 2-3. Choose the free plan; ignore "Buy now".
5. Step 4 sends an activation email. If `submission.inbox_access` is none, mark `needs_human` with "activate Trustpilot from email".
6. Screenshot to `.launchkit/evidence/trustpilot.png`. `launchkit mark trustpilot submitted --note "account created, awaiting activation"`

## Make the listing perform
- TrustScore needs recent reviews. Use the free invite link with real customers after a purchase or a good support chat.
- Reply to every review, including bad ones, within a few days.
- Fill the profile description with `product.description_short` and add the logo in the business app.

## Gotchas
- Never offer incentives for reviews or ask only happy customers; Trustpilot's guidelines forbid selective invitations and flag the page.
- Sales follow-up for paid plans is common. The free account doesn't expire.

## After submitting
- Public page: `https://www.trustpilot.com/review/<domain>`. Manage it at business.trustpilot.com.
