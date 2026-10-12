---
id: ai-valley
name: "AI Valley"
url: https://aivalley.ai/submit-tool/
category: AI Directory
mode: form
pricing: Free
login: none
captcha: recaptcha
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# AI Valley

WordPress AI tools and prompts directory (about 1,780 tools, 390 prompts). The submit page is a short contact-style form with no visible paid tier. Low effort, modest traffic.

## Before you start
- No account needed. The page sits behind a "Checking your browser" interstitial; wait 5 seconds and it loads.
- The form is protected by Google reCAPTCHA (script on the page, likely invisible v3). If a visible challenge appears, mark `needs_human`.
- No logo or screenshot upload on the form; the editors pull them from the site, so make sure `product.url` has a good OG image and favicon.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | required | `founder.name` |
| Email | required | `submission.email` |
| Tool Name | required | `product.name` |
| Tool URL | URL, required | `product.url` |
| Tool Description | textarea, optional | `product.description_medium`, then a line with pricing (`product.pricing_model`, `product.pricing_details`) and the best-fit category from the list below |
| Tool Short Description | textarea, optional | `product.description_short` |

There is no category field. Their categories (sidebar): AI Assistant, Art, Audio, Automation, Avatar, Build AI, Career, ChatBots, Code Assistant, Content Creation, Copywriting, Data Analyst, Design, Developer Tools, Ecommerce, Educational, Email Assistant, Finance, Image Editing, Image Generator, Lead Generation, Marketing, Music, Open-Source, Presentations, Productivity, Research, SEO, Social Media Assistant, Startup Tools, Summarizer, Text-to-speech, Video Editing, Video Generator, Writing, and more. Name one in the description ("Category: Code Assistant").

## Steps
1. Use the header search ("Find your perfect tool & prompt") for `product.name`. If listed, mark `live` and stop.
2. Open https://aivalley.ai/submit-tool/ and wait for the browser check to pass.
3. Fill the six fields. Don't leave the optional descriptions empty; they're what the editor writes from.
4. Click the submit button below the form. Screenshot the success message to `.launchkit/evidence/ai-valley.png`.
5. `launchkit mark ai-valley submitted --note "free form, no review time stated"`

## Make the listing perform
- Listings are filtered by Free / Paid / Freemium. State the pricing model plainly so they tag it right; "Free Tools" is a top menu item.
- If the product is open source, say so and suggest the Open-Source category, which is less crowded.
- They also list prompts. If the product ships useful prompt templates, mention it; a prompt listing can link back to the tool.

## Gotchas
- The form has two textareas with the same name in the markup; fill them in the visible order (long first, then short).
- No confirmation email is promised, and no review time is published.

## After submitting
- Check the "Recently Added" strip on the homepage after a week or two and mark `live` with the tool page URL.
