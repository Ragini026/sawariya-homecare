'use client';

import React from 'react';
import Image from 'next/image';

interface CareTeamSectionProps {
  onLearnMore?: () => void;
}

export function CareTeamSection({ onLearnMore }: CareTeamSectionProps = {}) {
  return (
    <section
      id="about-us"
      className="py-18 sm:py-24 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Large Centered Heading & Centered Subtitle */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-tight">
            Leadership &amp; Guidance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Guiding our caregivers with medical rigor, accountability, and genuine family values.
          </p>
        </div>

        {/* Two Large Editorial Profile Cards Side-by-Side on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {/* Director 1: Prashant Suryavanshi */}
          <div
            id="director-profile-prashant"
            className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-md hover:shadow-xl hover:border-[#23439A]/40 transition-all duration-300 flex flex-col group min-h-[580px] lg:h-[610px]"
          >
            {/* Upper Portion: Large Director Image (~70% visual height) */}
            <div className="relative w-full h-[380px] sm:h-[400px] lg:h-[420px] bg-slate-100 shrink-0 overflow-hidden">
              <Image
                src="/images/prashant-suryavanshi.png"
                alt="Prashant Suryavanshi — Executive Director"
                fill
                className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                priority
              />
            </div>

            {/* Lower Portion: Clean White Content Area (Padding 32px–36px) */}
            <div className="p-8 sm:p-9 flex-1 flex flex-col justify-center space-y-2.5 bg-white">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#23439A] bg-[#EAF3FF] px-3 py-1 rounded-md border border-blue-100">
                  EXECUTIVE DIRECTOR
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                Prashant Suryavanshi
              </h3>
              <p className="text-sm sm:text-base font-semibold text-[#22A06B]">
                Director, Sawariya Home Care
              </p>
            </div>
          </div>

          {/* Director 2: Madhu Suryavanshi */}
          <div
            id="director-profile-madhu"
            className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-md hover:shadow-xl hover:border-[#22A06B]/40 transition-all duration-300 flex flex-col group min-h-[580px] lg:h-[610px]"
          >
            {/* Upper Portion: Large Director Image (~70% visual height) */}
            <div className="relative w-full h-[380px] sm:h-[400px] lg:h-[420px] bg-slate-100 shrink-0 overflow-hidden">
              <Image
                src="/images/madhu-suryavanshi.png"
                alt="Madhu Suryavanshi — Operations & Care Director"
                fill
                className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
              />
            </div>

            {/* Lower Portion: Clean White Content Area (Padding 32px–36px) */}
            <div className="p-8 sm:p-9 flex-1 flex flex-col justify-center space-y-2.5 bg-white">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#22A06B] bg-[#E8F7EF] px-3 py-1 rounded-md border border-emerald-100">
                  OPERATIONS &amp; CARE DIRECTOR
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                Madhu Suryavanshi
              </h3>
              <p className="text-sm sm:text-base font-semibold text-[#23439A]">
                Director, Sawariya Home Care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
