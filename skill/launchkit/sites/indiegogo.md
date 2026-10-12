---
id: indiegogo
name: Indiegogo
url: https://www.indiegogo.com/en/creators/becomeacreator
category: Crowdfunding / Awards
mode: manual
pricing: Paid
login: Indiegogo account
captcha: reCAPTCHA on signup and login
backlink_required: no
review_time: Indiegogo reviews the campaign before launch and sends suggestions. Timing not published.
verified: true
last_checked: 2026-10-12
---

# Indiegogo

Reward-based crowdfunding with a pre-launch page and a pledge manager. The old /start-a-campaign link now redirects to the creator page. Setup is free, but successful campaigns pay fees.

## Before you start
- Fees: 5% platform fee plus payment processing of 3% + $0.20 per transaction (USD, EUR, GBP). Pledge manager and stretch pay are included.
- Indiegogo's own 5 steps: create a free account, submit your data (must follow the terms of use), publish a preview page to gather followers, launch with a timer after Indiegogo's review, then use the pledge manager to finish orders.
- Needed: a campaign video, images, perks with prices and delivery dates, a goal, ID and bank details.
- Optional: performance marketing by Indiegogo for 10% of ad revenue.

## Field map
Campaign setup is behind login. Fields below are from the creator page and help center and not confirmed in order.
| Site field | Profile key / instruction |
|---|---|
| Campaign title | `product.name` |
| Tagline | `product.tagline` |
| Category | map `product.categories`: Tech & Innovation categories for hardware or software tools |
| Card image | `assets.og_image` |
| Video / pitch video | `links.demo_video` |
| Story | `product.description_long`, `product.key_features`, `product.use_cases` |
| Perks (name, price, description, delivery date, shipping) | founder decides |
| Goal, currency and duration | founder decides |
| Team | `founder.name`, `founder.bio_short`, `founder.avatar` |
| Location | `company.city`, `company.country` |
| Identity and payout | founder only |

## Steps
1. Open https://www.indiegogo.com/en/creators/becomeacreator and https://www.indiegogo.com/en/info/fees. Confirm fees.
2. Explain the fees and the 5 steps. Ask the founder if they want a campaign.
3. If yes, draft the title, tagline, story and a perk list. Recommend publishing the preview page first.
4. The founder signs up (reCAPTCHA), builds the campaign and submits. Do not solve the CAPTCHA or create the account.

## Make the listing perform
- Publish the preview page weeks before launch and push the founder's audience to follow it. Followers get the launch notice.
- Indiegogo features campaigns on the homepage, in its newsletter and in a top banner at its discretion. It picks the best performing ones, so early funding matters most.
- Use the review hints Indiegogo sends before launch. Fix them before pressing launch.
- Keep perks simple: one early bird, one standard, one bundle.

## Gotchas
- Fees only apply to collected funds, but setup is still work for the founder.
- Physical perks need shipping costs worked out before launch.

## After submitting
- Log `needs-human` unless the founder confirms the campaign is live.
