---
id: rapidapi-hub
name: "RapidAPI Hub"
url: https://rapidapi.com/studio
category: Dev / Open Source
mode: form
pricing: Free
login: email
captcha: none
backlink_required: no
review_time: "instant when set to public"
verified: true
last_checked: 2026-10-12
---

# RapidAPI Hub

An API marketplace where developers find, test and subscribe to APIs with one key. You add the API in Rapid Studio, set pricing plans, and make it public. Listing is free; Rapid takes a flat 25% marketplace fee on paid subscriptions (PayPal payout fees extra).

## Before you start
- Only for products with a public HTTP API. Otherwise mark `skipped` with "no public API".
- The user needs a Rapid account (login wall). Don't create one; mark `needs_human` if they don't have one, or have them log in and then fill the forms.
- Have ready: OpenAPI spec (optional but faster), base URL, a health check endpoint, terms of use URL, logo.
- Requests go through Rapid's proxy, so the API should check the `X-RapidAPI-Proxy-Secret` header.

## Field map (Studio > My APIs > Add API, then Hub Listing > General)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| API name | text | `product.name` (add "API" if the product name is generic) |
| Short description | text | `product.tagline` |
| Category | one category | closest Rapid category to `product.categories[0]` (e.g. Data, Tools, AI, Communication, Finance) |
| Specify using | choice | upload OpenAPI file if available, else define manually |
| Logo | JPEG or PNG, max 500x500 | `assets.logo_square` |
| Long description | Markdown | `product.description_long` with auth notes |
| Website | URL | `product.url` |
| Terms of use | URL | `links.terms` |
| Visibility | Private / Public | **Public** (default is private) |
| Tags | list | `product.tags` |
| Base URL(s) | URL | the API base URL |
| Health check | URL | the API's health endpoint |
| Monetize > plans | Basic / Pro / Ultra / Mega | at least a free **Basic** plan with a request quota, then paid plans from `product.pricing_details` |

## Steps
1. With the user logged in, open https://rapidapi.com/studio and click **Add API Project**.
2. Fill name, short description and category, choose OpenAPI upload or manual, click **Add API Project**.
3. In **Hub Listing > General** fill logo, long description, website, terms, tags, base URL and health check, then **Save**.
4. In **Monetize**, add a free Basic plan. Don't set up payouts or enter bank details; that's for the user.
5. Switch visibility to **Public** and confirm. Screenshot to `.launchkit/evidence/rapidapi-hub.png`.
6. `launchkit mark rapidapi-hub submitted --listing-url <hub url>`.

## Make the listing perform
- Hub search favors APIs with a free plan, good endpoint docs and example responses. Add examples for every endpoint.
- Popularity, latency and service level scores show on the card. Keep the health check green.
- Write the long description for a developer evaluating it in 30 seconds: what data it returns, limits, one code sample.

## Gotchas
- A new API is private until you change visibility.
- 25% fee comes off paid plans; price paid tiers with that in mind.

## After submitting
- Reply to questions in the API's Discussions tab and track subscribers in Studio analytics.
