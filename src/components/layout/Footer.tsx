import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-xl font-bold">
            Gatesgill <span className="text-copper-light">Plumbing</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {SITE.tagline} Licensed plumbing installs and repairs across the
            Greater Toronto Area — based in Brampton.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-copper-light">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/quote"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Get Install Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-copper-light">
            Service Area
          </p>
          <ul className="mt-4 space-y-2">
            {SITE.serviceAreas.map((area) => (
              <li key={area} className="text-sm text-white/75">
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-copper-light">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper-light" />
              {SITE.fullAddress}
            </li>
            <li>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-copper-light" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.emailHref}
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-copper-light" />
                {SITE.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {["Facebook", "Instagram", "Google"].map((network) => (
              <span
                key={network}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-semibold text-white/80"
                aria-hidden
              >
                {network[0]}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/faqs" className="hover:text-white/80">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
