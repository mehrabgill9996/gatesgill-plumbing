"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DIFFERENTIATORS, STATS } from "@/lib/constants";

const DIFF_ICONS = [ShieldCheck, BadgeCheck, Sparkles, Clock3];

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold text-ink sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-text sm:text-base">{label}</p>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-pale py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute -left-20 top-1/3 h-64 w-64 -rotate-12 rounded-3xl border border-copper/20 bg-copper/5"
      />
      <div className="container-site relative">
        <SectionHeading
          eyebrow="Why Gatesgill"
          title="The difference shows up on the job"
          description="Numbers matter — but so does how we show up. Here's what Brampton homeowners count on."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid grid-cols-2 gap-8 rounded-2xl bg-white p-8 shadow-soft lg:grid-cols-4 lg:gap-4">
          {STATS.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = DIFF_ICONS[index];
            return (
              <motion.div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-line bg-white p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-copper-light">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-text">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
