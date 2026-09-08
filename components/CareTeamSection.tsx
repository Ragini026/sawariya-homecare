'use client';

import React from 'react';
import Image from 'next/image';

interface AboutUsSectionProps {
  onLearnMore?: () => void;
}

export function CareTeamSection({ onLearnMore }: AboutUsSectionProps) {
  const organizationalValues = [
    {
      title: 'Compassionate Care',
      desc: 'Delivering gentle, empathetic assistance that honors client dignity and emotional comfort at home.',
    },
    {
      title: 'Personalized Support',
      desc: 'Customizing care plans to align with each individual’s medical requirements and household habits.',
    },
    {
      title: 'Trusted & Reliable Service',
      desc: 'Ensuring punctual attendance, rigorous staff verification, and continuous supervisory oversight.',
    },
    {
      title: 'Family-Centered Approach',
      desc: 'Maintaining transparent communication with relatives to provide absolute daily peace of mind.',
    },
  ];

  return (
    <section id="about-us" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Director's Portrait and Minimal Info (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-16/11 sm:aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="Director, Sawariya Home Care"
                  fill
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              {/* Elegant & Minimal Director Info */}
              <div className="mt-4 text-center sm:text-left">
                <span className="text-[11px] font-semibold tracking-wider text-blue-900 uppercase bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  OUR DIRECTOR
                </span>
                <h3 className="text-lg font-serif font-bold text-slate-900 tracking-tight mt-1.5">
                  Director, Sawariya Home Care
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: About Sawariya Home Care & 4 Supporting Values (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-4xl font-serif font-light text-slate-900 tracking-tight leading-tight">
              Compassionate Care, <span className="text-blue-900 italic font-semibold font-serif">Built Around Your Family.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Sawariya Home Care was established to provide dependable healthcare support and genuine companionship directly in the comfort of your home. We bridge the gap between hospital-level assistance and everyday domestic life, ensuring your loved ones receive attentive, respectful care in familiar surroundings.
            </p>

            {/* 4 Supporting Approach Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {organizationalValues.map((item) => (
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

// Export AboutUsSection alias for clean semantic usage
export { CareTeamSection as AboutUsSection };
