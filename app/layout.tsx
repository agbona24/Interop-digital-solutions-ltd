import type { Metadata, Viewport } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import { ToastProvider } from "@/components/Toast";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f97316',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://interopdigital.com'),
  title: {
    default: "Interop Digital Solutions - Premier IT Services & Solutions",
    template: "%s | Interop Digital Solutions",
  },
  description: "Leading IT firm specializing in API, UI, Testing, Deployment, Identity & Security, Database, AI, IoT, and Cloud solutions. Offering Process Automation, Payments, Commerce, and Geo products.",
  keywords: [
    "IT services",
    "software development",
    "cloud solutions",
    "API development",
    "UI/UX design",
    "cybersecurity",
    "AI solutions",
    "IoT",
    "database management",
    "process automation",
    "digital transformation",
    "enterprise solutions",
  ],
  authors: [{ name: "Interop Digital Solutions" }],
  creator: "Interop Digital Solutions",
  publisher: "Interop Digital Solutions",
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
    siteName: "Interop Digital Solutions",
    title: "Interop Digital Solutions - Premier IT Services & Solutions",
    description: "Leading IT firm specializing in cutting-edge technology solutions including software development, cloud services, and digital transformation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Interop Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interop Digital Solutions - Premier IT Services & Solutions",
    description: "Leading IT firm specializing in cutting-edge technology solutions",
    creator: "@interopdigital",
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
        <StructuredData type="Organization" data={{}} />
        <StructuredData type="WebSite" data={{}} />
      </head>
      <body className="font-sans antialiased">
        <ToastProvider>
          {children}
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
