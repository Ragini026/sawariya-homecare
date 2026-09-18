'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, UserCheck, ShieldCheck, Home } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onOpenBooking?: () => void;
}

export function WhyChooseUsSection({ onOpenBooking }: WhyChooseUsSectionProps) {
  const benefits = [
    {
      title: 'Compassionate Care',
      desc: 'Empathetic, respectful assistance prioritizing emotional comfort and dignity.',
      icon: Heart,
      iconColor: 'text-[#22A06B]',
      bgColor: 'bg-[#22A06B]/10 border-[#22A06B]/30',
    },
    {
      title: 'Personalized Attention',
      desc: 'Individualized care routines tailored to your family’s needs and schedule.',
      icon: UserCheck,
      iconColor: 'text-[#2F6BFF]',
      bgColor: 'bg-[#2F6BFF]/10 border-[#2F6BFF]/30',
    },
    {
      title: 'Reliable Support',
      desc: 'Thoroughly screened caregivers with dependable 24/7 coordinator support.',
      icon: ShieldCheck,
      iconColor: 'text-[#22A06B]',
      bgColor: 'bg-[#22A06B]/10 border-[#22A06B]/30',
    },
    {
      title: 'Family-First Approach',
      desc: 'Punctual care, transparent communication, and no hidden costs.',
      icon: Home,
      iconColor: 'text-[#2F6BFF]',
      bgColor: 'bg-[#2F6BFF]/10 border-[#2F6BFF]/30',
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-18 sm:py-24 lg:py-28 bg-[#071A35] text-white relative overflow-hidden"
    >
      {/* Subtle Abstract Healthcare Patterns in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#22A06B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#23439A]/15 rounded-full blur-3xl" />

        {/* Abstract Medical Cross and Care Circles */}
        <svg
          className="absolute -top-10 right-10 w-48 h-48 text-white/[0.03]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="50" cy="50" r="45" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="50" cy="50" r="30" strokeWidth="1" />
        </svg>

        <svg
          className="absolute bottom-10 left-10 w-40 h-40 text-white/[0.03]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <rect x="42" y="15" width="16" height="70" rx="4" fill="currentColor" />
          <rect x="15" y="42" width="70" height="16" rx="4" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Large Healthcare Photograph with Refined Dark Framing (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#22A06B]/20 to-[#23439A]/20 blur-xl -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 aspect-4/5 sm:aspect-3/4 lg:aspect-4/5 bg-slate-900">
                <Image
                  src="/images/why-choose-us.webp"
                  alt="Compassionate Indian caregiver supporting a senior patient with warmth and kindness"
                  fill
                  className="object-cover object-center hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/80 via-transparent to-transparent" />

                {/* Floating Micro Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#071A35]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/15 flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-lg bg-[#22A06B]/20 text-[#4CAF7D] flex items-center justify-center shrink-0 border border-[#22A06B]/40">
                    <Heart className="w-5 h-5 fill-[#22A06B]/30" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs">Heartfelt Attention</div>
                    <div className="text-slate-400 text-[11px]">Treating your family like our own</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Heading & Four Benefit Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-7 pt-2 lg:pt-0">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F7EF]/10 border border-[#22A06B]/30 text-[#4CAF7D] text-xs font-semibold uppercase tracking-wider">
                Why Choose Sawariya
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight leading-tight">
                Healthcare Excellence with a{' '}
                <span className="text-[#4CAF7D] font-normal italic font-serif">
                  Personal Touch.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-lg">
                Dedicated, compassionate home-care support bringing peace of mind, safety, and dignity to your loved ones.
              </p>
            </div>

            {/* Four Benefit Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#22A06B]/50 hover:bg-white/[0.09] shadow-sm transition-all duration-300 flex flex-col justify-start group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.iconColor} border flex items-center justify-center shrink-0 mb-3 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5 leading-snug group-hover:text-[#4CAF7D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
