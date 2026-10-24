'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, AlertCircle } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking?: (serviceName?: string) => void;
}

const SERVICE_OPTIONS = [
  'Baby Care',
  'Male Patient Care',
  'Female Patient Care',
  'Patient Care',
  'Caretaker',
];

export function HeroSection({ onOpenBooking }: HeroSectionProps = {}) {
  const [selectedCare, setSelectedCare] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Attempt video autoplay on mount with fallback handling
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy or low power mode might block autoplay; poster / fallback takes over gracefully
      });
    }
  }, []);

  const handleSelectService = (service: string) => {
    setSelectedCare(service);
    if (validationError) {
      setValidationError(false);
    }
  };

  const handleBookNow = () => {
    // 3. WhatsApp Booking Functionality
    // If no service is selected, prompt user to select a service before opening WhatsApp
    if (!selectedCare) {
      setValidationError(true);
      return;
    }

    setValidationError(false);

    // Format: “Hello Sawariya Home Care, I am interested in your [Selected Service] service. Please share the details and availability.”
    const message = `Hello Sawariya Home Care, I am interested in your ${selectedCare} service. Please share the details and availability.`;
    const whatsappUrl = `https://wa.me/917970258440?text=${encodeURIComponent(message)}`;

    // Open WhatsApp directly via wa.me link without opening modal or navigating within site
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[720px] min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#071A35] text-white"
    >
      {/* Layer 1: Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0" aria-hidden="true">
        {!videoFailed ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-homecare.jpg"
            onError={() => setVideoFailed(true)}
            className="w-full h-full object-cover object-center"
          >
            <source
              src="/assets/aistudio/gemini_generated_video_a873ab67_83daa300.mp4"
              type="video/mp4"
            />
            <source src="/videos/hero-care-loop.mp4" type="video/mp4" />
            {/* Fallback Image inside video tag */}
            <Image
              src="/images/hero-homecare.jpg"
              alt="Sawariya Home Care services"
              fill
              priority
              className="object-cover object-center"
              referrerPolicy="no-referrer"
              sizes="100vw"
            />
          </video>
        ) : (
          /* Graceful Fallback if video cannot load */
          <Image
            src="/images/hero-homecare.jpg"
            alt="Compassionate Indian home caregiver providing attentive care to patient at home"
            fill
            priority
            className="object-cover object-center"
            referrerPolicy="no-referrer"
            sizes="100vw"
          />
        )}
      </div>

      {/* Layer 2: Semi-transparent Dark Overlay (45-55% opacity for optimal text readability while keeping the video clearly visible) */}
      <div
        className="absolute inset-0 bg-[#071A35]/50 bg-gradient-to-b from-[#071A35]/60 via-black/45 to-[#071A35]/60 z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* 1. Fully Centered Hero Content with Balanced Spacing */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-20 pb-12 sm:pb-16 flex flex-col items-center text-center">
        {/* Raipur Location Trust Indicator */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.10] border border-white/20 backdrop-blur-md shadow-sm mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#22A06B] animate-pulse" />
          <span className="text-xs font-semibold text-white tracking-wide uppercase">
            Raipur’s Trusted Home Care Service
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 sm:space-y-5 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-[1.12]">
            Trusted Care,{' '}
            <span className="text-[#4CAF7D] font-normal italic font-serif">
              Right at Home.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
            Compassionate and reliable home-care support for senior citizens, newborns, babies, and families — delivering peace of mind, safety, and dignity right to your door in Raipur.
          </p>
        </div>

        {/* 2. Service Dropdown & Book Now Button Container */}
        <div className="pt-6 sm:pt-8 w-full flex flex-col items-center">
          <div
            className={`inline-flex items-center bg-white rounded-full p-1.5 sm:p-2 shadow-2xl border transition-all duration-200 max-w-full sm:max-w-lg w-full ${
              validationError
                ? 'border-amber-400 ring-4 ring-amber-400/30'
                : 'border-white/20'
            }`}
          >
            {/* Entire dropdown field is clickable, including text and arrow */}
            <div className="relative flex-1 min-w-0 flex items-center justify-between pl-4 sm:pl-5 pr-3 sm:pr-4 h-full min-h-[46px] cursor-pointer group">
              <span
                className={`text-xs sm:text-sm truncate pr-2 pointer-events-none select-none text-left ${
                  selectedCare
                    ? 'text-slate-900 font-semibold'
                    : 'text-slate-500 font-medium'
                }`}
              >
                {selectedCare || 'Select a Care Service'}
              </span>
              <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 pointer-events-none group-hover:text-slate-800 transition-colors" />

              {/* Native select spanning the full container area */}
              <select
                value={selectedCare}
                onChange={(e) => handleSelectService(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 text-slate-900 text-sm"
                id="hero-care-dropdown"
                aria-label="Select a Care Service"
              >
                <option value="" disabled className="text-slate-500">
                  Select a Care Service
                </option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option} className="text-slate-900 font-medium">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Vertical Divider */}
            <div className="h-6 sm:h-7 w-px bg-slate-200 shrink-0 mx-1" aria-hidden="true" />

            {/* 3. Book Now button - redirects directly to WhatsApp */}
            <button
              type="button"
              onClick={handleBookNow}
              className="inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#2F5CC8] hover:bg-[#2449A3] active:scale-[0.98] shadow-md shadow-[#2F5CC8]/25 transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap"
              id="hero-book-now-btn"
            >
              Book Now
            </button>
          </div>

          {/* Validation message if user clicks Book Now without selecting a service */}
          {validationError && (
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-medium animate-fadeIn">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-300" />
              <span>Please select a care service before booking.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
