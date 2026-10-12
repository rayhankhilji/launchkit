---
id: aitoolnet
name: "AItoolnet"
url: https://www.aitoolnet.com/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: none
captcha: unknown
backlink_required: no
review_time: "30-60 days (free), 24 hours (paid)"
verified: true
last_checked: 2026-10-12
---

# AItoolnet

Large multilingual AI directory (15,000+ tools, 8 languages, claims 200K monthly visitors and a dofollow link). One public form; free submissions sit in a 30-60 day queue.

## Before you start
- Cloudflare check on first load; a real browser passes it.
- Plans shown: START Free (published within 30 days, dofollow), PRO $9.9 one-time (24 hours), BUSINESS $49.9 (7 days top spots). The form's button defaults to "Submit Pay $9.9". Select the Free/START option first. If the button still requires payment, mark `needs_human` rather than paying.
- Don't submit newsletters or directories; AI tools only. Search first; duplicates are rejected.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name * | text | `product.name` |
| Website * | URL | `product.url` |
| Category * | select | map `product.categories[0]` to one of: Productivity, Copywriting, Startup Tools, Video, Text To Speech, Email Assistant, Social Media Assistant, Image Editing, Image Generator, SEO, Code Assistant, Presentations, Education Assistant, Sales, Customer Support, Developer Tools, Design Assistant, Research, Audio, Human Resources, E-commerce, Finance, Meeting Assistant, Chatbots, Marketing, Automation, Large Language Models, Data, Business, ... |
| Pricing | Free / Freemium / Free Trial / Paid | map `product.pricing_model`; paid with `free_trial: true` -> Free Trial |
| Description | one sentence | `product.description_short` |
| Content | one or two paragraphs, starting with the product name | `product.description_medium` starting with `product.name`, then a "Key Features:" list from `product.key_features` |
| Email * | text | `submission.email` |
| Payment Platform * | PayPro Global | only relevant for paid |

## Steps
1. Search the homepage for `product.name`. If listed, mark `live` and stop.
2. Open https://www.aitoolnet.com/submit. Click the **START / Free** plan if it's selectable.
3. Fill the fields. Check the submit button text: if it doesn't say pay, click **Submit**.
4. Screenshot to `.launchkit/evidence/aitoolnet.png`. `launchkit mark aitoolnet submitted --note "free queue 30-60 days"`

## Make the listing perform
- The site translates listings into 8 languages. Plain sentences translate better; avoid idioms and puns.
- Their FAQ says a unique tool name, a clear use case and well-chosen keywords drive visits. Put the main use case keyword in the first sentence of Content.
- Their placeholder format (name, one-paragraph summary, "Key Features:" bullet list) is what published pages look like. Match it.
- BUSINESS $49.9 buys 7 days at the top of home and category pages. Only worth it on launch week.

## Gotchas
- Edits are by email only: support@aitoolnet.com, subject "Update Tool Listing - [Tool Name]".
- They reserve the right to remove tools even after approval.

## After submitting
- Use the homepage search to check status. Free can take 1-2 months; mark `submitted` and move on.
