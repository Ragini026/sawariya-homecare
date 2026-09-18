'use client';

import React from 'react';
import Image from 'next/image';
import {
  HeartHandshake,
  Baby,
  Smile,
  Activity,
  Accessibility,
  Bed,
  Check,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/lib/data';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService?: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService, onBookService }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#22A06B]" />;
      case 'Baby':
        return <Baby className="w-5 h-5 text-[#2F6BFF]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#22A06B]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#2F6BFF]" />;
      case 'Accessibility':
        return <Accessibility className="w-5 h-5 text-[#22A06B]" />;
      case 'Bed':
        return <Bed className="w-5 h-5 text-[#2F6BFF]" />;
      default:
        return <Activity className="w-5 h-5 text-[#22A06B]" />;
    }
  };

  return (
    <section
      id="services"
      className="py-18 sm:py-24 lg:py-28 bg-[#071A35] text-white relative overflow-hidden"
    >
      {/* Subtle Healthcare Ambient Lighting & Background Line Art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Soft Blue & Green Ambient Glows */}
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#23439A]/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-[#22A06B]/15 rounded-full blur-3xl" />

        {/* Low-Opacity Medical Cross Pattern */}
        <svg
          className="absolute top-12 left-10 w-24 h-24 text-white/[0.03]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <rect x="42" y="15" width="16" height="70" rx="4" fill="currentColor" />
          <rect x="15" y="42" width="70" height="16" rx="4" fill="currentColor" />
        </svg>

        <svg
          className="absolute bottom-20 right-10 w-32 h-32 text-white/[0.03]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <rect x="42" y="15" width="16" height="70" rx="4" fill="currentColor" />
          <rect x="15" y="42" width="70" height="16" rx="4" fill="currentColor" />
        </svg>

        {/* Low-Opacity Heartbeat Vitals Line */}
        <svg
          className="absolute top-1/2 left-0 right-0 w-full h-20 text-white/[0.025]"
          viewBox="0 0 1200 80"
          fill="none"
          stroke="currentColor"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40 L300 40 L340 10 L360 70 L380 20 L400 40 L800 40 L840 10 L860 70 L880 20 L900 40 L1200 40"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-18">
          <div className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F7EF]/10 border border-[#22A06B]/30 text-[#4CAF7D] text-xs font-semibold uppercase tracking-wider">
            Comprehensive In-Home Care
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight leading-tight">
            Care for Every Stage of Life
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Dedicated in-home care support for seniors, newborns, recovering patients, and growing families across Raipur.
          </p>
        </div>

        {/* Service Grid — Dark Cards with Lighter Surface and Green/Blue Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-[#0B2545] rounded-2xl overflow-hidden border border-white/10 hover:border-[#22A06B]/60 hover:bg-[#0E2C52] shadow-xl hover:shadow-2xl hover:shadow-emerald-950/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
              id={`service-card-${service.id}`}
              onClick={() => onSelectService(service)}
            >
              {/* Service Card Image Banner */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-transparent to-black/30" />

                {/* Service Category Tag */}
                <div className="absolute top-3 right-3 bg-[#071A35]/90 backdrop-blur-xs text-[#4CAF7D] text-[11px] font-bold px-3 py-1 rounded-full border border-white/10 shadow-sm">
                  {service.category}
                </div>

                {/* Service Number Badge */}
                <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-xs text-white text-xs font-serif font-bold px-2.5 py-1 rounded-md border border-white/20">
                  {service.number}
                </div>
              </div>

              {/* Card Content Surface */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Service Icon and Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:border-[#22A06B]/50 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#4CAF7D] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Key Feature Bullets with Healthcare Green Checkmarks */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-[#22A06B] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Action Link */}
                <button
                  type="button"
                  id={`book-now-${service.id}`}
                  className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#4CAF7D] hover:text-emerald-300 group-hover:text-emerald-300 transition-colors cursor-pointer text-left focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    const el = document.getElementById('contact');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    if (onBookService) {
                      onBookService(service.title);
                    }
                  }}
                  aria-label={`Book Now for ${service.title}`}
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
