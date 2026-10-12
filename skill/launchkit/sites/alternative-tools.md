---
id: alternative-tools
name: "Alternative.tools"
url: https://alternative.tools/submit
category: Software Review Site
mode: form
pricing: Free/Paid
login: unknown
captcha: none
backlink_required: yes   # free tier only; the badge must stay up permanently
review_time: "up to 2 weeks (free); instant (paid)"
verified: true
last_checked: 2026-10-12
---

# Alternative.tools

Indie tools-and-alternatives directory that sells dofollow backlinks. The free tier is gated: your site needs Ahrefs Domain Rating 25+, 1,000+ monthly visitors, and a permanent "Featured on" badge. New launches usually don't qualify.

## Before you start
- Check `launch_settings.add_badge_to_site`. If it's "no", the free tier is out; mark `skipped` with "free tier needs badge" (unless budget allows paid).
- Plans (one-time, paid via Creem): Free $0 (1 dofollow link, AI-written ~1,000 char listing, 2-week review, badge required); Premium $19 (3 links, instant, no badge); Review Article $49 (4 links plus a ~10,000 char AI review post).
- With `budget_usd` 0, only the free tier is allowed.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Plan | Free / Premium / Review Article | Free unless the user approved a paid plan |
| Your website URL ("Check eligibility") | URL | `product.url` |
| Later steps (after eligibility passes) | unconfirmed | name `product.name`, tagline `product.tagline`, category `product.categories[0]`, logo `assets.logo_square`, email `submission.email` |

The listing description is written by their AI from your site, so there's no long description box on the free plan (per the pricing page).

## Steps
1. Open https://alternative.tools/submit, click **Get Free Listing**.
2. Enter `product.url` and click **Check eligibility**.
3. If it fails the DR 25 check, stop: `launchkit mark alternative-tools skipped --note "free tier needs DR 25+; Premium is $19"`. Don't click the LaunchDirectories affiliate offer.
4. If it passes, ask the user to approve adding the badge (if `add_badge_to_site` is "ask"), fill the next screen, submit.
5. Screenshot to `.launchkit/evidence/alternative-tools.png`. `launchkit mark alternative-tools submitted --note "free, up to 2 weeks, badge required"`

## Make the listing perform
- Their pages target "X alternatives" searches. Make sure your site's meta description and homepage say clearly what you replace, since the AI copy is built from it.
- Pick the most specific category (AI Tools, SaaS, Developer Tools, Marketing, SEO, No-Code are the top ones).

## Gotchas
- Removing the badge later means instant delisting.
- Free submissions are not guaranteed; "not every submission is approved".
- No customer support on the free tier.

## After submitting
- Search alternative.tools after 2 weeks. If live, `launchkit mark alternative-tools live --listing-url <url>`.
