# Cursor Prompt — Gatesgill Plumbing Website

Copy everything below into Cursor's chat/composer to build the site.

---

Build a complete, production-ready marketing website for a plumbing company called **Gatesgill Plumbing**, based in Brampton, Ontario. This must be an **extremely high-converting** website — every design decision should push visitors toward requesting an install quote. Do not produce a generic/templated "AI-made" look. Think custom agency-built site: intentional layout choices, asymmetry where it helps, strong typographic hierarchy, and a distinctive visual identity.

## Tech Stack

- Next.js 14 (App Router), TypeScript
- Tailwind CSS for styling
- Framer Motion for animations and page transitions
- next/image for all images, with proper `sizes` and `priority` on above-the-fold images
- next/font for font loading (self-hosted, no layout shift)
- Fully responsive: mobile-first, test at 375px, 768px, 1024px, 1440px

## Brand & Visual Direction

- Business name: **Gatesgill Plumbing**
- Background: white (`#FFFFFF`) as the dominant canvas
- Rich, non-generic color palette layered on top of white — avoid the typical "blue gradient plumbing site" cliché. Use a deep ink navy (e.g. `#0B2545`) as primary, a warm copper/amber accent (e.g. `#C97A3D`) to evoke pipes/warmth, and a clean slate gray for secondary text. Copper accent should be used sparingly on CTAs, icons, and underlines — it should feel premium, not loud.
- Typography: a confident, slightly editorial sans-serif for headings (e.g. a grotesk-style font) paired with a highly readable body font. Strong size contrast between headline and body copy.
- Layout: avoid the standard "centered hero, 3 icon cards, testimonial slider" AI template look. Use an asymmetric hero (headline + CTAs on one side, offset image/graphic composition on the other, with a floating stat card overlapping the image). Break the grid intentionally in at least one section (e.g. services section with staggered card heights, or a diagonal section divider).
- Micro-interactions: buttons scale/lift on hover, cards tilt or lift slightly on hover, icons animate in on scroll, numbers count up on scroll for stats.
- Use high-resolution imagery: plumber at work, modern kitchen/bathroom fixtures, pipe close-ups, van/truck branding shots. Source placeholder images from Unsplash (use real working Unsplash source URLs so images render immediately, e.g. `https://images.unsplash.com/photo-xxxx?auto=format&fit=crop&w=1600&q=80`) — pick plumbing/home-service/tool related photos.

## Site Structure & Pages

### 1. Global Layout
- **Sticky navbar**: fixed to top, transitions from transparent/overlay-on-hero to solid white with shadow on scroll. Logo/wordmark on left ("Gatesgill Plumbing"), nav links center or right (Home, Services, About, FAQs, Contact), and a prominent "Get Install Quote" button + phone number on the far right, always visible.
- **Smooth scroll** enabled site-wide (CSS `scroll-behavior: smooth` or Lenis/Framer-based smooth scroll).
- **Footer** on every page: business name, tagline, contact info (address, random Brampton phone number, random email), quick links, service area list (Brampton, Mississauga, Caledon, Vaughan), social icons, and links to Privacy Policy and FAQs. Include a final small-print CTA strip: "Still deciding? Get a free install quote in under 2 minutes" with a button.
- Use a **placeholder phone number** like `(905) 555-0187` and **placeholder email** like `hello@gatesgillplumbing.com` consistently across the site.

### 2. Home Page (`/`)
- **Hero section**: Big confident headline (e.g. "Plumbing Done Right, The First Time" or similar — write your own compelling copy), supporting subheadline, and **two CTAs side by side**: a primary "Get Install Quote" button (copper accent, filled) and a secondary "Call Now — (905) 555-0187" button (outlined, with phone icon). Include a small trust row under the CTAs (e.g. "Licensed & Insured • 24/7 Emergency • 5-Star Rated"). Offset hero image/illustration with a floating card showing a stat (e.g. "500+ Installs Completed").
- **Services section**: grid of services (Water Heater Installation, Drain Cleaning, Pipe Repair, Fixture Installation, Emergency Plumbing, Leak Detection) as interactive cards with icon, short description, and hover animation. Stagger the card layout instead of a perfectly even grid.
- **Why Choose Us**: animated stat counters (Years in Business, Jobs Completed, Avg Response Time, Satisfaction Rate) plus 3-4 differentiators with icons.
- **Process section**: simple numbered steps ("Request a Quote → We Assess → We Install → You Relax") displayed with a connecting line/path animation on scroll.
- **Reviews section**: 4 fake customer reviews in styled cards (name, star rating, short quote, neighborhood e.g. "Brampton, ON"). Give them varied, realistic-sounding names and believable short quotes about install quality and professionalism.
- **Secondary CTA banner**: full-width, copper or navy background, "Ready to get started? Get your free install quote today" with button — placed roughly two-thirds down the page as a conversion checkpoint.
- **FAQ preview**: 3-4 top questions with accordion, plus a "View all FAQs" link to the FAQ page.
- **Final CTA section** right before the footer: large, bold, impossible to miss, repeating the install quote CTA.

### 3. About Page (`/about`) — opens as a separate page
- Triggered by clicking "About" in the nav — must navigate to a real new route, not a modal or in-page anchor.
- Company story section, mission/values, a "meet the team" style section (can use generic placeholder names/photos), and a photo gallery of work (high-res images).
- End with an install quote CTA banner.

### 4. Install Quote Page (`/quote`)
- This is the **primary conversion page** — the entire site funnels here.
- Multi-step form (feels quick, reduces friction): Step 1 — service type (select cards: New Install / Replacement / Repair / Emergency), Step 2 — property details (address, property type), Step 3 — contact info (name, phone, email, preferred contact time), Step 4 — confirmation screen with a friendly message and expected response time.
- Animate step transitions with Framer Motion (slide/fade between steps), progress bar at top.
- Sidebar or top strip reinforcing trust: "Free, no-obligation quotes" / "Response within 1 business hour" / phone number as an alternative.
- Form doesn't need a real backend — wire it to a placeholder submit handler (e.g. console.log or a fake API route) with a success state.

### 5. Contact Us Page (`/contact`)
- Contact form (name, email, phone, message) alongside business contact details (address, phone, email, hours).
- **Embedded Google Map** showing Brampton, Ontario — use an actual embeddable Google Maps iframe (e.g. `https://www.google.com/maps/embed?pb=...` centered on Brampton, ON) styled with rounded corners and a subtle shadow/frame.
- Include the same install quote CTA near the top of the page for visitors who landed here first.

### 6. FAQs Page (`/faqs`)
- Categorized FAQ list (Installation, Pricing, Emergency Service, Service Area) using animated accordions.
- Write 8-12 realistic plumbing-business FAQs with answers.
- CTA banner at the bottom pointing to the quote page.

### 7. Privacy Policy Page (`/privacy-policy`)
- Standard, professionally written privacy policy content (data collection, cookies, third-party services, contact for privacy concerns) — generic but complete and well-formatted with headings.

## Conversion / Retention Mechanics ("don't let them leave without quoting")

Implement all of the following:
- **Exit-intent popup** (desktop): detect mouse leaving the viewport toward the top/tab bar, show a modal offering "Wait — get your free install quote before you go" with a condensed 2-field quick-quote form (name + phone), dismissible.
- **Sticky mobile CTA bar**: on mobile, a persistent bottom bar with "Call Now" and "Get Quote" buttons, always visible while scrolling.
- **Scroll-triggered inline CTAs**: repeat the install quote CTA at consistent intervals (hero, mid-page banner, pre-footer, and contextually on Services/About/FAQ/Contact pages) so it's never more than one scroll away.
- **Persistent nav CTA**: the "Get Install Quote" button in the sticky navbar is present on every page and every scroll position.
- Keep the quote form short and low-friction (multi-step feels shorter than one long form) to maximize completion rate.

## SEO & Performance

- Proper semantic HTML structure (single H1 per page, logical heading hierarchy).
- `metadata` export on every page (title, description, Open Graph tags) with plumbing/Brampton-relevant keywords.
- `sitemap.xml` and `robots.txt`.
- Alt text on all images.
- Use `next/image` for automatic optimization/lazy-loading; only mark the hero image as `priority`.
- Minimize client components — keep as much as possible as server components; mark only interactive pieces (`"use client"`) where Framer Motion/state is required.
- Add JSON-LD structured data for LocalBusiness (name, address, phone, service area) on the homepage.
- Ensure Lighthouse-friendly performance: no layout shift, compressed images, no blocking scripts.

## Build Instructions

1. Scaffold the Next.js 14 App Router project with TypeScript and Tailwind.
2. Set up the design tokens (colors, fonts, spacing) in `tailwind.config.ts`.
3. Build shared layout (Navbar, Footer, smooth scroll wrapper) first.
4. Build the Home page fully before other pages, since it sets the visual language for the rest of the site.
5. Build About, Quote, Contact, FAQs, and Privacy Policy pages, reusing shared components (CTA banner, review card, accordion, section wrapper).
6. Implement exit-intent popup and sticky mobile CTA bar as shared components included in the root layout.
7. Add metadata, sitemap, robots.txt, and JSON-LD last.
8. Test responsiveness and animation performance across breakpoints.

Write clean, well-organized, componentized code (`/components`, `/app`, `/lib`) with clear naming. Prioritize a visually distinctive, premium, conversion-focused result over generic boilerplate.