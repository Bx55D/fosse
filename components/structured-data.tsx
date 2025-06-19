export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://fossecreative.co.uk/#business",
        "name": "Fosse Creative",
        "description": "Professional web design and development services in Melksham, Wiltshire. Modern, responsive websites for local businesses.",
        "url": "https://fossecreative.co.uk",
        "telephone": "+44-1225-XXX-XXX",
        "email": "hello@fossecreative.co.uk",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Melksham",
          "addressLocality": "Melksham",
          "addressRegion": "Wiltshire",
          "postalCode": "SN12",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.3738,
          "longitude": -2.1386
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Melksham"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Wiltshire"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          }
        ],
        "serviceType": [
          "Web Design",
          "Web Development",
          "Responsive Design",
          "E-commerce Development",
          "SEO Services"
        ],
        "priceRange": "££",
        "image": "https://fossecreative.co.uk/logo.png",
        "logo": "https://fossecreative.co.uk/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/fosse-creative",
          "https://twitter.com/fossecreative"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://fossecreative.co.uk/#website",
        "url": "https://fossecreative.co.uk",
        "name": "Fosse Creative",
        "description": "Professional web design and development services in Melksham, Wiltshire",
        "publisher": {
          "@id": "https://fossecreative.co.uk/#business"
        },
        "inLanguage": "en-GB"
      },
      {
        "@type": "WebPage",
        "@id": "https://fossecreative.co.uk/#webpage",
        "url": "https://fossecreative.co.uk",
        "name": "Fosse Creative | Web Design Melksham, Wiltshire",
        "isPartOf": {
          "@id": "https://fossecreative.co.uk/#website"
        },
        "about": {
          "@id": "https://fossecreative.co.uk/#business"
        },
        "description": "Professional web design and development services in Melksham, Wiltshire. Modern, responsive websites for local businesses.",
        "inLanguage": "en-GB"
      },
      {
        "@type": "Service",
        "@id": "https://fossecreative.co.uk/#service",
        "name": "Web Design Services",
        "description": "Professional web design and development services including responsive design, e-commerce solutions, and SEO optimization.",
        "provider": {
          "@id": "https://fossecreative.co.uk/#business"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Wiltshire"
        },
        "serviceType": "Web Design and Development",
        "category": "Web Design"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}