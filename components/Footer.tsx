"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Heart,
} from "lucide-react";

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
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-xl font-bold">Interop Digital</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through innovative IT solutions. Your
              trusted partner in digital excellence.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@interopdigital.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@interopdigital.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
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
              <span>© {currentYear} Interop Digital Solutions.</span>
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
    </footer>
  );
}
