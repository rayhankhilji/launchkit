---
id: startups-fyi
name: "Startups.fyi"
url: https://tally.so/r/3lOGLk
category: Launch Platform
mode: form
pricing: Paid
login: none
captcha: none
backlink_required: no
review_time: "featured in a Tuesday issue, typically within 8 days of payment"
verified: true
last_checked: 2026-10-12
---

# Startups.fyi

Newsletter (about 15,800 subscribers, out every Tuesday) and searchable directory of startups that shows revenue, funding and founder details. The "Share your project" link opens a 5-page Tally form. Publication requires a $29 Featured Listing payment; there is no free path.

## Before you start
- No login. The form ends in a required payment step. Ask the user before going past page 3; without approval, fill pages 1 to 3 and stop.
- Have `founder.name`, `submission.email`, `product.name`, `product.url`, `product.tagline_short`, `assets.logo_square`, `company.founded_year`, `company.city`, `company.country`, `company.team_size`, `company.business_model`, `company.funding_stage`, `founder.twitter`, `copy.launch_post_story`.
- Ask the user for monthly revenue or MRR if the profile does not have it. "pre-revenue" is accepted.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First Name / Last Name | text, required | split `founder.name` |
| Email | email, required, not published | `submission.email` |
| What's the name of your startup? | text, required | `product.name` |
| Website | URL, required | `product.url` |
| Describe your project in a few words | 3-280 chars, shown as tagline | `product.tagline` |
| Upload your logo | file, required | `assets.logo_square` |
| What year did you launch? | text | `company.founded_year` |
| Where are you based? | text, e.g. "San Jose, CA" | `company.city`, `company.country` |
| Built With | Code / No-code Tools | ask the user if unknown, default Code |
| Number of founders | Solo Founder / Multiple Founders | from `company.team_size` or ask |
| Number of employees | No Employees / 1-5 / 5+ | from `company.team_size` |
| Business model | Advertising, Commission, Consulting, Free, Partnerships, Sales & Transactions, Subscriptions | map `company.business_model` / `product.pricing_model` (subscription -> Subscriptions) |
| Funding | Bootstrapped/Self-funded, VC Funded, Seed Funded, Accelerator/Incubator, Crowdfunded | map `company.funding_stage` |
| Commitment | Full-time / Side-project | ask the user |
| Average Monthly Revenue or MRR | "$___/month" or "pre-revenue" | ask the user |
| Founder's X handle | @handle format, not a URL | `founder.twitter` as @name |
| Short story (optional) | text | `copy.launch_post_story`, why it was built |
| How did you hear about us? | text | "launchkit" or "Directory list" |
| Feature My Startup | checkbox, $29 | only with approval |
| Pin 2 weeks (+$19) / 4 weeks (+$49) | optional checkboxes | leave unchecked |
| Extra newsletter issues (+$19 / +$49) | optional checkboxes | leave unchecked |
| Payment | Tally payment, required | user pays, never the agent |

## Steps
1. Open https://tally.so/r/3lOGLk (the "Share your project" link on startups.fyi).
2. Page 1: names and email, click **Next**. Page 2: name, URL, tagline, logo, year, location.
3. Page 3: the dropdowns and story fields above.
4. Page 4 is the paid Featured Listing. Stop here unless the user approved $29; if approved, check "Feature My Startup", leave add-ons unchecked and let the user complete payment.
5. Screenshot to `.launchkit/evidence/startups-fyi.png`.
6. `launchkit mark startups-fyi submitted --note "paid feature, Tuesday issue"` (or `skipped` if not approved).

## Make the listing perform
- Readers care about the founder story and real numbers. Use the founder's personal X handle and give an honest MRR; the team writes the newsletter blurb from the story field.
- Keep the 280-char tagline to one plain sentence of what the product does.

## Gotchas
- Payment is required for publication; unpaid submissions are not queued. Projects that fail review get a full refund.
- The X handle must be "@name", not a URL.

## After submitting
- Watch `submission.email`; questions come from chris@startups.fyi. The listing goes in the next Tuesday issue and the directory.
