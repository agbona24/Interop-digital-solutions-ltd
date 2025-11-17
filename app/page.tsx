import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Code2, Package, Users, Mail } from "lucide-react";

export default function Home() {
  const quickLinks = [
    {
      icon: Code2,
      title: "Our Services",
      description: "Explore our comprehensive IT solutions",
      href: "/services",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Package,
      title: "Our Products",
      description: "Discover our innovative product offerings",
      href: "/products",
      color: "from-secondary-700 to-secondary-600",
    },
    {
      icon: Users,
      title: "About Us",
      description: "Learn about our team and mission",
      href: "/about",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Mail,
      title: "Contact",
      description: "Get in touch with our team",
      href: "/contact",
      color: "from-secondary-700 to-secondary-600",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />

      {/* Quick Links Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we can help transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {link.title}
                </h3>
                <p className="text-gray-600">{link.description}</p>
                <div className="mt-4 text-primary-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
