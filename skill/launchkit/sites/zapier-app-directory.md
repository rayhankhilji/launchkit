---
id: zapier-app-directory
name: "Zapier App Directory"
url: https://developer.zapier.com/
category: No-Code
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "first response within 1 week; 90 days in Beta"
verified: true
last_checked: 2026-10-12
---

# Zapier App Directory

Build a public Zapier integration and the product gets a page in Zapier's app directory, appears in the Zap editor, and can be paired with thousands of apps. Building and publishing is free. It's one of the highest-value manual targets for any SaaS with an API.

## Before you start
- Artifact: a Zapier integration built in the Platform UI (no code, uses API endpoint URLs) or the Platform CLI.
- Requirements that block publishing:
  - The app is publicly launched (not invite-only or beta) with public API docs.
  - Every trigger, action and search tested in a live Zap, each with at least one successful run. Keep those Zaps.
  - HTTPS only, OAuth or API key auth, no hard-coded credentials, English listing.
  - A non-expiring test account for integration-testing@zapier.com with paid features enabled.
  - At least one admin team member with an email on the product's own domain.
  - No equivalent integration already published, and not a Zapier competitor.
- developer.zapier.com redirects to Zapier login. Sign in with the user's Zapier account.

## Field map

Listing details and the Publish form (Integration Home > **Publish**):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Integration name | text | `product.name` exactly as branded, no "app", "integration" or TM |
| Description | short, starts "<Name> is a..." | rewrite `product.description_short` into that pattern, no links, no mention of Zapier or other apps |
| Homepage URL | URL | `product.url` |
| Logo | square image | `assets.logo_square` |
| Category | select | closest match to `product.categories[0]` |
| API documentation | URL | `links.docs` |
| Test account credentials | text | created by the user for integration-testing@zapier.com |
| Intended audience / other form questions | text | answer from the profile; unconfirmed beyond the docs |

## Steps
1. This is `manual`. Explain the requirements; a developer usually needs a few days to build.
2. Build in the Platform UI or CLI, test every step in real Zaps.
3. Integration Home > **Publish**, complete the form, **Submit for Review**. Version goes to Pending.
4. A Zapier developer replies within a week with any required changes. Don't resubmit the same integration repeatedly; it slows review.
5. `launchkit mark zapier-app-directory submitted --note "Zapier review, reply within 1 week"`

## Make the listing perform
- Once approved it's listed with a Beta tag for 90 days. It exits Beta early, next business day, once one Zapier signup comes through a Zapier embed in the product.
- During Beta: publish Zap templates, write a help article on the product's site, and embed Zapier in the product. These raise usage, which drives directory ranking.
- Ship the triggers users ask for most in the category (new record, updated record) and a matching create action.

## Gotchas
- Integrations that scrape named third-party sites, move money or replace an existing public integration stay private.

## After submitting
- After 90 days it becomes Public and joins the Partner Program. Watch the Issue Manager and health score.
