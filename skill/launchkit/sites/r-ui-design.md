---
id: r-ui-design
name: "r/UI_Design"
url: https://www.reddit.com/r/UI_Design/submit
category: Reddit
mode: post
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "instant (manual mod removal possible)"
verified: true
last_checked: "2026-10-12"
---

# r/UI_Design

About 242k designers. Self-promotion is banned: "No freelance, business, agency, OR self-promotion", and the list includes apps, software, platforms and tools. What's allowed is a **Feedback Request** post with screenshots of your own UI, with no promotion in the images, title or comments. It's a fit only if the founder wants genuine design feedback.

## Before you start
- Need clear screenshots (`assets.screenshots`), and context: goals, tools used, target audience.
- Ask the user whether AI was used in any part of the design. If yes, the title must include "[AI]" and use the AI flair ("AI Feedback Request"). Fully AI-generated designs go only in the monthly "AI Designs" megathread.
- Reddit login (Google, Apple, or email/username). The form needs a login. Flairs below were read from recent posts.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | r/UI_Design |
| Post type | Images or Text with images | Images (1-5 screenshots of the screens you want feedback on) |
| Title | 300 chars | What the screen is and what feedback you want, e.g. "Onboarding flow for a budgeting app, is step 2 too dense?" Prefix "[AI]" if AI was involved. No product name pitch |
| Flair | picker | "Feedback Request", or "AI Feedback Request" with "[AI]" in the title |
| Body | text | Goal of the screen, who uses it (`product.target_audience`), tools used, 2-3 specific questions. No link, no sign-up ask |

## Steps
1. Open https://www.reddit.com/r/UI_Design/submit, choose **Images & Video**, upload the screenshots.
2. Write the title and body, pick the flair.
3. `launchkit draft r-ui-design -` with title, flair, body and the screenshot list, then `launchkit mark r-ui-design drafted`.
4. Only if `allow_social_posting` is true and the user approved: post, then `launchkit mark r-ui-design submitted --listing-url <url>`.

## Make the listing perform
- Posts that show a before/after or ask about one specific decision get the most useful comments.
- Keep all design updates in one post. Edit it rather than posting again.
- Don't expect sign-ups from here. The value is design critique.

## Gotchas
- Removed: portfolios and career questions (monthly megathread only), daily UI challenge posts, job offers, spec work, surveys, and links to tools, blogs or YouTube.
- Missing "[AI]" tag or flair on AI-assisted work gets the post removed.

## After submitting
- Thank people for specific critiques and say what you'll change. Don't link the product in replies.
