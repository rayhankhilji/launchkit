---
id: startup88
name: "Startup88"
url: https://startup88.typeform.com/to/CRjWqM
category: Startup Database
mode: form
pricing: Free/Paid
login: none
captcha: none
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Startup88

Startup88 is a startup news blog that publishes founder pitches as short articles ("Pitch Your Startup"). Submissions go through a public Typeform; a free pitch waits in a review queue, and a paid $9.95 option jumps the queue.

## Before you start
- No login. The form is on Typeform: https://startup88.typeform.com/to/CRjWqM (linked from startup88.com "Pitch your startup").
- Needs one image: `assets.screenshots[0]` (or `assets.logo_square` if there are no screenshots).
- Ask the user before choosing the $9.95 express option. Answering "No" skips the payment step and ends the form.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Startup Name | short text | `product.name` |
| Tag Line | short text | `product.tagline` |
| Website | URL | `product.url` |
| Founder Name | short text | `founder.name` |
| Founder Email | email | `founder.email` |
| Twitter handle | short text | handle from `links.twitter` (or `founder.twitter`) |
| Elevator Pitch | long text | `product.description_long` (this text is the basis of the article) |
| Target Market | short text | `product.target_audience` |
| How will you make money? | long text | `company.business_model` plus `product.pricing_details` |
| Are you the founder? | yes / no | Yes if `founder.name` is the submitter |
| If not founder | short text | only shown if No; submitter's role |
| How Much Capital Have You Raised? | dropdown: None, 10-50k, 50-100k, 100-250k, 250-500k, 500k-1m, 1-2m, 2-5m, 5-10m, please specify | bucket of `company.funding_raised`; "None" if empty or bootstrapped |
| City/Country | short text | `company.city`, `company.country` |
| Upload product image or screenshot | file | `assets.screenshots[0]` |
| Front Page for 24hr + Express Review + Social Media Sharing ($9.95)? | yes / no, required | No unless the user approved spend |
| Payment ($9.95) | card, only if Yes | user enters card; never do it for them |

## Steps
1. Open https://startup88.typeform.com/to/CRjWqM and click **start**.
2. Answer each question from the map, pressing **OK** / Enter after each.
3. Upload the image when asked.
4. On the express question choose **No** (or **Yes** only with approval, then hand the payment step to the user).
5. On the thank-you screen, screenshot to `.launchkit/evidence/startup88.png`.
6. `launchkit mark startup88 submitted`

## Make the listing perform
- The Elevator Pitch becomes the article, so write it as a short story: problem, who it is for, what the product does, one concrete example. Their intro says "a well told story always beats advertising".
- Articles are filed under topics such as AI, Marketing & Sales, Fintech, Productivity, Data & Analytics, Ecommerce. A clear Target Market answer helps them place it.
- Express buys 24 hours on the front page and a post on their social accounts; free pitches may wait a long time or not be published.

## Gotchas
- Typeform answers can't be edited after submission. Check spelling of the URL and email before moving on.
- Upload size follows Typeform's limit (10 MB).

## After submitting
- Search startup88.com for `product.name` every week or two. Published pitches stay as permanent articles.
