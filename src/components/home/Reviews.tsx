"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REVIEWS } from "@/lib/constants";

export function Reviews() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="Reviews"
          title="What neighbours say after the install"
          description="Real feedback from homeowners across Brampton and nearby cities."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {REVIEWS.map((review, index) => (
            <motion.blockquote
              key={review.name}
              className={`rounded-2xl border border-slate-line bg-slate-pale p-6 sm:p-7 ${
                index % 2 === 1 ? "sm:translate-y-6" : ""
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex gap-1 text-copper">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-ink">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="mt-5">
                <p className="font-display font-semibold text-ink">
                  {review.name}
                </p>
                <p className="text-sm text-slate-text">{review.neighborhood}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
