---
id: peerspot
name: "PeerSpot"
url: https://www.peerspot.com/contact
category: Software Review Site
mode: form
pricing: Free
login: email            # free membership needs a work email or LinkedIn
captcha: unknown
backlink_required: no
review_time: "manual review by email"
verified: true
last_checked: 2026-10-12
---

# PeerSpot

Enterprise tech review site (formerly IT Central Station). It also runs the validated reviews inside AWS Marketplace and Google Cloud Marketplace. There is no self-serve product form: you email them, and only enterprise-proven products qualify.

## Before you start
- Inclusion criteria (live FAQ): the vendor has at least 50 employees and the product has at least 10 enterprise customers (an enterprise = 1,000+ employees or $250M+ revenue). Most early-stage startups don't qualify.
- If `company.team_size` is under 50 or the user can't name 10 enterprise customers, mark `skipped` with "PeerSpot needs 50+ employees and 10 enterprise customers".
- Vendors must identify themselves when registering and can't review their own or competitors' products.

## Field map (email to vendors@peerspot.com, per the FAQ)

| Item in the email | Fill with |
|---|---|
| Subject | "Product listing request: `product.name`" |
| Company and product | `company.legal_name`, `product.name`, `product.url` |
| Category | closest PeerSpot category to `product.categories[0]` |
| What it does | `product.description_short` |
| Eligibility | employee count (`company.team_size`) and a statement that it has 10+ enterprise customers (user must confirm) |
| Contact | `founder.name`, `founder.role`, `submission.email` |

## Steps
1. Search peerspot.com for `product.name`.
2. Check eligibility with the user. If they don't meet it, skip.
3. Write the email with `lk draft peerspot -` (to vendors@peerspot.com). The "Add a Product" link points to https://www.peerspot.com/contact if a form is preferred.
4. Don't send email from the user's account without approval. `launchkit mark peerspot drafted` (or `needs_human` with "send listing email to vendors@peerspot.com").

## Make the listing perform
- PeerSpot rankings come from validated reviews; real users register with LinkedIn or a work email.
- Their paid service interviews your customers and writes reviews (disclosed on each review). Optional and sales-led.
- If you're on AWS or Google Cloud Marketplace, reviews collected there also show on PeerSpot.

## Gotchas
- You can't delete reviews or remove the company once listed.

## After submitting
- Vendor info and paid options: https://company.peerspot.com/.
