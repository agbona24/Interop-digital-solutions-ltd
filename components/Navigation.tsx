"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import QuizModal from "./QuizModal";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-white.png"
                  alt="Interop Digital Solutions Ltd Logo"
                  fill
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? "brightness-0" : ""
                  }`}
                  priority
                />
              </div>
              <span
                className={`text-xl font-bold transition-colors ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Interop Digital Solutions Ltd
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsQuizModalOpen(true)}
              className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-gray-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsQuizModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Quiz Modal */}
      <QuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
      />
    </nav>
  );
}
