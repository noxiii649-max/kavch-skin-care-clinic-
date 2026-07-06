import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Sparkles, Scale, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-emerald-800" />,
      title: 'Experienced MD Dermatologist',
      desc: 'All consultations, diagnostics, and high-precision laser parameters are performed directly by Dr. Kriteeka Saini, with zero delegation to junior technicians.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-800" />,
      title: 'Evidence-Based Treatments Only',
      desc: 'We stay clear of commercialized pseudoscience. Every skin and hair treatment we recommend is backed by international clinical studies and standard medical consensus.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-800" />,
      title: 'Latest US-FDA Approved Technology',
      desc: 'Our clinic is outfitted with state-of-the-art laser and microneedling systems configured with active cooling to guarantee complete safety and minimal downtime on Indian skin.',
    },
    {
      icon: <Scale className="w-6 h-6 text-emerald-800" />,
      title: 'Affordable, Ethical & Transparent',
      desc: 'No heavy commercial sales pitches, no hidden charges, and no pushy multi-session aesthetic bundles. You only pay for what your skin genuinely requires.',
    },
    {
      icon: <Heart className="w-6 h-6 text-emerald-800" />,
      title: 'Compassionate Care & Friendly Staff',
      desc: 'Experience a highly comforting, clean, sterile clinical atmosphere. Our highly trained staff maintains strict confidentiality and hospital-grade sanitization standards.',
    },
  ];

  const statistics = [
    { value: '100%', label: 'Clinical Focus' },
    { value: '4.9★', label: 'Patient Rating' },
    { value: '0%', label: 'Hidden Upcharges' },
    { value: '1-to-1', label: 'Doctor Consultation' },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-emerald-950 text-white relative overflow-hidden">
      
      {/* Premium Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-emerald-800/10 blur-3xl pointer-events-none"></div>
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Title & stats */}
          <div id="why-text-column" className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-300">
                Ethical Excellence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Why Discerning Patients Choose Kavach
              </h2>
              <p className="font-sans text-sm text-emerald-100/70 leading-relaxed">
                We combine the clinical precision of Apollo Hospitals with the warmth and personalized 
                attention of a boutique luxury skin care suite. We focus on healing, not upselling.
              </p>
              <div className="w-12 h-1 bg-gold-400 rounded-full pt-0.5"></div>
            </div>

            {/* Stats Grid */}
            <div id="stats-grid" className="grid grid-cols-2 gap-4">
              {statistics.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-gold-400/20 transition-all text-center"
                >
                  <span className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text block">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-emerald-100/60 block mt-1 font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Check points */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span className="font-sans text-xs text-emerald-100/90">Clinical safety verified protocols</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span className="font-sans text-xs text-emerald-100/90">Hospital-grade sterile spaces</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bento List */}
          <div id="why-points-column" className="lg:col-span-7 space-y-4">
            {points.map((point, index) => (
              <motion.div
                id={`why-point-item-${index}`}
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-gold-500/20 transition-all duration-300 group"
              >
                <div className="p-3 w-fit h-fit rounded-xl bg-gold-100 text-emerald-900 shrink-0 group-hover:scale-105 transition-transform">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                    {point.title}
                  </h3>
                  <p className="font-sans text-xs text-emerald-100/70 mt-1.5 leading-relaxed">
                    {point.desc}
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
