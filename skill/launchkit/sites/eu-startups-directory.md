---
id: eu-startups-directory
name: "EU-Startups Directory"
url: https://www.eu-startups.com/directory/?wpbdp_view=submit_listing
category: Startup Database
mode: form
pricing: "Free (only the Free Listing plan was offered)"
login: "none required on the form seen; site may ask for a WordPress login"
captcha: "Cloudflare checks on some requests"
backlink_required: no
review_time: "unknown; listings are moderated before going live"
verified: true
last_checked: 2026-10-12
---

# EU-Startups Directory

European startup database run by the EU-Startups news site. The add listing form is a three step WordPress
Business Directory flow: category selection, listing information, listing images. Category means country.

## Before you start
- Fit: startups based in Europe. Skip for companies with no European base.
- Image: one image, width and height up to 500 px, file up to 10 MB. Prepare a 500x500 version of `assets.logo_square`.
- "Total Funding" is required. If `company.funding_raised` is empty, enter 0 (bootstrapped). Never guess a figure.

## Field map
| Their field | Profile key / instruction |
|---|---|
| Step 1: Category (required) | Country from `company.country` (e.g. Germany, France) |
| Step 1: Plan | Free Listing (free, never expires, 1 image) |
| Business Name (required) | `product.name` |
| Business Description (required) | `product.description_short` |
| Long Business Description | `product.description_long` |
| Based in (required) | `company.country` |
| Town Name | `company.city` |
| Tags (required) | 3 to 4 comma separated words from `product.tags` |
| Total Funding (required) | `company.funding_raised` or 0 |
| Founded (required) | `company.founded_year` |
| Website (required) | `product.url` |
| Company Status (radio) | Idea Stage, Active, or Closed. `product.status` live or beta -> Active; idea or waitlist -> Idea Stage |
| LinkedIn Page | `links.linkedin` (company page) |
| Business Contact Email (required) | `submission.email` |
| Step 3: Upload image | `assets.logo_square` at 500x500 |

## Steps
1. Open https://www.eu-startups.com/directory/?wpbdp_view=submit_listing.
2. Choose the country category and the Free Listing plan. Click Next.
3. Fill listing information per the map. Click Next.
4. Upload the 500x500 logo. Click Complete Listing.
5. Capture the confirmation message.

## Make the listing perform
- Pick the right country. Readers browse the directory by country, and EU-Startups writes country roundups from it.
- Tags drive internal search. Use the words a European investor would type (e.g. "fintech, payments, SME").
- The short description shows in lists; make it say what the company does in one sentence.
- EU-Startups also covers funding news. After a raise, send a short news pitch via their contact page (separate from this form).

## Gotchas
- Images over 500 px in either dimension fail.
- Cloudflare may block automated loads. Mark `needs_human` if a challenge appears.
- No paid upgrade was offered in this flow, despite older notes saying Free/Paid.

## After submitting
- `launchkit mark eu-startups-directory submitted`. Search the directory by name a week later for the live URL.
