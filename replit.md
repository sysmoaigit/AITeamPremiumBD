# AITPBD — AI Team Premium BD Website

## Overview
A 9-page website for AI Team Premium BD (AITPBD), a Bangladeshi company selling premium AI subscriptions (ChatGPT, Claude, Gemini, Grammarly, etc.) payable via bKash/Nagad, plus digital services (branding, web dev, marketing, app dev, AI consultancy).

## Architecture
- **Frontend**: React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Express.js (Node.js)
- **Database**: PostgreSQL (Drizzle ORM)
- **Routing**: wouter
- **Data Fetching**: @tanstack/react-query

## Brand System (Figma-sourced)
- **Primary Blue**: `#2563EB` (HSL 217 91% 53%)
- **Deep Navy**: `#0F172A` (HSL 222 47% 11%)
- **Light Sky**: `#EFF6FF` (HSL 214 100% 97%)
- **Font**: Inter (300-700 weights)
- **Logo**: "Neural Nexus" SVG orbit icon + wordmark ("**AI** Team **Premium** BD")
- **Logo components**: `client/src/components/brand/LogoIcons.tsx`
  - `IconOrbit` — standalone orbit SVG
  - `LogoStacked` — vertical logo (sizes: sm/md/lg/xl)
  - `LogoHorizontal` — horizontal logo
  - `WhatsAppIcon` — WhatsApp SVG icon
  - `BRAND` — color constants object

## Key Pages
| Path | Page | File |
|------|------|------|
| `/` | Home | `client/src/pages/Home.tsx` |
| `/ai-subscriptions` | All AI Tools catalog | `client/src/pages/AISubscriptions.tsx` |
| `/services` | Digital services showcase | `client/src/pages/Services.tsx` |
| `/pricing` | AI plans + service packages | `client/src/pages/Pricing.tsx` |
| `/about` | About AITPBD | `client/src/pages/About.tsx` |
| `/start-a-project` | Contact form + channels | `client/src/pages/Contact.tsx` |
| `/tools/chatgpt` | ChatGPT detail | `client/src/pages/tools/ChatGPT.tsx` |
| `/tools/claude` | Claude detail | `client/src/pages/tools/Claude.tsx` |
| `/tools/gemini` | Gemini detail | `client/src/pages/tools/Gemini.tsx` |
| `/tools/grammarly` | Grammarly detail | `client/src/pages/tools/Grammarly.tsx` |
| `/privacy-policy` | Privacy | `client/src/pages/legal/PrivacyPolicy.tsx` |
| `/terms` | Terms of Service | `client/src/pages/legal/TermsOfService.tsx` |

## Key Components
- `Layout` — Navbar + main + Footer + FloatingWhatsApp
- `Navbar` — sticky header with brand logo + nav links + "Get Started" CTA
- `Footer` — dark navy footer with social links, contact, back-to-top
- `FloatingWhatsApp` — fixed bottom-right WhatsApp CTA with pulse animation
- `ToolDetail` — shared component for tool detail pages

## Contact Info
- WhatsApp: `wa.me/8801533262758`
- Phone: `+880 1533-262758`
- Facebook: `facebook.com/AITPBD`
- Instagram: `@ai_team_premium_bd`
- FB Group: `facebook.com/groups/333019393218410`
- Messenger: `facebook.com/messages/t/61586742067282/`

## Database
- `contacts` table: id (serial PK), name, whatsapp, needs, createdAt
- Schema: `shared/schema.ts`
- Storage: `server/storage.ts`

## Pricing (BDT ৳)
- ChatGPT Plus Shared: ৳399/mo
- ChatGPT Premium Shared: ৳950/mo
- ChatGPT Plus Personal: ৳2,500/mo
- Claude Pro Shared: ৳599/mo
- Claude Pro Personal: ৳2,400/mo
- Gemini Advanced Shared: ৳499/mo
- Gemini Advanced Personal: ৳2,300/mo
- Grammarly Premium: ৳800/mo
- AI Tools Vault (Bundle): ৳1,990/mo