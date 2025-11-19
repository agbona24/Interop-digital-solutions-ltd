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
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    bio: "15+ years of experience leading digital transformation initiatives for Fortune 500 companies. Specialized in cloud architecture and enterprise solutions.",
    expertise: ["Cloud Architecture", "DevOps", "Enterprise Solutions"],
    certifications: ["AWS Certified Solutions Architect", "Azure Expert", "PMP"],
    linkedin: "#",
    email: "sarah.johnson@interopdigital.com",
    image: "SJ",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Michael Chen",
    role: "Lead Software Architect",
    bio: "Full-stack expert with a passion for building scalable applications. 12 years of experience in modern web technologies and microservices architecture.",
    expertise: ["Full-Stack Development", "Microservices", "System Design"],
    certifications: ["Google Cloud Professional", "Kubernetes CKA", "Scrum Master"],
    linkedin: "#",
    email: "michael.chen@interopdigital.com",
    image: "MC",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Cybersecurity Director",
    bio: "Cybersecurity specialist protecting enterprise systems from evolving threats. Expert in penetration testing and security compliance.",
    expertise: ["Penetration Testing", "Security Compliance", "Risk Management"],
    certifications: ["CISSP", "CEH", "ISO 27001 Lead Auditor"],
    linkedin: "#",
    email: "emily.rodriguez@interopdigital.com",
    image: "ER",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "David Park",
    role: "Data Analytics Lead",
    bio: "Data scientist turning complex data into actionable insights. 10 years of experience in machine learning and business intelligence.",
    expertise: ["Machine Learning", "Data Engineering", "Business Intelligence"],
    certifications: ["Google Data Engineer", "Tableau Expert", "IBM Data Science"],
    linkedin: "#",
    email: "david.park@interopdigital.com",
    image: "DP",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Jessica Martinez",
    role: "DevOps Manager",
    bio: "Infrastructure automation expert streamlining deployment pipelines. Passionate about CI/CD and infrastructure as code.",
    expertise: ["CI/CD", "Infrastructure as Code", "Container Orchestration"],
    certifications: ["Kubernetes Administrator", "Terraform Associate", "Jenkins Engineer"],
    linkedin: "#",
    email: "jessica.martinez@interopdigital.com",
    image: "JM",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Robert Thompson",
    role: "Solutions Consultant",
    bio: "Technical consultant helping clients achieve their digital goals. 8 years of experience in solution design and client relations.",
    expertise: ["Solution Design", "Client Relations", "Digital Strategy"],
    certifications: ["Salesforce Certified", "ITIL Foundation", "Six Sigma Green Belt"],
    linkedin: "#",
    email: "robert.thompson@interopdigital.com",
    image: "RT",
    color: "from-indigo-500 to-blue-500",
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
