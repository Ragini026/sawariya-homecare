'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/lib/data';

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const total = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total);
    }, 7000);
    return () => clearInterval(timer);
  }, [total]);

  // Display 3 cards starting from startIndex
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

        {/* Testimonials 3-Card Carousel Container with Farther Outward Left & Right Arrows */}
        <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
          {/* Left Navigation Arrow - Far Outward Left, Vertically Centered */}
          <button
            onClick={prevSlide}
            className="absolute -left-1 sm:left-0 lg:-left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:text-blue-900 hover:bg-blue-50/80 hover:border-blue-300 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer focus:outline-hidden"
            aria-label="Previous testimonials"
            id="prev-testimonial-btn"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 3 Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="bg-gradient-to-br from-blue-50/40 via-white to-slate-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between overflow-hidden"
              >
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
            ))}
          </div>

          {/* Right Navigation Arrow - Far Outward Right, Vertically Centered */}
          <button
            onClick={nextSlide}
            className="absolute -right-1 sm:right-0 lg:-right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:text-blue-900 hover:bg-blue-50/80 hover:border-blue-300 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer focus:outline-hidden"
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
              onClick={() => setStartIndex(idx)}
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
