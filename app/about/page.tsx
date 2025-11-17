import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

export const metadata = {
  title: "About Us - Interop Digital Solutions",
  description: "Learn about Interop Digital Solutions - your strategic partner in digital transformation with 15+ years of experience.",
};

export default function AboutPage() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
              Interop Digital
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We&apos;re on a mission to empower businesses with transformative technology solutions
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <About />

      {/* Our Journey Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all inline-block">
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary-700 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
