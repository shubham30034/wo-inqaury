"use client";

import { motion } from "framer-motion";

const TARGET_AUDIENCE = [
  { 
    title: "The Beginner", 
    desc: "First time joining a gym? Hum aapko guide karenge.",
    icon: "🎯"
  },
  { 
    title: "The Comeback", 
    desc: "Restarting after a break? Get back in rhythm with zero pressure.",
    icon: "🔥"
  },
  { 
    title: "The Skeptic", 
    desc: "Commitment se darr lagta hai? Try us for free first.",
    icon: "🛡️"
  }
];

export default function WhoThisIsFor() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        
        {/* Section Header - Connected to Global Heading System */}
        <div className="text-center mb-10">
          <h2 className="gym-heading">
            Is IronForge <span className="text-[var(--color-primary)]">Right For You?</span>
          </h2>
          <div className="mt-3 h-1.5 w-12 bg-[var(--color-primary)] mx-auto rounded-full opacity-30" />
        </div>

        {/* Bento-Style Grid - Using gym-card Design System */}
        <div className="grid gap-4 sm:grid-cols-3">
          {TARGET_AUDIENCE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="gym-card group relative p-6 sm:p-8"
            >
              {/* Icon - Animation stays, but colors are dynamic */}
              <div className="mb-4 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_var(--color-primary-glow)]">
                {item.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-black text-[var(--color-text-main)] mb-2 uppercase tracking-tight italic">
                {item.title}
              </h3>
              
              <p className="gym-text-muted group-hover:text-[var(--color-text-main)] transition-colors duration-300">
                {item.desc}
              </p>

              {/* Hover Decor - Linked to Global Primary Color */}
              <div className="absolute inset-0 border-2 border-[var(--color-primary)]/0 group-hover:border-[var(--color-primary)]/20 rounded-[var(--radius-card)] transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Micro-Copy - Connected to Muted Text System */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 text-center text-[var(--color-text-muted)] text-[9px] sm:text-[11px] font-[1000] uppercase tracking-[0.3em] opacity-50"
        >
          No Ego • No Judgement • Just Results
        </motion.p>
      </div>
    </section>
  );
}