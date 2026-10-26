'use client';

import React from 'react';
import Image from 'next/image';

interface SawariyaLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'footer';
}

export function SawariyaLogo({
  className = '',
  size = 'md',
}: SawariyaLogoProps) {

  // Responsive heights matching standard navigation and footer bars
  const heightClasses: Record<string, string> = {
    sm: 'h-9 sm:h-11',
    md: 'h-13 sm:h-16 lg:h-[68px]', // Significantly bigger in header
    lg: 'h-20 sm:h-[98px]',
    footer: 'h-[80px] sm:h-[98px]', // +0.5x more than current size (approx 98px height)
  };

  const imageDimensions: Record<string, { width: number; height: number }> = {
    sm: { width: 115, height: 46 },
    md: { width: 175, height: 70 },
    lg: { width: 260, height: 104 },
    footer: { width: 260, height: 104 },
  };

  const { width, height } = imageDimensions[size] || imageDimensions.md;

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      id="sawariya-brand-logo"
    >
      <Image
        src="/assets/aistudio/Sawariya_2f0776d7.png"
        alt="Sawariya Home Care"
        width={width}
        height={height}
        priority
        className={`${heightClasses[size]} w-auto object-contain`}
      />
    </div>
  );
}

export function PeacockFeatherDecorative({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none opacity-10 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M20 100 C 40 75, 60 50, 95 15"
        stroke="#F87808"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M95 15 C 110 25, 115 50, 100 70 C 85 88, 55 90, 45 78 C 38 68, 45 42, 70 25 Z"
        fill="#F87808"
      />
      <circle cx="82" cy="45" r="15" fill="#C2410C" />
      <circle cx="82" cy="45" r="8" fill="#F87808" />
    </svg>
  );
}
