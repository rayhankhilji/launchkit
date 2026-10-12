---
id: r-alphaandbetausers
name: "r/alphaandbetausers"
url: https://www.reddit.com/r/alphaandbetausers/submit
category: Beta Testing / Feedback
mode: post
pricing: Free
login: unknown         # Reddit account (email, Google or Apple)
captcha: none
backlink_required: no
review_time: "instant (Reddit spam filter may hold posts from new accounts)"
verified: true
last_checked: 2026-10-12
---

# r/alphaandbetausers

A subreddit (created 2014, about 11K members) where makers ask for early users and testers, and testers ask for things
to try. Posts get a few upvotes and a handful of real comments, so it's for feedback, not traffic. Treat this as a
**post**: draft, get the user's approval, then post from their account only if `allow_social_posting` is true.

## Before you start
- Needs the user's Reddit account. Older accounts with some karma are less likely to get caught by the spam filter.
- No posted rules widget was visible on the sub (checked 2026-10-12). Reddit-wide self-promotion norms still apply.
- Know what you want testers to do and how long it takes. Posts that ask for a specific action do best here.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | r/alphaandbetausers |
| Title | 300 chars | `[Platform, Stage] ` + a plain one-line ask. Platform from `product.platforms` (Web, iOS, Android, Mac...), stage from `product.status` (Alpha/Beta). E.g. "[Web, Beta] Need 5 freelancers to try a 30-second invoice tool" |
| Body | markdown | rewrite `copy.reddit_post` for this sub (see below) |
| Link | in body | `product.url?ref=reddit-alphabeta` at the end of the body |
| Flair | none required | skip |

## Steps
1. Write the draft: title in the `[Platform, Stage]` format the regulars use, body in first person.
2. Body outline (150-250 words): what you built and why in two sentences; who you need (specific role or setup);
   what to try, step by step, with the time it takes; 2-3 questions you want answered; any limits of the free/beta
   version; the link last. Offer to test their product in return.
3. `lk draft r-alphaandbetausers -` with title, body, target URL and suggested time. Mark `drafted`.
4. Only with approval and `allow_social_posting`: open the submit URL logged in, choose Text post, paste title and
   body, click **Post**. Screenshot to `.launchkit/evidence/r-alphaandbetausers.png`.
5. `launchkit mark r-alphaandbetausers submitted --note "<post url>"`

## Make the listing perform
- Recent posts that got replies were narrow asks ("Need 2 people who upload bank CSVs to QuickBooks") with a time
  estimate and concrete questions. Copy that pattern.
- Also leave a comment on the pinned "Drop your app below, and let's actually try each other's stuff" thread, which
  had 200+ comments. Try two or three other apps there and give real feedback; people return the favour.
- Post US morning on a weekday. The sub is slow, so a post stays on the front page for a day or more.
- Reply to every comment within a few hours. Thank people and ask a follow-up.

## Gotchas
- Don't cross-post the same text to r/roastmystartup or others. Rewrite per sub (docs/05).
- Link shorteners and brand-new accounts get auto-removed by Reddit filters.
- No AI-sounding copy. Follow skill/human-writing and run `launchkit lint-copy`.

## After submitting
- Check the post in a logged-out window to confirm it's visible. If not, it's in the spam filter: message the mods.
- Collect feedback into the user's notes; don't argue with critics.
