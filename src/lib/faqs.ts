export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQCategory = {
  id: string;
  title: string;
  items: FAQItem[];
};

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "installation",
    title: "Installation",
    items: [
      {
        question: "How long does a typical water heater install take?",
        answer:
          "Most tank replacements take 2–4 hours. Tankless units can take 4–6 hours depending on venting and gas or electrical upgrades. We confirm timing during your free quote.",
      },
      {
        question: "Do you supply the fixtures and equipment?",
        answer:
          "Yes. We can source and install equipment that fits your home and budget, or install fixtures you've already purchased — as long as they meet code and manufacturer requirements.",
      },
      {
        question: "Will you haul away my old water heater or fixtures?",
        answer:
          "Absolutely. Old equipment is removed and disposed of properly as part of a standard install quote unless you ask us to leave it.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    items: [
      {
        question: "Is the install quote really free?",
        answer:
          "Yes. Quotes are free and no-obligation. You'll get clear pricing before any work begins — no surprise charges after the job.",
      },
      {
        question: "How quickly will I hear back after submitting a quote?",
        answer:
          "We aim to respond within one business hour during regular hours. Emergency requests are prioritized around the clock.",
      },
      {
        question: "Do you offer financing or payment plans?",
        answer:
          "For larger installs we can discuss payment options during your quote. We'll outline what's available based on the scope of work.",
      },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Service",
    items: [
      {
        question: "What counts as a plumbing emergency?",
        answer:
          "Burst pipes, major leaks, sewage backups, no water, or no hot water in winter. If you're unsure, call us — we'll tell you honestly whether it can wait.",
      },
      {
        question: "Are you available 24/7?",
        answer:
          "Yes. Emergency calls are answered day and night across Brampton and nearby cities. Response times vary with traffic and demand, but we move fast.",
      },
    ],
  },
  {
    id: "service-area",
    title: "Service Area",
    items: [
      {
        question: "Which cities do you serve?",
        answer:
          "We're based in Brampton and regularly serve Mississauga, Caledon, and Vaughan. Outside those areas? Reach out — we often can help nearby communities too.",
      },
      {
        question: "Do you work on both houses and condos?",
        answer:
          "Yes. We handle single-family homes, townhomes, and many condo or rental units — subject to building rules and access requirements.",
      },
    ],
  },
];

export const FAQ_PREVIEW = [
  FAQ_CATEGORIES[0].items[0],
  FAQ_CATEGORIES[1].items[0],
  FAQ_CATEGORIES[2].items[0],
  FAQ_CATEGORIES[3].items[0],
];
