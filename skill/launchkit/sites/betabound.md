---
id: betabound
name: "Betabound"
url: https://betabound.com/announce/
category: Beta Testing / Feedback
mode: form
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "a few business days (human-written post, not guaranteed)"
verified: true
last_checked: 2026-10-12
---

# Betabound

Betabound is Centercode's tester community (they say 250,000+ registered members). Any company can request a free
announcement of a beta. A Betabound editor writes the post, emails it to you for approval, and puts it on the homepage
and their social accounts. Only worth it if the product is genuinely in beta and free to test.

## Before you start
- Fit check from their FAQ. Skip (mark `skipped`, "not a fit") unless all are true:
  - `product.status` is beta, alpha or pre-launch, and the landing page itself says "beta".
  - The page at the Test URL explains what the product is, how to join the beta and how to send feedback.
  - Testers don't pay for access (no paid plan or pre-order wall in front of the beta).
  - The product works well enough to test. "Released product with a free trial" is rejected.
- Need a beta landing page URL (a waitlist or signup page that says "beta"). If the profile only has the homepage
  and it doesn't mention beta, mark `needs_human` with "Betabound needs a beta landing page".
- No account, no login, no CAPTCHA. It's an embedded HubSpot form.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Company name * | text | `company.legal_name`, else `product.name` |
| Your First Name * | text | first word of `founder.name` |
| Your Last Name * | text | rest of `founder.name` |
| Your Email * | email | `submission.email` (they email the draft post here) |
| Product Name * | text | `product.name` |
| Centercode customer? * | select | "No, I am not a Centercode customer" |
| Twitter Handle | text | handle from `links.twitter` (or `founder.twitter`), without the URL |
| Brief Description * | textarea, used as a single line | one sentence, under ~140 chars, from `product.tagline` or the first sentence of `product.description_short`. Say what testers will try |
| Tester Requirements | textarea | devices/OS from `product.platforms`, plus who you want (`product.target_audience`). Short list, one line each |
| Incentives | text | only what the user offers (e.g. "Free Pro plan after launch" if `product.deal_or_promo_code` or the user confirms). Leave blank otherwise, never invent |
| Primary Product Type * | select | Hardware / Software / Mobile / Web / TV / Gaming. Map `product.platforms`: ios/android -> Mobile, web/saas -> Web, desktop/cli/api -> Software, game -> Gaming |
| Primary Audience * | select | Developers / Personal/Home / Professional/Business. Dev tools -> Developers, B2B -> Professional/Business, consumer -> Personal/Home |
| Access * | select | Open (anyone can join now), Application (testers apply), Notification (waitlist), Key, Pre-order. Pick from how the beta page works; waitlist -> Notification |
| Timeframe * | select | Now / Approaching / Someday. Use Now if testers can start today |
| Announcement Expiration Date | date | end of beta recruiting if known, else leave blank |
| Centercode Implementation URL | text | leave blank |
| Test URL * | URL | the beta landing page. Add `?ref=betabound` (their FAQ suggests a tracked link to count clicks) |
| Product URL | URL | `product.url` |
| Additional Information | textarea | 2-3 sentences from `product.description_medium`: what to test and how feedback is collected |
| How Did You Hear About Us? | text | "Web search" |

## Steps
1. Open https://betabound.com/announce/ and wait for the HubSpot form to load below the intro text.
2. Fill the fields in the order above. The selects are native dropdowns.
3. Click **Submit**. Expect an inline thank-you message. Screenshot to `.launchkit/evidence/betabound.png`.
4. `launchkit mark betabound submitted --note "Betabound editor reviews, emails draft post in a few business days"`

## Make the listing perform
- The Brief Description becomes the post's one-line summary on the homepage card. Make it concrete: what the product
  does and what the tester will do ("Try a CLI that turns logs into incident timelines").
- Tests with incentives get the best response, per their FAQ. Ask the user if they can offer free access after launch
  or a gift card, and put it in Incentives.
- Clear requirements reduce junk signups. List exact devices and OS versions.
- Pick Access and Timeframe honestly. "Now" + "Open" posts get listed under Public Betas, the busiest filter.
- The landing page does the converting: one paragraph on the product, how to join, how to give feedback.

## Gotchas
- Not every request is posted or answered. No paid way to jump the queue (Centercode customers are reviewed first).
- You can't edit or delete the post yourself. Changes go to hello@betabound.com.
- Testers can't email you from the post, so feedback instructions must live on your page.

## After submitting
- Watch `submission.email` for the draft post from the Betabound team and forward it to the user to approve.
- Once live, the post appears on https://betabound.com/ and under the matching filter (e.g. /web/, /ios/).
  `launchkit mark betabound live --listing-url <post url>`.
