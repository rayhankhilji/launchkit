---
id: starter-story
name: "Starter Story"
url: https://www.starterstory.com/share
category: Startup Database
mode: pitch
pricing: Free
login: "Starter Story account (sign up or log in on /share)"
captcha: unknown
backlink_required: no
review_time: "unknown; only selected stories are published"
verified: true
last_checked: 2026-10-12
---

# Starter Story

Founder interview site and newsletter. Stories focus on how a business started, grew, and makes money, with
numbers. The "Share your story" page at /share is the real entry point; it states there is no cost to be featured
and requires login or signup. This is a pitch, so draft it for the user and do not submit without approval.

## Before you start
- Pitch mode: draft the answers, show them to the user, and submit only if pitch mode is enabled and they approve.
- Starter Story favors businesses with real revenue or traction. If the profile has no revenue or users, tell the
  user the odds are low and suggest waiting.
- Login is required on /share. The user should sign in with their own account.

## Field map
The questionnaire sits behind login, so exact fields are unconfirmed. Prepare these answers:
| Likely prompt | Profile key / instruction |
|---|---|
| Your name, email | `founder.name`, `founder.email` |
| Business name and website | `product.name`, `product.url` |
| What does the business do | `product.description_medium` |
| How did you get the idea / start | `copy.launch_post_story` |
| Revenue, customers, team size | Only figures present in the profile (`company.team_size`, any revenue the user gave). Ask before sharing numbers. |
| Founder background | `founder.bio_short` |
| Photos / logo | `assets.logo_square`, a founder photo if the user provides one |

## Steps
1. Open https://www.starterstory.com/share.
2. Click the sign up or log in button and let the user authenticate.
3. Draft answers from the field map in plain first person. Save the draft to the queue notes.
4. Show the draft to the user. After approval, paste and submit. Otherwise `launchkit mark starter-story drafted`.

## Make the listing perform
- Lead with one specific number (monthly revenue, customers, months to first sale). Their headlines are built on numbers.
- Tell the origin story in order: problem, first version, first customer, what grew it. Keep it concrete.
- Name the tools and channels used. Readers come for tactics, and the editors pick stories that teach something.
- Mention mistakes and what changed. Honest detail reads better than polish.

## Gotchas
- Publishing is selective and timing is not stated. Do not promise the user a feature.
- Do not invent revenue or growth figures. Leave them out if the user has not given them.
- /share-your-story and /submit return 404; use /share.

## After submitting
- Mark `submitted` with a note on the date. If they reply with interview questions, draft answers for the user.
