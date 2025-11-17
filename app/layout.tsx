import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interop Digital Solutions - Premier IT Services & Solutions",
  description: "Leading IT firm specializing in API, UI, Testing, Deployment, Identity & Security, Database, AI, IoT, and Cloud solutions. Offering Process Automation, Payments, Commerce, and Geo products.",
  keywords: "IT services, API development, UI design, Cloud solutions, AI, IoT, Database, Security, Process automation, Payments, Commerce",
  authors: [{ name: "Interop Digital Solutions" }],
  openGraph: {
    title: "Interop Digital Solutions - Premier IT Services & Solutions",
    description: "Leading IT firm specializing in cutting-edge technology solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
