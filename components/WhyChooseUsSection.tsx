'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, ShieldCheck, UserCheck, Home } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onOpenBooking?: () => void;
}

export function WhyChooseUsSection({ onOpenBooking }: WhyChooseUsSectionProps) {
  const trustPoints = [
    {
      title: 'Compassionate Care',
      desc: 'Empathetic, respectful assistance prioritizing emotional comfort, personal dignity, and heartfelt warmth.',
      icon: Heart,
      iconColor: 'text-rose-600',
      bgColor: 'bg-rose-50',
    },
    {
      title: 'Trained & Verified Caregivers',
      desc: 'Thoroughly screened, background-checked nursing attendants and caregivers trained in safety and domestic etiquette.',
      icon: ShieldCheck,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      title: 'Personalized Support',
      desc: 'Individualized care routines tailored to your family’s schedule, medical requirements, and specific home habits.',
      icon: UserCheck,
      iconColor: 'text-blue-900',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Family-First & Reliable',
      desc: 'Punctual attendance, transparent daily communication with family members, and dedicated 24/7 coordinator support.',
      icon: Home,
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Side: Domestic Care Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle backdrop halo */}
              <div className="absolute -inset-3 rounded-3xl bg-blue-50/70 border border-blue-100/80 -z-10" />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
                  alt="Compassionate caregiver holding hands of a senior patient with warmth and kindness"
                  fill
                  className="object-cover object-center hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Heading & Four Feature Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6 pt-2 lg:pt-0">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-[1.15]">
                Why Choose <span className="text-blue-900 font-normal">Us</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal pt-2 leading-relaxed">
                Dedicated, compassionate, and dependable home-care support designed to bring peace of mind, safety, and dignity to your loved ones in Raipur.
              </p>
            </div>

            {/* Four Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {trustPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-start"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0 mb-3`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
