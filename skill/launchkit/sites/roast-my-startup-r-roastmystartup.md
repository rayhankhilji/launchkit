---
id: roast-my-startup-r-roastmystartup
name: "Roast My Startup (r/roastmystartup)"
url: https://www.reddit.com/r/roastmystartup/submit
category: Beta Testing / Feedback
mode: post
pricing: Free
login: unknown         # Reddit account
captcha: none
backlink_required: no
review_time: "instant (mods remove rule breakers)"
verified: true
last_checked: 2026-10-12
---

# Roast My Startup (r/roastmystartup)

A small subreddit (created 2015, about 3.4K members) where founders post their product and ask for blunt criticism.
Good posts get 10-30 detailed comments. Treat as a **post**: draft it, get approval, post from the user's account only
if `allow_social_posting` is true.

## Before you start
- Rules from the sidebar (2026-10-12):
  1. No Product Hunt links, Vercel links, link-only posts or free subdomains. The product must be on its own domain.
     If `product.url` is on vercel.app, netlify.app, github.io or similar, mark `skipped` ("needs own domain").
  2. Don't report people for harsh roasts.
  3. Low effort is removed: reposts from other subs, two-sentence posts, or posts that only ask a question.
  4. AI-written posts are removed at mod discretion.
- So the post must be original, written in the founder's voice, and give enough detail to roast.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | r/roastmystartup |
| Title | 300 chars | plain sentence naming the product and the thing to roast, e.g. "Roast my landing page: Acme turns Figma files into React code". No clickbait |
| Body | markdown | rewritten from `copy.reddit_post` and `copy.maker_comment` (see below) |
| Link | in body | `product.url` on its own domain, near the end |
| Flair | not required | skip |

## Steps
1. Draft body (200-350 words): what it does in one sentence; who it's for (`product.target_audience`); pricing from
   `product.pricing_details`; what you've tried and what's not working (signups, conversion, positioning); 2-3
   specific things to roast (landing page copy, onboarding, pricing); the link.
2. Lint with `launchkit lint-copy -` and read it for anything that sounds machine-written. Rule 4 is enforced.
3. `lk draft roast-my-startup-r-roastmystartup -` with title, body and best time. Mark `drafted`.
4. With approval and `allow_social_posting`: open the submit URL, Text post, paste, **Post**. Screenshot to
   `.launchkit/evidence/roast-my-startup-r-roastmystartup.png`.
5. `launchkit mark roast-my-startup-r-roastmystartup submitted --note "<post url>"`

## Make the listing perform
- Posts that get traction name one doubt plainly ("people already have maps apps, is check-in a reason to switch?").
  Lead with the weakest part of the product, not the pitch.
- Share an honest number if the profile has one (signups, conversion). Roasters respond to real data.
- Reply to every roast with thanks and what you'll change. Defensive replies kill the thread.
- Weekday US morning. Space it at least a day from the r/alphaandbetausers post.

## Gotchas
- Free subdomain or PH/Vercel link = instant removal.
- Questions-only posts ("is my idea good?") are removed under rule 3.
- Don't paste the same text used in other subs.

## After submitting
- Check visibility logged out. Summarise the useful criticism for the user and note copy fixes for other listings.
