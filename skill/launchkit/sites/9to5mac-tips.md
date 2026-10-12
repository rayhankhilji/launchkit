---
id: 9to5mac-tips
name: "9to5Mac (tips)"
url: https://9to5mac.com/contact/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "no reply unless they write about it"
verified: true
last_checked: 2026-10-12
---

# 9to5Mac (tips)

Large daily Apple news site (iPhone, Mac, iPad, Watch, visionOS). It covers apps when they are new, notable, or tied to a fresh Apple feature. Only worth a tip if the product ships on an Apple platform.

## Before you start
- Check `product.platforms` includes iOS, iPadOS, macOS, watchOS or visionOS. If not, mark `skipped` ("not a fit").
- Have `product.url`, an App Store link (put it in the pitch body), `links.press_kit` and 2-3 `assets.screenshots` hosted online. The form has no upload field.
- The page says submitting a tip gives permission to publish and syndicate it. Don't put anything in the tip that is under embargo unless the user accepts that.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tip | textarea, required | pitch from `copy.press_pitch`, rewritten for 9to5Mac (see below), plus App Store link and press kit link |
| Name | text, optional | `founder.name` |
| Email | email, optional | `founder.email` |

Email alternative: tips@9to5mac.com (same newsroom). Anonymous tips are allowed by leaving name and email blank, but for a product pitch always include them.

## Steps
1. Open https://9to5mac.com/contact/ and scroll past the masthead to the "Tip" form.
2. Write the tip: first line is the news ("Acme 2.0 adds Live Activities for ..."), then 2-3 sentences on what the app does, price from `product.pricing_details`, and links. Under 150 words.
3. `launchkit draft 9to5mac-tips -` with the tip text and mark `drafted`.
4. Only if `pitch` mode is on and the user approved this draft: paste into the form, fill Name and Email, click **Submit**, screenshot to `.launchkit/evidence/9to5mac-tips.png`, then `launchkit mark 9to5mac-tips submitted --note "tip form"`.

## Make the listing perform
- Tie the pitch to Apple news: support for the newest iOS/macOS feature (widgets, Live Activities, Apple Intelligence, App Intents, Control Center controls), a launch on the day of an Apple event, or a Mac app that fills a gap Apple left.
- Lead with what changed this week. "We launched" is weak; "first app to do X on Apple Watch" is the kind of line they quote.
- Offer a promo code or TestFlight link for the writer in the tip. Mention a review copy, don't attach files.
- Tuesday to Thursday mornings US Eastern avoid the weekend gap. Avoid Apple event days unless your news is about the event.
- After a tip, it's fine to follow a relevant 9to5Mac writer on X and reply when they post about your category. Don't DM the same pitch to several writers.

## Gotchas
- No acknowledgement email. Silence is the normal outcome.
- Don't re-send the same tip. Send a new one only when there is new news (major update, funding, milestone).
- The masthead lists ads@9to5mac.com for sponsored posts. That is paid, skip it.

## After submitting
- Search 9to5mac.com for `product.name` after 3-7 days. If covered, add the article to `links.press_kit` and the user's site "as seen in" list.
