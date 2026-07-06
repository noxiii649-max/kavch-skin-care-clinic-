import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, User, Stethoscope, CheckCircle, Trash2, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';
import { Appointment } from '../types';

interface AppointmentSectionProps {
  selectedTreatmentName: string;
  onClearSelectedTreatment: () => void;
}

export default function AppointmentSection({ 
  selectedTreatmentName, 
  onClearSelectedTreatment 
}: AppointmentSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  
  const [myAppointments, setMyAppointments] = useState<Appointment[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastBooked, setLastBooked] = useState<Appointment | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Synchronize treatment choice if passed from Treatments modal
  useEffect(() => {
    if (selectedTreatmentName) {
      setProblem(selectedTreatmentName);
    }
  }, [selectedTreatmentName]);

  // Load existing appointments from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kavach_appointments');
    if (saved) {
      try {
        setMyAppointments(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse appointments');
      }
    }
  }, []);

  const handleBookSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick Validation
    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!problem) {
      setErrorMsg('Please select or specify your skin/hair concern.');
      return;
    }
    if (!preferredDate) {
      setErrorMsg('Please select a preferred appointment date.');
      return;
    }

    // Build appointment object
    const newAppointment: Appointment = {
      id: 'apt-' + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      problem,
      preferredDate,
      status: 'pending',
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newAppointment, ...myAppointments];
    setMyAppointments(updated);
    localStorage.setItem('kavach_appointments', JSON.stringify(updated));

    setLastBooked(newAppointment);
    setIsSuccess(true);
    
    // Clear inputs
    setName('');
    setPhone('');
    setProblem('');
    setPreferredDate('');
    onClearSelectedTreatment();
  };

  const handleCancelApt = (id: string) => {
    const updated = myAppointments.filter(item => item.id !== id);
    setMyAppointments(updated);
    localStorage.setItem('kavach_appointments', JSON.stringify(updated));
  };

  const treatmentOptions = [
    'Acne & Acne Scar',
    'Hair Fall & Restoration',
    'Pigmentation Therapy',
    'Melasma Management',
    'Fungal Infection Care',
    'Psoriasis Management',
    'Eczema & Dermatitis Clinic',
    'Vitiligo Management',
    'Skin Allergy Testing & Care',
    'Nail Disorders Therapy',
    'Laser Procedures',
    'Premium Chemical Peels',
    'Anti-Ageing & Rejuvenation',
    'Wart, Tag & Mole Removal',
    'General Skin Consultation'
  ];

  return (
    <section id="appointment" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/10 -z-10 rounded-l-full"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold-100/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context Copy & Scheduled List */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-600 block">
                Booking Suite
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-emerald-950 font-bold tracking-tight">
                Secure Your Premium Consultation
              </h2>
              <p className="font-sans text-sm text-charcoal-800/80 leading-relaxed">
                Take the first step toward clinical dermatological health. Simply select your preferred date, 
                and our clinic coordinator will call you back within 2 hours to confirm your premium, 
                private slot with Dr. Kriteeka Saini.
              </p>
            </div>

            {/* Guarantees */}
            <div className="space-y-3 bg-emerald-50/20 p-5 rounded-2xl border border-emerald-100/30">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold text-emerald-950">Ethical Appointment Guarantee</h4>
                  <p className="font-sans text-[11px] text-charcoal-800/70 mt-0.5">We charge a standard initial consultation fee, directly refundable against any in-clinic clinical procedures.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold text-emerald-950">Strict Patient Confidentiality</h4>
                  <p className="font-sans text-[11px] text-charcoal-800/70 mt-0.5">Your clinical records, before/after logs, and general diagnosis reports are stored on encrypted private silos.</p>
                </div>
              </div>
            </div>

            {/* Scheduled Appointments logs */}
            {myAppointments.length > 0 && (
              <div id="user-booking-logs" className="space-y-4">
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                  <span>Your Scheduled Consultations ({myAppointments.length})</span>
                </h3>
                
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2">
                  {myAppointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="p-4 rounded-xl bg-[#fbfaf8] border border-emerald-100/40 shadow-sm flex items-start justify-between gap-3 group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-sans text-xs font-bold text-emerald-950">{apt.name}</span>
                          <span className="font-sans text-[9px] uppercase tracking-wider bg-gold-100/80 text-gold-800 px-2 py-0.5 rounded-full font-bold">
                            {apt.status}
                          </span>
                        </div>
                        <p className="font-sans text-[11px] text-charcoal-800/80 font-medium">{apt.problem}</p>
                        <p className="font-sans text-[10px] text-charcoal-800/50">Date Requested: {apt.preferredDate}</p>
                      </div>

                      <button
                        id={`cancel-apt-btn-${apt.id}`}
                        onClick={() => handleCancelApt(apt.id)}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer"
                        title="Cancel Appointment Request"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div id="appointment-form-container" className="lg:col-span-7 bg-[#fbfaf8] rounded-3xl p-6 sm:p-8 border border-emerald-100/40 shadow-md">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  id="booking-form"
                  key="booking-form-el"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleBookSubmit}
                  className="space-y-5"
                >
                  <div className="border-b border-emerald-100/40 pb-4">
                    <h3 className="font-serif text-xl font-bold text-emerald-950">
                      Private Appointment Form
                    </h3>
                    <p className="font-sans text-xs text-charcoal-800/50 mt-1">
                      Fill out the form below. Slots are assigned on a first-come, first-served basis.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-rose-50 text-rose-800 border border-rose-100 rounded-xl flex items-center gap-2 text-xs font-medium">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="patient-name" className="font-sans text-[10px] font-bold uppercase tracking-wider text-emerald-950 block">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-800/40">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="patient-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priyanshu Sharma"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-emerald-100 rounded-xl text-xs font-medium text-charcoal-800 placeholder-charcoal-800/30 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="patient-phone" className="font-sans text-[10px] font-bold uppercase tracking-wider text-emerald-950 block">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-800/40">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="patient-phone"
                        type="tel"
                        maxLength={15}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/[^0-9+]/g, ''))}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-emerald-100 rounded-xl text-xs font-medium text-charcoal-800 placeholder-charcoal-800/30 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Problem Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="patient-concern" className="font-sans text-[10px] font-bold uppercase tracking-wider text-emerald-950 block">
                      Dermatological Concern / Treatment
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-800/40">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                      <select
                        id="patient-concern"
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-emerald-100 rounded-xl text-xs font-medium text-charcoal-800 placeholder-charcoal-800/30 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select your treatment concern</option>
                        {treatmentOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {/* Custom indicator */}
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-charcoal-800/45">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label htmlFor="patient-date" className="font-sans text-[10px] font-bold uppercase tracking-wider text-emerald-950 block">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-800/40">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        id="patient-date"
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-emerald-100 rounded-xl text-xs font-medium text-charcoal-800 placeholder-charcoal-800/30 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Submission and note */}
                  <div className="pt-4 space-y-4">
                    <button
                      id="submit-booking-btn"
                      type="submit"
                      className="w-full py-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-sans text-xs uppercase tracking-widest font-bold border border-gold-500/20 shadow-md transition-all cursor-pointer"
                    >
                      Request Call Back
                    </button>
                    
                    <p className="font-sans text-[10px] text-charcoal-800/40 text-center leading-relaxed">
                      By submitting, you authorize Kavach Skin Clinic coordinators to contact you on the phone 
                      number provided to coordinate scheduling. We do not engage in promotional spam.
                    </p>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  id="booking-success"
                  key="booking-success-el"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 space-y-6 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shadow-inner relative">
                    <CheckCircle className="w-8 h-8" />
                    <div className="absolute -inset-2 rounded-full border border-emerald-400/20 animate-ping"></div>
                  </div>

                  <div className="space-y-2 max-w-md">
                    <h3 className="font-serif text-2xl font-bold text-emerald-950">
                      Booking Request Received
                    </h3>
                    <p className="font-sans text-xs text-charcoal-800/70 leading-relaxed">
                      Thank you! Your private slot request has been recorded. Our patient coordinator 
                      is auditing the schedule and will call you back shortly.
                    </p>
                  </div>

                  {/* Receipt block */}
                  {lastBooked && (
                    <div className="w-full max-w-sm bg-white p-5 rounded-2xl border border-gold-100 shadow-sm text-left relative overflow-hidden space-y-4">
                      {/* Stamp overlay */}
                      <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-800 border border-emerald-200 text-[8px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-gold-500" />
                        <span>Kavach Verified</span>
                      </div>

                      <div className="border-b border-emerald-100/50 pb-3">
                        <span className="font-sans text-[9px] uppercase tracking-wider text-charcoal-800/40 font-bold block">Patient Name</span>
                        <span className="font-sans text-xs font-bold text-emerald-950 block mt-0.5">{lastBooked.name}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 border-b border-emerald-100/50 pb-3">
                        <div>
                          <span className="font-sans text-[9px] uppercase tracking-wider text-charcoal-800/40 font-bold block">Requested Service</span>
                          <span className="font-sans text-[11px] font-semibold text-emerald-900 block mt-0.5">{lastBooked.problem}</span>
                        </div>
                        <div>
                          <span className="font-sans text-[9px] uppercase tracking-wider text-charcoal-800/40 font-bold block">Preferred Date</span>
                          <span className="font-sans text-[11px] font-semibold text-emerald-900 block mt-0.5">{lastBooked.preferredDate}</span>
                        </div>
                      </div>

                      <div>
                        <span className="font-sans text-[9px] uppercase tracking-wider text-charcoal-800/40 font-bold block">Booking Reference</span>
                        <span className="font-sans text-[10px] text-charcoal-800/60 font-mono block mt-0.5">{lastBooked.id}</span>
                      </div>
                    </div>
                  )}

                  <button
                    id="new-booking-btn"
                    onClick={() => setIsSuccess(false)}
                    className="font-sans text-xs font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 cursor-pointer"
                  >
                    Schedule another consultation
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
