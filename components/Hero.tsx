"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Zap, Shield, Award, TrendingUp, Mail, MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import QuizModal from "./QuizModal";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Zap, label: "Lightning Fast", color: "from-primary-500 to-orange-500" },
    { icon: Shield, label: "Secure", color: "from-secondary-600 to-secondary-700" },
    { icon: Award, label: "Award Winning", color: "from-primary-500 to-orange-500" },
    { icon: TrendingUp, label: "Scalable", color: "from-green-500 to-emerald-600" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background with Brown/Rust Color */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero2.jpg"
          alt="Interop Digital Solutions Team"
          fill
          priority
          className="object-cover object-center"
          quality={75}
          sizes="100vw"
        />
        {/* Brown/Rust Gradient Overlay to match screenshot */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A0522D] via-[#8B4513] to-[#6B3410] opacity-95"></div>
      </div>

      {/* Animated Background Pulses */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Main Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-semibold">
                Transforming Ideas into Digital Reality
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
              Building the{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB84D] via-[#FFA31A] to-[#FF8800]">
                  Future
                </span>
              </span>
              <br />
              of Digital Excellence
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              Empowering businesses with cutting-edge IT solutions in Cloud, AI, IoT, and beyond.
              From concept to deployment, we turn vision into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => setIsQuizModalOpen(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-[#FF6600]/40 transition-all hover:scale-105 flex items-center justify-center gap-2 overflow-hidden shadow-lg"
              >
                <span className="relative">Start Your Project</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/services"
                className="group px-8 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/20 hover:border-white/40 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "7+", label: "Happy Clients" },
                { value: "8+", label: "Expert Team" },
                { value: "5", label: "Industries" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6600] to-[#FF8533] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{stat.value}</span>
                  </div>
                  <div>
                    <p className="text-sm text-white/90 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Floating Cards */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main Feature Card - Microsoft Partner */}
            <div className="relative mb-8 mt-20">
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-[#FFB84D]" />
                  </div>
                  <span className="px-3 py-1 bg-[#FF6600]/20 text-white text-xs font-semibold rounded-full border border-[#FF6600]/30">
                    CERTIFIED
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Microsoft Partner
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Officially certified to deliver enterprise-grade solutions with Microsoft&apos;s trusted technology stack.
                </p>
              </div>

              {/* Floating Mini Feature Cards - Top Right */}
              <div className="absolute -top-16 -right-8 grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group w-28 h-28 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer"
                    style={{
                      animation: isVisible ? "float 3s ease-in-out infinite" : "none",
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-md`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs font-semibold text-gray-700 text-center leading-tight">
                      {feature.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Client Satisfaction Card - Bottom Left */}
              <div className="absolute -bottom-20 -left-12 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6600] to-[#FF8533] rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">44%</p>
                    <p className="text-xs text-[#0066ff] font-medium">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/70 font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      <QuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
      />
    </section>
  );
}
