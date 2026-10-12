---
id: bytes-dev-newsletter
name: "Bytes.dev newsletter"
url: https://bytes.dev/advertise
category: Dev / Open Source
mode: form
pricing: Paid
login: none
captcha: none
backlink_required: no
review_time: "by email, sponsor slots booked in advance"
verified: true
last_checked: 2026-10-12
---

# Bytes.dev newsletter

Bytes is the JavaScript newsletter from the Fireship / ui.dev team, sent twice a week to 200,000+ developers, known
for its jokey tone. There is no free submission form. The only route is paid sponsorship by email.

## Before you start
- Budget: sponsorship prices aren't public. With `launch_settings.budget_usd` 0, mark `skipped` ("paid sponsorship only").
- Fit: JS / TS / React / web developers. Skip if the product isn't relevant to JS devs.

## Field map (email to sponsor@fireship.dev, only with user approval)

| Item | Fill with |
|---|---|
| Subject | "Sponsorship enquiry: `product.name`" |
| What the product is | `product.description_short` |
| Who it's for | `product.target_audience` |
| Link | `product.url` |
| Budget / dates | ask the user, never guess |
| Contact | `founder.name`, `founder.email` |

## Steps
1. If budget is 0, `launchkit mark bytes-dev-newsletter skipped --note "paid sponsorship only"` and stop.
2. Otherwise draft the email (under 120 words) and `lk draft bytes-dev-newsletter -`, mark `needs_human`.
3. The user sends it from their own inbox. Bytes replies with rates and open dates.

## Make the listing perform
- From the advertise page: "We'll work closely with you to create content around your brand." Bytes writes the
  ad in its own voice; give them one concrete hook (a free tier, a funny pain point) rather than polished copy.
- Best for dev tools with a free tier or open source core that readers can try in minutes.

## Gotchas
- No editorial submissions. Pitching a free mention to the sponsor address won't work.

## After submitting
- Track the reply in the user's inbox; nothing to check on the site.
