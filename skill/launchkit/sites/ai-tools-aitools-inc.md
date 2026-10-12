---
id: ai-tools-aitools-inc
name: "AI Tools (aitools.inc)"
url: https://aitools.inc/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: none
captcha: unknown
backlink_required: no
review_time: "30-90 days free, 24-48 hours paid"
verified: true
last_checked: 2026-10-12
---

# AI Tools (aitools.inc)

An AI tools directory run with The Recap AI newsletter and a 28K-member automation community. Free listing exists but the queue is long (30-90 days, "if at all" per their FAQ). Fast Lane is $129 one-time.

## Before you start
- Free Listing: $0, queue of 30-90 days, no guaranteed placement.
- Fast Lane: $129 one-time. 24-48 hour placement, guaranteed placement or a refund, verified listing page, featured on all relevant category pages, added to Newly Launched Tools, eligible for newsletter placement. Payment is `needs_human`.
- Both buttons open a Typeform. No login.

## Field map

Free: https://loxr142exnq.typeform.com/to/RB6ZnEf2. Fast Lane: https://loxr142exnq.typeform.com/to/Y22Kfelk (same questions, then a Stripe payment step).

| Field on the site | Limit / format | Fill with |
|---|---|---|
| 1. What is the name of your AI Tool? | text, max 256, required | `product.name` |
| 2. What is your tool's website? | URL, required | `product.url` |
| Later questions | unconfirmed, one per screen | email -> `submission.email`, description -> `product.description_short`, category -> `product.categories[0]`, pricing -> `product.pricing_model` |

## Steps
1. Open https://aitools.inc/submit. Click **Submit Now** under Free Listing (or Fast Lane if the user paid for it).
2. Answer each Typeform question. Press **OK** or Enter to move on.
3. Fast Lane: stop at the Stripe step and hand off.
4. Screenshot the final Typeform screen to `.launchkit/evidence/ai-tools-aitools-inc.png`.
5. `launchkit mark ai-tools-aitools-inc submitted --note "free queue 30-90 days"`

## Make the listing perform
- The site is browsed By Category, By Job and By Task. Describe the tool by the job it helps ("for recruiters") and the task ("screen resumes").
- Newsletter placement is only for Fast Lane listings.

## Gotchas
- The FAQ warns free submissions may never be published. Don't promise the user a free listing.
- Declined for violence, porn, or scam sites. Paid ones are refunded.
- The Beehiiv newsletter box on the page is not the submit form.

## After submitting
- Questions go to hello@aitools.inc. Search aitools.inc for `product.name` after the queue window.
