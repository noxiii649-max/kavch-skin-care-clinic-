import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Sparkles, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tool tip after 5 seconds to invite user
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Tooltip speech bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-gold-100 max-w-[240px] text-left relative"
          >
            {/* Close tooltip button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 right-1.5 text-charcoal-800/40 hover:text-charcoal-800"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="flex gap-2">
              <Sparkles className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-[11px] font-bold text-emerald-950">Quick Skin Query?</p>
                <p className="font-sans text-[10px] text-charcoal-800/70 mt-0.5 leading-relaxed">
                  Message Dr. Kriteeka's private desk on WhatsApp for fast scheduling.
                </p>
              </div>
            </div>

            {/* Speach bubble tail */}
            <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-white border-r border-b border-gold-100 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.a
        id="floating-whatsapp-trigger"
        href="https://wa.me/919876543210?text=Hi%20Kavach%20Skin%20Clinic,%20I'd%20like%20to%20request%20an%20appointment%20with%20Dr.%20Kriteeka%20Saini."
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl border-2 border-white relative group"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        
        {/* Glow pulsing ring around button */}
        <span className="absolute -inset-1.5 rounded-full border border-emerald-500/30 animate-pulse group-hover:scale-110 transition-transform"></span>
      </motion.a>

    </div>
  );
}
