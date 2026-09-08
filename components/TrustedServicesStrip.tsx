'use client';

import React from 'react';
import { Activity, HeartHandshake, Baby, Smile, Accessibility, Bed } from 'lucide-react';
import { TRUSTED_SERVICES_STRIP } from '@/lib/data';

interface TrustedServicesStripProps {
  onSelectService: (serviceId: string) => void;
}

export function TrustedServicesStrip({ onSelectService }: TrustedServicesStripProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#1D4ED8]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-emerald-600" />;
      case 'Baby':
        return <Baby className="w-5 h-5 text-rose-500" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-amber-500" />;
      case 'Accessibility':
        return <Accessibility className="w-5 h-5 text-cyan-600" />;
      case 'Bed':
        return <Bed className="w-5 h-5 text-indigo-600" />;
      default:
        return <Activity className="w-5 h-5 text-[#1D4ED8]" />;
    }
  };

  const getServiceId = (title: string) => {
    if (title.includes('Elder')) return 'senior-care';
    if (title.includes('Newborn')) return 'newborn-care';
    if (title.includes('Babysitting')) return 'babysitting';
    if (title.includes('Nursing')) return 'home-nursing';
    if (title.includes('Physiotherapy')) return 'physiotherapy';
    return 'medical-equipment';
  };

  return (
    <section className="bg-white py-8 border-b border-slate-200/80 shadow-xs" id="services-strip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading on the left, no additional text on top-right */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-[#0B2545] tracking-tight">
            Essential Care Delivered to Your Doorstep
          </h2>
        </div>

        {/* 6 Horizontal Service Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {TRUSTED_SERVICES_STRIP.map((item, idx) => {
            const serviceId = getServiceId(item.title);
            return (
              <div
                key={item.title}
                onClick={() => onSelectService(serviceId)}
                className="group relative flex flex-col items-start p-3.5 sm:p-4 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/90 hover:border-blue-300 transition-all duration-200 text-left cursor-pointer hover:shadow-xs"
                id={`strip-service-${idx}`}
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-slate-100 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors leading-snug line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 leading-tight">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
