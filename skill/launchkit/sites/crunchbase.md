---
id: crunchbase
name: "Crunchbase"
url: https://www.crunchbase.com/add-new
category: Startup Database
mode: form
pricing: Free
login: "Crunchbase account (email, Google, or LinkedIn) plus social authentication"
captcha: "Cloudflare Turnstile on www.crunchbase.com"
backlink_required: no
review_time: "Profile goes live on save; moderation flags can edit or remove it later"
verified: false
last_checked: 2026-10-12
---

# Crunchbase

Company database read by investors, journalists, and sales teams. A complete, accurate profile matters more
than speed. The app itself (including /add-new) sat behind a Cloudflare Turnstile check during research, so the
form was not seen directly. Fields below come from the public Crunchbase Knowledge Center and are partly unconfirmed.

## Before you start
- Search Crunchbase for the company name and domain first. If a profile exists, edit it instead of creating a duplicate.
- The user must be logged in to a registered account that has connected Google or LinkedIn under
  Account Settings > Social Authentication. Registering with an email on the company domain helps with "Manage My Company".
- Cloudflare Turnstile appears on load. Do not solve it; if it blocks, mark `needs_human` with note "Cloudflare Turnstile".
- Have `assets.logo_square` ready (square PNG, at least 400x400 is a safe choice; exact limits unconfirmed).

## Field map
Order follows the Knowledge Center's "key items for a complete company profile". Exact labels are unconfirmed.
| Their field | Profile key / instruction |
|---|---|
| Profile type | Choose "Organization" / company |
| Name | `product.name` (use `company.legal_name` only if the company trades under it) |
| Logo | `assets.logo_square` |
| Founded date | `company.founded_year` |
| Website | `product.url` |
| Social links (LinkedIn, X, Facebook) | `links.linkedin`, `links.twitter`, other `links.*` if present |
| Short description | `product.description_short` (one plain sentence, no pricing or calls to action) |
| Full description | `product.description_medium` |
| Headquarters | `company.city`, `company.country` |
| Industries | 3 to 5 picks mapped from `product.categories` and `product.tags` |
| Founders | `founder.name`, link to the founder's person profile (create it if missing) |
| Employees / team size | `company.team_size` |
| Funding rounds | Only if `company.funding_raised` and `company.funding_stage` are set. Otherwise leave blank. |
| Contact email | `founder.email` or `submission.email` |

## Steps
1. Open https://www.crunchbase.com and log in. If Turnstile shows, stop and mark `needs_human`.
2. Search the product name and domain. If found, click Actions > Edit on that profile and skip to step 5.
3. Click Resources in the top navigation, then Create Profile.
4. Select the Organization profile type.
5. Fill each field from the map. Pick 3 to 5 industries.
6. Click Save All Edits in the upper right.
7. Optional: open the profile and use "Manage My Company" to request ownership with a company-domain email.

## Make the listing perform
- Crunchbase says complete profiles rank better in its search and improve CB Rank. Fill logo, founded date,
  description, HQ, 3 to 5 industries, founders, and socials. Empty fields cost visibility.
- Write the description as neutral fact. Their guidelines reject content used "as a marketing tool".
- Link founder person profiles. Investors browse by people, and linked founders make the company page richer.
- Add funding only from the profile. Unverifiable rounds get flagged by moderation.
- Revisit after launches or a raise and update headcount and funding.

## Gotchas
- Profiles are rarely deleted; mistakes get corrected, not removed. Get it right the first time.
- "Why was my company profile removed?" in their docs: fictitious or spammy profiles are taken down.
- Insights, predictions, CB Rank, and CB Trend are not editable.
- If the email domain does not match the website, ownership claims need support@crunchbase.com.

## After submitting
- Record the profile URL (crunchbase.com/organization/<slug>) with `launchkit mark crunchbase submitted --listing-url <url>`.
- Check a day later that edits held. Moderation can revert content that reads like marketing.
