"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Palette,
  TestTube,
  Rocket,
  Shield,
  Database,
  Brain,
  Cpu,
  Cloud,
} from "lucide-react";

export default function Services() {
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

  const services = [
    {
      icon: Code2,
      title: "API Development",
      description:
        "Robust and scalable API solutions designed for seamless integration and optimal performance.",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that deliver exceptional user experiences across all platforms.",
      color: "from-secondary-600 to-secondary-700",
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description:
        "Comprehensive testing strategies ensuring your software is reliable, secure, and bug-free.",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Rocket,
      title: "Deployment & Maintenance",
      description:
        "Smooth deployments and proactive maintenance keeping your applications running flawlessly.",
      color: "from-secondary-600 to-secondary-800",
    },
    {
      icon: Shield,
      title: "Identity & Security",
      description:
        "Enterprise-grade security solutions protecting your data and ensuring compliance.",
      color: "from-primary-500 to-primary-700",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description:
        "Optimized database architecture and management for maximum efficiency and scalability.",
      color: "from-secondary-700 to-secondary-900",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Cutting-edge AI solutions that transform data into actionable insights and automation.",
      color: "from-primary-400 to-primary-600",
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description:
        "Connected device ecosystems that enable smart operations and real-time monitoring.",
      color: "from-secondary-600 to-secondary-800",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description:
        "Scalable cloud infrastructure and migration services for modern, flexible operations.",
      color: "from-primary-500 to-primary-600",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Services
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Comprehensive IT solutions tailored to drive your business forward
            in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
