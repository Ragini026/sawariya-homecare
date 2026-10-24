'use client';

import React, { useState, useEffect } from 'react';
import { SawariyaLogo } from './SawariyaLogo';
import { CONTACT_INFO } from '@/lib/data';
import { Instagram, Facebook, X, MapPin, Mail, Phone } from 'lucide-react';

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
      name: 'Instagram',
      href: CONTACT_INFO.instagram?.url || 'https://www.instagram.com/sawariya_home_care/',
      icon: <Instagram className="w-4 h-4" />,
      id: 'footer-social-instagram',
      hoverClass: 'hover:bg-[#E1306C] hover:border-[#E1306C] hover:text-white',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/sawariyahomecare',
      icon: <Facebook className="w-4 h-4" />,
      id: 'footer-social-facebook',
      hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white',
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickNavLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Care Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer
      className="bg-[#071A35] text-slate-300 pt-16 pb-12 border-t border-white/10 relative"
      id="main-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row: Brand, Quick Links, and Contact Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column: Brand Logo, Description, Social Icons */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-5 max-w-sm">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex justify-start focus:outline-none"
              aria-label="Sawariya Home Care - Back to top"
            >
              <SawariyaLogo variant="dark" size="md" />
            </a>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed text-left">
              Compassionate, dependable home-care support for seniors, newborns, and recovering patients across Raipur. Bringing peace of mind and dignity right to your doorstep.
            </p>

            <div className="flex items-center justify-start gap-3.5 pt-1">
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

          {/* Center Column: Quick Navigation Links */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-4 pt-2 lg:pt-0">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22A06B]" />
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h3>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickNavLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-300 hover:text-[#4CAF7D] transition-colors inline-block py-0.5"
                    id={`footer-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact Us Section */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4 pt-2 lg:pt-0 w-full max-w-md lg:ml-auto">
            <div className="flex items-center">
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
                Contact Us
              </h3>
            </div>

            <div className="space-y-4 w-full">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#22A06B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                    Address
                  </span>
                  <a
                    href="https://www.google.com/maps/dir//SAWARIYA+HOME+CARE,+near+Vyanktesh+Hospital,+Kamal+Vihar,+Sector+6,+Sector+8+A,+Raipur,+Chhattisgarh+492015/@22.3413479,82.551046,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a28dd4b71116313:0xf940fd81204e7ac6!2m2!1d81.6633505!2d21.1998868?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-emerald-300 transition-colors leading-relaxed block"
                    id="footer-address-link"
                    title="Open location in Google Maps"
                  >
                    Near Vyanktesh Hospital, Kamal Vihar, Sector 6, Sector 8 A, Raipur, Chhattisgarh 492015
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#22A06B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                    Email
                  </span>
                  <a
                    href="mailto:sawariyahomecare@gmail.com"
                    className="text-slate-200 hover:text-emerald-300 transition-colors font-medium"
                    id="footer-email-link"
                  >
                    sawariyahomecare@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#22A06B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                    Phone
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 text-slate-200 font-medium">
                    <a
                      href="https://wa.me/916265901231"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-300 transition-colors"
                      id="footer-phone-1"
                    >
                      +91 6265901231
                    </a>
                    <span className="text-slate-500 select-none">|</span>
                    <a
                      href="tel:+917970258440"
                      className="hover:text-emerald-300 transition-colors"
                      id="footer-phone-2"
                    >
                      +91 79702 58440
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
