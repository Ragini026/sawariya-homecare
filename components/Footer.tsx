'use client';

import React, { useState, useEffect } from 'react';
import { SawariyaLogo } from './SawariyaLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CONTACT_INFO } from '@/lib/data';
import { Instagram, Phone, Mail, X } from 'lucide-react';

type LegalModalType = 'privacy' | 'terms' | 'cookie' | 'disclaimer' | null;

export function Footer() {
  const [activeModal, setActiveModal] = useState<LegalModalType>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  const socialLinks = [
    {
      name: 'WhatsApp',
      href: CONTACT_INFO.whatsapp,
      icon: <WhatsAppIcon className="w-4 h-4 fill-current" />,
      id: 'footer-social-whatsapp',
      hoverClass: 'hover:bg-[#22A06B] hover:border-[#22A06B] hover:text-white',
    },
    {
      name: 'Instagram',
      href: CONTACT_INFO.instagram.url,
      icon: <Instagram className="w-4 h-4" />,
      id: 'footer-social-instagram',
      hoverClass: 'hover:bg-[#E1306C] hover:border-[#E1306C] hover:text-white',
    },
    {
      name: 'Phone Support',
      href: `tel:${CONTACT_INFO.phones[0].raw}`,
      icon: <Phone className="w-4 h-4" />,
      id: 'footer-social-phone',
      hoverClass: 'hover:bg-[#2F6BFF] hover:border-[#2F6BFF] hover:text-white',
    },
    {
      name: 'Email Inquiries',
      href: `mailto:${CONTACT_INFO.email}`,
      icon: <Mail className="w-4 h-4" />,
      id: 'footer-social-email',
      hoverClass: 'hover:bg-[#4CAF7D] hover:border-[#4CAF7D] hover:text-white',
    },
  ];

  const legalModalContent: Record<
    Exclude<LegalModalType, null>,
    { title: string; content: string[] }
  > = {
    privacy: {
      title: 'Privacy Policy',
      content: [
        'At Sawariya Home Care, your and your family’s privacy and healthcare confidentiality are paramount. We only collect the necessary information required to formulate safe home-care assistance plans and coordinate verified attendants in Raipur.',
        'Personal details including health status, care notes, contact addresses, and family requirements are kept strictly confidential and shared solely with assigned caregivers and coordinators.',
        'We never sell, rent, or lease your personal information to third parties. For any inquiries or data management requests, you can reach our coordinators at sawariyahomecare@gmail.com.',
      ],
    },
    terms: {
      title: 'Terms of Service',
      content: [
        'Sawariya Home Care provides non-emergency home caregiving, companion support, newborn care, and skilled nursing assistance across Raipur, Chhattisgarh.',
        'All care services begin with an initial consultation to evaluate patient routines and safety needs. Attendant schedules, duration options, and replacement coverage are managed according to mutually agreed care plans.',
        'For acute medical emergencies, clients and family members must immediately contact local emergency medical services or visit the nearest hospital facility.',
      ],
    },
    cookie: {
      title: 'Cookie Policy',
      content: [
        'Our website utilizes minimal, essential cookies solely to ensure secure navigation, optimize page loading performance, and retain client booking form preferences.',
        'We do not deploy intrusive third-party advertising cookies or behavioral tracking trackers. By continuing to use our website, you agree to our standard essential cookie usage.',
      ],
    },
    disclaimer: {
      title: 'Medical & Healthcare Disclaimer',
      content: [
        'The information provided on this website is for general informational and home healthcare coordination purposes only. It should not be considered a substitute for direct hospital emergency treatment or doctor diagnosis.',
        'Our home attendants, certified nurses, and babysitters provide personalized support within their certified competencies. Families are encouraged to consult their primary physicians for critical clinical interventions.',
      ],
    },
  };

  return (
    <footer
      className="bg-[#071A35] text-slate-300 pt-16 pb-12 border-t border-white/10 relative"
      id="main-footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top / Main Footer Area: Centered Logo, Description, Social Media */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* 1. Centered Sawariya Home Care Logo */}
          <div className="flex justify-center">
            <SawariyaLogo variant="dark" size="md" />
          </div>

          {/* 2. Short Brand Description / Approved Tagline */}
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl mx-auto">
            Compassionate, dependable home-care support for seniors, newborns, and recovering patients across Raipur. Bringing peace of mind and dignity right to your doorstep.
          </p>

          {/* 3. Centered Circular Social Media Icons */}
          <div className="flex items-center justify-center gap-3.5 pt-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 flex items-center justify-center transition-all duration-200 hover:scale-105 ${item.hoverClass}`}
                aria-label={item.name}
                title={item.name}
                id={item.id}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Thin Low-Contrast Horizontal Divider */}
        <div className="w-full border-t border-white/10 my-8 sm:my-10" />

        {/* Footer Bottom Row: Copyright (Left) & Legal Links (Right) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          {/* Left: Copyright */}
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Sawariya Home Care. All rights reserved.
          </p>

          {/* Right: Legal Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5 sm:gap-7">
            <button
              onClick={() => setActiveModal('privacy')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              id="footer-link-privacy"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              id="footer-link-terms"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setActiveModal('cookie')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              id="footer-link-cookie"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => setActiveModal('disclaimer')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              id="footer-link-disclaimer"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Policy & Legal Modal Dialog */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#0B2545] border border-white/15 rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-serif font-semibold text-white">
                {legalModalContent[activeModal].title}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              {legalModalContent[activeModal].content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-lg bg-[#22A06B] hover:bg-[#1E8E5E] text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
