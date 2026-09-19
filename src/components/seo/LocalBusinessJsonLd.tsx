import { SITE } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: SITE.name,
    description: SITE.tagline,
    telephone: SITE.phone,
    url: "https://gatesgillplumbing.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "172 Torrance Woods",
      addressLocality: "Brampton",
      addressRegion: "ON",
      postalCode: "L6Y 4K2",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "Place",
      name: "Brampton and nearby areas",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      bestRating: "5",
      reviewCount: "3",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
