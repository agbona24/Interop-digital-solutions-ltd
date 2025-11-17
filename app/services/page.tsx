import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Our Services - Interop Digital Solutions",
  description: "Comprehensive IT services including API Development, UI/UX Design, Testing, Deployment, Security, Database, AI, IoT, and Cloud solutions.",
};

export default function ServicesPage() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your needs and create a strategic roadmap",
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our experts build your solution with best practices",
    },
    {
      number: "03",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures reliability and performance",
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Smooth launch with ongoing maintenance and updates",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-800 via-secondary-700 to-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Professional IT{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end technology solutions designed to accelerate your digital transformation journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Services />

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-6xl font-black text-primary-500/10 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                  Our Services
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>

              <div className="space-y-4">
                {[
                  "Expert team with 15+ years of experience",
                  "Proven track record with 500+ successful projects",
                  "Agile methodology for faster delivery",
                  "24/7 support and maintenance",
                  "Scalable solutions that grow with your business",
                  "Competitive pricing with transparent estimates",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-lg mb-8 text-primary-50">
                Let&apos;s discuss how our services can help transform your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
