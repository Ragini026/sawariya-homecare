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
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden cursor-pointer"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
                id="mobile-menu-toggle-btn"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-Height Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-white flex flex-col h-screen h-[100dvh] w-screen max-w-full overflow-hidden lg:hidden"
          id="mobile-navigation-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Top Bar with Logo & Close (X) Icon */}
          <div className="w-full bg-white py-4 px-4 sm:px-6 border-b border-slate-100 flex items-center justify-between shrink-0">
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="focus:outline-hidden"
            >
              <SawariyaLogo size="md" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden cursor-pointer"
              aria-label="Close mobile menu"
              id="mobile-menu-close-btn"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links and CTA occupying mobile viewport */}
          <div className="flex-1 flex flex-col px-5 sm:px-6 py-4 sm:py-6 overflow-y-auto bg-white">
            <nav className="flex flex-col divide-y divide-slate-100" aria-label="Mobile Menu Links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-2.5 sm:py-3 text-base sm:text-lg font-medium text-slate-800 hover:text-blue-900 active:text-blue-900 transition-colors"
                  id={`mobile-nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Book a Caregiver button positioned directly below Contact */}
            <div className="pt-4 sm:pt-5">
              <button
                onClick={handleBookCaregiverClick}
                className="w-full py-3.5 rounded-xl text-center font-bold text-white bg-blue-900 hover:bg-blue-800 active:scale-[0.99] transition-colors shadow-md shadow-blue-900/15 cursor-pointer text-base"
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
