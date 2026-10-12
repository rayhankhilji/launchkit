---
id: microsoft-store
name: "Microsoft Store"
url: https://storedeveloper.microsoft.com/
category: App Store / Marketplace
mode: manual
pricing: Free
login: email           # Microsoft account (MSA)
captcha: none
backlink_required: no
review_time: "up to 3 business days"
verified: true
last_checked: 2026-10-12
---

# Microsoft Store

The app store on Windows 10 and 11. Relevant for desktop apps (MSIX, MSI/EXE, Win32, Electron, PWAs). Not useful for a web-only SaaS unless the user wraps it as a PWA.

## Before you start
- Artifact: a Windows package (MSIX, or an MSI/EXE installer hosted on an HTTPS URL), or a PWA packaged via PWABuilder.
- Account: start at storedeveloper.microsoft.com, the only entry point for free onboarding. Individual accounts are free since the old $19 fee was waived; they require ID verification with a government ID and a selfie. Company accounts are also free in the new flow but need business verification. Individual can't be converted to Company later, so ask the user which one first.
- Assets: at least one screenshot at 1366x768 or larger (PNG, max 50 MB), 1:1 app tile icon 300x300, optional trailer.

## Field map

| Field in Partner Center | Limit / format | Fill with |
|---|---|---|
| App name (reserve) | text | `product.name` |
| Pricing and availability | Free / price, markets | map `product.pricing_model`: free or freemium -> Free (with in-app purchases if any), paid -> a price the user chooses |
| Category / subcategory | dropdown | closest to `product.categories[0]`, e.g. Business > Collaboration, Developer tools, Productivity |
| Age rating | IARC questionnaire | answer honestly; most tools get 3+ |
| Packages | upload or installer URL | the user's build |
| Description | up to 10,000 chars, plain text | `product.description_long` |
| What's new in this version | 1,500 chars | leave blank on first submission |
| Product features | up to 20 items, 200 chars each | `product.key_features` |
| Screenshots | PNG, 1366x768+ | `assets.screenshots` |
| Store logos | 1:1 300x300 | `assets.logo_square` |
| Short description | text | `product.description_short` |
| Search terms | up to 7 terms | `product.tags` |
| Website / support contact / privacy policy | URL | `product.url`, `founder.email`, privacy URL |
| Copyright | text | `company.legal_name` and year |
| Notes for certification | text | test login and steps |

## Steps
1. Manual mode. Don't sign up or submit. Suggest it in the wrap-up only if `product.platforms` includes Windows or the user has a desktop app.
2. If the user wants help: they open storedeveloper.microsoft.com, click **Get started for free**, pick Individual or Company and finish verification.
3. In Partner Center **Apps and games**, they click **New product**, reserve the name, then fill Pricing, Properties, Age ratings, Packages and Store listings. Prepare all listing text for them.
4. They click **Submit to the Store**.
5. `launchkit mark microsoft-store needs_human --note "Windows app, user submits in Partner Center"`

## Make the listing perform
- Only the first few lines of the description show before "more". Put the one-sentence pitch and who it's for there.
- Fill all 20 product features if you honestly have them; they render as a scannable list.
- Screenshots with short captions showing real tasks beat marketing graphics.
- Ask happy users to rate it in the Store; ratings weigh heavily in Store search.

## Gotchas
- Using any entry point other than storedeveloper.microsoft.com may show the legacy flow with the fee.
- Win32 installers must be silent-install capable and served from a stable HTTPS URL.

## After submitting
- Certification takes up to 3 business days; the listing is usually visible about 15 minutes after it passes.
