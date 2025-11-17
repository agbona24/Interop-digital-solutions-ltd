"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-800 via-secondary-700 to-secondary-800"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-600/20 to-transparent rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-primary-400' : 'bg-secondary-400'
            } opacity-40 animate-particle`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orange Circle - Top Left */}
        <svg
          className="absolute top-20 left-10 w-20 h-20 text-primary-500/30 animate-float"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>

        {/* Navy Triangle - Top Right */}
        <svg
          className="absolute top-40 right-20 w-24 h-24 text-secondary-600/40 animate-float-delayed"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="50,10 90,90 10,90" fill="currentColor" />
        </svg>

        {/* Orange Hexagon - Bottom Left */}
        <svg
          className="absolute bottom-40 left-20 w-28 h-28 text-primary-600/25 animate-spin-slow"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z" fill="currentColor" />
        </svg>

        {/* Navy Square - Bottom Right */}
        <svg
          className="absolute bottom-32 right-32 w-16 h-16 text-secondary-700/35 animate-pulse"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="20" y="20" width="60" height="60" rx="10" fill="currentColor" />
        </svg>

        {/* Small Orange Dots */}
        <svg
          className="absolute top-1/3 left-1/4 w-12 h-12 text-primary-400/40 animate-ping-slow"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="8" fill="currentColor" />
          <circle cx="70" cy="30" r="8" fill="currentColor" />
          <circle cx="30" cy="70" r="8" fill="currentColor" />
          <circle cx="70" cy="70" r="8" fill="currentColor" />
        </svg>

        {/* Code Bracket Shapes */}
        <svg
          className="absolute top-1/2 right-1/4 w-20 h-20 text-primary-500/30 animate-float"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30 20 L10 50 L30 80" stroke="currentColor" strokeWidth="4" fill="none" />
          <path d="M70 20 L90 50 L70 80" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>

        {/* Gear Icon Shape */}
        <svg
          className="absolute bottom-1/4 left-1/3 w-24 h-24 text-secondary-600/30 animate-spin-slow"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 30 L55 40 L65 40 L58 47 L60 57 L50 50 L40 57 L42 47 L35 40 L45 40 Z" fill="currentColor" />
          <circle cx="50" cy="50" r="10" fill="currentColor" />
        </svg>

        {/* Circuit Line Pattern */}
        <svg
          className="absolute top-1/4 right-1/3 w-32 h-32 text-primary-400/20 animate-pulse"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 10 L40 10 L40 40 L70 40 L70 70 L90 70" stroke="currentColor" strokeWidth="3" fill="none" />
          <circle cx="40" cy="40" r="5" fill="currentColor" />
          <circle cx="70" cy="70" r="5" fill="currentColor" />
        </svg>

        {/* Plus Signs */}
        <svg
          className="absolute bottom-1/3 right-1/4 w-16 h-16 text-primary-500/35 animate-ping-slow"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="6" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 backdrop-blur-lg border border-primary-500/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-white text-sm font-semibold">
              Transforming Ideas into Digital Reality
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Your Partner in
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
              Digital Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge IT solutions in Cloud, AI,
            IoT, and more. From concept to deployment, we deliver excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all hover:scale-105 flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white text-secondary-900 rounded-full font-semibold hover:bg-gray-100 transition-all border-2 border-white/20"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { label: "Projects Delivered", value: "500+" },
              { label: "Happy Clients", value: "200+" },
              { label: "Team Members", value: "50+" },
              { label: "Countries Served", value: "25+" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${
                  index * 100
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
