"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/app/lib/analytics";
import { getActiveOffer } from "@/app/lib/offerConfig";

export default function Goals() {
  const whatsappNumber = "918279898128";
  const offer = getActiveOffer();

  const goals = [
    {
      name: "Fat Loss",
      desc: "Lose fat, improve stamina, and feel lighter",
      icon: "⚡",
    },
    {
      name: "Muscle Gain",
      desc: "Build strength with structured training",
      icon: "💪",
    },
    {
      name: "General Fitness",
      desc: "Stay active, flexible, and injury-free",
      icon: "🧘",
    },
  ];

  const buildLink = (goal) => {
    let goalLine = "";
    if (goal === "Fat Loss") goalLine = "My goal is fat loss and improving stamina.";
    if (goal === "Muscle Gain") goalLine = "My goal is muscle gain and strength training.";
    if (goal === "General Fitness") goalLine = "My goal is overall fitness and staying active.";

    const msg = `Hi, I want to start the ${offer.trialDays}-day free trial.\n${goalLine}\nWhen is the best time to visit?`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <div className="mx-auto max-w-6xl px-5 relative z-10">
        
        {/* Header - Connected to System */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="gym-heading"
          >
            Choose Your <span className="text-[var(--color-primary)]">Mission</span>
          </motion.h2>
          <p className="gym-text-muted mt-2 max-w-[280px] sm:max-w-md mx-auto">
            Tap a goal to get your personalized plan on WhatsApp instantly.
          </p>
        </div>

        {/* Goals Grid - Using gym-card Design System */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal, index) => (
            <motion.a
              key={goal.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              href={buildLink(goal.name)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", `goal_${goal.name.toLowerCase()}`)}
              className="gym-card group relative flex flex-col p-6 sm:p-8 overflow-hidden active:scale-95 transition-all duration-300"
            >
              {/* Dynamic Gradient Overlay (Using System Primary Color) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              {/* Icon Container - Synced with variables */}
              <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/5 border border-[var(--color-border)] flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-8 transition-transform group-hover:scale-110 group-hover:border-[var(--color-primary)]/30">
                {goal.icon}
              </div>

              {/* Text - System Typography */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-2xl font-black text-[var(--color-text-main)] uppercase tracking-tight mb-2 italic">
                  {goal.name}
                </h3>
                <p className="gym-text-muted mb-6 sm:mb-8 group-hover:text-[var(--color-text-main)] transition-colors">
                  {goal.desc}
                </p>
              </div>

              {/* Action Link - System Accents */}
              <div className="relative z-10 mt-auto flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)]">Select Mission</span>
                <div className="h-[1px] flex-grow bg-[var(--color-primary)] opacity-20" />
                <span className="text-[var(--color-primary)] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-12 flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-8 opacity-50">
          <span>{offer.trialDays}-Day Trial</span>
          <span className="text-[var(--color-primary)]">•</span>
          <span>No Credit Card</span>
          <span className="text-[var(--color-primary)]">•</span>
          <span>Instant Approval</span>
        </div>
      </div>
    </section>
  );
}