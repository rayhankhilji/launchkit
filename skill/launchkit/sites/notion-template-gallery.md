---
id: notion-template-gallery
name: "Notion Template Gallery"
url: https://app.notion.com/profile/templates
category: No-Code
mode: manual
pricing: Free
login: email
captcha: none
backlink_required: no
review_time: "not published; Notion reviews every submission"
verified: true
last_checked: 2026-10-12
---

# Notion Template Gallery

Notion Marketplace (notion.com/templates), where creators publish free or paid Notion templates. A good template that solves a job the product's users have can send steady traffic through the creator profile and the template's own links. Submission is in the creator dashboard at app.notion.com/profile/templates.

## Before you start
- Artifact: a Notion page published as a Notion Site with **Duplicate as template** on. It must stand alone: every linked page inside the template, example data, instructions in callouts.
- A Notion account and a creator profile (app.notion.com/profile): photo, cover photo, bio, links.
- Free is simplest. Selling through Notion needs a waitlist application, approval by the Notion team and Stripe onboarding. Check the current fee on the selling help page before telling the user. Paid templates can also link to a third-party checkout.
- Spam rules: no ads inside the template and no near-duplicate submissions. One link to `product.url` from a "Made by" or "Resources" block is the safe pattern.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Template name | text | use-case name, e.g. "Customer feedback tracker" |
| Link | Notion Site URL | the published duplicate link |
| Category | select | Work, School or Life, then the closest subcategory (e.g. Startups, Product management, Marketing) |
| Language | select | the template's language |
| Screenshots | images | clean full-width screenshots of the template |
| Video | YouTube or Vimeo, up to 60 seconds | optional walkthrough |
| Paid template | toggle + price (USD) | off unless the user wants to sell |
| Sell with | dropdown + URL | only for third-party checkout |
| Access locking | Restricted / Open | Open for free templates |
| Custom URL | slug | short, matches the name |
| Brief description | short | one sentence on what it does and for whom |
| Full description | long | what's inside, how to start, then one line on `product.name` |
| Email requirement | None / Optional / Require | Optional, if the user wants leads |

## Steps
1. This is `manual`. Suggest a template that fits `product.use_cases` and links to the product.
2. In Notion: **Share** > **Publish** tab > **Publish**, toggle **Duplicate as template**.
3. Open https://app.notion.com/profile/templates, click **Start a New Template**, fill the fields, then **Submit for review** (or **Save** to finish later).
4. `launchkit mark notion-template-gallery submitted --note "Notion review"`. If approved, Notion emails a link.

## Make the listing perform
- Notion's criteria: value vs the best templates in the category, use of databases, buttons, AI and embeds, good example data, instructions, visual polish and the thumbnail.
- Featured picks favour timing (holidays, trends, start of the school year), rare or specific use cases, and templates for teams. Featured slots refresh weekly to monthly per language and only consider new submissions.
- Templates in the user's native language rank higher in that language's marketplace.
- Free templates get many more duplications, and popularity feeds featuring.

## Gotchas
- Once a paid template is sold via Notion, its Notion Site link redirects to checkout. Keep a separate copy for other platforms.
- Remove any content duplicators can't access.

## After submitting
- Track status in the creator dashboard. Share the Marketplace link, and resubmit after edits with **Submit for review**.
