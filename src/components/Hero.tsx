import { motion } from 'motion/react';
import { Calendar, Phone, Star, ShieldCheck, Award, Sparkles, CheckCircle } from 'lucide-react';
import clinicHeroImg from '../assets/images/regenerated_image_1783339673620.png';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const trusts = [
    { icon: <Star className="w-5 h-5 text-gold-500 fill-gold-500" />, title: '4.9★ Rating', desc: 'Patient satisfaction' },
    { icon: <Award className="w-5 h-5 text-emerald-600" />, title: 'Expert Dermatologist', desc: 'MBBS, MD Dermatology' },
    { icon: <Sparkles className="w-5 h-5 text-gold-500" />, title: 'Personalized Care', desc: 'Evidence-based protocols' },
    { icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />, title: 'Modern Skin Care', desc: 'US-FDA approved technology' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center bg-[#fcfbfa] overflow-hidden">
      
      {/* Background Decorative Patterns */}
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-[0.03] bg-[radial-gradient(#0d6e53_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-50/40 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-gold-50/30 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div id="hero-text-container" className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/60"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></div>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-emerald-800 uppercase">
                Welcome to Kavach Skin Clinic
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-emerald-950 leading-[1.1]"
              >
                Healthy Skin Begins With{' '}
                <span className="relative inline-block font-serif font-style-italic font-bold">
                  Expert Care
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-gold-300/30 -z-10 rounded-full"></span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="pt-2"
              >
                <p className="font-serif text-2xl text-emerald-900 font-semibold tracking-wide">
                  Dr. Kriteeka Saini
                </p>
                <p className="font-sans text-sm tracking-widest text-gold-600 font-bold uppercase mt-1">
                  MBBS, MD Dermatology • Consultant Dermatologist
                </p>
                <p className="font-sans text-base text-charcoal-800/80 max-w-xl mt-4 leading-relaxed">
                  Experience world-class, evidence-based dermatological care. Delivering ethical, 
                  personalized treatments using the latest skin-rejuvenating procedures and medical science.
                </p>
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                id="hero-book-btn"
                onClick={() => onNavigate('appointment')}
                className="flex items-center gap-3 font-sans text-xs uppercase tracking-widest font-bold text-white bg-emerald-800 hover:bg-emerald-900 px-8 py-4 rounded-full shadow-lg hover:shadow-emerald-900/10 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-gold-300" />
                <span>Book Appointment</span>
              </button>

              <a
                id="hero-call-btn"
                href="tel:+919876543210"
                className="flex items-center gap-3 font-sans text-xs uppercase tracking-widest font-bold text-emerald-900 hover:text-emerald-950 bg-white hover:bg-gold-50/30 px-8 py-4 rounded-full border border-emerald-800/20 shadow-md hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Micro badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 pt-4 border-t border-emerald-100/50 max-w-lg"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-500" />
                <span className="font-sans text-xs text-charcoal-800/80 font-medium">Ethical Guidelines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-500" />
                <span className="font-sans text-xs text-charcoal-800/80 font-medium">No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-500" />
                <span className="font-sans text-xs text-charcoal-800/80 font-medium">FDA Approved Gear</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Image Layout */}
          <div id="hero-image-container" className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Main Image Frame with Gold Accents */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16:11] lg:aspect-square">
                <img
                  src={clinicHeroImg}
                  alt="Kavach Skin Clinic Luxury Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent"></div>
              </div>

              {/* Decorative Gold Border overlay */}
              <div className="absolute -inset-2 rounded-2xl border border-gold-400/30 -z-10 pointer-events-none translate-x-3 translate-y-3"></div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gold-100/80 max-w-[200px]"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="font-sans text-xs font-bold text-emerald-950 mt-1">4.9★ Patient Rating</p>
                <p className="font-sans text-[10px] text-charcoal-800/70">Based on Google Reviews</p>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Trust grid footer */}
        <div id="trust-banner" className="mt-20 pt-10 border-t border-emerald-100/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trusts.map((item, index) => (
              <motion.div
                id={`trust-item-${index}`}
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white p-4 rounded-xl border border-emerald-50 shadow-sm"
              >
                <div className="p-2 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-emerald-950 tracking-wide uppercase">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[11px] text-charcoal-800/70 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
