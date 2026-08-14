"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps from quote to done"
          description="A simple path designed to get you an answer fast — and an install you can trust."
        />

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-slate-line md:left-1/2 md:block md:-translate-x-px"
          />
          <motion.div
            aria-hidden
            className="absolute left-6 top-4 hidden w-px origin-top bg-copper md:left-1/2 md:block md:-translate-x-px"
            initial={{ scaleY: 0, height: "calc(100% - 2rem)" }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ height: "calc(100% - 2rem)" }}
          />

          <ol className="space-y-10 md:space-y-16">
            {PROCESS_STEPS.map((step, index) => {
              const left = index % 2 === 0;
              return (
                <motion.li
                  key={step.step}
                  className={`relative grid items-center gap-4 md:grid-cols-2 md:gap-12 ${
                    left ? "" : "md:text-right"
                  }`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`${
                      left ? "md:pr-16 md:text-right" : "md:order-2 md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-copper bg-white font-display text-sm font-bold text-ink shadow-soft md:hidden">
                      {step.step}
                    </div>
                    <p className="font-display text-sm font-semibold text-copper">
                      Step {step.step}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-slate-text">{step.description}</p>
                  </div>
                  <div
                    className={`absolute left-6 top-2 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-copper bg-white font-display text-sm font-bold text-ink shadow-soft md:flex md:left-1/2 ${
                      left ? "" : ""
                    }`}
                  >
                    {step.step}
                  </div>
                  <div className={left ? "hidden md:block" : "hidden md:order-1 md:block"} />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
