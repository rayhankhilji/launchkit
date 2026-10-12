---
id: github-marketplace
name: "GitHub Marketplace"
url: https://github.com/marketplace
category: Dev / Open Source
mode: manual
pricing: Free
login: github
captcha: none
backlink_required: no
review_time: "Actions: instant on release; Apps: GitHub reviews the listing"
verified: true
last_checked: 2026-10-12
---

# GitHub Marketplace

Where developers find GitHub Apps and GitHub Actions. Only relevant if the product ships one of those artifacts.
It's not a directory form: the listing is created from the app's settings or an action's release.

## Before you start
- Artifact: a GitHub App (integrates beyond login, uses webhooks) or a GitHub Action (public repo with a single
  `action.yml` at the root). If neither exists, mark `skipped` ("manual, needs a GitHub App or Action").
- Requirements for any app listing (GitHub docs): valid publisher contact, relevant description, a pricing plan
  (free is fine), privacy policy link, support link or email, working extra links, publicly available (no invite-only
  or preview), webhooks for Marketplace plan changes, logo + feature card + screenshots.
- Paid plans: app must be owned by a verified-publisher organization, with at least 100 installations (GitHub App)
  or 200 users (OAuth app), handling Marketplace purchase events, monthly and annual billing.
- Org-owned apps: only an org owner can create and submit the listing. 2FA is required to publish an Action.

## Field map (App listing draft)

| Field | Fill with |
|---|---|
| Listing name | `product.name` |
| Very short description | `product.tagline_short` |
| Introductory / detailed description | `product.description_medium`, then `product.key_features` |
| Categories (primary, secondary) | closest to `product.categories` (e.g. Code quality, CI, Project management) |
| Logo, feature card, screenshots | `assets.logo_square`, `assets.og_image`, `assets.screenshots` |
| Pricing plan | Free plan first; paid only if eligible |
| Support / privacy / status links | `founder.email` or support URL, privacy policy URL, status page |

For an Action: in the release form tick "Publish this Action to the GitHub Marketplace", pick Primary Category
(and optional second), set a version tag and title, then **Publish release**. The `name` in `action.yml` must be unique.

## Steps
1. Tell the user what's needed and mark `skipped` ("manual") unless they want to do it now.
2. App: Settings > Developer settings > GitHub Apps > the app > "List in Marketplace", fill the draft, submit for review.
3. Action: open `action.yml` in the repo, click **Draft a release**, follow the Action flow above (accept the
   Marketplace Developer Agreement first).

## Make the listing perform
- Actions publish without review, so quality is on you: clear README with a copy-paste workflow snippet and inputs table.
- Verified publisher badge ("Publisher domain and email verified") needs a verified org domain; it helps trust.
- Pick the category people browse for your job (e.g. "Code review", "Security"), not a generic one.

## After submitting
- Listing URL is https://github.com/marketplace/<slug> (Apps) or https://github.com/marketplace/actions/<slug>.
