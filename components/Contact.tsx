"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus("idle");
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@interopdigitalsolutions.com",
      link: "mailto:info@interopdigitalsolutions.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+234 (906) 053-1418",
      link: "tel:+234 906 053 1418",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Trinity Mall, 79, Awolowo Way, Ikeja, Lagos, Nigeria",
      link: "https://maps.google.com/?q=Trinity+Mall+70+Awolowo+Way+Ikeja+Lagos+Nigeria",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, link: "#", name: "LinkedIn" },
    { icon: Twitter, link: "#", name: "Twitter" },
    { icon: Github, link: "#", name: "GitHub" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDIpIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 backdrop-blur-lg border border-primary-500/20 rounded-full mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-primary-600 text-sm font-semibold">
              Let&apos;s Connect
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Get in{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Touch
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full opacity-30"></span>
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Ready to transform your business? Let&apos;s start a conversation about
            your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/0 to-primary-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-secondary-700 to-secondary-600 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-white text-xl font-bold mb-4">
                  Follow Us
                </h3>
                <p className="text-primary-100 mb-6 text-sm">
                  Stay connected with us on social media for the latest updates
                  and insights
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="group w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 hover:rotate-12 shadow-lg"
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus === "idle" && (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                  {formStatus === "submitting" && (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  )}
                  {formStatus === "success" && (
                    <>
                      Message Sent
                      <CheckCircle2 className="w-5 h-5" />
                    </>
                  )}
                </button>

                {formStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl text-sm">
                    Thank you! We&apos;ll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div
          className={`mt-20 transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Office
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drop by our office at Trinity Mall, Ikeja, Lagos for a face-to-face consultation
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            {/* Map Container with Modern Overlay */}
            <div className="relative h-[500px] md:h-[600px] bg-gray-200">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2764165584845!2d3.3536629!3d6.6045034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d1e5e5e5e5%3A0x0!2sAwolowo%20Way%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-0 group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Gradient Overlay on Edges */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent opacity-40"></div>
              </div>
            </div>

            {/* Floating Info Card */}
            <div className="absolute top-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-white rounded-2xl shadow-2xl p-6 backdrop-blur-lg bg-opacity-95">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Trinity Mall, 79, Awolowo Way, Ikeja, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Trinity+Mall+70+Awolowo+Way+Ikeja+Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Additional Location Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 border border-primary-100">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Easy Access</h4>
              <p className="text-sm text-gray-600">
                Located in the heart of Ikeja, easily accessible via major highways
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-6 border border-secondary-100">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-700 to-secondary-600 rounded-lg flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Call Ahead</h4>
              <p className="text-sm text-gray-600">
                Schedule a visit by calling us at +234 906 053 1418
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 border border-primary-100">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Email First</h4>
              <p className="text-sm text-gray-600">
                Prefer email? Reach us at info@interopdigitalsolutions.com anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
