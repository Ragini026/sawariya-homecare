'use client';

import React from 'react';
import {
  StepNeedsIllustration,
  StepMatchingIllustration,
  StepCareInHomeIllustration,
} from './HealthcareIllustrations';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Tell Us Your Needs',
      description:
        'Share your family’s specific care requirements, routine schedules, and any medical considerations through a quick consultation call.',
      illustration: <StepNeedsIllustration className="w-full h-40 max-w-[200px] mx-auto" />,
      highlight: 'Free Care Assessment',
    },
    {
      number: '02',
      title: 'We Find the Right Care',
      description:
        'We match you with a verified, experienced caregiver, nurse, or physiotherapist whose skills and temperament best fit your loved one.',
      illustration: <StepMatchingIllustration className="w-full h-40 max-w-[200px] mx-auto" />,
      highlight: 'Police & Credential Verified',
    },
    {
      number: '03',
      title: 'Care Begins at Home',
      description:
        'Your dedicated caregiver arrives on schedule. Our clinical team maintains ongoing check-ins to ensure complete comfort and peace of mind.',
      illustration: <StepCareInHomeIllustration className="w-full h-40 max-w-[200px] mx-auto" />,
      highlight: 'Continuous Care Supervision',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-18 sm:py-24 lg:py-28 bg-[#F1FAF5] relative overflow-hidden border-b border-slate-200/70"
    >
      {/* Background Soft Healthcare Line Patterns */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#E8F7EF]/80 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#EAF3FF]/80 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#22A06B]/30 text-[#22A06B] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#22A06B]" />
            Clear, Transparent Process
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-tight">
            How In-Home Care Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            From your first call to ongoing support, our three-step onboarding ensures safety, transparency, and personal care.
          </p>
        </div>

        {/* Visual Steps Container with Connecting Path */}
        <div className="relative">
          {/* Thin Blue/Green Connecting Path on Desktop */}
          <div
            className="hidden lg:block absolute top-1/3 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#22A06B]/30 via-[#23439A]/30 to-[#22A06B]/30 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl border border-slate-200/80 p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#22A06B]/50 transition-all duration-300 flex flex-col justify-between group"
                id={`how-it-works-step-${step.number}`}
              >
                <div>
                  {/* Step Header: Number in Green & Highlight Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#22A06B] tracking-tight">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-bold text-[#23439A] bg-[#EAF3FF] px-2.5 py-1 rounded-full border border-blue-100">
                      {step.highlight}
                    </span>
                  </div>

                  {/* 2D Editorial Healthcare Illustration */}
                  <div className="my-5 flex items-center justify-center">
                    {step.illustration}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#23439A] transition-colors mb-2.5">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
