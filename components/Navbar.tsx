'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SawariyaLogo } from './SawariyaLogo';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/data';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent underlying page from scrolling while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about-us' },
    { label: 'Services', href: '#services' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookCaregiverClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const target = document.querySelector('#contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071A35]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3'
            : 'bg-[#071A35]/40 backdrop-blur-xs py-4 border-b border-white/5'
        }`}
        id="main-header"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Brand Logo - Crisp White/Cyan on Dark */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="focus:outline-hidden"
          >
            <SawariyaLogo variant="dark" size="md" />
          </Link>

          {/* Desktop Navigation Links - White/Light text */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-200 hover:text-[#4CAF7D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4CAF7D] hover:after:w-full after:transition-all after:duration-200"
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTA: Phone Contact & Book a Caregiver (Healthcare Green) */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-5">
            <a
              href={`tel:${CONTACT_INFO.phones[0].raw}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors py-1.5 focus:outline-hidden"
              id="navbar-phone-contact"
              title="Call Sawariya Home Care"
            >
              <Phone className="w-4 h-4 text-[#4CAF7D] shrink-0" />
              <span>{CONTACT_INFO.phones[0].display}</span>
            </a>

            <button
              onClick={handleBookCaregiverClick}
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#22A06B] hover:bg-[#1B8356] active:scale-[0.98] shadow-lg shadow-emerald-950/30 hover:shadow-emerald-900/40 transition-all duration-200 cursor-pointer shrink-0"
              id="navbar-book-caregiver-btn"
            >
              Book a Caregiver
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-hidden cursor-pointer"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle-btn"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Height Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#071A35] flex flex-col h-screen h-[100dvh] w-screen max-w-full overflow-hidden lg:hidden text-white"
          id="mobile-navigation-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Top Bar with Logo & Close (X) Icon */}
          <div className="w-full bg-[#071A35] py-4 px-4 sm:px-6 border-b border-white/10 flex items-center justify-between shrink-0">
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="focus:outline-hidden"
            >
              <SawariyaLogo variant="dark" size="md" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-hidden cursor-pointer"
              aria-label="Close mobile menu"
              id="mobile-menu-close-btn"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links and CTA occupying mobile viewport */}
          <div className="flex-1 flex flex-col px-6 py-6 overflow-y-auto bg-[#071A35]">
            <nav className="flex flex-col divide-y divide-white/10" aria-label="Mobile Menu Links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3 text-lg font-medium text-slate-200 hover:text-[#4CAF7D] active:text-[#4CAF7D] transition-colors"
                  id={`mobile-nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Book a Caregiver button positioned directly below Contact without empty space */}
            <div className="pt-6">
              <button
                onClick={handleBookCaregiverClick}
                className="w-full py-3.5 rounded-xl text-center font-bold text-white bg-[#22A06B] hover:bg-[#1B8356] active:scale-[0.99] transition-colors shadow-lg shadow-emerald-950/40 cursor-pointer text-base"
                id="mobile-drawer-book-btn"
              >
                Book a Caregiver
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
