---
id: sourceforge
name: SourceForge
url: https://sourceforge.net/software/vendors/new
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

# SourceForge

Large business software directory and review site (plus the old open source hosting). The free vendor form also gets a complimentary listing on Slashdot's software directory. Worth doing for any B2B product.

## Before you start
- Need: `assets.logo_square` (square, high resolution, JPG/GIF/PNG), `product.description_medium` cut to 1000 chars, a starting price string.
- No account needed for the add-product form. A Cloudflare check may run on first load.
- Paid promotion packages (Plus, Premium, Amplify, Precision ABM) have no public prices. Skip them.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your Name | required | `founder.name` |
| Email Address | required | `submission.email` |
| Company | required | `company.legal_name` |
| Your Title | required | `founder.role` |
| Website | required | `product.url` |
| Phone | optional | leave blank unless the user gave one |
| Company Founded | number, optional | `company.founded_year` |
| Company Location | optional | `company.city`, `company.country` |
| Software Title | 52 chars, required | `product.name` |
| Logo | required, image | `assets.logo_square` |
| Product Description | 1000 chars, required | `product.description_medium`, trimmed to 1000 |
| Audience | text, required | `product.target_audience` as one short phrase, e.g. "Small SaaS teams that need X" |
| Category | dropdown, required | closest match to `product.categories[0]` |
| Starting Price | 30 chars, e.g. "$30/month/user" | lowest paid tier from `product.pricing_details`; "Free" if `pricing_model` is free |
| Free Version / Free Trial | checkboxes | Free Version if `pricing_model` is free or freemium; Free Trial if `product.free_trial` |
| Support | checkboxes: Phone, 24/7 Live, Online, Not Offered | Online for most indie products |
| Training | Documentation, Live Online, Webinars, In Person, Videos, Not Offered | Documentation if `links.docs` exists; Videos if `links.demo_video` |
| Deployment | SaaS/Web, Windows, Mac, Linux, iPhone, iPad, Android, Chromebook, On-Premise | map from `product.platforms` (web -> SaaS / Web) |
| Consent checkbox | required | tick |

## Steps
1. Search https://sourceforge.net/software/ for `product.name`. If it exists, mark `live` with the URL instead.
2. Open https://sourceforge.net/software/vendors/new and wait out any Cloudflare check.
3. Fill the fields top to bottom as mapped above. Upload the logo.
4. Tick the consent box and click **Submit**.
5. Screenshot the thank-you page to `.launchkit/evidence/sourceforge.png`, then `lk mark sourceforge submitted --note "vendor form, manual review"`.

## Make the listing perform
- Category pages are the main traffic source. Pick the most specific category, not "Business Software".
- The Audience line shows on the listing. Write it as who it is for ("Agencies managing client SEO"), not a slogan.
- Fill Starting Price, support, training and deployment. SourceForge comparison tables use these, and empty rows look abandoned.
- After it is live, claim the profile and add screenshots and integrations from the vendor dashboard.

## Gotchas
- Software Title is capped at 52 characters, keep it to the product name.
- The description counter is hard at 1000 characters.
- Starting Price is capped at 30 characters, so "$19/month" not a sentence.
- Sales reps may email about paid plans afterwards. The free listing does not need them.

## After submitting
- Watch `submission.email` for a confirmation or vendor dashboard invite. Search the directory after a week and record the URL with `--listing-url`.
