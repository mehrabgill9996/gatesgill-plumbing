import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}. How we collect, use, and protect your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="container-site max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-copper">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-4 text-slate-text">
          Last updated: August 13, 2026
        </p>

        <div className="prose-custom mt-10 space-y-8 text-slate-text leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-ink">
              1. Introduction
            </h2>
            <p className="mt-3">
              {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              respects your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard information when you visit our
              website or request a plumbing quote or service in Brampton and
              surrounding areas.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We may collect personal information you voluntarily provide,
              including:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Name, phone number, and email address</li>
              <li>Service address and property details</li>
              <li>Messages and quote preferences you submit via forms</li>
              <li>
                Basic technical data such as browser type, device, and pages
                visited (via cookies or analytics tools)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">We use collected information to:</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Respond to quote requests and service inquiries</li>
              <li>Schedule appointments and perform plumbing work</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>
                Send service-related communications (we do not sell your data)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">
              4. Cookies &amp; Tracking
            </h2>
            <p className="mt-3">
              Our site may use cookies and similar technologies to remember
              preferences, measure traffic, and improve performance. You can
              control cookies through your browser settings. Disabling cookies
              may affect some site features.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">
              5. Third-Party Services
            </h2>
            <p className="mt-3">
              We may use trusted third-party providers for hosting, analytics,
              maps (e.g. Google Maps), or communications. These providers process
              data only as needed to perform services on our behalf and are
              expected to protect it appropriately. We do not control the privacy
              practices of external sites linked from our pages.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">
              6. Data Retention &amp; Security
            </h2>
            <p className="mt-3">
              We retain personal information only as long as needed for the
              purposes described above or as required by law. We implement
              reasonable administrative and technical safeguards; however, no
              method of transmission over the Internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">
              7. Your Rights
            </h2>
            <p className="mt-3">
              Depending on applicable Canadian privacy law, you may request
              access to, correction of, or deletion of your personal information.
              Contact us using the details below to make a request.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">
              8. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              Our services are directed to adults and property decision-makers.
              We do not knowingly collect personal information from children
              under 13.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">
              9. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. The
              &quot;Last updated&quot; date at the top will reflect the latest
              revision. Continued use of the site after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">
              10. Contact for Privacy Concerns
            </h2>
            <p className="mt-3">
              For privacy questions or requests, contact {SITE.name} at{" "}
              <a
                href={SITE.emailHref}
                className="font-medium text-copper underline-offset-2 hover:underline"
              >
                {SITE.email}
              </a>{" "}
              or {SITE.phone}, or write to us at {SITE.fullAddress}.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
