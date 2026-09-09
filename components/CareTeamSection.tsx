'use client';

import React from 'react';
import Image from 'next/image';

interface AboutUsSectionProps {
  onLearnMore?: () => void;
}

export function CareTeamSection({ onLearnMore }: AboutUsSectionProps) {
  return (
    <section
      id="about-us"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Centered About Us Heading & Description (At the TOP) */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 lg:mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider">
            About Sawariya Home Care
          </div>

          <h2
            id="about-us-heading"
            className="text-2xl sm:text-3xl lg:text-[34px] xl:text-4xl font-serif font-light text-slate-900 tracking-tight leading-tight"
          >
            Compassionate Care,{' '}
            <span className="text-blue-900 italic font-semibold font-serif">
              Built Around Your Family.
            </span>
          </h2>

          <p
            id="about-us-description"
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Sawariya Home Care was established to provide dependable healthcare support and genuine companionship directly in the comfort of your home. We bridge the gap between hospital-level assistance and everyday domestic life, ensuring your loved ones receive attentive, respectful care in familiar surroundings.
          </p>
        </div>

        {/* 2. Director Profiles Area (BELOW Heading and Description) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Director Profile 1 — Prashant Suryavanshi */}
          <div
            id="director-profile-prashant"
            className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md hover:border-blue-200"
          >
            <div className="relative w-full aspect-4/3 sm:aspect-16/11 overflow-hidden bg-slate-100">
              <Image
                src="/images/prashant-suryavanshi.png"
                alt="Prashant Suryavanshi — Director, Sawariya Home Care"
                fill
                className="object-cover object-top"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 520px"
                priority
              />
            </div>

            <div className="p-6 sm:p-7">
              <span className="inline-block text-[11px] font-semibold tracking-wider text-blue-900 uppercase bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 mb-2.5">
                Executive Director
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
                Prashant Suryavanshi
              </h3>
              <p className="text-sm font-semibold text-blue-900 mt-1">
                Director, Sawariya Home Care
              </p>
            </div>
          </div>

          {/* Director Profile 2 — Madhu Suryavanshi */}
          <div
            id="director-profile-madhu"
            className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md hover:border-blue-200"
          >
            <div className="relative w-full aspect-4/3 sm:aspect-16/11 overflow-hidden bg-slate-100">
              <Image
                src="/images/madhu-suryavanshi.png"
                alt="Madhu Suryavanshi — Director, Sawariya Home Care"
                fill
              className="object-cover"
                style={{ objectPosition: "center -15%" }}
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 520px"
                priority
              />
            </div>

            <div className="p-6 sm:p-7">
              <span className="inline-block text-[11px] font-semibold tracking-wider text-blue-900 uppercase bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 mb-2.5">
                Operations & Care Director
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
                Madhu Suryavanshi
              </h3>
              <p className="text-sm font-semibold text-blue-900 mt-1">
                Director, Sawariya Home Care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export AboutUsSection alias for clean semantic usage
export { CareTeamSection as AboutUsSection };
