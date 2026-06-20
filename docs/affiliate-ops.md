# Affiliate Ops Prompt Library

Short description: Affiliate launch arsenal, referral enablement, white-label tools, and operational workflows.
Source JSON: `data/flash-ui-prompts/affiliate-ops-prompts.json`
Count: 35

## Quick Index
- [Bank Connection Education Page](#bank-connection-education-page)
- [Not Ready Yet / Declined Lead Nurture Page](#not-ready-yet-declined-lead-nurture-page)
- [CPA Referral Partner Page](#cpa-referral-partner-page)
- [Referral Partner Kit Generator](#referral-partner-kit-generator)
- [Document Checklist Generator](#document-checklist-generator)
- [Funding Route Matcher](#funding-route-matcher)
- [Deal Submission QA Tool](#deal-submission-qa-tool)
- [Compliance Copy Checker](#compliance-copy-checker)
- [Applicant Follow-Up Copilot](#applicant-follow-up-copilot)
- [UTM Campaign Builder for Affiliates](#utm-campaign-builder-for-affiliates)
- [Partner Welcome Kit Generator](#partner-welcome-kit-generator)
- [White-Label Funding FAQ Page Builder](#white-label-funding-faq-page-builder)
- [Local SEO Funding Page Generator](#local-seo-funding-page-generator)
- [White-Label Resource Marketplace](#white-label-resource-marketplace)
- [Embed Code Generator](#embed-code-generator)
- [Partner Link Generator](#partner-link-generator)
- [Lead Quality Grader](#lead-quality-grader)
- [Applicant Status Lookup Widget](#applicant-status-lookup-widget)
- [Funding Product Explainer Tool](#funding-product-explainer-tool)
- [Referral Source Tracker](#referral-source-tracker)
- [Business Broker Referral Page](#business-broker-referral-page)
- [Book a Funding Strategy Call Embed](#book-a-funding-strategy-call-embed)
- [White-Label Application Embed](#white-label-application-embed)
- [Partner Certification Quiz](#partner-certification-quiz)
- [Partner Performance Scorecard](#partner-performance-scorecard)
- [Funding Opportunity Report Generator](#funding-opportunity-report-generator)
- [White-Label Newsletter Template Builder](#white-label-newsletter-template-builder)
- [Campaign Landing Page Pack Generator](#campaign-landing-page-pack-generator)
- [Training Micro-Course Portal](#training-micro-course-portal)
- [Business Credit Prep Plan Generator](#business-credit-prep-plan-generator)
- [Webinar Funnel Kit Generator](#webinar-funnel-kit-generator)
- [Partner Leaderboard Dashboard](#partner-leaderboard-dashboard)
- [Referral Agreement Framework Generator](#referral-agreement-framework-generator)
- [Lead Magnet Builder for Affiliates](#lead-magnet-builder-for-affiliates)
- [Partner Links Hub](#partner-links-hub)

## Bank Connection Education Page

**Id:** bank-connection-education-page  

### Sections Needed

- H1: “Why We May Ask You to Connect Your Bank”
- Subheadline: “A simple explanation of how bank verification helps funding reviews move faster, cleaner, and with fewer headaches.”
- Primary CTA: “Return to My Application”
- Secondary CTA: “Talk to a Funding Specialist”
- Trust strip: “Secure Review | Read-Only Access | Faster Processing | No Hidden Control”
- Add an FAQ accordion.
- Add a “Choose your concern” selector that reveals the matching reassurance card.
- Add sticky bottom CTA on mobile.

### FLASH-UI Prompt

```txt
```text
Design a high-conversion “Bank Connection Education Page” for Moonshine Capital affiliate partners to send applicants who hesitate to connect their bank account.

VISUAL STYLE:
Trust-first fintech education page. Deep navy, white, soft blue gradients, green verification accents, secure data visuals, clean compliance-friendly typography. No scary “bank surveillance” vibes. This should feel like Stripe, Plaid, and a financial concierge had a responsible baby.

BRAND CONTEXT:
This page is used by affiliate partners after an applicant starts a funding application but hesitates or drops off when asked to connect bank data. Goal: reduce bank-linking drop-off, explain why bank data may be needed, and move the applicant back into the application flow.

TARGET AUDIENCE:
Small business owners, gig workers, self-employed applicants, truckers, ecommerce sellers, and local business owners who are skeptical about sharing financial data.

PRIMARY PAIN:
“I don’t know why you need my bank account, and this feels sketchy.”

CORE MESSAGE:
“Connecting your bank account helps verify revenue, speed up review, and reduce unnecessary document back-and-forth. It does not mean we control your account.”

HERO SECTION:
- H1: “Why We May Ask You to Connect Your Bank”
- Subheadline: “A simple explanation of how bank verification helps funding reviews move faster, cleaner, and with fewer headaches.”
- Primary CTA: “Return to My Application”
- Secondary CTA: “Talk to a Funding Specialist”
- Trust strip: “Secure Review | Read-Only Access | Faster Processing | No Hidden Control”

LAYOUT SECTIONS:
1. Hero
2. “Why This Step Exists” explanation card
3. “What Bank Connection Helps Verify” checklist:
   - Business revenue
   - Deposit activity
   - Cash flow consistency
   - Time in business signals
   - Funding eligibility
4. “What It Does NOT Mean” myth-busting cards:
   - We do not control your account
   - We do not withdraw funds through this step
   - We do not replace your bank
   - We do not guarantee approval
5. Visual “Before vs After” comparison:
   - Without bank connection: slower review, more docs, more back-and-forth
   - With bank connection: faster verification, cleaner review, fewer missing pieces
6. Security reassurance section with lock icons and plain-English language
7. FAQ accordion:
   - Is this safe?
   - Is it required?
   - What if I use a personal account?
   - Can I upload statements instead?
   - Will this affect my credit?
   - Who reviews the information?
8. Final CTA block:
   - Heading: “Ready to Finish Your Review?”
   - CTA: “Return to Application”

INTERACTION REQUIREMENTS:
- Add an FAQ accordion.
- Add a “Choose your concern” selector that reveals the matching reassurance card.
- Add sticky bottom CTA on mobile.

OUTPUT:
Generate a responsive static HTML/CSS/JS page suitable for Vercel, Wix embed, or direct partner use.
```
```

## Not Ready Yet / Declined Lead Nurture Page

**Id:** not-ready-yet-declined-lead-nurture-page  

### Sections Needed

- H1: “Not Fundable Yet? Good. Now We Know What to Fix.”
- Subheadline: “Use this roadmap to clean up the weak spots, strengthen your file, and prepare for a better funding conversation.”
- Primary CTA: “Start My Prep Plan”
- Secondary CTA: “Book a Funding Review”
- Use JavaScript to show prep steps based on selected blocker.
- Add localStorage to save chosen prep path.
- Include copy button for the prep checklist.
- Include sticky CTA.

### FLASH-UI Prompt

```txt
```text
Design a “Not Ready Yet Funding Recovery Page” for Moonshine Capital applicants who are declined, weak, incomplete, or not currently fundable.

VISUAL STYLE:
Encouraging but direct. Dark fintech editorial with warm orange recovery accents, green progress indicators, and calm dashboard cards. Avoid shame. This should feel like “you’re not dead, you’re just underprepared.”

BRAND CONTEXT:
This page helps affiliates save weak leads instead of losing them. It routes declined or not-ready applicants into business credit prep, document cleanup, banking setup, revenue improvement, and future follow-up.

TARGET AUDIENCE:
Business owners who applied for funding but were not ready, had low revenue, weak credit, incomplete docs, poor bank activity, or needed more time in business.

PRIMARY PAIN:
“I got denied. Now what?”

CORE MESSAGE:
“Not approved today does not mean unfundable forever. Here’s the fastest path to becoming a stronger applicant.”

HERO SECTION:
- H1: “Not Fundable Yet? Good. Now We Know What to Fix.”
- Subheadline: “Use this roadmap to clean up the weak spots, strengthen your file, and prepare for a better funding conversation.”
- Primary CTA: “Start My Prep Plan”
- Secondary CTA: “Book a Funding Review”

LAYOUT SECTIONS:
1. Hero
2. “Why Applications Usually Stall” card grid:
   - Low monthly revenue
   - Limited time in business
   - Bank statements not available
   - Poor cash flow
   - Credit concerns
   - Missing documents
3. Interactive “What Held You Back?” selector
4. Dynamic prep recommendation cards based on selected issue
5. 30/60/90-day funding prep roadmap:
   - 30 days: organize docs, stabilize banking, separate business/personal finances
   - 60 days: improve deposits, clean statements, build business credit basics
   - 90 days: re-check eligibility, update file, prepare application
6. “Better Next Step” routes:
   - Business credit prep
   - Banking setup
   - Document checklist
   - Revenue growth plan
   - Follow-up reminder
7. Soft lead capture:
   - Name
   - Email
   - Phone
   - Biggest funding blocker
8. Final CTA:
   - “Get Back in the Game”

INTERACTION REQUIREMENTS:
- Use JavaScript to show prep steps based on selected blocker.
- Add localStorage to save chosen prep path.
- Include copy button for the prep checklist.
- Include sticky CTA.

OUTPUT:
Generate a mobile-first static page with HTML/CSS/JS.
```
```

## CPA Referral Partner Page

**Id:** cpa-referral-partner-page  

### Sections Needed

- H1: “Help Your Clients Explore Funding Without Becoming Their Loan Broker”
- Subheadline: “A simple referral path for CPAs, bookkeepers, and advisors whose clients need working capital, equipment financing, or funding strategy.”
- Primary CTA: “Become a Referral Partner”
- Secondary CTA: “Download Referral Guide”
- Add editable placeholder fields for affiliate name, phone, email, booking link, and referral link.
- Add copy buttons for intro email and referral script.
- Add FAQ accordion.

### FLASH-UI Prompt

```txt
```text
Design a “CPA Referral Partner Page” that Moonshine Capital affiliates can personalize and send to accountants, tax pros, bookkeepers, and fractional CFOs.

VISUAL STYLE:
Professional advisory fintech. Clean white and navy, subtle green trust accents, elegant cards, accounting ledger-inspired details, credibility-first design. It should feel like a serious referral resource, not an internet money circus with a tax ID.

BRAND CONTEXT:
Affiliates use this page to recruit CPAs and accounting professionals as referral partners. The CPA can refer clients who need working capital, equipment financing, cash-flow help, or business credit prep.

TARGET AUDIENCE:
CPAs, tax preparers, bookkeepers, fractional CFOs, enrolled agents, payroll consultants, and financial advisors serving small business clients.

PRIMARY PAIN:
“My clients need capital, but I do not want to become a lender, broker, or risk my professional credibility.”

CORE MESSAGE:
“Give clients a trusted funding review path without adding lending work to your plate.”

HERO SECTION:
- H1: “Help Your Clients Explore Funding Without Becoming Their Loan Broker”
- Subheadline: “A simple referral path for CPAs, bookkeepers, and advisors whose clients need working capital, equipment financing, or funding strategy.”
- Primary CTA: “Become a Referral Partner”
- Secondary CTA: “Download Referral Guide”

LAYOUT SECTIONS:
1. Hero
2. “When to Refer a Client” card grid:
   - Tax bill pressure
   - Payroll crunch
   - Equipment purchase
   - Inventory need
   - Expansion opportunity
   - Cash-flow gap
3. “How the Referral Process Works” 4-step timeline:
   - Introduce client
   - Client completes funding review
   - Funding options are evaluated
   - You stay informed without managing the process
4. “Why CPAs Like This Model” benefits:
   - Adds value to clients
   - No lending license claim
   - No chasing banks
   - Clear referral process
   - Professional client experience
5. Referral partner FAQ
6. Partner bio placeholder:
   - Powered by Moonshine Capital
   - Referred by [Affiliate Name]
7. Compliance-safe language section:
   - No guaranteed approvals
   - Funding depends on review
   - Terms vary by product and applicant profile
8. Final CTA:
   - “Start Referring Business Clients”

INTERACTION REQUIREMENTS:
- Add editable placeholder fields for affiliate name, phone, email, booking link, and referral link.
- Add copy buttons for intro email and referral script.
- Add FAQ accordion.

OUTPUT:
Generate a static HTML/CSS/JS page designed to be cloned for each affiliate.
```
```

## Referral Partner Kit Generator

**Id:** referral-partner-kit-generator  

### Sections Needed

- H1: “Build a Referral Partner Kit in 60 Seconds”
- Subheadline: “Create tailored outreach assets for CPAs, business brokers, real estate pros, equipment dealers, consultants, and local business connectors.”
- Primary CTA: “Generate My Kit”
- JavaScript selector for referral partner type.
- Dynamic content output based on selection.
- Copy buttons for each generated script.
- localStorage saved kits.
- Placeholder variables:

### FLASH-UI Prompt

```txt
```text
Design a “Referral Partner Kit Generator” for Moonshine Capital affiliates.

VISUAL STYLE:
Operator dashboard meets fintech sales enablement. Dark navy, clean white cards, gold highlights, green action buttons, polished but practical. Think “affiliate field kit,” not “MLM Canva graveyard.”

BRAND CONTEXT:
This tool helps affiliates create customized outreach kits for referral partners such as CPAs, real estate agents, business brokers, equipment dealers, insurance agents, payroll providers, local chambers, and consultants.

TARGET USER:
Moonshine Capital affiliates who need to recruit referral partners but do not know what to say, who to target, or how to explain the offer.

PRIMARY PAIN:
“I know referral partners could send deals, but I don’t know how to package the conversation.”

CORE MESSAGE:
“Pick the referral partner type and generate a credible mini-kit: positioning, script, email, CTA, and best client scenarios.”

HERO SECTION:
- H1: “Build a Referral Partner Kit in 60 Seconds”
- Subheadline: “Create tailored outreach assets for CPAs, business brokers, real estate pros, equipment dealers, consultants, and local business connectors.”
- Primary CTA: “Generate My Kit”

LAYOUT SECTIONS:
1. Hero
2. Referral partner type selector
3. Industry pain point cards
4. Generated kit output:
   - Partner positioning statement
   - Best-fit client scenarios
   - Short DM script
   - Email intro
   - Follow-up message
   - Discovery questions
   - CTA link placeholder
5. “How to Use This Kit” step-by-step
6. Saved kits area
7. Copy/export buttons

INTERACTION REQUIREMENTS:
- JavaScript selector for referral partner type.
- Dynamic content output based on selection.
- Copy buttons for each generated script.
- localStorage saved kits.
- Placeholder variables:
   - [Affiliate Name]
   - [Affiliate Phone]
   - [Application Link]
   - [Booking Link]
   - [Partner Niche]

OUTPUT:
Generate a single-page static tool with clean dashboard UX.
```
```

## Document Checklist Generator

**Id:** document-checklist-generator  

### Sections Needed

- H1: “Get Your Funding Docs Ready”
- Subheadline: “Choose your business type and funding goal to generate a simple checklist before review.”
- Primary CTA: “Build My Checklist”
- Business type: LLC, sole prop, corporation, gig worker, real estate investor
- Funding type: working capital, equipment financing, real estate funding, ecommerce funding, startup funding, business credit prep
- Revenue range
- Bank account type: business bank, personal bank, both
- Time in business
- Has filed taxes: yes/no
- Bank statements
- ID
- Business formation docs
- EIN letter
- Voided check
- Processing statements
- Tax returns if applicable
- Invoices/contracts if applicable
- Equipment invoice if applicable
- Purchase contract if applicable
- JavaScript dynamic checklist generation.

### FLASH-UI Prompt

```txt
```text
Design a “Funding Document Checklist Generator” for Moonshine Capital applicants and affiliate partners.

VISUAL STYLE:
Clean fintech utility tool. White background, navy panels, green check states, document icons, simple progress UI. Make it feel like TurboTax for funding docs — minus the existential dread.

BRAND CONTEXT:
Affiliates send this to prospects before or after application submission to reduce missing documents, repeated questions, and review delays.

TARGET AUDIENCE:
Small business funding applicants and affiliate partners helping clients prepare for review.

PRIMARY PAIN:
“What documents do I actually need, and why does everyone keep asking me for the same stuff?”

CORE MESSAGE:
“Answer a few questions and get a tailored funding document checklist.”

HERO SECTION:
- H1: “Get Your Funding Docs Ready”
- Subheadline: “Choose your business type and funding goal to generate a simple checklist before review.”
- Primary CTA: “Build My Checklist”

INPUTS:
- Business type: LLC, sole prop, corporation, gig worker, real estate investor
- Funding type: working capital, equipment financing, real estate funding, ecommerce funding, startup funding, business credit prep
- Revenue range
- Bank account type: business bank, personal bank, both
- Time in business
- Has filed taxes: yes/no

OUTPUT CHECKLIST:
- Bank statements
- ID
- Business formation docs
- EIN letter
- Voided check
- Processing statements
- Tax returns if applicable
- Invoices/contracts if applicable
- Equipment invoice if applicable
- Purchase contract if applicable

LAYOUT SECTIONS:
1. Hero
2. Checklist generator form
3. Dynamic document checklist
4. “Why this document matters” expandable cards
5. Progress checklist
6. Download/copy checklist section
7. CTA: “Submit Application When Ready”

INTERACTION REQUIREMENTS:
- JavaScript dynamic checklist generation.
- Checkbox progress tracker.
- Copy checklist button.
- Save progress with localStorage.
- Mobile sticky CTA.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Funding Route Matcher

**Id:** funding-route-matcher  

### Sections Needed

- H1: “Find Your Best Funding Route”
- Subheadline: “Not every business belongs in the same funding lane. Match the applicant to the path that makes the most sense.”
- Primary CTA: “Start Route Match”
- Are you using a business or personal bank account?
- Monthly revenue range
- Time in business
- Funding purpose
- Industry
- Credit range
- Need speed or best terms?
- Do you have bank statements?
- Quick funding / micro-funding
- Working capital
- Equipment financing
- Ecommerce funding
- Real estate investor funding
- Business credit prep
- Not ready yet / rebuild path
- Multi-step quiz logic.
- Progress bar.

### FLASH-UI Prompt

```txt
```text
Design a “Funding Route Matcher” widget for Moonshine Capital affiliates.

VISUAL STYLE:
Fast fintech diagnostic. Dark background, electric blue and green highlights, decision-tree cards, animated progress bar, clean result panel.

BRAND CONTEXT:
This widget helps affiliates and prospects quickly understand whether a lead is likely better routed toward quick micro-funding, business funding, equipment financing, real estate funding, ecommerce funding, business credit prep, or “not ready yet” nurture.

TARGET AUDIENCE:
Affiliate partners, small business applicants, gig workers, ecommerce sellers, truckers, real estate investors, and business owners who do not know what funding lane fits.

PRIMARY PAIN:
“I need money, but I don’t know what type of funding I should even ask for.”

CORE MESSAGE:
“Answer a few questions and get a recommended funding route.”

HERO SECTION:
- H1: “Find Your Best Funding Route”
- Subheadline: “Not every business belongs in the same funding lane. Match the applicant to the path that makes the most sense.”
- Primary CTA: “Start Route Match”

QUESTIONS:
- Are you using a business or personal bank account?
- Monthly revenue range
- Time in business
- Funding purpose
- Industry
- Credit range
- Need speed or best terms?
- Do you have bank statements?

RESULT TYPES:
- Quick funding / micro-funding
- Working capital
- Equipment financing
- Ecommerce funding
- Real estate investor funding
- Business credit prep
- Not ready yet / rebuild path

LAYOUT SECTIONS:
1. Hero
2. Multi-step matcher
3. Result card
4. Why this route fits
5. What to prepare next
6. CTA:
   - Apply now
   - Book strategy call
   - Start prep plan

INTERACTION REQUIREMENTS:
- Multi-step quiz logic.
- Progress bar.
- Result routing with conditional messaging.
- Add hidden fields/placeholders for affiliate tracking:
   - partner_id
   - campaign_id
   - source
- Add copy result button.

OUTPUT:
Generate an embeddable static widget with HTML/CSS/JS.
```
```

## Deal Submission QA Tool

**Id:** deal-submission-qa-tool  

### Sections Needed

- H1: “Is This Deal Ready to Submit?”
- Subheadline: “Run a quick QA check before sending a client file into review.”
- Primary CTA: “Check This Deal”
- Score readiness from 0–100.
- Show result states:
- Generate a copyable “submission summary” for CRM notes.
- Save checklist with localStorage.

### FLASH-UI Prompt

```txt
```text
Design a “Deal Submission QA Tool” for Moonshine Capital affiliate partners.

VISUAL STYLE:
Mission-control checklist UI. Dark navy, green pass states, orange warning states, red missing-item alerts, clean admin dashboard cards.

BRAND CONTEXT:
Affiliates use this before submitting a client to reduce incomplete applications, missing docs, bad routing, and messy handoffs. This is internal-facing partner infrastructure.

TARGET USER:
New and active affiliate partners submitting business funding leads.

PRIMARY PAIN:
“Partners submit half-baked deals, then everyone wastes time chasing missing info.”

CORE MESSAGE:
“Check the file before you submit it. Cleaner submissions move faster.”

HERO SECTION:
- H1: “Is This Deal Ready to Submit?”
- Subheadline: “Run a quick QA check before sending a client file into review.”
- Primary CTA: “Check This Deal”

CHECK CATEGORIES:
1. Applicant basics:
   - Name
   - Phone
   - Email
   - Business name
   - State
2. Business profile:
   - Time in business
   - Industry
   - Monthly revenue
   - Funding amount requested
   - Funding purpose
3. Banking:
   - Business bank or personal bank
   - Bank statements available
   - Bank connection completed
4. Product fit:
   - Working capital
   - Equipment
   - Real estate
   - Ecommerce
   - Gig/self-employed
5. Compliance:
   - No guaranteed approval promised
   - No exact rate promised
   - Applicant understands review is required
6. Missing items summary

LAYOUT SECTIONS:
1. Hero
2. QA checklist form
3. Readiness score
4. Missing item alerts
5. Recommended next action
6. Copyable submission note
7. CTA: “Submit Deal” or “Fix Missing Items First”

INTERACTION REQUIREMENTS:
- Score readiness from 0–100.
- Show result states:
   - Ready to submit
   - Needs cleanup
   - Do not submit yet
- Generate a copyable “submission summary” for CRM notes.
- Save checklist with localStorage.

OUTPUT:
Generate a static internal partner tool with HTML/CSS/JS.
```
```

## Compliance Copy Checker

**Id:** compliance-copy-checker  

### Sections Needed

- H1: “Check Your Funding Copy Before You Post It”
- Subheadline: “Avoid risky claims, misleading promises, and compliance goblins before your marketing goes live.”
- Primary CTA: “Check My Copy”
- Use JavaScript keyword detection.
- Highlight risky phrases in the output.
- Generate safer replacement suggestions.
- Add copy-to-clipboard button.
- Add disclaimer: “This tool is educational and does not replace legal advice.”

### FLASH-UI Prompt

```txt
```text
Design a “Compliance Copy Checker” for Moonshine Capital affiliate partners.

VISUAL STYLE:
Clean risk-control dashboard. White and dark navy, red/yellow/green risk badges, legal-safe copy cards, polished fintech compliance interface. It should feel serious but not like a corporate HR hostage video.

BRAND CONTEXT:
Affiliates need to write social posts, emails, landing page copy, and DMs without making risky claims like “guaranteed approval,” “free money,” “no credit check ever,” or “lowest rates.”

TARGET USER:
Affiliate partners creating marketing copy for business funding offers.

PRIMARY PAIN:
“New partners accidentally write copy that sounds like a lawsuit wearing cologne.”

CORE MESSAGE:
“Paste your copy, flag risky claims, and get safer alternatives.”

HERO SECTION:
- H1: “Check Your Funding Copy Before You Post It”
- Subheadline: “Avoid risky claims, misleading promises, and compliance goblins before your marketing goes live.”
- Primary CTA: “Check My Copy”

LAYOUT SECTIONS:
1. Hero
2. Textarea input: “Paste your copy here”
3. Risk scanner output:
   - Red: high-risk terms
   - Yellow: needs softening
   - Green: safer language
4. Risky phrase library:
   - Guaranteed approval
   - No credit needed
   - Lowest rates
   - Instant approval
   - Free money
   - Everyone qualifies
   - No documents required
5. Safer replacement examples:
   - “Check eligibility”
   - “Funding options may be available”
   - “Approval and terms depend on review”
   - “Fast review available”
6. Copy rewrite output
7. Compliance reminders
8. CTA: “Copy Safer Version”

INTERACTION REQUIREMENTS:
- Use JavaScript keyword detection.
- Highlight risky phrases in the output.
- Generate safer replacement suggestions.
- Add copy-to-clipboard button.
- Add disclaimer: “This tool is educational and does not replace legal advice.”

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Applicant Follow-Up Copilot

**Id:** applicant-follow-up-copilot  

### Sections Needed

- H1: “Send the Right Follow-Up at the Right Time”
- Subheadline: “Pick the lead stage and generate a text, email, or DM that moves the deal forward.”
- Primary CTA: “Generate Follow-Up”
- Applicant stage:
- Tone:
- Channel:
- Partner name
- Application link
- Booking link
- Message subject line if email
- Short message
- Longer message
- Follow-up timing suggestion
- CTA line
- JavaScript conditional message generator.
- Copy buttons.
- localStorage saved templates.
- Include merge tags:

### FLASH-UI Prompt

```txt
```text
Design an “Applicant Follow-Up Copilot” for Moonshine Capital affiliate partners.

VISUAL STYLE:
Sales enablement dashboard. Dark fintech background, message cards, status chips, CRM-style layout, green action buttons, subtle urgency cues.

BRAND CONTEXT:
Affiliates need better follow-up messages based on where the applicant is stuck: incomplete application, no bank connection, missing docs, under review, approved but silent, declined/not ready.

TARGET USER:
Affiliate partners managing funding leads.

PRIMARY PAIN:
“I don’t know what to say next without sounding desperate, pushy, or like a loan shark with Wi-Fi.”

CORE MESSAGE:
“Choose the applicant stage and generate a clean follow-up message.”

HERO SECTION:
- H1: “Send the Right Follow-Up at the Right Time”
- Subheadline: “Pick the lead stage and generate a text, email, or DM that moves the deal forward.”
- Primary CTA: “Generate Follow-Up”

INPUTS:
- Applicant stage:
   - Started application
   - Incomplete application
   - Bank not connected
   - Missing documents
   - Under review
   - Approved
   - Funded
   - Declined/not ready
   - Ghosted
- Tone:
   - Friendly
   - Direct
   - Professional
   - Urgent
   - Soft nudge
- Channel:
   - SMS
   - Email
   - DM
   - Voicemail script
- Partner name
- Application link
- Booking link

OUTPUTS:
- Message subject line if email
- Short message
- Longer message
- Follow-up timing suggestion
- CTA line

LAYOUT SECTIONS:
1. Hero
2. Message generator form
3. Generated output cards
4. Copy buttons
5. Best practices sidebar
6. Saved favorite messages
7. CTA: “Open Lead Tracker”

INTERACTION REQUIREMENTS:
- JavaScript conditional message generator.
- Copy buttons.
- localStorage saved templates.
- Include merge tags:
   - [First Name]
   - [Partner Name]
   - [Application Link]
   - [Booking Link]

OUTPUT:
Generate a static HTML/CSS/JS tool.
```
```

## UTM Campaign Builder for Affiliates

**Id:** utm-campaign-builder-for-affiliates  

### Sections Needed

- H1: “Build Trackable Partner Links”
- Subheadline: “Create campaign links for social posts, emails, referral partners, QR codes, and landing pages.”
- Primary CTA: “Generate Link”
- Base URL
- Partner ID
- Campaign name
- Source:
- Medium:
- Content label
- Term/keyword optional
- Final URL
- Short campaign summary
- Copy button
- QR code placeholder
- Saved campaign list
- JavaScript URL builder.
- Encode UTM parameters.
- Copy-to-clipboard.
- localStorage saved campaigns.
- Add placeholder for Bitly or shortlink integration.

### FLASH-UI Prompt

```txt
```text
Design a “Partner UTM Campaign Builder” for Moonshine Capital affiliates.

VISUAL STYLE:
Clean tracking utility. Dark mode, blue/green data accents, campaign cards, link preview module, copy buttons, simple analytics-inspired interface.

BRAND CONTEXT:
Affiliates need trackable links for Facebook posts, LinkedIn, email, YouTube, TikTok, referral partners, QR codes, and local events. This helps prevent “I swear I sent you that lead” chaos.

TARGET USER:
Affiliate partners promoting funding links across channels.

PRIMARY PAIN:
“My links are messy, untracked, and impossible to attribute.”

CORE MESSAGE:
“Build clean referral links with campaign tracking in seconds.”

HERO SECTION:
- H1: “Build Trackable Partner Links”
- Subheadline: “Create campaign links for social posts, emails, referral partners, QR codes, and landing pages.”
- Primary CTA: “Generate Link”

INPUTS:
- Base URL
- Partner ID
- Campaign name
- Source:
   - facebook
   - linkedin
   - email
   - youtube
   - tiktok
   - qr
   - referral_partner
   - website
- Medium:
   - social
   - email
   - video
   - direct
   - event
   - partner
- Content label
- Term/keyword optional

OUTPUT:
- Final URL
- Short campaign summary
- Copy button
- QR code placeholder
- Saved campaign list

LAYOUT SECTIONS:
1. Hero
2. UTM builder form
3. Link output panel
4. Campaign naming guide
5. Saved links table
6. Common campaign examples
7. CTA: “Use This Link in My Next Post”

INTERACTION REQUIREMENTS:
- JavaScript URL builder.
- Encode UTM parameters.
- Copy-to-clipboard.
- localStorage saved campaigns.
- Add placeholder for Bitly or shortlink integration.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Partner Welcome Kit Generator

**Id:** partner-welcome-kit-generator  

### Sections Needed

- H1: “Generate a Partner Welcome Kit”
- Subheadline: “Create a personalized launch kit with links, scripts, first actions, niche focus, and onboarding steps.”
- Primary CTA: “Build Welcome Kit”
- Partner name
- Partner email
- Phone
- City/state
- Best-fit niche
- Referral link
- Application link
- Booking link
- Experience level
- First target audience
- Income goal
- Partner profile summary
- Best-fit funding lanes
- First 7-day launch plan
- Daily outreach checklist
- Referral partner targets
- First 3 social posts

### FLASH-UI Prompt

```txt
```text
Design a “Partner Welcome Kit Generator” for Moonshine Capital.

VISUAL STYLE:
Premium onboarding command center. Dark navy, gold highlights, clean checklist cards, progress steps, professional launch kit aesthetic.

BRAND CONTEXT:
This tool creates a personalized launch kit for every new affiliate partner: bio, links, first actions, scripts, funnel links, recommended resources, and 7-day launch plan.

TARGET USER:
Moonshine Capital admin team or affiliate manager onboarding a new partner.

PRIMARY PAIN:
“New affiliates join, then get buried in random links, PDFs, and motivational fog.”

CORE MESSAGE:
“Generate a clean partner launch kit that gives each new affiliate a credible starting point.”

HERO SECTION:
- H1: “Generate a Partner Welcome Kit”
- Subheadline: “Create a personalized launch kit with links, scripts, first actions, niche focus, and onboarding steps.”
- Primary CTA: “Build Welcome Kit”

INPUTS:
- Partner name
- Partner email
- Phone
- City/state
- Best-fit niche
- Referral link
- Application link
- Booking link
- Experience level
- First target audience
- Income goal

OUTPUT KIT:
- Partner profile summary
- Best-fit funding lanes
- First 7-day launch plan
- Daily outreach checklist
- Referral partner targets
- First 3 social posts
- First 3 DM scripts
- Useful links
- Compliance reminders

LAYOUT SECTIONS:
1. Hero
2. Partner input form
3. Generated launch kit preview
4. Copy/export sections
5. Checklist view
6. “Send this to partner” email draft
7. CTA: “Create Partner Page”

INTERACTION REQUIREMENTS:
- Generate output dynamically with JavaScript.
- Use placeholder variables.
- Copy buttons per section.
- localStorage saved kits.
- Print-friendly layout.

OUTPUT:
Generate a static internal admin tool with HTML/CSS/JS.
```
```

## White-Label Funding FAQ Page Builder

**Id:** white-label-funding-faq-page-builder  

### Sections Needed

- H1: “Business Funding FAQ”
- Subheadline: “Clear answers before you apply, book a call, or explore funding options.”
- Primary CTA: “Check Eligibility”
- Secondary CTA: “Book a Funding Call”
- FAQ accordion.
- Affiliate personalization fields at top.
- Copy-ready FAQ snippets.
- Static HTML/CSS/JS.

### FLASH-UI Prompt

```txt
```text
Design a “White-Label Funding FAQ Page Builder” for Moonshine Capital affiliates.

VISUAL STYLE:
Trust-building fintech FAQ page. Clean white/navy, green check icons, soft cards, FAQ accordion, partner profile block.

BRAND CONTEXT:
Affiliates need a public FAQ page they can send to skeptical leads. It should explain funding options, process, timelines, documents, bank statements, rates, approvals, and expectations without making risky promises.

TARGET USER:
Affiliate partners who need a credible client-facing education page.

PRIMARY PAIN:
“Prospects keep asking the same questions, and new partners do not know how to answer without sounding sketchy.”

CORE MESSAGE:
“Give every partner a clean, compliant FAQ page that answers common questions and routes prospects to apply or book a call.”

HERO SECTION:
- H1: “Business Funding FAQ”
- Subheadline: “Clear answers before you apply, book a call, or explore funding options.”
- Primary CTA: “Check Eligibility”
- Secondary CTA: “Book a Funding Call”

LAYOUT SECTIONS:
1. Hero
2. Partner profile card:
   - Referred by [Partner Name]
   - Powered by Moonshine Capital
   - Contact info
3. FAQ accordion categories:
   - Funding basics
   - Eligibility
   - Documents
   - Bank connection
   - Credit
   - Rates and repayment
   - Timelines
   - After approval
4. “What funding is not” section:
   - Not guaranteed
   - Not one-size-fits-all
   - Not always the cheapest option
5. “Best next step” route cards:
   - Apply now
   - Book call
   - Get document checklist
   - Start business credit prep
6. Final CTA

INTERACTION REQUIREMENTS:
- FAQ accordion.
- Affiliate personalization fields at top.
- Copy-ready FAQ snippets.
- Static HTML/CSS/JS.

OUTPUT:
Generate a cloneable white-label FAQ page.
```
```

## Local SEO Funding Page Generator

**Id:** local-seo-funding-page-generator  

### Sections Needed

- H1 pattern: “Small Business Funding Options in [City, State]”
- Subheadline: “Explore working capital, equipment financing, business credit prep, and funding review options through [Partner Name], powered by Moonshine Capital.”
- Primary CTA: “Check Eligibility”
- Secondary CTA: “Book Local Funding Call”
- City
- State
- Partner name
- Target industries
- Application link
- Booking link
- Local angle
- Preferred funding lanes
- Form generates a full page preview.
- Include copy buttons for H1, meta description, section copy, and CTA blocks.
- Add SEO fields:
- localStorage saved pages.

### FLASH-UI Prompt

```txt
```text
Design a “Local Business Funding Page Generator” for Moonshine Capital affiliates.

VISUAL STYLE:
Local trust + fintech. Clean city landing page design, navy/white, map card placeholders, local business imagery blocks, partner profile CTA.

BRAND CONTEXT:
Affiliates need local landing pages like “Small Business Funding in Alexandria, VA” or “Business Funding Options in Tampa, FL” without manually writing each page from scratch.

TARGET USER:
Affiliate partners building local SEO, local referral campaigns, chamber outreach, or local business networking.

PRIMARY PAIN:
“I want a local funding page, but I don’t know what to put on it.”

CORE MESSAGE:
“Generate a local business funding landing page framework personalized to a city, industry, partner, and CTA.”

HERO SECTION:
- H1 pattern: “Small Business Funding Options in [City, State]”
- Subheadline: “Explore working capital, equipment financing, business credit prep, and funding review options through [Partner Name], powered by Moonshine Capital.”
- Primary CTA: “Check Eligibility”
- Secondary CTA: “Book Local Funding Call”

INPUTS:
- City
- State
- Partner name
- Target industries
- Application link
- Booking link
- Local angle
- Preferred funding lanes

GENERATED PAGE SECTIONS:
1. Hero
2. Local business pain points
3. Funding options available
4. Industries served
5. How the review process works
6. Partner profile
7. FAQ
8. Local referral partner CTA
9. Final CTA

INTERACTION REQUIREMENTS:
- Form generates a full page preview.
- Include copy buttons for H1, meta description, section copy, and CTA blocks.
- Add SEO fields:
   - Title tag
   - Meta description
   - URL slug
   - Suggested internal links
- localStorage saved pages.

OUTPUT:
Generate a static page generator tool with HTML/CSS/JS.
```
```

## White-Label Resource Marketplace

**Id:** white-label-resource-marketplace  

### Sections Needed

- H1: “Business Tools Recommended by [Partner Name]”
- Subheadline: “Funding is one piece of the puzzle. These tools help with banking, credit, accounting, payments, payroll, and business operations.”
- Primary CTA: “Browse Tools”
- Secondary CTA: “Ask for a Recommendation”
- Business banking
- Business credit
- Accounting/bookkeeping
- Payment processing
- Payroll
- Legal/formation
- Ecommerce tools
- AI/automation
- Funding resources
- Insurance
- Tool name
- Category
- Best for
- Problem solved
- Partner note
- CTA button

### FLASH-UI Prompt

```txt
```text
Design a “White-Label Business Resource Marketplace” for Moonshine Capital affiliate partners.

VISUAL STYLE:
Premium fintech marketplace. Dark luxe dashboard, bento cards, category filters, partner-branded header, clean product cards, subtle gold/green accents.

BRAND CONTEXT:
This marketplace lets affiliates offer curated business tools beyond funding: banking, accounting, payroll, credit monitoring, incorporation, payment processing, bookkeeping, insurance, AI tools, and productivity software. It expands affiliate revenue while making partners look like real business advisors.

TARGET AUDIENCE:
Small business owners, startups, ecommerce sellers, gig workers, consultants, contractors, and funding applicants.

PRIMARY PAIN:
“Business owners need more than money. They need the right accounts, tools, systems, and support.”

CORE MESSAGE:
“Explore recommended tools to help run, fund, and grow your business.”

HERO SECTION:
- H1: “Business Tools Recommended by [Partner Name]”
- Subheadline: “Funding is one piece of the puzzle. These tools help with banking, credit, accounting, payments, payroll, and business operations.”
- Primary CTA: “Browse Tools”
- Secondary CTA: “Ask for a Recommendation”

CATEGORIES:
- Business banking
- Business credit
- Accounting/bookkeeping
- Payment processing
- Payroll
- Legal/formation
- Ecommerce tools
- AI/automation
- Funding resources
- Insurance

CARD FIELDS:
- Tool name
- Category
- Best for
- Problem solved
- Partner note
- CTA button
- Affiliate disclosure field
- Featured badge

LAYOUT SECTIONS:
1. Hero
2. Category filter bar
3. Featured tools grid
4. “Choose by business stage” cards:
   - Just starting
   - Getting organized
   - Ready for funding
   - Scaling
   - Fixing messy finances
5. Disclosure section
6. Partner CTA
7. Footer

INTERACTION REQUIREMENTS:
- JavaScript category filtering.
- Search bar.
- Featured toggle styling.
- Partner profile card.
- Affiliate disclosure notice.

OUTPUT:
Generate a static marketplace page with HTML/CSS/JS.
```
```

## Embed Code Generator

**Id:** embed-code-generator  

### Sections Needed

- H1: “Generate Partner Widget Embed Code”
- Subheadline: “Create copy/paste embed snippets for funding tools, calculators, application CTAs, and partner profile cards.”
- Primary CTA: “Build Embed Code”
- Widget type:
- Partner name
- Partner ID
- Application URL
- Booking URL
- Brand color
- Width
- Height
- Tracking source
- Live preview area
- iFrame embed code
- Script embed code placeholder
- Direct link version
- Copy buttons
- Installation instructions
- Generate iframe code dynamically.
- Generate UTM/tracking parameters.

### FLASH-UI Prompt

```txt
```text
Design an “Embed Code Generator” for Moonshine Capital affiliate widgets.

VISUAL STYLE:
Developer-friendly partner tool. Dark mode, code panels, widget preview cards, copy buttons, neon blue/green highlights, clean docs-style interface.

BRAND CONTEXT:
Affiliates need to copy/paste widgets into Wix, WordPress, Carrd, Framer, static HTML pages, blogs, and landing pages. This tool generates branded embed snippets for calculators, funding readiness widgets, route matchers, FAQ embeds, application buttons, and partner profile cards.

TARGET USER:
Affiliate partners, agency operators, web admins, and Moonshine Capital internal team.

PRIMARY PAIN:
“Partners need widgets on their sites without asking you for custom code every five minutes.”

CORE MESSAGE:
“Choose a widget, add partner details, preview it, and copy the embed code.”

HERO SECTION:
- H1: “Generate Partner Widget Embed Code”
- Subheadline: “Create copy/paste embed snippets for funding tools, calculators, application CTAs, and partner profile cards.”
- Primary CTA: “Build Embed Code”

INPUTS:
- Widget type:
   - Funding readiness score
   - Funding route matcher
   - Application CTA button
   - Document checklist
   - FAQ widget
   - Commission estimator
   - Partner profile card
- Partner name
- Partner ID
- Application URL
- Booking URL
- Brand color
- Width
- Height
- Tracking source

OUTPUT:
- Live preview area
- iFrame embed code
- Script embed code placeholder
- Direct link version
- Copy buttons
- Installation instructions

LAYOUT SECTIONS:
1. Hero
2. Widget selector
3. Customization form
4. Live preview
5. Embed code output
6. Platform-specific instructions:
   - Wix
   - WordPress
   - Carrd
   - Framer
   - Static HTML
7. Troubleshooting FAQ

INTERACTION REQUIREMENTS:
- Generate iframe code dynamically.
- Generate UTM/tracking parameters.
- Copy-to-clipboard buttons.
- Live preview card.
- Save recent embeds with localStorage.

OUTPUT:
Generate static HTML/CSS/JS.
```

---

## Best build order from this specific batch

1. **Funding Route Matcher** — highest lead-routing value  
2. **Document Checklist Generator** — reduces ops friction immediately  
3. **Applicant Follow-Up Copilot** — helps rookies stop fumbling money conversations  
4. **Bank Connection Education Page** — attacks a real drop-off point  
5. **Deal Submission QA Tool** — keeps trash submissions out of the pipeline  
6. **Compliance Copy Checker** — prevents affiliate goblin marketing  
7. **Referral Partner Kit Generator** — creates strategic partner growth  
8. **CPA Referral Partner Page** — high-trust referral source asset  
9. **Partner Welcome Kit Generator** — makes onboarding look professional  
10. **Embed Code Generator** — distribution multiplier once the widget library exists  

The real move: don’t sell affiliates “training.” Give them a **white-label funding desk in a box** — pages, widgets, scripts, routing, compliance guardrails, and follow-up tools. Training is what people watch. Tools are what they use when money is on the table.
```

## Partner Link Generator

**Id:** partner-link-generator  

### Sections Needed

- Generate URL with partner_id, campaign, source, medium, and content parameters.
- Use JavaScript for live link generation.
- Add copy-to-clipboard buttons.
- Save recent generated links with localStorage.
- Include a clean mobile layout with sticky copy CTA.

### FLASH-UI Prompt

```txt
Category:** White-label affiliate tool  
**Why it matters:** New affiliates need clean campaign links fast, not a spreadsheet séance.  
**Best deployment:** `/tools/partner-link-generator` or inside partner portal

```text
Design a “Partner Link Generator” static web tool for Moonshine Capital funding affiliates.

VISUAL STYLE:
Dark fintech utility dashboard. Use deep navy, black, success green, electric blue, and clean white cards. Make it feel like a serious tracking console, not a random affiliate link toy.

BRAND CONTEXT:
Moonshine Capital gives affiliate partners trackable funding links, application links, booking links, lead magnet links, and campaign URLs. This tool helps partners generate clean links for social media, email, referral partners, QR codes, local events, landing pages, and direct outreach.

TARGET USER:
New and active affiliate partners who need clean, trackable links for campaigns.

PRIMARY PAIN:
“I don’t know which link to use, how to tag it, or how to track where leads came from.”

STRONG HOOK:
“Stop Sharing Naked Links Like a Rookie.”

HERO MESSAGE:
“Create clean, trackable partner links for applications, booking pages, lead magnets, referral partners, and campaigns in seconds.”

PRIMARY CTA:
“Generate My Link”

SECTIONS NEEDED:
1. Hero section
2. Link type selector:
   - Funding application
   - Book a funding call
   - Funding readiness tool
   - Document checklist
   - Partner recruitment page
   - Referral partner page
   - Local event page
3. Partner input fields:
   - Partner name
   - Partner ID
   - Base URL
   - Campaign name
   - Traffic source
   - Audience/niche
4. Generated link output panel
5. UTM preview table
6. QR code placeholder card
7. Saved recent links table
8. Usage examples:
   - Facebook post
   - LinkedIn DM
   - CPA referral email
   - QR flyer
   - YouTube description
9. Copy buttons for link, QR placeholder text, and campaign summary
10. Final CTA: “Use This Link in My Next Campaign”

INTERACTION REQUIREMENTS:
- Generate URL with partner_id, campaign, source, medium, and content parameters.
- Use JavaScript for live link generation.
- Add copy-to-clipboard buttons.
- Save recent generated links with localStorage.
- Include a clean mobile layout with sticky copy CTA.

OUTPUT:
Generate responsive static files: index.html, styles.css, and script.js.
```
```

## Lead Quality Grader

**Id:** lead-quality-grader  

### Sections Needed

- Use JavaScript to calculate lead score.
- Display color-coded result badges.
- Generate recommended next steps.
- Generate copyable CRM summary.
- Save last graded leads in localStorage.
- Include mobile-first widget layout.

### FLASH-UI Prompt

```txt
Category:** Embed/widget + partner-facing tool  
**Why it matters:** Keeps garbage leads from clogging the machine.  
**Best deployment:** Embeddable widget + partner portal tool

```text
Design a “Lead Quality Grader” widget for Moonshine Capital affiliate partners.

VISUAL STYLE:
Fintech scoring dashboard. Use dark navy, white cards, green/yellow/red score badges, progress meters, and crisp CRM-style panels.

BRAND CONTEXT:
Affiliate partners submit business funding leads. Some leads are strong, some are incomplete, and some are financial raccoons wearing an LLC hat. This tool helps partners grade a lead before submission.

TARGET USER:
Funding affiliates who need to quickly understand whether a lead is worth submitting, nurturing, or routing elsewhere.

PRIMARY PAIN:
“New partners send every lead like it’s gold, even when the file is held together by vibes and a Gmail address.”

STRONG HOOK:
“Grade the Lead Before You Waste the Follow-Up.”

HERO MESSAGE:
“Score a prospect’s funding readiness based on revenue, time in business, bank account type, credit range, documents, and urgency.”

PRIMARY CTA:
“Grade This Lead”

SECTIONS NEEDED:
1. Hero section
2. Lead input form:
   - Business type
   - Monthly revenue
   - Time in business
   - Funding amount requested
   - Funding purpose
   - Credit range
   - Bank account type
   - Bank statements available
   - Application completed
   - Bank connection completed
3. Score output:
   - Strong lead
   - Workable lead
   - Needs cleanup
   - Not ready yet
4. Lead quality score from 0–100
5. Missing items checklist
6. Recommended routing:
   - Submit now
   - Request docs
   - Send bank connection page
   - Send business credit prep plan
   - Place into nurture
7. Copyable CRM note
8. Final CTA: “Copy Lead Summary”

INTERACTION REQUIREMENTS:
- Use JavaScript to calculate lead score.
- Display color-coded result badges.
- Generate recommended next steps.
- Generate copyable CRM summary.
- Save last graded leads in localStorage.
- Include mobile-first widget layout.

OUTPUT:
Generate static HTML/CSS/JS suitable for embedding inside partner dashboards, Wix pages, WordPress posts, or static landing pages.
```
```

## Applicant Status Lookup Widget

**Id:** applicant-status-lookup-widget  

### Sections Needed

- Since this is static, simulate lookup behavior with demo states.
- Include placeholder integration comments for future API/webhook lookup.
- Add JavaScript status demo selector for prototype mode.
- Show conditional next-step CTAs.
- Mobile-first embed layout.

### FLASH-UI Prompt

```txt
Category:** Embed/widget  
**Why it matters:** Reduces “any update?” messages without needing a full portal.  
**Best deployment:** Partner page, thank-you page, applicant follow-up page

```text
Design an “Applicant Status Lookup Widget” for Moonshine Capital funding applicants.

VISUAL STYLE:
Secure fintech status tracker. Use clean white cards, dark navy header, green progress states, blue info callouts, and minimal friction.

BRAND CONTEXT:
Applicants often want to know where they are in the funding review process. This widget gives a high-level status experience without exposing sensitive underwriting details.

TARGET USER:
Business funding applicants who already submitted or started an application.

PRIMARY PAIN:
“I submitted my application. What happens now? Did anyone see it? Am I lost in the business funding Bermuda Triangle?”

STRONG HOOK:
“Check Your Funding Review Status”

HERO MESSAGE:
“Enter your email or reference code to see your high-level application stage and next step.”

PRIMARY CTA:
“Check Status”

SECTIONS NEEDED:
1. Compact hero
2. Lookup form:
   - Email
   - Phone or reference code
3. Status result card with possible states:
   - Application started
   - Application incomplete
   - Bank connection needed
   - Documents needed
   - Submitted for review
   - Underwriting review
   - Offer available
   - Funded
   - Not ready yet
4. Next action card based on status
5. Timeline visualization:
   - Apply
   - Verify
   - Review
   - Decision
   - Funding
6. Contact support CTA
7. FAQ:
   - How long does review take?
   - What if I did not finish my application?
   - Why are documents needed?
   - Why connect bank data?
8. Privacy note

INTERACTION REQUIREMENTS:
- Since this is static, simulate lookup behavior with demo states.
- Include placeholder integration comments for future API/webhook lookup.
- Add JavaScript status demo selector for prototype mode.
- Show conditional next-step CTAs.
- Mobile-first embed layout.

OUTPUT:
Generate static HTML/CSS/JS for a prototype-ready applicant status widget.
```
```

## Funding Product Explainer Tool

**Id:** funding-product-explainer-tool  

### Sections Needed

- JavaScript product selector.
- Dynamic explainer cards.
- Copy-to-clipboard buttons.
- FAQ accordion.
- Save favorite explainers with localStorage.

### FLASH-UI Prompt

```txt
Category:** White-label affiliate education tool  
**Why it matters:** Affiliates need to explain products without overpromising or sounding clueless.  
**Best deployment:** Partner portal + client-facing education page

```text
Design a “Funding Product Explainer Tool” for Moonshine Capital affiliates.

VISUAL STYLE:
Clean fintech education interface. Use navy, white, green, and muted gold. Include cards, comparison tables, plain-English explainer panels, and compliance-safe callouts.

BRAND CONTEXT:
Affiliate partners need to explain funding products in simple language. This tool converts confusing funding types into client-friendly explanations with use cases, fit, risks, and next steps.

TARGET USER:
New affiliate partners and prospects who need to understand business funding options.

PRIMARY PAIN:
“Partners say ‘we do business funding’ but cannot explain the difference between working capital, equipment financing, factoring, credit prep, and real estate funding without turning into a fog machine.”

STRONG HOOK:
“Explain Funding Without Sounding Like a Loan Shark With Wi-Fi.”

HERO MESSAGE:
“Choose a funding type and get a plain-English explanation, best-fit borrower profile, common use cases, documents needed, and safer language to use with prospects.”

PRIMARY CTA:
“Explain This Product”

SECTIONS NEEDED:
1. Hero
2. Funding type selector:
   - Working capital
   - Revenue-based funding
   - Equipment financing
   - Invoice factoring
   - Business line of credit
   - Business credit prep
   - Real estate investor funding
   - Ecommerce funding
   - Startup alternative funding
3. Product explainer output:
   - What it is
   - Best for
   - Not ideal for
   - Common uses
   - Documents usually needed
   - Questions to ask prospect
   - Compliance-safe wording
4. Comparison table
5. “What not to say” risk box
6. Copyable explanation for:
   - SMS
   - Email
   - Phone script
   - Social post
7. Final CTA: “Use This in a Client Conversation”

INTERACTION REQUIREMENTS:
- JavaScript product selector.
- Dynamic explainer cards.
- Copy-to-clipboard buttons.
- FAQ accordion.
- Save favorite explainers with localStorage.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Referral Source Tracker

**Id:** referral-source-tracker  

### Sections Needed

- Add, edit, and delete referral source cards.
- Store records in localStorage.
- Filter by category and stage.
- Generate follow-up script based on category and stage.
- Include export/copy summary button.

### FLASH-UI Prompt

```txt
Category:** White-label partner tool  
**Why it matters:** Affiliates need strategic referral relationships, not random posting into the void.  
**Best deployment:** Internal affiliate dashboard

```text
Design a “Referral Source Tracker” for Moonshine Capital affiliate partners.

VISUAL STYLE:
Relationship pipeline dashboard. Use dark navy, clean white panels, CRM-style cards, stage badges, green action states, and gold priority tags.

BRAND CONTEXT:
Moonshine Capital partners grow faster when they build relationships with CPAs, bookkeepers, bank managers, business brokers, real estate agents, equipment dealers, consultants, insurance agents, local chambers, and payroll providers.

TARGET USER:
Affiliate partners building a referral network.

PRIMARY PAIN:
“I met three good referral partners and then forgot to follow up because my business development system is apparently a napkin.”

STRONG HOOK:
“Track the People Who Can Send You Deals.”

HERO MESSAGE:
“Organize referral partners, track relationship stages, plan follow-ups, and identify who can send business funding opportunities.”

PRIMARY CTA:
“Add Referral Source”

SECTIONS NEEDED:
1. Hero
2. Referral source input form:
   - Name
   - Company
   - Category
   - Email
   - Phone
   - Location
   - Relationship stage
   - Last contact date
   - Next follow-up date
   - Notes
3. Category filters:
   - CPA/accountant
   - Bookkeeper
   - Business broker
   - Real estate agent
   - Equipment dealer
   - Insurance agent
   - Consultant
   - Bank manager
   - Chamber/local group
4. Pipeline board:
   - Identified
   - Contacted
   - Conversation started
   - Referral agreement discussed
   - Active source
   - Dormant
5. Follow-up reminders
6. Referral source quality score
7. Copyable outreach message
8. Final CTA: “Plan Next Follow-Up”

INTERACTION REQUIREMENTS:
- Add, edit, and delete referral source cards.
- Store records in localStorage.
- Filter by category and stage.
- Generate follow-up script based on category and stage.
- Include export/copy summary button.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Business Broker Referral Page

**Id:** business-broker-referral-page  

### Sections Needed

- Add copyable intro email for business brokers.
- Add “deal scenario selector” that shows likely funding needs.
- Add FAQ accordion.
- Include editable affiliate placeholders.

### FLASH-UI Prompt

```txt
Category:** Static landing page / referral funnel  
**Why it matters:** Business brokers are high-leverage referral partners for acquisition financing, working capital, and buyer prep.  
**Best deployment:** Cloneable landing page for affiliates

```text
Design a “Business Broker Referral Partner Page” for Moonshine Capital affiliates.

VISUAL STYLE:
Professional M&A finance page. Use dark navy, cream, muted gold, deal cards, acquisition timeline visuals, and advisory-style layout.

BRAND CONTEXT:
Affiliate partners can use this page to build relationships with business brokers, M&A advisors, franchise consultants, and small business acquisition professionals.

TARGET AUDIENCE:
Business brokers, M&A advisors, franchise brokers, exit planners, consultants, and professionals helping people buy or sell small businesses.

PRIMARY PAIN:
“Buyers and sellers need capital solutions, but the broker does not want to become the funding desk.”

STRONG HOOK:
“Help Buyers Find Capital Without Becoming Their Lender.”

HERO MESSAGE:
“Give your buyers and sellers a funding review path for acquisitions, working capital, equipment, expansion, and post-close cash flow.”

PRIMARY CTA:
“Discuss Referral Partnership”

SECTIONS NEEDED:
1. Hero
2. When business brokers should refer:
   - Buyer needs down payment support
   - Seller wants a stronger buyer
   - Acquisition has working capital gap
   - Equipment or inventory is part of deal
   - Buyer needs post-close capital
3. Funding scenarios for acquisitions
4. Referral process timeline:
   - Broker introduces
   - Buyer completes funding review
   - Funding options are evaluated
   - Broker stays focused on deal
5. Deal readiness checklist
6. Partner profile block:
   - Referred by [Partner Name]
   - Powered by Moonshine Capital
7. FAQ
8. Compliance-safe disclaimer
9. Final CTA

INTERACTION REQUIREMENTS:
- Add copyable intro email for business brokers.
- Add “deal scenario selector” that shows likely funding needs.
- Add FAQ accordion.
- Include editable affiliate placeholders.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Book a Funding Strategy Call Embed

**Id:** book-a-funding-strategy-call-embed  

### Sections Needed

- Use JavaScript to switch between “quick form” and “calendar placeholder.”
- Include placeholder for Calendly/TidyCal embed.
- Add hidden partner tracking fields:
- Include copyable embed container version.

### FLASH-UI Prompt

```txt
Category:** Embed/widget  
**Why it matters:** Turns warm content traffic into scheduled calls.  
**Best deployment:** Blog posts, partner profile pages, thank-you pages, calculators

```text
Design a compact “Book a Funding Strategy Call” embed widget for Moonshine Capital affiliate partners.

VISUAL STYLE:
Premium compact fintech CTA. Dark navy card, green CTA button, subtle gold accent, trust badges, clean form fields, mobile-first.

BRAND CONTEXT:
This widget is embedded inside partner pages, blog posts, calculator results, application thank-you pages, and niche funnels to convert warm visitors into calls.

TARGET USER:
Prospects who are interested but not ready to apply immediately.

PRIMARY PAIN:
“I have questions before I submit financial info.”

STRONG HOOK:
“Not Sure What Funding Path Fits? Talk It Through.”

HERO MESSAGE:
“Book a short funding strategy call to review your situation, documents, timeline, and next best step.”

PRIMARY CTA:
“Book My Funding Call”

WIDGET SECTIONS:
1. Compact headline and trust badges
2. Mini intake fields:
   - Name
   - Email
   - Phone
   - Business type
   - Monthly revenue range
   - Funding goal
3. Calendar placeholder area
4. “What we’ll cover” checklist:
   - Funding goal
   - Revenue profile
   - Documents needed
   - Best next step
5. Partner profile mini-card
6. CTA button

INTERACTION REQUIREMENTS:
- Use JavaScript to switch between “quick form” and “calendar placeholder.”
- Include placeholder for Calendly/TidyCal embed.
- Add hidden partner tracking fields:
   - partner_id
   - campaign
   - source
- Include copyable embed container version.

OUTPUT:
Generate embeddable static HTML/CSS/JS.
```
```

## White-Label Application Embed

**Id:** white-label-application-embed  

### Sections Needed

- Name
- Email
- Phone
- Business name
- Industry
- Time in business
- Monthly revenue
- Bank account type
- Amount requested
- Purpose of funds
- Desired timeline
- Preferred next step
- Consent checkbox
- Partner attribution display
- Submit CTA
- Multi-step JavaScript form.
- Save progress in localStorage.
- Add placeholder webhook endpoint in code comments.
- Add hidden fields:
- Include success screen.

### FLASH-UI Prompt

```txt
Category:** Core conversion widget  
**Why it matters:** Every partner needs a clean application path that can live anywhere.  
**Best deployment:** Partner websites, Wix pages, WordPress, static pages

```text
Design a “White-Label Funding Application Embed” for Moonshine Capital affiliate partners.

VISUAL STYLE:
High-trust application card. Clean white card on dark navy background, green progress states, clear icons, minimal friction, professional fintech form design.

BRAND CONTEXT:
This is a partner-branded application embed that allows prospects to start a funding request from a partner page, blog, landing page, or website. It should look like the partner has a professional funding desk powered by Moonshine Capital.

TARGET USER:
Small business owners, gig workers, ecommerce sellers, contractors, truckers, real estate investors, and self-employed applicants.

PRIMARY PAIN:
“I need funding options, but I do not want a confusing application maze.”

STRONG HOOK:
“Start Your Funding Review in Minutes.”

HERO MESSAGE:
“Share a few details so we can understand your business, funding goal, and next best step.”

PRIMARY CTA:
“Start Funding Review”

FIELDS:
Step 1: Contact
- Name
- Email
- Phone

Step 2: Business Profile
- Business name
- Industry
- Time in business
- Monthly revenue
- Bank account type

Step 3: Funding Goal
- Amount requested
- Purpose of funds
- Desired timeline
- Preferred next step

Step 4: Submit
- Consent checkbox
- Partner attribution display
- Submit CTA

SECTIONS NEEDED:
1. Compact hero
2. Multi-step application form
3. Progress bar
4. Partner attribution card:
   - Referred by [Partner Name]
   - Powered by Moonshine Capital
5. Trust notes:
   - No guarantee of approval
   - Options depend on review
   - Information used to evaluate fit
6. Confirmation state:
   - “Application Started”
   - Next steps
   - Booking CTA

INTERACTION REQUIREMENTS:
- Multi-step JavaScript form.
- Save progress in localStorage.
- Add placeholder webhook endpoint in code comments.
- Add hidden fields:
   - partner_id
   - campaign_id
   - source_url
- Include success screen.

OUTPUT:
Generate static HTML/CSS/JS suitable for iframe or direct embed.
```
```

## Partner Certification Quiz

**Id:** partner-certification-quiz  

### Sections Needed

- JavaScript quiz engine.
- Score calculation.
- Show correct/incorrect feedback.
- Generate certificate-style completion card.
- Save completion result in localStorage.
- Include print/download placeholder.

### FLASH-UI Prompt

```txt
Category:** White-label training/compliance tool  
**Why it matters:** Prevents partners from marketing like caffeinated raccoons.  
**Best deployment:** Partner onboarding portal

```text
Design a “Funding Partner Certification Quiz” for Moonshine Capital affiliates.

VISUAL STYLE:
Professional training assessment UI. Navy, white, green pass states, red correction states, gold achievement badge, course-completion dashboard energy.

BRAND CONTEXT:
Before partners promote funding offers, they should understand basic funding language, compliance-safe marketing, lead qualification, document expectations, bank connection messaging, and what not to promise.

TARGET USER:
New affiliate partners completing onboarding.

PRIMARY PAIN:
“New partners want to promote before they understand the rules, product fit, or what not to say.”

STRONG HOOK:
“Get Certified Before You Start Slanging Funding Links.”

HERO MESSAGE:
“Complete this short quiz to prove you understand the basics of qualifying leads, explaining funding, and avoiding risky claims.”

PRIMARY CTA:
“Start Certification”

QUIZ AREAS:
1. Funding basics
2. Lead qualification
3. Product fit
4. Documents
5. Bank connection
6. Compliance-safe language
7. Follow-up expectations
8. Partner conduct

SECTIONS NEEDED:
1. Hero
2. Quiz progress bar
3. Multiple-choice quiz cards
4. Instant feedback after each question
5. Final score
6. Pass/fail result:
   - Pass: show certificate badge
   - Fail: show retry recommendations
7. Copyable completion summary
8. “Next onboarding step” CTA

INTERACTION REQUIREMENTS:
- JavaScript quiz engine.
- Score calculation.
- Show correct/incorrect feedback.
- Generate certificate-style completion card.
- Save completion result in localStorage.
- Include print/download placeholder.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Partner Performance Scorecard

**Id:** partner-performance-scorecard  

### Sections Needed

- New contacts
- Follow-ups sent
- Referral partners contacted
- Applications started
- Applications completed
- Bank connections completed
- Documents collected
- Deals submitted
- Funded deals
- Estimated commission
- Input fields for weekly numbers.
- Calculate performance score.
- Show result:
- Save weekly scorecards in localStorage.
- Show simple trend history.

### FLASH-UI Prompt

```txt
Category:** White-label affiliate dashboard  
**Why it matters:** Makes effort measurable.  
**Best deployment:** Partner portal / weekly check-in tool

```text
Design a “Partner Performance Scorecard” dashboard for Moonshine Capital affiliates.

VISUAL STYLE:
Modern affiliate performance dashboard. Dark sidebar, KPI cards, green/yellow/red performance indicators, weekly trend bars, clean CRM-style tables.

BRAND CONTEXT:
Affiliate partners need a simple way to track activity, leads, applications, follow-ups, referral sources, funded deals, and estimated commissions.

TARGET USER:
Funding affiliates who need to see whether their activity is turning into pipeline.

PRIMARY PAIN:
“Partners confuse being busy with building a funding business.”

STRONG HOOK:
“Your Activity Is Either Building Pipeline or Producing Excuses.”

HERO MESSAGE:
“Track outreach, leads, applications, follow-ups, deal movement, and estimated commission from one weekly scorecard.”

PRIMARY CTA:
“Update My Scorecard”

METRICS:
- New contacts
- Follow-ups sent
- Referral partners contacted
- Applications started
- Applications completed
- Bank connections completed
- Documents collected
- Deals submitted
- Funded deals
- Estimated commission

SECTIONS NEEDED:
1. Dashboard hero
2. Weekly KPI cards
3. Activity score
4. Pipeline score
5. Follow-up score
6. Referral partner score
7. Estimated commission card
8. Weekly notes section
9. Recommended next action
10. Streak tracker
11. Final CTA: “Plan Next Week”

INTERACTION REQUIREMENTS:
- Input fields for weekly numbers.
- Calculate performance score.
- Show result:
   - Red: activity problem
   - Yellow: pipeline building
   - Green: operator mode
- Save weekly scorecards in localStorage.
- Show simple trend history.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Funding Opportunity Report Generator

**Id:** funding-opportunity-report-generator  

### Sections Needed

- Prospect name
- Business name
- Industry
- Monthly revenue
- Time in business
- Funding amount requested
- Funding purpose
- Credit range
- Bank account type
- Documents available
- Urgency
- Notes
- JavaScript report generation.
- Conditional recommendations.
- Copy-to-clipboard.
- Save generated reports in localStorage.
- Print-friendly report styling.

### FLASH-UI Prompt

```txt
Category:** White-label prospect-facing report  
**Why it matters:** Makes affiliates look consultative, not transactional.  
**Best deployment:** Partner tool + downloadable/copyable report

```text
Design a “Funding Opportunity Report Generator” for Moonshine Capital affiliate partners.

VISUAL STYLE:
Premium financial report builder. White report cards, dark navy header, gold highlights, green recommendation badges, executive-summary layout.

BRAND CONTEXT:
After a prospect shares basic business info, the affiliate can generate a professional-looking opportunity report summarizing funding fit, possible routes, missing documents, risks, and next steps.

TARGET USER:
Affiliate partners who want to send prospects a high-perceived-value summary after a funding conversation.

PRIMARY PAIN:
“Affiliates need to look like advisors, not just link droppers.”

STRONG HOOK:
“Turn a Funding Conversation Into a Professional Opportunity Report.”

HERO MESSAGE:
“Enter the prospect’s business details and generate a clean summary with funding routes, readiness notes, document needs, and next steps.”

PRIMARY CTA:
“Generate Report”

INPUTS:
- Prospect name
- Business name
- Industry
- Monthly revenue
- Time in business
- Funding amount requested
- Funding purpose
- Credit range
- Bank account type
- Documents available
- Urgency
- Notes

REPORT OUTPUT:
1. Executive summary
2. Funding readiness snapshot
3. Best-fit funding routes
4. Potential blockers
5. Documents needed
6. Recommended next step
7. Partner contact info
8. Disclaimer:
   - Not an approval
   - Options depend on review
   - Terms vary

SECTIONS NEEDED:
1. Hero
2. Input form
3. Live report preview
4. Readiness badge
5. Copy report button
6. Print/download placeholder
7. Email draft to send report

INTERACTION REQUIREMENTS:
- JavaScript report generation.
- Conditional recommendations.
- Copy-to-clipboard.
- Save generated reports in localStorage.
- Print-friendly report styling.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## White-Label Newsletter Template Builder

**Id:** white-label-newsletter-template-builder  

### Sections Needed

- Partner name
- Audience type:
- Newsletter topic
- CTA type:
- Application link
- Booking link
- JavaScript content generation using preset templates.
- Copy each newsletter section.
- Save newsletters in localStorage.
- Include plain-text and HTML-style preview tabs.

### FLASH-UI Prompt

```txt
Category:** Partner retention/content tool  
**Why it matters:** Keeps affiliates top-of-mind with their audience.  
**Best deployment:** Partner portal tool

```text
Design a “White-Label Funding Newsletter Builder” for Moonshine Capital affiliate partners.

VISUAL STYLE:
Editorial fintech newsletter builder. Clean white writing panels, dark navy preview frame, green CTA blocks, content card modules, professional but simple.

BRAND CONTEXT:
Affiliate partners need monthly or weekly newsletters they can send to business owners, referral partners, CPAs, real estate contacts, and local networks. This tool helps them generate a polished funding newsletter without writing from scratch.

TARGET USER:
Affiliate partners who need consistent nurture content.

PRIMARY PAIN:
“I know I should stay in touch with my network, but I have no idea what to send.”

STRONG HOOK:
“Stay Top-of-Mind Without Writing From a Blank Page.”

HERO MESSAGE:
“Generate a white-label business funding newsletter with an intro, featured tip, funding topic, referral CTA, and application link.”

PRIMARY CTA:
“Build Newsletter”

INPUTS:
- Partner name
- Audience type:
   - Business owners
   - CPAs/referral partners
   - Truckers
   - Ecommerce sellers
   - Real estate investors
   - Local businesses
   - Startup founders
- Newsletter topic
- CTA type:
   - Apply
   - Book call
   - Download checklist
   - Reply with questions
- Application link
- Booking link

OUTPUT MODULES:
1. Subject line options
2. Opening note
3. Funding tip
4. Main article teaser
5. Referral ask
6. CTA block
7. Compliance-safe disclaimer
8. Social post version

SECTIONS NEEDED:
1. Hero
2. Newsletter builder form
3. Live email preview
4. Subject line generator
5. Copy buttons
6. Saved newsletters
7. Final CTA

INTERACTION REQUIREMENTS:
- JavaScript content generation using preset templates.
- Copy each newsletter section.
- Save newsletters in localStorage.
- Include plain-text and HTML-style preview tabs.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Campaign Landing Page Pack Generator

**Id:** campaign-landing-page-pack-generator  

### Sections Needed

- Niche:
- Partner name
- City/market
- Primary funding offer
- CTA link
- Campaign goal
- JavaScript dynamic generation.
- Copy buttons per output.
- Save packs in localStorage.
- Include editable placeholders.

### FLASH-UI Prompt

```txt
Category:** White-label campaign tool  
**Why it matters:** Converts one campaign idea into a funnel pack.  
**Best deployment:** Partner portal / internal ops tool

```text
Design a “Campaign Landing Page Pack Generator” for Moonshine Capital affiliate partners.

VISUAL STYLE:
Campaign command center. Dark luxe dashboard, bento grid, campaign cards, page preview, email/social/script output panels.

BRAND CONTEXT:
Affiliate partners need complete campaign kits, not isolated pages. This tool generates the structure for a niche landing page plus matching email, DM script, social posts, CTA copy, and tracking link guidance.

TARGET USER:
Affiliate partners launching niche campaigns.

PRIMARY PAIN:
“I have an audience idea, but I need the whole campaign package, not one lonely landing page.”

STRONG HOOK:
“Turn One Niche Into a Full Funding Campaign.”

HERO MESSAGE:
“Choose a niche and generate a landing page outline, hook, CTA, email, DM, social posts, lead magnet angle, and tracking setup.”

PRIMARY CTA:
“Generate Campaign Pack”

INPUTS:
- Niche:
   - Truckers
   - CPAs
   - Ecommerce sellers
   - Real estate investors
   - Contractors
   - Restaurants
   - Salons
   - Gyms
   - Med spas
   - Cleaning companies
   - Startup founders
- Partner name
- City/market
- Primary funding offer
- CTA link
- Campaign goal

OUTPUT:
1. Landing page hero copy
2. Page sections
3. Lead magnet idea
4. CTA button copy
5. Email announcement
6. LinkedIn post
7. Facebook post
8. DM script
9. Follow-up message
10. UTM campaign suggestion
11. Compliance reminder

SECTIONS NEEDED:
1. Hero
2. Campaign input form
3. Generated campaign pack
4. Preview cards by channel
5. Copy buttons
6. Saved campaign packs
7. “Next action checklist”

INTERACTION REQUIREMENTS:
- JavaScript dynamic generation.
- Copy buttons per output.
- Save packs in localStorage.
- Include editable placeholders.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Training Micro-Course Portal

**Id:** training-micro-course-portal  

### Sections Needed

- Mark lessons complete.
- Save progress in localStorage.
- Show completion percentage.
- Unlock certification CTA after 80% completion.
- Add video placeholder cards.

### FLASH-UI Prompt

```txt
Category:** Partner onboarding/static course portal  
**Why it matters:** Turns affiliates into operators with short lessons.  
**Best deployment:** Partner onboarding subdomain

```text
Design a “Funding Partner Micro-Course Portal” for Moonshine Capital affiliates.

VISUAL STYLE:
Premium training academy meets fintech dashboard. Dark navy sidebar, white lesson cards, green progress bars, gold completion badges, clean video placeholders.

BRAND CONTEXT:
New partners need short, practical lessons on finding leads, qualifying business owners, explaining funding, referral partner outreach, follow-up, CRM discipline, and compliance-safe marketing.

TARGET USER:
New and active affiliate partners.

PRIMARY PAIN:
“Training is usually a haunted folder of videos nobody finishes.”

STRONG HOOK:
“Learn the Funding Business in Short, Useful Lessons.”

HERO MESSAGE:
“Complete practical micro-lessons that help you find prospects, qualify leads, explain funding, submit cleaner deals, and follow up like an operator.”

PRIMARY CTA:
“Start Lesson One”

COURSE MODULES:
1. Funding business overview
2. Who makes a good prospect
3. How to ask qualification questions
4. Funding product basics
5. Referral partner outreach
6. Social posting basics
7. Follow-up discipline
8. Documents and bank connection
9. Compliance-safe language
10. Deal submission checklist

SECTIONS NEEDED:
1. Dashboard hero
2. Progress bar
3. Module grid
4. Featured lesson card
5. Lesson checklist
6. Quiz/certification CTA
7. Resource links
8. Daily action CTA

INTERACTION REQUIREMENTS:
- Mark lessons complete.
- Save progress in localStorage.
- Show completion percentage.
- Unlock certification CTA after 80% completion.
- Add video placeholder cards.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Business Credit Prep Plan Generator

**Id:** business-credit-prep-plan-generator  

### Sections Needed

- Business structure
- EIN status
- Business bank account status
- Business address status
- Business phone/email/website status
- Monthly revenue
- Current credit range
- Existing business credit accounts
- Time in business
- Biggest issue
- JavaScript scoring.
- Conditional plan generation.
- localStorage saved plan.
- Copy-to-clipboard.
- Print-friendly styling.

### FLASH-UI Prompt

```txt
Category:** White-label nurture tool  
**Why it matters:** Monetizes “not ready yet” leads and creates future applicants.  
**Best deployment:** Not-ready page, partner portal, lead magnet

```text
Design a “Business Credit Prep Plan Generator” for Moonshine Capital prospects and affiliate partners.

VISUAL STYLE:
Fintech roadmap planner. Clean white cards, navy header, green progress steps, orange warning notes, checklist timelines.

BRAND CONTEXT:
Some applicants are not funding-ready. This tool creates a simple 30/60/90-day business credit and funding prep plan to help them improve readiness.

TARGET AUDIENCE:
Business owners, gig workers, startups, sole proprietors, and applicants who are not yet strong candidates for funding.

PRIMARY PAIN:
“I need funding, but my business profile is weak and I don’t know what to fix first.”

STRONG HOOK:
“Not Fundable Yet? Build the File.”

HERO MESSAGE:
“Answer a few questions and get a 30/60/90-day prep plan for business credit, banking, documents, revenue organization, and funding readiness.”

PRIMARY CTA:
“Generate My Prep Plan”

INPUTS:
- Business structure
- EIN status
- Business bank account status
- Business address status
- Business phone/email/website status
- Monthly revenue
- Current credit range
- Existing business credit accounts
- Time in business
- Biggest issue

OUTPUT PLAN:
1. Readiness score
2. 30-day plan
3. 60-day plan
4. 90-day plan
5. Documents to organize
6. Banking cleanup checklist
7. Business credit basics
8. Recommended next step
9. CTA to book strategy call

SECTIONS NEEDED:
1. Hero
2. Prep assessment form
3. Readiness score
4. 30/60/90 roadmap
5. Checklist
6. Copy/print plan
7. Follow-up CTA

INTERACTION REQUIREMENTS:
- JavaScript scoring.
- Conditional plan generation.
- localStorage saved plan.
- Copy-to-clipboard.
- Print-friendly styling.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Webinar Funnel Kit Generator

**Id:** webinar-funnel-kit-generator  

### Sections Needed

- Webinar topic
- Target audience
- Date/time placeholder
- Partner name
- Registration link
- Application link
- Booking link
- JavaScript template generator.
- Copy buttons.
- Save generated kits with localStorage.
- Add editable placeholders.

### FLASH-UI Prompt

```txt
Category:** Campaign tool  
**Why it matters:** Helps partners run education-driven lead gen.  
**Best deployment:** Partner portal

```text
Design a “Webinar Funnel Kit Generator” for Moonshine Capital affiliate partners.

VISUAL STYLE:
Webinar campaign dashboard. Dark navy, purple/green accents, event cards, registration page preview, email sequence cards, CTA modules.

BRAND CONTEXT:
Affiliates can host funding classes, business credit sessions, local workshops, CPA referral webinars, or niche industry funding trainings. This tool builds a full webinar funnel kit.

TARGET USER:
Affiliate partners who want to generate leads through education instead of cold outreach only.

PRIMARY PAIN:
“I want to host a webinar, but I need the page, topic, emails, reminders, and follow-up copy.”

STRONG HOOK:
“Launch a Funding Webinar Without Building the Whole Funnel From Scratch.”

HERO MESSAGE:
“Choose your audience and topic to generate a registration page outline, event description, reminder emails, social posts, and post-webinar follow-up.”

PRIMARY CTA:
“Build Webinar Kit”

INPUTS:
- Webinar topic
- Target audience
- Date/time placeholder
- Partner name
- Registration link
- Application link
- Booking link

OUTPUT:
1. Webinar title options
2. Registration page hero
3. Agenda
4. Who should attend
5. Reminder email 1
6. Reminder email 2
7. Day-of SMS
8. Social post
9. Post-webinar follow-up
10. Funding CTA

SECTIONS NEEDED:
1. Hero
2. Webinar kit builder form
3. Registration page preview
4. Email sequence cards
5. Social promo cards
6. Follow-up section
7. Copy buttons
8. Saved webinar kits

INTERACTION REQUIREMENTS:
- JavaScript template generator.
- Copy buttons.
- Save generated kits with localStorage.
- Add editable placeholders.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Partner Leaderboard Dashboard

**Id:** partner-leaderboard-dashboard  

### Sections Needed

- New leads
- Completed applications
- Bank connections
- Deals submitted
- Funded deals
- Referral partners contacted
- Daily 5 streak
- Estimated commission
- Include sample leaderboard data.
- JavaScript filter by week/team/metric.
- Badge display logic.
- Mobile leaderboard cards.

### FLASH-UI Prompt

```txt
Category:** Gamified affiliate tool  
**Why it matters:** Creates competition, visibility, and behavior loops.  
**Best deployment:** Internal partner dashboard

```text
Design a “Partner Leaderboard Dashboard” for Moonshine Capital affiliate partners.

VISUAL STYLE:
Gamified fintech leaderboard. Dark mode, neon green/gold highlights, ranking cards, badges, weekly challenge panels, clean data table.

BRAND CONTEXT:
Moonshine Capital wants to motivate partner activity without making everything feel like cheesy MLM theater. The leaderboard should reward meaningful behavior: outreach, completed applications, submitted deals, bank connections, referrals, and funded deals.

TARGET USER:
Affiliate partners and team leaders.

PRIMARY PAIN:
“Partners need visibility, momentum, and competition — but not fake motivational confetti.”

STRONG HOOK:
“Compete on Actions That Actually Build Pipeline.”

HERO MESSAGE:
“Track weekly partner activity, celebrate operators, and spotlight the behaviors that create funded deals.”

PRIMARY CTA:
“View This Week’s Rankings”

METRICS:
- New leads
- Completed applications
- Bank connections
- Deals submitted
- Funded deals
- Referral partners contacted
- Daily 5 streak
- Estimated commission

SECTIONS NEEDED:
1. Hero
2. Top 3 partner cards
3. Leaderboard table
4. Weekly challenge
5. Badge system:
   - Pipeline Builder
   - Follow-Up Machine
   - Referral Hunter
   - First Funded Deal
   - Consistency Beast
6. Team stats
7. Personal rank card
8. Final CTA: “Log Today’s Activity”

INTERACTION REQUIREMENTS:
- Include sample leaderboard data.
- JavaScript filter by week/team/metric.
- Badge display logic.
- Mobile leaderboard cards.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Referral Agreement Framework Generator

**Id:** referral-agreement-framework-generator  

### Sections Needed

- Affiliate name
- Referral partner name
- Referral partner type
- Client type
- Preferred intro method
- Communication expectations
- Referral tracking method
- Notes
- JavaScript document generation.
- Copy-to-clipboard.
- Print-friendly styling.
- Save drafts in localStorage.

### FLASH-UI Prompt

```txt
Category:** Referral partner ops tool  
**Why it matters:** Helps affiliates formalize referral relationships without pretending to be lawyers.  
**Best deployment:** Internal affiliate resource

```text
Design a “Referral Agreement Framework Generator” for Moonshine Capital affiliates.

VISUAL STYLE:
Professional document-builder interface. Clean white, navy, gold highlights, legal-doc inspired cards, clear disclaimers.

BRAND CONTEXT:
Affiliates often build relationships with CPAs, business brokers, consultants, and other referral partners. This tool creates a plain-English non-legal framework draft they can use to start conversations before seeking proper legal review.

TARGET USER:
Affiliate partners developing referral relationships.

PRIMARY PAIN:
“I found a referral partner, but I don’t know how to outline expectations without making it weird.”

STRONG HOOK:
“Put the Referral Relationship in Writing Before Memory Gets Creative.”

HERO MESSAGE:
“Generate a simple referral framework covering who refers whom, what happens next, communication expectations, and compliance-safe boundaries.”

PRIMARY CTA:
“Generate Framework”

INPUTS:
- Affiliate name
- Referral partner name
- Referral partner type
- Client type
- Preferred intro method
- Communication expectations
- Referral tracking method
- Notes

OUTPUT:
1. Plain-English referral framework
2. Roles and responsibilities
3. Referral process
4. Communication expectations
5. What not to promise
6. Tracking notes
7. Disclaimer:
   - Not legal advice
   - Review with attorney if needed
8. Copyable email intro

SECTIONS NEEDED:
1. Hero
2. Input form
3. Generated framework preview
4. Copy buttons
5. Conversation checklist
6. FAQ

INTERACTION REQUIREMENTS:
- JavaScript document generation.
- Copy-to-clipboard.
- Print-friendly styling.
- Save drafts in localStorage.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Lead Magnet Builder for Affiliates

**Id:** lead-magnet-builder-for-affiliates  

### Sections Needed

- Target audience
- Pain point
- Lead magnet type:
- Funding angle
- Partner name
- CTA link
- JavaScript template generation.
- Copy-to-clipboard.
- Save generated lead magnets in localStorage.
- Include placeholders for partner tracking links.

### FLASH-UI Prompt

```txt
Category:** White-label content tool  
**Why it matters:** Helps affiliates build email lists and vertical campaigns.  
**Best deployment:** Partner portal

```text
Design a “Lead Magnet Builder” for Moonshine Capital affiliate partners.

VISUAL STYLE:
Creator-fintech campaign builder. Dark dashboard, white preview cards, green CTA buttons, lead magnet templates, bento layout.

BRAND CONTEXT:
Affiliates need niche-specific guides, checklists, scorecards, and cheat sheets to attract leads. This tool generates the structure and copy for a lead magnet.

TARGET USER:
Affiliate partners creating content campaigns.

PRIMARY PAIN:
“I need something valuable to offer besides ‘click my funding link.’”

STRONG HOOK:
“Build a Lead Magnet That Doesn’t Smell Like Desperation.”

HERO MESSAGE:
“Choose a niche, pain point, and CTA to generate a funding-related lead magnet outline, landing page copy, and follow-up message.”

PRIMARY CTA:
“Create Lead Magnet”

INPUTS:
- Target audience
- Pain point
- Lead magnet type:
   - Checklist
   - Scorecard
   - Calculator
   - Guide
   - Cheat sheet
   - Email mini-course
   - Worksheet
- Funding angle
- Partner name
- CTA link

OUTPUT:
1. Lead magnet title
2. Short description
3. Landing page hero copy
4. What’s inside
5. Opt-in CTA
6. Follow-up email
7. Social promo post
8. Suggested filename
9. Disclaimer

SECTIONS NEEDED:
1. Hero
2. Builder form
3. Generated lead magnet preview
4. Landing page copy panel
5. Email/social copy panel
6. Copy buttons
7. Saved assets

INTERACTION REQUIREMENTS:
- JavaScript template generation.
- Copy-to-clipboard.
- Save generated lead magnets in localStorage.
- Include placeholders for partner tracking links.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Partner Links Hub

**Id:** partner-links-hub  

### Sections Needed

- Mobile-first layout.
- Add editable placeholder variables.
- Add click tracking placeholders.
- Include copy-ready HTML comments for replacing partner links.

### FLASH-UI Prompt

```txt
Category:** Static site / partner utility page  
**Why it matters:** Every partner needs one public link destination.  
**Best deployment:** `partners.distilledfunding.com/[partner-slug]` or standalone static page

```text
Design a “Partner Links Hub” static page for Moonshine Capital affiliates.

VISUAL STYLE:
Premium link-in-bio meets fintech command center. Dark navy, green/gold CTAs, clean stacked cards, partner photo placeholder, trust badges, mobile-first.

BRAND CONTEXT:
Each affiliate needs one clean public page with their application link, booking link, document checklist, funding tools, FAQ, social links, and referral partner resources.

TARGET USER:
Affiliate partners who need a simple public-facing link hub for social profiles, QR codes, email signatures, and DMs.

PRIMARY PAIN:
“Partners have too many links and no credible front door.”

STRONG HOOK:
“Your Funding Desk in One Link.”

HERO MESSAGE:
“Explore funding options, book a call, check readiness, gather documents, or connect with [Partner Name].”

PRIMARY CTA:
“Start Funding Review”

SECTIONS NEEDED:
1. Partner hero:
   - Partner photo placeholder
   - Name
   - Title
   - Powered by Moonshine Capital
   - Short credibility bio
2. Primary CTA cards:
   - Start funding review
   - Book a call
   - Check funding readiness
   - Get document checklist
   - Business funding FAQ
3. Best-fit funding lanes
4. Referral partner section
5. Social links
6. Trust notes
7. Final CTA

INTERACTION REQUIREMENTS:
- Mobile-first layout.
- Add editable placeholder variables.
- Add click tracking placeholders.
- Include copy-ready HTML comments for replacing partner links.

OUTPUT:
Generate static HTML/CSS/JS.
```

---

## Best “new net” build order

Here is the more disciplined priority list from this corrected pass:

| Priority | Asset | Why |
|---|---|---|
| P0 | White-Label Application Embed | Core conversion path |
| P0 | Partner Link Generator | Every partner needs clean trackable links |
| P0 | Lead Quality Grader | Prevents garbage pipeline |
| P0 | Applicant Status Lookup Widget | Reduces repetitive follow-up |
| P0 | Partner Links Hub | Gives every affiliate a credible public front door |
| P1 | Referral Source Tracker | Builds strategic partner channels |
| P1 | Funding Product Explainer Tool | Improves sales conversations |
| P1 | Partner Certification Quiz | Reduces compliance risk |
| P1 | Funding Opportunity Report Generator | Makes affiliates look consultative |
| P1 | Business Credit Prep Plan Generator | Monetizes “not ready yet” |
| P2 | Training Micro-Course Portal | Better onboarding and retention |
| P2 | Campaign Landing Page Pack Generator | Turns niches into campaigns |
| P2 | White-Label Newsletter Builder | Long-term nurture engine |
| P2 | Partner Performance Scorecard | Makes activity measurable |
| P2 | Partner Leaderboard Dashboard | Adds competition without chaos |

The clean architecture is:

```text
Partner gets public front door
→ partner links hub
→ application embed / booking embed / readiness tools
→ lead quality grader
→ follow-up copilot
→ status lookup
→ report generator
→ CRM/pipeline action
```

That’s a real affiliate enablement system — not “here’s your link, go bother your barber.”
```

