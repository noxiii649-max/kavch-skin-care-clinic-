import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Clock, Copy, Check, Navigation, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const addressText = "Kavach Skin Clinic, Sanghi Street, Near Central Bank of India, Dr. Ambedkar Nagar, Mhow, Indore, Madhya Pradesh 453441";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const operationalHours = [
    { day: 'Monday - Saturday', morning: '10:00 AM - 1:00 PM', evening: '5:00 PM - 8:00 PM' },
    { day: 'Sunday', morning: 'By Appointment Only', evening: 'Closed' }
  ];

  return (
    <section id="contact" className="py-24 bg-emerald-50/10 relative overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-100/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-100/15 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div id="contact-heading" className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
            Locate Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-emerald-950 mt-2 font-bold tracking-tight">
            Connect With Our Patient Coordinators
          </h2>
          <div className="w-16 h-1 bg-gold-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-emerald-950 font-bold">
                Kavach Skin Clinic Mhow
              </h3>
              <p className="font-sans text-xs text-charcoal-800/70 leading-relaxed">
                We are centrally located on Sanghi Street in Dr. Ambedkar Nagar, Mhow, nestled near the Central Bank of India 
                with street-front ease of access, a welcoming consultation lounge, and professional clinical care.
              </p>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-5 border border-emerald-100/40 shadow-sm space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-charcoal-800/40 block">Address</span>
                    <p className="font-sans text-xs text-emerald-950 font-semibold mt-1 leading-relaxed">
                      {addressText}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    id="copy-address-btn"
                    onClick={handleCopyAddress}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-emerald-100 hover:bg-emerald-50/50 text-emerald-900 font-sans text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Address Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    id="get-directions-btn"
                    href="https://maps.google.com/?q=Dr.+Kriteeka+Saini+Kavach+Skin+Clinic+Mhow+Sanghi+Street+Indore"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-sans text-xs font-semibold transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-gold-300" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Timings Card */}
              <div className="bg-white rounded-2xl p-5 border border-emerald-100/40 shadow-sm space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-charcoal-800/40 block">Clinical Timings</span>
                    
                    <div className="mt-3 space-y-2.5">
                      {operationalHours.map((hours, i) => (
                        <div key={i} className="flex justify-between items-center text-xs border-b border-emerald-100/10 pb-2 last:border-0 last:pb-0">
                          <span className="font-sans font-semibold text-emerald-950">{hours.day}</span>
                          <div className="text-right">
                            <span className="font-sans text-charcoal-800/85 block">{hours.morning}</span>
                            <span className="font-sans text-charcoal-800/60 block text-[10px] mt-0.5">{hours.evening}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Immediate Call/WhatsApp Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-emerald-100/30">
              <a
                id="contact-call-now"
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2.5 py-4 px-5 bg-emerald-800 hover:bg-emerald-900 rounded-xl text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-300" />
                <span>Call +91 98765 43210</span>
              </a>

              <a
                id="contact-whatsapp"
                href="https://wa.me/919876543210?text=Hi%20Kavach%20Skin%20Clinic,%20I'd%20like%20to%20request%20an%20appointment%20with%20Dr.%20Kriteeka%20Saini."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 py-4 px-5 bg-white hover:bg-emerald-50 border border-emerald-800/25 rounded-xl text-emerald-900 font-sans text-xs uppercase tracking-widest font-bold shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Clinic</span>
              </a>
            </div>

          </div>

          {/* Right Column: Premium Map Graphic */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[400px] bg-[#f5f3ef] rounded-3xl border border-gold-100 shadow-lg relative overflow-hidden flex flex-col justify-between p-6">
              
              {/* Fake Map Grid lines */}
              <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#054a3a_2px,transparent_2px),linear-gradient(to_bottom,#054a3a_2px,transparent_2px)] bg-[size:40px_40px] pointer-events-none"></div>

              {/* Fake Roads and parks (Vector Luxury Map Design) */}
              <div className="absolute top-[40%] left-0 w-full h-8 bg-emerald-100/20 rotate-12 transform origin-left pointer-events-none"></div>
              <div className="absolute top-[20%] left-[30%] w-10 h-full bg-emerald-100/10 rotate-12 transform pointer-events-none"></div>
              <div className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full bg-emerald-200/10 blur-xl pointer-events-none"></div>

              {/* Map Header with coordinates */}
              <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur px-4 py-2.5 rounded-xl border border-gold-100/50 shadow-sm max-w-sm">
                <div>
                  <span className="font-sans text-[8px] uppercase tracking-wider text-charcoal-800/40 block font-bold">Clinical Coordinates</span>
                  <span className="font-mono text-xs font-semibold text-emerald-950">22.5542° N, 75.7648° E (Mhow, Indore)</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></div>
              </div>

              {/* Map central marker pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-emerald-950 text-white border border-gold-400 p-2.5 rounded-xl shadow-xl flex items-center gap-2 max-w-xs whitespace-nowrap">
                    <MapPin className="w-4 h-4 text-gold-400 fill-gold-400 shrink-0" />
                    <div className="text-left">
                      <span className="font-serif text-xs font-bold block leading-none text-gold-300">KAVACH SKIN CLINIC</span>
                      <span className="font-sans text-[8px] text-emerald-100/80 uppercase block tracking-wider mt-1">Near Central Bank • Sanghi Street</span>
                    </div>
                  </div>
                  {/* Pin stem */}
                  <div className="w-1 h-4 bg-emerald-950 -mt-0.5"></div>
                  {/* Pin shadow */}
                  <div className="w-5 h-2 bg-black/25 rounded-full blur-[1px] -mt-1"></div>
                </motion.div>
              </div>

              {/* Driving Instructions footer */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gold-100 shadow-md flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <p className="font-sans text-[11px] text-charcoal-800/80 leading-relaxed">
                  <strong>Parking Information:</strong> Convenient on-street parking is available along Sanghi Street right outside or nearby the clinic. 
                  Dr. Kriteeka Saini's clinic is situated on the ground floor with easily accessible walk-in entry for all patients.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
