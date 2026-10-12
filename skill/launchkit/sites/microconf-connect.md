---
id: microconf-connect
name: "Microconf Connect"
url: https://microconf.com/connect
category: Community
mode: post
pricing: Paid
login: unknown          # application form, then invite email
captcha: unknown
backlink_required: no
review_time: "applications reviewed within 3 business days (when open)"
verified: false
last_checked: 2026-10-12
---

# Microconf Connect

**Applications are paused.** microconfconnect.com redirects to https://microconf.com/connect, which says "We're rebuilding
Connect. Applications reopen November 17" and only offers an email notify form. Re-check after that date.

It's MicroConf's vetted private community for bootstrapped SaaS founders (stage channels, monthly expert sessions,
"Ask Rob Anything", member directory). It is not a launch venue: the community is pitch-free, so treat it as a place to get advice.

## Before you start
- Price (from the page): $49/month or $499/year, paid only after acceptance, 30-day refund window.
- Who gets in: bootstrapped or mostly bootstrapped SaaS founders at any stage, including serious pre-launch founders.
  Not investors or service providers looking for clients.
- Budget: launchkit defaults to $0, so this always needs the user's decision.

## Field map (application, when open; fields unconfirmed)

| Field | Fill with |
|---|---|
| Name, email | `founder.name`, `founder.email` |
| Your SaaS | `product.name`, `product.url`, `product.description_short` |
| Stage | from `product.status` / `company.funding_stage` (pre-launch, $0-10K ARR, etc.) |
| What you're working on / goals | 2-3 honest sentences from the founder (takes ~5 minutes per the page) |

## Steps
1. Open https://microconf.com/connect and check whether applications are open.
2. If paused: `launchkit mark microconf-connect skipped --note "applications paused until Nov 17; notify form only"`.
3. If open: don't apply for the user. Mark `needs_human --note "paid community ($49/mo), founder applies personally"`.

## Make the listing perform
- Inside, self-promotion isn't the point. Ask specific questions (pricing, positioning) and mention the product as context.

## Gotchas
- Joining is per person, after a human review; no company listings.
