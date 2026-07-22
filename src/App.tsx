import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StatsBanner } from './components/StatsBanner';
import { RecentProjects } from './components/RecentProjects';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

import { QuoteModal } from './components/QuoteModal';
import { VideoModal } from './components/VideoModal';
import { GalleryModal } from './components/GalleryModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';

import { ServiceItem, ProjectItem } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [selectedGalleryProject, setSelectedGalleryProject] = useState<ProjectItem | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    });
  }, []);

  const handleOpenGallery = (project?: ProjectItem) => {
    setSelectedGalleryProject(project);
    setGalleryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0f11] text-[#e1e3e6] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#dfd7c6] selection:text-[#111214]">
      {/* Header Navigation */}
      <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner */}
        <Hero
          onOpenQuote={() => setQuoteModalOpen(true)}
          onOpenVideo={() => setVideoModalOpen(true)}
        />

        {/* About Us */}
        <AboutSection onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Services Grid */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* Why Choose Us */}
        <WhyChooseUs onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Stats & Trust Banner */}
        <StatsBanner />

        {/* Recent Projects Gallery */}
        <RecentProjects onOpenGallery={handleOpenGallery} />

        {/* Customer Reviews */}
        <Testimonials />

        {/* Call To Action Banner */}
        <CallToAction onOpenQuote={() => setQuoteModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Interactive Popups & Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <GalleryModal
        isOpen={galleryModalOpen}
        initialProject={selectedGalleryProject}
        onClose={() => setGalleryModalOpen(false)}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />
    </div>
  );
}
