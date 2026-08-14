import { SITE } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: SITE.name,
    description: SITE.tagline,
    telephone: SITE.phone,
    email: SITE.email,
    url: "https://gatesgillplumbing.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brampton",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: SITE.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
