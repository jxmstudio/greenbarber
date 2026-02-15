export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Green Barber",
    image: "https://thegreenbarber.com.au/logo.jpg",
    "@id": "https://thegreenbarber.com.au",
    url: "https://thegreenbarber.com.au",
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
    sameAs: [
      "https://www.facebook.com/profile.php?id=61573561687111",
      "https://www.instagram.com/the_green_barber_tas/",
      "https://share.google/NOEKTr9PjbX1xX0Vv",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Dodges Ferry",
      },
      {
        "@type": "City",
        name: "Carlton Beach",
      },
      {
        "@type": "City",
        name: "Eagle Hawk Neck",
      },
      {
        "@type": "City",
        name: "Midway Point",
      },
      {
        "@type": "City",
        name: "Sorrell",
      },
      {
        "@type": "City",
        name: "Hobart",
      },
      {
        "@type": "City",
        name: "Howrah",
      },
      {
        "@type": "City",
        name: "West Hobart",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

