import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote/QuoteForm";

export const metadata: Metadata = {
  title: "Get Install Quote",
  description:
    "Request a free, no-obligation plumbing install quote from Gatesgill Plumbing. Response within one business hour.",
  openGraph: {
    title: "Free Install Quote | Gatesgill Plumbing",
    description:
      "Multi-step quote request — quick, clear, and completely free. Serving Brampton and the GTA.",
  },
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-slate-pale pt-28 pb-8 sm:pt-32">
        <div className="container-site">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-copper">
            Free install quote
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Get pricing in under two minutes
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-text">
            Tell us what you need. We&apos;ll follow up with a clear quote —
            no pressure, no surprises.
          </p>
        </div>
      </section>
      <section className="bg-slate-pale pb-20 sm:pb-24">
        <div className="container-site">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
