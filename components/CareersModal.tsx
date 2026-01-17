"use client";

import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Check, Briefcase, Upload, Mail } from "lucide-react";

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ApplicationData {
  position: string;
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  resume: File | null;
  coverLetter: string;
}

export default function CareersModal({ isOpen, onClose }: CareersModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<ApplicationData>({
    position: "",
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: null,
    coverLetter: "",
  });

  const totalSteps = 3;

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Lagos, Nigeria / Remote",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      type: "Full-time",
      location: "Lagos, Nigeria / Remote",
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
    },
    {
      title: "Product Manager",
      department: "Product",
      type: "Full-time",
      location: "Lagos, Nigeria",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time / Contract",
      location: "Remote",
    },
    {
      title: "Cloud Solutions Architect",
      department: "Infrastructure",
      type: "Full-time",
      location: "Lagos, Nigeria / Remote",
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      type: "Full-time",
      location: "Lagos, Nigeria",
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      type: "Full-time",
      location: "Lagos, Nigeria",
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, resume: file });
    }
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

    try {
      // Note: File upload is not fully implemented in this simple JSON handler.
      // We send the filename so the admin knows a file was selected.
      const payload = {
        formType: "careers",
        ...formData,
        resume: undefined, // Don't send the File object
        resumeFileName: formData.resume ? formData.resume.name : "No file selected",
      };

      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setStep(1);
          setFormData({
            position: "",
            name: "",
            email: "",
            phone: "",
            linkedin: "",
            resume: null,
            coverLetter: "",
          });
          onClose();
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Application error:", error);
      alert("Error submitting application. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.position !== "";
      case 2:
        return formData.name && formData.email && formData.phone;
      case 3:
        return formData.resume !== null;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary-700 to-secondary-600 px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {isSuccess ? "Application Submitted!" : "Join Our Team"}
            </h2>
            {!isSuccess && (
              <p className="text-blue-100 text-sm">
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
              className="bg-gradient-to-r from-secondary-700 to-secondary-600 h-full transition-all duration-300"
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
                Thank You for Applying!
              </h3>
              <p className="text-gray-600 mb-4">
                We&apos;ve received your application for <span className="font-semibold text-secondary-700">{formData.position}</span>. Our team will review it and get back to you within 5-7 business days.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-50 rounded-full text-secondary-700">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Confirmation email sent</span>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1: Select Position */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="text-center mb-6">
                    <Briefcase className="w-12 h-12 text-secondary-700 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Select a Position
                    </h3>
                    <p className="text-gray-600">
                      Choose the role that best matches your skills and interests
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {openPositions.map((position, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setFormData({ ...formData, position: position.title })
                        }
                        className={`text-left p-4 rounded-xl border-2 transition-all ${formData.position === position.title
                            ? "border-secondary-600 bg-secondary-50"
                            : "border-gray-200 hover:border-secondary-300"
                          }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1">{position.title}</h4>
                            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                              <span className="px-2 py-0.5 bg-gray-100 rounded">
                                {position.department}
                              </span>
                              <span className="px-2 py-0.5 bg-gray-100 rounded">
                                {position.type}
                              </span>
                              <span className="px-2 py-0.5 bg-gray-100 rounded">
                                📍 {position.location}
                              </span>
                            </div>
                          </div>
                          {formData.position === position.title && (
                            <Check className="w-6 h-6 text-secondary-600 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      👋 Tell Us About Yourself
                    </h3>
                    <p className="text-gray-600">
                      Applying for: <span className="font-semibold text-secondary-700">{formData.position}</span>
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-600 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-600 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-600 focus:border-transparent"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn Profile (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) =>
                        setFormData({ ...formData, linkedin: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-600 focus:border-transparent"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Resume & Cover Letter */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      📄 Submit Your Application
                    </h3>
                    <p className="text-gray-600">
                      Upload your resume and tell us why you&apos;re a great fit
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resume / CV *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className={`flex items-center justify-center gap-3 w-full px-4 py-8 border-2 border-dashed rounded-lg cursor-pointer transition-all ${formData.resume
                            ? "border-secondary-600 bg-secondary-50"
                            : "border-gray-300 hover:border-secondary-400 bg-gray-50"
                          }`}
                      >
                        <Upload className="w-6 h-6 text-gray-400" />
                        <div className="text-center">
                          {formData.resume ? (
                            <>
                              <p className="text-sm font-medium text-secondary-700">
                                {formData.resume.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                Click to change file
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="text-sm font-medium text-gray-700">
                                Click to upload or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                PDF, DOC, or DOCX (max 5MB)
                              </p>
                            </>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter / Why You? (Optional)
                    </label>
                    <textarea
                      value={formData.coverLetter}
                      onChange={(e) =>
                        setFormData({ ...formData, coverLetter: e.target.value })
                      }
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-600 focus:border-transparent"
                      placeholder="Tell us about your experience, skills, and why you're excited about this role..."
                    />
                  </div>

                  <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-secondary-900 mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      What happens next?
                    </h4>
                    <ul className="space-y-2 text-sm text-secondary-800">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary-600 mt-0.5 flex-shrink-0" />
                        <span>Our hiring team will review your application within 5-7 business days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary-600 mt-0.5 flex-shrink-0" />
                        <span>Qualified candidates will be contacted for an initial screening</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary-600 mt-0.5 flex-shrink-0" />
                        <span>You&apos;ll receive updates via email throughout the process</span>
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
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${step === 1
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
                className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${isStepValid()
                    ? "bg-gradient-to-r from-secondary-700 to-secondary-600 text-white hover:shadow-lg hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${isStepValid() && !isSubmitting
                    ? "bg-gradient-to-r from-secondary-700 to-secondary-600 text-white hover:shadow-lg hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
