interface StructuredDataProps {
  type: "Organization" | "LocalBusiness" | "WebSite" | "Service" | "FAQPage" | "BreadcrumbList" | "Course";
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
          name: "Interop Digital Solutions Ltd",
          legalName: "Interop Digital Solutions Limited",
          description: "Leading IT firm specializing in API Development, UI/UX Design, Testing, Deployment, Identity & Security, Database Management, AI Solutions, IoT, and Cloud Services. Offering Process Automation, Payment Solutions, Commerce Platforms, and Geo Services.",
          url: "https://interopdigital.com",
          logo: "https://interopdigital.com/images/logo-white.png",
          image: "https://interopdigital.com/og-image.png",
          email: "info@interopdigitalsolutions.com",
          telephone: "++234-906-053-1418",
          sameAs: [
            "https://linkedin.com/company/interop-digital",
            "https://twitter.com/interopdigital",
            "https://github.com/interopdigital",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "++234-906-053-1418",
              contactType: "Customer Service",
              email: "info@interopdigitalsolutions.com",
              areaServed: ["NG", "Worldwide"],
              availableLanguage: ["English"],
              contactOption: "TollFree",
              hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00"
              }
            },
            {
              "@type": "ContactPoint",
              telephone: "++234-906-053-1418",
              contactType: "Sales",
              email: "info@interopdigitalsolutions.com",
              areaServed: ["NG", "Worldwide"],
              availableLanguage: ["English"]
            }
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Trinity Mall, 79, Awolowo Way",
            addressLocality: "Ikeja",
            addressRegion: "Lagos",
            addressCountry: "NG",
            postalCode: "100001"
          },
          founder: {
            "@type": "Person",
            name: "Interop Digital Solutions Ltd"
          },
          foundingDate: "2010",
          numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: "50+"
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "17",
            bestRating: "5",
            worstRating: "1"
          },
          areaServed: [
            {
              "@type": "Country",
              name: "Nigeria"
            },
            {
              "@type": "Country",
              name: "Global"
            }
          ],
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: "6.5244",
              longitude: "3.3792"
            },
            geoRadius: "Global"
          },
          knowsAbout: [
            "Software Development",
            "API Development",
            "UI/UX Design",
            "Cloud Computing",
            "Cybersecurity",
            "AI & Machine Learning",
            "IoT Solutions",
            "Database Management",
            "Process Automation",
            "Digital Transformation"
          ],
          ...data,
        };

      case "LocalBusiness":
        return {
          "@context": baseContext,
          "@type": ["LocalBusiness", "ProfessionalService"],
          name: "Interop Digital Solutions Ltd",
          image: "https://interopdigital.com/og-image.png",
          "@id": "https://interopdigital.com",
          url: "https://interopdigital.com",
          telephone: "++234-906-053-1418",
          email: "info@interopdigitalsolutions.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Trinity Mall, 79, Awolowo Way",
            addressLocality: "Ikeja",
            addressRegion: "Lagos",
            postalCode: "100001",
            addressCountry: "NG"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 6.5244,
            longitude: 3.3792
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00"
            }
          ],
          sameAs: [
            "https://linkedin.com/company/interop-digital",
            "https://twitter.com/interopdigital"
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "17"
          },
          ...data,
        };

      case "WebSite":
        return {
          "@context": baseContext,
          "@type": "WebSite",
          name: "Interop Digital Solutions Ltd",
          alternateName: "Interop Digital",
          url: "https://interopdigital.com",
          description: "Leading IT firm specializing in software development, cloud services, cybersecurity, and digital transformation solutions.",
          publisher: {
            "@type": "Organization",
            name: "Interop Digital Solutions Ltd",
            logo: {
              "@type": "ImageObject",
              url: "https://interopdigital.com/images/logo-white.png"
            }
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://interopdigital.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string",
          },
          ...data,
        };

      case "Service":
        return {
          "@context": baseContext,
          "@type": "Service",
          serviceType: data.serviceType || "IT Services",
          provider: {
            "@type": "Organization",
            name: "Interop Digital Solutions Ltd",
            url: "https://interopdigital.com"
          },
          areaServed: {
            "@type": "Country",
            name: "Worldwide"
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: "https://interopdigital.com/contact",
            servicePhone: "++234-906-053-1418",
            servicePostalAddress: {
              "@type": "PostalAddress",
              streetAddress: "Trinity Mall, 79, Awolowo Way",
              addressLocality: "Ikeja",
              addressRegion: "Lagos",
              addressCountry: "NG"
            }
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "IT Services & Solutions",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "API Development & Integration",
                  description: "Custom RESTful and GraphQL API development with seamless third-party integrations"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "UI/UX Design",
                  description: "User-centered design and interface development for web and mobile applications"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cloud Solutions",
                  description: "AWS, Azure, and GCP cloud migration, deployment, and management services"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cybersecurity",
                  description: "Comprehensive security solutions including threat detection, firewall management, and compliance"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI & Machine Learning",
                  description: "Custom AI models, predictive analytics, and intelligent automation solutions"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Database Management",
                  description: "Database design, optimization, and administration for SQL and NoSQL systems"
                }
              }
            ]
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

      case "Course":
        return {
          "@context": baseContext,
          "@type": "Course",
          name: data.name || "Corporate IT Training",
          description: data.description || "Professional IT training programs for corporate teams",
          provider: {
            "@type": "Organization",
            name: "Interop Digital Solutions Ltd",
            sameAs: "https://interopdigital.com"
          },
          offers: {
            "@type": "Offer",
            category: "Professional Development",
            priceCurrency: "NGN",
            availability: "https://schema.org/InStock"
          },
          hasCourseInstance: data.instances || [],
          educationalLevel: data.level || "Beginner to Advanced",
          coursePrerequisites: data.prerequisites || "None",
          occupationalCredentialAwarded: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Certificate",
            name: data.certificateName || "Professional IT Certificate"
          },
          ...data,
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
