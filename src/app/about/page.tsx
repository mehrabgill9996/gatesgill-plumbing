import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/ui/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES, SITE, TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Gatesgill Plumbing — a Brampton-based team built on clean installs, honest quotes, and workmanship that lasts.",
  openGraph: {
    title: "About Gatesgill Plumbing",
    description:
      "Our story, values, and the crew behind licensed plumbing installs across Brampton and the GTA.",
  },
};

const VALUES = [
  {
    title: "Do it once",
    text: "We don't cut corners on materials or technique. A job done right the first time costs less than a callback.",
  },
  {
    title: "Say it straight",
    text: "Clear quotes, clear timelines, clear options. You'll never wonder what you're paying for.",
  },
  {
    title: "Respect the home",
    text: "Drop cloths, shoe covers, and a tidy exit. Your space should feel better when we leave — not worse.",
  },
];

const GALLERY = [
  { src: IMAGES.kitchen, alt: "Modern kitchen plumbing fixtures" },
  { src: IMAGES.bathroom, alt: "Clean bathroom remodel plumbing" },
  { src: IMAGES.pipes, alt: "Copper and modern pipe work close-up" },
  { src: IMAGES.tools, alt: "Plumbing tools on a job site" },
  { src: IMAGES.work, alt: "Technician completing an install" },
  { src: IMAGES.fixture, alt: "Premium bathroom fixture detail" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-site">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-copper-light">
            About
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built in Brampton. Trusted across the GTA.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Gatesgill Plumbing started with a simple standard: show up on time,
            quote honestly, and leave every install better than the last crew
            would have.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-lift">
            <Image
              src={IMAGES.van}
              alt="Plumbing service vehicle ready for a Brampton job"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Local plumbers with agency-level standards"
              description={`${SITE.name} is a family-rooted service company serving homeowners who want premium results without the runaround. We specialize in installs and repairs that are code-compliant, warranty-backed, and finished clean.`}
            />
            <p className="mt-4 text-slate-text leading-relaxed">
              Whether it&apos;s a tankless water heater, a fixture upgrade, or a
              midnight emergency, the same crew discipline applies: diagnose
              carefully, communicate clearly, and deliver work we&apos;re proud
              to put our name on.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-pale py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Mission & values"
            title="What we refuse to compromise"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-slate-line bg-white p-6 shadow-soft"
              >
                <h3 className="font-display text-xl font-bold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-text">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="The team"
            title="People behind the pipework"
            description="Experienced technicians who treat every home like a referral waiting to happen."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {TEAM.map((member) => (
              <article key={member.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-text">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-line bg-white py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Gallery"
            title="Recent work from the field"
            description="A look at installs and finishes across kitchens, baths, and mechanical rooms."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((image, index) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-2xl ${
                  index === 0 || index === 5 ? "sm:row-span-1 aspect-[4/3]" : "aspect-[4/3]"
                } ${index === 2 ? "lg:translate-y-6" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready for a crew that sweats the details?"
        description="Get a free install quote — we'll respond within one business hour."
      />
    </>
  );
}
