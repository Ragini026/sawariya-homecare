'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SawariyaLogo } from './SawariyaLogo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: (serviceName?: string) => void;
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

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About & Care', href: '#about-and-care' },
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
    // Smoothly scroll to the existing Contact section's consultation form on the same page
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300" id="main-header">
      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="focus:outline-hidden">
            <SawariyaLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-900 hover:after:w-full after:transition-all after:duration-200"
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTA: Book a Caregiver Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={handleBookCaregiverClick}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 active:scale-[0.98] shadow-md shadow-blue-900/15 hover:shadow-lg hover:shadow-blue-900/25 transition-all duration-200 cursor-pointer"
              id="navbar-book-caregiver-btn"
            >
              Book a Caregiver
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleBookCaregiverClick}
              className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-blue-900 shadow-md shadow-blue-900/20 active:scale-95 transition-transform"
              id="mobile-quick-book-btn"
            >
              Book Care
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden cursor-pointer"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 mt-3 shadow-xl space-y-4 animate-fadeIn">
            <div className="flex flex-col divide-y divide-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-2.5 text-base font-medium text-slate-800 hover:text-blue-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={handleBookCaregiverClick}
                className="w-full py-3 rounded-xl text-center font-bold text-white bg-blue-900 hover:bg-blue-800 transition-colors shadow-sm active:scale-[0.99] cursor-pointer"
                id="mobile-drawer-book-btn"
              >
                Book a Caregiver
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
