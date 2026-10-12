---
id: microsoft-edge-add-ons
name: "Microsoft Edge Add-ons"
url: https://partner.microsoft.com/dashboard/microsoftedge/
category: App Store / Marketplace
mode: manual
pricing: Free
login: email           # Microsoft account (MSA); a GitHub login can create the MSA for you
captcha: none
backlink_required: no
review_time: "up to 7 business days"
verified: true
last_checked: 2026-10-12
---

# Microsoft Edge Add-ons

The extension store built into Microsoft Edge. Only worth it if the product ships a browser extension. Chrome extensions (Manifest V3) usually port with no code changes, so if the user already has a Chrome Web Store listing this is a cheap second channel.

## Before you start
- Artifact: a working extension packaged as a `.zip` with `manifest.json` at the root. Name and short description come from the manifest, so fix them there first.
- Account: Partner Center developer account with a personal Microsoft account (MSA) as primary owner. Work or school accounts can't register. Registration is free (no fee for individuals or companies).
- Assets: `assets.logo_square` at 300x300 (min 128x128, 1:1), screenshots at 1280x800 or 640x480 (max 6), optional 440x280 small tile and 1400x560 large tile, optional YouTube URL from `links.demo_video`.
- A public privacy policy URL is required if the extension touches user data.

## Field map

| Field in Partner Center | Limit / format | Fill with |
|---|---|---|
| Package | .zip | the user's built extension |
| Visibility | Public / Hidden | Public |
| Markets | checkbox list | all markets unless the user says otherwise |
| Category | dropdown | closest match to `product.categories[0]` (e.g. Productivity, Developer tools, Shopping) |
| Website | URL | `product.url` |
| Support contact | URL or email | `links.docs` or `founder.email` |
| Mature content | checkbox | leave unchecked |
| Single purpose | text | one sentence from `product.description_short` |
| Permission justification | text per permission | plain reason for each permission in the manifest |
| Remote code | yes/no | ask the user; MV3 extensions normally say no |
| Data usage | checkboxes | match what the extension really collects |
| Privacy policy URL | URL | the privacy policy URL from the product site, else ask the user |
| Description | 250 to 10,000 chars | `product.description_long` plus `product.key_features` as a list |
| Extension logo | 1:1, 300x300 | `assets.logo_square` |
| Screenshots | up to 6, 1280x800 or 640x480 | `assets.screenshots` resized |
| YouTube video URL | URL | `links.demo_video` if it's a YouTube link |
| Search terms | max 7 terms, 30 chars each, 21 words total | `product.tags` |
| Notes for certification | text | test account, steps to reach every feature |

## Steps
1. This is manual mode. Don't create the account or upload anything. Add it to the wrap-up as a suggestion if `product.platforms` includes a browser extension.
2. If the user wants help: they sign in at the Partner Center URL, enroll in the Microsoft Edge program, then click **Create new extension** and upload the zip.
3. Walk them through Availability, Properties, Privacy and Store listings in that order. Prepare the description, search terms and certification notes as text they can paste.
4. They click **Publish**. Status moves to "In certification" and then "In the Store".
5. `launchkit mark microsoft-edge-add-ons needs_human --note "Edge extension, user submits in Partner Center"`

## Make the listing perform
- The first lines of the description show above the fold. Lead with what it does in one sentence, then a short feature list.
- Search terms are hidden but indexed. Use the words people type ("tab manager", "pdf to text"), not your brand name.
- Add both promo tiles. Microsoft picks featured and "trending" extensions from listings that have them.
- Link the listing from the product site; Edge users installing from a direct link convert better than from search.

## Gotchas
- Description under 250 characters blocks submission.
- Privacy answers must match what the code does. A mismatch is the most common certification failure.
- Updates go through certification again, so batch fixes.

## After submitting
- Certification takes up to 7 business days. The listing appears at microsoftedge.microsoft.com/addons once the status is "In the Store".
