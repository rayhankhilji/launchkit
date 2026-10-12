---
id: softpedia
name: "Softpedia"
url: https://www.softpedia.com/user/submit.shtml
category: Software Review Site
mode: form
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Softpedia

A big download catalog for Windows, Mac, Linux, mobile apps, drivers and games. It only lists **downloadable software** with a real installer or package. A web-only SaaS doesn't fit; skip unless `product.platforms` includes a desktop or mobile app with a download link.

## Before you start
- Check `product.platforms`. If it's web only, `launchkit mark softpedia skipped --note "download catalog, web app not eligible"`.
- Needed: program version, file size, OS list, license type, two working HTTP/FTP download links, a 32x32 icon URL and a screenshot URL. Most of these aren't in the profile, so ask the user.
- Policy on the submit page: they don't accept software where code was written by an LLM. Ask the user to confirm the app meets this before submitting.
- The form ends with a simple arithmetic CAPTCHA. You may not solve CAPTCHAs: fill everything, then hand the last step to the user (`needs_human`).
- A PAD file URL is optional and lets them pull updates automatically.

## Field map (manual submit form, in order)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Developer name | text | `company.legal_name` or `founder.name` |
| Developer site | URL | `product.url` |
| Developer email | email | `submission.email` |
| Program name | text | `product.name` |
| Program version | text | ask the user |
| Category | select | closest to `product.categories[0]` under the right OS section |
| File size | text | ask the user |
| Price for 1 license | text | from `product.pricing_details`; "0" or Free if free |
| Supported operating systems | checkboxes | from `product.platforms` |
| License | select (Freeware, Shareware, Demo, Open source...) | map `product.pricing_model`: free -> Freeware, freemium/paid with trial -> Shareware or Demo; open source -> GPL/MIT as stated |
| 32x32 icon URL | URL | public URL of a 32x32 version of `assets.logo_square` |
| Screenshot URL | URL | public URL of `assets.screenshots[0]` |
| Download link 1 and 2 | HTTP/FTP URLs | ask the user (direct installer links) |
| Short description | 128 chars max | `product.description_short` cut to 128 |
| Long description | text | `product.description_long` |
| Special requirements | text | runtime needs (e.g. ".NET 8"), ask if unknown |
| Limitations | text | trial limits from `product.free_trial` / `product.pricing_details` |
| Changes | text | latest release notes (`links.changelog`) |
| Direct buy link | URL | `links.pricing_page` if paid |
| Unlock code for trial/demo | text | leave blank unless the user gives one |
| PAD file URL | URL, optional | ask the user |
| CAPTCHA | arithmetic | user solves it |

## Steps
1. Search softpedia.com for `product.name`. If found, mark `live`.
2. Open https://www.softpedia.com/user/submit.shtml (Cloudflare check first; if it needs a human, mark `needs_human`).
3. Fill fields per the map. Stop before the CAPTCHA and ask the user to solve it and click **Submit**.
4. Screenshot the confirmation to `.launchkit/evidence/softpedia.png`; `launchkit mark softpedia submitted`.

## Make the listing perform
- Softpedia shows a "100% Clean" mark on programs that pass its checks. Signed installers with no bundled offers are the safe choice (inference, their test criteria weren't checked).
- The 128-char short description is shown in lists. Lead with what the program does.

## Gotchas
- Links must be direct downloads, not landing pages, or the editors reject it.

## After submitting
- No stated review time. Search the name after a couple of weeks.
