'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Heart, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/data';

interface ServiceEnquiryCtaProps {
  onRequestCare?: () => void;
}

export function ServiceEnquiryCta({ onRequestCare }: ServiceEnquiryCtaProps) {
  const handleScrollToContact = () => {
    if (onRequestCare) {
      onRequestCare();
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="service-cta"
      className="bg-[#071A35] text-white py-20 sm:py-24 lg:py-28 relative overflow-hidden border-t border-white/10"
    >
      {/* Subtle Blue + Green Gradient Glows and Healthcare Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[520px] h-[520px] bg-[#22A06B]/15 rounded-full blur-3xl" />
        <div className="absolute top-0 right-10 w-[480px] h-[480px] bg-[#23439A]/20 rounded-full blur-3xl" />

        {/* Delicate Vitals Pulse Across Bottom */}
        <svg
          className="absolute bottom-4 left-0 right-0 w-full h-16 text-white/[0.04]"
          viewBox="0 0 1200 60"
          fill="none"
          stroke="currentColor"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30 L400 30 L420 10 L435 50 L450 15 L465 40 L480 30 L1200 30"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Supporting Text, and Scroll CTA */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-[#4CAF7D] text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#22A06B]" />
              Dedicated Home Healthcare
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight leading-tight">
                Care That Comes{' '}
                <span className="text-[#4CAF7D] italic font-serif">
                  Home.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-200 font-normal max-w-xl leading-relaxed">
                Compassionate, dependable support for your loved ones right in the comfort, familiarity, and safety of home. Let our clinical team tailor the ideal care routine today.
              </p>
            </div>

            {/* Single Primary Action Button + Direct Helpline Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-[#22A06B] hover:bg-[#1B8356] active:scale-[0.98] shadow-xl shadow-emerald-950/40 transition-all duration-200 text-base cursor-pointer group"
                id="cta-request-care-btn"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="ml-2 w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CONTACT_INFO.phones[0].raw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] text-sm font-semibold text-slate-200 hover:text-white transition-all"
                id="cta-direct-call-link"
              >
                <PhoneCall className="w-4 h-4 text-[#4CAF7D]" />
                <span>Or Call: {CONTACT_INFO.phones[0].display}</span>
              </a>
            </div>

            {/* Micro Trust Proofs */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22A06B]" />
                <span>Police &amp; Medical Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#2F6BFF]" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Healthcare Visual Partially Integrated with Soft Edge Gradients */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group">
              <Image
                src="/images/home-nursing.webp"
                alt="Caregiver providing medical support to patient at home"
                fill
                className="object-cover object-center brightness-90 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A35] via-[#071A35]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071A35]/60 via-transparent to-[#071A35]/40" />

              {/* Central Floating Care Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#071A35]/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22A06B] text-white flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">24/7 Home Care in Raipur</div>
                  <div className="text-slate-300 text-xs">Immediate Same-Day Onboarding Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
