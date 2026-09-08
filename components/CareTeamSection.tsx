'use client';

import React from 'react';
import Image from 'next/image';

interface CareTeamSectionProps {
  onLearnMore?: () => void;
}

export function CareTeamSection({ onLearnMore }: CareTeamSectionProps) {
  const teamCommitments = [
    {
      title: 'Respectful Demeanor',
      desc: 'Treating elders and family spaces with dignity, patience, and politeness.',
    },
    {
      title: 'Attentive Daily Presence',
      desc: 'Focused care without distractions, observing subtle changes in client comfort.',
    },
    {
      title: 'Family Privacy Honored',
      desc: 'Seamlessly adapting to your domestic routine and respecting household preferences.',
    },
    {
      title: 'Clear Communication',
      desc: 'Transparent daily updates keeping family members informed and reassured.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Realistic Photography of Care Team (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-16/11 sm:aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional, compassionate home-care nurses and caregivers in clean blue uniform scrubs smiling warmly in domestic environment"
                  fill
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Heading & Text (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-4xl font-serif font-light text-slate-900 tracking-tight leading-tight">
              Caring People. <span className="text-blue-900 italic font-semibold font-serif">Dependable Support.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Our caregivers provide respectful, compassionate, and dependable support for your loved ones.
            </p>

            {/* 4 Team Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {teamCommitments.map((item) => (
                <div key={item.title} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
