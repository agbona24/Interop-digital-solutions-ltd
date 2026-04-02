import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SLA Print View - SAP e-Invoicing Add-On",
  description:
    "Printable Service Level Agreement for the SAP e-Invoicing Add-On (NRS MBS Integration).",
  robots: {
    index: false,
    follow: false,
  },
};

const companyDetails = {
  legalName: "Interop Digital Solutions Ltd",
  email: "info@interopdigitalsolutions.com",
  phone: "+234 (906) 053-1418",
  address: "Trinity Mall, 79, Awolowo Way, Ikeja, Lagos, Nigeria",
};

const slaSections = [
  {
    title: "1. Introduction",
    body: "This Service Level Agreement (SLA) defines the service commitments, performance standards, and support obligations for the SAP e-Invoicing Add-On, which enables real-time QR code generation and integration with the NRS MBS platform.",
  },
  {
    title: "2. Scope of Services",
    body: "This SLA covers operation and maintenance of the add-on, real-time QR code generation, NRS MBS API integration, error handling, monitoring, technical support, and updates.",
  },
  {
    title: "3. Service Availability",
    body: "System availability is 99.5% per calendar month. Maintenance windows require 48-hour notice. Critical failures trigger immediate recovery actions.",
  },
  {
    title: "4. Incident Classification and Response Times",
    body: "Incident priorities include P1-Critical, P2-High, P3-Medium, and P4-Low, each with defined response and resolution expectations.",
  },
  {
    title: "5. Support Services",
    body: "Support is provided via email, ticketing, or phone depending on plan. Standard support is Monday-Friday, 09:00-17:00. Optional 24/7 support is available for P1 incidents.",
  },
  {
    title: "6. Updates and Enhancements",
    body: "Includes patches, regulatory updates, performance improvements, and security updates within scheduled maintenance windows unless urgent.",
  },
  {
    title: "7. Customer Responsibilities",
    body: "Customers must maintain a stable SAP environment, ensure network connectivity, provide accurate configuration, apply SAP notes, and report issues with logs.",
  },
  {
    title: "8. Data Security and Compliance",
    body: "All data exchanged with NRS MBS uses encrypted channels. The provider follows industry-standard security and regulatory compliance.",
  },
  {
    title: "9. Performance Metrics",
    body: "QR code generation target is under 1 second. API submissions are real-time or near real-time depending on NRS MBS availability. Errors are logged immediately.",
  },
  {
    title: "10. Termination",
    body: "Either party may terminate with 30 days written notice. Obligations and payments remain enforceable.",
  },
  {
    title: "11. Review and Amendments",
    body: "The SLA may be reviewed annually or during regulatory changes. Amendments will be communicated in writing.",
  },
];

const incidentRows = [
  {
    priority: "P1 - Critical",
    response: "Immediate",
    resolution: "Continuous effort until service restoration",
  },
  {
    priority: "P2 - High",
    response: "Within business hours (expedited)",
    resolution: "Same day or next business day target",
  },
  {
    priority: "P3 - Medium",
    response: "Within 1 business day",
    resolution: "Planned fix in agreed maintenance window",
  },
  {
    priority: "P4 - Low",
    response: "Within 2 business days",
    resolution: "Scheduled for a future release cycle",
  },
];

export default function SapEInvoicingSlaPrintPage() {
  return (
    <main className="min-h-screen bg-white print:bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 print:py-4">
        <div className="flex items-start justify-between gap-4 border-b border-gray-300 pb-5 print:pb-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
              {companyDetails.legalName}
            </p>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              Service Level Agreement (SLA)
            </h1>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              SAP e-Invoicing Add-On (NRS MBS Integration)
            </p>
            <div className="mt-3 space-y-1 text-xs md:text-sm text-gray-600">
              <p>Email: {companyDetails.email}</p>
              <p>Phone: {companyDetails.phone}</p>
              <p>Address: {companyDetails.address}</p>
            </div>
          </div>
          <p className="print:hidden text-sm text-gray-600 border border-gray-300 rounded-full px-4 py-2">
            Use your browser print menu to save as PDF
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6 mb-8 print:my-4">
          <div className="border border-gray-300 rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Availability</p>
            <p className="text-xl font-black text-gray-900 mt-1">99.5%</p>
            <p className="text-sm text-gray-600">Per calendar month</p>
          </div>
          <div className="border border-gray-300 rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">QR Target</p>
            <p className="text-xl font-black text-gray-900 mt-1">&lt; 1 second</p>
            <p className="text-sm text-gray-600">Generation performance metric</p>
          </div>
          <div className="border border-gray-300 rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Termination Notice</p>
            <p className="text-xl font-black text-gray-900 mt-1">30 days</p>
            <p className="text-sm text-gray-600">Written notice by either party</p>
          </div>
        </div>

        <div className="space-y-4 print:space-y-3">
          {slaSections.map((section) => (
            <article key={section.title} className="border border-gray-300 rounded-xl p-4 print:p-3 break-inside-avoid">
              <h2 className="text-base md:text-lg font-bold text-gray-900">{section.title}</h2>
              <p className="text-gray-700 mt-2 leading-relaxed text-sm md:text-base">{section.body}</p>
            </article>
          ))}
        </div>

        <section className="mt-8 print:mt-5 break-inside-avoid">
          <h2 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            Incident Classification and Response Matrix
          </h2>
          <div className="overflow-x-auto border border-gray-300 rounded-xl">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Priority</th>
                  <th className="text-left px-4 py-3 font-semibold">Response Time</th>
                  <th className="text-left px-4 py-3 font-semibold">Resolution Expectation</th>
                </tr>
              </thead>
              <tbody>
                {incidentRows.map((row) => (
                  <tr key={row.priority} className="border-t border-gray-300">
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.priority}</td>
                    <td className="px-4 py-3 text-gray-700">{row.response}</td>
                    <td className="px-4 py-3 text-gray-700">{row.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="text-xs text-gray-500 mt-8 print:mt-5 border-t border-gray-300 pt-4 space-y-1">
          <p>
            Issued by {companyDetails.legalName} | {companyDetails.email} | {companyDetails.phone}
          </p>
          <p>{companyDetails.address}</p>
          <p>
            Document generated for service communication and operational alignment.
            Final contractual terms remain subject to executed commercial agreements.
          </p>
        </div>
      </section>
    </main>
  );
}
