import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_PREVIEW } from "@/lib/faqs";

export function FAQPreview() {
  return (
    <section className="bg-slate-pale py-20 sm:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="FAQs"
            title="Quick answers before you book"
            description="The questions we hear most from Brampton homeowners planning an install."
          />
          <Link
            href="/faqs"
            className="mt-6 inline-flex font-display text-sm font-semibold text-copper underline-offset-4 hover:underline"
          >
            View all FAQs →
          </Link>
        </div>
        <div className="lg:col-span-7">
          <Accordion items={FAQ_PREVIEW} className="rounded-2xl bg-white px-5 shadow-soft sm:px-6" />
        </div>
      </div>
    </section>
  );
}
