"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AnimatedStat from "@/components/AnimatedStat";
import ClientLogosTicker from "@/components/ClientLogosTicker";
import Link from "next/link";
import { Code2, Package, Users, Mail, Shield, Zap, Award, TrendingUp, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const quickLinksReveal = useScrollReveal();
  const whyChooseReveal = useScrollReveal();
  const servicesReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  const quickLinks = [
    {
      icon: Code2,
      title: "Our Services",
      description: "Explore our comprehensive IT solutions",
      href: "/services",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Package,
      title: "Our Products",
      description: "Discover our innovative product offerings",
      href: "/products",
      color: "from-secondary-700 to-secondary-600",
    },
    {
      icon: Users,
      title: "About Us",
      description: "Learn about our team and mission",
      href: "/about",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Mail,
      title: "Contact",
      description: "Get in touch with our team",
      href: "/contact",
      color: "from-secondary-700 to-secondary-600",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />

      {/* Quick Links Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={quickLinksReveal.ref}
            className={`text-center mb-16 scroll-reveal ${quickLinksReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we can help transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift scroll-reveal ${quickLinksReveal.isVisible ? `revealed animate-fade-in-up stagger-${index + 1}` : ''}`}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {link.title}
                </h3>
                <p className="text-gray-600">{link.description}</p>
                <div className="mt-4 text-primary-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={whyChooseReveal.ref}
            className={`text-center mb-16 scroll-reveal ${whyChooseReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Industry Leaders Choose Us
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We deliver exceptional results through innovation, expertise, and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security protocols protect your data with 256-bit encryption and compliance certifications"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized infrastructure delivers 99.99% uptime and sub-100ms response times globally"
              },
              {
                icon: Award,
                title: "Proven Excellence",
                description: "15+ years serving Fortune 500 companies with 98% client retention and satisfaction rates"
              },
              {
                icon: TrendingUp,
                title: "Scalable Growth",
                description: "Cloud-native architecture that grows with your business from startup to enterprise scale"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift scroll-reveal ${whyChooseReveal.isVisible ? `revealed animate-scale-in stagger-${index + 1}` : ''}`}
              >
                <feature.icon className="w-12 h-12 text-primary-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={servicesReveal.ref}
            className={`text-center mb-16 scroll-reveal ${servicesReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive IT{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions powered by cutting-edge technology and delivered by expert teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "API Development & Integration",
                description: "Build robust, scalable APIs with RESTful and GraphQL architectures. Seamless third-party integrations with 500+ platforms.",
                features: ["Microservices Architecture", "Real-time Data Sync", "API Gateway Management"]
              },
              {
                title: "Cloud Infrastructure",
                description: "Deploy on AWS, Azure, or GCP with automated DevOps pipelines. Container orchestration with Kubernetes.",
                features: ["Multi-cloud Deployment", "Auto-scaling", "Disaster Recovery"]
              },
              {
                title: "AI & Machine Learning",
                description: "Leverage advanced AI models for predictive analytics, natural language processing, and computer vision.",
                features: ["Custom ML Models", "Neural Networks", "Data Analytics"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 border border-gray-200 hover-lift scroll-reveal ${servicesReveal.isVisible ? `revealed animate-fade-in-up stagger-${index + 1}` : ''}`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`text-center scroll-reveal ${servicesReveal.isVisible ? 'revealed animate-fade-in-up stagger-4' : ''}`}>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 btn-ripple"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Success Stats */}
      <section className="py-24 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Global Enterprises
            </h2>
            <p className="text-xl text-orange-100">
              Delivering measurable results that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Delivered", description: "Across 40+ industries" },
              { value: "200+", label: "Enterprise Clients", description: "Including Fortune 500" },
              { value: "15+", label: "Years Experience", description: "Industry leadership" },
              { value: "98%", label: "Client Retention", description: "Satisfaction guaranteed" }
            ].map((stat, index) => (
              <AnimatedStat
                key={index}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogosTicker />

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={ctaReveal.ref}
            className={`bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-700 rounded-3xl p-12 md:p-16 relative overflow-hidden scroll-reveal ${ctaReveal.isVisible ? 'revealed animate-scale-in' : ''}`}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative z-10">
              <Sparkles className="w-16 h-16 text-primary-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies leveraging our expertise to build the future. Let&apos;s discuss your project today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 btn-ripple"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-700 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
