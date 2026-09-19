"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Phone, ShieldCheck, Star, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const TRUST_BADGES = [
  { label: "Licensed & Insured", icon: ShieldCheck },
  { label: "Residential & Commercial", icon: Building2 },
  { label: "5-Star Rated", icon: Star },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 lg:min-h-screen lg:pt-[4.5rem]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/herobgelf.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-white/10 lg:from-white/80 lg:via-white/40 lg:to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 grid lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-2">
        {/* LEFT — text */}
        <div className="relative z-20 flex flex-col items-center justify-center px-5 py-8 text-center sm:px-6 lg:items-start lg:px-8 lg:py-14 lg:text-left xl:pl-[max(2rem,calc((100vw-72rem)/2+2rem))] xl:pr-10">
          <motion.p
            className="font-display text-base font-semibold uppercase tracking-[0.2em] text-copper sm:text-lg"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Brampton, Ontario
          </motion.p>

          <motion.h1
            className="mt-8 max-w-xl font-display text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:mt-9 lg:text-[3.45rem] lg:leading-[1.16]"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.12}
          >
            Plumbing Done Right, The First Time
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md text-base leading-relaxed text-slate-text sm:text-lg"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.24}
          >
            Residential and commercial plumbing for new construction or
            renovation — with upfront pricing and a crew that treats your home
            like their own.
          </motion.p>

          <motion.div
            id="hero-cta-row"
            className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:items-center lg:justify-start"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.36}
          >
            <Button
              href="/quote"
              size="lg"
              className="min-h-[3.25rem] px-8 text-base sm:text-lg lg:hidden"
            >
              Get Install Quote
            </Button>
            <motion.div
              className="hidden rounded-md lg:inline-flex"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(201,122,61,0)",
                  "0 0 22px 4px rgba(201,122,61,0.45)",
                  "0 0 0 0 rgba(201,122,61,0)",
                  "0 0 18px 3px rgba(201,122,61,0.35)",
                  "0 0 0 0 rgba(201,122,61,0)",
                ],
              }}
              transition={{
                duration: 2.6,
                times: [0, 0.25, 0.5, 0.75, 1],
                ease: "easeInOut",
              }}
            >
              <Button
                href="/quote"
                size="lg"
                className="min-h-[3.25rem] px-8 text-base sm:text-lg"
              >
                Get Install Quote
              </Button>
            </motion.div>

            <a
              href={SITE.phoneHref}
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-ink/20 bg-white/70 px-4 py-2.5 font-display text-sm font-medium tracking-tight text-ink backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-copper/60 hover:bg-white hover:shadow-copper"
            >
              <Phone className="h-3.5 w-3.5 text-copper transition-transform duration-200 group-hover:scale-110" />
              Call Now — {SITE.phone}
            </a>
          </motion.div>

          <motion.ul
            className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.48}
          >
            {TRUST_BADGES.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-ink/10 bg-white/85 px-2.5 py-1.5 text-xs text-ink shadow-soft backdrop-blur-sm"
              >
                <Icon
                  className={`h-3.5 w-3.5 shrink-0 text-copper ${
                    label === "5-Star Rated" ? "fill-copper" : ""
                  }`}
                  aria-hidden
                />
                <span className="font-display font-medium tracking-tight">
                  {label}
                </span>
              </li>
            ))}
            <li className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/10 bg-white/85 px-3 py-1.5 text-xs text-ink shadow-soft backdrop-blur-sm">
              <span
                className="flex items-center gap-0.5 text-copper"
                aria-label="5 star rating"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </span>
              <span className="font-display font-medium tracking-tight">
                5.0 Google reviews
              </span>
            </li>
          </motion.ul>
        </div>

        {/* RIGHT — single photo, diagonal top-left clip only */}
        <div className="relative h-[420px] w-full sm:h-[520px] lg:h-auto lg:min-h-full">
          <div
            className="absolute inset-0"
            style={{ clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            <Image
              src="/images/theplumberhd.webp"
              alt="Smiling licensed plumber in blue coveralls with tool belt"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_top]"
            />
          </div>
        </div>
      </div>

      {/* Stat card — photo bottom-left only, explicit offsets */}
      <div className="absolute bottom-[10%] left-5 z-20 w-[210px] rounded-xl border border-slate-line/80 border-l-[3px] border-l-copper bg-white/95 p-4 shadow-lift backdrop-blur-sm sm:left-8 lg:left-[52%] lg:bottom-[9%]">
        <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-copper/10 text-copper">
          <Wrench className="h-4 w-4" aria-hidden />
        </div>
        <p className="font-display text-3xl font-bold text-ink">500+</p>
        <p className="mt-1 text-sm leading-snug text-slate-text">
          Plumbing work completed across Brampton &amp; nearby areas
        </p>
      </div>
    </section>
  );
}
