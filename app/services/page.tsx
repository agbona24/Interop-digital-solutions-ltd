"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Users, Clock, DollarSign, Layers, Code, Database, Cloud, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ServicesPage() {
  const processReveal = useScrollReveal();
  const engagementReveal = useScrollReveal();
  const techReveal = useScrollReveal();
  const storiesReveal = useScrollReveal();
  const faqReveal = useScrollReveal();
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

  // SEO: Update page title and meta description
  useEffect(() => {
    document.title = "Professional IT Services | Interop Digital Solutions Ltd";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive IT services including API Development, UI/UX Design, Cloud Solutions, Cybersecurity, AI/ML, Database Management, and more. 10+ projects delivered across 13 industries.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Comprehensive IT services including API Development, UI/UX Design, Cloud Solutions, Cybersecurity, AI/ML, Database Management, and more. 10+ projects delivered across 13 industries.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Vibrant Orange Gradient with Background Image */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/hero1.jpg')] bg-cover bg-center"></div>
          {/* Vibrant Orange Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 via-orange-500/85 to-amber-500/90"></div>
        </div>

        {/* Animated Background - Brighter */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yellow-300/25 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-orange-300/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-transparent rounded-full blur-3xl animate-ping-slow"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>

        {/* Floating Animated Shapes & Vectors */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {/* Geometric Shapes */}
          <svg className="absolute top-20 left-10 w-16 h-16 text-white/30 animate-float" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
          <svg className="absolute top-32 right-20 w-20 h-20 text-yellow-300/25 animate-float-delayed" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-32 left-1/4 w-12 h-12 text-white/35 animate-float" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" />
          </svg>
          {/* Star Shape */}
          <svg className="absolute top-1/2 right-16 w-14 h-14 text-yellow-200/20 animate-spin-slow" viewBox="0 0 100 100">
            <polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" fill="currentColor" />
          </svg>
          {/* Hexagon */}
          <svg className="absolute bottom-20 right-1/4 w-16 h-16 text-white/20 animate-float" viewBox="0 0 100 100">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="currentColor" />
          </svg>
          {/* Plus Sign */}
          <svg className="absolute top-24 left-1/3 w-10 h-10 text-yellow-300/30 animate-pulse" viewBox="0 0 100 100">
            <rect x="40" y="10" width="20" height="80" fill="currentColor" />
            <rect x="10" y="40" width="80" height="20" fill="currentColor" />
          </svg>
          {/* Dotted Circle */}
          <svg className="absolute bottom-40 left-16 w-24 h-24 text-white/15 animate-spin-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          </svg>
          {/* Diamond */}
          <svg className="absolute top-16 right-1/3 w-12 h-12 text-orange-200/25 animate-bounce-slow" viewBox="0 0 100 100">
            <polygon points="50,5 95,50 50,95 5,50" fill="currentColor" />
          </svg>
          {/* Animated Lines */}
          <svg className="absolute top-1/3 left-8 w-32 h-2 text-white/20" viewBox="0 0 100 10">
            <rect x="0" y="0" width="100" height="10" fill="currentColor" rx="5">
              <animate attributeName="width" values="20;100;20" dur="3s" repeatCount="indefinite" />
            </rect>
          </svg>
          <svg className="absolute bottom-1/3 right-8 w-32 h-2 text-yellow-300/20" viewBox="0 0 100 10">
            <rect x="0" y="0" width="100" height="10" fill="currentColor" rx="5">
              <animate attributeName="width" values="100;20;100" dur="3s" repeatCount="indefinite" />
            </rect>
          </svg>
          {/* Code Bracket */}
          <svg className="absolute bottom-24 left-1/3 w-14 h-14 text-white/25 animate-float-delayed" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
            <path d="M35 20 L15 50 L35 80" />
            <path d="M65 20 L85 50 L65 80" />
          </svg>
          {/* Floating Rings */}
          <svg className="absolute top-40 left-20 w-20 h-20 text-orange-300/15 animate-ping-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
            Professional IT{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">
              Services
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            End-to-end technology solutions designed to accelerate your digital transformation journey
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold">12 Core Services</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold">10+ Projects</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Services />

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={processReveal.ref}
            className={`text-center mb-16 scroll-reveal ${processReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
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
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover-lift scroll-reveal ${processReveal.isVisible ? `revealed animate-fade-in-up stagger-${index + 1}` : ''}`}
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
                  "Proven track record with 10+ successful projects",
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

      {/* Technologies We Use */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={techReveal.ref}
            className={`text-center mb-8 scroll-reveal ${techReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cutting-Edge{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest tools and frameworks to build robust, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Development",
                stack: ["ASP.NET CORE", "C#", "React", "React Native", "Next.js", "Typescript"]
              },
              {
                icon: Database,
                title: "Databases",
                stack: ["Microsoft SQL Server", "Qdrant", "Redis", "MangoDB", "PostgreSQL"]
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                stack: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Terraform", "GitOps"]
              },
              {
                icon: Shield,
                title: "Security",
                stack: ["OAuth 2.0 & JWT", "SSL/TLS", "Penetration Testing", "GDPR Compliance", "Zero Trust"]
              }
            ].map((category, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-6 border border-gray-200 hover-lift scroll-reveal ${techReveal.isVisible ? `revealed animate-scale-in stagger-${index + 1}` : ''}`}
              >
                <category.icon className="w-10 h-10 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.stack.map((tech, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-8 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={faqReveal.ref}
            className={`text-center mb-6 scroll-reveal ${faqReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, medium projects 2-4 months, and large enterprise solutions 6+ months. We provide detailed timelines during the discovery phase and use Agile methodology to deliver incremental value."
              },
              {
                question: "Do you provide ongoing support after project delivery?",
                answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, bug fixes, security updates, and feature enhancements. We also provide SLA-backed maintenance plans tailored to your needs."
              },
              {
                question: "Can you integrate with our existing systems?",
                answer: "Absolutely. We specialize in system integration and have experience with 500+ third-party platforms. We ensure seamless data flow between your existing infrastructure and new solutions through APIs, webhooks, and custom connectors."
              },
              {
                question: "What industries do you serve?",
                answer: "We serve diverse industries including e-commerce, healthcare, fintech, logistics, education, and manufacturing. Our cross-industry experience allows us to bring best practices and innovative solutions to every project."
              },
              {
                question: "How do you ensure project security and data privacy?",
                answer: "Security is paramount. We follow industry best practices including encryption, secure authentication, regular security audits, and compliance with GDPR, HIPAA, and PCI-DSS standards. All team members sign NDAs and we implement role-based access control."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 border border-gray-200 hover-lift scroll-reveal ${faqReveal.isVisible ? `revealed animate-fade-in-up stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
