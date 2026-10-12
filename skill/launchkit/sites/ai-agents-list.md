---
id: ai-agents-list
name: "AI Agents List"
url: https://aiagentslist.com/submit
category: AI Directory
mode: form
pricing: Paid
login: google
captcha: unknown
backlink_required: no
review_time: "24-48 hours"
verified: true
last_checked: 2026-10-12
---

# AI Agents List

A curated directory of AI agents and agent tools with an "AI Agents Map". The eligibility check is free, but **accepted listings are paid** ($29 or $49 one-time). Only real, working AI agents or agent-focused tools with a public site are accepted.

## Before you start
- Prices on 2026-10-12:
  - Lifetime Listing: $29 one-time, permanent listing, editorial review within 48 hours.
  - Launch Boost: $49 one-time, permanent dofollow link, 28 days featured on the category page and the AI Agents Map, review within 24 hours.
- Payment is `needs_human`. Refund if final review rejects.
- Sign-in (https://aiagentslist.com/login) offers Continue with Google or email and password. The dashboard flow likely needs an account.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website URL | URL, required | `product.url` |
| Later steps (after the eligibility check) | unconfirmed | name `product.name`, description `product.description_medium`, category from `product.categories[0]`, logo `assets.logo_square`, pricing `product.pricing_model` |

## Steps
1. Open https://aiagentslist.com/submit. Enter `product.url` and run the free eligibility check.
2. If it says the product isn't an agent, stop and mark it skipped.
3. If eligible, it asks you to sign in. Use Google per `submission.preferred_login` if account creation is allowed.
4. Fill the remaining fields from the profile. Stop at plan choice and payment, hand off to the user.
5. Screenshot to `.launchkit/evidence/ai-agents-list.png`. `launchkit mark ai-agents-list needs_human --note 'eligible, $29/$49 to pay'`

## Make the listing perform
- Launch Boost is the only tier with a dofollow link and featured spots, worth it if the product is a clear agent and SEO matters to the user.
- Write the description around what the agent does on its own (tasks, tools it uses, where it runs). The editors check for real agent behavior, not chat wrappers.

## Gotchas
- Not for general AI tools. Non-agents fail the check.
- The weekly updates checkbox on the login page is opt-in. Leave it unchecked.

## After submitting
- Review is within 24 hours (Boost) or 48 hours (Lifetime). Check the dashboard at https://aiagentslist.com/dashboard and search for `product.name`.
