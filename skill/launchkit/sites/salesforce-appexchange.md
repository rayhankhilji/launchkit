---
id: salesforce-appexchange
name: "Salesforce AppExchange"
url: https://partners.salesforce.com/
category: App Store / Marketplace
mode: manual
pricing: Paid
login: email           # Salesforce Partner Community login
captcha: unknown
backlink_required: no
review_time: "several weeks to months (business approval + security review)"
verified: true
last_checked: 2026-10-12
---

# Salesforce AppExchange (AgentExchange)

Salesforce's marketplace for apps, agents and consultants. appexchange.salesforce.com now redirects to "AgentExchange (formerly AppExchange)". Only relevant for B2B products that integrate with Salesforce and sell to Salesforce customers. It is a partner program with contracts and a security review, not a quick listing.

## Before you start
- Decide with the user: this is a business commitment. It needs a Salesforce integration (managed package, connected app or API-only integration) and someone to own the partnership.
- Process from the partner site: join the Partner Community, build the product, submit for business approval, sign the partner agreement for the distribution model, pass the security review, then publish the listing.
- Costs: paid apps go through a fee-based security review and a revenue share under the partner agreement. Exact current amounts are behind the partner login and weren't confirmed. Ask the user to check in the Partner Community before committing.
- Assets: logo, screenshots, demo video, data sheets and case studies, plus privacy policy and support details.

## Field map (listing in the Partner Console, unconfirmed behind login)

| Field | Limit / format | Fill with |
|---|---|---|
| Listing title | text | `product.name` |
| Tagline / brief description | short text | `product.tagline` |
| Full description | long text | `product.description_long` |
| Highlights | 3 bullets | top 3 of `product.key_features` |
| Categories / industries | dropdowns | map `product.categories` and `product.target_audience` |
| Pricing | free / paid / per user | map `product.pricing_model` and `product.pricing_details` |
| Logo, screenshots, video | images / YouTube | `assets.logo_square`, `assets.screenshots`, `links.demo_video` |
| Support, privacy, website | URL / email | `founder.email`, privacy URL, `product.url` |
| Company info | text | `company.*` |

## Steps
1. Manual mode. Never sign up, sign agreements or pay. Only mention it if the product integrates with Salesforce or the user sells into Salesforce shops.
2. If the user wants to pursue it: point them to partners.salesforce.com, have them join the Partner Community and read the ISV onboarding and security review guides.
3. Draft listing copy for them once the security review is underway.
4. `launchkit mark salesforce-appexchange needs_human --note "partner program + security review, business decision"`

## Make the listing perform
- Customer reviews on the listing drive ranking and trust. Ask existing Salesforce-using customers for reviews right after launch.
- Free trials (Trialforce or test drive) get far more leads than "contact us" listings.
- Lead with the Salesforce object or workflow you touch ("Syncs Stripe invoices to Opportunities") rather than general claims.

## Gotchas
- The security review fails on common web issues (missing CSP, outdated libraries, insecure endpoints). Have the user scan before submitting.
- Budget weeks for business approval and the review queue.

## After submitting
- Leads arrive in the partner org; respond fast since leads cool quickly.
