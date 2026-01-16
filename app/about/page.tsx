"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import TeamProfiles from "@/components/TeamProfiles";
import ClientLogosTicker from "@/components/ClientLogosTicker";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CareersModal = dynamic(() => import("@/components/CareersModal"), { ssr: false });

export default function AboutPage() {
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);
  const timelineReveal = useScrollReveal();

  // SEO: Update page title and meta description
  useEffect(() => {
    document.title = "About Us | Interop Digital Solutions Ltd";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Interop Digital Solutions Ltd - Premier IT firm in Lagos, Nigeria. 15+ years of digital transformation experience. Serving 17+ clients across 13 industries with expert teams and innovative solutions.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about Interop Digital Solutions Ltd - Premier IT firm in Lagos, Nigeria. 15+ years of digital transformation experience. Serving 17+ clients across 13 industries with expert teams and innovative solutions.';
      document.head.appendChild(meta);
    }
  }, []);

  const timeline = [
    {
      year: "2008",
      title: "Founded",
      description: "Started with a vision to transform businesses through technology",
    },
    {
      year: "2012",
      title: "Expansion",
      description: "Grew to 20+ team members and opened second office",
    },
    {
      year: "2016",
      title: "Innovation",
      description: "Launched our flagship automation platform",
    },
    {
      year: "2020",
      title: "Global Reach",
      description: "Expanded services to 25+ countries worldwide",
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Leading the charge in AI-powered solutions",
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
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">
              Interop Digital
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            We&apos;re on a mission to empower businesses with transformative technology solutions
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold">98% Clients Satisfaction</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold">5+ Team Members</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold">24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <About />

      {/* Our Journey Timeline */}
      <section className="hidden py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={timelineReveal.ref}
            className={`text-center mb-16 scroll-reveal ${timelineReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15+ years of innovation and growth
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-600"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 scroll-reveal ${timelineReveal.isVisible ? `revealed ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'} stagger-${Math.min(index + 1, 6)}` : ''} ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift inline-block">
                      <div className="text-4xl font-black text-primary-500 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-8 h-8 rounded-full bg-primary-500 border-4 border-white shadow-lg relative z-10"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <TeamProfiles />

      {/* Client Logos */}
      <ClientLogosTicker />

      {/* Join Us CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary-700 to-secondary-600 rounded-3xl p-12 md:p-16 text-center text-white">
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-primary-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              We&apos;re always looking for talented individuals who are passionate about technology and innovation.
            </p>
            <button
              onClick={() => setIsCareersModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary-700 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Careers Modal */}
      <CareersModal
        isOpen={isCareersModalOpen}
        onClose={() => setIsCareersModalOpen(false)}
      />

      <Footer />
    </main>
  );
}
