'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, SERVICES_DATA } from '@/lib/data';

interface ContactSectionProps {
  initialService?: string;
}

export function ContactSection({ initialService = '' }: ContactSectionProps) {
  const [prevInitialService, setPrevInitialService] = useState(initialService);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: initialService || 'Senior Citizen / Elder Care',
    preferredDuration: '12-Hour Day Shift',
    message: '',
  });

  if (initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    if (initialService) {
      const matched = SERVICES_DATA.find(
        (s) =>
          s.title.toLowerCase() === initialService.toLowerCase() ||
          s.title.toLowerCase().includes(initialService.toLowerCase()) ||
          initialService.toLowerCase().includes(s.title.toLowerCase())
      );
      setFormData((prev) => ({
        ...prev,
        serviceRequired: matched ? matched.title : initialService,
      }));
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const durationOptions = [
    '12-Hour Day Shift (Morning to Evening)',
    '12-Hour Night Shift (Evening to Morning)',
    '24-Hour Live-in Attendant',
    'Hourly / Flexible Visits',
    'Post-Surgery / Short Term Recovery (1-2 Weeks)',
    'Medical Equipment Rental Only',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceRequired: 'Senior Citizen / Elder Care',
      preferredDuration: '12-Hour Day Shift',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="py-18 sm:py-24 lg:py-28 bg-[#F7FAFC] border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#E8F7EF]/60 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#EAF3FF]/70 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Unified Contact Information with Green Icons & Healthcare Line Art (5 cols) */}
          <div className="lg:col-span-5 space-y-6 relative">
            {/* Subtle Line-Art Healthcare/Home Illustration Behind Left Side */}
            <div className="absolute -top-10 -left-10 w-80 h-80 pointer-events-none select-none opacity-40 -z-10" aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full text-[#22A06B]/15">
                <circle cx="100" cy="100" r="90" strokeWidth="1.5" strokeDasharray="4 6" />
                <circle cx="100" cy="100" r="65" strokeWidth="1" />
                <path d="M70 120 L100 90 L130 120" strokeWidth="2" strokeLinecap="round" />
                <rect x="85" y="120" width="30" height="30" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F7EF] border border-[#22A06B]/30 text-[#22A06B] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#22A06B]" />
                Get In Touch
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-tight">
                Let’s Talk About Your{' '}
                <span className="text-[#23439A] italic font-serif">
                  Care Needs.
                </span>
              </h2>
              <p className="text-base text-slate-600 font-normal leading-relaxed">
                Our care coordinators are available 24/7 to answer questions and match verified attendants for your loved ones.
              </p>
            </div>

            {/* ONE Unified Contact Information Card with Healthcare Green Icons */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-xs space-y-6 relative overflow-hidden">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F7EF] text-[#22A06B] flex items-center justify-center shrink-0 mt-0.5 border border-[#22A06B]/20">
                  <MapPin className="w-5 h-5 text-[#22A06B]" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</p>
                  <p className="text-sm font-medium text-slate-800 leading-relaxed">
                    Near Vyanktesh Hospital, Kamal Vihar, Sector 6, Sector 8 A, Raipur, Chhattisgarh 492015
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F7EF] text-[#22A06B] flex items-center justify-center shrink-0 mt-0.5 border border-[#22A06B]/20">
                  <Mail className="w-5 h-5 text-[#22A06B]" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-[#23439A] transition-colors block"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F7EF] text-[#22A06B] flex items-center justify-center shrink-0 mt-0.5 border border-[#22A06B]/20">
                  <Phone className="w-5 h-5 text-[#22A06B]" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Support</p>
                  <div className="space-y-1">
                    {CONTACT_INFO.phones.map((phone, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <a
                          href={`tel:${phone.raw}`}
                          className="text-base font-bold text-slate-900 hover:text-[#23439A] transition-colors"
                          id={`contact-phone-${idx}`}
                        >
                          {phone.display}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Existing Consultation Form with Blue Primary Actions (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-10 rounded-2xl border border-slate-200/90 shadow-md">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E8F7EF] text-[#22A06B] flex items-center justify-center mx-auto border border-[#22A06B]/30">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#071A35]">Inquiry Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>.
                    Our care coordination team has received your request for{' '}
                    <span className="font-semibold text-[#23439A]">{formData.serviceRequired}</span>{' '}
                    and will call you back on{' '}
                    <span className="font-semibold text-slate-900">{formData.phone}</span> shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${CONTACT_INFO.phones[0].raw}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#23439A] hover:bg-[#1C367C] transition-colors"
                    >
                      Call Now for Immediate Assistance
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="care-inquiry-form">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-light text-slate-900 mb-1">
                      Request a Caregiver Consultation
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out this quick form and our coordinator will guide you on suitable care options.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="inquiry-full-name"
                        className="block text-xs font-bold text-slate-700 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="inquiry-full-name"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#23439A] focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="inquiry-phone"
                        className="block text-xs font-bold text-slate-700 mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#23439A] focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div>
                      <label
                        htmlFor="inquiry-service"
                        className="block text-xs font-bold text-slate-700 mb-1.5"
                      >
                        Service Required *
                      </label>
                      <select
                        id="inquiry-service"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#23439A] focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Care Duration */}
                    <div>
                      <label
                        htmlFor="inquiry-duration"
                        className="block text-xs font-bold text-slate-700 mb-1.5"
                      >
                        Preferred Care Duration *
                      </label>
                      <select
                        id="inquiry-duration"
                        value={formData.preferredDuration}
                        onChange={(e) => setFormData({ ...formData, preferredDuration: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#23439A] focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                      >
                        {durationOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label
                      htmlFor="inquiry-notes"
                      className="block text-xs font-bold text-slate-700 mb-1.5"
                    >
                      Specific Patient Condition / Notes
                    </label>
                    <textarea
                      id="inquiry-notes"
                      rows={3}
                      placeholder="Any specific mobility needs, medication schedules, or preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#23439A] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button (Blue Primary Action) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#23439A] hover:bg-[#1C367C] active:scale-[0.99] transition-all duration-200 shadow-md shadow-blue-900/20 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 text-sm sm:text-base"
                      id="inquiry-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Caregiver Consultation</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy / Security Notice */}
                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#22A06B]" />
                    <span>Your details are completely confidential. No spam guaranteed.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
