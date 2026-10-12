---
id: webby-awards
name: Webby Awards
url: https://www.webbyawards.com/eligibility-and-guidelines/
category: Crowdfunding / Awards
mode: manual
pricing: Paid
login: Webby entry account (entries.webbyawards.com, email and password)
captcha: unknown, entry portal is behind login
backlink_required: no
review_time: Judged by the Academy. 31st Webbys winners announced April to May 2027.
verified: true
last_checked: 2026-10-12
---

# Webby Awards

Paid awards for internet work: websites, apps, software, video, social, podcasts, games, creators and AI. This is the 31st Webbys cycle. Entering costs real money, so the founder must approve the fee first.

## Before you start
- Early deadline: Friday, Oct 30, 2026. Later deadlines cost more.
- Fees per entry, early / final: Software $645 / $715, General single entry $525 / $595, Creator single $395 / $455, Social campaigns $595 / $645, Advertising campaign $765 / $835, Discounted $255 / $265, Student $105 / $115.
- Entries are non-refundable after Nov 4, 2026. A withdrawal before then costs $155.
- Ongoing work (sites, apps, software) must be live during judging. It does not need to have launched this season.
- Needed: the live URL, screenshots, a short description, credits, and for some categories a video.

## Field map
The entry portal needs a login, so field names are from the public guidelines. Confirm in the portal.
| Site field | Profile key / instruction |
|---|---|
| Entry type (Websites & Mobile Sites, Apps Software & Immersive, AI, Social, Video, Podcasts, Games, Creators, Advertising) | SaaS or web tool: Apps, Software & Immersive or Websites. AI product: AI. Pick from `product.platforms` |
| Category | closest Webby category to `product.categories` |
| Entry title | `product.name` |
| URL of the work | `product.url` |
| Description | `product.description_medium` (check the portal limit) |
| Screenshots / images | `assets.screenshots` |
| Video (if required) | `links.demo_video` |
| Credits (company and people) | `company.legal_name`, `founder.name`, team from the founder |
| Contact | `founder.email` |
| Payment | founder pays by card; never enter payment details |

## Steps
1. Open https://www.webbyawards.com/eligibility-and-guidelines/ and confirm the current deadline and fees.
2. Recommend one or two categories that match the product and give the exact cost.
3. Ask the founder to approve the fee. If not approved, log `skipped`.
4. If approved, draft the description and pick screenshots. The founder creates the account at entries.webbyawards.com, pastes the copy, uploads assets and pays.

## Make the listing perform
- Each category is judged against others in it. A narrow category the product clearly fits beats a crowded general one.
- Write the description for judges who will click the live URL. Say what it does and what is new about it in a few lines.
- Make the live site load fast and work without login if possible. Give judges a demo account if login is needed.
- Nominees go into the People's Voice public vote. Plan to ask users to vote when nominees are posted.
- Winners and honorees get badges and certificates they can use on their site.

## Gotchas
- Pay attention to the Nov 4 refund cutoff.
- The work must stay live through judging and the show. Don't enter a page that may be taken down.
- Each category is a separate fee.

## After submitting
- Log `submitted` only after the founder confirms payment and entry. Note the entry IDs and category.
