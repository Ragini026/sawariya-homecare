'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SawariyaLogo } from './SawariyaLogo';
import { Menu, X } from 'lucide-react';

const WHATSAPP_BOOKING_URL =
  'https://wa.me/916265901231?text=Hello%20Sawariya%20Home%20Care%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20caretaker.%20Please%20share%20the%20available%20services%2C%20care%20options%2C%20and%20pricing.%20Thank%20you.';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // At the top of the page (scrollY <= 20), keep transparent.
      // Once scrolled down (> 20px), transition to solid dark navy background.
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent background page scrolling while mobile menu drawer is open
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

  // Navigation Links: 'Contact' removed as requested
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about-us' },
    { label: 'Services', href: '#services' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* 
        Scroll-based navbar:
        - Transparent overlay over the Hero background image at top of page
        - Solid dark navy background when scrolled down
        - Fixed uniform height/padding to prevent layout shifts or flickering
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 py-3.5 sm:py-4 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#071A35] shadow-lg border-b border-white/10'
            : 'bg-transparent border-b border-transparent shadow-none'
        }`}
        id="main-header"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Brand Logo - Sawariya Home Care */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="focus:outline-hidden drop-shadow-xs"
          >
            <SawariyaLogo variant="dark" size="md" />
          </Link>

          {/* Desktop Navigation Links - Centered & Horizontally Balanced */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold tracking-wide text-white/90 hover:text-[#4CAF7D] transition-colors relative py-1 drop-shadow-xs after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4CAF7D] hover:after:w-full after:transition-all after:duration-200"
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Right Action Area: WhatsApp Book a Caretaker CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#22A06B] hover:bg-[#1B8356] active:scale-[0.98] shadow-lg shadow-emerald-950/30 hover:shadow-emerald-900/40 transition-all duration-200 cursor-pointer shrink-0"
              id="navbar-book-caretaker-btn"
            >
              Book a Caretaker
            </a>
          </div>

          {/* Mobile Right Action Area: Hamburger Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 sm:p-2 rounded-lg text-white hover:bg-white/15 active:bg-white/25 focus:outline-hidden cursor-pointer flex items-center justify-center transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle-btn"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Height Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#071A35] flex flex-col h-screen h-[100dvh] w-screen max-w-full overflow-hidden lg:hidden text-white"
          id="mobile-navigation-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Top Bar with Brand Logo & Close (X) Icon */}
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

          {/* Navigation Links and WhatsApp Caretaker Booking CTA */}
          <div className="flex-1 flex flex-col px-6 py-6 overflow-y-auto bg-[#071A35] justify-between">
            <div>
              <nav className="flex flex-col divide-y divide-white/10" aria-label="Mobile Menu Links">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="py-3.5 text-lg font-medium text-slate-200 hover:text-[#4CAF7D] active:text-[#4CAF7D] transition-colors"
                    id={`mobile-nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Book a Caretaker CTA Button linked directly to WhatsApp */}
            <div className="pt-6 pb-4">
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3.5 rounded-xl text-center font-bold text-white bg-[#22A06B] hover:bg-[#1B8356] active:scale-[0.99] transition-colors shadow-lg shadow-emerald-950/40 cursor-pointer text-base"
                id="mobile-drawer-book-caretaker-btn"
              >
                Book a Caretaker
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
