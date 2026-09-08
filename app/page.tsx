'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutAndCareSection } from '@/components/AboutAndCareSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CareTeamSection } from '@/components/CareTeamSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { SERVICES_DATA, ServiceItem, CONTACT_INFO } from '@/lib/data';
import { Phone } from 'lucide-react';

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>(undefined);
  const [activeDetailService, setActiveDetailService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (serviceTitle?: string) => {
    setSelectedServiceTitle(serviceTitle);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedServiceTitle(undefined);
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-[#0B2545]">
      {/* Sticky Header Navigation */}
      <Navbar onOpenBooking={scrollToContact} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenBooking={scrollToContact} />

        {/* 2. Consolidated About & Care Section */}
        <AboutAndCareSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Dedicated How It Works Section */}
        <HowItWorksSection />

        {/* 4. Services Section (All 6 core services) */}
        <ServicesSection
          onSelectService={(service) => setActiveDetailService(service)}
          onBookService={(title) => handleOpenBooking(title)}
        />

        {/* 5. Care Team Section */}
        <CareTeamSection onLearnMore={scrollToContact} />

        {/* 6. Testimonials Section */}
        <TestimonialsSection />

        {/* 7. FAQ Section */}
        <FaqSection />

        {/* 8. Contact & Inquiry Section with Real Details */}
        <ContactSection initialService={selectedServiceTitle} />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Floating Action Button for Emergency / Quick Call & WhatsApp */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
        <a
          href={CONTACT_INFO.whatsapp}
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
          href={`tel:${CONTACT_INFO.phones[0].raw}`}
          className="w-12 h-12 rounded-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-105"
          aria-label="Call 24/7 Helpline"
          title="Call 24/7 Helpline"
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

      {/* Service In-Depth Details Modal */}
      <ServiceDetailModal
        service={activeDetailService}
        onClose={() => setActiveDetailService(null)}
        onBookNow={(serviceTitle) => handleOpenBooking(serviceTitle)}
      />
    </div>
  );
}
