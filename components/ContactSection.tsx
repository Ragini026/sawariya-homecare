'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, SERVICES_DATA } from '@/lib/data';

interface ContactSectionProps {
  initialService?: string;
}

export function ContactSection({ initialService = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: initialService || 'Senior Citizen / Elder Care',
    preferredDuration: '12-Hour Day Shift',
    message: '',
  });

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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Real Contact Information & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl font-serif font-light text-slate-900 tracking-tight leading-snug">
                Let’s Talk About Your Care Needs.
              </h2>
              <p className="text-base text-slate-600 font-normal pt-1">
                Our care advisors are available 24/7 to coordinate dependable home care for your family.
              </p>
            </div>

            {/* Unified Contact Information Area */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-blue-900" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Address</p>
                  <p className="text-sm font-medium text-slate-800 leading-relaxed">
                    Near Vyanktesh Hospital, Kamal Vihar, Sector 6, Sector 8 A, Raipur, Chhattisgarh 492015
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-blue-900" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-blue-900 transition-colors block"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-blue-900" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</p>
                  <div className="space-y-1">
                    {CONTACT_INFO.phones.map((phone, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <a
                          href={`tel:${phone.raw}`}
                          className="text-base font-bold text-slate-900 hover:text-blue-900 transition-colors"
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

          {/* Right Column: Premium Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/90 shadow-md">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B2545]">Inquiry Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>.
                    Our care coordination team has received your request for{' '}
                    <span className="font-semibold text-[#1D4ED8]">{formData.serviceRequired}</span>{' '}
                    and will call you back on{' '}
                    <span className="font-semibold text-slate-900">{formData.phone}</span> shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${CONTACT_INFO.phones[0].raw}`}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#1e40af] transition-colors"
                    >
                      Call Now for Immediate Assistance
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
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
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all"
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
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all"
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
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all bg-white"
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
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                      >
                        {durationOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="block text-xs font-bold text-slate-700 mb-1.5"
                    >
                      Message / Specific Requirements
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={3}
                      placeholder="Please mention any special condition, language preference, or preferred start date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-bold text-white bg-blue-900 hover:bg-blue-800 active:scale-[0.99] transition-all duration-200 text-sm shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                      id="inquiry-submit-btn"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Your privacy is protected. We will never share your contact details.
                    </p>
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
