"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter,-webkit-backdrop-filter] duration-500 ease-out ${
        solid
          ? "border-slate-line/80 bg-white/95 shadow-soft backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link
          href="/"
          className={`font-display text-lg font-bold tracking-tight transition-colors duration-500 sm:text-xl ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          Gatesgill{" "}
          <span
            className={`transition-colors duration-500 ${
              solid ? "text-copper" : "text-copper-light"
            }`}
          >
            Plumbing
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm font-medium transition-colors duration-500 ${
                  solid
                    ? active
                      ? "text-copper"
                      : "text-ink/80 hover:text-ink"
                    : active
                      ? "text-copper-light"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className={`inline-flex items-center gap-2 font-display text-sm font-semibold transition-colors duration-500 ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4 text-copper" />
            {SITE.phone}
          </a>
          <Button href="/quote" size="sm" className="!shadow-none hover:!shadow-none">
            Get Install Quote
          </Button>
        </div>

        <button
          type="button"
          className={`rounded-md p-2 transition-colors duration-500 lg:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-line bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 font-display text-base font-medium text-ink hover:bg-slate-pale"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-slate-line pt-4">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 font-display font-semibold text-ink"
            >
              <Phone className="h-4 w-4 text-copper" />
              {SITE.phone}
            </a>
            <Button href="/quote" className="w-full !shadow-none hover:!shadow-none">
              Get Install Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
