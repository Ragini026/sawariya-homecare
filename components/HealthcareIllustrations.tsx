import React from 'react';

interface IllustrationProps {
  className?: string;
}

/**
 * 01 — Tell Us Your Needs Illustration
 * Editorial 2D illustration: Care requirement assessment, clipboard with vital checks, compassionate dialog bubble.
 */
export function StepNeedsIllustration({ className = 'w-full h-auto' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="needsGrad1" x1="20" y1="20" x2="220" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF1E6" />
          <stop stopColor="#FFFCF8" />
        </linearGradient>
        <linearGradient id="clipboardGrad" x1="70" y1="30" x2="170" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop stopColor="#FFFCF8" />
        </linearGradient>
        <linearGradient id="bubbleGrad" x1="130" y1="20" x2="210" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F87808" />
          <stop stopColor="#C2410C" />
        </linearGradient>
      </defs>

      {/* Ambient background aura */}
      <circle cx="120" cy="90" r="70" fill="url(#needsGrad1)" opacity="0.8" />

      {/* Assessment Clipboard */}
      <rect x="75" y="36" width="90" height="120" rx="14" fill="url(#clipboardGrad)" stroke="#F0D9C6" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(11,37,69,0.06))" />
      {/* Clip top */}
      <rect x="98" y="26" width="44" height="18" rx="6" fill="#F87808" />
      <rect x="110" y="21" width="20" height="8" rx="4" fill="#292524" />
      <circle cx="120" cy="35" r="3" fill="#FFFFFF" />

      {/* Checklist items with orange checkmarks */}
      {/* Line 1 */}
      <circle cx="95" cy="62" r="7" fill="#FFF1E6" stroke="#F87808" strokeWidth="1.5" />
      <path d="M92 62 L94.5 64.5 L98 59.5" stroke="#F87808" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="108" y="59" width="42" height="6" rx="3" fill="#94A3B8" />

      {/* Line 2 */}
      <circle cx="95" cy="84" r="7" fill="#FFF1E6" stroke="#F87808" strokeWidth="1.5" />
      <path d="M92 84 L94.5 86.5 L98 81.5" stroke="#F87808" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="108" y="81" width="36" height="6" rx="3" fill="#94A3B8" />

      {/* Line 3 */}
      <circle cx="95" cy="106" r="7" fill="#FFF1E6" stroke="#F87808" strokeWidth="1.5" />
      <path d="M92 106 L94.5 108.5 L98 103.5" stroke="#F87808" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="108" y="103" width="45" height="6" rx="3" fill="#94A3B8" />

      {/* Line 4 */}
      <circle cx="95" cy="128" r="7" fill="#FFF1E6" stroke="#C2410C" strokeWidth="1.5" />
      <path d="M92 128 L94.5 130.5 L98 125.5" stroke="#C2410C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="108" y="125" width="30" height="6" rx="3" fill="#F0D9C6" />

      {/* Dialogue bubble indicating client conversation */}
      <g filter="drop-shadow(0 4px 8px rgba(248,120,8,0.25))">
        <path
          d="M150 32 C150 21 162 14 182 14 C202 14 218 21 218 32 C218 43 202 50 186 50 L174 58 L177 50 C160 50 150 43 150 32 Z"
          fill="url(#bubbleGrad)"
        />
        {/* Three active speech dots */}
        <circle cx="174" cy="32" r="3" fill="#FFFFFF" />
        <circle cx="184" cy="32" r="3" fill="#FFFFFF" opacity="0.9" />
        <circle cx="194" cy="32" r="3" fill="#FFFFFF" opacity="0.8" />
      </g>

      {/* Small floating health heart pill */}
      <g filter="drop-shadow(0 2px 4px rgba(248,120,8,0.15))">
        <rect x="34" y="90" width="34" height="34" rx="10" fill="#FFFFFF" stroke="#F87808" strokeWidth="1.5" />
        <path d="M51 101 C47 96 40 99 40 105 C40 111 51 117 51 117 C51 117 62 111 62 105 C62 99 55 96 51 101 Z" fill="#F87808" />
      </g>
    </svg>
  );
}

/**
 * 02 — We Find the Right Care Illustration
 * Editorial 2D illustration: Caregiver matching, verification shield, stethoscope and trusted medical cross.
 */
export function StepMatchingIllustration({ className = 'w-full h-auto' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="matchGrad1" x1="30" y1="20" x2="210" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF1E6" />
          <stop stopColor="#FFFCF8" />
        </linearGradient>
        <linearGradient id="shieldGrad" x1="80" y1="30" x2="160" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop stopColor="#FFF1E6" />
        </linearGradient>
        <linearGradient id="crossGrad" x1="105" y1="65" x2="135" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F87808" />
          <stop stopColor="#C2410C" />
        </linearGradient>
      </defs>

      {/* Ambient background aura */}
      <circle cx="120" cy="90" r="70" fill="url(#matchGrad1)" opacity="0.8" />

      {/* Trust & Verification Shield */}
      <path
        d="M120 28 L170 48 C170 95 145 136 120 152 C95 136 70 95 70 48 Z"
        fill="url(#shieldGrad)"
        stroke="#F87808"
        strokeWidth="2.5"
        filter="drop-shadow(0 6px 12px rgba(248,120,8,0.15))"
      />

      {/* Caregiver avatar silhouette within badge */}
      <circle cx="120" cy="72" r="18" fill="#FFF1E6" stroke="#C2410C" strokeWidth="2" />
      <path d="M120 62 C115 62 111 66 111 71 C111 76 115 80 120 80 C125 80 129 76 129 71 C129 66 125 62 120 62 Z" fill="#C2410C" />
      <path d="M106 96 C106 88 112 84 120 84 C128 84 134 88 134 96 Z" fill="#C2410C" />

      {/* Verified Ribbon / Seal */}
      <g filter="drop-shadow(0 4px 6px rgba(248,120,8,0.25))">
        <circle cx="148" cy="115" r="16" fill="#F87808" />
        <path d="M141 115 L146 120 L155 110" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Modern Stethoscope looping around the shield */}
      <path
        d="M62 60 C52 75 52 115 78 128 C92 135 102 136 102 136"
        stroke="#C2410C"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="62" cy="56" r="6" fill="#C2410C" />
      <circle cx="62" cy="56" r="2.5" fill="#FFFFFF" />

      {/* Floating Sparkle / Star of Excellence */}
      <path
        d="M178 35 L180 43 L188 45 L180 47 L178 55 L176 47 L168 45 L176 43 Z"
        fill="#F87808"
      />
    </svg>
  );
}

/**
 * 03 — Care Begins at Home Illustration
 * Editorial 2D illustration: Warm home environment, caregiver support, heart protection, peace of mind.
 */
export function StepCareInHomeIllustration({ className = 'w-full h-auto' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="homeGrad1" x1="20" y1="20" x2="220" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF1E6" />
          <stop stopColor="#FFFCF8" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="60" y1="35" x2="180" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F87808" />
          <stop stopColor="#292524" />
        </linearGradient>
      </defs>

      {/* Ambient background aura */}
      <circle cx="120" cy="90" r="70" fill="url(#homeGrad1)" opacity="0.8" />

      {/* Peaceful House Silhouette with Soft Lines */}
      {/* Roof */}
      <path
        d="M65 80 L120 36 L175 80"
        stroke="#F87808"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Chimney */}
      <rect x="145" y="44" width="14" height="20" rx="3" fill="#F0D9C6" stroke="#F87808" strokeWidth="2" />

      {/* House Body */}
      <rect
        x="78"
        y="78"
        width="84"
        height="76"
        rx="12"
        fill="#FFFFFF"
        stroke="#F0D9C6"
        strokeWidth="2"
        filter="drop-shadow(0 6px 14px rgba(11,37,69,0.08))"
      />

      {/* Warm Front Door / Heart Entrance */}
      <rect x="104" y="106" width="32" height="48" rx="8" fill="#FFF1E6" stroke="#C2410C" strokeWidth="1.5" />
      <circle cx="112" cy="130" r="2.5" fill="#C2410C" />

      {/* Medical Cross Symbol Above Door */}
      <g>
        <rect x="116" y="88" width="8" height="14" rx="2" fill="#F87808" />
        <rect x="113" y="91" width="14" height="8" rx="2" fill="#F87808" />
      </g>

      {/* Supportive Caring Hands Floating Badge */}
      <g filter="drop-shadow(0 4px 8px rgba(248,120,8,0.25))">
        <circle cx="172" cy="116" r="24" fill="#FFFFFF" stroke="#F87808" strokeWidth="2" />
        {/* Heart centered in hands */}
        <path
          d="M172 108 C168 103 161 106 161 112 C161 119 172 125 172 125 C172 125 183 119 183 112 C183 106 176 103 172 108 Z"
          fill="#F87808"
        />
        {/* Gentle cradle lines */}
        <path d="M158 124 C164 129 180 129 186 124" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Window with warm glow */}
      <rect x="88" y="94" width="16" height="16" rx="4" fill="#FFF1E6" stroke="#F87808" strokeWidth="1.5" />
      <path d="M96 94 L96 110 M88 102 L104 102" stroke="#F87808" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Editorial Doctor/Caregiver & Patient Consultation Illustration (For FAQ or About Us)
 */
export function DoctorConsultationIllustration({ className = 'w-full h-auto' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="faqDocAura" x1="40" y1="20" x2="280" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF1E6" stopOpacity="0.8" />
          <stop stopColor="#FFFCF8" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Ambient background blob */}
      <path
        d="M60 120 C40 60 100 30 180 30 C260 30 290 80 280 150 C270 220 220 240 140 240 C60 240 80 180 60 120 Z"
        fill="url(#faqDocAura)"
      />

      {/* Decorative pulse line */}
      <path
        d="M40 210 L80 210 L95 195 L110 225 L125 185 L140 210 L280 210"
        stroke="#F87808"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
        opacity="0.5"
      />

      {/* Healthcare Professional (Left) */}
      {/* Body / Coat */}
      <path d="M80 160 C80 135 95 125 115 125 C135 125 150 135 150 160 L155 220 L75 220 Z" fill="#C2410C" />
      <path d="M102 125 L115 155 L128 125" fill="#FFF1E6" />
      {/* Head */}
      <circle cx="115" cy="95" r="20" fill="#CBD5E1" />
      {/* Hair */}
      <path d="M96 90 C96 76 105 72 116 72 C127 72 134 76 134 90 C134 93 130 92 128 88 C124 84 106 84 102 88 Z" fill="#292524" />
      {/* Stethoscope */}
      <path d="M104 125 C104 140 126 140 126 125" stroke="#F87808" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="115" cy="148" r="4" fill="#F87808" />

      {/* Patient / Senior (Right) */}
      {/* Body */}
      <path d="M175 165 C175 140 190 130 210 130 C230 130 245 140 245 165 L250 220 L170 220 Z" fill="#F87808" />
      {/* Shawl / Comfort Wrap */}
      <path d="M185 140 C195 155 225 155 235 140" stroke="#FFF1E6" strokeWidth="4" strokeLinecap="round" />
      {/* Head */}
      <circle cx="210" cy="100" r="19" fill="#E2E8F0" />
      {/* Hair (Silver hair) */}
      <path d="M192 98 C192 84 200 80 210 80 C220 80 228 84 228 98 C228 100 220 95 210 95 C200 95 192 100 192 98 Z" fill="#94A3B8" />

      {/* Warm Connection / Holding Clipboard or Friendly Gesture */}
      <path d="M135 170 C145 160 165 160 175 170" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />

      {/* Floating Care Shield Badge */}
      <g filter="drop-shadow(0 6px 12px rgba(248,120,8,0.25))">
        <circle cx="245" cy="65" r="22" fill="#FFFFFF" stroke="#C2410C" strokeWidth="2" />
        <path d="M245 52 L258 58 C258 72 251 81 245 84 C239 81 232 72 232 58 Z" fill="#FFF1E6" stroke="#C2410C" strokeWidth="1.5" />
        <path d="M241 68 L244 71 L249 66" stroke="#F87808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/**
 * Ambient Healthcare Cross & Pulse Pattern
 */
export function HealthcareCrossPattern({ className = '' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <rect x="42" y="20" width="16" height="60" rx="4" fill="currentColor" />
      <rect x="20" y="42" width="60" height="16" rx="4" fill="currentColor" />
    </svg>
  );
}
