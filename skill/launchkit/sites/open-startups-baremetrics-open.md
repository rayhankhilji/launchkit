---
id: open-startups-baremetrics-open
name: "Open Startups (Baremetrics Open)"
url: https://baremetrics.com/open-startups
category: Startup Database
mode: manual
pricing: "Free to appear (unconfirmed); public metrics come from a Baremetrics account, which is a paid product"
login: "Baremetrics account"
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Open Startups (Baremetrics Open)

Baremetrics' page of transparent startups that share revenue metrics publicly. The page is live and shows
companies with their monthly revenue and a short description, but no public application form or submit
button was found. Joining appears to depend on publishing a public metrics dashboard through Baremetrics.
The exact process is unconfirmed.

## Before you start
- Only relevant if the user is willing to show real revenue numbers in public. Ask first.
- Publishing live metrics through Baremetrics requires connecting the payment provider (Stripe and others)
  to a Baremetrics account, which is a paid product.
- Do not sign up or connect billing data for the user.

## Field map
Prepare for the user:
| Item | Source |
|---|---|
| Company name | `product.name` |
| Website | `product.url` |
| One-line description | `product.tagline_short` |
| Public metrics (MRR, customers) | From the connected payment provider only |
| Logo | `assets.logo_square` |
| Contact | `founder.email` |

## Steps
1. Show the user https://baremetrics.com/open-startups and explain that listed companies share revenue publicly.
2. If they want in, they create a Baremetrics account, connect billing, and enable a public dashboard.
3. They contact Baremetrics support from inside the app to ask about being added to Open Startups.
4. Mark `needs_human` with the user's decision.

## Make the listing perform
- Entries are sorted around revenue, so the listing helps most once MRR is meaningful.
- A clear one-line description next to the number explains why visitors should click.
- Pair it with a short "building in public" post linking the dashboard.

## Gotchas
- No submission form exists on the page. Do not hunt for hidden endpoints.
- Public revenue can't really be taken back once people have seen it.

## After submitting
- Nothing to automate. Record the decision in the queue note.
