import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { FAQ_CATEGORIES } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers about plumbing installs, pricing, emergency service, and service areas for Gatesgill Plumbing in Brampton.",
  openGraph: {
    title: "Plumbing FAQs | Gatesgill Plumbing",
    description:
      "Installation, pricing, emergencies, and service area questions — answered clearly.",
  },
};

export default function FAQsPage() {
  return (
    <>
      <section className="bg-ink pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="container-site">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-copper-light">
            FAQs
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Straight answers about our plumbing work
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/75">
            Browse by category — or jump to a free install quote if you already
            know what you need.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site space-y-14">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.id} id={category.id}>
              <h2 className="font-display text-2xl font-bold text-ink">
                {category.title}
              </h2>
              <Accordion
                items={category.items}
                className="mt-4 rounded-2xl bg-white px-5 shadow-soft sm:px-6"
              />
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Still have questions? Get a free install quote."
        description="We'll clarify scope, timing, and pricing — usually within one business hour."
      />
    </>
  );
}
