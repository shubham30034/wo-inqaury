"use client";

import { motion } from "framer-motion";

const TARGET_AUDIENCE = [
  { 
    title: "The First-Timer", 
    desc: "Gym environment se dar lagta hai? Humne IronForge banaya hi beginners ke liye hai. Zero judgment, pure support.",
    icon: "🎯",
    tag: "Safe Space"
  },
  { 
    title: "The Busy Pro", 
    desc: "Work-life balance bigad gaya hai? 45-min explosive workouts jo aapke tight schedule mein fit ho jayein.",
    icon: "👔",
    tag: "Efficiency"
  },
  { 
    title: "The Reset", 
    desc: "After a long break, return is hard. Pressure mat lo, hum slow start karenge aur pace aapke according set karenge.",
    icon: "🔄",
    tag: "New Start"
  }
];

export default function WhoThisIsFor() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="gym-heading"
          >
            Built For <span className="text-[var(--color-primary)]">Real People</span>
          </motion.h2>
          <p className="gym-text-muted mt-4 max-w-md mx-auto text-base">
            IronForge unke liye nahi jo pehle se pro hain, balki unke liye hai jo <span className="text-white font-bold">Pro banna chahte hain.</span>
          </p>
          <div className="mt-6 h-1 w-16 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent mx-auto rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {TARGET_AUDIENCE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="gym-card group relative p-8 sm:p-10 flex flex-col h-full"
            >
              {/* Corner Tag */}
              <span className="absolute top-4 right-4 text-[7px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] opacity-40 group-hover:opacity-100 transition-opacity">
                {item.tag}
              </span>

              {/* Icon Animation */}
              <div className="mb-6 text-4xl sm:text-5xl group-hover:rotate-[12deg] transition-all duration-500 ease-out inline-block w-fit">
                <div className="relative">
                   <div className="absolute inset-0 blur-lg bg-[var(--color-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <span className="relative">{item.icon}</span>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-[1000] text-[var(--color-text-main)] mb-4 uppercase tracking-tighter italic leading-none">
                {item.title}
              </h3>
              
              <p className="gym-text-muted text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                {item.desc}
              </p>

              {/* Decorative Line */}
              <div className="mt-8 w-8 h-[2px] bg-[var(--color-primary)]/20 group-hover:w-full transition-all duration-700" />
              
              <div className="absolute inset-0 border border-[var(--color-primary)]/0 group-hover:border-[var(--color-primary)]/10 rounded-[var(--radius-card)] transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Micro-Copy */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-4 opacity-30">
            <div className="h-[1px] w-12 bg-white" />
            <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
              The IronForge Vibe
            </span>
            <div className="h-[1px] w-12 bg-white" />
          </div>
          <p className="text-[var(--color-text-main)] text-xs sm:text-sm font-bold italic tracking-wider opacity-60">
            NO EGO • NO JUDGMENT • JUST RESULTS
          </p>
        </motion.div>
      </div>
    </section>
  );
}