import type { Metadata, Viewport } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingContact from "@/components/FloatingContact";
import { ToastProvider } from "@/components/Toast";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FF6600',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://interopdigital.com'),
  title: {
    default: "Interop Digital Solutions Ltd - Premier IT Services & Solutions",
    template: "%s | Interop Digital Solutions Ltd",
  },
  description: "Interop Digital Solutions Ltd - Premier IT firm in Lagos, Nigeria specializing in API Development, UI/UX Design, Cloud Solutions, Cybersecurity, AI & Machine Learning, and Digital Transformation. Serving 17+ clients across 13 industries with enterprise-grade solutions.",
  keywords: [
    // Core Services
    "IT services Nigeria",
    "software development Lagos",
    "API development services",
    "RESTful API development",
    "GraphQL API",
    "UI/UX design agency",
    "cloud solutions Nigeria",
    "AWS cloud services",
    "Azure cloud solutions",
    "GCP deployment",
    "cybersecurity services",
    "IT security Nigeria",
    "firewall management",
    "Cisco firewall",
    "Fortinet firewall",
    "AI solutions Nigeria",
    "machine learning services",
    "IoT solutions",
    "database management",
    "SQL Server",
    "database optimization",
    // Products
    "process automation",
    "payment gateway integration",
    "e-commerce platform",
    "geo services",
    // Training
    "IT training Nigeria",
    "corporate training",
    "cybersecurity training",
    "Microsoft 365 training",
    "cloud infrastructure training",
    // Industries
    "banking IT solutions",
    "healthcare IT",
    "manufacturing software",
    "retail technology",
    "oil and gas IT",
    // General
    "digital transformation",
    "enterprise solutions",
    "business automation",
    "IT consulting Nigeria",
    "technology solutions Lagos",
    "Ikeja IT company",
    "Nigeria software company",
  ],
  authors: [{ name: "Interop Digital Solutions Ltd" }],
  creator: "Interop Digital Solutions Ltd",
  publisher: "Interop Digital Solutions Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://interopdigital.com",
    siteName: "Interop Digital Solutions Ltd",
    title: "Interop Digital Solutions Ltd - Premier IT Services & Solutions in Nigeria",
    description: "Premier IT firm in Lagos, Nigeria. Expert in API Development, Cloud Solutions, Cybersecurity, AI/ML, and Digital Transformation. Serving 17+ clients across 13 industries with enterprise-grade solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Interop Digital Solutions Ltd - IT Services & Solutions",
      },
    ],
    countryName: "Nigeria",
    emails: ["info@interop.com"],
    phoneNumbers: ["+234-809-945-1647"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interop Digital Solutions Ltd - Premier IT Services & Solutions",
    description: "Premier IT firm in Lagos, Nigeria. API Development, Cloud Solutions, Cybersecurity, AI/ML & Digital Transformation. 17+ clients across 13 industries.",
    creator: "@interopdigital",
    site: "@interopdigital",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://interopdigital.com",
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* SEO-visible Developer Credit - Not visible to users, but indexed by search engines */}
        <meta name="developer" content="Harzotech - Premium Web Solutions | WhatsApp: +234-706-971-6822" />
        <meta name="web-developer" content="Harzotech" />
        <meta name="designer" content="Harzotech Digital Agency" />
        <link rel="author" href="https://wa.me/2347069716822" />

        <StructuredData type="Organization" data={{}} />
        <StructuredData type="LocalBusiness" data={{}} />
        <StructuredData type="WebSite" data={{}} />
        <StructuredData type="Service" data={{}} />

        {/* Hidden structured data for developer credit */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "creator": {
                "@type": "Organization",
                "name": "Harzotech",
                "description": "Premium Web Solutions & Digital Innovation",
                "telephone": "+234-706-971-6822",
                "url": "https://wa.me/2347069716822"
              },
              "contributor": {
                "@type": "Organization",
                "name": "Harzotech Digital Agency",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+234-706-971-6822",
                  "contactType": "Technical Support"
                }
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* HTML Comment - Visible in page source but not to users */}
        {/*
          ═══════════════════════════════════════════════════════════
          Website Developed by: HARZOTECH
          Premium Web Solutions & Digital Innovation
          Contact: +234 (0) 706 971 6822
          WhatsApp: https://wa.me/2347069716822

          Specializing in:
          - Custom Website Development
          - E-commerce Solutions
          - Web Applications
          - Mobile-Responsive Design
          - SEO Optimization
          - Digital Strategy

          © 2025 Harzotech. All rights reserved.
          ═══════════════════════════════════════════════════════════
        */}
        <ToastProvider>
          {children}
          <ScrollProgress />
          <FloatingContact />
        </ToastProvider>
      </body>
    </html>
  );
}
