---
id: saasadviser
name: "SaaS Adviser"
url: https://www.saasadviser.co/get-listed
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: false
last_checked: ""
---

# SaaS Adviser

A software review and comparison site (Business Software Advisors) with vendor profiles, buyer reviews and a "Premium Listing" upsell. The free vendor signup creates a basic profile. Medium value for B2B SaaS.

Unconfirmed: in October 2026 the live site was behind a Cloudflare check, so the form below comes from an archived copy of `/get-listed` (2025).

## Before you start
- The signup creates a vendor account with a password. Only proceed if `submission.allow_account_creation` is true. Generate a password and store it in the user's password manager or tell the user; don't write it into repo files.
- A **phone number** (8-15 digits) is required. The profile has no phone key, so ask the user for one or mark `needs_human`.
- Paid options shown on the page (Premium Listing, sponsored placements, lead programs) are optional. Skip with budget 0.

## Field map (`/get-listed` signup form, in order)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First Name | 100 chars | first word of `founder.name` |
| Last Name | 100 chars | rest of `founder.name` |
| Email Address | 100 chars | `submission.email` (a domain email works better than gmail) |
| Contact No | 8-15 digits | ask the user |
| Organization Name | 100 chars | `company.legal_name` or `product.name` |
| Website | 100 chars | `product.url` |
| Password | up to 20 chars | generated |
| Confirm Password | same | generated |
| Newsletter | checkbox | leave unticked |

After signup the vendor dashboard asks for the product profile. Expect: product name (`product.name`), description (`product.description_long`), category (closest to `product.categories[0]`), pricing (`product.pricing_model` + `product.pricing_details`, free trial from `product.free_trial`), features (`product.key_features`), logo (`assets.logo_square`), screenshots (`assets.screenshots`), video (`links.demo_video`). Not confirmed.

## Steps
1. Search saasadviser.co for `product.name`. If a profile exists, use the "claim" flow instead of a new signup.
2. Open https://www.saasadviser.co/get-listed. If the Cloudflare check needs a human, mark `needs_human`.
3. Fill the signup form per the map and submit. Verify the email if `submission.inbox_access` allows it.
4. In the dashboard, complete every product field you can from the profile. Skip anything paid.
5. Screenshot the finished profile to `.launchkit/evidence/saasadviser.png`; `launchkit mark saasadviser submitted`.

## Make the listing perform
- Review sites rank profiles by review count and completeness. Fill features, pricing and screenshots fully.
- Reviews: the user can invite real customers through the site's own review link. Never write or incentivise reviews.

## Gotchas
- Password field is capped at 20 characters; longer generated passwords get cut or rejected.

## After submitting
- Check the category page for the listing after approval and tell the user the dashboard login.
