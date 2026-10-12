---
id: future-tools-matt-wolfe
name: "Future Tools (Matt Wolfe)"
url: https://futuretools.io/submit-a-tool
category: AI Directory
mode: form
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: "manual review, not guaranteed"
verified: true
last_checked: 2026-10-12
---

# Future Tools (Matt Wolfe)

Matt Wolfe's hand-curated AI tool directory, tied to his YouTube channel and newsletter. Free to submit, but their FAQ says over 75% of submissions are rejected. It's worth one careful try.

## Before you start
- The product must be publicly launched and working. Waitlist pages get rejected.
- Have `product.description_short` ready. They write the final listing copy themselves from your homepage, so the homepage must clearly say what the tool does.
- No login, no upload, no fee.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your Name | text | `founder.name` |
| Tool Name | text, required | `product.name` |
| Tool URL | URL, required | `product.url` (no ref params) |
| Short Description | text, required | `product.description_short` |
| Category | dropdown, required | see mapping below |
| Pricing | dropdown, required | free -> Free, freemium -> Freemium, paid -> Paid, open source (`product.open_source` true) -> Open Source |
| Your Email | email, required | `submission.email` |
| Newsletter checkbox | optional | leave unchecked unless the user wants the newsletter |

Category options: Chat, Generative Art, Generative Video, Generative Code, Text-To-Speech, Search Engines, Productivity, Marketing, Design, Writing, Music, Research, Education, Finance, Healthcare, Legal, Sales, Customer Support, Other. Map `product.categories[0]` to the closest one. Dev tools -> Generative Code. Use "Other" only as a last resort.

## Steps
1. Open https://futuretools.io/submit-a-tool (the www URL redirects here).
2. Fill the fields in order using the map above.
3. Click **Submit Tool**. Screenshot the confirmation to `.launchkit/evidence/future-tools-matt-wolfe.png`.
4. `launchkit mark future-tools-matt-wolfe submitted --note "manual review, 75%+ rejected"`

## Make the listing perform
- Pick the category for the main job the tool does, not a broad one. Tools are browsed by category plus pricing filter, so the right pricing value matters too.
- The Top 20 list is hand-picked by Matt and can't be bought. Featured placements and sponsorships are sold separately and are not needed for a listing.
- Write the short description as a plain task statement ("Turns meeting recordings into action items"). It is matched against your homepage during review.

## Gotchas
- Rejected for: duplicate concepts, poor UX, not publicly launched, custom GPTs, unfiltered adult content, directories, newsletters or aggregators, scam signals, poor reviews.
- If rejected, wait at least a week before resubmitting, and only after a real change.
- Don't submit twice in a row. Duplicates hurt.

## After submitting
- No email is promised. Search futuretools.io for `product.name` after 1-2 weeks.
- Once live, fix wrong details with the **Suggest Changes** button on the listing page instead of resubmitting.
