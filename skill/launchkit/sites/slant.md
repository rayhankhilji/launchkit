---
id: slant
name: "Slant"
url: https://www.slant.co/
category: Software Review Site
mode: form
pricing: Free
login: unknown
captcha: unknown
backlink_required: no
review_time: unknown
verified: false
last_checked: ""
---

# Slant

**Not reachable in October 2026.** slant.co returned a Cloudflare error 526 (invalid SSL at the origin) on every visit. Treat it as down until it loads again. When it worked, Slant was a community-ranked "What are the best X?" site where anyone with an account could add a product as an option to a question and others voted with pros and cons.

## Before you start
- Open https://www.slant.co/ once. If it still errors, mark `skipped` with note "site down (526)".
- If it loads: you need an account (it used email, Google and other social logins). Only proceed if `submission.allow_account_creation` is true.

## Field map (from the archived site, unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Question to add to | search | find 1-3 existing "What are the best <category> ..." questions matching `product.categories` |
| Option name | text | `product.name` |
| Website | URL | `product.url` |
| Short description | text | `product.description_short` |
| Pros | each pro is a title + explanation | one from each of `product.key_features`, stated as a fact |
| Cons | optional | leave for the community |
| Pricing / platforms | tags | `product.pricing_model`, `product.platforms` |

## Steps
1. Check the site loads. If not, mark `skipped` and stop.
2. Search for the matching question. Click **Add an option** on that question.
3. Fill per the map and save. Screenshot to `.launchkit/evidence/slant.png`.
4. `launchkit mark slant submitted --note "<question url>"`

## Make the listing perform
- Ranking is votes on options and on pros. Don't vote on your own option and don't ask people to. Factual pros with specifics survive moderation; marketing copy gets edited out.

## Gotchas
- It's a community site: disclose the founder connection if the site asks, and don't post the same option on unrelated questions.

## After submitting
- Re-check the question page later for edits or flags.
