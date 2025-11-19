"use client";

import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AppointmentBooking from "@/components/AppointmentBooking";
import { Clock, HelpCircle, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactPage() {
  const faqReveal = useScrollReveal();
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Let&apos;s{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
              Connect
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you. Reach out and let&apos;s build something amazing together.
          </p>
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
