"use client";

import {
  Building2,
  Zap,
  HardHat,
  Package,
  Car,
  ShoppingBag,
  Factory,
  Plane,
  Landmark,
  Heart,
  Radio,
  Film,
  Briefcase
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Industry {
  icon: any;
  title: string;
  description: string;
  color: string;
}

const industries: Industry[] = [
  {
    icon: Building2,
    title: "Banking & Financial Services",
    description: "Secure, compliant solutions for modern financial institutions",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Energy, Oil & Gas",
    description: "Robust systems for energy sector operations and management",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: HardHat,
    title: "Engineering & Construction",
    description: "Project management and infrastructure solutions",
    color: "from-gray-600 to-gray-700"
  },
  {
    icon: Package,
    title: "Distribution & Wholesale",
    description: "Supply chain optimization and inventory management",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Car,
    title: "Automotive & Mobility",
    description: "Digital transformation for automotive industries",
    color: "from-red-500 to-red-600"
  },
  {
    icon: ShoppingBag,
    title: "Retail & Consumer Products",
    description: "Omnichannel commerce and customer engagement solutions",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Smart manufacturing and process automation systems",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Plane,
    title: "Aviation & Airlines",
    description: "Aviation management and passenger service solutions",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Landmark,
    title: "Public Sector",
    description: "Government and public service digital transformation",
    color: "from-green-600 to-green-700"
  },
  {
    icon: Heart,
    title: "Health Care",
    description: "HIPAA-compliant healthcare IT solutions",
    color: "from-rose-500 to-rose-600"
  },
  {
    icon: Radio,
    title: "Telecommunication",
    description: "Network infrastructure and telecom solutions",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Film,
    title: "Media",
    description: "Content management and digital media platforms",
    color: "from-violet-500 to-violet-600"
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Business solutions for consulting and service firms",
    color: "from-amber-500 to-amber-600"
  }
];

export default function IndustriesWeServe() {
  const headerReveal = useScrollReveal();
  const industriesReveal = useScrollReveal();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          className={`text-center mb-16 scroll-reveal ${headerReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
              We Serve
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering tailored IT solutions across 13 diverse industries with proven expertise
          </p>
        </div>

        {/* Industries Grid */}
        <div
          ref={industriesReveal.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover-lift scroll-reveal ${industriesReveal.isVisible ? `revealed animate-fade-in-up stagger-${Math.min(index + 1, 6)}` : ''}`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <industry.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-600">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal ${industriesReveal.isVisible ? 'revealed animate-fade-in-up' : ''}`}
        >
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100 text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              13
            </div>
            <div className="text-gray-700 font-semibold">Industries Served</div>
          </div>
          <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 border border-secondary-100 text-center">
            <div className="text-4xl md:text-5xl font-bold text-secondary-600 mb-2">
              17+
            </div>
            <div className="text-gray-700 font-semibold">Industry Leaders Trust Us</div>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100 text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              100%
            </div>
            <div className="text-gray-700 font-semibold">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
