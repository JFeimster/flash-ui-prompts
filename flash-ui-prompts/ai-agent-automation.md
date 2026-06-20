# AI Agent / Automation Prompt Library

Short description: AI agents, automation libraries, directories, and productized system pages.
Source JSON: `data/flash-ui-prompts/ai-agent-automation-prompts.json`
Count: 25

## Quick Index
- [Businesses for Sale Directory](#businesses-for-sale-directory)
- [Business Acquisition Deal Analyzer](#business-acquisition-deal-analyzer)
- [AI Referral Partner Agent Landing Page](#ai-referral-partner-agent-landing-page)
- [AI Referral Partner Agent Demo Tool](#ai-referral-partner-agent-demo-tool)
- [AI Agent & Custom GPT Library Homepage](#ai-agent-custom-gpt-library-homepage)
- [AI Agent Detail Page Template](#ai-agent-detail-page-template)
- [AI Automation Systems Library Homepage](#ai-automation-systems-library-homepage)
- [Automation Library Homepage](#automation-library-homepage)
- [Automation Detail Page Template](#automation-detail-page-template)
- [Tally to HubSpot Workflow Page](#tally-to-hubspot-workflow-page)
- [Article Draft → MDX → GitHub Publishing Workflow Page](#article-draft-mdx-github-publishing-workflow-page)
- [AI Systems Monetization Map](#ai-systems-monetization-map)
- [Founder Agent Stack Landing Page](#founder-agent-stack-landing-page)
- [Funding Broker Agent Stack Page](#funding-broker-agent-stack-page)
- [CRM & Ops Agent Stack Page](#crm-ops-agent-stack-page)
- [Content & SEO Agent Stack Page](#content-seo-agent-stack-page)
- [Local / Vertical Agent Stack Page](#local-vertical-agent-stack-page)
- [Funding Workflow Automation Collection Page](#funding-workflow-automation-collection-page)
- [Partner Automations Collection Page](#partner-automations-collection-page)
- [AI Systems Directory Admin Dashboard](#ai-systems-directory-admin-dashboard)
- [Agent Profile JSON Builder](#agent-profile-json-builder)
- [Automation Profile JSON Builder](#automation-profile-json-builder)
- [AI Agent Library Pricing Page](#ai-agent-library-pricing-page)
- [AI Agent Demo Gallery](#ai-agent-demo-gallery)
- [“Build My AI System” Intake Funnel](#build-my-ai-system-intake-funnel)

## Businesses for Sale Directory

**Id:** businesses-for-sale-directory  

### Sections Needed

- JavaScript filtering by industry, location, price, and seller financing.
- Listing cards using sample JSON data.
- “Save listing” button using localStorage.
- Modal popup for listing details.
- CTA buttons:

### FLASH-UI Prompt

```txt
Category:** Directory / marketplace  
**Audience:** aspiring acquisition entrepreneurs, searchers, business brokers, local investors  
**Goal:** build a static “businesses for sale” marketplace shell that could later connect to Airtable, Notion, Google Sheets, or a JSON file.

```text
Design a premium “Businesses for Sale Directory” static website for acquisition entrepreneurs, local investors, business brokers, and operators looking for small businesses to buy.

VISUAL STYLE:
Private-equity meets indie acquisition marketplace. Use dark navy, cream, muted gold, clean listing cards, deal tags, financial snapshot cards, and a polished directory UI. It should feel like a serious micro-acquisition marketplace, not Craigslist wearing a necktie.

BRAND CONTEXT:
This directory helps users discover small businesses for sale, micro-businesses, local service businesses, ecommerce stores, agencies, SaaS assets, franchises, and owner-financed opportunities.

TARGET VISITOR PSYCHOLOGY:
The visitor wants deal flow, clarity, filters, and enough information to decide whether a business is worth investigating. They are curious but skeptical. They do not want broker fluff.

STRONG HOOK:
“Find Small Businesses Worth Buying Before Everyone Else Does.”

HERO MESSAGE:
“Browse acquisition opportunities by industry, location, asking price, revenue, cash flow, seller financing, and deal type.”

PRIMARY CTA:
“Browse Businesses for Sale”

SECTIONS NEEDED:
1. Hero section
2. Search and filter bar
   - Industry
   - Location
   - Asking price
   - Revenue range
   - Cash flow range
   - Seller financing available
   - Online vs local business
3. Featured listings grid
4. Deal card fields:
   - Business name
   - Industry
   - Location
   - Asking price
   - Annual revenue
   - Seller discretionary earnings / cash flow
   - Financing available
   - Reason for sale
   - Deal status
5. “Buyer readiness” CTA card
6. “Need acquisition financing?” CTA section
7. Broker submission CTA
8. Saved listings mockup
9. FAQ section
10. Footer CTA

INTERACTION REQUIREMENTS:
- JavaScript filtering by industry, location, price, and seller financing.
- Listing cards using sample JSON data.
- “Save listing” button using localStorage.
- Modal popup for listing details.
- CTA buttons:
   - View Deal
   - Request Info
   - Check Acquisition Financing
   - Submit a Business for Sale

OUTPUT:
Generate static HTML, CSS, and JavaScript files.
```
```

## Business Acquisition Deal Analyzer

**Id:** business-acquisition-deal-analyzer  

### Sections Needed

- Asking price
- Annual revenue
- Annual cash flow / SDE
- Down payment available
- Seller financing amount
- Loan amount needed
- Interest rate
- Loan term
- Estimated monthly operating cushion needed
- Buyer salary requirement
- Estimated monthly debt service
- Cash flow after debt service
- DSCR estimate
- Financing gap
- Buyer salary pressure
- Deal risk rating
- Suggested next step
- JavaScript calculator logic.
- Scenario saving with localStorage.
- Copyable deal summary.

### FLASH-UI Prompt

```txt
Category:** Calculator / acquisition tool  
**Audience:** buyers, searchers, investors, business brokers  
**Goal:** sticky tool for evaluating deals from the directory.

```text
Design a static “Business Acquisition Deal Analyzer” tool for people evaluating small businesses for sale.

VISUAL STYLE:
Financial analysis dashboard with private-equity polish. Dark navy background, cream report cards, gold highlights, green/red deal-quality indicators, clean financial input panels.

BRAND CONTEXT:
This tool helps buyers evaluate whether a business acquisition looks financially realistic based on asking price, revenue, cash flow, debt service, down payment, seller financing, and working capital needs.

TARGET VISITOR PSYCHOLOGY:
The user found a business for sale and wants to know if the deal is sane before falling in love with the dream of owning a laundromat empire.

STRONG HOOK:
“Run the Numbers Before You Buy the Business.”

HERO MESSAGE:
“Estimate down payment, financing gap, debt service, cash flow coverage, and acquisition risk before chasing the deal.”

PRIMARY CTA:
“Analyze This Deal”

INPUTS:
- Asking price
- Annual revenue
- Annual cash flow / SDE
- Down payment available
- Seller financing amount
- Loan amount needed
- Interest rate
- Loan term
- Estimated monthly operating cushion needed
- Buyer salary requirement

OUTPUTS:
- Estimated monthly debt service
- Cash flow after debt service
- DSCR estimate
- Financing gap
- Buyer salary pressure
- Deal risk rating
- Suggested next step

SECTIONS NEEDED:
1. Hero
2. Deal input form
3. Financial snapshot cards
4. Deal risk meter
5. “What this means” plain-English result
6. Acquisition financing CTA
7. Broker/advisor CTA
8. Saved deal scenarios
9. FAQ

INTERACTION REQUIREMENTS:
- JavaScript calculator logic.
- Scenario saving with localStorage.
- Copyable deal summary.
- Print-friendly report view.
- Color-coded deal quality score.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## AI Referral Partner Agent Landing Page

**Id:** ai-referral-partner-agent-landing-page  

### Sections Needed

- Accountants
- Bookkeepers
- Payroll companies
- Insurance agents
- Business coaches
- Bankers
- CPAs
- Business brokers
- Consultants
- Local chambers
- Add a mini demo widget where user selects referral partner type and city.
- Generate sample outreach angle dynamically with JavaScript.
- Add copy buttons for sample email and follow-up.
- Add mock response tracker table.

### FLASH-UI Prompt

```txt
Category:** AI agent product page  
**Audience:** affiliates, loan brokers, agencies, local business development reps  
**Goal:** productize the referral partner prospecting workflow.

```text
Design a sizzling landing page for an “AI Referral Partner Agent” built for funding affiliates, loan brokers, and local business development operators.

VISUAL STYLE:
Futuristic sales intelligence dashboard. Use dark mode, electric blue, green, gold accents, lead cards, prospecting workflow visuals, AI research panels, and CRM-style pipeline UI.

BRAND CONTEXT:
The AI Referral Partner Agent helps users find local referral partners, research their clientele, generate partnership emails, track responses, and schedule meetings.

TARGET AUDIENCE:
Funding affiliates, loan brokers, commercial finance reps, agency owners, consultants, and local business development operators.

TARGET REFERRAL PARTNERS:
- Accountants
- Bookkeepers
- Payroll companies
- Insurance agents
- Business coaches
- Bankers
- CPAs
- Business brokers
- Consultants
- Local chambers

TARGET VISITOR PSYCHOLOGY:
The visitor knows referral partners could send warm leads but does not know how to find them, research them, pitch them, or follow up without sounding like a desperate networking goblin.

STRONG HOOK:
“Turn Local Professionals Into Referral Partners Without Starting From Scratch.”

HERO MESSAGE:
“Use AI to find local referral partners, understand who they serve, generate personalized outreach, track responses, and book partnership conversations.”

PRIMARY CTA:
“Launch Referral Partner Agent”

SECTIONS NEEDED:
1. Hero with workflow preview
2. The referral partner problem
3. Workflow timeline:
   - Find local partners
   - Research their clientele
   - Generate partnership email
   - Track responses
   - Schedule meetings
4. Target referral partner cards
5. AI output examples:
   - Research summary
   - Partnership angle
   - Email draft
   - Follow-up message
   - Meeting agenda
6. CRM pipeline preview
7. Use cases by audience:
   - Loan broker
   - Funding affiliate
   - Local agency
   - Business consultant
8. Pricing/package placeholder
9. FAQ
10. Final CTA

INTERACTION REQUIREMENTS:
- Add a mini demo widget where user selects referral partner type and city.
- Generate sample outreach angle dynamically with JavaScript.
- Add copy buttons for sample email and follow-up.
- Add mock response tracker table.

OUTPUT:
Generate responsive static HTML/CSS/JS.
```
```

## AI Referral Partner Agent Demo Tool

**Id:** ai-referral-partner-agent-demo-tool  

### Sections Needed

- City / market
- Referral partner type
- Target clientele
- Funding angle
- Partner name
- Booking link
- Application link
- Use JavaScript template logic based on referral partner type.
- Include copy-to-clipboard buttons.
- Save generated campaigns with localStorage.
- Add sample prospect table.
- Add pipeline columns:

### FLASH-UI Prompt

```txt
Category:** Static micro-app / generator  
**Audience:** affiliates and funding partners  
**Goal:** let users simulate the referral partner workflow.

```text
Design a static demo tool called “AI Referral Partner Prospecting Agent.”

VISUAL STYLE:
AI sales research console. Dark navy, black, electric blue, neon green, glassy cards, CRM pipeline columns, prospect cards, and generated message panels.

BRAND CONTEXT:
This tool simulates how an affiliate can identify and contact referral partners such as CPAs, bookkeepers, payroll companies, insurance agents, bankers, and business coaches.

TARGET USER:
Moonshine Capital affiliates and funding partners who want to build referral channels.

STRONG HOOK:
“Find the Referral Partners Hiding in Plain Sight.”

HERO MESSAGE:
“Choose a city, referral partner type, and client niche. Generate a prospecting angle, partnership email, follow-up message, and meeting agenda.”

PRIMARY CTA:
“Generate Referral Campaign”

INPUTS:
- City / market
- Referral partner type
- Target clientele
- Funding angle
- Partner name
- Booking link
- Application link

GENERATED OUTPUT:
1. Referral partner profile
2. Why they are a good fit
3. Likely client pain points
4. Partnership pitch angle
5. Cold email
6. LinkedIn DM
7. Follow-up message
8. Meeting agenda
9. CRM notes
10. Next action checklist

SECTIONS NEEDED:
1. Hero
2. Input form
3. Generated research card
4. Outreach message cards
5. Follow-up timeline
6. Response tracker
7. Saved campaigns
8. Final CTA

INTERACTION REQUIREMENTS:
- Use JavaScript template logic based on referral partner type.
- Include copy-to-clipboard buttons.
- Save generated campaigns with localStorage.
- Add sample prospect table.
- Add pipeline columns:
   - Identified
   - Contacted
   - Replied
   - Meeting Scheduled
   - Active Referral Source

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## AI Agent & Custom GPT Library Homepage

**Id:** ai-agent-custom-gpt-library-homepage  

### Sections Needed

- Funding Broker Agents
- Affiliate Agency Agents
- Business Credit Agents
- Content & SEO Agents
- CRM & Ops Agents
- Local / Vertical Agents
- Compliance Agents
- Founder Finance Agents
- Agent name
- Category
- Platform
- Use case
- Audience
- Difficulty
- Status
- Monetization angle
- CTA: View Agent / Try Demo / Get Template
- JavaScript filtering by category, platform, status, and use case.
- Search by agent name.
- Agent detail modal.

### FLASH-UI Prompt

```txt
Category:** Directory / product library  
**Audience:** founders, affiliates, loan brokers, creators, agency owners  
**Goal:** discovery, SEO, demos, templates, lead gen.

```text
Design a premium “AI Agent & Custom GPT Library” website for founders, affiliates, loan brokers, creators, agency owners, and small business operators.

VISUAL STYLE:
Futuristic AI app marketplace. Dark mode, glowing cards, category filters, agent badges, demo buttons, featured collections, clean SaaS marketplace UX.

BRAND CONTEXT:
This library showcases AI agents, Custom GPTs, automation assistants, workflow copilots, and prompt-powered tools for business funding, affiliate agencies, business credit, CRM ops, content, SEO, and local verticals.

TARGET VISITOR PSYCHOLOGY:
The visitor wants to discover useful AI tools without digging through random chat links, half-baked prompts, and AI slop from people selling “10,000 prompts” like digital gas station sushi.

STRONG HOOK:
“AI Agents Built for Operators, Not Prompt Collectors.”

HERO MESSAGE:
“Browse practical AI agents and Custom GPTs for funding brokers, affiliate agencies, business credit, CRM cleanup, content creation, SEO, and small business operations.”

PRIMARY CTA:
“Browse AI Agents”

CORE CATEGORIES:
- Funding Broker Agents
- Affiliate Agency Agents
- Business Credit Agents
- Content & SEO Agents
- CRM & Ops Agents
- Local / Vertical Agents
- Compliance Agents
- Founder Finance Agents

SECTIONS NEEDED:
1. Hero
2. Search bar
3. Category filter chips
4. Featured agent cards
5. Agent collection sections
6. “Use case” filter:
   - Lead generation
   - Client intake
   - Follow-up
   - Content creation
   - Deal routing
   - Compliance review
   - CRM cleanup
   - Business credit prep
7. Agent detail modal
8. CTA cards:
   - Request custom agent
   - Submit an agent
   - Buy template pack
   - Join agent library updates
9. FAQ
10. Footer CTA

AGENT CARD FIELDS:
- Agent name
- Category
- Platform
- Use case
- Audience
- Difficulty
- Status
- Monetization angle
- CTA: View Agent / Try Demo / Get Template

INTERACTION REQUIREMENTS:
- JavaScript filtering by category, platform, status, and use case.
- Search by agent name.
- Agent detail modal.
- Featured / live / build-ready badges.
- Sample JSON data for at least 25 agents.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## AI Agent Detail Page Template

**Id:** ai-agent-detail-page-template  

### Sections Needed

- Include agent metadata badges.
- Include demo output preview.
- Include related agent cards.
- Include “copy prompt” placeholder.
- Include “request custom version” CTA.

### FLASH-UI Prompt

```txt
Category:** Product detail page  
**Audience:** users evaluating a specific GPT/agent  
**Goal:** standardize every library entry.

```text
Design an “AI Agent Detail Page Template” for an AI Agent & Custom GPT Library.

VISUAL STYLE:
Premium SaaS product detail page. Dark hero, white content cards, neon accent badges, demo preview panel, clear CTA blocks, feature sections, use case cards.

BRAND CONTEXT:
Each page profiles one AI agent or Custom GPT with a consistent structure for discovery, SEO, demos, monetization, and implementation handoff.

TARGET VISITOR PSYCHOLOGY:
The visitor wants to quickly understand what the agent does, who it is for, how it works, what outputs it provides, and whether they should try it, buy it, or request a version for their business.

STRONG HOOK:
“Meet the AI Agent That Handles [Primary Job].”

HERO MESSAGE:
“[Agent Name] helps [audience] [solve pain point] by generating [core output] through a guided workflow.”

PRIMARY CTA:
“Try This Agent”

SECONDARY CTA:
“Get the Template”

PAGE SECTIONS:
1. Hero
2. At-a-glance summary box:
   - Category
   - Platform
   - Audience
   - Use case
   - Difficulty
   - Status
   - Monetization
3. Problem solved
4. How the agent works
5. Example inputs
6. Example outputs
7. Workflow steps
8. Best use cases
9. Who should use it
10. Who should not use it
11. Prompt / instructions preview
12. Integration notes
13. Monetization ideas
14. Related agents
15. FAQ
16. Final CTA

DESIGN REQUIREMENTS:
- Include agent metadata badges.
- Include demo output preview.
- Include related agent cards.
- Include “copy prompt” placeholder.
- Include “request custom version” CTA.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## AI Automation Systems Library Homepage

**Id:** ai-automation-systems-library-homepage  

### Sections Needed

- Funding Broker Agents
- Affiliate Agency Agents
- Business Credit Agents
- CRM & Ops Agents
- Content & SEO Agents
- Compliance Agents
- Ecommerce Agents
- Real Estate Investor Agents
- Local Business Agents
- Founder Finance Agents
- Intake Automations
- CRM Automations
- Email Automations
- Content Automations
- Partner Automations
- Funding Workflow Automations
- Data Cleanup Automations
- Reporting Automations
- Webhook Utilities
- GitHub/Vercel Automations

### FLASH-UI Prompt

```txt
Category:** Parent library  
**Audience:** operators, builders, affiliates, future team members  
**Goal:** combine AI agents and automations under one clean brand.

```text
Design a premium “AI Automation Systems Library” homepage.

VISUAL STYLE:
Futuristic operations library. Dark mode, bento-grid cards, system diagrams, AI agent cards, automation workflow cards, glowing connector lines, clean technical marketplace feel.

BRAND CONTEXT:
This is the parent library for two major sections:
1. AI Agents — what the user interacts with.
2. Automations — what happens behind the curtain.

The library helps founders, affiliates, agencies, small business operators, and internal team members discover reusable AI agents, GPTs, workflows, SOPs, webhook examples, and automation templates.

TARGET VISITOR PSYCHOLOGY:
The visitor wants useful systems, not scattered prompts and half-documented workflows wandering into the woods to die.

STRONG HOOK:
“AI Agents in Front. Automations Behind the Curtain.”

HERO MESSAGE:
“Explore reusable AI agents, Custom GPTs, automations, SOPs, webhook workflows, and operator-ready systems for funding, CRM, content, partner operations, and business growth.”

PRIMARY CTA:
“Browse the Library”

SECONDARY CTA:
“View Automation Workflows”

CORE SECTIONS:
1. Hero
2. Two major pathway cards:
   - AI Agents
   - Automations
3. Featured systems
4. Agent categories
5. Automation categories
6. Tools and templates section
7. Implementation difficulty legend
8. Monetization map preview
9. Latest additions
10. Request a system CTA

AI AGENT CATEGORIES:
- Funding Broker Agents
- Affiliate Agency Agents
- Business Credit Agents
- CRM & Ops Agents
- Content & SEO Agents
- Compliance Agents
- Ecommerce Agents
- Real Estate Investor Agents
- Local Business Agents
- Founder Finance Agents

AUTOMATION CATEGORIES:
- Intake Automations
- CRM Automations
- Email Automations
- Content Automations
- Partner Automations
- Funding Workflow Automations
- Data Cleanup Automations
- Reporting Automations
- Webhook Utilities
- GitHub/Vercel Automations

INTERACTION REQUIREMENTS:
- JavaScript filtering by type: Agent, Automation, Tool, Template.
- Search bar.
- Featured cards.
- Library item modal.
- Sample JSON data for agents and automations.
- Dark/light toggle optional.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Automation Library Homepage

**Id:** automation-library-homepage  

### Sections Needed

- Intake Automations
- CRM Automations
- Email Automations
- Content Automations
- Partner Automations
- Funding Workflow Automations
- Data Cleanup Automations
- Reporting Automations
- Webhook Utilities
- GitHub/Vercel Automations
- Title
- Short description
- Category
- Automation type
- Platforms
- Audience
- Use case
- Difficulty
- Status
- Monetization

### FLASH-UI Prompt

```txt
Category:** Directory / SOP library  
**Audience:** builders, operators, affiliates with technical appetite  
**Goal:** implementation, reliability, reusable workflows.

```text
Design a static “Automation Library” website for business operators, funding agencies, affiliate teams, and builders.

VISUAL STYLE:
Technical workflow documentation hub. Dark navy, slate, green status badges, workflow diagrams, code-style cards, SOP layout, search/filter interface.

BRAND CONTEXT:
This library documents reusable automations for intake, CRM, email, content, partner operations, funding workflow routing, data cleanup, reporting, webhooks, and GitHub/Vercel publishing.

TARGET VISITOR PSYCHOLOGY:
The visitor wants to implement workflows without digging through Slack threads, old screenshots, random Zapier memories, and cursed Make scenarios named “final-final-v6.”

STRONG HOOK:
“Reusable Automations for Operators Who Hate Rebuilding the Same Workflow Twice.”

HERO MESSAGE:
“Browse automation workflows, SOPs, webhook payloads, field maps, error handling notes, and implementation templates.”

PRIMARY CTA:
“Browse Automations”

CORE CATEGORIES:
- Intake Automations
- CRM Automations
- Email Automations
- Content Automations
- Partner Automations
- Funding Workflow Automations
- Data Cleanup Automations
- Reporting Automations
- Webhook Utilities
- GitHub/Vercel Automations

SECTIONS NEEDED:
1. Hero
2. Search and category filters
3. Featured automations
4. Workflow cards
5. Difficulty filters:
   - Beginner
   - Intermediate
   - Advanced
6. Platform filters:
   - Tally
   - HubSpot
   - Gmail
   - Notion
   - n8n
   - Make
   - GitHub
   - Vercel
   - Google Sheets
7. Workflow detail modal
8. Implementation checklist
9. SOP template CTA
10. Footer CTA

WORKFLOW CARD FIELDS:
- Title
- Short description
- Category
- Automation type
- Platforms
- Audience
- Use case
- Difficulty
- Status
- Monetization
- CTA: View Workflow

INTERACTION REQUIREMENTS:
- JavaScript filtering by category, platform, difficulty, and status.
- Search by workflow title.
- Workflow detail modal.
- Sample data for at least 20 automations.
- Copyable webhook payload sample card.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Automation Detail Page Template

**Id:** automation-detail-page-template  

### Sections Needed

- Accordion sections for technical notes.
- Copy buttons for payload example and checklist.
- Status badge styling.
- Related workflow cards.
- Sticky sidebar navigation.

### FLASH-UI Prompt

```txt
Category:** Workflow documentation page  
**Audience:** implementers and future team members  
**Goal:** create a repeatable page structure for every automation.

```text
Design an “Automation Workflow Detail Page Template” for an AI Automation Systems Library.

VISUAL STYLE:
Technical SOP meets sleek SaaS documentation. Dark sidebar, white documentation panels, workflow diagram area, code blocks, status badges, implementation checklist.

BRAND CONTEXT:
Each automation page documents a reusable workflow such as Tally to HubSpot contact upsert, Gmail funding parser, incomplete application follow-up, or article-to-MDX GitHub publishing.

TARGET VISITOR PSYCHOLOGY:
The visitor wants to know what the automation does, when to use it, what tools it requires, how data moves, what can break, and how to implement it without sacrificing a goat to the webhook gods.

STRONG HOOK:
“Build the Workflow Once. Reuse It Forever.”

HERO MESSAGE:
“This workflow turns [trigger] into [outcome] using [platforms], with clear field mapping, payload examples, error handling, and implementation notes.”

PRIMARY CTA:
“Copy Implementation Checklist”

PAGE SECTIONS:
1. Hero
2. At-a-glance metadata:
   - Category
   - Automation type
   - Platforms
   - Audience
   - Use case
   - Difficulty
   - Status
   - Monetization
3. Trigger
4. Workflow steps
5. Data flow diagram
6. Required fields
7. Field mapping table
8. Webhook payload example
9. Error handling
10. Retry rules
11. Security / credential notes
12. Testing checklist
13. Deployment checklist
14. Related automations
15. Final CTA

INTERACTION REQUIREMENTS:
- Accordion sections for technical notes.
- Copy buttons for payload example and checklist.
- Status badge styling.
- Related workflow cards.
- Sticky sidebar navigation.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Tally to HubSpot Workflow Page

**Id:** tally-to-hubspot-workflow-page  

### Sections Needed

- Copy buttons for payload, field map, and checklist.
- Accordion for advanced notes.
- Workflow diagram section.
- Static sample payload.

### FLASH-UI Prompt

```txt
Category:** Automation page  
**Audience:** funding agencies, service businesses, affiliate teams  
**Goal:** document a high-value intake automation.

```text
Design a detailed automation workflow page for “Tally to HubSpot Contact Upsert Workflow.”

VISUAL STYLE:
Clean technical workflow documentation page. Dark navy sidebar, white content cards, green status badges, webhook diagram, code-style payload panels.

BRAND CONTEXT:
This automation turns a Tally form submission into a clean HubSpot contact, optional deal, note, and follow-up task.

TARGET AUDIENCE:
Funding agencies, affiliate teams, service businesses, no-code operators, and internal implementation teams.

STRONG HOOK:
“Turn Form Submissions Into Clean CRM Records Automatically.”

HERO MESSAGE:
“This workflow captures Tally form submissions, normalizes the data, upserts a HubSpot contact, creates a deal, adds notes, and assigns follow-up tasks.”

PRIMARY CTA:
“Copy Workflow Checklist”

SECTIONS NEEDED:
1. Hero
2. At-a-glance metadata
3. Trigger:
   - Tally form submission
4. Workflow steps:
   - Receive webhook
   - Normalize fields
   - Check for duplicate contact
   - Upsert HubSpot contact
   - Create or update deal
   - Add note
   - Create follow-up task
   - Send confirmation email
5. Required fields
6. Field mapping table
7. Example webhook payload
8. HubSpot properties table
9. Error handling
10. Retry rules
11. Testing checklist
12. Related workflows
13. Final CTA

INTERACTION REQUIREMENTS:
- Copy buttons for payload, field map, and checklist.
- Accordion for advanced notes.
- Workflow diagram section.
- Static sample payload.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Article Draft → MDX → GitHub Publishing Workflow Page

**Id:** article-draft-mdx-github-publishing-workflow-page  

### Sections Needed

- Copy buttons for frontmatter schema, folder path, commit message pattern, and QA checklist.
- MDX preview card.
- Workflow timeline.
- Static code blocks.

### FLASH-UI Prompt

```txt
Category:** Content automation detail page  
**Audience:** content operators, SEO builders, dev/content hybrid teams  
**Goal:** document your actual content publishing workflow.

```text
Design a technical automation page for “Article Draft to MDX to GitHub Publishing Workflow.”

VISUAL STYLE:
Developer-content operations dashboard. Dark mode, code panels, GitHub-style cards, MDX preview, content pipeline timeline, green deployment badges.

BRAND CONTEXT:
This workflow converts completed articles into valid MDX files with frontmatter, saves them to GitHub, and supports static site publishing through Vercel.

TARGET AUDIENCE:
SEO operators, content teams, technical marketers, AI content builders, and founders publishing programmatic content libraries.

STRONG HOOK:
“Turn Finished Articles Into Deployable MDX Without Manual Chaos.”

HERO MESSAGE:
“This workflow converts an article into MDX, adds frontmatter, saves it to the correct GitHub path, and prepares it for static site publishing.”

PRIMARY CTA:
“Copy Publishing Workflow”

SECTIONS NEEDED:
1. Hero
2. Workflow overview
3. Required frontmatter schema
4. Folder structure
5. File naming rules
6. MDX formatting rules
7. GitHub save path
8. Commit message format
9. QA checklist
10. Common errors
11. Related automations
12. Final CTA

INTERACTION REQUIREMENTS:
- Copy buttons for frontmatter schema, folder path, commit message pattern, and QA checklist.
- MDX preview card.
- Workflow timeline.
- Static code blocks.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## AI Systems Monetization Map

**Id:** ai-systems-monetization-map  

### Sections Needed

- Lead magnet
- Paid template
- Affiliate enablement
- Internal operations
- Client implementation
- Consulting offer
- Micro-SaaS feature
- Course/training asset
- Community perk
- SEO asset
- JavaScript scoring calculator.
- Conditional monetization recommendation.
- Saved system ideas using localStorage.
- Filterable example library.

### FLASH-UI Prompt

```txt
Category:** Strategy page / internal tool  
**Audience:** you, affiliates, operators, builders  
**Goal:** map agents and automations to monetization paths.

```text
Design an “AI Systems Monetization Map” page for an AI Automation Systems Library.

VISUAL STYLE:
Strategic dashboard. Dark luxe fintech-tech aesthetic, bento grid, revenue path cards, flow diagrams, monetization badges, gold/green highlights.

BRAND CONTEXT:
This page helps organize AI agents, automations, templates, tools, and workflows by how they can make money or support business growth.

TARGET USER:
Founder/operator deciding which AI systems should become lead magnets, paid templates, internal tools, client implementations, affiliate enablement assets, or micro-SaaS products.

STRONG HOOK:
“Every AI System Needs a Job: Lead Magnet, Product, Service, or Ops Weapon.”

HERO MESSAGE:
“Map agents and automations to monetization paths so your library becomes a business engine, not a graveyard of clever demos.”

PRIMARY CTA:
“Map a System”

MONETIZATION TYPES:
- Lead magnet
- Paid template
- Affiliate enablement
- Internal operations
- Client implementation
- Consulting offer
- Micro-SaaS feature
- Course/training asset
- Community perk
- SEO asset

SECTIONS NEEDED:
1. Hero
2. Monetization path cards
3. System scoring form:
   - Demand
   - Pain solved
   - Ease of build
   - Repeat usage
   - Monetization potential
   - SEO value
   - Partner usefulness
4. Score result
5. Recommended monetization path
6. Example systems mapped
7. Priority matrix
8. Final CTA

INTERACTION REQUIREMENTS:
- JavaScript scoring calculator.
- Conditional monetization recommendation.
- Saved system ideas using localStorage.
- Filterable example library.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Founder Agent Stack Landing Page

**Id:** founder-agent-stack-landing-page  

### Sections Needed

- Agent category filters.
- “Build my stack” selector.
- Dynamic recommended bundle output.
- Copy recommendation button.

### FLASH-UI Prompt

```txt
Category:** SaaS-style bundle page  
**Audience:** founders and small business operators  
**Goal:** bundle AI agents into a productized stack.

```text
Design a landing page for “Founder Agent Stack,” a bundle of AI agents for founders and small business operators.

VISUAL STYLE:
Premium AI SaaS bundle page. Dark mode, glowing agent cards, bento sections, clean comparison table, futuristic but practical.

BRAND CONTEXT:
The Founder Agent Stack bundles AI assistants for financial snapshot, funding readiness, content creation, CRM cleanup, client follow-up, business credit prep, and weekly operating reviews.

TARGET AUDIENCE:
Founders, solopreneurs, small business owners, agency owners, ecommerce operators, and indie builders.

STRONG HOOK:
“Your Tiny AI Back Office Before You Can Afford a Real One.”

HERO MESSAGE:
“Use a practical stack of AI agents to organize finances, prep for funding, clean your pipeline, create content, and stay focused on next actions.”

PRIMARY CTA:
“Explore the Stack”

SECTIONS NEEDED:
1. Hero
2. Agent stack overview
3. Agent cards:
   - Financial Snapshot Agent
   - Funding Pathfinder GPT
   - Business Credit Builder GPT
   - CRM Cleanup Agent
   - Follow-Up Sequence Builder
   - SEO Brief Generator
   - Client Status Update Agent
4. Use case bundles:
   - Get funded
   - Get organized
   - Generate leads
   - Clean CRM
   - Publish content
5. Pricing placeholder
6. Free demo CTA
7. FAQ
8. Final CTA

INTERACTION REQUIREMENTS:
- Agent category filters.
- “Build my stack” selector.
- Dynamic recommended bundle output.
- Copy recommendation button.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Funding Broker Agent Stack Page

**Id:** funding-broker-agent-stack-page  

### Sections Needed

- Funding Pathfinder GPT
- Business Funding Intake Agent
- Loan Product Matching Agent
- Bank Statement Summary Agent
- Funding Readiness Score Agent
- Deal Routing Assistant
- Applicant Follow-Up Email Agent
- Referral Partner Outreach Agent
- Compliance Claims Review Agent
- Filter agents by workflow stage.
- Agent detail modal.
- “Build my broker stack” selector.
- Copy recommended stack output.

### FLASH-UI Prompt

```txt
Category:** Productized library collection  
**Audience:** loan brokers, funding affiliates  
**Goal:** create a collection page for broker-specific agents.

```text
Design a “Funding Broker Agent Stack” collection page for an AI Agent & Custom GPT Library.

VISUAL STYLE:
Fintech AI operations dashboard. Dark navy, green/gold accents, agent cards, workflow arrows, CRM-style preview panels.

BRAND CONTEXT:
This page bundles AI agents for business funding brokers and affiliates: intake, readiness scoring, loan product matching, bank statement summaries, deal routing, follow-up emails, and referral partner outreach.

TARGET AUDIENCE:
Loan brokers, funding affiliates, commercial finance reps, partner managers, and agencies.

STRONG HOOK:
“AI Agents for Funding Brokers Who Want Cleaner Deals and Faster Follow-Up.”

HERO MESSAGE:
“Use AI agents to intake clients, summarize files, route deals, generate follow-ups, and build referral partner channels.”

PRIMARY CTA:
“Browse Broker Agents”

AGENTS TO FEATURE:
- Funding Pathfinder GPT
- Business Funding Intake Agent
- Loan Product Matching Agent
- Bank Statement Summary Agent
- Funding Readiness Score Agent
- Deal Routing Assistant
- Applicant Follow-Up Email Agent
- Referral Partner Outreach Agent
- Compliance Claims Review Agent

SECTIONS NEEDED:
1. Hero
2. Broker workflow map
3. Agent card grid
4. Workflow stages:
   - Lead capture
   - Qualification
   - Document review
   - Routing
   - Follow-up
   - Referral growth
5. Featured agent detail preview
6. Related automations
7. CTA: request custom broker stack
8. FAQ

INTERACTION REQUIREMENTS:
- Filter agents by workflow stage.
- Agent detail modal.
- “Build my broker stack” selector.
- Copy recommended stack output.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## CRM & Ops Agent Stack Page

**Id:** crm-ops-agent-stack-page  

### Sections Needed

- HubSpot Contact Parser GPT
- Deal Note Summarizer
- Pipeline Cleanup Agent
- Client Status Update Agent
- Follow-Up Sequence Builder
- CRM Field Mapping Assistant
- Lead Scoring Agent
- Applicant Status Update Agent
- Filter by CRM workflow stage.
- Agent cards with status/difficulty badges.
- “Which CRM problem do you have?” selector that recommends agents.
- Copy recommended agent stack.

### FLASH-UI Prompt

```txt
Category:** Productized library collection  
**Audience:** operations teams, HubSpot users, funding agencies  
**Goal:** position CRM agents as ops tools.

```text
Design a “CRM & Ops Agent Stack” collection page for an AI Agent & Custom GPT Library.

VISUAL STYLE:
Operations command center. Dark sidebar, CRM tables, pipeline cards, clean data UI, blue/green status indicators.

BRAND CONTEXT:
This page showcases AI agents for CRM cleanup, contact parsing, deal notes, client updates, follow-up sequences, field mapping, and lead scoring.

TARGET AUDIENCE:
Funding agencies, affiliate teams, sales operators, HubSpot users, service businesses, and no-code builders.

STRONG HOOK:
“Clean Your CRM Before It Becomes a Haunted Filing Cabinet.”

HERO MESSAGE:
“Use AI agents to parse contacts, summarize deal notes, clean pipeline stages, generate client updates, map CRM fields, score leads, and build follow-up sequences.”

PRIMARY CTA:
“Browse CRM Agents”

AGENTS TO FEATURE:
- HubSpot Contact Parser GPT
- Deal Note Summarizer
- Pipeline Cleanup Agent
- Client Status Update Agent
- Follow-Up Sequence Builder
- CRM Field Mapping Assistant
- Lead Scoring Agent
- Applicant Status Update Agent

SECTIONS NEEDED:
1. Hero
2. CRM pain points
3. Agent card grid
4. Workflow map:
   - Intake
   - Enrichment
   - Pipeline cleanup
   - Follow-up
   - Reporting
5. Before/after CRM scenario
6. Related automations
7. CTA: build custom CRM ops stack
8. FAQ

INTERACTION REQUIREMENTS:
- Filter by CRM workflow stage.
- Agent cards with status/difficulty badges.
- “Which CRM problem do you have?” selector that recommends agents.
- Copy recommended agent stack.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Content & SEO Agent Stack Page

**Id:** content-seo-agent-stack-page  

### Sections Needed

- Blog Article Generator
- Transcript to Blog Transformer
- Social Post Repurposer
- YouTube Title Optimizer
- LinkedIn Newsletter Writer
- SEO Brief Generator
- Landing Page Copy Agent
- Loan Broker Blog Writer
- Filter by content format.
- Dynamic “choose your source content” selector.
- Recommended agent stack output.
- Copy workflow checklist.

### FLASH-UI Prompt

```txt
Category:** Productized library collection  
**Audience:** creators, SEO teams, affiliate marketers  
**Goal:** sell/discover content agents.

```text
Design a “Content & SEO Agent Stack” collection page for an AI Agent & Custom GPT Library.

VISUAL STYLE:
Editorial AI production dashboard. Dark mode, content calendar cards, SEO brief panels, article preview cards, purple/green accents.

BRAND CONTEXT:
This page showcases AI agents for blog writing, transcript-to-blog conversion, social repurposing, YouTube title optimization, LinkedIn newsletters, SEO briefs, and landing page copy.

TARGET AUDIENCE:
Creators, founders, affiliate marketers, SEO operators, YouTubers, podcasters, newsletter writers, and agency owners.

STRONG HOOK:
“Turn One Idea Into a Content Machine.”

HERO MESSAGE:
“Use AI agents to turn transcripts, notes, videos, and keywords into blogs, newsletters, social posts, landing pages, and SEO briefs.”

PRIMARY CTA:
“Browse Content Agents”

AGENTS TO FEATURE:
- Blog Article Generator
- Transcript to Blog Transformer
- Social Post Repurposer
- YouTube Title Optimizer
- LinkedIn Newsletter Writer
- SEO Brief Generator
- Landing Page Copy Agent
- Loan Broker Blog Writer

SECTIONS NEEDED:
1. Hero
2. Content workflow map
3. Agent cards
4. Use cases:
   - Podcast to blog
   - Blog to social
   - Keyword to SEO brief
   - Video to newsletter
   - Offer to landing page
5. Example output preview
6. Related automations:
   - Article Draft to MDX to GitHub
   - Blog Post to Social Captions
   - Transcript to Blog Post
7. CTA: build content engine
8. FAQ

INTERACTION REQUIREMENTS:
- Filter by content format.
- Dynamic “choose your source content” selector.
- Recommended agent stack output.
- Copy workflow checklist.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Local / Vertical Agent Stack Page

**Id:** local-vertical-agent-stack-page  

### Sections Needed

- Trucking Funding Agent
- Ecommerce Funding Agent
- Real Estate Investor Funding Agent
- Acquisition Financing Agent
- Contractor Funding Agent
- Restaurant Cash Flow Agent
- Salon Funding Agent
- Med Spa Funding Agent
- Local Business Funding Agent
- Filter by industry.
- Search by pain point.
- Agent detail modal.
- “Choose your industry” recommender.

### FLASH-UI Prompt

```txt
Category:** Productized library collection  
**Audience:** niche operators and affiliates  
**Goal:** vertical-specific funding and ops agents.

```text
Design a “Local & Vertical AI Agent Stack” page for an AI Agent & Custom GPT Library.

VISUAL STYLE:
Industry marketplace UI. Dark hero, colorful vertical cards, local map accents, niche tags, fintech AI dashboard styling.

BRAND CONTEXT:
This page showcases AI agents tailored to industries and local business niches, including trucking, ecommerce, real estate investors, acquisitions, contractors, restaurants, salons, med spas, and local service businesses.

TARGET AUDIENCE:
Funding affiliates, local business consultants, agency owners, niche marketers, and small business operators.

STRONG HOOK:
“AI Agents Built for Specific Businesses, Not Generic Business Advice Soup.”

HERO MESSAGE:
“Browse vertical AI agents that understand the funding needs, cash-flow pressure, documents, and language of specific industries.”

PRIMARY CTA:
“Browse Vertical Agents”

AGENTS TO FEATURE:
- Trucking Funding Agent
- Ecommerce Funding Agent
- Real Estate Investor Funding Agent
- Acquisition Financing Agent
- Contractor Funding Agent
- Restaurant Cash Flow Agent
- Salon Funding Agent
- Med Spa Funding Agent
- Local Business Funding Agent

SECTIONS NEEDED:
1. Hero
2. Vertical category grid
3. Agent cards
4. Industry pain point cards
5. Funding use case map
6. Local SEO CTA
7. Related tools and calculators
8. CTA: request a custom vertical agent
9. FAQ

INTERACTION REQUIREMENTS:
- Filter by industry.
- Search by pain point.
- Agent detail modal.
- “Choose your industry” recommender.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Funding Workflow Automation Collection Page

**Id:** funding-workflow-automation-collection-page  

### Sections Needed

- Funding application parser
- Applicant drop-off detection
- Incomplete application follow-up
- Bank link reminder sequence
- Document collection reminder
- Applicant status sync
- HubSpot deal creation
- HubSpot note creation
- Follow-up task creation
- Dead lead revival campaign
- Filter by workflow stage, platform, and difficulty.
- Automation detail modal.
- Copy implementation checklist.
- Include sample workflow diagram.

### FLASH-UI Prompt

```txt
Category:** Automation collection  
**Audience:** funding agencies, affiliate teams  
**Goal:** connect automations to funding pipeline.

```text
Design a “Funding Workflow Automations” collection page for an Automation Library.

VISUAL STYLE:
Funding operations command center. Dark navy, green status badges, pipeline diagrams, automation cards, webhook and CRM icons.

BRAND CONTEXT:
This page organizes automations that support the funding workflow from application intake to bank link reminders, document collection, status updates, CRM notes, follow-up sequences, and declined lead nurture.

TARGET AUDIENCE:
Funding agencies, loan brokers, affiliate teams, CRM operators, and automation builders.

STRONG HOOK:
“Automate the Mess Between Application and Funding.”

HERO MESSAGE:
“Browse workflows for intake, routing, reminders, document collection, applicant follow-up, CRM updates, and partner notifications.”

PRIMARY CTA:
“Browse Funding Automations”

AUTOMATIONS TO FEATURE:
- Funding application parser
- Applicant drop-off detection
- Incomplete application follow-up
- Bank link reminder sequence
- Document collection reminder
- Applicant status sync
- HubSpot deal creation
- HubSpot note creation
- Follow-up task creation
- Dead lead revival campaign

SECTIONS NEEDED:
1. Hero
2. Funding pipeline automation map
3. Automation card grid
4. Workflow stages:
   - Intake
   - Verification
   - Routing
   - Follow-up
   - Review
   - Nurture
5. Platform filters
6. Difficulty filters
7. Related AI agents
8. Implementation CTA

INTERACTION REQUIREMENTS:
- Filter by workflow stage, platform, and difficulty.
- Automation detail modal.
- Copy implementation checklist.
- Include sample workflow diagram.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Partner Automations Collection Page

**Id:** partner-automations-collection-page  

### Sections Needed

- New Partner Application to HubSpot
- New Partner Application to Notion CRM
- Partner Launch Kit Generator
- Partner Tracking Link Generator
- Partner Resource Assignment
- Partner Daily Check-In Workflow
- Partner Performance Scorecard Sync
- Partner Welcome Email Sequence
- Certification Completion Tracker
- Referral Source Tracker Sync
- Filter automations by partner lifecycle stage.
- Detail modal for each automation.
- Copy checklist button.
- Sample data flow diagram.

### FLASH-UI Prompt

```txt
Category:** Automation collection  
**Audience:** affiliate managers, partner ops  
**Goal:** systematize partner onboarding and activation.

```text
Design a “Partner Automations Library” collection page.

VISUAL STYLE:
Affiliate operations dashboard. Dark sidebar, partner cards, onboarding timeline, automation status badges, green/gold action buttons.

BRAND CONTEXT:
This page organizes automations for new partner applications, onboarding, launch kit generation, tracking links, resource assignment, daily check-ins, and performance updates.

TARGET AUDIENCE:
Moonshine Capital operators, affiliate managers, partner team leaders, and technically curious affiliates.

STRONG HOOK:
“Turn New Partners Into Activated Operators Without Manual Babysitting.”

HERO MESSAGE:
“Automate partner onboarding, resource delivery, tracking links, launch kits, daily check-ins, and performance scorecards.”

PRIMARY CTA:
“Browse Partner Automations”

AUTOMATIONS TO FEATURE:
- New Partner Application to HubSpot
- New Partner Application to Notion CRM
- Partner Launch Kit Generator
- Partner Tracking Link Generator
- Partner Resource Assignment
- Partner Daily Check-In Workflow
- Partner Performance Scorecard Sync
- Partner Welcome Email Sequence
- Certification Completion Tracker
- Referral Source Tracker Sync

SECTIONS NEEDED:
1. Hero
2. Partner lifecycle automation map
3. Automation cards
4. Onboarding workflow timeline
5. Activation metrics section
6. Platform filters
7. Related affiliate tools
8. Implementation CTA

INTERACTION REQUIREMENTS:
- Filter automations by partner lifecycle stage.
- Detail modal for each automation.
- Copy checklist button.
- Sample data flow diagram.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## AI Systems Directory Admin Dashboard

**Id:** ai-systems-directory-admin-dashboard  

### Sections Needed

- Add sample data.
- JavaScript filtering.
- Add/edit mock entries in localStorage.
- Show JSON preview for selected entry.
- Copy JSON button.

### FLASH-UI Prompt

```txt
Category:** Internal dashboard  
**Audience:** you / future team / operators  
**Goal:** manage the library conceptually before building CMS.

```text
Design an “AI Systems Directory Admin Dashboard” for managing an AI Automation Systems Library.

VISUAL STYLE:
Internal admin command center. Dark mode, sidebar nav, data tables, status badges, content cards, filter panels, clean operator-focused UI.

BRAND CONTEXT:
This admin dashboard helps manage AI agent entries, automation entries, templates, tools, categories, statuses, monetization tags, and publishing readiness.

TARGET USER:
Founder, content operator, developer, or AI systems librarian managing a growing library of agents and automations.

STRONG HOOK:
“Manage the AI Systems Library Before It Turns Into a Haunted Junk Drawer.”

HERO MESSAGE:
“Track every agent, automation, template, workflow, status, category, platform, monetization path, and publishing stage from one dashboard.”

PRIMARY CTA:
“Add New System”

DASHBOARD AREAS:
1. Sidebar navigation:
   - Overview
   - AI Agents
   - Automations
   - Tools
   - Templates
   - Categories
   - Publish Queue
2. KPI cards:
   - Total agents
   - Total automations
   - Live systems
   - Build-ready systems
   - Drafts
   - Paid templates
3. Data table
4. Status filters:
   - Idea
   - Draft
   - Build Ready
   - Live
   - Deprecated
5. Monetization filters:
   - Lead magnet
   - Paid template
   - Internal ops
   - Client implementation
   - Affiliate enablement
6. Add/edit system modal
7. Publishing checklist
8. JSON export preview

INTERACTION REQUIREMENTS:
- Add sample data.
- JavaScript filtering.
- Add/edit mock entries in localStorage.
- Show JSON preview for selected entry.
- Copy JSON button.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Agent Profile JSON Builder

**Id:** agent-profile-json-builder  

### Sections Needed

- Title
- Short description
- Slug
- Category
- Agent type
- Platform
- Audience
- Use case
- Difficulty
- Status
- Monetization
- CTA URL
- Related agents
- Tags
- JavaScript slug generation.
- Live preview.
- Copy frontmatter and JSON.
- Save profiles in localStorage.
- Export sample JSON array.

### FLASH-UI Prompt

```txt
Category:** Developer/content utility  
**Audience:** you, content ops, dev  
**Goal:** create structured data for agent pages.

```text
Design an “AI Agent Profile JSON Builder” static tool.

VISUAL STYLE:
Developer-friendly form builder. Dark background, code preview panel, clean input cards, glowing JSON output, copy buttons.

BRAND CONTEXT:
This tool helps create structured profile data for AI agents and Custom GPTs that can be used in MDX frontmatter, JSON databases, directories, and static site generation.

TARGET USER:
Founder, operator, developer, content manager building an AI Agent & Custom GPT Library.

STRONG HOOK:
“Turn Agent Ideas Into Structured Library Entries.”

HERO MESSAGE:
“Fill out the agent fields once and generate clean frontmatter, JSON, and directory-ready metadata.”

PRIMARY CTA:
“Build Agent Profile”

FIELDS:
- Title
- Short description
- Slug
- Category
- Agent type
- Platform
- Audience
- Use case
- Difficulty
- Status
- Monetization
- CTA URL
- Related agents
- Tags

OUTPUTS:
1. MDX frontmatter
2. JSON object
3. Agent card preview
4. SEO title suggestion
5. Meta description suggestion

SECTIONS NEEDED:
1. Hero
2. Agent metadata form
3. Live card preview
4. Frontmatter output
5. JSON output
6. Copy buttons
7. Saved agent profiles

INTERACTION REQUIREMENTS:
- JavaScript slug generation.
- Live preview.
- Copy frontmatter and JSON.
- Save profiles in localStorage.
- Export sample JSON array.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## Automation Profile JSON Builder

**Id:** automation-profile-json-builder  

### Sections Needed

- Title
- Short description
- Slug
- Category
- Automation type
- Platforms
- Audience
- Use case
- Difficulty
- Status
- Monetization
- Trigger
- Output
- Related workflows
- Cover image
- Published date
- JavaScript slug generation.
- Copy buttons.
- localStorage saved workflows.
- Sample export array.

### FLASH-UI Prompt

```txt
Category:** Developer/content utility  
**Audience:** you, builders, automation ops  
**Goal:** create structured automation entries.

```text
Design an “Automation Profile JSON Builder” static tool.

VISUAL STYLE:
Technical workflow builder. Dark mode, code panels, workflow cards, status badges, structured form UI.

BRAND CONTEXT:
This tool generates structured metadata for automation library entries, including MDX frontmatter, JSON, workflow cards, and implementation checklists.

TARGET USER:
Automation builder, founder, operator, developer, or documentation manager.

STRONG HOOK:
“Document the Workflow Before Future You Starts Cursing Present You.”

HERO MESSAGE:
“Create clean metadata, frontmatter, and JSON for automation workflows across intake, CRM, email, content, partner ops, and reporting.”

PRIMARY CTA:
“Build Automation Profile”

FIELDS:
- Title
- Short description
- Slug
- Category
- Automation type
- Platforms
- Audience
- Use case
- Difficulty
- Status
- Monetization
- Trigger
- Output
- Related workflows
- Cover image
- Published date

OUTPUTS:
1. MDX frontmatter
2. JSON object
3. Workflow card preview
4. Implementation checklist
5. Related workflow suggestions

SECTIONS NEEDED:
1. Hero
2. Automation metadata form
3. Workflow preview card
4. MDX frontmatter output
5. JSON output
6. Checklist output
7. Saved profiles

INTERACTION REQUIREMENTS:
- JavaScript slug generation.
- Copy buttons.
- localStorage saved workflows.
- Sample export array.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## AI Agent Library Pricing Page

**Id:** ai-agent-library-pricing-page  

### Sections Needed

- Monthly/annual toggle.
- Feature comparison table.
- Highlight recommended plan.
- FAQ accordion.

### FLASH-UI Prompt

```txt
Category:** Monetization page  
**Audience:** users, affiliates, builders  
**Goal:** paid templates, demos, membership, consulting.

```text
Design a pricing page for an “AI Agent & Automation Systems Library.”

VISUAL STYLE:
Premium SaaS pricing page. Dark mode, bento pricing cards, feature comparison table, gold highlights, green CTA buttons, clean trust sections.

BRAND CONTEXT:
The library monetizes AI agents, Custom GPT templates, automation SOPs, prompt packs, implementation guides, and consulting support.

TARGET AUDIENCE:
Founders, affiliates, agency owners, consultants, small business operators, and builders.

STRONG HOOK:
“Stop Buying Random Prompts. Start Building Reusable Systems.”

HERO MESSAGE:
“Get access to AI agents, automation workflows, templates, SOPs, implementation notes, and productized systems you can actually deploy.”

PRIMARY CTA:
“Choose Your Access”

PRICING TIERS:
1. Free Explorer
   - Browse public agents
   - View free templates
   - Join newsletter
2. Builder Library
   - Agent templates
   - Automation SOPs
   - Prompt packs
   - JSON/MDX examples
3. Operator Pro
   - Full library
   - Implementation checklists
   - Workflow templates
   - Partner enablement tools
4. Done-With-You / Custom
   - Custom agent builds
   - Automation implementation
   - Consulting
   - Workflow audits

SECTIONS NEEDED:
1. Hero
2. Pricing cards
3. Feature comparison table
4. Who each tier is for
5. Included categories
6. FAQ
7. Guarantee/disclaimer
8. Final CTA

INTERACTION REQUIREMENTS:
- Monthly/annual toggle.
- Feature comparison table.
- Highlight recommended plan.
- FAQ accordion.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## AI Agent Demo Gallery

**Id:** ai-agent-demo-gallery  

### Sections Needed

- JavaScript filtering.
- Modal previews.
- Copy sample prompt.
- Save favorite demos with localStorage.

### FLASH-UI Prompt

```txt
Category:** Showcase / demos  
**Audience:** prospects and users  
**Goal:** let users see examples before buying/using.

```text
Design an “AI Agent Demo Gallery” for an AI Agent & Custom GPT Library.

VISUAL STYLE:
Interactive AI showcase. Dark futuristic gallery, glowing cards, demo panels, prompt/output previews, category filters.

BRAND CONTEXT:
This gallery shows sample input/output demos for AI agents, helping users understand what each agent does before clicking into the full detail page.

TARGET AUDIENCE:
Founders, affiliates, agency owners, small business operators, content creators, and automation builders.

STRONG HOOK:
“See What the Agents Actually Do.”

HERO MESSAGE:
“Browse real demo-style previews of AI agents for funding, CRM, content, business credit, partner outreach, and workflow automation.”

PRIMARY CTA:
“Browse Demos”

SECTIONS NEEDED:
1. Hero
2. Category filters
3. Demo cards
4. Demo modal with:
   - Agent name
   - Sample user input
   - Sample output
   - Use case
   - CTA
5. Featured demos
6. “Request a demo” CTA
7. Footer CTA

INTERACTION REQUIREMENTS:
- JavaScript filtering.
- Modal previews.
- Copy sample prompt.
- Save favorite demos with localStorage.

OUTPUT:
Generate static HTML/CSS/JS.
```
```

## “Build My AI System” Intake Funnel

**Id:** build-my-ai-system-intake-funnel  

### Sections Needed

- AI Agent
- Automation Workflow
- Dashboard
- Static Tool
- CRM Integration
- Full Micro-SaaS MVP
- Consulting Audit
- Multi-step form.
- JavaScript recommendation logic.
- Copy project summary.
- Save intake result with localStorage.
- Add webhook placeholder comments.

### FLASH-UI Prompt

```txt
Category:** Lead gen funnel  
**Audience:** founders, operators, affiliates  
**Goal:** capture demand for custom agents/automations.

```text
Design a “Build My AI System” intake funnel for an AI automation and agent-building service.

VISUAL STYLE:
Futuristic consulting funnel. Dark navy, neon blue/green, structured intake cards, progress bar, system recommendation result.

BRAND CONTEXT:
This funnel helps users request a custom AI agent, Custom GPT, automation workflow, dashboard, or internal tool.

TARGET AUDIENCE:
Founders, affiliates, agencies, small business owners, creators, and operators who want custom AI systems.

STRONG HOOK:
“Tell Us the Chaos. We’ll Map the System.”

HERO MESSAGE:
“Answer a few questions and get matched with the right AI agent, automation workflow, dashboard, or implementation path.”

PRIMARY CTA:
“Start System Intake”

QUESTIONS:
1. What problem are you trying to solve?
2. Who will use the system?
3. What tools do you already use?
4. What should trigger the workflow?
5. What output do you need?
6. Do you need a public-facing tool or internal system?
7. What is your urgency?
8. What is your budget range?

RESULT TYPES:
- AI Agent
- Automation Workflow
- Dashboard
- Static Tool
- CRM Integration
- Full Micro-SaaS MVP
- Consulting Audit

SECTIONS NEEDED:
1. Hero
2. Multi-step intake
3. Result recommendation
4. Project scope snapshot
5. Booking CTA
6. Email summary output
7. FAQ

INTERACTION REQUIREMENTS:
- Multi-step form.
- JavaScript recommendation logic.
- Copy project summary.
- Save intake result with localStorage.
- Add webhook placeholder comments.

OUTPUT:
Generate static HTML/CSS/JS.
```

---

## Best next build sequence

If you want the highest leverage out of this batch, I would build in this order:

| Priority | FLASH-UI Build | Why |
|---|---|---|
| P0 | AI Automation Systems Library Homepage | Parent hub for the whole thing |
| P0 | AI Agent & Custom GPT Library Homepage | Public-facing discovery and SEO |
| P0 | Automation Library Homepage | SOP/workflow implementation hub |
| P0 | Agent Profile JSON Builder | Speeds content creation |
| P0 | Automation Profile JSON Builder | Speeds workflow documentation |
| P1 | AI Referral Partner Agent Landing Page | Productized affiliate growth tool |
| P1 | AI Referral Partner Agent Demo Tool | Turns concept into interactive demo |
| P1 | Funding Broker Agent Stack Page | Best immediate fit for Moonshine ecosystem |
| P1 | Funding Workflow Automation Collection Page | Best immediate backend/ops fit |
| P1 | Build My AI System Intake Funnel | Lead capture for custom builds |
| P2 | Businesses for Sale Directory | Strong future acquisition-financing angle |
| P2 | Business Acquisition Deal Analyzer | Pairs perfectly with the directory |
| P2 | AI Agent Demo Gallery | Useful once several agents exist |
| P2 | Pricing Page | Needed once templates/products are sellable |
| P2 | Admin Dashboard | Useful when the library gets bigger |

The clean move is to build the **AI Automation Systems Library** first, then let every agent, automation, calculator, and workflow become a card inside that ecosystem. Otherwise you’ll end up with 87 brilliant little goblin tools hiding in zip folders like they’re in witness protection.
```

