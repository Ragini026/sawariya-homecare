'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '@/lib/data';

export function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section
      id="faq"
      className="py-18 sm:py-24 lg:py-28 bg-[#F1FAF5] relative overflow-hidden border-b border-slate-200/70"
    >
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#E8F7EF] rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#EAF3FF] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Subtitle — Centered at Top */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F7EF] border border-[#22A06B]/30 text-[#22A06B] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#22A06B]" />
            Common Questions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#071A35] tracking-tight leading-tight">
            Frequently Asked{' '}
            <span className="text-[#23439A] italic font-serif">
              Questions
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Find answers regarding our home-care routines, caregiver verification, emergency protocols, and tailored family plans across Raipur.
          </p>
        </div>

        {/* Clean, Wide Accordion Container Centered on Page (900–1000px Max Width) */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 bg-white ${
                  isOpen
                    ? 'border-[#22A06B]/60 shadow-md ring-1 ring-[#22A06B]/20'
                    : 'border-slate-200/90 shadow-2xs hover:border-[#2F6BFF]/40 hover:shadow-xs'
                }`}
                id={`faq-item-${idx}`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="group w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif font-semibold text-[#071A35] hover:text-[#2F6BFF] transition-colors focus:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg pr-2 leading-snug">{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? 'bg-[#E8F7EF] text-[#22A06B]'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-[#EAF3FF] group-hover:text-[#2F6BFF]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F8FAFC]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
