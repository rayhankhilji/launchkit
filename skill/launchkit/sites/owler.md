---
id: owler
name: "Owler"
url: https://www.owler.com/owler-community
category: Startup Database
mode: form
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "instant, then community and staff review"
verified: true
last_checked: 2026-10-12
---

# Owler

Owler (now part of Meltwater) is a company-intel database of 20M+ profiles used by sales and marketing teams to track competitors. There is no "add your company" form. Profiles are edited by the community, like a wiki, and nobody owns a profile. Worth 10 minutes if a profile for the user's company already exists or once one appears.

## Before you start
- Needs a free Owler Community account (sign-up at https://www.owler.com/owler-community, "Get Instant Access", no card). Use `submission.email`. Ask the user before creating it if `submission.allow_account_creation` is false.
- Have `company.*` facts ready: `company.legal_name`, `company.founded_year`, `company.city`, `company.country`, `company.team_size`. Revenue is optional and should only be entered if the user gave a number.
- A public source (press release, launch post, LinkedIn page) helps: Owler weights edits that come with a source.

## Field map
The edit form sits behind login, so the exact field order is unconfirmed. Owler's support article says you can update "all the fields of data we have about a company", which on public profiles are:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Company name | text | `product.name` (or `company.legal_name` if the user prefers it) |
| Website | URL | `product.url` |
| Description | free text | `product.description_medium` |
| Founded | year | `company.founded_year` |
| Headquarters | city, country | `company.city`, `company.country` |
| Employees | number / range | `company.team_size` |
| Revenue | estimate | leave blank unless the profile has a figure |
| Funding | amount | `company.funding_raised` only if set |
| CEO / founder | name | `founder.name` with `founder.role` |
| Industry / sector | select | closest match to `product.categories[0]`, e.g. "SaaS", "Application Software", "Analytics" |
| Competitors | company search | `product.competitors_alternatives` that already have Owler profiles |
| Social links | URLs | `links.linkedin`, `links.twitter` |
| Blog / RSS | URL | the user's blog or changelog feed, if any (`links.changelog`) |

## Steps
1. Open https://www.owler.com/ and search `product.name` and the domain from `product.url`.
2. If no profile exists: Owler shows no add-company page (`/add-company` returns "page not found"). Mark `needs_human` with "Owler has no add form; profile appears once Owler picks the company up, or ask support via https://owlerinc.happyfox.com/new/". Stop.
3. If a profile exists: sign in (or create the free Community account), open the profile, click **Update this Profile** (top right).
4. Fill each field from the map. Paste a source URL in any "source" box offered.
5. Save. Most changes show immediately on refresh. Screenshot the updated profile to `.launchkit/evidence/owler.png`.
6. `launchkit mark owler live --listing-url <profile url>` (or `submitted` if the edit is pending).

## Make the listing perform
- Add 3-5 real competitors that already have Owler profiles. Owler's competitor graph is how most people land on a small company's page.
- Submit the company blog or changelog feed (Owler KB: "How do I submit my blog?") so new posts show in the profile news feed and in followers' daily snapshot emails.
- Keep employee count and founding year identical to LinkedIn and Crunchbase. Owler averages community estimates, so a sourced, consistent figure moves the number.

## Gotchas
- Revenue and employee counts are aggregates of member estimates; one edit may only nudge them. Attach a source.
- The description field is known to lag (KB: "Why is my company description not updating?"). Recheck after a day before editing again.
- Abusive or promotional edits get reverted and the account blocked. Keep copy factual, no marketing claims.
- Owler Pro / Max checkout pages appear in the nav. They are not needed for editing.

## After submitting
- Revisit the profile after 24-48 hours to confirm edits stuck.
- Data-quality issues the editor can't fix go to support tickets at https://owlerinc.happyfox.com/new/.
