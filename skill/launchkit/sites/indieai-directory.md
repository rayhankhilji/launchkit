---
id: indieai-directory
name: "IndieAI Directory"
url: https://indieai.directory/submit?plan=free
category: AI Directory
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: yes
review_time: "up to 30 days (free)"
verified: true
last_checked: 2026-10-12
---

# IndieAI Directory

An AI directory only for tools built by indie developers, small teams and solo founders. It has monthly traffic rankings, a "trending" list and SEO guides, and adds about 30-40 tools a month. Free listings need a badge on the user's site that stays there.

## Before you start
- Fit: the product must be AI-powered, live, and built by an indie or small team. If `company.team_size` is large or the company is funded past seed, mention that it may be rejected.
- Login: **Sign in with Google** only.
- Free plan: badge verification required, reviewed within 30 days, and "Keep badge permanently - check regularly & unpublish if removed". Ask the user before adding the badge (`launch_settings.add_badge_to_site`).
- Paid: Fast Track $19 (instant, no backlink), Premium $39 (+7 days homepage), Unlimited $69 (+top banner, site-wide 7 days, blog post). Skip at budget 0.
- Assets: `assets.logo_square` and a screenshot or cover image (they ask for one "when possible").

## Field map

The form appears only after Google sign-in and was not seen. From their acceptance notes they want an accurate summary, a category and a screenshot or cover. Expected fields, unconfirmed:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Summary / tagline | short text | `product.tagline` |
| Description | text | `product.description_medium` |
| Category | select | closest to `product.categories[0]` |
| Pricing | select | `product.pricing_model` |
| Logo | image | `assets.logo_square` |
| Screenshot / cover | image | `assets.screenshots[0]` |
| Badge page URL | URL | page on the user's site with the IndieAI badge |

## Steps
1. Search the site for `product.name`. If listed, mark `live` and stop.
2. Open https://indieai.directory/submit?plan=free, click **Sign in with Google**.
3. Copy the badge embed code the form shows and add it to the user's site (only with approval). Note the page URL.
4. Fill the form, keep the Free plan, submit. Screenshot to `.launchkit/evidence/indieai-directory.png`.
5. `launchkit mark indieai-directory submitted --note "free, badge on <page>, review up to 30 days"`

## Make the listing perform
- Their own advice: make sure the site "explains what the product does on the first screen". Reviewers open the URL; a vague hero gets rejected or delayed.
- Approved tools can appear in category pages, search results and their topic guides (e.g. "Free AI Tools Built by Indie Developers", "SEO Tools for Indie Hackers"). Pick the category that matches one of those guides if it is honest.
- The monthly traffic ranking uses the tool's own traffic. Launch-week traffic from other channels can put it on the "Trending" page.

## Gotchas
- They check the badge regularly and unpublish if it's removed. Tell the user.

## After submitting
- Check back within 30 days. When live, mark `live` with the listing URL.
