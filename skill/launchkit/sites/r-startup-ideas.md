---
id: r-startup-ideas
name: "r/startup_ideas"
url: https://www.reddit.com/r/startup_ideas/submit
category: Reddit
mode: post
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "instant"
verified: true
last_checked: "2026-10-12"
---

# r/startup_ideas

About 346k members sharing and critiquing early ideas. Text posts only, no flair. The sidebar says it is "not the place to promote your company or product". Discussing your startup is fine, but posts that are "more promotion than anything else" get removed. It suits an idea-stage or just-launched product when the founder wants honest feedback.

## Before you start
- Frame the post as an idea or problem to discuss, not a launch. Best for products in `product.status` idea, beta or just launched.
- No login-free view of the submit form, so field details are from the subreddit settings (text-only, no flair).
- Reddit login (Google, Apple, or email/username).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | r/startup_ideas (shown as r/Startup_Ideas) |
| Post type | Text only | Text |
| Title | 300 chars | The problem or idea as a plain statement or question, e.g. "Booking tool for solo dog groomers: would you pay $10/month?" |
| Flair | none | Not enabled |
| Body | 40,000 chars | Problem (in the user's words), who has it (`product.target_audience`), how the product solves it, what's built so far, 1-2 specific questions. Link only at the end, optional |

## Steps
1. Open https://www.reddit.com/r/startup_ideas/submit and log in if asked.
2. Write the text post. Put the product link last, as "if you want to see it", or leave it out.
3. `launchkit draft r-startup-ideas -` with title and body, then `launchkit mark r-startup-ideas drafted`.
4. Only if `allow_social_posting` is true and the user approved: post, then `launchkit mark r-startup-ideas submitted --listing-url <url>`.

## Make the listing perform
- The feed is full of vague "is this a good idea?" posts that get 0-1 upvotes. Specifics stand out: price, target user, what you already tried.
- Ask questions people can answer from experience ("How do you handle no-shows today?").
- Reply to every critique. The useful output here is feedback, not traffic.

## Gotchas
- Mods are light-touch, but obvious ads, investment solicitations and "partners wanted" posts sit at 0 points or get removed.
- Text only: you can't make an image or link post. Put screenshots in a comment as links if needed.

## After submitting
- Write down useful feedback in the launch notes for the user.
