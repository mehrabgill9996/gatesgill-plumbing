"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Flame,
  Search,
  ShowerHead,
  Siren,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const ICONS = {
  flame: Flame,
  droplets: Droplets,
  wrench: Wrench,
  shower: ShowerHead,
  siren: Siren,
  search: Search,
} as const;

const offsets = ["mt-0", "mt-8 lg:mt-12", "mt-0 lg:mt-6", "mt-8", "mt-0 lg:mt-10", "mt-6 lg:mt-2"];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-white py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-pale to-transparent"
      />
      <div className="container-site relative">
        <SectionHeading
          eyebrow="What we do"
          title="Installs and repairs that hold up"
          description="From water heaters to emergency leaks — every job is scoped clearly, priced upfront, and finished clean."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            return (
              <motion.article
                key={service.id}
                className={`group rounded-2xl border border-slate-line bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-lift ${offsets[index]}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-copper-light transition group-hover:bg-copper group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-text sm:text-base">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
