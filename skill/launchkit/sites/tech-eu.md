---
id: tech-eu
name: "Tech.eu"
url: https://tech.eu/startup-form/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: "no stated reply time"
verified: true
last_checked: 2026-10-12
---

# Tech.eu

European tech news site (owned by Webrazzi since 2021) covering funding rounds, exits and startup news across Europe, with a funding explorer and newsletters. It has a public "Pitch Your Startup" form, which is the right entry point for European startups.

## Before you start
- Best fit: `company.country` in Europe. Non-European startups can still submit (the country list is global), but coverage is about European tech.
- Have ready: `product.launch_date`, `company.funding_raised` (if any), a 3-5 sentence description.
- No account. Parts of tech.eu sit behind a Cloudflare check; if a challenge appears that isn't auto-passed, mark `needs_human`.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Email Address* | email | `founder.email` (a reporter may reply) |
| Startup Name | text | `product.name` |
| Country of the startup* | select | `company.country` |
| Web or Application Store URL | text | `product.url` |
| Can you briefly describe your startup?* | textarea | `product.description_medium`; add the news hook in the first sentence if there is one |
| Startup Launch Date | date | `product.launch_date` (or founding date from `company.founded_year`) |
| Did you get any investment? | textarea | `company.funding_stage` + `company.funding_raised` + investors if listed; otherwise "Bootstrapped" |

## Steps
1. Open https://tech.eu/startup-form/.
2. Fill the fields in order. Keep the description under 120 words, plain and factual.
3. `lk draft tech-eu -` with the filled values and mark `drafted`. Submit only if `pitch` mode is on and the user approved.
4. Click **Submit**, screenshot to `.launchkit/evidence/tech-eu.png`, then `lk mark tech-eu submitted --note "startup form"`.

## Make the listing perform
- Tech.eu mostly covers funding news. If the startup has raised, put the amount, round and lead investor in the first line of the description and in the investment field.
- For a real funding announcement, also email the news desk via the contact page (https://tech.eu/contact/, behind Cloudflare, address unconfirmed) under embargo; the form alone is slow.
- Don't send the same exclusive to Sifted and Tech.eu at once. Pick one for the exclusive and give the other the public announcement.

## Gotchas
- "Contribute" (guest writer) and "Advertise" are separate. Guest posts must not be promotional; paid placements are skipped with budget 0.
- The form has no file upload. Put `links.press_kit` in the description if needed.

## After submitting
- No confirmation email was observed in research (unconfirmed). Search https://tech.eu/news/ for the company name after a week.
