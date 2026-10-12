---
id: betafamily
name: "BetaFamily"
url: https://betafamily.com/signup?role=company
category: Beta Testing / Feedback
mode: form
pricing: Freemium
login: email           # email+password or Google
captcha: unknown
backlink_required: no
review_time: "instant (test goes live after setup; paid reports arrive as testers finish)"
verified: true
last_checked: 2026-10-12
---

# BetaFamily

Beta Family (Stockholm, since 2010) is a crowdtesting site for iOS and Android apps with 80,000+ testers. You create a
test with tasks and questions, share your own test link for free, and can buy written reports from their testers.
Only useful for products with a mobile app build (App Store, TestFlight, Google Play or another beta link).

## Before you start
- Skip (`skipped`, "not a fit: no mobile app") unless `product.platforms` includes ios or android.
- Need an install link: App Store URL, TestFlight public link (see `testflight-public-link`), Google Play or a Play
  testing link. No jailbroken or rooted builds.
- Account: company signup with name, company name, email, password (8+ chars), or "Sign up with Google". Use
  `submission.preferred_login` if Google, otherwise email with a browser-generated password.
- Pricing (seen on /pricing): your own testers $0 and unlimited; Beta Family testers $19 per report, paid by card
  before testers start; Pro $49/month for level 4-5 testers only. With `budget_usd` 0, use only the free own-tester
  test and don't order reports.

## Field map

Signup form:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| I want to test my app / I want to be a tester | toggle | "I want to test my app" |
| Your name | text | `founder.name` |
| Company name | text | `company.legal_name`, else `product.name` |
| Email | email | `submission.email` |
| Password | 8+ chars | browser password manager |

Test setup (behind login, field names unconfirmed; from their how-it-works and FAQ):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| App name / icon | text / image | `product.name`, `assets.logo_square` |
| Platform | iOS / Android | from `product.platforms` (one test per platform if both) |
| App link | URL | App Store / TestFlight / Play link |
| Public or private test | choice | Public (shows on your app testing page and Browse tests, indexed by search engines) |
| Test description | text | 2-4 sentences from `product.description_medium`: what the app does, what you want tested |
| Tasks | list | start from their example tasks, then 3-5 tasks built from `product.key_features` |
| Questions | 6 types (text, scale, single, multiple, task success) | rating of first impression, "what confused you", "would you use it weekly", task success per task |
| Tester filters (paid only) | age, gender, country, device | from `product.target_audience`; skip unless budget allows |

## Steps
1. Open https://betafamily.com/signup?role=company, keep "I want to test my app" selected, sign up.
2. Create the app and a new test. Fill description, tasks and questions as above. Choose Public.
3. Skip "Order test reports" unless the user approved spending (then it's `needs_human` for card payment).
4. Publish the test and copy the test invite link. Screenshot to `.launchkit/evidence/betafamily.png`.
5. `launchkit mark betafamily submitted --note "public test live, own-tester link: <url>"`

## Make the listing perform
- Public tests appear under Browse tests, where new testers pick a free test to earn their first level. Free tests
  do get picked up there, so a clear, short task list gets you reports at $0.
- Write tasks like the good listings on /tests: numbered steps, then "Please tell me" questions. Ask for device and
  OS version when something breaks.
- Keep the test to 10-15 minutes. Long free tests get skipped.
- Share the own-tester link in your launch posts (e.g. r/alphaandbetausers) so those testers write structured reports.

## Gotchas
- Ordered reports are charged up front by card. Never order with budget 0.
- Testers don't rate or share the app unless the test needs it, so this won't bring store reviews.

## After submitting
- Reports show up in the dashboard with an AI summary. Approve good reports (that's how testers get rated).
- Listing lives under your app testing page and https://betafamily.com/tests while the test is open.
