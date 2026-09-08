'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Phone, MessageCircle, Calendar, Clock, ShieldCheck, Send } from 'lucide-react';
import { CONTACT_INFO, SERVICES_DATA } from '@/lib/data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function BookingModal({ isOpen, onClose, defaultService }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState(
    defaultService || 'Senior Citizen / Elder Care'
  );
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [duration, setDuration] = useState('12-Hour Day Shift');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFullName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      id="booking-modal"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#0B2545] text-white p-6 relative flex-shrink-0">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-hidden"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pr-8">
            <span className="text-[10px] uppercase font-bold text-sky-300 tracking-[0.2em]">
              Sawariya Care Coordination
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-light text-white mt-0.5">
              Book a Dedicated Caregiver
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Personalized home care assistance for your loved ones.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-serif font-semibold text-slate-900">Request Confirmed!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{fullName}</span>. Our team
                will call you on <span className="font-bold text-slate-900">{phone}</span> within
                the next 30 minutes to discuss details and match your caregiver.
              </p>

              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href={`tel:${CONTACT_INFO.phones[0].raw}`}
                  className="py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Directly for Immediate Need</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Care Service *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#1D4ED8] bg-white"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Options */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Care Schedule Preference *
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#1D4ED8] bg-white"
                >
                  <option value="12-Hour Day Shift">12-Hour Day Shift (Daytime Assistance)</option>
                  <option value="12-Hour Night Shift">12-Hour Night Shift (Night Supervision)</option>
                  <option value="24-Hour Live-in">24-Hour Live-in Attendant</option>
                  <option value="Hourly Visits">Hourly / Flexible Short Visits</option>
                  <option value="Post-Op Recovery">Post-Surgery / Recovery Package</option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#1D4ED8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#1D4ED8]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Special Notes / Preferred Start Date
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Starting next Monday, needs mobility assistance..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#1D4ED8]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-white bg-blue-900 hover:bg-blue-800 transition-colors text-sm shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm & Request Caregiver</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct call alternative */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Or speak to our coordinator right now:</span>
                <a
                  href={`tel:${CONTACT_INFO.phones[0].raw}`}
                  className="font-bold text-[#1D4ED8] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  {CONTACT_INFO.phones[0].display}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
