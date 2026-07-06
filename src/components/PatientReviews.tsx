import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '../data/reviews';

export default function PatientReviews() {
  const [filter, setFilter] = useState<string>('all');

  const treatmentsWithReviews = ['all', 'Acne & Acne Scar', 'Hair Fall & Restoration', 'Melasma Management', 'Laser Procedures'];

  const filteredReviews = filter === 'all' 
    ? REVIEWS 
    : REVIEWS.filter(r => r.treatment === filter);

  return (
    <section id="reviews" className="py-24 bg-emerald-50/20 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-gold-200/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-emerald-200/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div id="reviews-heading" className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
            Patient Satisfaction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-emerald-950 mt-2 font-bold tracking-tight">
            Loved By Our Patients
          </h2>
          <p className="font-sans text-sm text-charcoal-800/70 mt-4 max-w-xl mx-auto">
            Read authentic testimonials and experiences written by patients who achieved clear skin 
            and restored confidence under the medical supervision of Dr. Kriteeka Saini.
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Filters */}
        <div id="reviews-filters" className="flex flex-wrap justify-center gap-2 mb-10">
          {treatmentsWithReviews.map((t) => (
            <button
              id={`review-filter-${t.replace(/\s+/g, '-').toLowerCase()}`}
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                filter === t
                  ? 'bg-emerald-800 text-white shadow-sm font-bold'
                  : 'bg-white text-charcoal-800/80 border border-emerald-100/30 hover:bg-emerald-50'
              }`}
            >
              {t === 'all' ? 'All Reviews' : t.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Reviews Bento Grid */}
        <div id="reviews-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review, index) => (
              <motion.div
                id={`review-card-${review.id}`}
                key={review.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-emerald-100/20 hover:border-gold-300/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Quote Icon Background */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-emerald-500/5 group-hover:text-emerald-500/10 transition-colors pointer-events-none" />

                <div className="space-y-4">
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="font-sans text-xs text-charcoal-800/90 leading-relaxed italic">
                    "{review.comment}"
                  </p>

                </div>

                {/* Patient Profile */}
                <div className="mt-6 pt-4 border-t border-emerald-50 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-emerald-950">
                      {review.name}
                    </h4>
                    <span className="font-sans text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md mt-1 inline-block">
                      {review.treatment}
                    </span>
                  </div>

                  <div className="text-right">
                    {review.verified && (
                      <div className="flex items-center gap-1 justify-end">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="font-sans text-[10px] text-emerald-800 font-bold uppercase tracking-wider">
                          Verified
                        </span>
                      </div>
                    )}
                    <span className="font-sans text-[9px] text-charcoal-800/40 block mt-0.5">
                      {review.date}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
