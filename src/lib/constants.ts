export const SITE = {
  name: "Soft Water Plumbing & Drain",
  shortName: "Soft Water Plumbing",
  tagline:
    "Residential and commercial plumbing services — new construction or renovation.",
  phone: "(416) 475-4166",
  phoneHref: "tel:+14164754166",
  address: "11 Lisa St. #712, Brampton, ON",
  fullAddress: "11 Lisa St. #712, Brampton, ON L6T 4T8",
  hours: "Call to confirm hours",
  serviceAreas: ["Brampton", "Nearby areas"],
  rating: "5.0",
  reviewCountLabel: "Google reviews",
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
      "Fast response for floods, burst pipes, and no-hot-water crises. We stabilize first, then fix it right.",
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
    name: "Nasim Akhtar",
    neighborhood: "Brampton, ON",
    rating: 5,
    quote: "Highly professional work as per the agreement.",
  },
  {
    name: "Yasser Ahmad",
    neighborhood: "Brampton, ON",
    rating: 5,
    quote: "Highly recommend Soft Water Plumbing for any plumbing work.",
  },
  {
    name: "Antonio Ricci",
    neighborhood: "Brampton, ON",
    rating: 5,
    quote: "Highly recommend their services!",
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
  van: "/images/plumberabout1.webp",
  fixture:
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  work: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
} as const;
