import { ShieldCheck, Mail, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const treatments = [
    { name: 'Acne & Acne Scar', id: 'treatments' },
    { name: 'Hair Fall & Restoration', id: 'treatments' },
    { name: 'Melasma Management', id: 'treatments' },
    { name: 'Laser Procedures', id: 'treatments' },
    { name: 'Anti-Ageing Protocols', id: 'treatments' },
  ];

  const quickLinks = [
    { label: 'Home Profile', id: 'home' },
    { label: 'About Doctor Saini', id: 'about' },
    { label: 'Dermatology Services', id: 'treatments' },
    { label: 'Our Evidence & Core', id: 'why-choose-us' },
    { label: 'Patient Testimonials', id: 'reviews' },
    { label: 'Book Appointment', id: 'appointment' },
  ];

  return (
    <footer className="bg-[#03231a] text-[#e2edea] pt-16 pb-8 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-emerald-900/40">
          
          {/* Col 1: Brand details (Lg: 4/12) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-900 text-gold-300 border border-gold-500/30">
                <ShieldCheck className="w-5 h-5 text-gold-300" />
              </div>
              <div>
                <span className="font-display text-lg tracking-wider font-bold text-white block">
                  KAVACH
                </span>
                <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-gold-300 block font-semibold">
                  Skin Clinic
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-[#a3bfae] leading-relaxed max-w-sm">
              Led by Dr. Kriteeka Saini (MBBS, MD Dermatology), Kavach Skin Clinic offers premium, 
              evidence-based clinical and aesthetic dermatology services. We align high medical standards 
              with ethical treatment plans customized for your skin.
            </p>

            <div className="pt-2">
              <span className="font-sans text-[10px] uppercase font-bold text-gold-300 tracking-wider block">
                Clinical Registration
              </span>
              <span className="font-sans text-[11px] text-[#a3bfae] mt-1 block">
                Registered Medical Practitioner (Dermatologist) • MCI & SMC Certified
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (Lg: 2/12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-gold-300">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="font-sans text-xs text-[#a3bfae] hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Treatments (Lg: 3/12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-gold-300">
              Popular Treatments
            </h4>
            <ul className="space-y-2.5">
              {treatments.map((t, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(t.id)}
                    className="font-sans text-xs text-[#a3bfae] hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {t.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact info (Lg: 3/12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-gold-300">
              Connect With Us
            </h4>
            <ul className="space-y-3.5">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-[#a3bfae] leading-relaxed">
                  Kavach Skin Clinic, Sanghi Street, Near Central Bank of India, Dr. Ambedkar Nagar, Mhow, Indore, Madhya Pradesh 453441
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+919876543210" className="font-sans text-xs text-[#a3bfae] hover:text-white">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:info@kavachskinclinic.com" className="font-sans text-xs text-[#a3bfae] hover:text-white">
                  info@kavachskinclinic.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Medical Disclaimer block */}
        <div className="py-6 border-b border-emerald-900/40">
          <p className="font-sans text-[10px] text-[#869f91] leading-relaxed text-center lg:text-left">
            <strong>Medical Disclaimer:</strong> The clinical information, treatment details, symptoms checklists, and illustrative cases documented 
            on this website are solely for general patient awareness, research, and profile educational purposes. This information is under no 
            circumstances intended to constitute direct medical advice, diagnosis, or customized therapy, nor is it a substitute for an in-person, 
            hands-on physical dermatological consultation with Dr. Kriteeka Saini. Please seek direct medical advice immediately from a certified 
            medical practitioner regarding serious skin rashes, infections, or lesions.
          </p>
        </div>

        {/* Copyright block */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-[#869f91]">
            &copy; {new Date().getFullYear()} Kavach Skin Clinic. All Rights Reserved.
          </p>
          <p className="font-sans text-[11px] text-[#869f91] flex items-center gap-1.5">
            <span>Formulated with ethical medical guidelines</span>
            <Heart className="w-3 h-3 text-gold-400 fill-gold-400" />
            <span>by Dr. Kriteeka Saini</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
