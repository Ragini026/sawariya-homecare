'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/lib/data';

function TestimonialCard({ item }: { item: (typeof TESTIMONIALS_DATA)[number] }) {
  return (
    <div className="bg-gradient-to-br from-blue-50/40 via-white to-slate-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between overflow-hidden h-full">
      <div className="relative z-10 space-y-4">
        {/* Star Rating, 5.0 Badge & Subtle Elegant Quote Icon in Upper-Right */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(item.rating || 5)].map((_, starI) => (
              <Star key={starI} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100/90 px-2.5 py-0.5 rounded-full">
              5.0 Verified
            </span>
            <Quote className="w-4 h-4 text-blue-900/40 fill-blue-900/10 shrink-0" />
          </div>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-sm sm:text-base font-serif font-normal text-slate-800 leading-relaxed italic line-clamp-4">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
      </div>

      {/* Reviewer Details */}
      <div className="pt-4 mt-5 border-t border-slate-200/70 relative z-10">
        <h4 className="text-base font-serif font-semibold text-slate-900">
          {item.name}
        </h4>
        <p className="text-xs text-blue-900 font-medium mt-0.5">
          {item.relation}
        </p>
        <p className="text-[11px] text-slate-400 mt-0.5">
          {item.location}
        </p>
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

  // Display 3 cards starting from startIndex for desktop/tablet
  const visibleTestimonials = [
    TESTIMONIALS_DATA[startIndex % total],
    TESTIMONIALS_DATA[(startIndex + 1) % total],
    TESTIMONIALS_DATA[(startIndex + 2) % total],
  ];

  return (
    <section id="testimonials" className="py-14 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading and Subheading - both fit on one line on desktop */}
        <div className="text-center max-w-5xl mx-auto space-y-2 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-slate-900 tracking-tight whitespace-normal lg:whitespace-nowrap">
            Families Trust Us With What Matters Most
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal pt-0.5 whitespace-normal lg:whitespace-nowrap">
            Heartfelt experiences and trusted words from the families we proudly care for.
          </p>
        </div>

        {/* Testimonials Container with Left & Right Arrows */}
        <div className="relative max-w-7xl mx-auto px-7 sm:px-10 lg:px-14">
          {/* Left Navigation Arrow - Vertically Centered */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-0 lg:-left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:text-blue-900 hover:bg-blue-50/80 hover:border-blue-300 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer focus:outline-hidden"
            aria-label="Previous testimonials"
            id="prev-testimonial-btn"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Mobile View: Horizontal Carousel with all 5 cards in 1 row, 1 card visible at a time with swipe/scroll */}
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex md:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
          >
            {TESTIMONIALS_DATA.map((item, idx) => (
              <div
                key={`mobile-${item.name}-${idx}`}
                className="w-full shrink-0 snap-center px-0.5"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          {/* Desktop/Tablet View: Grid showing visible sliding window */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((item, idx) => (
              <div key={`desktop-${item.name}-${idx}`} className="h-full">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow - Vertically Centered */}
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-0 lg:-right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:text-blue-900 hover:bg-blue-50/80 hover:border-blue-300 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer focus:outline-hidden"
            aria-label="Next testimonials"
            id="next-testimonial-btn"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                startIndex === idx ? 'w-8 bg-blue-900' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
