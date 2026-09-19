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
      streetAddress: "11 Lisa St. #712",
      addressLocality: "Brampton",
      addressRegion: "ON",
      postalCode: "L6T 4T8",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "Place",
      name: "Brampton and nearby areas",
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
