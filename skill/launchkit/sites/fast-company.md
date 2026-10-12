---
id: fast-company
name: "Fast Company"
url: https://www.fastcompany.com/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "contributions reviewed about weekly; no reply after 1 week means no"
verified: true
last_checked: 2026-10-12
---

# Fast Company

National US business magazine covering innovation, tech, design, leadership and work life. There is no public tips form. Coverage comes from pitching the right reporter, a contributed article for the Work Life section, or its award programmes.

## Before you start
- Decide the route with the user:
  1. Reporter pitch: needs real news (funding, notable traction, a design or tech story with a broader trend).
  2. Contributed article: a finished 600-900 word op-ed by the founder for Work Life. Unpaid.
  3. Awards (Most Innovative Companies, World Changing Ideas): applications with deadlines and entry rules. Check the current fee on the application page; treat as paid unless it says otherwise and mark `needs_human`.
- Don't use acarroll@mansueto.com (press for Fast Company itself) or care@fastcompany.com (subscriptions).

## Field map

| Route | Where | Fill with |
|---|---|---|
| Reporter pitch | reporter's email or X/LinkedIn from their author page or the masthead | subject: the news in one line. Body: `copy.press_pitch` cut to under 150 words, `product.url`, `links.press_kit`, `founder.name`, `founder.email` |
| Work Life contribution | submissions@fastcompany.com | complete unpublished article, 600-900 words, written by `founder.name` from `copy.launch_post_story` ideas. No pitches, outlines, press releases or interview offers |
| Awards | fastcompany.com award pages | business decision, `needs_human` |

## Steps
1. Search fastcompany.com for 2-3 recent articles about `product.categories[0]` or a named competitor from `product.competitors_alternatives`. Note the reporters.
2. Write one pitch per reporter, each referencing their recent piece in one line. Save with `launchkit draft fast-company -` and mark `drafted`.
3. For a contribution, draft the full article in the user's voice, run `launchkit lint-copy`, and save it as a second draft.
4. Never send email without explicit approval. Mark `submitted` only after the user confirms it was sent.

## Make the listing perform
- Fast Company likes trend stories. Frame the product as evidence of a shift ("small teams are replacing X with Y"), backed by a number from the profile.
- Design-led products fit Co.Design; workplace tools fit Work Life; consumer tech fits Tech.
- For the contribution route their help article says: op-ed, not content marketing; drawing on business experience is fine, heavy self-promotion gets it rejected. Mention the product at most once.
- Generative AI may only be used in contributed articles if an editor directs it. The founder must write or heavily rewrite the draft. Tell the user this.

## Gotchas
- Contributions: no response within a week means not selected. Following up does not help.
- Only send to one reporter at a time per angle.

## After submitting
- Track replies in the user's inbox. If an article runs, add it to `links.press_kit`.
