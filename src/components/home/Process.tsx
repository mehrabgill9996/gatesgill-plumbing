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
            className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-px -translate-x-px bg-slate-line"
          />
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-4 w-px origin-top -translate-x-px bg-copper"
            initial={{ scaleY: 0 }}
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
                  className={`relative grid grid-cols-2 items-center gap-4 md:gap-12 ${
                    left ? "" : "text-right md:text-right"
                  }`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={
                      left
                        ? "pr-8 text-right md:pr-16"
                        : "col-start-2 pl-8 text-left md:pl-16"
                    }
                  >
                    <p className="font-display text-sm font-semibold text-copper">
                      Step {step.step}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-text sm:text-base">
                      {step.description}
                    </p>
                  </div>
                  <div className="absolute left-1/2 top-2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-copper bg-white font-display text-sm font-bold text-ink shadow-soft">
                    {step.step}
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
