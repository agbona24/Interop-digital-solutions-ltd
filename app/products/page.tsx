import Navigation from "@/components/Navigation";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Zap, Shield, BarChart3, Globe, CheckCircle, Rocket, Target, TrendingUp, Star } from "lucide-react";

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
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Enterprise{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
              Products
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Powerful, scalable solutions designed to streamline your operations and drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all hover:scale-105"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              View Pricing
            </Link>
          </div>
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

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real-World{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses across industries leverage our products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                industry: "E-commerce",
                title: "Automated Order Processing",
                description: "Reduced order processing time by 70% and eliminated manual errors with intelligent automation workflows.",
                results: ["70% faster processing", "Zero manual errors", "$500K annual savings"]
              },
              {
                icon: Target,
                industry: "FinTech",
                title: "Real-time Payment Gateway",
                description: "Processing 1M+ daily transactions with 99.99% uptime and instant settlement capabilities.",
                results: ["1M+ transactions/day", "99.99% uptime", "<50ms latency"]
              },
              {
                icon: TrendingUp,
                industry: "Logistics",
                title: "Geo-tracking & Route Optimization",
                description: "Optimized delivery routes saving 30% in fuel costs and improving on-time delivery by 45%.",
                results: ["30% fuel savings", "45% better delivery", "Real-time tracking"]
              },
              {
                icon: Shield,
                industry: "Healthcare",
                title: "HIPAA-Compliant Payments",
                description: "Secure payment processing for 100K+ patients with full HIPAA compliance and zero breaches.",
                results: ["100K+ patients", "HIPAA certified", "Zero breaches"]
              },
              {
                icon: Zap,
                industry: "Retail",
                title: "Omnichannel Commerce",
                description: "Unified commerce platform managing 50+ stores with real-time inventory sync across all channels.",
                results: ["50+ store integration", "Real-time sync", "40% sales increase"]
              },
              {
                icon: BarChart3,
                industry: "SaaS",
                title: "Usage Analytics & Billing",
                description: "Automated usage tracking and billing for 10K+ subscribers with customizable pricing tiers.",
                results: ["10K+ subscribers", "Automated billing", "99.5% accuracy"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <useCase.icon className="w-10 h-10 text-primary-500 mb-4" />
                <div className="text-primary-600 font-semibold text-sm mb-2">{useCase.industry}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Flexible{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 30-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$499",
                period: "/month",
                description: "Perfect for small businesses and startups",
                features: [
                  "Up to 10,000 transactions/month",
                  "Standard API access",
                  "Email support (48hr response)",
                  "Basic analytics dashboard",
                  "99.5% uptime SLA",
                  "5GB storage"
                ],
                cta: "Start Free Trial",
                highlighted: false
              },
              {
                name: "Professional",
                price: "$1,499",
                period: "/month",
                description: "For growing businesses with higher volume",
                features: [
                  "Up to 100,000 transactions/month",
                  "Advanced API with webhooks",
                  "Priority support (12hr response)",
                  "Advanced analytics & reporting",
                  "99.9% uptime SLA",
                  "50GB storage",
                  "Custom integrations",
                  "Dedicated account manager"
                ],
                cta: "Start Free Trial",
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "Tailored solutions for large organizations",
                features: [
                  "Unlimited transactions",
                  "Full API access with custom endpoints",
                  "24/7 dedicated support",
                  "Custom analytics & BI tools",
                  "99.99% uptime SLA",
                  "Unlimited storage",
                  "White-label options",
                  "On-premise deployment",
                  "Custom development",
                  "SLA guarantees"
                ],
                cta: "Contact Sales",
                highlighted: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-900 shadow-lg'
                } transition-all duration-300 hover:shadow-2xl relative`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-5xl font-black ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? 'text-orange-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mb-8 ${plan.highlighted ? 'text-orange-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-orange-200' : 'text-primary-500'}`} />
                      <span className={plan.highlighted ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-white text-primary-600 hover:shadow-xl'
                      : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-xl'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our customers say about our products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Interop&apos;s automation platform cut our processing time by 70% and eliminated costly manual errors. The ROI was evident within the first quarter.",
                author: "Sarah Chen",
                role: "CTO, TechCorp E-commerce",
                rating: 5
              },
              {
                quote: "The payment gateway handles our peak loads flawlessly. We&apos;ve processed over 10M transactions with zero downtime. Outstanding reliability.",
                author: "Michael Rodriguez",
                role: "VP Engineering, PayFlow Solutions",
                rating: 5
              },
              {
                quote: "Best commerce platform we&apos;ve used. Real-time inventory sync across 50+ stores and the analytics give us insights we never had before.",
                author: "Emily Thompson",
                role: "Operations Director, RetailMax",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-500 text-primary-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Start your 30-day free trial today. No credit card required. Full access to all features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
