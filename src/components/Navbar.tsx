import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Doctor' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'why-choose-us', label: 'Why Kavach' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            id="navbar-logo"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-emerald-800 text-gold-300 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6 text-gold-300" />
              <div className="absolute inset-0 rounded-full border border-gold-400/30 scale-110 pointer-events-none"></div>
            </div>
            <div>
              <span className="font-display text-xl tracking-wider font-bold text-emerald-900 block leading-none">
                KAVACH
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-gold-600 block mt-1 font-semibold">
                Skin Clinic
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div id="desktop-nav-links" className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                id={`nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-xs uppercase tracking-widest font-semibold transition-colors duration-300 cursor-pointer relative py-2 ${
                  activeSection === item.id
                    ? 'text-emerald-700 font-bold'
                    : 'text-charcoal-800 hover:text-emerald-600'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Call / Action Button */}
          <div id="desktop-nav-cta" className="hidden lg:flex items-center gap-4">
            <a
              id="nav-call-btn"
              href="tel:+919876543210"
              className="flex items-center gap-2 font-sans text-xs font-semibold tracking-wider text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100/80 px-4 py-2.5 rounded-full border border-emerald-100 transition-all duration-300 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>+91 98765 43210</span>
            </a>
            
            <button
              id="nav-book-btn"
              onClick={() => handleNavClick('appointment')}
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold text-white bg-emerald-800 hover:bg-emerald-900 hover:scale-[1.02] active:scale-95 px-5 py-2.5 rounded-full shadow-md border border-gold-500/20 transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-gold-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div id="mobile-menu-toggle" className="lg:hidden flex items-center gap-3">
            <a
              id="mobile-quick-call"
              href="tel:+919876543210"
              className="p-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 hover:bg-emerald-100"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            <button
              id="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-emerald-900 hover:bg-emerald-50 border border-emerald-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-white border-b border-emerald-50 shadow-lg overflow-hidden absolute top-full left-0"
          >
            <div className="px-4 py-6 space-y-4 bg-gold-50/20">
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => (
                  <button
                    id={`mobile-nav-link-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left font-sans text-sm uppercase tracking-widest font-semibold py-3 px-4 rounded-xl transition-all ${
                      activeSection === item.id
                        ? 'bg-emerald-800 text-white shadow-sm'
                        : 'text-charcoal-800 hover:bg-emerald-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-emerald-100/50 space-y-3">
                <a
                  id="mobile-drawer-call"
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-emerald-200 bg-white font-semibold text-emerald-900 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call Us: +91 98765 43210</span>
                </a>
                
                <button
                  id="mobile-drawer-book"
                  onClick={() => handleNavClick('appointment')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-800 font-semibold text-white shadow-md border border-gold-500/20"
                >
                  <Calendar className="w-4 h-4 text-gold-300" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
