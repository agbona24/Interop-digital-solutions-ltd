"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  Code2,
  Network,
  Shield,
  CheckCircle,
  Users,
  Award,
  Clock,
  Target,
  Zap,
  BookOpen,
  Brain,
  TrendingUp
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MasterclassPage() {
  const trainingReveal = useScrollReveal();
  const benefitsReveal = useScrollReveal();
  const whoReveal = useScrollReveal();

  // SEO: Update page title and meta description
  useEffect(() => {
    document.title = "Corporate IT Training Masterclass | Interop Digital Solutions Ltd";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional IT training programs: IT Training, System Infrastructure & Architecture, and Cybersecurity. Microsoft-certified instructors. Industry-recognized certifications. 17+ companies trained.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional IT training programs: IT Training, System Infrastructure & Architecture, and Cybersecurity. Microsoft-certified instructors. Industry-recognized certifications. 17+ companies trained.';
      document.head.appendChild(meta);
    }
  }, []);

  const trainingPrograms = [
    {
      icon: Code2,
      title: "IT Training",
      description: "Comprehensive IT training programs covering modern technologies, development practices, and digital transformation strategies.",
      topics: [
        "Software Development & Programming",
        "Cloud Computing & Microsoft 365",
        "Database Management & SQL Server",
        "Modern Work Solutions",
        "IT Service Management",
        "Digital Collaboration Tools"
      ],
      duration: "4-12 weeks",
      level: "Beginner to Advanced",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Network,
      title: "System Infrastructure & Architecture",
      description: "Expert-led training on designing, implementing, and managing robust IT infrastructure and system architecture.",
      topics: [
        "Enterprise System Design",
        "Server Infrastructure & Virtualization",
        "Network Architecture & Design",
        "Cloud Infrastructure Management",
        "High Availability & Disaster Recovery",
        "Performance Optimization"
      ],
      duration: "6-16 weeks",
      level: "Intermediate to Expert",
      color: "from-secondary-600 to-secondary-700"
    },
    {
      icon: Shield,
      title: "Cyber Security Training",
      description: "Industry-leading cybersecurity training to protect your organization from evolving threats and ensure compliance.",
      topics: [
        "Security Fundamentals & Best Practices",
        "Threat Detection & Response",
        "Firewall Management (Cisco, Fortinet)",
        "Network Security & Monitoring",
        "Compliance & Risk Management",
        "Incident Response & Recovery"
      ],
      duration: "8-20 weeks",
      level: "All Levels",
      color: "from-red-500 to-red-600"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Industry-Recognized Certification",
      description: "Earn certificates recognized by leading organizations and enhance your professional credibility."
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from Microsoft-certified consultants and industry professionals with real-world experience."
    },
    {
      icon: Target,
      title: "Practical Hands-On Training",
      description: "Apply knowledge through real-world scenarios, labs, and project-based learning."
    },
    {
      icon: Zap,
      title: "Flexible Learning Options",
      description: "Choose from in-person, virtual, or hybrid training formats to fit your organization's schedule."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "Access training materials, documentation, and ongoing support resources."
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Boost your team's capabilities and open doors to advanced career opportunities."
    }
  ];

  const whoShouldAttend = [
    {
      title: "Corporate Organizations",
      description: "Companies looking to upskill their IT teams and enhance organizational capabilities."
    },
    {
      title: "IT Professionals",
      description: "System administrators, developers, and IT managers seeking to expand their expertise."
    },
    {
      title: "Security Teams",
      description: "Cybersecurity professionals aiming to stay ahead of emerging threats and technologies."
    },
    {
      title: "Business Leaders",
      description: "CTOs, IT Directors, and decision-makers wanting to understand modern IT landscapes."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-700 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        {/* Floating Animated Shapes */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <svg className="absolute top-32 left-1/4 w-16 h-16 text-primary-500/30 animate-float" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
          <svg className="absolute top-20 right-10 w-20 h-20 text-blue-400/20 animate-float-delayed" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-40 left-20 w-12 h-12 text-primary-400/40 animate-float" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 backdrop-blur-lg border border-primary-500/30 rounded-full mb-8">
            <GraduationCap className="w-5 h-5 text-primary-400" />
            <span className="text-white text-sm font-semibold">
              Corporate Training Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Masterclass{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
              Training Programs
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Empower your team with world-class IT training programs. From foundational IT skills to advanced cybersecurity and infrastructure management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all hover:scale-105"
            >
              Enroll Your Team
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Download Brochure
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { label: "Expert Instructors", value: "Microsoft Certified" },
              { label: "Training Programs", value: "3 Tracks" },
              { label: "Companies Trained", value: "17+" },
              { label: "Success Rate", value: "100%" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={trainingReveal.ref}
            className={`text-center mb-16 scroll-reveal ${trainingReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Training Tracks
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from three specialized training programs designed for corporate excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all hover-lift scroll-reveal ${trainingReveal.isVisible ? `revealed animate-fade-in-up stagger-${index + 1}` : ''}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary-500" />
                    <span className="text-gray-700">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Brain className="w-4 h-4 text-primary-500" />
                    <span className="text-gray-700">{program.level}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Topics:</h4>
                  <ul className="space-y-2">
                    {program.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={benefitsReveal.ref}
            className={`text-center mb-16 scroll-reveal ${benefitsReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Masterclass
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience training that delivers real results for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all hover-lift scroll-reveal ${benefitsReveal.isVisible ? `revealed animate-fade-in-up stagger-${index + 1}` : ''}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={whoReveal.ref}
            className={`text-center mb-16 scroll-reveal ${whoReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Who Should{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Attend
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our training programs are designed for diverse professional backgrounds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whoShouldAttend.map((audience, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100 hover:shadow-xl transition-all hover-lift scroll-reveal ${whoReveal.isVisible ? `revealed animate-fade-in-up stagger-${index + 1}` : ''}`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join leading organizations who trust Interop Digital Solutions Ltd for their corporate training needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Request Training Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
