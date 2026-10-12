---
id: toolsforhumans
name: ToolsForHumans
url: https://www.toolsforhumans.ai/about
category: Software Review Site
mode: form
pricing: Free (editorial, suggestion by email only)
login: none
captcha: none
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# ToolsForHumans

Editorial AI tools site that reviews and compares software using user feedback and search demand data. There is no public submit form, pricing page, or paid listing. The only route is emailing the founder to suggest a tool for review, and inclusion is at their discretion.

## Before you start
- `/submit`, `/pricing` and `/advertise` show the generic homepage. Do not look for a form.
- The about and contact pages say: "Questions, corrections, or want to suggest a tool for review, email us at alec@toolsforhumans.ai."
- Sending email needs `submission.inbox_access` or the user. If you cannot send mail, mark `needs_human` with a ready-to-send draft.
- Best fit is AI tools with real users. Pre-launch products are unlikely to be reviewed.

## Field map

Email, not a form:

| Part of the email | Format | Fill with |
|---|---|---|
| To | email | alec@toolsforhumans.ai |
| From | email | `submission.email` |
| Subject | one line | "Tool suggestion: `product.name`, `product.tagline_short`" |
| Body line 1 | 1-2 sentences | `product.description_short` |
| Body: who uses it | 1 sentence | `product.target_audience`, `product.use_cases[0]` |
| Body: pricing | 1 line | `product.pricing_details` |
| Body: alternatives | 1 line | `product.competitors_alternatives` (they write comparison pages) |
| Links | URLs | `product.url`, `links.demo_video`, `links.pricing_page` |
| Sign-off | name | `founder.name`, `founder.role` |

## Steps
1. Search https://www.toolsforhumans.ai/ for `product.name`. If a review page exists, mark `live` with its URL.
2. Draft the email above in plain text, under 150 words, no attachments.
3. Send from the user's inbox if allowed, otherwise give the draft to the user.
4. `lk mark toolsforhumans submitted --note "suggested by email"` (or `needs_human` with "send the drafted email").

## Make the listing perform
- They rank tools on practitioner use and search trend. Mention real usage numbers or customers if the profile has them.
- Name 2-3 tools you compete with. Their "alternatives" and "best X" guides are where new tools get added.

## Gotchas
- Affiliate partnerships exist but they say they do not affect ratings. Do not offer payment.
- Only one email. No follow-up spam.

## After submitting
- No confirmation is expected. Check the alternatives pages for your competitors after a few weeks.
