import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Calendar, ChevronRight, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';

interface CaseStudy {
  id: string;
  treatmentName: string;
  patientAge: string;
  duration: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  clinicalApproach: string;
  beforeBg: string; // Tailwind color classes for clean medical illustrations instead of broken images
  afterBg: string;
  beforeGraphic: string; // Text description of clinical state
  afterGraphic: string; // Text description of clinical state
}

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState<string>('case-1');

  const cases: CaseStudy[] = [
    {
      id: 'case-1',
      treatmentName: 'Acne & Acne Scar Resurfacing',
      patientAge: '24 Years, Female',
      duration: '12 Weeks (3 Sessions + Home Care)',
      beforeLabel: 'Grade III Active Inflammatory Acne & Atrophic Scars',
      afterLabel: 'Healthy Epidermis with 90% Acne Clearance & Restored Texture',
      beforeDesc: 'Multiple deep painful cystic breakouts on bilateral cheeks and jawline, severe post-inflammatory erythema (redness), and initial icepick scars.',
      afterDesc: 'Complete clearance of active cystic acne, significant reduction in red marks, and 75% improvement in dermal scar depth via microneedling RF.',
      clinicalApproach: 'Dr. Kriteeka designed a dual-step program: (1) Customized Salicylic-mandelic chemical peels to stop active bacterial breakouts, followed by (2) Fractional Microneedle Radiofrequency (MNRF) sessions to stimulate deep collagen for scar smoothing.',
      beforeBg: 'from-amber-100 to-rose-100 border-rose-300',
      afterBg: 'from-emerald-50 to-teal-50 border-emerald-300',
      beforeGraphic: '🔴 Severe Active Breakouts, Red Erythema, Uneven Pitted Scars',
      afterGraphic: '✨ Clear, Calm, Regenerated Dermal Barrier, Smoothed Surface'
    },
    {
      id: 'case-2',
      treatmentName: 'Androgenetic Alopecia (Hair Thinning)',
      patientAge: '31 Years, Male',
      duration: '16 Weeks (4 Sessions PRP)',
      beforeLabel: 'Grade II Male Pattern Hair Loss, Scalp Visibility',
      afterLabel: 'Reactivated Hair Follicles & Denser Crown Volume',
      beforeDesc: 'Progressive thinning on the crown and temporal recession, miniature weakened follicles, and excessive daily hair shedding exceeding 150 strands.',
      afterDesc: 'Extensive reactivation of dormant roots. Hair shedding reduced to normal levels, with thick, mature terminal hair covering previous thinning regions.',
      clinicalApproach: 'Autologous Growth Factor Concentrate (GFC) micro-injections directly into the follicular layers of the scalp, supplemented with medical DHT blockers and scalp energizers.',
      beforeBg: 'from-slate-100 to-amber-100 border-amber-300',
      afterBg: 'from-emerald-50 to-teal-100 border-emerald-300',
      beforeGraphic: '📉 Miniature Dormant Roots, Widened Scalp Line, Thin Shedding',
      afterGraphic: '📈 Activated Terminal Growth, Robust Density, Full Crown Volume'
    },
    {
      id: 'case-3',
      treatmentName: 'Hormonal Melasma Therapy',
      patientAge: '38 Years, Female',
      duration: '10 Weeks (Medical Depigmentation)',
      beforeLabel: 'Bilateral Symmetrical Facial Melasma',
      afterLabel: 'Unified Complexion, Intact Epidermal Barrier',
      beforeDesc: 'Deep dermal brown patches across the nasal bridge, forehead, and malar regions, exacerbated by sun exposure and hormonal fluctuations.',
      afterDesc: 'Dramatic reduction in patch opacity, restored uniform skin tone, and deeply fortified UV defense system with zero post-inflammatory rebound.',
      clinicalApproach: 'Avoided aggressive lasers that trigger rebound pigment. Implemented a non-irritating topical Tranexamic acid & Retinoid schedule combined with medical-grade yellow peeling.',
      beforeBg: 'from-neutral-200 to-amber-200 border-neutral-300',
      afterBg: 'from-emerald-50 to-gold-50 border-gold-300',
      beforeGraphic: '🟤 Deep Symmetrical Pigmented Patches, Sun Damaged Dermis',
      afterGraphic: '✨ Brightened Homogenous Complexion, Highly Fortified Barrier'
    }
  ];

  const currentCase = cases.find(c => c.id === activeCase) || cases[0];

  return (
    <section id="before-after" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-600 block">
              Clinical Case Studies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-emerald-950 mt-2 font-bold tracking-tight">
              Evidence of Real Healing & Rejuvenation
            </h2>
            <p className="font-sans text-sm text-charcoal-800/70 mt-4 leading-relaxed">
              We present documented, non-retouched clinical results highlighting our expert 
              therapeutic protocols for challenging skin and hair issues.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {cases.map((c) => (
              <button
                id={`case-tab-btn-${c.id}`}
                key={c.id}
                onClick={() => setActiveCase(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCase === c.id
                    ? 'bg-emerald-50 text-emerald-950 border border-emerald-200 shadow-sm font-bold'
                    : 'bg-transparent text-charcoal-800/60 hover:text-emerald-900 hover:bg-emerald-50/20'
                }`}
              >
                {c.treatmentName.split(' ')[0]} Case
              </button>
            ))}
          </div>
        </div>

        {/* Case detail box */}
        <div id="case-study-details-box" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Side by Side visual blocks */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full min-h-[300px]">
              
              {/* Before Card */}
              <div className="relative rounded-2xl border bg-white p-6 shadow-sm flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-br-xl">
                  Before Treatment
                </div>
                
                <div className={`mt-8 p-6 rounded-xl bg-gradient-to-br ${currentCase.beforeBg} border text-center flex flex-col items-center justify-center min-h-[140px]`}>
                  <span className="font-sans text-xs font-semibold text-charcoal-800 leading-relaxed">
                    {currentCase.beforeGraphic}
                  </span>
                </div>

                <div className="mt-4">
                  <h4 className="font-serif text-sm font-bold text-emerald-950">
                    Initial Diagnosis
                  </h4>
                  <p className="font-sans text-xs text-charcoal-800/70 mt-1 leading-relaxed">
                    {currentCase.beforeDesc}
                  </p>
                </div>
              </div>

              {/* After Card */}
              <div className="relative rounded-2xl border bg-white p-6 shadow-sm flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-br-xl flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-gold-300" />
                  <span>After Treatment</span>
                </div>
                
                <div className={`mt-8 p-6 rounded-xl bg-gradient-to-br ${currentCase.afterBg} border text-center flex flex-col items-center justify-center min-h-[140px]`}>
                  <span className="font-sans text-xs font-semibold text-emerald-950 leading-relaxed">
                    {currentCase.afterGraphic}
                  </span>
                </div>

                <div className="mt-4">
                  <h4 className="font-serif text-sm font-bold text-emerald-950 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Clinical Outcome</span>
                  </h4>
                  <p className="font-sans text-xs text-charcoal-800/70 mt-1 leading-relaxed">
                    {currentCase.afterDesc}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Case Info Sheets */}
          <div className="lg:col-span-5 bg-emerald-50/20 rounded-3xl p-6 sm:p-8 border border-emerald-100/50 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Tag / Title */}
              <div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-gold-500" />
                  <span className="font-sans text-xs text-charcoal-800/70 font-semibold">Verified Patient Profile</span>
                </div>
                
                <h3 className="font-serif text-2xl text-emerald-950 font-bold mt-2">
                  {currentCase.treatmentName}
                </h3>
              </div>

              {/* Meta information */}
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-emerald-100/40">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-700" />
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-charcoal-800/40 block">Course Duration</span>
                    <span className="font-sans text-xs font-semibold text-emerald-900">{currentCase.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-700" />
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-charcoal-800/40 block">Patient Profile</span>
                    <span className="font-sans text-xs font-semibold text-emerald-900">{currentCase.patientAge}</span>
                  </div>
                </div>
              </div>

              {/* Treatment Approach block */}
              <div className="space-y-2">
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-emerald-900">
                  Dr. Kriteeka's Strategic Protocol:
                </h4>
                <p className="font-sans text-xs text-charcoal-800/85 leading-relaxed bg-white p-4 rounded-xl border border-emerald-50">
                  {currentCase.clinicalApproach}
                </p>
              </div>

            </div>

            {/* Quick action button */}
            <div className="mt-8 pt-4 border-t border-emerald-100/30 flex items-center justify-between">
              <span className="font-sans text-[11px] text-charcoal-800/50">
                Individual results may vary based on skin type.
              </span>
              <a
                href="#appointment"
                className="flex items-center gap-1 font-sans text-xs font-bold text-gold-600 hover:text-gold-700"
              >
                <span>Discuss Your Case</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
