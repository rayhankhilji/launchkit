---
id: gumroad-discover
name: "Gumroad Discover"
url: https://gumroad.com/
category: App Store / Marketplace
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "risk review ~3 weeks after $100 in sales"
verified: true
last_checked: 2026-10-12
---

# Gumroad Discover

Gumroad's marketplace (`gumroad.com/discover`) that recommends creators' products to buyers. Free to sell on Gumroad (10% + $0.50 per sale; 30% on sales that come through Discover). Only relevant for digital products: templates, e-books, courses, presets, software licences, memberships. Not a SaaS directory.

## Before you start
- A sellable digital product (file, course, licence key, membership). A SaaS signup link alone isn't a fit.
- A Gumroad account (email signup) with payout settings filled in.
- Discover eligibility is earned: at least $100 from genuine sales (no self-purchases), then a risk review that averages about 3 weeks. After that, a product appears on Discover once it has one non-refunded sale, a category and ratings turned on.
- Cover image and thumbnail.

## Field map (New product)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product type | Digital product, Course, E-book, Membership, Bundle, Service | match what the user sells |
| Name | text | `product.name` + what it is (e.g. "Notion CRM template") |
| Price | $0 to $5,000, "$5+" for pay what you want | from `product.pricing_details`; ask the user |
| Description | rich text, images, video embeds | `product.description_long` + `product.key_features` |
| URL slug | text | short product name |
| Cover / thumbnail | image | `assets.og_image` or `assets.screenshots[0]` |
| Summary / additional details | short text | `product.tagline` |
| Call to action | preset options | "I want this!" or closest |
| Content | files, pages, licence keys | the deliverable |
| Share tab: Category | dropdown | closest Discover category (Software Development, Design, Business & Money, etc.) |
| Share tab: Tags | free text | specific `product.tags` buyers would search |
| Ratings | toggle | on (required for Discover) |

## Steps
1. Manual. Don't create accounts or products for the user, and never make test purchases with real money.
2. Suggest it only if the user sells (or could give away) a digital product. A free lead magnet ($0 or "$0+") can live on Gumroad, but Discover needs paid sales first.
3. `launchkit mark gumroad-discover needs_human --note "needs digital product + $100 sales for Discover"`

## Make the listing perform
- Discover is driven by category and tags; specific tags ("cold email templates", "Figma UI kit") beat broad ones.
- Products on Discover are automatically in the Gumroad affiliate programme; keep that on, it brings extra promoters.
- Ratings show on cards, so email early buyers for a review.
- Build the first $100 from the user's own audience and launch posts; Discover only helps after that.

## Gotchas
- The 30% Discover fee applies only to buyers who came via Discover; direct traffic stays at 10% + $0.50.
- Removing the category takes the product off Discover.

## After submitting
- Check the product's Share tab for the Discover section and search `gumroad.com/discover` for it after the risk review clears.
