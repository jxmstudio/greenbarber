export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Green Barber",
    image: "https://greenbarbertas.com.au/logo.jpg",
    "@id": "https://greenbarbertas.com.au",
    url: "https://greenbarbertas.com.au",
    telephone: "0433804284",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "70 Carlton Beach Rd",
      addressLocality: "Dodges Ferry",
      addressRegion: "TAS",
      postalCode: "7173",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -42.9925,
      longitude: 147.8105,
    },
    email: "thegreenbarbertas@gmail.com",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
    // aggregateRating enables star ratings in Google SERP for branded and local searches.
    // TODO: Update reviewCount manually as new reviews are posted on Facebook/Google.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "24",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61573561687111",
      "https://www.instagram.com/the_green_barber_tas/",
      "https://share.google/NOEKTr9PjbX1xX0Vv",
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hobart" },
      { "@type": "AdministrativeArea", name: "Kingborough" },
      { "@type": "AdministrativeArea", name: "Huon Valley" },
      { "@type": "AdministrativeArea", name: "Clarence" },
      { "@type": "AdministrativeArea", name: "Glenorchy" },
      { "@type": "AdministrativeArea", name: "Brighton" },
      { "@type": "AdministrativeArea", name: "Sorell" },
      { "@type": "AdministrativeArea", name: "Derwent Valley" },
      { "@type": "City", name: "Dodges Ferry" },
      { "@type": "City", name: "Carlton Beach" },
      { "@type": "City", name: "Howrah" },
      { "@type": "City", name: "Midway Point" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

