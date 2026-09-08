'use client';

import React from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Clock, Shield, ArrowRight, Phone } from 'lucide-react';
import { ServiceItem, CONTACT_INFO } from '@/lib/data';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookNow: (serviceTitle: string) => void;
}

export function ServiceDetailModal({ service, onClose, onBookNow }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      id="service-detail-modal"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Hero Image & Close Button */}
        <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-slate-900 flex-shrink-0 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-black/30" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus:outline-hidden"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Title inside photo */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-200 bg-slate-900/80 px-2.5 py-1 rounded">
              {service.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-white mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-1">
              Service Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {service.fullDesc}
            </p>
          </div>

          {/* Detailed Features & Duties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3">
              Included Responsibilities & Support
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-800">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Options */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3">
              Available Duration & Shift Options
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.durationOptions.map((opt, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 text-xs font-semibold text-[#0B2545] border border-blue-200 flex items-center gap-1.5"
                >
                  <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  {opt}
                </span>
              ))}
            </div>
          </div>

          {/* Key Family Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3">
              Key Family Benefits
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {service.keyBenefits.map((b, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <a
            href={`tel:${CONTACT_INFO.phones[0].raw}`}
            className="text-xs font-bold text-slate-700 hover:text-[#1D4ED8] flex items-center gap-1.5 order-2 sm:order-1"
          >
            <Phone className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>Speak to Coordinator: {CONTACT_INFO.phones[0].display}</span>
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 bg-white hover:bg-slate-100 border border-slate-300 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow(service.title);
              }}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 shadow-md shadow-blue-900/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
