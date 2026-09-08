'use client';

import React from 'react';

interface SawariyaLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function SawariyaLogo({
  variant = 'light',
  className = '',
  showTagline = true,
  size = 'md',
}: SawariyaLogoProps) {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] tracking-[0.22em]',
    lg: 'text-[13px] tracking-[0.25em]',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`} id="sawariya-brand-logo">
      {/* Peacock Feather Emblem (Mor Pankh) inspired by Sawariya branding */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`} aria-hidden="true">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          {/* Subtle Outer Glow / Radiance */}
          <circle cx="50" cy="50" r="46" fill="url(#featherGlow)" opacity="0.18" />

          {/* Curved Feather Quill / Spine */}
          <path
            d="M25 85 C 38 68, 48 45, 68 18"
            stroke={isDark ? '#38BDF8' : '#0B2545'}
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Outer Royal Navy & Deep Blue Feather Body */}
          <path
            d="M68 18 C 82 24, 88 42, 78 58 C 69 72, 45 74, 38 66 C 32 58, 38 38, 54 26 C 60 21, 65 19, 68 18 Z"
            fill="url(#outerBlueGrad)"
          />

          {/* Emerald / Teal Green Middle Layer */}
          <path
            d="M65 24 C 76 29, 79 43, 71 53 C 64 62, 48 64, 44 57 C 39 51, 44 37, 56 28 C 61 25, 63 24, 65 24 Z"
            fill="url(#emeraldGrad)"
          />

          {/* Cyan / Electric Blue Inner Eye */}
          <ellipse
            cx="58"
            cy="41"
            rx="12"
            ry="15"
            transform="rotate(35 58 41)"
            fill="url(#cyanEyeGrad)"
          />

          {/* Golden Amber Center Eye Dot */}
          <ellipse
            cx="58"
            cy="41"
            rx="5.5"
            ry="7.5"
            transform="rotate(35 58 41)"
            fill="url(#goldCenterGrad)"
          />

          {/* Sparkle Highlight */}
          <circle cx="56" cy="38" r="2.2" fill="#FFFFFF" opacity="0.9" />

          {/* Delicate Feather Fringe Strands */}
          <path
            d="M74 32 C 84 31, 89 36, 92 41"
            stroke="#10B981"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M78 44 C 88 45, 91 52, 90 58"
            stroke="#0284C7"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M72 58 C 78 65, 78 72, 73 78"
            stroke="#059669"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M48 24 C 44 18, 38 16, 32 18"
            stroke="#0EA5E9"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Gradients */}
          <defs>
            <radialGradient id="featherGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0F2952" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="outerBlueGrad" x1="40" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#0F2952" />
              <stop offset="100%" stopColor="#0A1E3F" />
            </linearGradient>
            <linearGradient id="emeraldGrad" x1="40" y1="25" x2="75" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
            <linearGradient id="cyanEyeGrad" x1="48" y1="30" x2="68" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="goldCenterGrad" x1="53" y1="35" x2="63" y2="47" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography: SAWARIYA HOME CARE */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-wider uppercase font-sans ${titleSizes[size]} ${
            isDark ? 'text-white' : 'text-[#0B2545]'
          }`}
        >
          Sawariya
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`font-bold uppercase ${subtitleSizes[size]} ${
              isDark ? 'text-sky-300' : 'text-[#1D4ED8]'
            }`}
          >
            Home Care
          </span>
        </div>
      </div>
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
        stroke="#0284C7"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M95 15 C 110 25, 115 50, 100 70 C 85 88, 55 90, 45 78 C 38 68, 45 42, 70 25 Z"
        fill="#0284C7"
      />
      <circle cx="82" cy="45" r="15" fill="#059669" />
      <circle cx="82" cy="45" r="8" fill="#F59E0B" />
    </svg>
  );
}
