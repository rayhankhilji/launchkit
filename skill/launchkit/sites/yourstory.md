---
id: yourstory
name: "YourStory"
url: https://docs.google.com/forms/d/e/1FAIpQLSetnejE9KBrZoqrnqR3Ts4Pd3eN3MjB-honhmImL59HPu14Eg/viewform
category: Press / Media
mode: pitch
pricing: Free
login: google
captcha: none
backlink_required: no
review_time: "unknown"
verified: true
last_checked: 2026-10-12
---

# YourStory

India's largest startup media platform (founded 2008), with brands like The CapTable, AI Story, SMB Story and HerStory, plus a company database. The free entry point found is "List Your Company" on https://yourstory.com/companies, which opens a Google Form. Best for startups based in or selling to India.

## Before you start
- Fit check: `company.country` = India or a real India market story. Otherwise mark `skipped` ("not India").
- The Google Form requires signing in to a Google account (it redirected to Google sign-in during research, so the fields were not viewed). If `submission.preferred_login` is not google or the user isn't signed in, mark `needs_human`.
- No public editorial email or tips form was found on the site (yourstory.com/contact blocks bots, unconfirmed).

## Field map

The form fields could not be viewed without sign-in. Expect a company-database form; map typical fields like this:

| Likely field | Fill with |
|---|---|
| Company / startup name | `product.name` |
| Website | `product.url` |
| Founder name, email, phone | `founder.name`, `founder.email` (ask before giving a phone number) |
| City, founded year | `company.city`, `company.founded_year` |
| Sector / industry | closest to `product.categories[0]` |
| Funding stage / amount | `company.funding_stage`, `company.funding_raised` (leave blank if not in the profile) |
| Description | `product.description_medium` |
| Logo | `assets.logo_square` (Google Forms upload also needs sign-in) |

## Steps
1. Open https://yourstory.com/companies and click **List Your Company** (or open the form URL above).
2. Sign in with the user's Google account if already signed in; otherwise mark `needs_human`.
3. Fill the fields from the profile; don't guess missing facts.
4. Submit only with approval, screenshot to `.launchkit/evidence/yourstory.png`, `lk mark yourstory submitted --note "company DB form"`.

## Make the listing perform
- Editorial coverage at YourStory leans on founder stories: why the founder started, the struggle, the turning point. Put that in the description if there's a free-text field.
- Pick the sub-brand that fits: AI Story for AI products, SMB Story for small business tools, HerStory for women founders. Mention it in any free-text field.
- "Pitch To Us" (PitchFest) links to a separate events site with past events listed; it's a pitch competition, not a news pitch. Check for open events only if the user wants investor exposure.

## Gotchas
- Pages are behind bot protection, so load them in the real browser, not with a fetch.
- Sponsored content and brand partnerships exist; skip anything paid with budget 0.

## After submitting
- Search https://yourstory.com/companies/search for the company name after a couple of weeks.
