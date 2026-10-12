---
id: morning-brew-tips
name: "Morning Brew (tips)"
url: https://morningbrewinc.com/contact
category: Newsletter
mode: pitch
pricing: Paid
login: none
captcha: unknown
backlink_required: no
review_time: "unknown; no reply unless interested"
verified: true
last_checked: 2026-10-12
---

# Morning Brew (tips)

Morning Brew is a very large daily business newsletter (owned by Axel Springer). It covers major business news, not small product launches. The press route is the general contact form ("Purpose: Press") or hello@morningbrew.com. Advertising goes through a separate sales form and costs far more than an early startup budget. Sister newsletters such as Tech Brew are a slightly better fit for tech products.

## Before you start
- Fit: only real business news (large funding, notable data, a trend story with numbers). A product launch alone won't get covered.
- Don't send anything without the user's approval. At budget 0, skip advertising entirely.

## Field map

Contact form at morningbrewinc.com/contact:

| Field on the site | Format | Fill with |
|---|---|---|
| Purpose | select: Career / Partner / Press / Other | Press |
| Name | text | `founder.name` |
| Email | email | `founder.email` |
| Phone number | optional | leave blank |
| Company | optional | `company.legal_name` or `product.name` |
| Message | text | `copy.press_pitch` cut to 3-4 sentences: the news, why now, one number, link |

## Steps
1. Decide with the user if there's an actual business news hook. If not, `launchkit mark morning-brew-tips skipped --note "no news hook; launch not covered"`.
2. If yes, open https://morningbrewinc.com/contact, pick Purpose = Press, fill the fields per the map.
3. Submit only if `pitch` mode is on and the user approved the message. Otherwise `launchkit draft morning-brew-tips -` and mark `drafted`.
4. After submitting, screenshot to `.launchkit/evidence/morning-brew-tips.png` and mark `submitted`.

## Make the listing perform
- Pitch a story, not a product: a trend backed by your own data, or a surprising number from customers. Morning Brew writes about what it means for business.
- For a B2B tech product, the same pitch fits Tech Brew better. Mention it in the message.
- Keep it short; their editors skim.

## Gotchas
- "Partner" in the dropdown and the Advertise page (morningbrewinc.com/advertise-with-us) are paid ad sales routes that match you with an account manager.
- The morningbrew.com reader feedback survey is for comments on issues, not tips.

## After submitting
- They only reply if interested. Don't follow up more than once.
