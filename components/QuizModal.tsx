"use client";

import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Calendar, Check } from "lucide-react";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuizData {
  // Contact Info
  name: string;
  email: string;
  phone: string;
  company: string;

  // Quiz Questions
  services: string[];
  timeline: string;
  budget: string;
  projectType: string;

  // Appointment
  appointmentDate: string;
  appointmentTime: string;
  message: string;
}

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<QuizData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    timeline: "",
    budget: "",
    projectType: "",
    appointmentDate: "",
    appointmentTime: "",
    message: "",
  });

  const totalSteps = 4;

  const serviceOptions = [
    "API Development",
    "UI/UX Design",
    "Cloud Solutions",
    "Cybersecurity",
    "AI & Machine Learning",
    "Database Management",
    "IoT Solutions",
    "Digital Transformation",
  ];

  const timelineOptions = [
    "Urgent (Within 1 month)",
    "Short-term (1-3 months)",
    "Medium-term (3-6 months)",
    "Long-term (6+ months)",
    "Just exploring",
  ];

  const budgetOptions = [
    "Under ₦500,000",
    "₦500,000 - ₦2,000,000",
    "₦2,000,000 - ₦5,000,000",
    "₦5,000,000 - ₦10,000,000",
    "₦10,000,000+",
    "Not sure yet",
  ];

  const projectTypeOptions = [
    "New Project",
    "Enhancement to Existing System",
    "Maintenance & Support",
    "Consultation",
    "Training",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
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
        services: [],
        timeline: "",
        budget: "",
        projectType: "",
        appointmentDate: "",
        appointmentTime: "",
        message: "",
      });
      onClose();
    }, 3000);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.phone && formData.company;
      case 2:
        return formData.services.length > 0 && formData.projectType;
      case 3:
        return formData.timeline && formData.budget;
      case 4:
        return formData.appointmentDate && formData.appointmentTime;
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
              {isSuccess ? "Success!" : "Get Started"}
            </h2>
            {!isSuccess && (
              <p className="text-primary-100 text-sm">
                Step {step} of {totalSteps}
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
                Appointment Booked!
              </h3>
              <p className="text-gray-600">
                We've received your request and will send you a confirmation email shortly.
              </p>
            </div>
          ) : (
            <>
              {/* Step 1: Contact Information */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Let's get to know you
                  </h3>

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
                      Phone Number *
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
                      Company Name *
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

              {/* Step 2: Services & Project Type */}
              {step === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      What services do you need?
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Select all that apply
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-3 rounded-lg border-2 text-left transition-all ${
                            formData.services.includes(service)
                              ? "border-primary-500 bg-primary-50 text-primary-700"
                              : "border-gray-300 hover:border-primary-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{service}</span>
                            {formData.services.includes(service) && (
                              <Check className="w-5 h-5 text-primary-500" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Project Type
                    </h3>
                    <div className="space-y-2">
                      {projectTypeOptions.map((type) => (
                        <button
                          key={type}
                          onClick={() =>
                            setFormData({ ...formData, projectType: type })
                          }
                          className={`w-full px-4 py-3 rounded-lg border-2 text-left transition-all ${
                            formData.projectType === type
                              ? "border-primary-500 bg-primary-50 text-primary-700"
                              : "border-gray-300 hover:border-primary-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{type}</span>
                            {formData.projectType === type && (
                              <Check className="w-5 h-5 text-primary-500" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Timeline & Budget */}
              {step === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      What's your timeline?
                    </h3>
                    <div className="space-y-2">
                      {timelineOptions.map((timeline) => (
                        <button
                          key={timeline}
                          onClick={() =>
                            setFormData({ ...formData, timeline })
                          }
                          className={`w-full px-4 py-3 rounded-lg border-2 text-left transition-all ${
                            formData.timeline === timeline
                              ? "border-primary-500 bg-primary-50 text-primary-700"
                              : "border-gray-300 hover:border-primary-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{timeline}</span>
                            {formData.timeline === timeline && (
                              <Check className="w-5 h-5 text-primary-500" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      What's your budget range?
                    </h3>
                    <div className="space-y-2">
                      {budgetOptions.map((budget) => (
                        <button
                          key={budget}
                          onClick={() => setFormData({ ...formData, budget })}
                          className={`w-full px-4 py-3 rounded-lg border-2 text-left transition-all ${
                            formData.budget === budget
                              ? "border-primary-500 bg-primary-50 text-primary-700"
                              : "border-gray-300 hover:border-primary-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{budget}</span>
                            {formData.budget === budget && (
                              <Check className="w-5 h-5 text-primary-500" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Book Appointment */}
              {step === 4 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="text-center mb-6">
                    <Calendar className="w-16 h-16 text-primary-500 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Book Your Consultation
                    </h3>
                    <p className="text-gray-600">
                      Choose a date and time that works for you
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.appointmentDate}
                      onChange={(e) =>
                        setFormData({ ...formData, appointmentDate: e.target.value })
                      }
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() =>
                            setFormData({ ...formData, appointmentTime: time })
                          }
                          className={`px-4 py-2 rounded-lg border-2 transition-all ${
                            formData.appointmentTime === time
                              ? "border-primary-500 bg-primary-50 text-primary-700"
                              : "border-gray-300 hover:border-primary-300"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us more about your project..."
                    />
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
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  isStepValid() && !isSubmitting
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Book Appointment"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
