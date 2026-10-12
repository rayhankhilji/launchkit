---
id: slashdot
name: "Slashdot"
url: https://slashdot.org/submission
category: Community
mode: post
pricing: Free
login: email           # Slashdot account required (username + password)
captcha: turnstile     # Cloudflare check on the whole site
backlink_required: no
review_time: unknown (editors pick a few stories a day; most submissions are never posted)
verified: true
last_checked: 2026-10-12
---

# Slashdot

"News for nerds." Editors pick reader-submitted stories for the front page, and unpicked ones sit in the Firehose where readers vote. A posted story can send a burst of technical readers. Product announcements rarely get picked unless there is real news: open source release, a technical finding, data, a privacy or security angle.

## Before you start
- The submission page says: "You must be logged in to submit stories. Once logged in, you can still post anonymously." The user needs a Slashdot account (Sign up at the top right). Do not create it for them unless `submission.allow_account_creation` is true.
- Cloudflare blocks headless browsers here. Use the normal Chrome window; if a challenge appears, stop and mark `needs_human`.
- Have a news angle ready, plus an outside source (blog post, GitHub release, press coverage) to link. Editors prefer linking to a write-up over a homepage.

## Field map

Fields below are from Slashdot's long-standing submission form; the form only renders after login, so they were not re-confirmed on 2026-10-12.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Title / Headline | short text | plain news headline, sentence case, no product slogan (e.g. "Open source tool turns Figma files into React") |
| Source URL | URL | the write-up: `links.changelog`, a blog post, or `product.repo_url`; else `product.url` |
| Story / Intro | text with basic HTML | 80-150 words: what happened, why it matters to technical readers, one quote from the source in `<i>` |
| Topic | dropdown | Open Source, Software, Programming, AI, Security, Hardware, etc. closest to `product.categories[0]` |
| Post anonymously | checkbox | leave unchecked; post under the user's name |

## Steps
1. Open https://slashdot.org/submission in Chrome. If shown "You must be logged in", stop and ask the user to log in (or mark `needs_human`).
2. Once logged in, fill the form from the field map. Write the intro in Slashdot style: neutral, third person, quote the source.
3. Save it with `launchkit draft slashdot -` and mark `drafted`.
4. Only with `allow_social_posting` true and user approval: click **Submit**, then `launchkit mark slashdot submitted --listing-url <firehose url>`.

## Make the listing perform
- Lead with the technical or social angle, not the business one. "Developer reverse-engineers X" style gets picked; "Startup launches Y" does not.
- Open source, Linux, privacy, security and big-tech criticism are the topics this audience cares about. If `product.open_source` is true, say so in the first sentence and link the repo.
- Readers are blunt and skeptical. Expect comments on pricing and lock-in; don't argue.

## Gotchas
- Submitting the same story repeatedly or from several accounts gets it ignored.
- "Thought Leadership" in the nav is paid content. Not this.

## After submitting
- Check the Firehose for your story's status. If posted, the user can reply to comments; a few honest technical answers help more than defending the product.
