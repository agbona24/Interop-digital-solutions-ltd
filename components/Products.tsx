"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  Mail,
  Database,
  Server,
  MonitorPlay,
  HardDrive,
  Shield,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Workflow,
  CreditCard,
  ShoppingCart,
  MapPin,
} from "lucide-react";

const ProductInquiryModal = dynamic(() => import("@/components/ProductInquiryModal"), { ssr: false });

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [productInquiryModal, setProductInquiryModal] = useState<{ isOpen: boolean; productName: string }>({
    isOpen: false,
    productName: "",
  });
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
      icon: Mail,
      title: "Microsoft Office 365",
      description:
        "Cloud-based productivity platform including Word, Excel, PowerPoint, Outlook, and OneDrive with advanced security and intelligent cloud services.",
      features: [
        "Seamless Integration & Collaboration",
        "Access Anywhere, Anytime",
        "Advanced Security Features",
        "Continuous Innovation",
      ],
      color: "from-primary-500 to-primary-600",
      image: "📧",
    },
    {
      icon: Database,
      title: "Microsoft SQL Server",
      description:
        "Relational database management system (RDBMS) for storing and retrieving data with robust security and high performance.",
      features: [
        "Robust Security Features",
        "High Performance & Scalability",
        "Comprehensive Data Management",
        "Good Integration with Microsoft Products",
      ],
      color: "from-secondary-700 to-secondary-900",
      image: "💾",
    },
    {
      icon: Server,
      title: "Microsoft Windows Server",
      description:
        "Platform for building infrastructure of connected applications, networks, and web services, bridging on-premises with Azure.",
      features: [
        "Network Administration",
        "File Management",
        "Enterprise-level Management",
        "Azure Integration",
      ],
      color: "from-primary-500 to-primary-700",
      image: "🖥️",
    },
    {
      icon: MonitorPlay,
      title: "Microsoft Remote Desktop Service",
      description:
        "Virtualization platform for delivering individual applications, secure mobile and remote desktop access, and cloud-based operations.",
      features: [
        "Virtualized Applications",
        "Secure Remote Access",
        "Cloud Deployment",
        "Flexible Deployment Options",
      ],
      color: "from-secondary-600 to-secondary-800",
      image: "🖥️",
    },
    {
      icon: HardDrive,
      title: "HP ProLiant Hardware Server",
      description:
        "High-performance servers designed for hybrid environments with exceptional energy efficiency, security features, and AI optimization.",
      features: [
        "Integrated Lights-Out (iLO)",
        "Tool-free Serviceability",
        "Optimized for AI Workloads",
        "Backup & Recovery Solutions",
      ],
      color: "from-primary-400 to-primary-600",
      image: "⚙️",
    },
    {
      icon: Shield,
      title: "Cisco Fire Power Firewall",
      description:
        "Network security suite protecting against malware and hackers with threat defense, policy management, and continuous monitoring.",
      features: [
        "Threat Defence",
        "Policy Management",
        "Centralized Management",
        "Continuous Monitoring",
      ],
      color: "from-secondary-700 to-secondary-900",
      image: "🛡️",
    },
    {
      icon: ShieldCheck,
      title: "Fortinet Next-Generation Firewall",
      description:
        "Advanced networking with robust security, AI-enhanced threat protection, custom ASIC architecture for superior performance and energy efficiency.",
      features: [
        "AI-Enhanced Protection",
        "Superior Performance",
        "Integrated SD-WAN & ZTNA",
        "Unified Policy Management",
      ],
      color: "from-primary-500 to-primary-600",
      image: "🔒",
    },
  ];

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDIpIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary-700/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-secondary-700/10 backdrop-blur-lg border border-secondary-700/20 rounded-full mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-secondary-700 text-sm font-semibold">
              What We Offer
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                Products
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full opacity-30"></span>
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
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
              className={`group bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 overflow-hidden relative ${
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
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{product.image}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700 group-hover:text-gray-900 transition-colors"
                    >
                      <CheckCircle className={`w-4 h-4 text-primary-500`} />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Removed Learn More CTA button */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Inquiry Modal */}
      <ProductInquiryModal
        isOpen={productInquiryModal.isOpen}
        onClose={() => setProductInquiryModal({ isOpen: false, productName: "" })}
        productName={productInquiryModal.productName}
      />
    </section>
  );
}
