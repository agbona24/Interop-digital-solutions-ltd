"use client";

import { useEffect, useRef, useState } from "react";
import {
  Workflow,
  CreditCard,
  ShoppingCart,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
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

  const products = [
    {
      icon: Workflow,
      title: "Process Automation",
      description:
        "Streamline your business operations with intelligent automation solutions that reduce manual work and increase efficiency.",
      features: [
        "Workflow Automation",
        "Document Processing",
        "Task Scheduling",
        "Integration Hub",
      ],
      color: "from-blue-600 to-cyan-600",
      image: "🤖",
    },
    {
      icon: CreditCard,
      title: "Payment Solutions",
      description:
        "Secure, fast, and reliable payment processing systems designed for modern businesses and seamless transactions.",
      features: [
        "Multi-Currency Support",
        "Fraud Detection",
        "Real-time Processing",
        "Compliance Ready",
      ],
      color: "from-green-600 to-emerald-600",
      image: "💳",
    },
    {
      icon: ShoppingCart,
      title: "Commerce Platform",
      description:
        "End-to-end e-commerce solutions that power your online business with cutting-edge technology and user experience.",
      features: [
        "Shopping Cart",
        "Inventory Management",
        "Order Tracking",
        "Analytics Dashboard",
      ],
      color: "from-purple-600 to-pink-600",
      image: "🛒",
    },
    {
      icon: MapPin,
      title: "Geo Services",
      description:
        "Advanced geolocation and mapping solutions for location-based services, tracking, and spatial analytics.",
      features: [
        "Real-time Tracking",
        "Route Optimization",
        "Geofencing",
        "Location Analytics",
      ],
      color: "from-orange-600 to-red-600",
      image: "🗺️",
    },
  ];

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDIpIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Products
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Innovative solutions built to accelerate your business growth and
            digital transformation
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden relative ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${product.color} opacity-5 rounded-full -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700`}
              ></div>

              <div className="relative z-10">
                {/* Icon & Emoji */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl">{product.image}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className={`group/btn flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
