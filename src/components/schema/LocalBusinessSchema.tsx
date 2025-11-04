export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Green Barber",
    image: "https://thegreenbarber.com.au/logo.png",
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
    email: "Thegreenbarbertas@gmail.com",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61573561687111",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Hobart",
      },
      {
        "@type": "City",
        name: "Battery Point",
      },
      {
        "@type": "City",
        name: "Sandy Bay",
      },
      {
        "@type": "City",
        name: "New Town",
      },
      {
        "@type": "City",
        name: "Lenah Valley",
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

