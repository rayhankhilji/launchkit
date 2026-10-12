---
id: testflight-public-link
name: "TestFlight Public Link"
url: https://developer.apple.com/testflight/
category: Beta Testing / Feedback
mode: manual
pricing: Free
login: unknown         # Apple Account with Apple Developer Program membership
captcha: none
backlink_required: no
review_time: "TestFlight App Review for the first external build (time varies)"
verified: true
last_checked: 2026-10-12
---

# TestFlight Public Link

Not a directory. TestFlight is Apple's beta distribution: once a build passes TestFlight App Review you can create a
public link that anyone can open to install the beta, up to 10,000 external testers. The link is the artifact that other
beta sites (Betabound, Beta Family, Reddit) need for iOS apps. Manual: the agent advises, the user does it.

## Before you start
- Only relevant if `product.platforms` includes ios, ipados, macos, tvos or visionos.
- Needs an Apple Developer Program membership: 99 USD per year (Apple's enrollment page, 2026-10-12).
- Needs the app record in App Store Connect and an uploaded build from Xcode (or CI).
- Role needed to invite external testers: Account Holder, Admin or App Manager.

## What the user has to fill in App Store Connect

| Field | Where | Suggested content |
|---|---|---|
| Beta App Description | TestFlight > Test Information | 2-3 sentences from `product.description_medium` |
| Feedback Email | Test Information | `founder.email` |
| Marketing URL / Privacy Policy URL | Test Information | `product.url`, privacy page |
| Beta App Review contact + sign-in demo account | Test Information | founder contact; a demo login if the app needs one |
| What to Test | per build | 3-5 short lines from `product.key_features` |
| Group name | External Testing (+) | "Public beta" |
| Public link criteria | Create Public Link | Open to Anyone, or Filter by device and OS version |
| Tester limit | Set Limit | 1-10,000 |

## Steps (advise the user)
1. App Store Connect > Apps > the app > **TestFlight** tab. Fill Test Information (description, feedback email,
   review info). External sharing needs these.
2. Under External Testing click **+**, name the group, **Add Builds**, enter What to Test, **Submit Review**.
   Up to six builds per 24 hours can go to TestFlight review; the first build needs a full review.
3. After approval: group > Testers tab > **Create Public Link** > Open to Anyone (or Filter by Criteria) > set a
   tester limit > Confirm > copy the `testflight.apple.com/join/...` link.
4. Save the link to the profile notes for other sites. `launchkit mark testflight-public-link skipped --note "manual: user creates public link"`
   unless the user reports it done.

## Make it perform
- Filter by OS version if the app needs recent iOS. It cuts installs that will crash.
- Put the public link on the beta landing page and in Reddit/Betabound posts. App Store Connect shows how many people
  viewed the invite and installed from the link.
- Builds expire after 90 days. Ship a new build before then or testers lose access.
- Disable the link when you hit the tester limit so people see it's closed.

## Gotchas
- Each new version may need review again; later builds of the same version often skip full review.
- Testers install through the TestFlight app; tell them that in the post.

## After submitting
- Read feedback (screenshots, crash reports) in the TestFlight section of App Store Connect.
