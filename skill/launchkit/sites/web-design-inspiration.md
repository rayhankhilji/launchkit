---
id: web-design-inspiration
name: "Web Design Inspiration"
url: https://www.webdesign-inspiration.com/web-design-site/submit
category: Design Gallery
mode: form
pricing: Freemium
login: none
captcha: unknown
backlink_required: no
review_time: "a few months free, under 48h with $50 express"
verified: true
last_checked: 2026-10-12
---

# Web Design Inspiration

A curated gallery (webdesign-inspiration.com) filtered by site type, color, industry (incl. SaaS, B2B, Tech) and style. Free submissions are reviewed but can take "a few months". An optional $50 Express Review publishes within 48 hours with a do-follow backlink instead of no-follow.

## Before you start
- Site must look polished. Otherwise mark `skipped` ("not a fit").
- Need `founder.name`, `submission.email`, `product.url`, a title under 70 chars and a description under 150 chars.
- The form ends with a **Verify Code** field (an image code check). If it's shown, mark `needs_human` for that step; don't try to solve it.
- The $50 express option costs money. With `launch_settings.budget_usd` 0, use the free path. Only mention the paid option to the user.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First Name | text | first word of `founder.name` |
| Last Name | text | rest of `founder.name` |
| Email | email | `submission.email` |
| Twitter Account | text | `founder.twitter` or `links.twitter`, else empty |
| Were you involved in this website? | radio: No / web designer / web developer / project manager / agency's client | founder who commissioned it -> "Yes, I'm the agency's client"; founder who built it -> "Yes, I'm a web developer" (or designer if that fits better) |
| Website URL | URL | `product.url` |
| Website Title | 70 chars | `product.name` + short descriptor, e.g. "`product.name` - `product.tagline_short`" if it fits |
| Website Description | 150 chars | `product.description_short` trimmed to 150 |
| Private Message | free text | optional one line, e.g. stack or designer credit |
| Subscribe to our newsletter | checkbox | leave unticked |
| Verify Code | image code | user enters it |

## Steps
1. Use the site search or industry pages to check `product.name` isn't listed.
2. Open the submit URL. Fill "About you", then "Your website suggestion" from the map.
3. Leave the newsletter box unticked. Stop at **Verify Code** and ask the user to type it, then submit.
4. The success message contains instructions for the paid express review. Don't follow them unless the user approved spending $50.
5. Screenshot to `.launchkit/evidence/web-design-inspiration.png` and `launchkit mark web-design-inspiration submitted --note "free review, can take months"`.

## Make the listing perform
- Pick words in the description that match their filters: industry (SaaS, B2B, Tech, Finance), style (Clean, Dark, Minimalist, Illustrative, Colorful) and type (Web service, Product, Mobile app).
- Title and description are shown on the listing, so write them for humans: say what the product does, no hype.
- If the user cares about SEO, the $50 do-follow link is the only paid decision here. Present it as optional.

## Gotchas
- Title counter stops at 70 and description at 150. Write to fit rather than letting it truncate.
- Login in the header is for members; it's not needed to submit.

## After submitting
- Free reviews can take months. Re-check occasionally and mark `live` when it appears.
