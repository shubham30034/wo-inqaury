"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/app/lib/analytics";
import { getActiveOffer } from "@/app/lib/offerConfig";

export default function Goals() {
  const whatsappNumber = "918279898128";
  const offer = getActiveOffer();

  const goals = [
    {
      name: "Fat Shred",
      desc: "Sirf weight loss nahi, stamina ka khel hai. Burn fat while building a body that never gets tired.",
      icon: "🔥",
      tag: "Best for Weight Loss"
    },
    {
      name: "Muscle Forge",
      desc: "Raw power aur aesthetic look. Structured training unke liye jo serious strength gain chahte hain.",
      icon: "⚔️",
      tag: "Power & Size"
    },
    {
      name: "Body Recomp",
      desc: "Confusion khatam karo. Lose fat and build muscle simultaneously with expert-led hybrid guidance.",
      icon: "⚖️",
      tag: "Transformation"
    },
  ];

  const buildLink = (goal) => {
    let goalLine = "";
    if (goal === "Fat Shred") goalLine = "My goal is Fat Shred - I want to lose weight and increase stamina.";
    if (goal === "Muscle Forge") goalLine = "My goal is Muscle Forge - I want to build strength and size.";
    if (goal === "Body Recomp") goalLine = "I'm looking for Body Recomposition - losing fat and gaining muscle together.";

    const msg = `Hi IronForge! I want to claim my ${offer.trialDays}-Day Free Pass.\n\nTarget: ${goal}\nPlan: ${goalLine}\n\nIs the ₹999/mo offer still available?`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <div className="mx-auto max-w-6xl px-5 relative z-10">
        
        {/* Header - Connected to System */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 border border-[var(--color-primary)]/20 rounded-full bg-[var(--color-primary)]/5"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-primary)]">Step 1: Choose Your Path</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="gym-heading"
          >
            Define Your <span className="text-[var(--color-primary)]">Mission</span>
          </motion.h2>
          <p className="gym-text-muted mt-4 max-w-[320px] sm:max-w-md mx-auto text-base sm:text-lg">
            Select a goal to unlock your <span className="text-white font-bold italic">Custom Training Roadmap</span> on WhatsApp instantly.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              className="gym-card group relative flex flex-col p-6 sm:p-10 overflow-hidden active:scale-95 transition-all duration-500"
            >
              {/* Floating Tag */}
              <div className="absolute top-4 right-4">
                <span className="text-[7px] font-black uppercase tracking-widest bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-1 rounded border border-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)] group-hover:text-black transition-all">
                  {goal.tag}
                </span>
              </div>

              {/* Icon Container */}
              <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-[var(--color-border)] flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:border-[var(--color-primary)]/40 transition-all duration-500 shadow-inner">
                {goal.icon}
              </div>

              {/* Text - System Typography */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-3xl font-[1000] text-[var(--color-text-main)] uppercase tracking-tighter mb-3 italic leading-none">
                  {goal.name}
                </h3>
                <p className="text-[var(--color-text-muted)] text-xs sm:text-sm leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
                  {goal.desc}
                </p>
              </div>

              {/* Action - Design Sync */}
              <div className="relative z-10 mt-auto flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] opacity-80 group-hover:opacity-100">Claim Mission</span>
                <div className="w-8 h-8 rounded-full border border-[var(--color-primary)]/20 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-black transition-all">
                  <span className="text-lg">→</span>
                </div>
              </div>

              {/* Subtle Inner Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
          ))}
        </div>

        {/* Value Recap Section */}
        <div className="mt-16 text-center border-t border-[var(--color-border)] pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            {[
              { label: "Trial Phase", val: `${offer.trialDays} Days - FREE` },
              { label: "Membership", val: "₹999/Month Only" },
              { label: "Commitment", val: "Zero Hidden Fees" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[var(--color-text-muted)]">{stat.label}</span>
                <span className="text-sm font-bold text-white italic">{stat.val}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest opacity-40">
            Limited ₹999 Slots available for this month
          </p>
        </div>

      </div>
    </section>
  );
}