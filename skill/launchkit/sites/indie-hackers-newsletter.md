---
id: indie-hackers-newsletter
name: "Indie Hackers Newsletter"
url: https://www.indiehackers.com/
category: Newsletter
mode: pitch
pricing: Free
login: google            # "Continue with Google" or email + password
captcha: unknown
backlink_required: no
review_time: "weekly; picked from what the community upvotes"
verified: true
last_checked: 2026-10-12
---

# Indie Hackers Newsletter

The Indie Hackers newsletter compiles "the top interviews, posts, and articles for the week ... as determined by what the community is upvoting" (from their FAQ). There's no pitch address. You get in by writing a post that the IH community upvotes, and you can also list the product in the IH Products database.

## Before you start
- Account: indiehackers.com/sign-up, Google (`submission.preferred_login`) or email.
- Posting on IH is `post` mode behaviour: draft the post, and only publish if `allow_social_posting` is true and the user approved the draft.
- The product page needs revenue to be useful: IH shows "self-reported revenue" per product (can be $0).

## Field map

Two pieces. The products form is behind login (/products/new redirects to sign-in), so its fields are unconfirmed. Typical fields below.

| Field | Format | Fill with |
|---|---|---|
| Post title | text | a story or lesson title, e.g. "How I got my first 50 users for X with Y", sentence case |
| Post body | Markdown | from `copy.launch_post_story`: the problem, what you built, numbers, what didn't work, a question for readers. Link at the end |
| Product name (unconfirmed) | text | `product.name` |
| Tagline (unconfirmed) | short | `product.tagline` |
| Website (unconfirmed) | URL | `product.url` |
| Monthly revenue (unconfirmed) | number | only what the founder confirms; else leave blank or $0 |
| Business model / category | select | map `company.business_model` and `product.categories[0]` |

## Steps
1. Sign in at https://www.indiehackers.com/sign-in.
2. Product: open https://www.indiehackers.com/products/new, fill it per the map and save. This is a form submission, so it's fine in `form`/`pitch` mode with user approval.
3. Post: write the story post, `launchkit draft indie-hackers-newsletter -`, mark `drafted`. Publish only with approval, then mark `submitted` with the post URL.

## Make the listing perform
- What gets upvoted on the front page (seen 2026-10-12): first-person posts with real numbers and a lesson ("150 cold emails, 0 sales..."), validation questions, and revenue milestones. Pure launch announcements get little traction.
- Post Tuesday to Thursday morning US time and reply to every comment in the first few hours; comments drive ranking.
- Linking your product page from the post builds the profile that IH case-study writers look at.

## Gotchas
- Posts that read like ads get downvoted or flagged. Keep the product link to one, at the end.
- Don't cross-post the same text you used on Reddit.

## After submitting
- Check "Top This Week" a few days later. The newsletter pulls from the week's top posts.
