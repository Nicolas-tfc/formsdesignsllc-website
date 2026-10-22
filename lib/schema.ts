import { SITE, IMAGES } from "./site";
import { FAQ } from "./content";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: `${SITE.url}/`,
  telephone: SITE.phoneE164,
  email: SITE.email,
  image: IMAGES.og,
  logo: IMAGES.og,
  description:
    "Epoxy garage floors, basement coatings, polished concrete and commercial flooring in Summit, NJ and across New Jersey.",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  areaServed: [
    { "@type": "City", name: "Summit, NJ" },
    { "@type": "AdministrativeArea", name: "Morris County, NJ" },
    { "@type": "AdministrativeArea", name: "Essex County, NJ" },
    { "@type": "AdministrativeArea", name: "Union County, NJ" },
    { "@type": "AdministrativeArea", name: "Somerset County, NJ" },
    { "@type": "AdministrativeArea", name: "Middlesex County, NJ" },
    { "@type": "AdministrativeArea", name: "Monmouth County, NJ" },
  ],
  sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.maps],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Flooring services",
    itemListElement: [
      "Epoxy garage floors",
      "Concrete coatings",
      "Basement floors",
      "Polished concrete",
      "Commercial epoxy flooring",
      "Microtopping",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: SITE.name,
  publisher: { "@id": `${SITE.url}/#business` },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};
