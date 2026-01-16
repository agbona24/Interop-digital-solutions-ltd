"use client";

import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Check, Sparkles, Mail } from "lucide-react";

interface ProductInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

interface InquiryData {
  name: string;
  email: string;
  phone: string;
  company: string;
  interests: string[];
  message: string;
}

export default function ProductInquiryModal({ isOpen, onClose, productName }: ProductInquiryModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<InquiryData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    interests: [],
    message: "",
  });

  const totalSteps = 3;

  const interestOptions: Record<string, string[]> = {
    "Process Automation Platform": [
      "Workflow Automation",
      "System Integration",
      "Custom Rule Engine",
      "API Connectivity",
      "Real-time Monitoring",
      "Pricing & Licensing",
    ],
    "Payment Gateway Solution": [
      "Payment Processing",
      "Multi-Currency Support",
      "Fraud Detection",
      "Integration Options",
      "Security & Compliance",
      "Pricing & Transaction Fees",
    ],
    "Commerce Platform": [
      "E-commerce Features",
      "Inventory Management",
      "Order Processing",
      "Multi-channel Integration",
      "Analytics & Reporting",
      "Pricing & Plans",
    ],
    "Geo Services Platform": [
      "GPS Tracking",
      "Route Optimization",
      "Geofencing",
      "Location Analytics",
      "API Integration",
      "Pricing & Usage Limits",
    ],
    "Microsoft Office 365": [
      "Licensing Options",
      "Migration Services",
      "User Training",
      "Security Features",
      "Integration Support",
      "Pricing Information",
    ],
    "Microsoft SQL Server": [
      "Database Setup",
      "Performance Tuning",
      "Backup & Recovery",
      "Security Configuration",
      "Licensing Options",
      "Migration Services",
    ],
    "Microsoft Windows Server": [
      "Server Configuration",
      "Active Directory Setup",
      "Azure Integration",
      "Security Hardening",
      "Licensing Information",
      "Support & Maintenance",
    ],
    "Microsoft Remote Desktop Service": [
      "RDS Setup",
      "User Access Management",
      "Security Configuration",
      "Performance Optimization",
      "Licensing Details",
      "Support Services",
    ],
    "HP ProLiant Hardware Server": [
      "Hardware Specifications",
      "Configuration Options",
      "Warranty & Support",
      "Deployment Services",
      "Pricing Information",
      "Maintenance Plans",
    ],
    "Cisco Fire Power Firewall": [
      "Security Features",
      "Implementation Services",
      "Configuration & Setup",
      "Threat Management",
      "Licensing Options",
      "Support & Training",
    ],
    "Fortinet Next-Generation Firewall": [
      "Security Capabilities",
      "SD-WAN Integration",
      "Implementation Services",
      "Performance Specs",
      "Licensing Information",
      "Training & Support",
    ],
  };

  const currentInterests = interestOptions[productName] || [
    "Features & Capabilities",
    "Pricing Information",
    "Implementation Timeline",
    "Integration Options",
    "Support & Training",
    "Demo Request",
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setStep(1);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        interests: [],
        message: "",
      });
      onClose();
    }, 3000);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return formData.interests.length > 0;
      case 3:
        return true; // Message is optional
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {isSuccess ? "Request Sent!" : `Learn More`}
            </h2>
            {!isSuccess && (
              <p className="text-primary-100 text-sm">
                {productName} - Step {step} of {totalSteps}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSuccess && (
          <div className="bg-gray-200 h-2">
            <div
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                We&apos;ve Got Your Request!
              </h3>
              <p className="text-gray-600 mb-4">
                Our product specialists will reach out to you within 24 hours with detailed information about {productName}.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Check your email for confirmation</span>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1: Contact Information */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="text-center mb-6">
                    <Sparkles className="w-12 h-12 text-primary-500 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      👋 Great Choice!
                    </h3>
                    <p className="text-gray-600">
                      Let&apos;s connect so we can send you detailed information about <span className="font-semibold text-primary-600">{productName}</span>
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Areas of Interest */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      🎯 What would you like to know more about?
                    </h3>
                    <p className="text-gray-600">
                      Select all that apply so we can provide you with the most relevant information
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentInterests.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-4 py-3 rounded-lg border-2 text-left transition-all ${
                          formData.interests.includes(interest)
                            ? "border-primary-500 bg-primary-50 text-primary-700"
                            : "border-gray-300 hover:border-primary-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{interest}</span>
                          {formData.interests.includes(interest) && (
                            <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Additional Message */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      💬 Anything else we should know?
                    </h3>
                    <p className="text-gray-600">
                      Share any specific questions or requirements you have (optional)
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Example: We're looking to automate our current manual processes and would like to understand implementation timeline and costs..."
                    />
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-900 mb-2 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      What happens next?
                    </h4>
                    <ul className="space-y-2 text-sm text-primary-800">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span>You&apos;ll receive a confirmation email within minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span>Our product specialist will reach out within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span>We&apos;ll provide detailed documentation and arrange a demo if you&apos;d like</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!isSuccess && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                step === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            {step < totalSteps ? (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
                  isStepValid()
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  !isSubmitting
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
