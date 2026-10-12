---
id: toolscout
name: "Toolscout"
url: https://toolscout.ai/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: google           # Google, or email with a one-time link/code
captcha: unknown
backlink_required: optional
review_time: "1+ week (free), 24-48 hours (Boost/Featured)"
verified: true
last_checked: 2026-10-12
---

# Toolscout

Human-curated AI tools directory (1,000+ listings) with news, an AI timeline and a separate open-source GitHub repo
section. Free listings stay free; paid placements only speed up review and add visibility.

## Before you start
- Sign-in is required: **Continue with Google** or email. Use `submission.preferred_login`.
- Open-source products can use **Submit a GitHub repo** (/submit/repo) with `product.repo_url` instead.
- Paid: Boost $49 (7 days priority in feeds), Featured $99 (14 days, homepage and search). One-time Stripe payments,
  bought separately at /feature after the tool exists. Skip at budget 0.
- The listing form is behind sign-in. Their FAQ says the page shows a description, category tags, pricing and a
  screenshot, so have those ready. Exact fields are unconfirmed.

## Field map (unconfirmed, behind sign-in)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Short description | short text | `product.tagline` |
| Description | long text | `product.description_medium` |
| Category / tags | chips | subcategories like Coding Assistants, App & Website Builders, SEO Optimization, Sales & CRM, Notes & Knowledge, Project Management, Image Generation; pick from `product.categories` |
| Pricing | select | `product.pricing_model` (cards show Free / Paid badges) |
| Screenshot | upload | `assets.screenshots[0]` |
| Logo | upload | `assets.logo_square` |

## Steps
1. Search toolscout.ai for `product.name`. If listed, mark `live` and stop.
2. Open https://toolscout.ai/submit, click **Sign in to continue**, sign in.
3. Fill the form, submit. Screenshot to `.launchkit/evidence/toolscout.png`.
4. `launchkit mark toolscout submitted --note "free, human review 1+ week"`

## Make the listing perform
- Every listing is human-reviewed. A live product people can try now passes; waitlists and broken sites don't.
- Browse is by task ("what you're trying to get done"). Choose the subcategory that matches the main use case in
  `product.use_cases[0]`, not a broad one.
- Use the best screenshot showing the actual UI; it is the card image.
- The "Featured on ToolScout" badge is optional. Add it only if the user allows badges.

## After submitting
- They email when it's approved. Edit details later under **Your submissions**.
