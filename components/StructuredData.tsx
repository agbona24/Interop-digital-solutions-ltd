interface StructuredDataProps {
  type: "Organization" | "WebSite" | "Service" | "FAQPage" | "BreadcrumbList";
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseContext = "https://schema.org";

    switch (type) {
      case "Organization":
        return {
          "@context": baseContext,
          "@type": "Organization",
          name: "Interop Digital Solutions",
          description: "Leading IT solutions provider specializing in software development, cloud services, and digital transformation.",
          url: "https://interopdigital.com",
          logo: "https://interopdigital.com/logo.png",
          sameAs: [
            "https://linkedin.com/company/interop-digital",
            "https://twitter.com/interopdigital",
            "https://github.com/interopdigital",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-123-4567",
            contactType: "Customer Service",
            areaServed: "Worldwide",
            availableLanguage: ["English"],
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            postalCode: "94102",
            addressCountry: "US",
          },
          ...data,
        };

      case "WebSite":
        return {
          "@context": baseContext,
          "@type": "WebSite",
          name: "Interop Digital Solutions",
          url: "https://interopdigital.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://interopdigital.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          ...data,
        };

      case "Service":
        return {
          "@context": baseContext,
          "@type": "Service",
          provider: {
            "@type": "Organization",
            name: "Interop Digital Solutions",
          },
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "IT Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Software Development",
                  description: "Custom software development services",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cloud Solutions",
                  description: "Cloud migration and management services",
                },
              },
            ],
          },
          ...data,
        };

      case "FAQPage":
        return {
          "@context": baseContext,
          "@type": "FAQPage",
          mainEntity: data.questions?.map((q: any) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })) || [],
        };

      case "BreadcrumbList":
        return {
          "@context": baseContext,
          "@type": "BreadcrumbList",
          itemListElement: data.items?.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })) || [],
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
