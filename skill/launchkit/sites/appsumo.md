---
id: appsumo
name: "AppSumo"
url: https://partners.appsumo.com/self-submission
category: Deals / LTD
mode: form
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "weeks (application review, then deal prep with their team)"
verified: true
last_checked: 2026-10-12
---

# AppSumo

Lifetime-deal marketplace that emails deals to 1.5M+ subscribers and runs paid ads (up to $25K) for top performers. No upfront fee was shown; deal economics are agreed with their team. Their FAQ says about 10% of applicants are accepted (the quality page says less than 3%), so treat this as an application, not a directory listing.

## Before you start
- This is a business decision. Mark `needs_human` ("requires deal terms decision") unless `product.deal_or_promo_code` is set and the user opted in to LTDs.
- Fit check from their quality standards: working product (no AI wrappers, early-stage tools or vibe-coded MVPs), active development, a named founder they can ID-verify, a stable company, and an audience of entrepreneurs, marketers, creators, agencies or small businesses. If the product is consumer-only or pre-launch, mark `skipped` ("not a fit").
- Decide with the user: Codes or Licensing model, tiers, entry price (AppSumo recommends a first tier at $49 or less), refund exposure (60-day refund window), and who handles support.
- Assets: square icon (512x512 PNG), horizontal logo (at least 112px wide, 225px+ transparent PNG recommended), hero image (960x540 minimum, 16:9, real UI), 4 feature screenshots at the same spec.
- Company facts are required: founding date (full day), HQ city, team size, stage, funding. Never guess these.
- The portal publishes a field-by-field brief at https://partners.appsumo.com/docs/listing-brief.md. Read it for the current limits.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | 3-50 chars | `product.name` |
| Category (+ subcategory) | searchable list | closest match to `product.categories[0]` |
| Tagline | 3-100 chars, SEO line | `product.tagline`, search keyword first |
| Unique selling proposition | 15-40 chars | shortest true version of `product.tagline_short` |
| Intro sentence | up to 205 chars | pain then fix, from `product.description_short` |
| TL;DR | exactly 2 bullets, 128 chars each | two items from `product.key_features` |
| Alternative to | up to 3, from list | `product.competitors_alternatives` |
| Integrations | up to 5, optional | only integrations named in the profile |
| Best for | up to 3, from list | from `product.target_audience` |
| Icon / Logo | PNG/JPG under 5MB | `assets.logo_square` / `assets.logo_wide` |
| Hero image + 4 screenshots | 960x540+, alt text 255 chars | `assets.screenshots` (real UI only) |
| Highlighted features | 2-4 stories, title 100 chars, 2-5 bullets of 500 chars | `product.key_features`, `product.use_cases` |
| Pricing model / tiers / prices | Codes or Licensing, 1-10 tiers, $1-$9,999 | user's decision only |
| Feature matrix | 4-25 rows, label 128 chars | user's tier limits |
| Redemption | codes CSV or webhook + OAuth redirect URL | user supplies, never invent |
| Founder post headline / narrative | 64 chars / 2+ paragraphs | `copy.launch_post_story`, first person |
| Name, role, LinkedIn | text | `founder.name`, `founder.role`, `founder.linkedin` |
| Founded, HQ, team size, stage, funding | date / list / dropdowns | `company.founded_year` (ask for full date), `company.city`, `company.team_size`, `company.funding_stage` |
| Trust signals (Stripe ARR, G2, Capterra) | URLs | user pastes; skip |
| FAQ | 1+ pairs, 6-8 recommended | `copy.faq`, rewritten for LTD buyers |

## Steps
1. Open https://sell.appsumo.com/ and click **Apply to launch** (goes to https://partners.appsumo.com/self-submission). Create the partner account with `submission.email` only if `submission.allow_account_creation` is true.
2. Start a listing from `product.url`. The portal scans the site and pre-fills; check every pre-filled field against the profile.
3. Fill Basic information, Media, Highlighted features, Product story and FAQ from the field map. Leave Pricing, Redemption and Trust signals for the user.
4. Save the draft. Do not click submit for review. Screenshot the draft to `.launchkit/evidence/appsumo.png`.
5. `launchkit mark appsumo needs_human --note "Draft saved. User must set pricing, redemption and submit for review"`.

## Make the listing perform
- Entry tier at $49 or less converts best and raises acceptance odds. Limit by seats or usage, not by core features.
- Lead the tagline with the search term buyers use ("Client retainer tracking for agencies"), not a slogan.
- Copy must not mention monthly pricing, trials or a free tier. Pricing lives only in the Pricing section.
- Sumo-lings are vocal in reviews and Q&A. The founder should answer questions daily in the first two weeks; review score drives whether AppSumo adds email and paid-ad support.

## Gotchas
- No em dashes, emoji, or exclamation marks in their copy rules.
- Codes cannot be changed once live. The CSV's first line is skipped as a header.
- Returning partners are judged on refund rates of their last campaign.

## After submitting
- Status shows in the partner portal. Accepted products move to deal prep with an account manager; campaigns usually run about 60 days.
