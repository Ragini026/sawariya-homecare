'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, UserCheck, ShieldCheck, Home } from 'lucide-react';

interface AboutAndCareSectionProps {
  onOpenBooking?: () => void;
}

export function AboutAndCareSection({ onOpenBooking }: AboutAndCareSectionProps) {
  const trustPoints = [
    {
      title: 'Compassionate Care',
      desc: 'Empathetic, respectful care tailored to daily emotional and physical comfort.',
      icon: Heart,
      iconColor: 'text-rose-600',
      bgColor: 'bg-rose-50',
    },
    {
      title: 'Personalized Attention',
      desc: 'Custom care plans adapted precisely to your family’s routine and needs.',
      icon: UserCheck,
      iconColor: 'text-blue-900',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Reliable Support',
      desc: 'Verified, trained, and dependable caregivers available around the clock.',
      icon: ShieldCheck,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      title: 'Family-First Approach',
      desc: 'Treating your loved ones with the genuine warmth and dignity of our own family.',
      icon: Home,
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section
      id="about-and-care"
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE: Large warm lifestyle image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle aesthetic backdrop halo */}
              <div className="absolute -inset-3 rounded-3xl bg-blue-50/70 border border-blue-100/80 -z-10" />

              {/* Main Lifestyle Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
                  alt="Compassionate home healthcare caregiver holding hands with an elderly patient with warmth and empathy"
                  fill
                  className="object-cover object-center hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Editorial Storytelling (Who We Are, Why Choose Us) */}
          <div className="lg:col-span-7 space-y-6 pt-2 lg:pt-0">
            <div>
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-[1.15]">
                Care Built Around Your Family.
              </h2>

              {/* Short Paragraph Introducing Sawariya Home Care (Who We Are) */}
              <p className="text-base text-slate-600 font-normal pt-2">
                Compassionate in-home care, trained attendants, and dependable support delivered straight to your door.
              </p>
            </div>

            {/* Why Families Choose Us: 4 Trust Points */}
            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {trustPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5 hover:bg-slate-50 transition-colors"
                    >
                      <div
                        className={`w-9 h-9 rounded-lg ${point.bgColor} ${point.iconColor} flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {point.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
