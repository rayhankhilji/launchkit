---
id: usertesting-lyssna
name: "UserTesting / Lyssna"
url: https://www.lyssna.com/pricing/
category: Beta Testing / Feedback
mode: manual
pricing: Freemium
login: email           # email or Google, at app.lyssna.com
captcha: unknown
backlink_required: no
review_time: "instant (self-serve signup; no listing review)"
verified: true
last_checked: 2026-10-12
---

# UserTesting / Lyssna

Lyssna (formerly UsabilityHub) is a user research tool: five-second tests, first-click, preference, prototype and live
website tests, surveys and interviews, with a paid panel of 690,000+ participants. UserTesting is the enterprise
alternative (sales-led, no public pricing). There's no listing here. It's a paid research purchase, so it's manual:
suggest it, let the user decide.

## Before you start
- Lyssna plans (pricing page, billed monthly):
  - Free: $0, unlimited quick studies, 3 seats, 15 self-recruited responses, panel access.
  - Growth: $166/month, 5 in-depth studies a month, unlimited self-recruited responses, recordings, live website testing.
  - Enterprise: talk to sales.
- Panel responses are never included in a plan. You pay per order or buy credits (no expiry, bulk discounts).
  Demographic filters cost nothing extra. Use their panel order calculator for a quote before suggesting a spend.
- With `budget_usd` 0: suggest the Free plan with self-recruited participants only (share the test link in your own
  channels).

## What the user needs
| Item | Fill with |
|---|---|
| Account | `submission.email` or Google at https://app.lyssna.com/users/sign_up |
| Test type | Five second test for the homepage hero; Preference test for two tagline or logo options; First click for signup flow |
| Images / URL | `assets.screenshots[0]` or `assets.og_image` for five-second tests; `product.url` for live website tests (Growth only) |
| Questions | "What does this product do?", "Who is it for?", "What would you click first?" |
| Participants | self-recruited link (free) or panel order filtered by `product.target_audience` (paid) |

## Steps (advise the user)
1. Sign up on the Free plan (no card needed).
2. Create a five-second test with the homepage screenshot and the three questions above.
3. Share the self-recruit link in places you already post (Discord, newsletter). 15 responses is the Free cap.
4. Paid panel orders: get the quote from the calculator and an explicit yes from the user, then it's `needs_human`.
5. `launchkit mark usertesting-lyssna skipped --note "manual: suggested Lyssna five-second test"` unless the user runs it.

## Make it useful
- Test the tagline before you submit to 400 directories. If people can't say what the product does after five seconds,
  fix `product.tagline` first; every listing reuses it.
- Preference test two taglines from the profile and use the winner as `product.tagline`.

## Gotchas
- Free plan has a hard cap of 15 self-recruited responses.
- UserTesting.com has no self-serve free path; skip it for early-stage founders.
