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
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#FFF1E6] selection:text-[#C2410C]">
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

      {/* Floating Action Buttons: Call Helpline & WhatsApp */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex flex-col items-center gap-3">
        {/* Floating Call Button */}
        <a
          href="tel:+917970258440"
          className="w-14 h-14 rounded-full bg-[#F87808] hover:bg-[#C2410C] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
          aria-label="Call Helpline +91 79702 58440"
          title="Call Helpline: +91 79702 58440"
          id="floating-call-btn"
        >
          <Phone className="w-6 h-6 text-white drop-shadow-xs" />
        </a>

        {/* Existing WhatsApp Floating Button */}
        <a
          href="https://wa.me/916265901231?text=Hello%20Sawariya%20Home%20Care%2C%20I%20would%20like%20to%20know%20more%20about%20your%20home-care%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
          aria-label="Chat with Care Coordinator on WhatsApp"
          title="Chat with Care Coordinator on WhatsApp"
          id="floating-whatsapp-btn"
        >
          <WhatsAppIcon className="w-8 h-8 fill-white drop-shadow-xs" />
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
