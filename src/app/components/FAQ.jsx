"use client";

import { motion } from "framer-motion";

const FAQS = [
  {
    q: "Kya trial ke liye card chahiye?",
    a: "Bilkul nahi. Bas WhatsApp pe click karo, apna slot book karo aur 3 din tak full workout enjoy karo. Zero hidden charges.",
    icon: "💳"
  },
  {
    q: "₹999 mein sab kuch milega?",
    a: "Haan! Isme weights, cardio, aur expert guidance sab included hai. Ye koi 'basic' plan nahi, full elite access hai.",
    icon: "💎"
  },
  {
    q: "Trial ke baad join karna zaroori hai?",
    a: "Nahi. Agar aapko vibe pasand nahi aayi, toh hum dosti ke saath alvida kahenge. No pressure, no constant calls.",
    icon: "🤝"
  }
];

export default function FearlessGuarantee() {
  return (
    <section className="relative py-24 bg-[var(--color-background)]">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-1 bg-[var(--color-primary)] mb-8 rounded-full shadow-[0_0_15px_var(--color-primary-glow)]" />
          <h2 className="gym-heading mb-4">
            Zero Risk. <span className="text-[var(--color-primary)]">Full Gains.</span>
          </h2>
          <p className="gym-text-muted max-w-sm">
            Aapke dimaag mein sawaal hain? Hamare paas seedhe jawaab hain.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="gym-card group p-6 sm:p-8 flex gap-6 items-start hover:bg-white/[0.04]"
            >
              <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">
                {faq.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-black italic uppercase tracking-tight text-[var(--color-text-main)]">
                  {faq.q}
                </h4>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)] group-hover:text-white/80 transition-colors">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Final Hook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-8 rounded-[var(--radius-card)] border-2 border-dashed border-[var(--color-border)] text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-[0.03] animate-pulse" />
          <h3 className="relative z-10 text-2xl font-[1000] italic uppercase mb-2">
            The ₹999 <span className="text-[var(--color-primary)]">Legacy Offer</span>
          </h3>
          <p className="relative z-10 gym-text-muted mb-6">
            Ye price sirf pehle 50 members ke liye hai. <br className="hidden sm:block" />
            Abhi join karo aur life-time ke liye apna rate lock karo.
          </p>
          <div className="relative z-10 inline-flex items-center gap-2 px-6 py-2 bg-[var(--color-primary)]/10 rounded-full border border-[var(--color-primary)]/20">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)]">Only 12 Slots Left</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}