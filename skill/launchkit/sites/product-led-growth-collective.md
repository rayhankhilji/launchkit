---
id: product-led-growth-collective
name: "Product-Led Growth Collective"
url: https://productled.com/community
category: Community
mode: post
pricing: Free
login: email           # email on productled.com, then a Slack invite
captcha: unknown
backlink_required: no
review_time: unknown (Slack invite arrives by email)
verified: true
last_checked: 2026-10-12
---

# Product-Led Growth Collective (ProductLed Slack)

ProductLed's free Slack community for people doing product-led growth. The page claims 21,000+ members, mostly SaaS founders, PMs and growth people. Members ask practical questions in channels like #ask-a-question. It's a place to learn and help, not a launch board. ProductLed's paid offers (growth plan, operators, academy) are separate and not needed.

## Before you start
- Only worth it if the product is SaaS or AI software with a self-serve signup, or serves PLG teams (analytics, onboarding, pricing tools).
- The join form asks only for an email: use `submission.email`. The Slack invite goes to that inbox, so the user may need to click it if `submission.inbox_access` is "none".
- The user must post from their own Slack account. You draft, they paste.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Email address (Join the Slack Community) | email | `submission.email` |
| Slack profile name / title | text | `founder.name`, title "`founder.role` at `product.name`" |
| Intro post | Slack message | 3-4 lines: who you are, what you build (`product.tagline`), one PLG question you have |
| Later posts | Slack message | answers and lessons, link only when it helps |

## Steps
1. Open the URL and click **Join the Slack Community**. Enter `submission.email` and submit.
2. Mark `needs_human` with "accept the ProductLed Slack invite in your inbox" unless you have inbox access.
3. Once in, read the channel list and any pinned rules (channel names past #ask-a-question are unconfirmed; check in Slack).
4. Draft an intro for the intro channel and one value-first post (a specific PLG lesson from building `product.name`, e.g. what changed when you moved the signup wall). Save with `launchkit draft product-led-growth-collective -`, mark `drafted`.
5. Only with `allow_social_posting` true and user approval: the user posts it, then `launchkit mark product-led-growth-collective submitted --listing-url <message link>`.

## Make the listing perform
- Posts that do well here are specific numbers and experiments: "We removed the credit card from trial and activation went from X to Y." Only use numbers from the profile.
- Answer 3-5 questions in #ask-a-question before posting about your own product. People click profiles of helpful members.
- If the product helps PLG teams, reply to threads asking for tool recommendations, disclose you built it, and name one competitor from `product.competitors_alternatives` fairly.

## Gotchas
- Dropping a launch link with no context reads as spam in Slack communities and can get the account removed.
- The productled.com homepage now pushes a free AI assessment and paid plans. Those are not the community.

## After submitting
- Reply to every thread reply within a day. Save the message link as the listing URL.
