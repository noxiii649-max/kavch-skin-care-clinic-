import { motion } from 'motion/react';
import { Award, GraduationCap, HeartHandshake, ShieldAlert, Sparkles, Star } from 'lucide-react';
import doctorPortraitImg from '../assets/images/doctor_portrait_1783337287671.jpg';

export default function AboutDoctor() {
  const qualifications = [
    {
      icon: <GraduationCap className="w-5 h-5 text-gold-500" />,
      title: 'MD - Dermatology',
      desc: 'Specialist degree in Dermatological Sciences, Venereology, and Leprosy. Intensive training in clinical procedures.',
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-gold-500" />,
      title: 'MBBS Degree',
      desc: 'Completed medical studies from a premier governmental medical college with distinguished clinical honors.',
    },
    {
      icon: <Award className="w-5 h-5 text-gold-500" />,
      title: 'Professional Member',
      desc: 'Indian Association of Dermatologists, Venereologists and Leprologists (IADVL).',
    },
  ];

  const corePillars = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-emerald-700" />,
      title: 'Patient Centric',
      desc: 'Listening to your unique story and designing individualized skin journeys.',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-emerald-700" />,
      title: 'Ethical Treatment',
      desc: 'We advocate for minimal, scientifically necessary interventions, never pushy packages.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-700" />,
      title: 'Evidence-Based',
      desc: 'Every treatment and prescription is fully grounded in peer-reviewed medical science.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-emerald-50/30 relative overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-gold-100/20 blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-emerald-100/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div id="about-heading" className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
            Professional Profile
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-emerald-950 mt-2 font-bold tracking-tight">
            The Dermatologist Behind Kavach Skin Clinic
          </h2>
          <div className="w-16 h-1 bg-gold-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Doctor Card */}
          <div id="doctor-card-container" className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-6 shadow-xl border border-gold-100/50 relative overflow-hidden group"
            >
              {/* Gold corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-400"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-400"></div>

              {/* Portrait Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-square mb-6 bg-emerald-50">
                <img
                  src={doctorPortraitImg}
                  alt="Dr. Kriteeka Saini"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-emerald-900/95 text-white px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-gold-400/40">
                  MBBS, MD
                </div>
              </div>

              {/* Doctor Quick Stats */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-emerald-950 font-bold">
                    Dr. Kriteeka Saini
                  </h3>
                  <p className="font-sans text-xs text-gold-600 font-bold uppercase tracking-wider mt-0.5">
                    Consultant Dermatologist & Trichologist
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-50 space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
                    <span className="font-sans text-xs text-charcoal-800 font-semibold">Regd No: State Medical Council</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span className="font-sans text-xs text-charcoal-800/80">Ethical Dermatology Advocate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span className="font-sans text-xs text-charcoal-800/80">Latest US-FDA Approved Treatments</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div id="doctor-bio-container" className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h3 className="font-serif text-2xl sm:text-3xl text-emerald-900 font-semibold">
                Expertise Rooted in Ethics & Scientific Rigor
              </h3>
              
              <p className="font-sans text-sm text-charcoal-800/90 leading-relaxed">
                At Kavach Skin Clinic, we believe skin health is the mirror of overall wellbeing. 
                Founded by <strong>Dr. Kriteeka Saini</strong> (MBBS, MD Dermatology), Kavach was built on 
                the pillars of scientific integrity, clinical excellence, and deep empathy.
              </p>
              
              <p className="font-sans text-sm text-charcoal-800/90 leading-relaxed">
                Dr. Kriteeka Saini has extensive experience in diagnosing and treating challenging pathological skin disorders, 
                including chronic psoriasis, hair loss, complicated fungal infections, and melasma. She completed her specialized 
                MD in Dermatology with clinical excellence, working closely with advanced laser parameters and aesthetic protocols.
              </p>

              <blockquote className="border-l-4 border-gold-400 pl-4 py-1.5 italic font-serif text-base text-emerald-950 font-medium bg-white/50 rounded-r-lg">
                "Our skins guard us from the world. My mission is to guard your skin, utilizing only 
                evidence-based clinical solutions and avoiding unnecessary high-cost commercial cosmetic packages."
              </blockquote>
            </motion.div>

            {/* Qualifications list */}
            <div id="doctor-credentials-list" className="space-y-4">
              <h4 className="font-sans text-xs font-bold tracking-wider uppercase text-emerald-900">
                Credentials & Focus Areas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {qualifications.map((q, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-emerald-100/40 shadow-sm hover:border-gold-300 transition-colors"
                  >
                    <div className="p-2 w-fit rounded-lg bg-gold-50 mb-3">{q.icon}</div>
                    <h5 className="font-sans text-xs font-bold text-emerald-950 uppercase">{q.title}</h5>
                    <p className="font-sans text-[11px] text-charcoal-800/70 mt-1 leading-relaxed">{q.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Pillars */}
            <div id="doctor-pillars" className="pt-4 border-t border-emerald-100/50 space-y-4">
              <h4 className="font-sans text-xs font-bold tracking-wider uppercase text-emerald-900">
                Our Patient Promise
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {corePillars.map((p, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="p-1 w-fit h-fit rounded bg-emerald-100 shrink-0 mt-0.5">{p.icon}</div>
                    <div>
                      <h5 className="font-sans text-xs font-bold text-emerald-950">{p.title}</h5>
                      <p className="font-sans text-[11px] text-charcoal-800/80 mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
