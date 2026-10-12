---
id: kickstarter
name: Kickstarter
url: https://www.kickstarter.com/start
category: Crowdfunding / Awards
mode: manual
pricing: Paid
login: Kickstarter account
captcha: unknown, project setup is behind login
backlink_required: no
review_time: Kickstarter reviews each project against its rules before launch. Timing varies.
verified: true
last_checked: 2026-10-12
---

# Kickstarter

Reward-based, all-or-nothing crowdfunding. Best for hardware, games, design and creative projects. Plain SaaS rarely fits unless it is a creative tool with a clear thing to build.

## Before you start
- Fees: 5% platform fee plus payment processing of 3% + $0.30 per pledge (pledges under $10: 5% + $0.08). No fees if the project does not reach its goal.
- Rules: the project must create something new to share; be honest about the current state; prototype demos must show the real current state (no CGI or photorealistic renderings presented as real); apps and software must show a working prototype and fit a creative category.
- Excessive AI use is not allowed, and AI used in the project must be disclosed.
- No equity, crypto, NFTs or charity fundraising (charity is capped at 10% of funds).
- Needed: a project video, images, a rewards plan with prices and shipping, a funding goal, a bank account and ID for payouts.

## Field map
The /start page shows a 3-step setup (category, idea, location). The rest is behind login. Order after step 3 is from Kickstarter help and not confirmed.
| Site field | Profile key / instruction |
|---|---|
| Primary category and subcategory | map `product.categories`: hardware to Technology > Hardware or Gadgets, software tool to Technology > Software or Apps, games to Games |
| Short description of the idea | `product.tagline_short` |
| Country | `company.country` |
| Project title | `product.name` |
| Subtitle | `product.tagline` |
| Project image | `assets.og_image` |
| Project video | `links.demo_video` |
| Story / description | `product.description_long` plus `product.key_features` |
| Risks and challenges | ask the founder |
| Rewards (title, price, description, delivery date, shipping) | founder decides |
| Funding goal and duration | founder decides |
| Creator bio | `founder.bio_short` |
| Payment and identity | founder only |

## Steps
1. Open https://www.kickstarter.com/start and check that the product fits the category list.
2. Tell the founder about fees, the prototype rules and the AI disclosure rule. Ask if a campaign makes sense.
3. If yes, draft the title, subtitle, story and a list of reward tiers for the founder to price.
4. The founder logs in, completes setup, records the video, adds rewards and payment details, and submits for review.

## Make the listing perform
- Kickstarter's "Projects We Love" picks are hand chosen by staff. Projects with a clear video, honest prototype footage and a full story page are the ones picked.
- Most money comes in the first and last 48 hours. Build an email list before launch and send it on day one.
- Use the pre-launch page and get followers before going live. Followers get notified at launch.
- Keep the goal at the real minimum needed. Fast funding gets more visibility in Kickstarter's discovery pages.
- Show the actual product working in the first 10 seconds of the video.

## Gotchas
- All or nothing: missing the goal means no money collected.
- Renders shown as real products get projects suspended.
- Delivery dates in rewards are promises. Don't let the founder pick unrealistic dates.

## After submitting
- Log `needs-human`. A campaign needs the founder's assets and money decisions.
