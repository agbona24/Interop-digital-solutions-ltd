"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate the circumference of the circle
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200/50">
        <div
          className="h-full bg-gradient-to-r from-primary-500 via-primary-600 to-orange-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to Top Button with Circular Progress */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-white shadow-2xl border border-gray-200 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-primary-500/20 hover:border-primary-300 focus:outline-none focus:ring-4 focus:ring-primary-500/20 group ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        {/* Circular Progress SVG */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 56 56"
        >
          {/* Background Circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-100"
          />
          {/* Progress Circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transition: "stroke-dashoffset 0.15s ease-out",
            }}
          />
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6600" />
              <stop offset="100%" stopColor="#FF8533" />
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow Icon */}
        <ArrowUp className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors relative z-10 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </>
  );
}
