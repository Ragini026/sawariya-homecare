'use client';

import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  value: string;
  targetNumber?: number;
  accent?: string;
  unit?: string;
  label: string;
}

const STATS_DATA: StatItem[] = [
  {
    value: '1,200',
    targetNumber: 1200,
    accent: '+',
    label: 'Customers Served',
  },
  {
    value: '1,300',
    targetNumber: 1300,
    accent: '+',
    label: 'Caregivers',
  },
  {
    value: '4',
    accent: '+',
    unit: 'Years',
    label: 'Experience',
  },
  {
    value: '24',
    accent: '/',
    unit: '7',
    label: 'Care Support',
  },
];

export function StatisticsStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
  });
  const hasTriggered = useRef(false);

  useEffect(() => {
    // Respect reduced motion accessibility preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      const id = requestAnimationFrame(() => {
        setCounts({ 0: 1200, 1: 1300 });
      });
      return () => cancelAnimationFrame(id);
    }

    const currentSection = sectionRef.current;
    if (!currentSection) return;

    let animFrameId: number;

    const startCounterAnimation = () => {
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth ease-out cubic curve: rapidly rises then smoothly lands on final target
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const current0 = Math.min(Math.round(1200 * easeProgress), 1200);
        const current1 = Math.min(Math.round(1300 * easeProgress), 1300);

        setCounts({
          0: current0,
          1: current1,
        });

        if (progress < 1) {
          animFrameId = requestAnimationFrame(animate);
        } else {
          setCounts({ 0: 1200, 1: 1300 });
        }
      };

      animFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          observer.disconnect();
          startCounterAnimation();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px',
      }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="statistics-strip"
      aria-label="Sawariya Home Care Key Statistics"
      className="relative w-full bg-gradient-to-r from-[#1C1917] via-[#292524] to-[#1C1917] border-t border-[#F87808]/25 border-b border-white/10 overflow-hidden shadow-md"
    >
      {/* Subtle brand ambient accents for depth */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(248,120,8,0.12),transparent)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F87808]/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-9 lg:py-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
          {STATS_DATA.map((stat, idx) => {
            // Mobile: 2x2 grid with cross dividers
            // Desktop: 4 columns with subtle vertical dividers between items
            let borderClasses = '';
            if (idx === 0) {
              borderClasses = 'border-r border-b lg:border-b-0 border-white/15';
            } else if (idx === 1) {
              borderClasses = 'border-b lg:border-b-0 lg:border-r border-white/15';
            } else if (idx === 2) {
              borderClasses = 'border-r border-white/15';
            } else {
              borderClasses = '';
            }

            // Determine display value: animated counter formatted with commas for stats 0 & 1, static for others
            const displayValue =
              stat.targetNumber !== undefined
                ? (counts[idx] ?? 0).toLocaleString('en-US')
                : stat.value;

            return (
              <div
                key={stat.label}
                id={`stat-block-${idx + 1}`}
                className={`flex flex-col items-center justify-center text-center px-2 sm:px-6 py-4 sm:py-6 ${borderClasses}`}
              >
                {/* Large Bold Number with Subtle Orange Accent */}
                <div className="flex items-baseline justify-center select-none whitespace-nowrap">
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none drop-shadow-xs">
                    {displayValue}
                  </span>
                  {stat.accent && (
                    <span className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#F87808] ml-0.5 leading-none">
                      {stat.accent}
                    </span>
                  )}
                  {stat.unit && (
                    <span
                      className={`font-extrabold text-white leading-none ${
                        stat.unit === '7'
                          ? 'text-2xl sm:text-4xl lg:text-5xl'
                          : 'text-sm sm:text-2xl lg:text-3xl font-bold ml-1 text-white/95'
                      }`}
                    >
                      {stat.unit}
                    </span>
                  )}
                </div>

                {/* Uppercase Label */}
                <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs lg:text-sm font-semibold tracking-wider uppercase text-slate-300/90 max-w-[150px] sm:max-w-none leading-snug">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
