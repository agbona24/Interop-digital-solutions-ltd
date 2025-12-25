"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, BarChart3, Globe, CheckCircle, Rocket, Target, TrendingUp, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProductsPage() {
  const useCasesReveal = useScrollReveal();
  const pricingReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();

  // SEO: Update page title and meta description
  useEffect(() => {
    document.title = "Innovative IT Products | Interop Digital Solutions Ltd";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Cutting-edge IT products including Process Automation, Payment Solutions, Commerce Platforms, and Geo Services. Enterprise-grade solutions built for scale and performance.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Cutting-edge IT products including Process Automation, Payment Solutions, Commerce Platforms, and Geo Services. Enterprise-grade solutions built for scale and performance.';
      document.head.appendChild(meta);
    }
  }, []);

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
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-700 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        {/* Floating Animated Shapes */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <svg className="absolute top-20 right-10 w-16 h-16 text-primary-500/30 animate-float" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-40 left-20 w-20 h-20 text-blue-400/20 animate-float-delayed" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="currentColor" />
          </svg>
          <svg className="absolute top-1/2 right-1/4 w-12 h-12 text-primary-400/40 animate-float" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Enterprise{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
              Products
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Powerful, scalable solutions designed to streamline your operations and drive growth
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all hover:scale-105"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
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
          <div
            ref={useCasesReveal.ref}
            className={`text-center mb-16 scroll-reveal ${useCasesReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
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
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 border border-gray-200 hover-lift scroll-reveal ${useCasesReveal.isVisible ? `revealed animate-fade-in-up stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
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

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={testimonialsReveal.ref}
            className={`text-center mb-16 scroll-reveal ${testimonialsReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
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
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 border border-gray-200 hover-lift scroll-reveal ${testimonialsReveal.isVisible ? `revealed animate-fade-in-up stagger-${index + 1}` : ''}`}
              >
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
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 btn-ripple"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 hover:scale-105"
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
