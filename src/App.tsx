import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TheVynkApproach } from './components/TheVynkApproach';
import { ServicePillarsSection } from './components/ServicePillarsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { TermsPage } from './components/TermsPage';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ExportGuideModal } from './components/ExportGuideModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms'>('home');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<
    'cloud-spend' | 'sustainability' | 'both'
  >('cloud-spend');
  const [consultationSpend, setConsultationSpend] = useState<string>('$5M - $15M/year');
  const [isExportGuideOpen, setIsExportGuideOpen] = useState(false);

  // Sync hash routing if user enters with #terms
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#terms' || window.location.hash === '#privacy') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenConsultation = (
    service: 'cloud-spend' | 'sustainability' | 'both' = 'cloud-spend',
    spend?: string
  ) => {
    setConsultationService(service);
    if (spend) setConsultationSpend(spend);
    setIsConsultationModalOpen(true);
  };

  const handleOpenExportGuide = () => {
    setIsExportGuideOpen(true);
  };

  const handleNavigateToTerms = () => {
    setCurrentPage('terms');
    window.location.hash = '#terms';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'terms') {
    return (
      <TermsPage
        onBackToHome={handleNavigateToHome}
        onOpenExportGuide={handleOpenExportGuide}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0e12] text-zinc-100 selection:bg-[#FF5E14] selection:text-white">
      {/* Top Header & Navigation */}
      <Header
        onOpenConsultation={handleOpenConsultation}
        onOpenExportGuide={handleOpenExportGuide}
        onOpenTerms={handleNavigateToTerms}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero with ex-hyperscaler leadership credentialing */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 2. The Vynk Approach & "Don't Leave Money on the Table" 3-step framework */}
        <TheVynkApproach onOpenConsultation={handleOpenConsultation} />

        {/* 3. Deep-Dive Service Pillars (Complete Service 1 with Calculator, followed by Service 2) */}
        <ServicePillarsSection onOpenConsultation={handleOpenConsultation} />

        {/* 4. Comprehensive FAQ Accordion */}
        <FAQSection onOpenConsultation={handleOpenConsultation} />

        {/* 5. Direct Inquiry Form & Contact Information */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenExportGuide={handleOpenExportGuide}
        onOpenConsultation={() => handleOpenConsultation('both')}
        onOpenTerms={handleNavigateToTerms}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        initialService={consultationService}
        initialSpend={consultationSpend}
      />

      <ExportGuideModal
        isOpen={isExportGuideOpen}
        onClose={() => setIsExportGuideOpen(false)}
      />
    </div>
  );
}
