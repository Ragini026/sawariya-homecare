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
      className="py-18 sm:py-24 lg:py-28 bg-[#FFFCF8] relative overflow-hidden border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Eyebrow Badge, Large Centered Heading & Centered Subtitle */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F87808]/30 text-[#C2410C] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#F87808]" />
            Dedicated Leadership
          </div>

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
            className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-md hover:shadow-xl hover:border-[#F87808]/40 transition-all duration-300 flex flex-col group h-full"
          >
            {/* Upper Portion: Large Director Image (~70% visual height) */}
            <div className="relative w-full h-[360px] sm:h-[390px] lg:h-[410px] bg-slate-100 shrink-0 overflow-hidden">
              <Image
                src="/images/prashant-suryavanshi.png"
                alt="Prashant Suryavanshi — Director, Sawariya Home Care"
                fill
                className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                priority
              />
            </div>

            {/* Lower Portion: Well-Proportioned Content Area */}
            <div className="py-5 px-6 sm:py-6 sm:px-8 flex-1 flex flex-col justify-center space-y-1 sm:space-y-1.5 bg-white">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                Prashant Suryavanshi
              </h3>
              <p className="text-sm sm:text-base font-semibold text-[#C2410C]">
                Director, Sawariya Home Care
              </p>
            </div>
          </div>

          {/* Director 2: Madhu Suryavanshi */}
          <div
            id="director-profile-madhu"
            className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-md hover:shadow-xl hover:border-[#F87808]/40 transition-all duration-300 flex flex-col group h-full"
          >
            {/* Upper Portion: Large Director Image (~70% visual height) */}
            <div className="relative w-full h-[360px] sm:h-[390px] lg:h-[410px] bg-slate-100 shrink-0 overflow-hidden">
              <Image
                src="/images/madhu-suryavanshi.png"
                alt="Madhu Suryavanshi — Founder, Sawariya Home Care"
                fill
                className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
              />
            </div>

            {/* Lower Portion: Well-Proportioned Content Area */}
            <div className="py-5 px-6 sm:py-6 sm:px-8 flex-1 flex flex-col justify-center space-y-1 sm:space-y-1.5 bg-white">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                Madhu Suryavanshi
              </h3>
              <p className="text-sm sm:text-base font-semibold text-[#F87808]">
                Founder, Sawariya Home Care
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                4+ Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
