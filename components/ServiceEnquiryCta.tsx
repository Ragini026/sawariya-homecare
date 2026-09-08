'use client';

import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Heart, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/data';
import { PeacockFeatherDecorative } from './SawariyaLogo';

interface ServiceEnquiryCtaProps {
  onRequestCare: () => void;
}

export function ServiceEnquiryCta({ onRequestCare }: ServiceEnquiryCtaProps) {
  return (
    <section className="bg-[#0B2545] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative Peacock Accent Backgrounds */}
      <div className="absolute -top-16 -right-16 w-80 h-80 opacity-20 pointer-events-none">
        <PeacockFeatherDecorative className="w-full h-full text-sky-400" />
      </div>
      <div className="absolute -bottom-16 -left-16 w-72 h-72 opacity-15 pointer-events-none">
        <PeacockFeatherDecorative className="w-full h-full text-teal-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight leading-tight">
            Your Loved Ones Deserve <span className="text-blue-200 italic font-semibold font-serif">Thoughtful Care.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal">
            Tell us what kind of support you are looking for and our team will help you find the right care solution.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestCare}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-blue-950 bg-white hover:bg-slate-50 active:scale-[0.98] shadow-xl shadow-black/20 transition-all duration-200 text-base cursor-pointer"
              id="cta-request-care-btn"
            >
              <span>Request Care</span>
              <ArrowRight className="ml-2 w-4 h-4 text-blue-900" />
            </button>

            <a
              href={`tel:${CONTACT_INFO.phones[0].raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-blue-900/80 hover:bg-blue-800 border border-blue-700/60 shadow-sm transition-all duration-200 text-base"
              id="cta-call-us-btn"
            >
              <Phone className="mr-2 w-4 h-4 text-blue-200" />
              <span>Call Us: {CONTACT_INFO.phones[0].display}</span>
            </a>
          </div>

          {/* Quick Helplines row */}
          <div className="pt-6 border-t border-blue-900/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>Immediate Same-Day Response</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>No Long-Term Lock-in Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>Transparent & Family-First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
