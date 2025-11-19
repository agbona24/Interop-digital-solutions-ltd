"use client";

import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, Briefcase, Check, ChevronLeft, ChevronRight } from "lucide-react";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function AppointmentBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const services = [
    "Software Development Consultation",
    "Cloud Migration Strategy",
    "IT Infrastructure Assessment",
    "Cybersecurity Audit",
    "Digital Transformation Planning",
    "General Inquiry",
  ];

  const timeSlots: TimeSlot[] = [
    { time: "09:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "12:00 PM", available: true },
    { time: "02:00 PM", available: true },
    { time: "03:00 PM", available: true },
    { time: "04:00 PM", available: false },
    { time: "05:00 PM", available: true },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    const today = new Date();
    const prev = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    if (prev >= new Date(today.getFullYear(), today.getMonth())) {
      setCurrentMonth(prev);
    }
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0 || date.getDay() === 6; // Disable weekends
  };

  const handleDateSelect = (day: number) => {
    if (isDateDisabled(day)) return;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsBooked(true);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isBooked) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="bg-green-50 border-2 border-green-500 rounded-3xl p-12 animate-scale-in">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Appointment Confirmed!</h3>
          <p className="text-lg text-gray-600 mb-2">
            Your consultation is scheduled for:
          </p>
          <p className="text-xl font-bold text-primary-600 mb-1">{formatDate(selectedDate)}</p>
          <p className="text-xl font-bold text-primary-600 mb-6">{selectedTime}</p>
          <p className="text-gray-600 mb-8">
            We&apos;ve sent a confirmation email to <span className="font-semibold">{formData.email}</span>
          </p>
          <button
            onClick={() => {
              setIsBooked(false);
              setStep(1);
              setSelectedDate(null);
              setSelectedTime("");
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                message: "",
              });
            }}
            className="bg-primary-500 text-white px-8 py-3 rounded-xl hover:bg-primary-600 transition-colors"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center gap-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                  step >= s
                    ? "bg-primary-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-16 h-1 mx-2 transition-all ${
                    step > s ? "bg-primary-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Date & Time Selection */}
      {step === 1 && (
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          {/* Calendar */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Select Date</h3>
              <Calendar className="w-6 h-6 text-primary-500" />
            </div>

            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h4 className="text-lg font-semibold">
                {currentMonth.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </h4>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold text-gray-600 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: startingDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const disabled = isDateDisabled(day);
                const isSelected =
                  selectedDate?.getDate() === day &&
                  selectedDate?.getMonth() === currentMonth.getMonth();

                return (
                  <button
                    key={day}
                    onClick={() => handleDateSelect(day)}
                    disabled={disabled}
                    className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                      disabled
                        ? "text-gray-300 cursor-not-allowed"
                        : isSelected
                        ? "bg-primary-500 text-white scale-110"
                        : "hover:bg-primary-50 text-gray-700 hover-scale"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <p className="text-sm text-gray-500 mt-4">
              * Weekends are unavailable
            </p>
          </div>

          {/* Time Slots */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Select Time</h3>
              <Clock className="w-6 h-6 text-primary-500" />
            </div>

            {selectedDate ? (
              <>
                <p className="text-sm text-gray-600 mb-6">
                  {formatDate(selectedDate)}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      className={`py-3 px-4 rounded-xl font-medium transition-all ${
                        !slot.available
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : selectedTime === slot.time
                          ? "bg-primary-500 text-white scale-105"
                          : "bg-primary-50 text-primary-700 hover:bg-primary-100 hover-scale"
                      }`}
                    >
                      {slot.time}
                      {!slot.available && (
                        <span className="block text-xs mt-1">Booked</span>
                      )}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Please select a date first</p>
              </div>
            )}

            {selectedDate && selectedTime && (
              <button
                onClick={() => setStep(2)}
                className="w-full mt-8 bg-primary-500 text-white py-4 rounded-xl font-semibold hover:bg-primary-600 transition-all hover-lift btn-ripple"
              >
                Continue to Details
              </button>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Contact Information */}
      {step === 2 && (
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h3>

            <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your project or any specific requirements..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-500 text-white py-4 rounded-xl font-semibold hover:bg-primary-600 transition-all hover-lift btn-ripple"
                >
                  Review Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Confirm Your Appointment</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Appointment Details</h4>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary-500" />
                    <span className="font-medium">{formatDate(selectedDate)}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary-500" />
                    <span className="font-medium">{selectedTime}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary-500" />
                    <span className="font-medium">{formData.service}</span>
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Name:</span> {formData.name}</p>
                  <p><span className="font-medium">Email:</span> {formData.email}</p>
                  <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                  {formData.company && (
                    <p><span className="font-medium">Company:</span> {formData.company}</p>
                  )}
                  {formData.message && (
                    <p><span className="font-medium">Notes:</span> {formData.message}</p>
                  )}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={isSubmitting}
                  className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-300 transition-all disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary-500 text-white py-4 rounded-xl font-semibold hover:bg-primary-600 transition-all hover-lift btn-ripple disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Booking...
                    </>
                  ) : (
                    "Confirm Appointment"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
