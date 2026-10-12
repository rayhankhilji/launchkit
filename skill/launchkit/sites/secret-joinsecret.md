---
id: secret-joinsecret
name: "Secret (JoinSecret)"
url: https://www.joinsecret.com/saas-partnerships
category: Deals / LTD
mode: form
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: "unknown (sales team replies by email)"
verified: true
last_checked: 2026-10-12
---

# Secret (JoinSecret)

SaaS perks marketplace for startups and small businesses (296,140 members and 640 deals at last check; 356 deals are free to claim, 284 need Premium). SaaS vendors list a discount to get qualified leads. Listing goes through a short "Contact us" lead form, then their partnerships team.

## Before you start
- You need a real discount for Secret members (for example "3 months free" or "30% off year one"). If `product.deal_or_promo_code` is empty, mark `needs_human` ("requires deal terms decision").
- Commercial terms for vendors are not public. Assume the team will propose them on a call; the user decides.
- Use a work email (`founder.email` on the product domain). Free webmail looks weak on this form.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First name | text, required | first part of `founder.name` |
| Last name | text, required | rest of `founder.name` |
| Work email | email, required | `founder.email` (or `submission.email` if on the company domain) |
| Company name | text, required | `company.legal_name` or `product.name` |
| Website URL | text, required | `product.url` |
| Message | optional | 2-3 sentences: `product.description_short`, the offer from `product.deal_or_promo_code`, and `product.target_audience` |

## Steps
1. Open https://www.joinsecret.com/saas-partnerships ("List your SaaS").
2. Click **Contact us** to jump to the lead form at the bottom.
3. Fill the fields from the map. Keep the message plain and specific about the offer.
4. Submit. Screenshot the confirmation to `.launchkit/evidence/secret-joinsecret.png`.
5. `launchkit mark secret-joinsecret submitted --note "Lead form sent, partnerships team follows up by email"`.

## Make the listing perform
- Secret members are founders buying their stack. Offers framed as a dollar amount saved ("Save $500 in year one") read better than percentages.
- Name your category in the message. Top-level groups on the site: AI, Project Management, Data, Customer, Development, Marketing, Finance, Communication, Sales, Business, IT, Human Resources, Operations Management, Lifestyle.
- Deals are split into free-to-claim and Premium-only. Ask the team which tier fits the offer; free deals are visible to every member.
- Keep the redemption flow short: a dedicated landing page or coupon field on signup.

## Gotchas
- The site also has a "Partners Program" (for agencies and communities to resell Premium). That is not the vendor listing; use the SaaS listing form.
- Signing up as a buyer ("Join for FREE") does not list the product.

## After submitting
- Expect an email from the partnerships team. Once live, the deal page sits under joinsecret.com/<product>; check it shows the right offer and redemption steps.
