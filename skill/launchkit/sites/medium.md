---
id: medium
name: "Medium"
url: https://medium.com/new-story
category: Community
mode: post
pricing: Free
login: email            # email magic link, Google, Apple, Facebook or X
captcha: unknown        # medium.com sits behind Cloudflare bot checks
backlink_required: no
review_time: "instant for your own profile; publications review submissions (days)"
verified: true
last_checked: 2026-10-12
---

# Medium

Blogging platform. Write the launch story ("why I built X and what I learned") on the founder's profile and submit it to a
publication with an audience. The Startup (medium.com/swlh) is the classic choice for founder stories; its current
submission instructions sit in a pinned post on the publication page and could not be read without login (unconfirmed).

## Before you start
- Account: the founder's own. Publications only accept from writers who follow them ("Following" tab) or approved writers ("Contributing").
- Medium's distribution guidelines: stories must be human-written (no AI-generated text) to get General distribution or Boost,
  and must not read like a sales pitch. The draft is a starting point; the founder should rewrite it in their voice.
- Assets: a header image (1-2 `assets.screenshots` or a simple illustration), `product.url`, any real numbers from the profile.

## Field map (editor at /new-story)

| Field | Limit / format | Fill with |
|---|---|---|
| Title | H1, aim < 70 chars | Lesson-led, not product-led: "What I learned building <thing> for <audience>" |
| Subtitle | one line | One sentence on the problem; many publications require a subtitle |
| Body | rich text, 4-8 min read | From `copy.launch_post_story`: the problem in the user's words, what you tried, what you built (`product.key_features` woven in), one honest mistake, link to `product.url` once near the end |
| Images | inline, with captions | Real product screenshots; some publications require at least one image |
| Topics | up to 5 | e.g. Startup, Entrepreneurship, SaaS, Product Management, plus one from `product.categories` |
| Publication | Submit to publication | The Startup or a niche one (see Steps) |
| Meter my story (Partner Program) | toggle | Leave off unless the user is in the Partner Program; paywalled stories reach fewer non-members |

## Steps
1. Open https://medium.com/new-story. If logged out, stop and ask the user to sign in.
2. Draft title, subtitle, body, topics and the target publication(s); save with `launchkit draft medium -` and mark `drafted`.
3. Only if `allow_social_posting` is true and the user approved: paste into the editor, add images, click **Publish**,
   set topics, then (to submit) open the story > **...** > **Edit story** > **...** > **Submit to publication**, pick it
   under Following/Contributing, click **Send for review**. Publications can require an image, subtitle, minimum read time, matching topic or paywall.
4. `launchkit mark medium submitted --listing-url <story url> --note "submitted to <publication>"`.

## Make the listing perform
- Boost (human curators, 7 days a week) picks stories with first-hand experience, real value to the reader and no sales pitch.
  A founder lessons post qualifies; a feature announcement doesn't.
- Use Medium's list of publications accepting submissions (linked from the help center) to find a niche one for the product's field.
- Submit to one publication at a time and wait for a reply; many limit how many open submissions a writer can have.
- Share the story URL on X/LinkedIn the same day; external traffic counts too.

## Gotchas
- Don't publish the same text as the product's blog without setting the canonical link (story settings > Advanced).
- Some publications only accept drafts, others only published stories. Check their submission guidelines first.

## After submitting
- Check the publication's response in notifications; if declined, submit to the next one.
