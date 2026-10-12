---
id: saas-awards
name: SaaS Awards
url: https://www.cloud-awards.com/software-as-a-service-awards/
category: Crowdfunding / Awards
mode: manual
pricing: Paid
login: none, entry is a multi-step Zoho web form with payment
captcha: unknown, final step not reached
backlink_required: no (winners get optional badge packs)
review_time: Shortlist, then finalists, then winners announced months after the entry close (program closes end of May)
verified: true
last_checked: 2026-10-12
---

# SaaS Awards

Run by the Cloud Awards team. A paid awards program for SaaS products with many categories. The 2027 program is open for early entry and closes at the end of May. The founder must approve the fee.

## Before you start
- Fees (early entry): Single Category $595, Unlimited Categories $695, Success Suite $1,295 (adds promotion help). Late entries add a fee.
- You must download the entry form document from the site, fill it in, and upload it in the web form. Write it before you start.
- Pick categories first. Options include Best SaaS Newcomer (launched in the last few years), Best SaaS for SMBs, Best Enterprise-Level SaaS, Best AI-Powered SaaS, Best SaaS Productivity Solution, Best IT and DevOps SaaS, Best Sales, Marketing or CRM SaaS, Best Cybersecurity SaaS, Best BI or Analytics SaaS, Best B2C SaaS, and industry categories (healthcare, legal, manufacturing and more). UX/UI has its own form.

## Field map
Form steps seen on the live Zoho form: Entry Type, Nomination, Category Selection, Contact details, Payment.
| Site field | Profile key / instruction |
|---|---|
| Entry type (Single / Unlimited / Success Suite) | founder choice; default Single unless entering 2+ categories |
| Organisation name | `company.legal_name` |
| Product name | `product.name` |
| Website | `product.url` |
| Category selection | map `product.categories`; AI products to Best AI-Powered SaaS; launched recently to Best SaaS Newcomer |
| Completed entry form upload | the downloaded document, filled with `product.description_long`, `product.key_features`, `product.use_cases`, `product.target_audience` |
| Contact name, email, phone | `founder.name`, `founder.email` |
| Address (trophy shipping) | shipping address from the founder |
| Payment | founder pays; never enter payment details |

## Steps
1. Open https://www.cloud-awards.com/software-as-a-service-awards/ and check the current deadline and fee table.
2. Recommend categories and the entry type with the exact cost. Ask the founder to approve.
3. Download the entry form document and draft answers from the profile. Use only facts from the profile and founder.
4. Hand off: the founder opens "Enter Now", goes through the Zoho steps, uploads the document and pays.

## Make the listing perform
- Judges score the written entry. Give concrete facts per question: what it does, who uses it, what changed for them. No hype words.
- Newcomer and niche industry categories have fewer entries than broad ones.
- Unlimited Categories costs $100 more than Single, so it pays off if entering 2 or more.
- Enter early. Early entry is cheaper and gets the full judging window.

## Gotchas
- The fee is per entry, and shortlist and finalist status do not refund it.
- Trophies ship to the address given. Check it.
- The same company runs the Cloud Awards with separate deadlines (next one Oct 23, 2026). Don't mix them up.

## After submitting
- Log `submitted` only once the founder confirms payment. Note the categories.
