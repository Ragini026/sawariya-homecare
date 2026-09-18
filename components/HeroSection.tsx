'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps = {}) {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[720px] min-h-[100dvh] flex items-center overflow-hidden bg-[#071A35] text-white"
    >
      {/* 1. Large High-Quality Indian Healthcare Photograph Covering the ENTIRE Hero Viewport */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-homecare.jpg"
          alt="Professional Indian home caregiver providing attentive, compassionate care to an elderly Indian patient at home"
          fill
          priority
          className="object-cover object-[70%_center] lg:object-[72%_center] brightness-[0.92] contrast-[1.02]"
          referrerPolicy="no-referrer"
          sizes="100vw"
        />
      </div>

      {/* 2. Cinematic Dark Navy Gradient Overlays for Impeccable Typography Legibility */}
      {/* Horizontal Gradient: Deep Navy on left -> Translucent towards right to reveal photography */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 sm:via-[#071A35]/80 to-[#071A35]/30 lg:to-[#071A35]/20 z-10"
        aria-hidden="true"
      />
      {/* Vertical Gradients: Smooth top edge for navbar blending and bottom edge for section transition */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#071A35]/70 via-transparent to-[#071A35] z-10"
        aria-hidden="true"
      />

      {/* 3. Subtle Healthcare Visual Elements (Green Glow, Thin Medical Line Art, Care Circles) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
        {/* Soft Healthcare Green Glow */}
        <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-[#22A06B]/15 rounded-full blur-3xl" />
        {/* Soft Blue Secondary Glow */}
        <div className="absolute -top-20 left-10 w-[360px] h-[360px] bg-[#23439A]/20 rounded-full blur-3xl" />

        {/* Thin Medical-Inspired Care Circle Patterns */}
        <svg
          className="absolute -top-12 -left-12 w-[340px] h-[340px] text-white/[0.04] hidden sm:block"
          viewBox="0 0 300 300"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <circle cx="150" cy="150" r="140" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="150" cy="150" r="100" strokeWidth="1" />
          <circle cx="150" cy="150" r="60" strokeWidth="1" strokeDasharray="2 4" />
        </svg>

        {/* Subtle Healthcare Vitals / Heartbeat Line Across Lower Hero */}
        <svg
          className="absolute bottom-6 left-0 right-0 w-full h-14 text-white/[0.07]"
          viewBox="0 0 1200 60"
          fill="none"
          stroke="currentColor"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 30 Q 180 30 320 30 C 350 30 365 14 375 4 C 382 54 391 10 398 56 C 405 20 415 30 440 30 Q 800 30 1200 30"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* 4. Left-Positioned Hero Content with Generous Spacing & Cinematic Typography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-16 pb-12 sm:pb-16">
        <div className="max-w-2xl lg:max-w-xl space-y-8">
          {/* Raipur Location Trust Indicator */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#22A06B] animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-wide uppercase">
              Raipur’s Trusted Home Care Service
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-[1.12]">
              Trusted Care,{' '}
              <span className="text-[#4CAF7D] font-normal italic font-serif">
                Right at Home.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-lg">
              Compassionate and reliable home-care support for senior citizens, newborns, babies, and families — delivering peace of mind, safety, and dignity right to your door in Raipur.
            </p>
          </div>

          {/* Core Statistics / Trust Figures (NO CTA button as strictly requested) */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/15">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                15k+
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Families Served
              </div>
            </div>

            <div className="space-y-1 border-x border-white/15 px-3 sm:px-6">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2F6BFF] tracking-tight">
                24/7
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Dedicated Support
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#4CAF7D] tracking-tight">
                100%
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Care Focused
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
