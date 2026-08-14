"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    const key = "gatesgill-exit-intent";
    if (sessionStorage.getItem(key)) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem(key, "1");
        document.removeEventListener("mouseout", onMouseLeave);
      }
    };

    document.addEventListener("mouseout", onMouseLeave);
    return () => document.removeEventListener("mouseout", onMouseLeave);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("Quick quote:", Object.fromEntries(data.entries()));
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
            className="relative w-full max-w-md overflow-hidden rounded-xl bg-white p-6 shadow-lift sm:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-md p-1 text-slate-text hover:bg-slate-pale"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-4 text-center">
                <p className="font-display text-2xl font-bold text-ink">
                  You&apos;re on the list.
                </p>
                <p className="mt-2 text-slate-text">
                  We&apos;ll call you shortly with a free install quote.
                </p>
                <Button
                  className="mt-6"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-copper">
                  Before you go
                </p>
                <h2
                  id="exit-intent-title"
                  className="mt-2 font-display text-2xl font-bold text-ink"
                >
                  Wait — get your free install quote before you go
                </h2>
                <p className="mt-2 text-sm text-slate-text">
                  Drop your name and number. We&apos;ll follow up within one
                  business hour.
                </p>
                <form onSubmit={onSubmit} className="mt-6 space-y-3">
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-md border border-slate-line px-4 py-3 text-ink outline-none ring-copper focus:ring-2"
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone number"
                    className="w-full rounded-md border border-slate-line px-4 py-3 text-ink outline-none ring-copper focus:ring-2"
                  />
                  <Button type="submit" className="w-full">
                    Get Free Quote
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
