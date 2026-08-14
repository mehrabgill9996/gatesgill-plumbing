"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-cta-row");
    if (!target) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-slate-line bg-white/95 p-3 shadow-lift backdrop-blur-md transition-all duration-300 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={SITE.phoneHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border-2 border-ink px-3 py-2.5 font-display text-sm font-semibold text-ink"
        >
          <Phone className="h-4 w-4 text-copper" />
          Call Now
        </a>
        <Button href="/quote" className="flex-1" size="sm">
          Get Quote
        </Button>
      </div>
    </div>
  );
}
