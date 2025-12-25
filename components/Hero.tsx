"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Zap, Shield, Award, TrendingUp, Code2, Cloud, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    { icon: Zap, label: "Lightning Fast", color: "from-yellow-400 to-orange-500" },
    { icon: Shield, label: "Secure", color: "from-blue-400 to-cyan-500" },
    { icon: Award, label: "Award Winning", color: "from-purple-400 to-pink-500" },
    { icon: TrendingUp, label: "Scalable", color: "from-green-400 to-emerald-500" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Hero Background Image with Orange Fade */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero2.jpg"
          alt="Interop Digital Solutions Team"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Orange faded overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/40 via-orange-400/35 to-primary-600/45"></div>
        {/* White overlay for brightness */}
        <div className="absolute inset-0 bg-white/60"></div>
        {/* Additional gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40"></div>
      </div>
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-500/30 to-orange-500/20 blur-3xl animate-blob"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div 
          className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-secondary-700/30 to-secondary-500/20 blur-3xl animate-blob animation-delay-2000"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-secondary-600/20 to-secondary-400/15 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Modern Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Corner Shape */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-2xl"></div>
        
        {/* Bottom Left Corner Shape */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-secondary-700/10 to-transparent rounded-full blur-2xl"></div>

        {/* Floating Code Icon */}
        <Code2 className="absolute top-20 right-1/4 w-16 h-16 text-primary-500/20 animate-float" />
        <Cloud className="absolute bottom-32 left-1/4 w-20 h-20 text-secondary-700/20 animate-float-delayed" />
        <Rocket className="absolute top-1/3 left-20 w-12 h-12 text-orange-500/20 animate-bounce-slow" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-gray-700 text-sm font-semibold">
                Transforming Ideas into Digital Reality
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
              Building the{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-orange-500 to-primary-600">
                  Future
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C50 2.5 100 1 150 3.5C200 6 250 4.5 299 5.5" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6600"/>
                      <stop offset="1" stopColor="#ff8833"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              of Digital Excellence
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Empowering businesses with cutting-edge IT solutions in Cloud, AI, IoT, and beyond. 
              From concept to deployment, we turn vision into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-orange-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-primary-500/40 transition-all hover:scale-105 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Start Your Project</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl font-semibold hover:border-primary-500 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "17+", label: "Happy Clients" },
                { value: "19+", label: "Expert Team" },
                { value: "13", label: "Industries" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{stat.value}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
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
            {/* Main Feature Card */}
            <div className="relative">
              {/* Large Card - Microsoft Partner */}
              <div className="relative bg-gradient-to-br from-secondary-700 to-secondary-600 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-3xl"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary-400" />
                    </div>
                    <span className="px-4 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full">
                      CERTIFIED
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Microsoft Partner
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    Officially certified to deliver enterprise-grade solutions with Microsoft&apos;s trusted technology stack.
                  </p>
                </div>
              </div>

              {/* Floating Mini Cards */}
              <div className="absolute -top-6 -right-6 grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group w-28 h-28 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer"
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animation: isVisible ? "float 3s ease-in-out infinite" : "none",
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xs font-semibold text-gray-700 text-center leading-tight">
                      {feature.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">98%</p>
                    <p className="text-sm text-gray-500">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
