"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Client {
  name: string;
  logo: string;
  industry: string;
}

const clients: Client[] = [
  { name: "PricewaterhouseCoopers", logo: "PWC", industry: "Professional Services" },
  { name: "Energia Limited", logo: "EL", industry: "Energy" },
  { name: "AIPEC Group", logo: "AG", industry: "Oil & Gas" },
  { name: "Refem Millers Limited", logo: "RM", industry: "Manufacturing" },
  { name: "Tethys Limited", logo: "TL", industry: "Engineering" },
  { name: "United Motor Company", logo: "UMC", industry: "Automotive" },
  { name: "Emzor Pharmaceutical", logo: "EP", industry: "Healthcare" },
  { name: "Estendo Power Products", logo: "EPP", industry: "Energy" },
  { name: "Mano Palm Oil Industries", logo: "MPO", industry: "Manufacturing" },
  { name: "Labianca Company Limited", logo: "LCL", industry: "Distribution" },
  { name: "Geoplex Drillteq Limited", logo: "GD", industry: "Engineering" },
  { name: "Nett Pharmacy", logo: "NP", industry: "Healthcare" },
  { name: "Okitipupa Oil Palm Plc", logo: "OOP", industry: "Manufacturing" },
  { name: "H&A Corporation", logo: "H&A", industry: "Professional Services" },
  { name: "Quilox Restaurant & Bar", logo: "QR", industry: "Retail" },
  { name: "Westgate Technologies", logo: "WT", industry: "Technology" },
  { name: "Bayrock Lifestyle", logo: "BL", industry: "Retail" },
];

// Gradient colors for logos
const gradients = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500",
  "from-green-500 to-emerald-500",
  "from-indigo-500 to-blue-500",
  "from-yellow-500 to-orange-500",
  "from-pink-500 to-rose-500",
  "from-teal-500 to-green-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-yellow-500",
  "from-cyan-500 to-blue-500",
  "from-rose-500 to-pink-500",
];

export default function ClientLogosTicker() {
  const headerReveal = useScrollReveal();

  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          className={`text-center mb-16 scroll-reveal ${headerReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re proud to partner with innovative companies across various industries
          </p>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 scroll-reveal ${headerReveal.isVisible ? 'revealed animate-fade-in-up' : ''}`}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              17+
            </div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              19+
            </div>
            <div className="text-gray-600 font-medium">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              3
            </div>
            <div className="text-gray-600 font-medium">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              13
            </div>
            <div className="text-gray-600 font-medium">Industries Served</div>
          </div>
        </div>
      </div>

      {/* Infinite Ticker */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-left">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-4 group"
              >
                <div className="w-48 h-32 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover-lift transition-all">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform`}
                  >
                    {client.logo}
                  </div>
                  <div className="text-center px-2">
                    <div className="font-bold text-gray-900 text-sm mb-1">
                      {client.name}
                    </div>
                    <div className="text-xs text-gray-500">{client.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🤝", title: "Microsoft Partner", desc: "Certified Solutions" },
            { icon: "🛡️", title: "Fortinet Partner", desc: "Security Expert" },
            { icon: "⭐", title: "Client Focused", desc: "Proven Excellence" },
            { icon: "🌍", title: "Regional Reach", desc: "Nigeria, Ghana, Liberia" },
          ].map((badge, index) => (
            <div
              key={badge.title}
              className={`bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 text-center border border-primary-100 hover:shadow-lg transition-all hover-lift scroll-reveal ${headerReveal.isVisible ? `revealed animate-scale-in stagger-${index + 1}` : ''}`}
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <div className="font-bold text-gray-900 mb-1">{badge.title}</div>
              <div className="text-sm text-gray-600">{badge.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
