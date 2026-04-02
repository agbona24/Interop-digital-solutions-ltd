import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Shield,
  QrCode,
  Workflow,
  Activity,
  Clock3,
  Server,
  AlertTriangle,
  FileText,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SAP e-Invoicing Add-On (NRS MBS Integration)",
  description:
    "SAP Business One e-Invoicing add-on with real-time QR code generation, NRS MBS API integration, compliance controls, monitoring, and SLA-backed support.",
  alternates: {
    canonical: "/services/sap-e-invoicing",
  },
};

const serviceHighlights = [
  "Real-time QR code generation using standardized data structures",
  "Secure cryptographic methods aligned with digital invoicing regulations",
  "Direct extraction from SAP core invoice data",
  "Embedded rules engine for mandatory field validation",
  "NRS MBS-compliant payload formatting",
  "Automated submission, status retrieval, and error handling",
  "RESTful API integration with encrypted data exchange",
  "Transaction monitoring, logs, and integration performance visibility",
];

const incidentRows = [
  {
    priority: "P1 - Critical",
    impact: "Service outage, failed submissions, compliance risk",
    response: "Immediate",
    resolution: "Continuous effort until restored",
  },
  {
    priority: "P2 - High",
    impact: "Major degradation with business impact",
    response: "Within business hours (expedited)",
    resolution: "Target same day or next business day",
  },
  {
    priority: "P3 - Medium",
    impact: "Partial functionality issues or recurring warnings",
    response: "Within 1 business day",
    resolution: "Planned fix in agreed maintenance window",
  },
  {
    priority: "P4 - Low",
    impact: "Minor defects, cosmetic, or enhancement requests",
    response: "Within 2 business days",
    resolution: "Scheduled release cycle",
  },
];

const slaSections = [
  {
    title: "1. Introduction",
    body: "This Service Level Agreement (SLA) defines the service commitments, performance standards, and support obligations for the SAP e-Invoicing Add-On, which enables real-time QR code generation and integration with the NRS MBS platform.",
  },
  {
    title: "2. Scope of Services",
    body: "Covers operation and maintenance of the add-on, real-time QR code generation, NRS MBS API integration, error handling, monitoring, technical support, and updates.",
  },
  {
    title: "3. Service Availability",
    body: "System availability target is 99.5% per calendar month. Maintenance windows require 48-hour notice. Critical failures trigger immediate recovery actions.",
  },
  {
    title: "4. Incident Classification and Response Times",
    body: "Incidents are prioritized as P1, P2, P3, and P4 with defined response and resolution expectations.",
  },
  {
    title: "5. Support Services",
    body: "Support channels include email, ticketing, or phone depending on plan. Standard support window is Monday to Friday, 09:00-17:00. Optional 24/7 support is available for P1 incidents.",
  },
  {
    title: "6. Updates and Enhancements",
    body: "Includes patches, regulatory updates, performance improvements, and security updates within planned maintenance windows unless urgent.",
  },
  {
    title: "7. Customer Responsibilities",
    body: "Customers must maintain a stable SAP environment, ensure network connectivity, provide accurate configuration, apply SAP notes, and report issues with relevant logs.",
  },
  {
    title: "8. Data Security and Compliance",
    body: "All exchanged data with NRS MBS uses encrypted channels. The service follows industry-standard security practices and applicable regulatory requirements.",
  },
  {
    title: "9. Performance Metrics",
    body: "QR code generation target is under 1 second. API submissions are real-time or near real-time subject to NRS MBS availability. Errors are logged immediately.",
  },
  {
    title: "10. Termination",
    body: "Either party may terminate with 30 days written notice. Contractual obligations and payments remain enforceable.",
  },
  {
    title: "11. Review and Amendments",
    body: "The SLA may be reviewed annually or when regulations change. Amendments are communicated in writing.",
  },
];

export default function SapEInvoicingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-orange-500 to-amber-500" />
        <div className="absolute inset-0 bg-[url('/images/hero1.jpg')] bg-cover bg-center mix-blend-overlay opacity-25" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-6">
              <QrCode className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Service Offering</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              SAP e-Invoicing Add-On
              <span className="block text-yellow-100">NRS MBS Integration</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              A reliable and scalable framework for real-time e-Invoicing automation,
              seamless SAP Business One integration, and compliant interoperability with
              the NRS MBS platform.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full border border-white/30 text-white font-semibold text-sm">
                99.5% Monthly Availability
              </div>
              <div className="bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full border border-white/30 text-white font-semibold text-sm">
                &lt;1s QR Generation Target
              </div>
              <div className="bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full border border-white/30 text-white font-semibold text-sm">
                Secure REST API Exchange
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 md:p-6 mb-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-3">Quick Navigation</p>
            <div className="flex flex-wrap gap-3">
              <a href="#service-description" className="px-4 py-2 rounded-full bg-white border border-primary-200 text-sm font-medium text-primary-700 hover:bg-primary-100 transition-colors">Service Description</a>
              <a href="#operations-framework" className="px-4 py-2 rounded-full bg-white border border-primary-200 text-sm font-medium text-primary-700 hover:bg-primary-100 transition-colors">Operations and Support</a>
              <a href="#sla" className="px-4 py-2 rounded-full bg-white border border-primary-200 text-sm font-medium text-primary-700 hover:bg-primary-100 transition-colors">SLA Terms</a>
              <a href="#incident-matrix" className="px-4 py-2 rounded-full bg-white border border-primary-200 text-sm font-medium text-primary-700 hover:bg-primary-100 transition-colors">Incident Matrix</a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div id="service-description">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Service Description
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our SAP add-on for e-Invoicing integrates seamlessly with SAP Business One.
                It generates QR codes in real-time using standardized data structures and
                secure cryptographic methods to support compliance with current invoicing
                regulations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The solution extracts invoice data from core SAP modules, validates mandatory
                fields through an embedded rules engine, and formats payloads according to
                NRS MBS specifications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It supports automated submission, status retrieval, and structured error
                handling, while offering monitoring tools for processing visibility,
                transaction traceability, and integration performance tracking.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h3>
              <div className="space-y-3">
                {serviceHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="operations-framework" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Operations and Support Framework</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Built for compliance-sensitive operations with clear service commitments and
              measurable performance expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <Shield className="w-8 h-8 text-primary-500 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600 text-sm">Encrypted channel communication and standards-based compliance controls.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <Workflow className="w-8 h-8 text-primary-500 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Workflow Automation</h3>
              <p className="text-gray-600 text-sm">Submission, status polling, and error handling managed end-to-end.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <Activity className="w-8 h-8 text-primary-500 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-gray-600 text-sm">Operational visibility through transaction logs and integration health metrics.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <Clock3 className="w-8 h-8 text-primary-500 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Availability</h3>
              <p className="text-gray-600 text-sm">SLA-backed 99.5% monthly availability with planned maintenance notices.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sla" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Server className="w-7 h-7 text-primary-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Service Level Agreement (SLA)
            </h2>
            <Link
              href="/services/sap-e-invoicing/sla-print"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-100 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Download or Print SLA
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">Availability</p>
              <p className="text-2xl font-black text-gray-900">99.5%</p>
              <p className="text-sm text-gray-600 mt-1">Per calendar month</p>
            </div>
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">QR Generation</p>
              <p className="text-2xl font-black text-gray-900">&lt; 1 second</p>
              <p className="text-sm text-gray-600 mt-1">Target performance metric</p>
            </div>
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">Termination Notice</p>
              <p className="text-2xl font-black text-gray-900">30 days</p>
              <p className="text-sm text-gray-600 mt-1">Written notice by either party</p>
            </div>
          </div>

          <div className="grid gap-5 mb-12">
            {slaSections.map((section) => (
              <article key={section.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-700 leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>

          <div id="incident-matrix" className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 bg-primary-50 border-b border-gray-200 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-bold text-gray-900">Incident Classification and Response Matrix</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="text-left font-semibold px-6 py-4">Priority</th>
                    <th className="text-left font-semibold px-6 py-4">Typical Impact</th>
                    <th className="text-left font-semibold px-6 py-4">Response Time</th>
                    <th className="text-left font-semibold px-6 py-4">Resolution Expectation</th>
                  </tr>
                </thead>
                <tbody>
                  {incidentRows.map((row) => (
                    <tr key={row.priority} className="border-t border-gray-200">
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.priority}</td>
                      <td className="px-6 py-4 text-gray-700">{row.impact}</td>
                      <td className="px-6 py-4 text-gray-700">{row.response}</td>
                      <td className="px-6 py-4 text-gray-700">{row.resolution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 md:p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Need This Integrated in Your SAP Landscape?</h3>
            <p className="text-primary-50 max-w-3xl mb-6">
              We can assess your current setup, align the configuration to your invoicing
              requirements, and deploy a compliant integration path with NRS MBS.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary-600 px-7 py-3 font-semibold hover:bg-primary-50 transition-colors"
            >
              Request Implementation Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
