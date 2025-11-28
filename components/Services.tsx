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
