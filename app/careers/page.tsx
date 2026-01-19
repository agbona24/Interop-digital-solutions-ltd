"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ChevronRight,
  Briefcase,
  Users,
  Rocket,
  Heart,
  Globe,
  Coffee,
  GraduationCap,
  Sparkles
} from "lucide-react";

// Dynamic imports to avoid hydration issues
const Navigation = dynamic(() => import("@/components/Navigation"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const CareersModal = dynamic(() => import("@/components/CareersModal"), { ssr: false });

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Clear career paths with mentorship and continuous learning opportunities"
    },
    {
      icon: Users,
      title: "Amazing Team",
      description: "Work with talented professionals who are passionate about technology"
    },
    {
      icon: Globe,
      title: "Remote Friendly",
      description: "Flexible work arrangements with hybrid and remote options available"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "We value your well-being with flexible hours and generous time off"
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Annual budget for courses, certifications, and conferences"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance and wellness programs"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section with Background */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMTAyLCAwLCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link
              href="/"
              className="text-gray-500 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-primary-600 font-medium">Careers</span>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              We&apos;re Hiring!
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Your Future With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Interop Digital
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join a team of innovators, problem-solvers, and tech enthusiasts.
              Together, we&apos;re transforming businesses through cutting-edge IT solutions.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 transition-all"
            >
              <Briefcase className="w-5 h-5" />
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join Our Team?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where talented individuals can thrive,
              grow, and make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We&apos;re always looking for talented individuals to join our growing team.
            Check out our open positions and take the next step in your career.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <Briefcase className="w-5 h-5" />
            Apply Now
          </button>
        </div>
      </section>

      <CareersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
}
