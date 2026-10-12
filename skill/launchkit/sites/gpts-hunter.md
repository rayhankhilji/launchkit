---
id: gpts-hunter
name: "GPTs Hunter"
url: https://www.gptshunter.com/submit-gpt
category: AI Directory
mode: form
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# GPTs Hunter

A directory and analytics site for custom GPTs from the OpenAI GPT Store (it tracks 1M+ GPTs with categories, conversation counts and ratings). Only relevant if the user has a published public GPT, usually from `openai-gpt-store`. The submit form is two fields and free.

## Before you start
- Artifact: a public GPT link (`https://chatgpt.com/g/g-...`). If the user has no GPT, mark `skipped` ("no custom GPT").
- No account. The site sits behind Cloudflare; a "verify you are human" page can appear. Don't try to get past it automatically. If it blocks the page, mark `needs_human`.
- Content rule from the form: no politics, pornography or violence.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Email | email | `submission.email` |
| Links | textarea, one URL per line | the GPT store URL(s); one per line if the user has several GPTs |

## Steps
1. Search GPTs Hunter for the GPT name. GPTs found in the store are often indexed already; if it's there, mark `live` with the page URL and stop.
2. Open https://www.gptshunter.com/submit-gpt (header link **Submit**).
3. Enter `submission.email` and the GPT link(s). Click **Submit**.
4. Screenshot to `.launchkit/evidence/gpts-hunter.png`.
5. `launchkit mark gpts-hunter submitted --note "GPT link submitted"`

## Make the listing perform
- The listing data comes from the GPT itself: name, description, conversation starters, category and conversation count. Improve those in the GPT builder before submitting.
- Their lists sort by conversations and ratings, so early usage matters more than anything you type here. Link the GPT from the product site and launch posts.
- The "Promote" link and "Website Promotion Services" sponsor box are paid; skip at budget 0.

## Gotchas
- Only GPT store links work. A product homepage URL in the Links box will be ignored.
- The form gives no clear status tracking. Don't submit the same link twice.

## After submitting
- Search the GPT name after a few days. When it has a page, mark `live` with that URL.
