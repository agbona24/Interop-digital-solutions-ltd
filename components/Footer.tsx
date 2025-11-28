"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Heart,
  Code2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "API Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Cloud Services", href: "#services" },
      { name: "AI Solutions", href: "#services" },
    ],
    products: [
      { name: "Process Automation", href: "#products" },
      { name: "Payment Solutions", href: "#products" },
      { name: "Commerce Platform", href: "#products" },
      { name: "Geo Services", href: "#products" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Github, href: "#", name: "GitHub" },
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary-800 via-secondary-700 to-secondary-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-white.png"
                  alt="Interop Digital Solutions Ltd Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Interop Digital Solutions Ltd</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through innovative IT solutions. Your
              trusted partner in digital excellence.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@interop.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@interop.com</span>
              </a>
              <a
                href="tel:+2348099451647"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+234 (809) 945-1647</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Trinity Mall, 70, Awolowo Way, Ikeja, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest updates on technology trends and our services.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:scale-105 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-gray-300">
              <span>© {currentYear} Interop Digital Solutions Ltd.</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500" /> for
                innovation
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 border-t-4 border-primary-400">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJ3aGl0ZSIvPjwvZz48L3N2Zz4=')] animate-pulse"></div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Icon with Animation */}
            <div className="flex items-center gap-3 animate-bounce-slow">
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Code2 className="w-6 h-6 text-primary-600 animate-pulse" />
                </div>
              </div>
              <Sparkles className="w-6 h-6 text-yellow-300 animate-spin-slow" />
            </div>

            {/* Developer Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-white/80 text-sm font-medium">Crafted with excellence by</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  HARZOTECH
                </span>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full animate-ping"></span>
                  <span className="w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-100"></span>
                  <span className="w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-200"></span>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/2347069716822"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-full font-bold shadow-2xl hover:shadow-primary-400/50 transition-all hover:scale-110 hover:-translate-y-1 animate-pulse-slow"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Chat on WhatsApp</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </a>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-4">
            <p className="text-white/70 text-xs font-medium">
              Your Partner in Digital Innovation • Premium Web Solutions • WhatsApp: 0706 971 6822
            </p>
          </div>
        </div>

        {/* Floating Sparkles Animation */}
        <style jsx>{`
          @keyframes shine {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .animate-shine {
            animation: shine 3s infinite;
          }

          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .animate-spin-slow {
            animation: spin-slow 4s linear infinite;
          }

          @keyframes pulse-slow {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }

          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }

          .delay-100 {
            animation-delay: 0.1s;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-shine,
            .animate-bounce-slow,
            .animate-spin-slow,
            .animate-pulse-slow {
              animation: none;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
