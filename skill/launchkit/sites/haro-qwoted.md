---
id: haro-qwoted
name: "HARO / Qwoted"
url: https://www.qwoted.com/for-smb-personal-brands/
category: Press / Media
mode: form
pricing: Freemium
login: email
captcha: unknown
backlink_required: no
review_time: "depends on each journalist request"
verified: true
last_checked: 2026-10-12
---

# HARO / Qwoted

Two source-request services. Journalists post requests, founders reply, and good replies become quotes and links in articles. Qwoted is a profile-based network; HARO is three free daily emails (now run by Featured, see `featured-com`).

## Before you start
- Qwoted plans (https://www.qwoted.com/pricing/): Basic free (2 pitches a month, 2-hour delay on new requests, listed in the expert database), Pro $149/mo (35 pitches, no delay), Teams custom. Use Basic.
- HARO: free email subscription at https://www.helpareporter.com/sources. Needs `submission.inbox_access` to read the queries; otherwise the user reads them.
- Create accounts only if `submission.allow_account_creation` is true. Every reply goes out under the founder's name and needs approval.

## Field map
Qwoted expert sign-up (seen):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First Name | required | first part of `founder.name` |
| Last Name | required | rest of `founder.name` |
| Work Email | required, work domain preferred | `founder.email` |
| Signup Code | optional | leave blank |

Qwoted profile (behind login, not confirmed): headshot `founder.avatar`, title `founder.role`, company `product.name`, bio `founder.bio_short`, expertise from `product.categories` and `product.tags`, links `founder.linkedin`, `product.url`.

HARO sign-up (seen): one email field -> `submission.email`.

## Steps
1. Open https://www.qwoted.com/for-smb-personal-brands/, fill the "Create your free expert account" form, submit, confirm the email if inbox access allows.
2. Fill the profile. Screenshot to `.launchkit/evidence/haro-qwoted.png`.
3. Open https://www.helpareporter.com/sources and subscribe `submission.email` if the user wants the daily emails.
4. Draft 1-2 replies to current requests that match the founder's expertise with `launchkit draft haro-qwoted -`.
5. `launchkit mark haro-qwoted submitted --note "Qwoted profile + HARO subscribed"`.

## Make the listing perform
- With only 2 Qwoted pitches a month on Basic, spend them on requests where the founder is an obvious source (their exact industry or customer).
- Reply in 100-200 words: direct answer first, one specific example or number, then a one-line bio with the product link. No attachments.
- A complete Qwoted profile matters because journalists also search the expert database and reach out directly.

## Gotchas
- Qwoted prefers work emails. A Gmail address may slow approval (unconfirmed).
- HARO emails arrive three times a day and requests close fast. Reply the same day or skip.

## After submitting
- Check the Qwoted dashboard and the HARO inbox weekly. Log any published quote in `links.press_kit`.
