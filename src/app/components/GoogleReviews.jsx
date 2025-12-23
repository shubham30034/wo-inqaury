"use client";

import { motion } from "framer-motion";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Rahul Verma",
      text: "Trainer support bahut acha hai. Trial ke baad membership le li.",
      rating: 5,
    },
    {
      name: "Neha Sharma",
      text: "Clean gym, good crowd. Female friendly and safe environment.",
      rating: 5,
    },
    {
      name: "Amit Singh",
      text: "₹999 trial worth it. Machines are well maintained and high quality.",
      rating: 5,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      {/* Background Glow - Using Primary Variable */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[var(--color-primary)] opacity-[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-4 h-4 text-[var(--color-primary)] fill-current drop-shadow-[0_0_5px_var(--color-primary-glow)]" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="gym-heading">
            Trusted by <span className="text-[var(--color-primary)]">the Community</span>
          </h2>
          <p className="gym-text-muted mt-3">
            4.8/5.0 Rating based on Google Maps reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gym-card group relative p-6 sm:p-8"
            >
              {/* Google Icon Badge */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-30 transition-opacity">
                <svg className="w-5 h-5 fill-[var(--color-text-main)]" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.288 1.288-3.312 2.688-7.392 2.688-6.4 0-11.536-5.2-11.536-11.536S4.616 1.12 11.016 1.12c3.488 0 6.016 1.368 7.896 3.184l2.312-2.312C19.168.128 15.6.128 11.016.128 4.936.128 0 5.064 0 11.12s4.936 11 11.016 11c3.296 0 5.792-1.072 7.736-3.112 2-2 2.648-4.784 2.648-7.12 0-.68-.056-1.328-.16-1.968h-8.76z" />
                </svg>
              </div>

              <div className="flex flex-col h-full">
                <p className="text-[var(--color-text-main)] opacity-80 text-sm leading-relaxed mb-6 italic">
                  “{review.text}”
                </p>
                
                <div className="mt-auto flex items-center gap-3">
                  {/* Avatar using System Colors */}
                  <div className="w-9 h-9 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[10px] font-black text-[var(--color-primary)] border border-[var(--color-primary)]/20 shadow-[0_0_15px_var(--color-primary-glow)]">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-[var(--color-text-main)] text-xs font-black uppercase tracking-tight italic">
                      {review.name}
                    </p>
                    <p className="text-[var(--color-primary)] text-[9px] font-bold uppercase tracking-widest">
                      Verified Local Guide
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* External Link Button - System Themed */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest"
          >
            <span>Read all reviews on Google Maps</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}