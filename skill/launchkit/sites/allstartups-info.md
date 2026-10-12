---
id: allstartups-info
name: "AllStartups.info"
url: https://allstartups.info/Startups/Submit
category: Startup Database
mode: form
pricing: Free
login: "none seen; public form"
captcha: unknown
backlink_required: no
review_time: "Up to 60 days; unpublished after 60 days means declined"
verified: true
last_checked: 2026-10-12
---

# AllStartups.info

Older global startup directory with a public submit form at /Startups/Submit. The site was live during research,
but its TLS certificate was flagged invalid by Chrome. Listings are manually reviewed and may be edited.

## Before you start
- Eligibility rules on the form: startup no older than 5 years, has its own domain, English content and
  interface, and some innovation or technology relevance. Skip if the profile fails any of these.
- Image must be exactly 1024x536 or 2048x1072 px, PNG or JPEG, max 500 KB. Resize `assets.og_image` (1200x630)
  to 1024x536 and compress.
- If the browser shows a certificate warning, do not bypass it silently. Ask the user or mark `needs_human`.

## Field map
| Their field | Profile key / instruction |
|---|---|
| Startup name (required, max 128) | `product.name`, no "LLC" or "Inc" |
| Pitch (required, ~150 recommended, max 256) | `product.tagline`; keep under 160 characters |
| Startup URL (required, max 256) | `product.url` |
| Description (required) | `product.description_long`, must cover what it does, typical user, business model. Write unique text, not a copy of other listings. |
| Stage (dropdown) | `product.status`: live -> Operating, beta -> Public beta (or Private beta if invite only), waitlist -> Coming soon, alpha -> Alpha |
| Launch date (YYYY-MM-DD) | `product.launch_date` |
| Image | `assets.og_image` resized to 1024x536, under 500 KB |
| Application type (checkboxes) | From `product.platforms`: web -> Website/Web app, macos -> Mac app, windows -> Windows app, linux -> Linux app, ios -> iOS app, android -> Android app, chrome -> Chrome extension, firefox -> FireFox extension |
| Contact name (max 128) | `founder.name` |
| Contact email (max 128) | `submission.email` |
| Twitter, Facebook, LinkedIn, YouTube, Instagram (optional, max 128) | Matching `links.*` values; leave blank if missing |

## Steps
1. Open https://allstartups.info/Startups/Submit.
2. Read the eligibility block and confirm the startup qualifies.
3. Fill fields top to bottom per the map.
4. Upload the resized image and check the preview.
5. Submit and capture the confirmation text.

## Make the listing perform
- The description is what gets the listing approved. Mention the user, the problem, and how the product makes
  money in plain sentences. Thin or copied text is a common reason for decline.
- Use the clean 1024x536 product screenshot rather than a logo on white; it is the listing card image.
- Fill every social field you have. Profiles with links look established to the reviewer.

## Gotchas
- Review can take 60 days. Do not resubmit in the meantime.
- The site says it may reject, edit, or contact the submitter.
- Wrong image dimensions fail the upload; it must match one of the two sizes exactly.

## After submitting
- `launchkit mark allstartups-info submitted --note "review up to 60 days"`. Check allstartups.info search after 4 to 8 weeks.
