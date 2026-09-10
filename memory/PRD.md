# eXceeders Landing Page — PRD

## Original Problem Statement
Build a modern, premium landing page for **eXceeders** — a digital transformation & managed IT services / IT marketplace company. Only the Home page has full content; other service pages temporarily show a "Page Coming Soon" state. Faithful to the supplied homepage content, brand color palette, and eXceeders logo asset.

## User Choices (locked in)
- **Book a Consultation CTA behavior:** do nothing (dead placeholder)
- **Hero visual:** animated network/nodes diagram (custom SVG)
- **Typography:** Manrope
- **Trusted By logos:** generic monochrome placeholders (user will supply real logos later)

## Brand Color Palette (must not be changed)
- Dark Blue Gradient: `#0D1F2D → #06121B` (primary foundation)
- Welcome Pine `#07404B`, Welcome White `#FFFFFF`
- Pistachio `#C6E5DE`, Sea `#9ED3CE`
- Primary Emerald `#059669` (main CTAs)
- Secondary Blue `#43669E`, Metal `#D6D8D8`, Steel `#B8BCBC`

## User Personas
- SME / enterprise buyers seeking managed IT & digital transformation
- IT service providers / channel partners looking to expand reach
- IT job seekers looking for specialized roles

## Architecture
- React 19 + React Router 7 + Tailwind + framer-motion + lucide-react + sonner (Toaster mounted)
- Alias `@/` → `src/`
- Routes: `/`, `/cio-plus`, `/talent-plus`, `/support-plus`, `/dev-plus`, `/project-plus`
- Fully static frontend; no backend calls; no auth

## What's Been Implemented — 2025-12

### Iteration 2 — Service Pages + About Us (current)
- Extracted verbatim content from 5 user-supplied PDFs (CIO+, Talent+, Support+, Dev+, About Us) via `extract_file_tool`
- Built shared `ServicePrimitives.jsx` (Section, Container, SectionHeading, ServiceHero, FeatureCard, NumberedStep, FAQItem, ServiceFinalCTA, Eyebrow, ServicePageShell)
- **CIO Plus** — hero, Who It's For, Problem (5 pain points), Solution + Proof (4 stats), What CIO+ Delivers (8 items), 9-role Managed IT Department, 6 Business Impact cards, 3 pricing plans + PerfeXe bonus, Why Different, client story, 6-item FAQ, final CTA
- **Talent Plus** — hero, Who It's For, IT Hiring Challenge, 4-step Solution, 6 Business Impact cards, 4 Roles Covered, 4-step How It Works, 3 pricing tiles, references stats, 6-item FAQ, final CTA
- **Support Plus** — hero, 4-card Who It's For, 4 pain cards, Solution + 4 proof tiles, 6 Business Impact cards, 9 Services Covered, 8-category Technology Stack, Transparent Credit Consumption card, Flexible Support Plans (Pay-as-you-go + Starter/Growth/Enterprise), 4-step process, References + 3 case studies (Credit Oman, Orbitas Limited, beIN Media), 6-item FAQ, final CTA
- **Dev Plus** — hero, 7-item Who It's For, 8 Challenges, 8-step Approach, 3 flagship delivery cards (Custom Apps, Agentic AI [featured], Secure Internal AI Infrastructure) each with sub-lists, 11-role Managed Team card, 4-step Process, 3 Pricing packages (Discovery / Build [featured] / Scale), 6 Business Impact cards, 8-row Traditional-vs-Dev-Plus comparison table, 9-item FAQ, final CTA
- **About Us** — centered dark hero, 4-tile Credibility Strip, Who We Are, Founder Story (Ahmad El Chayati) with quote card, What We Do (4 solution cards linking to each service page), 6 Why eXceeders cards, Our Culture with 5 values on dark bg, Trusted By with logo placeholders + 4 stat tiles, final CTA
- **Header** updated to 7 nav items (Home, CIO Plus, Talent Plus, Support Plus, Dev Plus, Project Plus, About Us) with tighter spacing for 7-item fit
- **Footer** Company column now includes About Us link
- **Project Plus** retains its Coming Soon template (unchanged)
- Verified: all 7 routes render with 0 console errors; FAQ accordions open; cross-page nav from About Us + Home service cards work; Book a Free Consultation remains dead placeholder

### Iteration 1 — Home Page + Coming Soon (previous)
- Global setup: Manrope font, brand color palette in Tailwind config, brand utilities in `index.css`
- Sticky header with active-route indicator, mobile drawer
- Home composed of 8 sections (Hero with animated SVG network diagram, Trusted By marquee, Why Choose, Ways We Help, Why Our Model Wins, Network stats, Who Else, Final CTA)
- Coming Soon template for placeholder service routes
- Testing subagent: 100% pass, 0 console errors

## Backlog / Next Actions (deferred by design)
### P0 — awaiting user input
- Replace generic Trusted By placeholders with real client logos when supplied
- Wire the "Book a Free Consultation" CTA (modal / Calendly / mailto — to be decided by user)

### P1 — service page content
- Full page content for CIO Plus, Talent Plus, Support Plus, Dev Plus, Project Plus (currently Coming Soon)

### P2 — enhancements
- Real footer contact details (email / phone / address) and social URLs
- SEO metadata: title / description / OpenGraph tags
- Simple lead-capture form on "Book a Free Consultation" (name / email / message → email or CRM)
- Case studies / testimonial section once client permission is available
- Blog / insights section (explicitly out of scope for now)
