"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock3, Phone, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const TRUST_BADGES = [
  { label: "Licensed & Insured", icon: ShieldCheck },
  { label: "24/7 Emergency", icon: Clock3 },
  { label: "5-Star Rated", icon: Star },
] as const;

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink pt-16 lg:pt-[4.5rem]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,122,61,0.22),transparent_45%),linear-gradient(135deg,#0B2545_0%,#163A5F_55%,#0B2545_100%)]"
      />
      <div
        aria-hidden
        className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-copper/20 blur-3xl"
      />

      <div className="container-site relative grid min-h-[calc(100svh-4rem)] items-center gap-10 py-14 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12 lg:gap-8 lg:py-20">
        <motion.div
          className="relative z-20 lg:col-span-6 xl:col-span-5"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-copper-light">
            Brampton &amp; GTA
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Plumbing Done Right,{" "}
            <span className="text-white">The First Time</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
            Licensed installs, repairs, and emergency response — with upfront
            pricing and a crew that treats your home like their own.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/quote" size="lg">
              Get Install Quote
            </Button>
            <Button
              href={SITE.phoneHref}
              variant="ghost"
              size="lg"
              className="border-white/40"
            >
              <Phone className="h-4 w-4" />
              Call Now — {SITE.phone}
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {TRUST_BADGES.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs text-white/85 backdrop-blur-sm"
              >
                <Icon
                  className={`h-3.5 w-3.5 shrink-0 text-copper-light ${
                    label === "5-Star Rated" ? "fill-copper-light" : ""
                  }`}
                  aria-hidden
                />
                <span className="font-display font-medium tracking-tight">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative z-10 lg:col-span-6 xl:col-span-7"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative ml-auto flex h-[480px] w-full max-w-lg items-end justify-center sm:h-[600px] lg:h-[680px] lg:max-w-none lg:translate-x-2 xl:translate-x-4">
            {/* Plumber sits behind the floating stat card */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-end justify-center overflow-visible">
              <div className="relative h-[115%] w-[115%] max-w-[560px] origin-bottom scale-110 sm:scale-[1.18] lg:scale-125 [mask-image:linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)]">
                <Image
                  src="/images/theplumberhd.png?v=restore1"
                  alt="Smiling licensed plumber in blue coveralls with tool belt"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            <motion.div
              className="relative z-20 mb-6 max-w-[220px] self-end rounded-xl border border-slate-line bg-white p-4 shadow-none sm:mb-12 lg:absolute lg:bottom-8 lg:left-0 lg:mb-0 lg:-translate-x-2"
              style={{ boxShadow: "none", filter: "none" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <p className="font-display text-3xl font-bold text-ink">500+</p>
              <p className="mt-1 text-sm text-slate-text">
                Installs completed across Brampton &amp; the GTA
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
