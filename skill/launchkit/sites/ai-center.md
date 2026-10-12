---
id: ai-center
name: "AI Center"
url: https://aicenter.ai/submit-tools
category: AI Directory
mode: form
pricing: Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "3 business days (Basic), 24h (Standard), 2h (Premium)"
verified: true
last_checked: 2026-10-12
---

# AI Center

An AI tools directory (aicenter.ai, claims 50K+ monthly visitors) with a long, detailed submit form. All tiers are paid one-time fees. The cheapest is $15.

## Before you start
- Tiers on 2026-10-12:
  - Basic: $15, listed, reviewed within 3 business days, permanent once approved.
  - Standard: $45, 24-hour approval, 3-day homepage feature, newsletter mention.
  - Premium: $65, 2-hour approval, 7-day homepage feature.
- Payment is `needs_human`. Ask which tier, if any.
- Prepare `product.description_medium` (50-1,000 chars) and a feature list from `product.key_features` and `product.use_cases` (100-3,000 chars, Markdown OK).
- Sign-in (https://aicenter.ai/login) is Google only and is for saving tools and reviews. Unclear if the submit flow needs it.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your Name | max 20 chars | `founder.name`, first name only if too long |
| Your Email | email | `submission.email` |
| AI Tool Name | max 50 chars | `product.name` |
| Tool URL | URL | `product.url` |
| Overview Description | 50-1,000 chars | `product.description_medium` |
| Key Features & Use Cases | 100-3,000 chars, Markdown | bullet list of `product.key_features`, then `product.use_cases` |
| Pricing Model | select | free -> Free, freemium -> Freemium, paid -> Paid, trial (`product.free_trial` true) -> Free Trial, enterprise or quote -> Contact for Pricing |
| Platform | multi-select | from `product.platforms`: Web, iOS, Android, API, Windows, Mac, Linux, Browser Extension, Discord Bot |
| Category | select | Academics, Audio, Coding, Copywriting, For Fun, Image, Marketing and Ecommerce, Media and Entertainment, Others, Productivity, Prompt, Video. Map `product.categories[0]` |
| Tags | up to 5 | closest of their tags (code-assistant, developer-tools, email-assistant, customer-support, image-generator...) to `product.tags` |
| Logo | upload or URL, optional | `assets.logo_square` |
| Screenshot | upload or URL, optional | `assets.screenshots[0]` |
| YouTube video | URL, optional | `links.demo_video` if YouTube |
| Twitter/X, LinkedIn, GitHub, Discord, YouTube, Product Hunt, Facebook, Instagram | URLs, optional | matching `links.*` |
| Resource links (up to 3) | type + URL | `links.docs`, `links.pricing_page`, `links.changelog` |
| Blog post link | URL, optional | skip unless the user has a launch post |
| Tier | radio | Basic unless the user chose otherwise |

## Steps
1. Open https://aicenter.ai/submit-tools. Fill fields top to bottom using the map.
2. Check the length counters on Name (20) and Tool Name (50).
3. Pick the tier and continue. Stop at payment and hand off to the user.
4. Screenshot to `.launchkit/evidence/ai-center.png`. `launchkit mark ai-center needs_human --note "tier chosen, payment pending"`

## Make the listing perform
- Fill every optional field. The listing page shows features, platforms, socials and resources, and fuller pages look more trustworthy.
- Use all 5 tags. They create the tag pages people browse.
- Homepage features only come with Standard or Premium. Basic is fine for an SEO page.

## Gotchas
- Our data called this Free/Paid. No free tier was shown on 2026-10-12.
- Key Features under 100 chars is rejected by the form.

## After submitting
- Look up the tool on https://aicenter.ai/tools after the review window.
