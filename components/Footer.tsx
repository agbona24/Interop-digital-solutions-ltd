"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Heart,
  Code2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import CareersModal from "./CareersModal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);

  const footerLinks = {
    services: [
      { name: "API Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Testing & Quality Assurance", href: "#services" },
      { name: "Deployment Engineering", href: "#services" },
      { name: "Maintenance & Support", href: "#services" },
      { name: "Identity & Access Management", href: "#services" },
      { name: "Database Management", href: "#services" },
      { name: "AI & Machine Learning ", href: "#services" },
      { name: "Iot  Solutions", href: "#services" },
      { name: "Cloud Solutions ", href: "#services" },
      { name: "Training & Development", href: "#services" },
      { name: "System Infrastructure & Architecture", href: "#services" },
      { name: "Cybersecurity", href: "#services" },
    ],
    products: [
      { name: "Microsoft Office 365", href: "#products" },
      { name: "Microsoft SQL Server", href: "#products" },
      { name: "Microsoft Windows Server", href: "#products" },
      { name: "Microsoft Remote Desktop Service", href: "#products" },
      { name: "HP ProLiant Hardware Server", href: "#products" },
      { name: "Cisco Fire Power Firewall", href: "#products" },
      { name: "Fortinet Next-Generation Firewall", href: "#products" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/interop-digital-solutions-ltd/", name: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/interopdigitalsolutions?igsh=MXRtcWdoaWFmMmQyag%3D%3D&utm_source=qr", name: "Instagram" },
  ];

  return (
    <footer className="text-white relative overflow-hidden">
      {/* Background Image with Orange Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero1.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/92 to-orange-900/95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-morph animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl animate-ping-slow"></div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative w-40 h-20">
                <Image
                  src="/images/logo-white1.png"
                  alt="Interop Digital Solutions Ltd Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-primary-100 mb-6 max-w-md">
              Transforming businesses through innovative IT solutions. Your
              trusted partner in digital excellence.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@interopdigitalsolutions.com"
                className="group flex items-center gap-2 text-primary-100 hover:text-white transition-all hover:translate-x-1"
              >
                <Mail className="w-4 h-4 group-hover:text-white transition-colors" />
                <span className="text-sm">info@interopdigitalsolutions.com</span>
              </a>
              <a
                href="tel:+2349060531418"
                className="group flex items-center gap-2 text-primary-100 hover:text-white transition-all hover:translate-x-1"
              >
                <Phone className="w-4 h-4 group-hover:text-white transition-colors" />
                <span className="text-sm">+234 (906) 053-1418</span>
              </a>
              <div className="group flex items-center gap-2 text-primary-100 hover:text-white transition-all">
                <MapPin className="w-4 h-4 group-hover:text-white transition-colors" />
                <span className="text-sm">Trinity Mall, 79, Awolowo Way, Ikeja, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-100 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-100 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.name === "Careers") {
                        e.preventDefault();
                        setIsCareersModalOpen(true);
                      }
                    }}
                    className="text-primary-100 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-primary-100 mb-4 text-sm">
              Get the latest updates on technology trends and our services.
            </p>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (form.elements.namedItem('email') as HTMLInputElement).value;
              const button = form.querySelector('button');
              const originalText = button ? button.innerHTML : 'Subscribe';

              if (button) {
                button.disabled = true;
                button.innerHTML = '<span class="relative">Subscribing...</span>';
              }

              try {
                const res = await fetch('/api/forms', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ formType: 'newsletter', email }),
                });
                const data = await res.json();

                if (data.success) {
                  alert('Thank you for subscribing!');
                  form.reset();
                } else {
                  alert('Something went wrong. Please try again.');
                }
              } catch (error) {
                console.error('Newsletter error:', error);
                alert('Error submitting form.');
              } finally {
                if (button) {
                  button.disabled = false;
                  button.innerHTML = originalText;
                }
              }
            }} className="flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/20 text-sm transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:scale-105 text-sm relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex flex-wrap items-center justify-center gap-1 text-sm text-primary-100">
              <span>© {currentYear} Interop Digital Solutions Ltd.</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> for
                innovation
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 hover:rotate-6 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="hidden relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 border-t-4 border-primary-400">
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

      </div>

      {/* Careers Modal */}
      <CareersModal
        isOpen={isCareersModalOpen}
        onClose={() => setIsCareersModalOpen(false)}
      />
    </footer>
  );
}
