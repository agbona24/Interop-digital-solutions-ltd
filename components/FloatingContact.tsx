"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Mail, Phone, Send } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    // Show the widget after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 800 : 1500);

    // Auto-open hint after 5 seconds if user hasn't interacted
    const hintTimer = setTimeout(() => {
      if (!hasInteracted && !isMobile) {
        setIsOpen(true);
        setTimeout(() => {
          if (!hasInteracted) {
            setIsOpen(false);
          }
        }, 3000);
      }
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hintTimer);
    };
  }, [hasInteracted, isMobile]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
  };

  const contactOptions = [
    {
      icon: Mail,
      label: "Email Us",
      sublabel: "info@interopdigitalsolutions.com",
      href: "mailto:info@interopdigitalsolutions.com",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:bg-blue-50",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      sublabel: "+234 906 053 1418",
      href: "https://wa.me/2349060531418?text=Hello%20Interop%20Digital%20Solutions!%20I%27m%20interested%20in%20your%20services.",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:bg-green-50",
    },
  ];

  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Contact Options Panel */}
      <div
        className={`absolute bottom-20 right-0 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[calc(100vw-2rem)] max-w-80">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Get in Touch</h3>
                <p className="text-white/80 text-xs">We reply within minutes</p>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="p-3 space-y-2">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                target={option.href.startsWith("https") ? "_blank" : undefined}
                rel={option.href.startsWith("https") ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 ${option.hoverColor} group`}
                onClick={() => setHasInteracted(true)}
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <option.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-primary-600 transition-colors">
                    {option.label}
                  </p>
                  <p className="text-gray-500 text-xs">{option.sublabel}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              Available 24/7 for urgent inquiries
            </p>
          </div>
        </div>

        {/* Arrow pointing to button */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={handleToggle}
        className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-500/30 ${
          isOpen
            ? "bg-gray-800 rotate-0"
            : "bg-gradient-to-r from-primary-500 to-primary-600"
        }`}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {/* Pulse Animation Ring */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20"></span>
            <span className="absolute inset-0 rounded-full bg-primary-500 animate-pulse opacity-30"></span>
          </>
        )}

        {/* Icon */}
        <span className="relative z-10 flex items-center justify-center">
          {isOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform duration-300" />
          ) : (
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform duration-300" />
          )}
        </span>

        {/* Notification Badge */}
        {!isOpen && !hasInteracted && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">1</span>
          </span>
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && !hasInteracted && !isMobile && (
        <div className="absolute bottom-20 right-0 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
          Need help? Chat with us!
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </div>
      )}
    </div>
  );
}
