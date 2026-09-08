'use client';

import React from 'react';
import { SawariyaLogo } from './SawariyaLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CONTACT_INFO } from '@/lib/data';
import { Instagram, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07172E] text-slate-300 pt-16 pb-12 border-t border-slate-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Main Content Area */}
        <div className="flex flex-col items-center text-center space-y-6 pb-12 border-b border-slate-800/80">
          {/* Centered Brand Logo */}
          <div className="flex justify-center">
            <SawariyaLogo variant="dark" size="lg" />
          </div>

          {/* Centered Mission Description */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Compassionate care and dependable support, right at home. Dedicated to enhancing the
            quality of life for senior citizens, newborns, babies and families.
          </p>

          {/* Centered Social Channels (Instagram & WhatsApp with Real Brand Icon) */}
          <div className="flex justify-center items-center gap-3.5 pt-2">
            <a
              href={CONTACT_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800/90 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
              aria-label="Instagram @sawariya_home_care"
              id="footer-instagram-icon"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800/90 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
              aria-label="WhatsApp Care Advisor"
              id="footer-whatsapp-icon"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright on left, Legal & Back to Top on right */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sawariya Home Care. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5 sm:gap-6 text-slate-400">
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Terms &amp; Conditions</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer ml-1 sm:ml-2"
              id="footer-back-to-top-btn"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
