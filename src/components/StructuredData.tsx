import { person, baseURL } from "@/resources";

export default function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Angeloramos Photography",
    "image": `${baseURL}/images/hero-wedding.jpg`,
    "@id": baseURL,
    "url": baseURL,
    "telephone": "+639488895424",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Metro Manila",
      "addressCountry": "PH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 14.5995,
      "longitude": 120.9842
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/angeloramos.photography",
      "https://www.instagram.com/angeloramosph/"
    ],
    "priceRange": "₱₱"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
