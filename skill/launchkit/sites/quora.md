---
id: quora
name: "Quora"
url: https://www.quora.com/
category: Community
mode: post
pricing: Free
login: google          # also email, Facebook
captcha: unknown
backlink_required: no
review_time: instant (answers can be collapsed or removed later by moderation)
verified: true
last_checked: 2026-10-12
---

# Quora

Q&A site where old answers keep ranking in Google for years. The play is answering existing questions in your niche well, with a disclosed link to the product where it actually fits. Good for consumer and SMB products that people research with "what is the best X" questions.

## Before you start
- Quora shows a login wall on every page. Sign in with `submission.preferred_login` as the founder, with real name `founder.name`.
- Set up a credential first: Profile > Add credential > Employment, "`founder.role` at `product.name`". Quora shows it next to every answer, which is also the cleanest way to disclose affiliation.
- Pick 5-10 questions together with the user. The help center pages (policies) did not load from our browser on 2026-10-12, so the rules below are from Quora's long-standing public guidelines and are not re-confirmed.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Profile credential | short text | "`founder.role` at `product.name`" |
| Profile bio | text | `founder.bio_short` |
| Answer body | rich text, no hard limit seen | 150-400 words that answer the question fully on their own, built from `product.use_cases` and `copy.faq` |
| Link in answer | inline link | `product.url` with `?utm_source=quora`, once, near the end, with "(I built this)" |
| Images | inline | one `assets.screenshots[n]` only if it shows the answer |
| Spaces (optional) | posts | relevant Spaces accept posts; read each Space's rules first |

## Steps
1. Search Quora for queries from `product.tags` and `product.competitors_alternatives` ("best X for Y", "alternative to <competitor>"). Prefer questions with many followers and weak existing answers.
2. For each, draft an answer that solves the question without needing the link. Mention 2-3 options including competitors, then your product with disclosure.
3. Lint with `launchkit lint-copy -`, then save all answers in one draft: `launchkit draft quora -` with the question URLs. Mark `drafted`.
4. Only with `allow_social_posting` true and user approval: post at most 2-3 answers a day, then `launchkit mark quora submitted --listing-url <first answer url>`.

## Make the listing perform
- Old, high-traffic questions are where views come from. Check the question's follower count and whether it ranks in Google.
- First two lines decide whether readers expand the answer. Start with the direct answer, not "Great question".
- Answers that only list your product get downvoted or collapsed as spam. Comparisons that are honest about tradeoffs get upvoted.

## Gotchas
- Never post the same text on multiple questions. Quora detects duplicates and can ban the account.
- New accounts that post many links on day one are a spam signal. Answer a couple of questions with no link first.
- Quora+ and ads are paid. Skip.

## After submitting
- Check each answer a day later. If it shows as collapsed, edit it to add more substance and less product.
