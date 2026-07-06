/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutDoctor from './components/AboutDoctor';
import Treatments from './components/Treatments';
import WhyChooseUs from './components/WhyChooseUs';
import BeforeAfter from './components/BeforeAfter';
import PatientReviews from './components/PatientReviews';
import AppointmentSection from './components/AppointmentSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState('');

  // Handle smooth scroll navigation
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset if sticky navbar is open
      const yOffset = -70; // Adjusted for sticky navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Callback from Treatments component to trigger booking pre-fill
  const handleSelectTreatmentForBooking = (treatmentName: string) => {
    setSelectedTreatmentForBooking(treatmentName);
    // Scroll smoothly to appointment form
    handleNavigate('appointment');
  };

  // Sync active section highlight with scroll using IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'treatments', 'why-choose-us', 'reviews', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -65% 0px', // Highlights as section occupies major middle frame
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-emerald-800 selection:text-gold-300">
      
      {/* Sticky Luxury Navbar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Sections Stack */}
      <main className="flex-grow">
        
        {/* 1. Home / Hero section */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. About Doctor */}
        <AboutDoctor />

        {/* 3. Treatments & Protocols (Pass pre-fill callback) */}
        <Treatments onSelectTreatmentForBooking={handleSelectTreatmentForBooking} />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Interactive Before/After Case Studies */}
        <BeforeAfter />

        {/* 6. Patient Reviews / Testimonials */}
        <PatientReviews />

        {/* 7. Appointment Form (Receive prefill state) */}
        <AppointmentSection 
          selectedTreatmentName={selectedTreatmentForBooking} 
          onClearSelectedTreatment={() => setSelectedTreatmentForBooking('')}
        />

        {/* 8. Contact & Location Maps */}
        <Contact />

      </main>

      {/* Floating interactive WhatsApp Assist */}
      <FloatingWhatsApp />

      {/* Sophisticated Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

