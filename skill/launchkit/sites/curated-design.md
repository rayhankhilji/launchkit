---
id: curated-design
name: "Curated.design"
url: https://curated.design/submit/
category: Design Gallery
mode: form
pricing: Freemium
login: none            # form needs only an email; confirmation goes to the inbox
captcha: none          # honeypot field only
backlink_required: no
review_time: "free queue: a few weeks; priority ($29): verdict within 7 days"
verified: true
last_checked: 2026-10-12
---

# Curated.design

A gallery of live websites (landing pages, portfolios, product sites) tagged by style and category, from the team behind Craftwork. A person reviews every entry. Good fit for SaaS and AI product pages, which have their own categories.

## Before you start
- Free queue works ($0, a few weeks). Priority review is $29: verdict within 7 days, written fixes if rejected, one free resubmit. With budget 0, choose the free queue.
- Keep "Product is mine" on (default) when it's the user's own site.

## Field map
All seen live:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product is mine | toggle, on by default | leave on |
| Site name * | text | `product.name` |
| Site URL * | URL | `product.url` |
| Your email * | email | `submission.email` |
| Tagline | one line | `product.tagline` |
| Description | short textarea, placeholder "Layout, typography, interactions..." | 1-2 sentences on the design, not the product pitch (see below) |
| Category | select | Artificial Intelligence, Web Apps, Productivity, Development Tools, Design Tools, Marketing, Finance, Education, E-commerce, Mobile Apps, Desktop Apps, Tech, Agency, Portfolio, Assets, Web3. Map `product.categories[0]` |
| Styles | checkboxes | true ones: minimal, dark, colorful, gradients, animated, pastel, neobrutalism |
| Review | radio: $29 priority (pre-selected) / Free queue $0 | select **Free queue** unless the user approved $29 |

## Steps
1. Search curated.design (cmd+K search) for `product.name`. If listed, mark `live` and stop.
2. Open https://curated.design/submit/ and fill the fields above.
3. Click the **Free queue** card. The button text changes from "Submit for this week's review, $29"; confirm it no longer mentions a price.
4. Submit. Expect "Your tip lands in the review list" and a confirmation email. If a checkout opens anyway, close it; the entry stays in the free queue.
5. Screenshot to `.launchkit/evidence/curated-design.png`, then `launchkit mark curated-design submitted --note "free queue, a few weeks"`.

## Make the listing perform
- Their bar: "If the craft is there and it surprises us at least once, it goes in." Use the description to point at that moment ("the pricing table animates between monthly and yearly").
- Write the description for designers: layout, type, motion. Skip feature lists.
- The AI category is crowded with similar dark gradient pages. If the site is light or unusual, tick the styles that show it.
- Template demos and unfinished pages are turned down.

## Gotchas
- $29 priority is pre-selected. Always switch to Free queue on a $0 budget.
- Hidden honeypot field named `website`; leave it empty.

## After submitting
- Check the inbox for the confirmation and the later verdict. Listings link out to the live page.
