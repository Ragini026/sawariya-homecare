'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatisticsStrip } from '@/components/StatisticsStrip';
import { CareTeamSection as AboutUsSection } from '@/components/CareTeamSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { CONTACT_INFO } from '@/lib/data';
import { Phone } from 'lucide-react';

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceTitle?: string) => {
    setSelectedServiceTitle(serviceTitle);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedServiceTitle(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-[#0B2545]">
      {/* Sticky Header Navigation with Transparent Hero Overlay */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* 1.5. Statistics Strip Section */}
        <StatisticsStrip />

        {/* 2. About Us Section */}
        <AboutUsSection onLearnMore={() => handleOpenBooking()} />

        {/* 3. Services Section */}
        <ServicesSection
          onBookService={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        {/* 4. How It Works Section */}
        <HowItWorksSection />

        {/* 5. Why Us Section */}
        <WhyChooseUsSection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Testimonials Section */}
        <TestimonialsSection />

        {/* 7. FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons for WhatsApp & Quick Call */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/916265901231?text=Hello%20Sawariya%20Home%20Care%2C%20I%20would%20like%20to%20know%20more%20about%20your%20home-care%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-105"
          aria-label="Chat with Care Coordinator on WhatsApp"
          title="Chat on WhatsApp"
          id="floating-whatsapp-btn"
        >
          <WhatsAppIcon className="w-6 h-6 fill-white" />
        </a>

        <a
          href="tel:+917970258440"
          className="w-12 h-12 rounded-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-105"
          aria-label="Call Helpline"
          title="Call Helpline"
          id="floating-phone-btn"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        defaultService={selectedServiceTitle}
      />
    </div>
  );
}
