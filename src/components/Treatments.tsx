import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, UserRound, Sun, Layers, ShieldAlert, Activity, Droplet, 
  HeartHandshake, ShieldCheck, Hammer, Zap, RefreshCw, Clock, Scissors,
  X, Check, Calendar, ArrowRight, ChevronRight, Info
} from 'lucide-react';
import { Treatment } from '../types';
import { TREATMENTS } from '../data/treatments';

interface TreatmentsProps {
  onSelectTreatmentForBooking: (treatmentName: string) => void;
}

export default function Treatments({ onSelectTreatmentForBooking }: TreatmentsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'clinical', label: 'Clinical Dermatology' },
    { id: 'aesthetic', label: 'Aesthetic Skin Care' },
    { id: 'hair', label: 'Hair & Scalp' },
    { id: 'allergy', label: 'Skin Allergies & Nails' },
  ];

  const filteredTreatments = TREATMENTS.filter(t => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'allergy') return t.category === 'allergy' || t.id === 'nail-disorders';
    return t.category === activeCategory;
  });

  const getIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className={className} />;
      case 'UserRound': return <UserRound className={className} />;
      case 'Sun': return <Sun className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Droplet': return <Droplet className={className} />;
      case 'HeartHandshake': return <HeartHandshake className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Hammer': return <Hammer className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'RefreshCw': return <RefreshCw className={className} />;
      case 'Clock': return <Clock className={className} />;
      case 'Scissors': return <Scissors className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const handleBookClick = (treatment: Treatment) => {
    setSelectedTreatment(null);
    onSelectTreatmentForBooking(treatment.name);
  };

  return (
    <section id="treatments" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50/10 to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-emerald-50/20 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div id="treatments-heading" className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
            Dermatological Care
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-emerald-950 mt-2 font-bold tracking-tight">
            Specialized Clinical & Aesthetic Treatments
          </h2>
          <p className="font-sans text-sm text-charcoal-800/70 mt-4 max-w-xl mx-auto">
            Explore our state-of-the-art medical dermatological therapies, customized skin aesthetics, 
            and targeted trichology systems designed by Dr. Kriteeka Saini.
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Filter Categories */}
        <div id="treatments-filters" className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              id={`treatment-filter-${cat.id}`}
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-md scale-102 font-bold'
                  : 'bg-emerald-50/30 text-charcoal-800 border-emerald-100/50 hover:bg-emerald-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatments Cards Grid */}
        <div id="treatments-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((treatment, index) => (
              <motion.div
                id={`treatment-card-${treatment.id}`}
                key={treatment.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[#fbfaf8] hover:bg-white rounded-2xl p-6 border border-emerald-100/30 hover:border-gold-300/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-800 group-hover:text-white transition-all duration-300">
                      {getIcon(treatment.iconName)}
                    </div>
                    <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-100 px-2.5 py-1 rounded-full">
                      {treatment.category}
                    </span>
                  </div>

                  {/* Name & Short Description */}
                  <h3 className="font-serif text-lg font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                    {treatment.name}
                  </h3>
                  
                  <p className="font-sans text-[12px] text-charcoal-800/70 mt-2 line-clamp-3 leading-relaxed">
                    {treatment.shortDescription}
                  </p>

                  {/* Common symptoms list */}
                  <div className="mt-4 pt-3 border-t border-emerald-100/30">
                    <span className="font-sans text-[10px] uppercase tracking-wider text-charcoal-800/40 font-bold block">
                      Common Symptoms
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {treatment.symptoms.slice(0, 3).map((sym, i) => (
                        <span key={i} className="font-sans text-[10px] text-emerald-900 bg-emerald-50/60 px-2 py-0.5 rounded-md">
                          {sym}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Action */}
                <div className="mt-6 pt-4 border-t border-emerald-100/30 flex items-center justify-between">
                  <span className="font-sans text-[11px] font-semibold text-charcoal-800/50">
                    Est: {treatment.duration}
                  </span>

                  <button
                    id={`learn-more-btn-${treatment.id}`}
                    onClick={() => setSelectedTreatment(treatment)}
                    className="flex items-center gap-1 font-sans text-xs font-bold text-gold-600 group-hover:text-gold-700 transition-colors cursor-pointer group/btn"
                  >
                    <span>View Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Quick advisory */}
        <div id="treatments-advisory" className="mt-12 p-5 bg-gold-50/40 rounded-2xl border border-gold-100 flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-gold-500 shrink-0" />
          <p className="font-sans text-xs text-charcoal-800/80 text-center sm:text-left leading-relaxed">
            <strong>Medical Note:</strong> The descriptions above represent general medical and aesthetic procedures. 
            Dr. Kriteeka Saini will perform a comprehensive diagnostic physical skin analysis during your consultation 
            before customizing any localized clinical peel or laser setting.
          </p>
        </div>

      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreatment(null)}
              className="absolute inset-0 bg-emerald-950/40 backdrop-blur-md"
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-[#fbfaf8] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gold-100 relative z-10 flex flex-col max-h-[85vh]"
            >
              
              {/* Gold Top Banner Accent */}
              <div className="h-2 w-full bg-gradient-to-r from-emerald-800 via-gold-400 to-emerald-900"></div>

              {/* Modal Close Button */}
              <button
                id="modal-close-btn"
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-emerald-50 text-emerald-900 hover:bg-emerald-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Header info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
                    {getIcon(selectedTreatment.iconName, "w-7 h-7")}
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-100 px-3 py-1 rounded-full">
                      {selectedTreatment.category} Care
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-emerald-950 mt-2">
                      {selectedTreatment.name}
                    </h3>
                  </div>
                </div>

                {/* Main description */}
                <div className="space-y-4">
                  <h4 className="font-sans text-xs font-bold tracking-widest text-emerald-900 uppercase">
                    Our Dermatological Protocol
                  </h4>
                  <p className="font-sans text-sm text-charcoal-800/90 leading-relaxed bg-white p-4 rounded-xl border border-emerald-50">
                    {selectedTreatment.longDescription}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <h4 className="font-sans text-xs font-bold tracking-widest text-emerald-900 uppercase">
                    Key Clinical Benefits & Outcomes
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedTreatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-2 bg-emerald-50/30 p-2.5 rounded-lg border border-emerald-100/20">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-charcoal-800 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick details footer within modal */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-100/40">
                  <div>
                    <span className="font-sans text-[10px] font-bold text-charcoal-800/40 uppercase block">
                      Target Symptoms
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedTreatment.symptoms.map((s, i) => (
                        <span key={i} className="font-sans text-[10px] text-emerald-950 bg-gold-50 border border-gold-100/50 px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-sans text-[10px] font-bold text-charcoal-800/40 uppercase block">
                      Typical Session Duration
                    </span>
                    <span className="font-sans text-sm font-semibold text-emerald-900 block mt-1">
                      {selectedTreatment.duration}
                    </span>
                  </div>
                </div>

              </div>

              {/* Modal Footer CTA */}
              <div className="bg-emerald-50/60 p-4 sm:px-8 border-t border-emerald-100/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="font-sans text-xs text-charcoal-800/70 font-medium">
                  Have questions about this specific protocol?
                </span>
                
                <button
                  id="modal-book-cta"
                  onClick={() => handleBookClick(selectedTreatment)}
                  className="flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest font-bold text-white bg-emerald-800 hover:bg-emerald-900 px-5 py-3 rounded-full transition-all duration-300 shadow-md cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold-300" />
                  <span>Request Appointment</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gold-300" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
