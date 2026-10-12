---
id: ai-tools-directory
name: "AI Tools Directory"
url: https://aitoolsdirectory.com/submit-tool
category: AI Directory
mode: form
pricing: Free/Paid
login: none
captcha: unknown
backlink_required: no
review_time: "weeks (free queue); 3 days or less with Fast Track"
verified: true
last_checked: 2026-10-12
---

# AI Tools Directory

Hand-curated AI tools list (aitoolsdirectory.com, not the .net site). Every tool is reviewed by a person who rewrites the description. Free to submit, strict about original copy, transparent pricing and no waitlists.

## Before you start
- The product must be clearly AI, publicly usable (no waitlist) and show its pricing on the website. Crypto, NSFW, AI girlfriend and "uncensored" tools are rejected.
- Their copy rules are strict: original text only, no sales language, no feature lists in the "unique" field. Write fresh text from the profile rather than pasting `product.description_long` from other sites.
- Needs `founder.name`, `submission.email`, `founder.twitter` or `links.twitter` (handle form).

## Field map

The form is an embedded Paperform (https://aitool.paperform.co/). Fields in order:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name of product | text, required | `product.name` |
| URL | URL | `product.url` |
| Pricing | dropdown, required | map `product.pricing_model` to the matching option (Free / Freemium / Paid style options) |
| Short description | 20-30 words | rewrite `product.description_short` in a neutral, factual tone. No hype, no "best" |
| Long description | 50-500 words | `product.description_medium` rewritten neutrally, 80-150 words is plenty |
| Tags / Keywords / Hashtags | 1-3 hashtags | top 1-3 of `product.tags` as `#tag` |
| Your name | required | `founder.name` |
| Your email | email | `submission.email` |
| X/Twitter handle | `@handle`, not a URL | handle from `links.twitter` or `founder.twitter` |
| Affiliate program URL or contact | optional | leave blank unless the user has one |
| How is this tool unique or different? | required, prose | 2-3 sentences on why it beats `product.competitors_alternatives`. No feature list (feature lists get the tool rejected) |
| Interested in buying ad space? | Yes/No, required | No (unless budget approved) |

## Steps
1. Search the homepage for `product.name`. If listed, mark `live` with the URL and stop.
2. Open https://aitoolsdirectory.com/submit-tool. Use "Open the form in a new tab" if the embedded iframe is hard to drive.
3. Fill the fields above. Run `launchkit lint-copy -` on the two descriptions and the "unique" answer first.
4. Answer No to the ad question and click **Submit**. Screenshot the confirmation to `.launchkit/evidence/ai-tools-directory.png`.
5. `launchkit mark ai-tools-directory submitted --note "free queue, manual review"`

## Make the listing perform
- The editor writes the final description. Make their job easy: a plain 25-word summary that says who it's for and what it does in the first sentence.
- Copy that reads as AI-written or copied gets pushed to the bottom of the queue or discarded. This matters more here than on most directories.
- "If regular people can't figure it out in 5 seconds, it's not going on the directory." Lead with a consumer-friendly use case from `product.use_cases`, no jargon.
- Tags drive category pages (e.g. Advertising, Video Generation, Productivity). Pick the most specific existing category as the first hashtag.
- Paid options (Oct 2026): Fast Track $99 one-time (listed in 3 days or less), Top Organic Row $299/30 days, Homepage Featured position 2 $399/30 days, position 1 $499/30 days. Skip at budget 0.

## Gotchas
- Twitter field wants `@handle`; a full URL fails validation.
- Short description has a minimum length ("TOO SHORT" error under ~20 words).
- Submitting is no guarantee of publication.

## After submitting
- No confirmation email is promised. Search the site by name every couple of weeks; mark `live` when it appears.
