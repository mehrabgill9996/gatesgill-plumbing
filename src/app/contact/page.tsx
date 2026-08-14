import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Gatesgill Plumbing in Brampton — call, email, or send a message. Free install quotes available.",
  openGraph: {
    title: "Contact Gatesgill Plumbing",
    description:
      "Reach our Brampton team for installs, repairs, and emergencies across the GTA.",
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
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                  <a href={SITE.emailHref} className="hover:text-ink">
                    {SITE.email}
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
                title="Gatesgill Plumbing location — Brampton, Ontario"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.2543589141!2d-79.8666!3d43.7315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15eaa5d05abf%3A0x352d31667f750370!2sBrampton%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
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
