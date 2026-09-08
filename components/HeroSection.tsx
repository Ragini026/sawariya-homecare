'use client';

import React from 'react';
import Image from 'next/image';
import { PeacockFeatherDecorative } from './SawariyaLogo';

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50/50 min-h-[75vh] lg:min-h-[82vh] flex items-center py-14 sm:py-16 lg:py-20 border-b border-slate-200/70"
    >
      {/* Refined Ambient Healthcare-Inspired Decorative Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft radial glow top right */}
        <div className="absolute -top-24 right-0 w-[580px] h-[580px] bg-gradient-to-bl from-blue-200/25 via-blue-100/10 to-transparent rounded-full blur-3xl" />
        {/* Soft radial glow bottom left */}
        <div className="absolute -bottom-24 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-sky-200/20 via-blue-50/10 to-transparent rounded-full blur-3xl" />

        {/* Delicate Concentric Care / Protection Circles (left side behind stats/copy) */}
        <svg
          className="absolute top-1/2 -left-16 -translate-y-1/2 w-[420px] h-[420px] text-blue-900/[0.04] hidden sm:block"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="180" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="200" cy="200" r="140" strokeWidth="1" />
          <circle cx="200" cy="200" r="95" strokeWidth="1" strokeDasharray="4 6" />
        </svg>

        {/* Elegant Botanical Olive/Care Leaf Sprig (Top Right Background) */}
        <svg
          className="absolute -top-4 right-6 sm:right-12 w-64 h-64 sm:w-80 sm:h-80 text-blue-900/[0.06]"
          viewBox="0 0 240 240"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M40 210 C80 160 120 100 190 35" strokeWidth="1.25" strokeLinecap="round" />
          <path d="M80 165 C68 145 84 135 96 148 C88 158 80 165 80 165Z" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
          <path d="M105 138 C122 126 132 138 118 150 C110 144 105 138 105 138Z" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
          <path d="M128 108 C116 88 136 78 145 94 C136 102 128 108 128 108Z" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
          <path d="M150 80 C166 66 178 78 162 90 C155 85 150 80 150 80Z" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
          <path d="M174 52 C168 34 184 26 192 40 C184 46 174 52 174 52Z" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
          <path d="M190 35 C198 22 210 26 204 38 C198 38 190 35 190 35Z" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
        </svg>

        {/* Subtle Healthcare Care-Pulse Flow Line Across Bottom Background */}
        <svg
          className="absolute bottom-2 left-0 right-0 w-full h-16 text-blue-900/[0.05]"
          viewBox="0 0 1200 80"
          fill="none"
          stroke="currentColor"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 40 Q 200 40 360 40 C 400 40 415 22 425 8 C 433 68 443 14 452 74 C 460 32 470 40 500 40 Q 800 40 1000 40 T 1200 40"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Delicate Peacock-Feather-Inspired Accents */}
        <div className="absolute top-2 right-2 w-96 h-96 opacity-15 transform rotate-12">
          <PeacockFeatherDecorative className="w-full h-full text-blue-600/30" />
        </div>
        <div className="absolute -bottom-16 -left-16 w-80 h-80 opacity-10 transform -rotate-45">
          <PeacockFeatherDecorative className="w-full h-full text-teal-600/25" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headlines, Trust Stats & CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-slate-900 tracking-tight leading-[1.12]">
                Trusted Care, <span className="text-blue-900 font-normal italic">Right at Home.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl leading-relaxed">
                Compassionate and reliable home-care support for senior citizens, newborns, babies, and families — delivering peace of mind, safety, and dignity right to your door in Raipur.
              </p>
            </div>

            {/* Core Statistics / Trust Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-2 border-y border-slate-200/80">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900">15k+</div>
                <div className="text-xs text-slate-500 font-medium">Families Served</div>
              </div>
              <div className="space-y-1 border-x border-slate-200/80 px-3 sm:px-6">
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-blue-900">24/7</div>
                <div className="text-xs text-slate-500 font-medium">Dedicated Support</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-emerald-700">100%</div>
                <div className="text-xs text-slate-500 font-medium">Care Focused</div>
              </div>
            </div>
          </div>

          {/* Right Column: Warm Realistic Domestic Photography with Dual-Layer Framing (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer soft ambient aura for depth */}
              <div className="absolute -inset-4 rounded-3xl bg-radial from-blue-400/20 via-sky-300/10 to-teal-400/0 blur-2xl -z-20" />

              {/* Layered subtle angled background frame */}
              <div className="absolute -inset-1.5 sm:-inset-2 rounded-3xl bg-gradient-to-tr from-blue-100/60 via-sky-50/40 to-teal-50/40 -rotate-1 border border-blue-100/80 -z-10 transition-transform duration-500" />

              {/* Main Image Container with Refined Framing */}
              <div className="relative rounded-3xl p-2 bg-white/95 shadow-2xl shadow-blue-950/10 ring-1 ring-slate-200/80">
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-16/11 lg:aspect-4/3">
                  <Image
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                    alt="Attentive female caregiver assisting a smiling senior grandmother in a comfortable home environment"
                    fill
                    priority
                    className="object-cover object-center"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
