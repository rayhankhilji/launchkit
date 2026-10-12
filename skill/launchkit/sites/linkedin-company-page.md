---
id: linkedin-company-page
name: "LinkedIn Company Page"
url: https://www.linkedin.com/company/setup/new/
category: Startup Database
mode: form
pricing: Free
login: "LinkedIn personal account (the user's own)"
captcha: "none seen; LinkedIn may ask for identity checks on new accounts"
backlink_required: no
review_time: "Instant on create"
verified: true
last_checked: 2026-10-12
---

# LinkedIn Company Page

Free company Page tied to the founder's personal LinkedIn account. It is the profile most people check before a
call, and team members link their roles to it. The setup URL redirects to LinkedIn login; fields come from
LinkedIn Help (answer a543852 and the Page completeness articles).

## Before you start
- Must run in the user's logged-in browser. Never create a LinkedIn account for them.
- Search LinkedIn for the company first. If a Page exists and the user is not an admin, they need to request admin access instead.
- Assets: logo PNG or JPEG, minimum 268x268, recommended 400x400, max 3 MB (`assets.logo_square`).
  Cover image recommended 1512x256, max 3 MB (crop from `assets.og_image`).
- Android app cannot create Pages. Use desktop.

## Field map
| Their field | Profile key / instruction |
|---|---|
| Page type | "Company" (not Showcase page or Educational institution) |
| Name | `product.name` (or `company.legal_name` if the brand is the company name) |
| LinkedIn public URL | linkedin.com/company/ + lowercase slug of `product.name`, no spaces |
| Website | `product.url` |
| Industry | Closest LinkedIn industry to `product.categories[0]` (e.g. "Software Development", "Technology, Information and Internet") |
| Organization size | Bucket from `company.team_size` (2-10 for most early startups) |
| Organization type | "Privately Held" unless the profile says otherwise; "Self-Employed" for solo founders without an entity |
| Logo | `assets.logo_square` |
| Tagline | `product.tagline` (keep it short; check the counter shown) |
| Verification checkbox | User confirms they may act on behalf of the company. Ask before ticking. |
| (After create) Overview / About | `product.description_medium` (respect the on-page character counter) |
| (After create) Location | `company.city`, `company.country` |
| (After create) Founded | `company.founded_year` |
| (After create) Specialties | Items from `product.tags` |

## Steps
1. Open https://www.linkedin.com/company/setup/new/ in the user's session (or click For Business > Create a Company Page).
2. Choose Company.
3. Fill name, public URL, website, industry, size, type, logo, tagline.
4. Show the user the verification checkbox and let them confirm. Click Create page.
5. On the new Page, click Edit page and add About, location, founded year, specialties, and the cover image.
6. Add a custom button (Visit website) pointing to `product.url`.

## Make the listing perform
- LinkedIn says Pages with complete key info get up to 30% more weekly views. Fill industry, size, About, logo, website, and location.
- Put the plain one-line value in the tagline. It shows under the name in search and when people hover.
- Use real specialties people search for (the product category, "API", the target industry), not slogans.
- Ask the founder and team to set the Page as their current employer so it shows in their profiles.
- First post: a short note on what the product does and who it is for, with one screenshot from `assets.screenshots`.

## Gotchas
- The public URL slug cannot be changed often. Pick it once.
- New personal accounts with few connections may be blocked from creating Pages. Mark `needs_human` if so.
- Do not post or invite connections on the user's behalf without approval.

## After submitting
- Record linkedin.com/company/<slug> with `launchkit mark linkedin-company-page submitted --listing-url <url>`.
- Add the Page URL to `links.linkedin` in the profile so other directories use it.
