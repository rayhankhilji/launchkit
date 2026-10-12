---
id: bubble-plugins-templates
name: "Bubble Plugins/Templates"
url: https://bubble.io/marketplace
category: No-Code
mode: manual
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: "a couple of days (templates)"
verified: true
last_checked: 2026-10-12
---

# Bubble Plugins/Templates

Bubble's marketplace of templates and plugins for people building apps on Bubble. It's worth it if the product has an API that Bubble users would want to call (ship a plugin), or if a Bubble template can demo the product. A pure marketing listing is not allowed.

## Before you start
- Artifact: either a Bubble **plugin** (built in Bubble's plugin editor, usually wrapping the product's API) or a Bubble **template** (a Bubble app). Both need a Bubble account.
- Policy rule that matters: "No templates for self-promotion". A template whose purpose is to promote the user's business gets rejected. It must be useful on its own.
- To charge money: a seller profile and a Stripe account (PayPal only by request in some countries). Bubble keeps 25% of template and plugin sales and pays out monthly.
- A support email for the seller profile (required). No external links in the seller profile.

## Field map

Template submission (rocket icon at bubble.io/my_templates):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Template name | text | short, unique, describes what it does. Not just `product.name` |
| Description | long text, English | what's included page by page, setup steps, any paid plugins or custom code it needs. Bubble tests the template against this text |
| License | Open Source (MIT, free) or Commercial | Open Source unless the user wants to sell. Open Source can't be changed to Commercial later |
| Category | dropdown | closest match to `product.categories[0]` |
| Thumbnail | screenshot | best screenshot of the template |
| Price (Commercial only) | Individual: free or $3-$500. Developer: $10-$5,000 | ask the user |

Plugin submission adds a "link for demonstration", which must be a Bubble app that actually uses the plugin, and a plugin name, logo and description.

Seller profile (bubble.io/account/marketplace/profile): name `founder.name` or `company.legal_name`, logo `assets.logo_square`, website `product.url`, city and country only, bio `founder.bio_short`, support email `founder.email`.

## Steps
1. This is `manual`. Tell the user what's needed and that review is by the Bubble team.
2. If they want to go ahead, they build the plugin or template in Bubble. For a template, start at bubble.io/my_templates, **New template**. An existing app used as the base must have no data and be on the Free plan.
3. Fill the seller profile completely, or the template won't show at bubble.io/templates.
4. Click the rocket icon, fill name, description, license, category and thumbnail, then **Submit**.
5. Bubble emails feedback, usually after a couple of days. To change anything mid-review, cancel the submission and resubmit.
6. `launchkit mark bubble-plugins-templates submitted --note "Bubble review, a couple of days"`

## Make the listing perform
- A plugin that connects Bubble to the product's API is the strongest play: every install is a user of the product.
- Add a "demo login" button (e.g. demo@demo.com) to templates with sign-up, so buyers can try it.
- Make the template responsive. Reviewers check mobile widths.
- Write the description as instructions, in English, listing every feature. Listings with thorough descriptions get approved faster and convert better.
- Reviews and ratings drive ranking. Changing the price later can reset reviews, so set it once.

## Gotchas
- A template sold on Bubble must not be sold on another platform.
- Remove any live user data before submitting.
- Published templates can be removed from the marketplace, but the underlying app can't be deleted.

## After submitting
- Answer buyer questions. Bubble can withdraw templates whose owners ignore reported issues.
