'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/lib/data';

function TestimonialCard({ item }: { item: (typeof TESTIMONIALS_DATA)[number] }) {
  const initials = item.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#22A06B]/40 transition-all duration-300 relative flex flex-col justify-between overflow-hidden h-full group">
      <div className="relative z-10 space-y-4">
        {/* Star Rating, Verified Badge & Small Quote Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[#F4B942]">
            {[...Array(item.rating || 5)].map((_, starI) => (
              <Star key={starI} className="w-4 h-4 fill-[#F4B942]" />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#22A06B] uppercase tracking-wider bg-[#E8F7EF] px-2.5 py-0.5 rounded-full border border-emerald-100">
              Verified Care
            </span>
            <Quote className="w-3.5 h-3.5 text-[#23439A]/40 fill-[#23439A]/10 shrink-0" />
          </div>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-sm sm:text-base font-serif font-normal text-slate-800 leading-relaxed italic line-clamp-4">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
      </div>

      {/* Reviewer Details with Initials Badge */}
      <div className="pt-4 mt-5 border-t border-slate-100 relative z-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EAF3FF] to-[#E8F7EF] border border-[#23439A]/20 text-[#23439A] font-bold text-xs flex items-center justify-center shrink-0">
          {initials}
        </div>
        <div>
          <h4 className="text-base font-serif font-semibold text-slate-900 leading-snug">
            {item.name}
          </h4>
          <p className="text-xs text-[#22A06B] font-medium">
            {item.relation}
          </p>
          <p className="text-[11px] text-slate-400">
            {item.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS_DATA.length;

  const scrollToSlide = (index: number, behavior: ScrollBehavior = 'smooth') => {
    if (mobileScrollRef.current) {
      isProgrammaticScroll.current = true;
      const targetLeft = index * mobileScrollRef.current.clientWidth;
      mobileScrollRef.current.scrollTo({
        left: targetLeft,
        behavior,
      });
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 500);
    }
  };

  const nextSlide = () => {
    const next = (startIndex + 1) % total;
    setStartIndex(next);
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = (startIndex - 1 + total) % total;
    setStartIndex(prev);
    scrollToSlide(prev);
  };

  const handleDotClick = (idx: number) => {
    setStartIndex(idx);
    scrollToSlide(idx);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => {
        const next = (prev + 1) % total;
        scrollToSlide(next);
        return next;
      });
    }, 7000);
    return () => clearInterval(timer);
  }, [total]);

  // Keep mobile scroll position aligned on resize
  useEffect(() => {
    const handleResize = () => {
      if (mobileScrollRef.current) {
        mobileScrollRef.current.scrollTo({
          left: startIndex * mobileScrollRef.current.clientWidth,
          behavior: 'auto',
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [startIndex]);

  const handleMobileScroll = () => {
    if (isProgrammaticScroll.current || !mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const itemWidth = container.clientWidth;
    if (itemWidth > 0) {
      const newIndex = Math.round(container.scrollLeft / itemWidth);
      if (newIndex >= 0 && newIndex < total && newIndex !== startIndex) {
        setStartIndex(newIndex);
      }
    }
  };

  const visibleTestimonials = [
    TESTIMONIALS_DATA[startIndex % total],
    TESTIMONIALS_DATA[(startIndex + 1) % total],
    TESTIMONIALS_DATA[(startIndex + 2) % total],
  ];

  return (
    <section
      id="testimonials"
      className="py-18 sm:py-24 lg:py-28 bg-[#F7FAFC] relative overflow-hidden border-b border-slate-200/70"
    >
      {/* Subtle Healthcare/Family Background Illustration Art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#E8F7EF]/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#EAF3FF]/50 rounded-full blur-3xl" />

        {/* Delicate Heart & Family Outline Motif */}
        <svg
          className="absolute top-12 right-12 w-64 h-64 text-[#22A06B]/[0.03]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M100 60 C80 30 40 40 40 80 C40 120 100 150 100 150 C100 150 160 120 160 80 C160 40 120 30 100 60 Z"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Heading and Single-Line Subtitle on Desktop */}
        <div className="text-center max-w-4xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F7EF] border border-[#22A06B]/30 text-[#22A06B] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#22A06B]" />
            Real Family Stories
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-tight">
            Families Trust Us With What Matters Most.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal pt-0.5 whitespace-normal lg:whitespace-nowrap">
            Heartfelt experiences and trusted words from the families we proudly care for across Raipur.
          </p>
        </div>

        {/* Testimonials Container with Left & Right Arrows Positioned Comfortably Outside Cards */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:-left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#22A06B] hover:bg-[#E8F7EF]/50 hover:border-[#22A06B]/40 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer focus:outline-hidden"
            aria-label="Previous testimonials"
            id="prev-testimonial-btn"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Mobile View: Horizontal Carousel with all 5 cards in 1 row */}
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex md:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
          >
            {TESTIMONIALS_DATA.map((item, idx) => (
              <div
                key={`mobile-${item.name}-${idx}`}
                className="w-full shrink-0 snap-center px-1"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          {/* Desktop/Tablet View: Grid showing 3 cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((item, idx) => (
              <div key={`desktop-${item.name}-${idx}`} className="h-full">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 lg:-right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#22A06B] hover:bg-[#E8F7EF]/50 hover:border-[#22A06B]/40 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer focus:outline-hidden"
            aria-label="Next testimonials"
            id="next-testimonial-btn"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                startIndex === idx ? 'w-8 bg-[#22A06B]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
