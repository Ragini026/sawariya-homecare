'use client';

import React from 'react';
import { SawariyaLogo } from './SawariyaLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CONTACT_INFO, SERVICES_DATA } from '@/lib/data';
import { Instagram, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#071A35] text-slate-300 pt-16 pb-12 border-t border-white/10" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <SawariyaLogo variant="dark" size="md" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Compassionate, dependable home-care support for seniors, newborns, and recovering patients across Raipur. Bringing peace of mind and dignity right to your doorstep.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.08] hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 border border-white/10"
                aria-label="Instagram @sawariya_home_care"
                id="footer-instagram-icon"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.08] hover:bg-[#22A06B] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 border border-white/10"
                aria-label="WhatsApp Care Advisor"
                id="footer-whatsapp-icon"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#4CAF7D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Care Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
              Care Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="hover:text-[#4CAF7D] transition-colors"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
              Raipur Office
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4CAF7D] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Near Vyanktesh Hospital, Kamal Vihar, Sector 6, Sector 8 A, Raipur, Chhattisgarh 492015
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4CAF7D] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phones[0].raw}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phones[0].display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4CAF7D] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright on left, Back to Top on right */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Sawariya Home Care. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Verified In-Home Care • Raipur, CG</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#4CAF7D] hover:text-emerald-300 transition-colors cursor-pointer"
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
