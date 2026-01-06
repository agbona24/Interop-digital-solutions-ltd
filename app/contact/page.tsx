"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AppointmentBooking from "@/components/AppointmentBooking";
import Image from "next/image";
import { Clock, HelpCircle, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactPage() {
  const faqReveal = useScrollReveal();

  // SEO: Update page title and meta description
  useEffect(() => {
    document.title = "Contact Us | Interop Digital Solutions Ltd";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Interop Digital Solutions Ltd. Located at Trinity Mall, Ikeja, Lagos. Call +234-809-945-1647 or email info@interopdigitalsolutions.com. Book a consultation today.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Get in touch with Interop Digital Solutions Ltd. Located at Trinity Mall, Ikeja, Lagos. Call +234-809-945-1647 or email info@interopdigitalsolutions.com. Book a consultation today.';
      document.head.appendChild(meta);
    }
  }, []);

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope, but most projects range from 4-12 weeks from kickoff to deployment.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! We provide 24/7 support and maintenance packages for all our solutions.",
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integrating with existing tech stacks and legacy systems.",
    },
    {
      question: "What industries do you serve?",
      answer: "We work across all industries including finance, healthcare, e-commerce, logistics, and more.",
    },
  ];

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
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
            Let&apos;s{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">
              Connect
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Have a project in mind? We&apos;d love to hear from you. Reach out and let&apos;s build something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold">24/7 Support</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold">Quick Response</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold">Free Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />

      {/* Business Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Business Hours</h2>
                <p className="text-gray-600">We&apos;re here to help</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-600">9:00 AM - 6:00 PM PST</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600">24/7 Available</p>
                <p className="text-gray-600">For existing clients</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600">Within 24 hours</p>
                <p className="text-gray-600">Usually much faster</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-10 h-10 text-primary-500" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Book a{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                  Consultation
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a free consultation with our experts to discuss your project
            </p>
          </div>
          <AppointmentBooking />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={faqReveal.ref}
            className={`text-center mb-16 scroll-reveal ${faqReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-10 h-10 text-primary-500" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Frequently Asked{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                  Questions
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all hover-lift scroll-reveal ${faqReveal.isVisible ? `revealed animate-fade-in-up stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
