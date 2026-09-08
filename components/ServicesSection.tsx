'use client';

import React from 'react';
import Image from 'next/image';
import { SERVICES_DATA, ServiceItem } from '@/lib/data';
import { HeartHandshake, Baby, Smile, Activity, Accessibility, Bed, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService?: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-emerald-600" />;
      case 'Baby':
        return <Baby className="w-5 h-5 text-rose-500" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-amber-500" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#1D4ED8]" />;
      case 'Accessibility':
        return <Accessibility className="w-5 h-5 text-cyan-600" />;
      case 'Bed':
        return <Bed className="w-5 h-5 text-indigo-600" />;
      default:
        return <Activity className="w-5 h-5 text-[#1D4ED8]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Center-aligned */}
        <div className="text-center max-w-4xl mx-auto space-y-2 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight">
            Care for Every Stage of Life
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal pt-1">
            Dedicated in-home care support for seniors, newborns, recovering patients, and growing families.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid (3-column desktop, 2-column tablet, 1-column mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-900/50 shadow-xs hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col cursor-pointer"
              id={`service-card-${service.id}`}
              onClick={() => onSelectService(service)}
            >
              {/* Card Image Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Service Number Badge */}
                <div className="absolute top-3 left-3 bg-blue-950/90 backdrop-blur-xs text-white text-xs font-serif font-bold px-2.5 py-1 rounded-md border border-white/20">
                  {service.number}
                </div>

                {/* Service Category Pill */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-blue-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs border border-slate-100">
                  {service.category}
                </div>
              </div>

              {/* Card Content without action buttons */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Service Icon and Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:bg-blue-100 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
