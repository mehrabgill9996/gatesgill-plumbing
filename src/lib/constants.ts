export const SITE = {
  name: "Gatesgill Plumbing",
  tagline: "Plumbing done right, the first time.",
  phone: "(905) 555-0187",
  phoneHref: "tel:+19055550187",
  email: "hello@gatesgillplumbing.com",
  emailHref: "mailto:hello@gatesgillplumbing.com",
  address: "Brampton, Ontario",
  fullAddress: "Brampton, ON L6Y 0A1, Canada",
  hours: "Mon–Fri 7am–7pm · Sat 8am–4pm · Emergency 24/7",
  serviceAreas: ["Brampton", "Mississauga", "Caledon", "Vaughan"],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "water-heater",
    title: "Water Heater Installation",
    description:
      "Tank and tankless installs sized for your home — efficient, code-compliant, and ready when you need hot water.",
    icon: "flame",
  },
  {
    id: "drain-cleaning",
    title: "Drain Cleaning",
    description:
      "Camera-backed clearing for kitchen, bath, and main lines. Fast relief without guesswork or unnecessary digging.",
    icon: "droplets",
  },
  {
    id: "pipe-repair",
    title: "Pipe Repair",
    description:
      "Leaks, bursts, and aging copper or PEX replaced cleanly — with minimal disruption to your walls and floors.",
    icon: "wrench",
  },
  {
    id: "fixture-install",
    title: "Fixture Installation",
    description:
      "Faucets, toilets, showers, and sinks installed to manufacturer specs so they look sharp and last for years.",
    icon: "shower",
  },
  {
    id: "emergency",
    title: "Emergency Plumbing",
    description:
      "24/7 response for floods, burst pipes, and no-hot-water crises. We stabilize first, then fix it right.",
    icon: "siren",
  },
  {
    id: "leak-detection",
    title: "Leak Detection",
    description:
      "Non-invasive locating of hidden leaks before they ruin floors, ceilings, or your water bill.",
    icon: "search",
  },
] as const;

export const STATS = [
  { label: "Years in Business", value: 15, suffix: "+" },
  { label: "Jobs Completed", value: 500, suffix: "+" },
  { label: "Avg Response Time", value: 45, suffix: " min" },
  { label: "Satisfaction Rate", value: 98, suffix: "%" },
] as const;

export const DIFFERENTIATORS = [
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed technicians. Every job is covered so you never carry the risk.",
  },
  {
    title: "Upfront Pricing",
    description:
      "Clear quotes before we start. No surprise line items after the tools are put away.",
  },
  {
    title: "Clean Job Sites",
    description:
      "Shoe covers, drop cloths, and a broom sweep before we leave. Your home stays yours.",
  },
  {
    title: "Warranty Backed",
    description:
      "Workmanship guarantees on installs and repairs — we stand behind every connection.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Request a Quote",
    description: "Tell us what you need in under two minutes — online or by phone.",
  },
  {
    step: "02",
    title: "We Assess",
    description: "A licensed tech reviews the job, confirms fit, and locks in pricing.",
  },
  {
    step: "03",
    title: "We Install",
    description: "Scheduled arrival, quality materials, and a tidy finish.",
  },
  {
    step: "04",
    title: "You Relax",
    description: "Walkthrough, warranty details, and peace of mind that it was done right.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Priya S.",
    neighborhood: "Brampton, ON",
    rating: 5,
    quote:
      "They replaced our water heater the same week we called. Fair price, zero mess, and hot water by dinner.",
  },
  {
    name: "Marcus T.",
    neighborhood: "Mississauga, ON",
    rating: 5,
    quote:
      "Emergency leak at 11pm — they showed up, stopped the damage, and explained every step. True pros.",
  },
  {
    name: "Elena R.",
    neighborhood: "Caledon, ON",
    rating: 5,
    quote:
      "Fixture install looked showroom-perfect. They took the time to get the alignment and seal right.",
  },
  {
    name: "James K.",
    neighborhood: "Vaughan, ON",
    rating: 5,
    quote:
      "Straight talk on pricing and a clean pipe repair. I'll call Gatesgill first for anything plumbing.",
  },
] as const;

export const TEAM = [
  {
    name: "Daniel Gates",
    role: "Founder & Master Plumber",
    image: "/images/team/member-1.png",
  },
  {
    name: "Aisha Rahman",
    role: "Lead Install Technician",
    image: "/images/team/member-2.png",
  },
  {
    name: "Chris Nguyen",
    role: "Service & Diagnostics",
    image: "/images/team/member-3.png",
  },
] as const;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
  kitchen:
    "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=80",
  bathroom:
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
  pipes:
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80",
  tools:
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
  van: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
  fixture:
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  work: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
} as const;
