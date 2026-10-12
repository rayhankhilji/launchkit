---
id: codehype
name: "CodeHype"
url: https://www.codehype.ai/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: optional
review_time: "about 24 hours (human review); free launch joins a 14-day queue"
verified: true
last_checked: 2026-10-12
---

# CodeHype

Launch platform for AI products people can try (AI tools, agents, copilots, AI APIs, AI startups with a working product). Every launch is reviewed by a human. Not a fit for non-AI products, waitlists or pitch decks.

## Before you start
- Fit check (https://www.codehype.ai/guidelines): if the product isn't AI or has no working product, mark `skipped`.
- Plans (https://www.codehype.ai/pricing): **Free $0**: standard queue (14 days), public page with a dofollow link **while their badge stays on your site**. **Plus $15** one-time: pick any date in the next 90 days, no badge, permanent dofollow. **Pro $25**: Plus plus 7 days on the homepage and a blog post.
- A free account is needed to upload media and launch. You can fill the form first; it keeps details while you sign in.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website URL (Fill with AI) | URL | `product.url`, then click **Fill with AI** and overwrite its guesses |
| Product name * | 30 chars | `product.name` |
| Tagline * | 140 chars | `product.tagline` |
| Description | 10,000 chars | `product.description_long` |
| Website URL * | URL, HTTPS | `product.url` |
| Category * | one of about 60 (AI, AI Agents, Coding, Developer Tools, SaaS...) | most specific match to `product.categories[0]` |
| Tags | up to 3, 32 chars each | top 3 of `product.tags` |
| Pricing Model * | Free / Freemium / Paid / Lifetime Deal | map `product.pricing_model` |
| Product logo * | square image | `assets.logo_square` |
| Screenshots / Gallery | up to 5 | `assets.screenshots` |
| Target Audience | text | `product.target_audience` |
| Problem It Solves | text | first use case from `product.use_cases` |
| Your Solution | text | `product.description_short` |
| What Makes It Unique | text | contrast with `product.competitors_alternatives`, facts only |
| Platforms | multi-select | `product.platforms` |
| Tech Stack | up to 12, 40 chars | ask the user or leave empty |
| X, GitHub, Product Hunt, Discord, LinkedIn, store links | URLs | `links.twitter`, `links.github`, `links.discord`, `links.linkedin`. Add PH and store links if they exist |
| Launch plan | Free / Plus / Pro | **Free** unless approved |

## Steps
1. Search codehype.ai for `product.name`. If listed, mark `live`.
2. Open https://www.codehype.ai/submit, paste the URL, run **Fill with AI**, then overwrite every field from the profile.
3. Fill the optional sections too (they feed the product page). Sign in when prompted.
4. Pick Free Launch, submit, screenshot. Copy the badge code for the user if they agree.
5. `launchkit mark codehype submitted --note "free 14-day queue; badge keeps dofollow"`.

## Make the listing perform
- The guidelines want what it does obvious in one sentence: tagline = verb + object + for whom.
- Fill Problem / Solution / Unique: they become extra indexed content on the page.
- Ask the user's own community to upvote. Bought votes lead to removal.

## Gotchas
- Rejections or change requests show in /my-launches with a reason. Fix and resubmit.

## After submitting
- Check /my-launches after a day for approval.
