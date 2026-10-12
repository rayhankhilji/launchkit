---
id: linkedin-post
name: "LinkedIn Post"
url: https://www.linkedin.com/feed/
category: Community
mode: post
pricing: Free
login: unknown          # the founder's personal LinkedIn (email or Google)
captcha: unknown
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# LinkedIn Post

A founder story post from the founder's personal profile. Works best for B2B products: the founder's network
(colleagues, past clients) is the audience, and personal profiles get far more reach than company pages.

## Before you start
- Limits (LinkedIn Help): posts up to 3,000 characters; drafts and scheduling are built into the composer.
  LinkedIn limits visibility of posts it thinks come from automation or excessive posting.
- Login: the founder's own account (`founder.linkedin`). Never log in for them; ask them to sign in.
- Needs: one strong image, a short native video (`links.demo_video` uploaded as a file), or a 4-8 page PDF carousel.

## Field map (Start a post)

| Field | Limit / format | Fill with |
|---|---|---|
| Post text, first 2 lines | ~210 chars show before "...see more" | A specific hook from the founder's experience in `copy.launch_post_story` ("I spent 3 years doing X by hand.") |
| Post body | 3,000 chars total | Short paragraphs: the problem, what `product.name` does, who it's for (`product.target_audience`), one honest lesson, a question |
| Link | URL | `product.url`. Put it at the end of the post or in the first comment (see below) |
| Media | image / video / document | Demo video or 1-2 screenshots; a PDF carousel of the story works well |
| Hashtags | 3 max | e.g. `#buildinpublic`, `#saas`, one industry tag |
| Mentions | @ | Co-founders and the company page (`links.linkedin`). Only tag people who actually helped |

## Steps
1. Open https://www.linkedin.com/feed/. If logged out, stop and ask the user to sign in.
2. Draft the post following skill/human-writing, save with `launchkit draft linkedin-post -` (text, media, first comment,
   time) and mark `drafted`.
3. Only if `allow_social_posting` is true and the user approved: click **Start a post**, paste text, add media, choose
   "Anyone", click **Post** (or the clock icon to schedule).
4. Copy the post link (... > Copy link to post), `launchkit mark linkedin-post submitted --listing-url <url>`.

## Make the listing perform
- Tuesday to Thursday, 8-10am in the founder's main audience time zone.
- Many founders put the link in the first comment instead of the post body, believing external links reduce reach;
  either way, make sure the product is named in the text so people can search it.
- Personal, specific story over announcement. Numbers only if they're in the profile.
- Ask the company page to reshare an hour later, and have the founder reply to every comment in the first hour.

## Gotchas
- No engagement pods or "comment YES to get access" bait; LinkedIn flags it.
- Video must be uploaded natively; YouTube links get a small preview and less reach.

## After submitting
- Pin the post to the profile's Featured section. Update the founder headline with "Building <product.name>".
