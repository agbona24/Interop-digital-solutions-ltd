"use client";

import { useEffect, useRef, useState } from "react";
import {
  Target,
  Zap,
  Users,
  Award,
  TrendingUp,
  Heart,
} from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We're committed to delivering solutions that create real business value and lasting impact.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Staying ahead of the curve with cutting-edge technologies and forward-thinking approaches.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our success. We build long-term partnerships based on trust and results.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Uncompromising quality standards in every project, from conception to deployment.",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "50+", label: "Expert Team" },
    { icon: Heart, value: "200+", label: "Happy Clients" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Interop Digital
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Pioneering digital transformation through innovative technology
            solutions and expert engineering
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Story */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="prose prose-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Transforming Businesses Through Technology
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At Interop Digital Solutions, we are more than just an IT firm —
                we are your strategic partner in digital transformation. With
                over 15 years of experience, we&apos;ve helped hundreds of businesses
                harness the power of technology to achieve their goals.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team of expert engineers and designers specializes in
                creating custom solutions across the entire technology spectrum,
                from cloud infrastructure and AI to IoT and secure payment
                systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in building lasting relationships with our clients,
                delivering not just projects, but partnerships that drive
                continuous innovation and growth.
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 rounded-3xl p-12 transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
