'use client';

import React from 'react';
import { ClipboardList, Users, Home } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Tell Us Your Needs',
      description: 'Share the type of care and support your family requires.',
      icon: ClipboardList,
    },
    {
      number: '02',
      title: 'We Find the Right Care',
      description: 'Our team understands your requirements and helps you choose the right care support.',
      icon: Users,
    },
    {
      number: '03',
      title: 'Care Begins at Home',
      description: 'Receive dependable care and support in a familiar and comfortable environment.',
      icon: Home,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading without Eyebrow */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal pt-2">
            Getting trusted and compassionate care for your loved ones is simple, supportive, and transparent.
          </p>
        </div>

        {/* 3-Step Process: Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-10 left-[16%] right-[16%] h-px bg-slate-200 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center group"
                  id={`step-${step.number}`}
                >
                  {/* Step Number & Icon Circle */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-900 group-hover:bg-blue-100 transition-colors shadow-2xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -top-2.5 -right-2.5 px-2.5 py-0.5 rounded-full bg-blue-900 text-white text-[11px] font-serif font-bold shadow-xs">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xs font-normal">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
