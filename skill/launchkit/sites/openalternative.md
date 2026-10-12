---
id: openalternative
name: "OpenAlternative"
url: https://openalternative.co/submit
category: Dev / Open Source
mode: form
pricing: Free/Paid
login: github           # magic link email, Google or GitHub
captcha: unknown
backlink_required: no
review_time: "free queue can take weeks (unconfirmed); paid options are faster"
verified: true
last_checked: 2026-10-12
---

# OpenAlternative

A directory of open source alternatives to proprietary software, run by Piotr Kulpinski (about 100k monthly
visitors, 12k newsletter subscribers, ~800 listed projects). Each tool page is matched to the SaaS products it
replaces ("Notion alternatives", "n8n alternatives"), which is where most search traffic lands.

## Before you start
- Fit: only open source projects with a public repo on GitHub, GitLab, Codeberg, Bitbucket or Gitee. If
  `product.open_source` is false or `product.repo_url` is empty, mark `skipped` ("not open source").
- `product.competitors_alternatives` must name the proprietary products it replaces; that drives placement.
- Login: https://openalternative.co/auth/login?next=/submit offers "Send me a Magic Link", "Continue with Google"
  and "Continue with GitHub". Use GitHub so the maintainer link is obvious.
- The submit form sits behind login, so the field list below is unconfirmed. Check it against the live form.

## Field map (unconfirmed, verify on the form)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Website | URL | `product.url` |
| Repository | URL | `product.repo_url` |
| Tagline / short description | short text | `product.tagline` |
| Description | text | `product.description_medium` |
| Your name / email | text | `founder.name` / `submission.email` |
| Newsletter opt-in (if shown) | checkbox | leave unticked unless the user wants it |

## Steps
1. Sign in via GitHub at the login URL above.
2. Search the site for `product.name`. If listed, claim/verify it instead (verified listings get a 5% ranking bonus).
3. Open https://openalternative.co/submit, fill the fields per the map.
4. If a pricing step appears (expedited review / featured), pick the free option unless the budget allows it,
   then mark `needs_human` for the paid decision.
5. Submit, screenshot to `.launchkit/evidence/openalternative.png`.
6. `launchkit mark openalternative submitted --note "free queue"`

## Make the listing perform
- Ranking is a health score from the repo: stars and forks (weighted equally, adjusted for age), recent commit
  activity (inactivity is penalised exponentially), a boost for newer projects, and +5% for verified listings.
  Keep the repo active and verify the listing once it's live.
- Name the exact proprietary tools it replaces in the description ("open source alternative to Calendly"), since
  alternative pages are the main entry point.
- Make the repo README strong: screenshot, one-line install or Docker command, license. The listing pulls data from it.

## Gotchas
- Advertising is separate (https://openalternative.co/advertise: Silver $147/mo, Gold $297/mo, Platinum $597/mo).
  Skip at budget 0.
- Closed-source "open core" products with no usable public repo get rejected.

## After submitting
- Approved tools also appear in the project's GitHub README list. Check the Latest page or search by name, then
  `launchkit mark openalternative live --listing-url <url>`.
