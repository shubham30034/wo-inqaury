"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* HEADING SECTION - System Synced */}
        <div className="text-center mb-12">
          <h2 className="gym-heading">
            Find the <span className="text-[var(--color-primary)]">HQ</span>
          </h2>
          <p className="gym-text-muted mt-4">
            Visit the floor • Feel the vibe
          </p>
        </div>

        {/* MAIN GRID: MAP + INFO */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* MAP CARD (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative overflow-hidden border border-[var(--color-border)] shadow-2xl bg-white/[0.02]"
            style={{ borderRadius: 'var(--radius-gym-lg)' }}
          >
            {/* Map styling adjusted to stay dark but neutral */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.21!2d77.21!3d28.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzM2LjAiTiA3N8KwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, filter: "invert(90%) contrast(1.2) grayscale(0.9)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Glassmorphism Inner Ring */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" style={{ borderRadius: 'var(--radius-gym-lg)' }} />
          </motion.div>

          {/* INFO CARDS (Right Side) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* ADDRESS CARD */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="gym-card p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 text-[var(--color-primary)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[var(--color-text-main)] font-black uppercase text-sm tracking-widest mb-2 italic">Location</h3>
              <p className="gym-text-muted leading-relaxed">
                G-Floor, IronForge Tower, Main Market Area,<br />
                Nearby Parking, Sector 5.
              </p>
            </motion.div>

            {/* TIMINGS CARD */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="gym-card p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 text-[var(--color-primary)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[var(--color-text-main)] font-black uppercase text-sm tracking-widest mb-2 italic">Operation Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-medium">
                  <span className="text-[var(--color-text-muted)]">Mon - Sat:</span>
                  <span className="text-[var(--color-text-main)] tracking-tight">05:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm font-medium">
                  <span className="text-[var(--color-text-muted)]">Sunday:</span>
                  <span className="text-[var(--color-primary)] font-black tracking-tight">07:00 AM - 12:00 PM</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* MICRO TRUST TEXT */}
        <p className="mt-12 text-center text-[var(--color-text-muted)] text-[10px] font-[1000] uppercase tracking-[0.3em] opacity-50">
          Easily accessible by Public Transport • Free Parking Available
        </p>
      </div>
    </section>
  );
}