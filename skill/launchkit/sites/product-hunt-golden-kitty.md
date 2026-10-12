---
id: product-hunt-golden-kitty
name: Product Hunt Golden Kitty
url: https://www.producthunt.com/golden-kitty-awards
category: Crowdfunding / Awards
mode: manual
pricing: Free
login: Product Hunt account (for voting and nominating)
captcha: unknown
backlink_required: no
review_time: Annual. Nominations and voting run at the end of the award year, winners announced after.
verified: true
last_checked: 2026-10-12
---

# Product Hunt Golden Kitty

Product Hunt's yearly awards for products launched on Product Hunt that year. There is no form to submit a product. The way in is to launch on Product Hunt during the year, then get nominated and voted for. On 2026-10-12 the page still shows the 2024 edition as the latest, so the next round's dates are not posted.

## Before you start
- Eligibility: products launched on Product Hunt in that award year that follow Product Hunt's guidelines.
- The product must already have a Product Hunt launch. If not, see the `product-hunt` guide first.
- Winners are heavily influenced by the community vote. Product Hunt filters inauthentic or irregular voting.
- 2024 categories included Product of the Year, Developer Tools, Design Tools, No Code, Data and Data Security, Open Source, AI Model, AI Copilot, AI for Video, AI for Audio, AI Hardware, Finance Tech, Mobile App, Web3 and Crypto, Personal Productivity, Community and Social, Bootstrapped and Small Teams, and Maker of the Year. Categories change each year.

## Field map
No submission form. When nominations open, the flow is a nomination per category on the awards page.
| Site field | Profile key / instruction |
|---|---|
| Category | pick the closest from the current list using `product.categories` and `product.open_source` |
| Product (search for the launched product) | `product.name`, using the Product Hunt launch URL from the run log |
| Nominator login | founder's or a user's Product Hunt account |

## Steps
1. Open https://www.producthunt.com/golden-kitty-awards and check if nominations are open for the current year.
2. If not open, add a wrap-up note with the link and the eligibility rule. Log `needs-human`.
3. If open, tell the founder which category fits best.
4. The founder (and their users) nominate and vote with their own accounts. Do not vote or nominate from the agent.

## Make the listing perform
- A strong launch day during the year is the base. Products with many real upvotes and comments get nominated more.
- Pick a niche category. Bootstrapped and Small Teams or a specific tool category is easier than Product of the Year.
- Ask real users to vote once voting opens. Do not ask for votes in bulk or trade votes. Product Hunt removes fake votes.
- Open source products should check if there is an Open Source category that year.

## Gotchas
- Launches from earlier years are not eligible.
- Award timing changes year to year. Check the help collection: https://help.producthunt.com/en/collections/3784539-golden-kitty-awards

## After submitting
- Log `needs-human`. The founder runs nominations and voting.
