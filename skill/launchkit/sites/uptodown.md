---
id: uptodown
name: Uptodown
url: https://en.uptodown.com/developers-console
category: Software Review Site
mode: form
pricing: Free
login: unknown
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Uptodown

App download store with a free developer program (over 273,000 developers). It distributes installable apps for Android, Windows and Mac. It is not a SaaS directory: a web-only product has nothing to upload here, so skip it unless `product.platforms` includes Android, Windows or Mac.

## Before you start
- Skip rule: if `product.platforms` has no Android, Windows or Mac app, mark `skipped` with "no installable app".
- Publishing is free. No revenue share, no required SDK. Paid-to-download apps are not supported; free apps with ads or in-app purchases are.
- Needs a Developers Console account plus an organization, then the publishing form. This is a manual process: the agent can prepare metadata, but the user should upload the build (APK/AAB/XAPK, EXE/MSI, DMG). Use `needs_human` for the upload.
- If the app is already on Uptodown (they mirror many apps), use **claim authorship** instead of uploading.

## Field map

The publishing form is behind login (unconfirmed). Prepare these from the profile:

| Item | Fill with |
|---|---|
| Developer / organization name | `company.legal_name` |
| Contact email | `submission.email` |
| App name | `product.name` |
| Short description | `product.tagline` |
| Long description | `product.description_long` |
| Category | closest match to `product.categories[0]` |
| Icon | `assets.logo_square` (512x512 PNG is a safe size) |
| Screenshots | `assets.screenshots` taken from the app, not the website |
| App file | user supplies the build for each platform in `product.platforms` |
| Website | `product.url` |

## Steps
1. Apply the skip rule above.
2. Search https://en.uptodown.com/ for `product.name`. If a page exists, plan a claim instead of an upload.
3. Open https://en.uptodown.com/developers-console and create the account (if allowed), then set up the organization.
4. Prepare all metadata above in the run notes and hand off the file upload to the user.
5. `lk mark uptodown needs_human --note "upload build in Uptodown Developers Console"`.

## Make the listing perform
- Uptodown shows apps in 17 languages. Short, plain descriptions translate better.
- Upload updates promptly; the console tracks versions and recent updates surface on the site.
- Reply to user comments from the console.

## Gotchas
- Apps must meet their publication criteria and supported file formats (see support.uptodown.com).
- Unity Distribution Portal accounts need a separate migration.

## After submitting
- Check the console for publication stage and download stats. Save the app page URL with `--listing-url` once live.
