---
id: r-chatgpt
name: "r/ChatGPT"
url: https://www.reddit.com/r/ChatGPT/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "instant (AutoModerator or mods may remove it later)"
verified: true
last_checked: "2026-10-12"
---

# r/ChatGPT

About 11.7M members, mostly memes, screenshots and news. Rule 3: posts must be about ChatGPT or AI and may not just
advertise another LLM service; those go in the pinned weekly self-promotion megathread. A standalone launch post is
usually removed. The right place for a product is a comment in that megathread.

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- Fit: the product should use or extend ChatGPT/OpenAI, or be clearly about AI.
- Find the current weekly self-promotion thread in the pinned posts on https://www.reddit.com/r/ChatGPT/ (its title
  changes each week).
- Note: the mods were trying "Text Tuesdays" (text posts only on Tuesdays) when checked.

## Field map (megathread comment)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Comment box in the weekly self-promo thread | markdown | 2-4 sentences: `product.name`, what it does with ChatGPT, who it is for, `product.url`. Disclose you built it |

## Field map (standalone post, only if it is a real ChatGPT use case)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | what ChatGPT did, e.g. `I used the API to turn 3 years of journal entries into a searchable timeline` |
| Body | markdown editor | the use case and how it works, prompts or method, results; link at the end |
| Flair | picker | closest flair (seen: Use cases, Educational Purpose Only, Prompt engineering, Other) |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |


## Steps
1. Default to the megathread: open the pinned weekly self-promotion thread and draft a comment.
2. A standalone post only if the post is a genuine ChatGPT use case or technique with value without the link.
3. Save the draft: `launchkit draft r-chatgpt -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-chatgpt drafted`.
4. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/ChatGPT/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
5. `launchkit mark r-chatgpt submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-chatgpt.png`.

## Make the listing perform
- In the megathread, early comments get seen most. Comment soon after the new thread is posted.
- A short GIF or screenshot of the result helps standalone posts; plain promotion does not.

## Gotchas
- Posts mainly advertising another AI service are removed under rule 3. Repeated attempts risk a ban.

## After submitting
- Record the comment permalink as the listing URL.
