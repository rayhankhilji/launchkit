---
id: submitmysaas
name: SubmitMySaas
url: https://submitmysaas.com/projects/submit
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: optional
review_time: "weekly launch, Mondays 08:00 UTC"
verified: true
last_checked: 2026-10-12
---

# SubmitMySaas

Indie SaaS launch directory with weekly launches. Free launches get a Monday slot (10 free slots per week). Premium ($19 per launch) skips the queue and guarantees a dofollow link.

## Before you start
- Needs an account: Full Name, Email, Password (min 8 chars) at https://submitmysaas.com/sign-up. Only proceed if `submission.allow_account_creation` is true.
- Free tier gives a dofollow link only if the product finishes top 3 of the week or displays their badge. Ask the user before adding the badge (`launch_settings.add_badge_to_site`).
- Premium is $19. Skip unless the budget allows and the user approved it.

## Field map

Sign-up:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Full Name | text | `founder.name` |
| Email | email | `submission.email` |
| Password | min 8 chars | per `submission.password_policy`, never stored in launchkit files |

Project form (behind login, exact fields unconfirmed). Typical fields for this site type:

| Field | Fill with |
|---|---|
| Name, URL | `product.name`, `product.url` |
| Tagline | `product.tagline` |
| Description | `product.description_medium` |
| Category | closest of their categories to `product.categories[0]` |
| Logo / screenshots | `assets.logo_square`, `assets.screenshots` |
| Pricing | map `product.pricing_model` |
| Launch week / plan | earliest free Monday slot unless the user picked a date |

## Steps
1. Open https://submitmysaas.com/projects/submit. You will be redirected to sign in.
2. Click **Sign up**, create the account, verify the email if asked.
3. Return to **Submit Project**, fill the form, pick the **Free Launch** plan and the first open Monday.
4. Stop at any payment screen. Screenshot the confirmation to `.launchkit/evidence/submitmysaas.png`.
5. `lk mark submitmysaas submitted --note "free launch, week of <date>"`.

## Make the listing perform
- Launches open Monday 08:00 UTC and rank by votes during the week. Tell the user to share the launch link that Monday morning.
- Top 3 of the week earns the free dofollow link and more homepage time.
- Use the punchy `product.tagline_short` style headline; cards are small.

## Gotchas
- Their "Attribution Badges" page says the badge must be visible on all pages (footer), at least 150x44, dofollow, image not text. A nofollow or hidden badge does not count.
- Only 10 free slots per week, so the next free Monday can be weeks out.

## After submitting
- On launch day check the project page, reply to comments, and record the URL with `--listing-url`. If the badge was added, confirm it is live in the site footer.
