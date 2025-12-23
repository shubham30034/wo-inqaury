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
    <section className="relative py-16 bg-[#050505] overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        
        {/* Section Header - Sized Down for Mobile */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-[1000] text-white tracking-tighter uppercase italic">
            Is IronForge <span className="text-[#22c55e]">Right For You?</span>
          </h2>
          <div className="mt-3 h-1 w-12 bg-[#22c55e] mx-auto rounded-full opacity-40" />
        </div>

        {/* Bento-Style Grid - Reduced Padding & Gaps */}
        <div className="grid gap-4 sm:grid-cols-3">
          {TARGET_AUDIENCE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative p-6 sm:p-8 rounded-[1.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Icon - Smaller on Mobile */}
              <div className="mb-4 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-black text-white mb-2 uppercase tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium group-hover:text-gray-400 transition-colors">
                {item.desc}
              </p>

              {/* Hover Decor - Color Fixed */}
              <div className="absolute inset-0 border-2 border-[#22c55e]/0 group-hover:border-[#22c55e]/20 rounded-[1.5rem] transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Micro-Copy */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 text-center text-gray-600 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]"
        >
          No Ego • No Judgement • Just Results
        </motion.p>
      </div>
    </section>
  );
}