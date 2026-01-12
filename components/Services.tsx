"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Cloud,
  Network,
  Settings,
  Wrench,
  GraduationCap,
  Palette,
  TestTube,
  Rocket,
  Shield,
  Database,
  Brain,
  Radio,
  Plug,
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

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const services = [
    {
      icon: Plug,
      title: "API Development",
      description:
        "Design and build robust RESTful and GraphQL APIs with seamless third-party integrations. We create scalable, secure, and well-documented APIs that power your applications and connect your systems.",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Create intuitive, user-centered interfaces that delight your customers. Our design team crafts beautiful, responsive experiences that drive engagement and conversions across web and mobile platforms.",
      color: "from-secondary-600 to-secondary-700",
    },
    {
      icon: TestTube,
      title: "Testing & Quality Assurance",
      description:
        "Comprehensive testing services including automated testing, performance testing, security testing, and manual QA to ensure your software is reliable, secure, and performs flawlessly.",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Rocket,
      title: "Deployment Engineering",
      description:
        "Expert deployment strategies with CI/CD pipelines, containerization, and automated workflows. We ensure smooth, reliable deployments with zero downtime and rapid rollback capabilities.",
      color: "from-secondary-600 to-secondary-800",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "24/7 monitoring, proactive maintenance, and rapid incident response. Our support team ensures your systems stay operational, secure, and aligned with evolving business goals.",
      color: "from-primary-500 to-primary-700",
    },
    {
      icon: Shield,
      title: "Identity & Security",
      description:
        "Comprehensive security solutions including authentication, authorization, encryption, threat detection, and compliance. Protect your data and users with enterprise-grade security measures.",
      color: "from-secondary-700 to-secondary-900",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Expert database design, optimization, and administration for SQL and NoSQL systems. From schema design to performance tuning, we ensure your data is organized, accessible, and secure.",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Leverage artificial intelligence and machine learning to automate processes, gain insights, and make smarter decisions. Custom models, predictive analytics, and intelligent automation tailored to your needs.",
      color: "from-secondary-600 to-secondary-700",
    },
    {
      icon: Radio,
      title: "IoT Solutions",
      description:
        "Connect, monitor, and control your devices with Internet of Things solutions. From sensor integration to real-time data processing and analytics, we bring your physical assets online.",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "End-to-end cloud services including AWS, Azure, and GCP. Cloud migration, deployment, optimization, and management with scalability, security, and cost-efficiency at the core.",
      color: "from-secondary-600 to-secondary-800",
    },
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Custom software applications, frameworks, and tools tailored to your unique business needs. We transform your ideas into powerful, scalable solutions that drive results.",
      color: "from-primary-500 to-primary-700",
    },
    {
      icon: GraduationCap,
      title: "Training",
      description:
        "Comprehensive training programs for your team covering modern technologies, best practices, and industry standards. We ensure your team has the skills to succeed in the digital age.",
      color: "from-secondary-700 to-secondary-900",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 backdrop-blur-lg border border-primary-500/20 rounded-full mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-primary-600 text-sm font-semibold">
              What We Do
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                Services
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full opacity-30"></span>
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              ></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/0 to-primary-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
