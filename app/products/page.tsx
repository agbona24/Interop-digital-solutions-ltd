import Navigation from "@/components/Navigation";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Zap, Shield, BarChart3, Globe } from "lucide-react";

export const metadata = {
  title: "Our Products - Interop Digital Solutions",
  description: "Innovative products including Process Automation, Payment Solutions, Commerce Platform, and Geo Services.",
};

export default function ProductsPage() {
  const capabilities = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Built for speed and scalability to handle millions of transactions",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with industry standards",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and reporting for data-driven decisions",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Multi-region deployment with 99.9% uptime guarantee",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-800 via-secondary-700 to-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Enterprise{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
              Products
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful, scalable solutions designed to streamline your operations and drive growth
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all hover:scale-105"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Products Grid */}
      <Products />

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every product is engineered with enterprise-grade capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Seamless{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                  Integration
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our products integrate effortlessly with your existing tech stack through robust APIs and webhooks.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  RESTful API with comprehensive documentation
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Webhook support for real-time events
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  SDKs for popular programming languages
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Pre-built integrations with major platforms
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
              >
                View API Documentation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-secondary-700 to-secondary-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Start Your Free Trial</h3>
              <p className="text-lg mb-8 text-gray-100">
                Experience the power of our products with a 30-day free trial. No credit card required.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-primary-400" />
                  Full access to all features
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-primary-400" />
                  Dedicated onboarding support
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-primary-400" />
                  Cancel anytime, no commitments
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary-700 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Get Started Free
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
