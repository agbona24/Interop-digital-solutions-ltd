"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Linkedin, Mail, Award, Code, Database, Shield, Cloud } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  certifications: string[];
  linkedin: string;
  email: string;
  image: string;
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Functional Consultant",
    role: "Senior Microsoft Modern Work Functional Consultant",
    bio: "Expert in Microsoft 365 ecosystem with deep knowledge of business processes and modern work solutions. Specializing in digital transformation and productivity enhancement.",
    expertise: ["Microsoft 365", "Business Process", "Digital Transformation"],
    certifications: ["Microsoft Certified", "Modern Work Expert", "Productivity Solutions"],
    linkedin: "#",
    email: "info@interopdigitalsolutions.com",
    image: "FC",
    color: "from-primary-500 to-primary-600",
  },
  {
    name: "Technical Consultant",
    role: "Senior Microsoft Modern Work Technical Consultant",
    bio: "Technical specialist delivering Microsoft cloud solutions with expertise in architecture, deployment, and optimization of Microsoft 365 environments.",
    expertise: ["Microsoft 365 Architecture", "Cloud Deployment", "Technical Solutions"],
    certifications: ["Microsoft Certified", "Azure Solutions Architect", "Modern Work Technical"],
    linkedin: "#",
    email: "info@interopdigitalsolutions.com",
    image: "TC",
    color: "from-secondary-700 to-secondary-900",
  },
  {
    name: "Backend Developer",
    role: "Senior Backend Developer",
    bio: "Experienced backend engineer building robust and scalable server-side applications. Expert in API development, database management, and system architecture.",
    expertise: ["API Development", "Database Management", "System Architecture"],
    certifications: ["Microsoft Certified", "SQL Server Specialist", "Cloud Solutions"],
    linkedin: "#",
    email: "info@interopdigitalsolutions.com",
    image: "BD",
    color: "from-primary-500 to-primary-700",
  },
  {
    name: "Frontend Developer",
    role: "Senior Frontend Developer",
    bio: "Creative frontend specialist crafting exceptional user interfaces. Expert in modern web technologies and responsive design with focus on user experience.",
    expertise: ["Modern Web Technologies", "Responsive Design", "UX Implementation"],
    certifications: ["Web Development Expert", "UI/UX Specialist", "Modern Frameworks"],
    linkedin: "#",
    email: "info@interopdigitalsolutions.com",
    image: "FD",
    color: "from-secondary-600 to-secondary-800",
  },
  {
    name: "Product Designer",
    role: "Senior Product Designer",
    bio: "User-centered designer creating intuitive and visually stunning digital products. Balancing aesthetics with functionality to deliver exceptional user experiences.",
    expertise: ["UI/UX Design", "Product Strategy", "User Research"],
    certifications: ["UX Design Expert", "Product Design Professional", "Design Thinking"],
    linkedin: "#",
    email: "info@interopdigitalsolutions.com",
    image: "PD",
    color: "from-primary-400 to-primary-600",
  },
  {
    name: "Solutions Architect",
    role: "System Infrastructure & Architecture Specialist",
    bio: "Infrastructure expert designing and implementing robust IT systems. Specialized in cloud solutions, network architecture, and enterprise infrastructure.",
    expertise: ["Infrastructure Design", "Cloud Architecture", "Network Solutions"],
    certifications: ["Cisco Certified", "Fortinet Expert", "Microsoft Infrastructure"],
    linkedin: "#",
    email: "info@interopdigitalsolutions.com",
    image: "SA",
    color: "from-secondary-700 to-secondary-900",
  },
];

const expertiseIcons: { [key: string]: typeof Code } = {
  "Cloud Architecture": Cloud,
  "DevOps": Code,
  "Full-Stack Development": Code,
  "Cybersecurity": Shield,
  "Data Engineering": Database,
  "Machine Learning": Database,
  "CI/CD": Code,
};

export default function TeamProfiles() {
  const headerReveal = useScrollReveal();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          className={`text-center mb-16 scroll-reveal ${headerReveal.isVisible ? 'revealed animate-fade-in-down' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our world-class team of professionals brings decades of combined experience
            to deliver exceptional results for your business.
          </p>
        </div>

        {/* Team Grid */}
        <div
          ref={headerReveal.ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => {
            return (
              <div
                key={member.name}
                className={`scroll-reveal ${headerReveal.isVisible ? `revealed animate-fade-in-up stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover-lift group">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform`}>
                      {member.image}
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-md border border-gray-200">
                      <span className="text-xs font-semibold text-primary-500">
                        Available
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary-600 mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {member.expertise.slice(0, 3).map((skill) => {
                      const Icon = expertiseIcons[skill] || Code;
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                        >
                          <Icon className="w-3 h-3" />
                          {skill}
                        </span>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <a
                      href={member.linkedin}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-xl hover:bg-primary-100 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm font-medium">Email</span>
                    </a>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all font-medium text-sm btn-ripple"
                  >
                    View Full Profile
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedMember.color} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
                {selectedMember.image}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {selectedMember.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {selectedMember.role}
                </p>
                <div className="flex gap-2">
                  <a
                    href={selectedMember.linkedin}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">About</h4>
              <p className="text-gray-600 leading-relaxed">
                {selectedMember.bio}
              </p>
            </div>

            {/* Expertise */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                <Code className="w-5 h-5 inline mr-2 text-primary-500" />
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedMember.expertise.map((skill) => {
                  const Icon = expertiseIcons[skill] || Code;
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-xl font-medium"
                    >
                      <Icon className="w-4 h-4" />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                <Award className="w-5 h-5 inline mr-2 text-primary-500" />
                Certifications
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {selectedMember.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl border border-gray-200"
                  >
                    <Award className="w-5 h-5 text-primary-500" />
                    <span className="font-medium text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="w-full mt-6 px-4 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
