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
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      name: "Muscle Gain",
      desc: "Build strength with structured training",
      icon: "💪",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      name: "General Fitness",
      desc: "Stay active, flexible, and injury-free",
      icon: "🧘",
      color: "from-blue-500/20 to-indigo-500/20",
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
    <section className="relative py-16 sm:py-24 bg-[#050505] overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 relative z-10">
        
        {/* Header - Scaled down for mobile */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-[1000] text-white tracking-tighter uppercase italic"
          >
            Choose Your <span className="text-[#22c55e]">Mission</span>
          </motion.h2>
          <p className="mt-2 text-gray-500 text-[11px] sm:text-base max-w-[280px] sm:max-w-md mx-auto font-medium">
            Tap a goal to get your personalized plan on WhatsApp instantly.
          </p>
        </div>

        {/* Goals Grid - Smaller gap */}
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
              className="group relative flex flex-col p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/5 bg-white/[0.02] active:scale-95 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon - Smaller on Mobile */}
              <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-8 transition-transform">
                {goal.icon}
              </div>

              {/* Text - Scaled down */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                  {goal.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 group-hover:text-gray-300">
                  {goal.desc}
                </p>
              </div>

              {/* Action - Fixed Green */}
              <div className="relative z-10 mt-auto flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Select Goal</span>
                <div className="h-[1px] flex-grow bg-[#22c55e] opacity-20" />
                <span className="text-[#22c55e]">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Trust Note - More compact */}
        <div className="mt-12 flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] text-gray-600 border-t border-white/5 pt-8">
          <span>{offer.trialDays}-Day Trial</span>
          <span>•</span>
          <span>No Credit Card</span>
          <span>•</span>
          <span>Instant Approval</span>
        </div>
      </div>
    </section>
  );
}