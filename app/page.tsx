"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Link from "next/link";
import { Code2, Package, Users, Mail, Shield, Zap, Award, TrendingUp, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Lazy load heavy components for better performance
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const AnimatedStat = dynamic(() => import("@/components/AnimatedStat"), { ssr: false });
const ClientLogosTicker = dynamic(() => import("@/components/ClientLogosTicker"), { ssr: false });
const IndustriesWeServe = dynamic(() => import("@/components/IndustriesWeServe"), { ssr: false });
const QuizModal = dynamic(() => import("@/components/QuizModal"), { ssr: false });

export default function Home() {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
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
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-700/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={quickLinksReveal.ref}
            className={`text-center mb-16 scroll-reveal ${quickLinksReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 backdrop-blur-lg border border-primary-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-primary-600 text-sm font-semibold">
                Quick Access
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Explore Our{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                  Solutions
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full opacity-30"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we can help transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl border border-gray-100 hover:border-primary-200 hover-lift scroll-reveal relative overflow-hidden ${quickLinksReveal.isVisible ? `revealed animate-fade-in-up stagger-${index + 1}` : ''}`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/0 to-primary-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
                <div className="mt-4 text-primary-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 backdrop-blur-lg border border-primary-500/20 rounded-full mb-6">
              <Package className="w-4 h-4 text-primary-600" />
              <span className="text-primary-600 text-sm font-semibold">
                Core Products
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                  Flagship Solutions
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full opacity-30"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade products designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Process Automation Platform */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                Process Automation Platform
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Intelligent automation solution that streamlines workflows, reduces manual tasks, and increases operational efficiency. Automate repetitive processes and free your team to focus on high-value work.
              </p>
              <ul className="space-y-3 mb-6">
                {["Visual Workflow Builder", "API & System Integration", "Real-time Monitoring", "Custom Rule Engine"].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/products"
                className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Payment Gateway Solution */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl mb-6">💳</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                Payment Gateway Solution
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Secure, PCI-DSS compliant payment processing supporting multiple payment methods. Process transactions globally with instant settlement, fraud detection, and comprehensive reporting.
              </p>
              <ul className="space-y-3 mb-6">
                {["Multi-Currency Support", "Fraud Detection & Prevention", "Instant Settlement", "Comprehensive Analytics"].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/products"
                className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Commerce Platform */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl mb-6">🛒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                Commerce Platform
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Full-featured e-commerce solution with inventory management, order processing, and omnichannel capabilities. Build, scale, and optimize your online store with enterprise-grade features.
              </p>
              <ul className="space-y-3 mb-6">
                {["Multi-channel Sales", "Real-time Inventory Sync", "Advanced Analytics", "Mobile-Optimized"].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/products"
                className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Geo Services Platform */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl mb-6">🗺️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                Geo Services Platform
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Location intelligence and mapping services with real-time tracking, route optimization, and geofencing. Power your logistics, delivery, and location-based applications with accurate geo data.
              </p>
              <ul className="space-y-3 mb-6">
                {["Real-time GPS Tracking", "Route Optimization", "Geofencing & Alerts", "Location Analytics"].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/products"
                className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image with Blue Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/hero2.jpg')] bg-cover bg-center bg-fixed"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/95 via-secondary-800/90 to-secondary-900/95"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-morph"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-morph animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl animate-ping-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={whyChooseReveal.ref}
            className={`text-center mb-16 scroll-reveal ${whyChooseReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary-400" />
              <span className="text-white text-sm font-semibold">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Why Industry Leaders{" "}
              <span className="text-primary-400">Choose Us</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
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
                description: "10+ happy clients with consistent satisfaction and long-term partnerships"
              },
              {
                icon: TrendingUp,
                title: "Scalable Growth",
                description: "Cloud-native architecture that grows with your business from startup to enterprise scale"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift scroll-reveal hover:scale-105 ${whyChooseReveal.isVisible ? `revealed animate-scale-in stagger-${index + 1}` : ''}`}
              >
                <div className="w-12 h-12 bg-primary-400/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-400/30 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{feature.title}</h3>
                <p className="text-blue-100 text-sm group-hover:text-white transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/3 to-orange-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={servicesReveal.ref}
            className={`text-center mb-16 scroll-reveal ${servicesReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 backdrop-blur-lg border border-primary-500/20 rounded-full mb-6">
              <Code2 className="w-4 h-4 text-primary-600" />
              <span className="text-primary-600 text-sm font-semibold">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Comprehensive IT{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                  Services
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full opacity-30"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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
                className={`group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-reveal relative overflow-hidden ${servicesReveal.isVisible ? `revealed animate-fade-in-up stagger-${index + 1}` : ''}`}
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/0 to-primary-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{service.title}</h3>
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
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105 btn-ripple relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">View All Services</span>
              <ArrowRight className="relative ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Success Stats */}
      <section className="py-24 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Delivering Excellence Across Industries
            </h2>
            <p className="text-xl text-orange-100">
              Building lasting partnerships through innovative IT solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Happy Clients", description: "Trusted partnerships" },
              { value: "8+", label: "Expert Team", description: "Skilled professionals" },
              { value: "24/7", label: "Support Available", description: "Always here for you" },
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={ctaReveal.ref}
            className={`rounded-3xl p-12 md:p-16 relative overflow-hidden scroll-reveal ${ctaReveal.isVisible ? 'revealed animate-scale-in' : ''}`}
          >
            {/* Background Image with Blue Gradient */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/hero2.jpg')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/95 via-secondary-800/90 to-secondary-900/95"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            </div>

            {/* Animated Orbs */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-500/20 rounded-full blur-3xl animate-morph"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary-500/20 rounded-full blur-3xl animate-morph animation-delay-2000"></div>
            <div className="relative z-10">
              <Sparkles className="w-16 h-16 text-primary-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies leveraging our expertise to build the future. Let&apos;s discuss your project today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsQuizModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 btn-ripple"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
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

      {/* Quiz Modal */}
      <QuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
      />

      <Footer />
    </main>
  );
}
