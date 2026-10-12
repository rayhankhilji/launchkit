---
id: atlassian-marketplace
name: "Atlassian Marketplace"
url: https://developer.atlassian.com/platform/marketplace/
category: App Store / Marketplace
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "5-10 business days to start review, 10-15 to approve"
verified: true
last_checked: 2026-10-12
---

# Atlassian Marketplace

Store for apps that extend Jira, Confluence, Jira Service Management, Bitbucket and other Atlassian products. Listing is free. Only relevant if the user has built (or will build) a Forge or Connect app for an Atlassian product.

## Before you start
- A working Forge app (Connect is legacy) installed in a developer site. Paid apps need the Atlassian licensing API.
- An Atlassian account with two-step verification, then a Marketplace Partner profile (company name, logo, contacts) and acceptance of the Marketplace Partner Agreement. Paid apps also need bank and tax details and may face business identity verification.
- Privacy and security tab answers, a support channel, and reviewer access to a test site.
- Assets: 144x144 logo, 1120x548 banner, 3 highlight screenshots at 1840x900 (or 920x450) each with a cropped 580x330 version, optional YouTube video under 30 seconds.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| App name | 60 chars, Title Case | `product.name` + " for Jira" (never "Jira X") |
| Tagline | 130 chars | `product.tagline` reworded for the Atlassian use case |
| Summary | 250 chars, plain text | `product.description_short` focused on the integration |
| Logo | 144x144 PNG | `assets.logo_square`, no Atlassian marks |
| Banner | 1120x548 | app name, partner name, one line of function |
| Highlights (exactly 3) | title 50, summary 220, screenshot + caption 220 | top 3 of `product.key_features`, each with a real screenshot |
| More details | long text | `product.description_long` |
| Video | YouTube URL | `links.demo_video` if it shows the app inside Jira/Confluence |
| Categories | Marketplace categories | closest to `product.categories` |
| Pricing | free / paid via Atlassian | free -> Free; paid/freemium -> paid via Atlassian (licensing required) |
| Documentation / support URLs | URL | `links.docs`, support page |
| Release summary | 80 chars | first release note |

## Steps
1. Manual. Don't create a partner account or submit.
2. In the wrap-up, suggest it only if the product integrates with Atlassian tools (look for Jira, Confluence or Bitbucket in `product.tags` or `key_features`).
3. Offer to draft name, tagline, summary, highlights and captions using the limits above.
4. `launchkit mark atlassian-marketplace needs_human --note "needs Forge app + partner profile"`

## Make the listing perform
- Atlassian's own listing principles: exactly 3 benefit-led highlights, a short video that shows the app solving a real problem, consistent visuals, natural keywords in name, tagline and summary.
- Don't repeat "Jira" or "Confluence" for search; it reads as stuffing and gets pushed back.
- Write about the integration, not the user's whole product.
- Free apps get installs fast; "Cloud Fortified" and the Partner Program levels add trust later.

## Gotchas
- You can't edit the listing while it is in review.
- Atlassian logos, product names or fonts in the app logo get rejected.

## After submitting
- Track the technical review in the partner portal and answer reviewer questions quickly. After approval, check the listing page and respond to customer reviews.
