import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Process } from "@/components/home/Process";
import { Reviews } from "@/components/home/Reviews";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CTABanner } from "@/components/ui/CTABanner";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} | Brampton Plumbing Installs & Repairs`,
  description:
    "Soft Water Plumbing & Drain — residential and commercial plumbing in Brampton, ON. New construction or renovation. Get your free install quote today.",
  openGraph: {
    title: "Plumbing Done Right, The First Time | Soft Water Plumbing & Drain",
    description:
      "5.0 Google reviews. Serving Brampton and nearby areas. Call (416) 475-4166.",
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <CTABanner
        variant="copper"
        title="Ready to get started? Get your free install quote today."
        description="Most homeowners hear back within one business hour — no obligation."
      />
      <Reviews />
      <FAQPreview />
      <CTABanner
        variant="navy"
        title="Your next install starts with a free quote."
        description="Tell us what you need. We'll confirm pricing and schedule — clean, clear, done right."
      />
    </>
  );
}
