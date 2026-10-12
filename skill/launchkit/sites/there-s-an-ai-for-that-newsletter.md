---
id: there-s-an-ai-for-that-newsletter
name: "There's An AI For That newsletter"
url: https://theresanaiforthat.com/get-featured/
category: Newsletter
mode: pitch
pricing: Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "1-2 days"
verified: true
last_checked: 2026-10-12
---

# There's An AI For That newsletter

TAAFT is the largest AI tool directory, and its newsletter (2.5M+ subscribers, 3 issues a week, on beehiiv) features new AI tools. The only documented way into the newsletter is the paid submission bundle on https://theresanaiforthat.com/get-featured/. Only for AI products.

## Before you start
- Fit check: TAAFT accepts "AI tools, GPTs and AI influencers (non-human)". Non-AI products: mark `skipped`.
- Pricing on the get-featured page:
  - **$49**: listing + "Just Released" section (website only, no newsletter).
  - **$437** one-off: listing + Just Released + **newsletter mention** ("newsletter feature worth $3k").
  - Extras: Highlight $99/month, pay-per-click "Featured" ads (bid per click, $2 default).
  - "Launch on TAAFT first" bonus: $300 PPC credit if the tool has not appeared on any other platform before.
- With budget 0: mark `skipped` ("newsletter mention needs $437 bundle"). With budget, mark `needs_human`; the user pays.
- If the user wants the $300 first-launch bonus, TAAFT must go before every other directory. Decide this before running the rest of the queue.

## Field map

The form starts on the get-featured page; payment is a Stripe link, and listing details are collected after.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| URL of the tool you want to submit | URL | `product.url` |
| Plan | radio: $49 Listing + Just Released / $437 Everything | $437 only if the user approved that spend |
| Extras | checkboxes: Highlight ($99/mo), Get featured (PPC) | leave unchecked |
| Payment | Stripe checkout | user does this |
| Listing details (after payment) | name, tagline, description, category, image (unconfirmed) | `product.name`, `product.tagline`, `product.description_medium`, closest task to `product.categories[0]`, `assets.screenshots[0]` |

## Steps
1. Open https://theresanaiforthat.com/get-featured/ and confirm prices.
2. Budget 0: `launchkit mark there-s-an-ai-for-that-newsletter skipped --note "paid: $437 for newsletter mention"`.
3. With approved budget: paste `product.url`, select the $437 plan, leave extras off, and stop at the Stripe page. Mark `needs_human` with "user to pay $437 on Stripe".
4. After payment, fill the listing form from the map and screenshot to `.launchkit/evidence/there-s-an-ai-for-that-newsletter.png`.

## Make the listing perform
- TAAFT ranks listings by task. Pick the most specific task that matches how people search ("meeting notes", not "productivity").
- Newer tools sit higher; they say results depend on how new the tool is. Submit close to launch.
- The newsletter blurb is one or two lines; make the tagline say the task and the result.

## Gotchas
- The site is behind Cloudflare bot checks; plain fetches get 403.
- URLs can't be changed after listing ("use a redirect").
- Some actions need a free TAAFT sign-in; the submit flow's login requirement is unconfirmed.
- The directory listing (`there-s-an-ai-for-that` guide) is the same product; don't pay twice for one listing.

## After submitting
- They email when the tool goes live (average 1-2 days). Watch the next newsletter issues for the mention and log the issue URL.
