import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Khalsa M.S. Plumbing and Renovation Inc. in Brampton — call or send a message. Open 24 hours.",
  openGraph: {
    title: "Contact Khalsa M.S. Plumbing and Renovation Inc.",
    description:
      "Reach our Brampton team for residential and commercial plumbing in Brampton and nearby areas.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="container-site flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-copper-light">
              Contact
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s talk about your install
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/75">
              Prefer a quote first? Skip the form and go straight to pricing.
            </p>
          </div>
          <Button href="/quote" size="lg">
            Get Install Quote
          </Button>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-line bg-slate-pale p-6">
              <h2 className="font-display text-xl font-bold text-ink">
                Business details
              </h2>
              <ul className="mt-5 space-y-4 text-slate-text">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                  <span>{SITE.fullAddress}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                  <a href={SITE.phoneHref} className="hover:text-ink">
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                  <span>{SITE.hours}</span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-slate-line">
              <iframe
                title="Khalsa M.S. Plumbing and Renovation Inc. — 172 Torrance Woods, Brampton, Ontario"
                src="https://maps.google.com/maps?q=172%20Torrance%20Woods%2C%20Brampton%2C%20ON%20L6Y%204K2&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="mb-4 font-display text-2xl font-bold text-ink">
              Send a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <CTABanner variant="pale" />
    </>
  );
}
