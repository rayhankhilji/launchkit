---
id: stack-overflow-answers
name: "Stack Overflow (answers)"
url: https://stackoverflow.com/
category: Community
mode: post
pricing: Free
login: google          # also GitHub, email
captcha: unknown
backlink_required: no
review_time: instant (posts can be flagged and deleted)
verified: true
last_checked: 2026-10-12
---

# Stack Overflow (answers)

Only for developer tools, libraries and APIs, and only where the product genuinely solves the question asked. Good answers rank in Google for years. Bad promotional answers get deleted fast and can get the account suspended.

## Before you start
- Read the help page "How to not be a spammer" (stackoverflow.com/help/promotion). Key rules seen on 2026-10-12: if you mention your product you **must disclose your affiliation in the post**; don't answer only questions where the answer is your product; links must support the answer, not replace it; show, don't tell.
- Stack Overflow bans posting AI-generated answers. The user must write or heavily rewrite and test every answer. You can find questions and outline a solution, nothing more.
- Skip this site entirely for non-developer products.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Profile "About me" | Markdown | `founder.bio_short` plus "I build `product.name`" and `product.url` (the profile is the right place for the link) |
| Answer body | Markdown, 30 chars minimum | full working solution with code first; product mention second |
| Disclosure | inline text | "Disclosure: I'm the `founder.role` of `product.name`." in the same answer |
| Link | inline | `links.docs` page that matches the question, not the homepage |

## Steps
1. Search questions by tags matching `product.tags` (e.g. `[nextjs] pdf export`). Sort by votes and look for unanswered or outdated ones.
2. For each candidate, list the question URL and a one-line outline of a real solution (with or without the product). Drop any where the product is not a natural answer.
3. Save the list with `launchkit draft stack-overflow-answers -`, mark `drafted`, and hand it to the user to write and post themselves.
4. If the user posts, `launchkit mark stack-overflow-answers submitted --listing-url <answer url>`.

## Make the listing perform
- Answer the general problem first (plain code, standard library), then add "If you'd rather not build this, `product.name` does it with one call" plus the disclosure. That passes review and still converts.
- Old high-view questions with outdated accepted answers are the best targets. A new, correct answer on a 2018 question can climb over time.
- Keep the product link to docs that show the exact snippet.

## Gotchas
- Posting the same answer on several questions is the fastest way to a spam flag. Write each one fresh.
- New accounts have limits on links and some actions until they earn reputation. Earn a little first by answering questions unrelated to the product.

## After submitting
- Watch for comments asking for clarification and edit the answer. A deleted answer means the product mention outweighed the help.
