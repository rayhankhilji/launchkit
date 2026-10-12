---
id: saashub
name: "SaaSHub"
url: https://www.saashub.com/services/submit
category: Software Review Site
mode: form
pricing: Free/Paid
login: email            # Register | Login in the header; account needed to submit
captcha: none
backlink_required: no
review_time: "days to weeks; faster if verified and competitors are listed"
verified: true
last_checked: 2026-10-12
---

# SaaSHub

Independent software marketplace built around "alternatives" and "X vs Y" pages, about 564k page views a month. Free listing; the paid featured listing is $99/month. Worth it for any shipped SaaS or app.

## Before you start
- The product must be released, in English, and on its own domain. SaaSHub rejects waitlist pages, unreleased products, software agencies and free subdomains (e.g. `app.vercel.app`).
- `product.competitors_alternatives` with 3+ names. Without competitors the submission goes to the bottom of the queue.
- An email on the product's domain to verify the product (higher priority). If `submission.email` is a gmail-type address, ask the user for a domain address.
- Account: register at saashub.com (email). Submissions by email are not accepted.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website URL (step 1) | URL | `product.url` (no ref params) |
| Name | text | `product.name` |
| Tagline | short line | `product.tagline` |
| Description | text | `product.description_medium` |
| Categories | chips | 2-4 from `product.categories`; copy the categories competitors use on SaaSHub |
| Competitors / alternatives | search chips | every item in `product.competitors_alternatives` that exists on SaaSHub |
| Pricing | select | `product.pricing_model`: free -> Free, freemium -> Freemium, paid -> Paid; trial from `product.free_trial` |
| Platforms | checkboxes | `product.platforms` |
| Logo | image | `assets.logo_square` |
| Verification | domain email | `submission.email` if on the product domain |

Only the URL box was visible before login (checked live); the later fields are from the submission advice on the page and are unconfirmed.

## Steps
1. Search saashub.com for `product.name`. If listed, `launchkit mark saashub live --listing-url <url>` and stop.
2. Log in or register, then open https://www.saashub.com/services/submit.
3. Enter `product.url`, click submit, then fill the details form from the map.
4. Add categories and competitors before saving. Start the product verification with the domain email.
5. Screenshot to `.launchkit/evidence/saashub.png`. `launchkit mark saashub submitted --note "pending approval"`

## Make the listing perform
- Competitors are the traffic source: your product appears on their alternatives pages. List the ones your users really compare you with.
- Verified products get approval priority and a "verified" badge you can embed.
- The weekly newsletter ships Thursdays ~13:42 San Francisco time and features trending products; recent upvotes and activity help.
- Skip "Feature my product" ($99/month, Stripe) unless the budget allows it.

## Gotchas
- Approved products can still be removed later if they break the rules.
- https://www.saashub.com/submit is their list of other directories, not the submit form.

## After submitting
- Find it at `https://www.saashub.com/<slug>`. Fill missing screenshots and links in the product management page once approved.
