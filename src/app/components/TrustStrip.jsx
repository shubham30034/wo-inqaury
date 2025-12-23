"use client";

import { motion, animate } from "framer-motion";
import { useRef, useState } from "react";

export default function TrustStrip() {
  const [rating, setRating] = useState(0);
  const [members, setMembers] = useState(0);
  const hasAnimated = useRef(false);

  const startCount = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    animate(0, 4.9, { // Rating thodi aur badha di for premium feel
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth finish
      onUpdate: (v) => setRating(v.toFixed(1)),
    });

    animate(0, 500, { // 500+ sounds more "Elite"
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setMembers(Math.floor(v)),
    });
  };

  return (
    <motion.div
      className="sticky top-0 z-[100] border-b backdrop-blur-md"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: "rgba(5, 5, 5, 0.8)", // Semi-transparent dark
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onViewportEnter={startCount}
    >
      <div className="mx-auto max-w-7xl px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-center gap-x-3 sm:gap-x-6">
          
          {/* GOOGLE RATING */}
          <div className="flex items-center gap-1.5">
            <div className="flex text-[var(--primary)] filter drop-shadow-[0_0_8px_rgba(22,163,74,0.4)]">
              {/* Star Icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-[11px] sm:text-xs font-black tracking-widest text-white uppercase">
              {rating} <span className="text-white/40 font-medium ml-1">on Google Maps</span>
            </p>
          </div>

          {/* DIVIDER */}
          <div className="h-3 w-[1px] bg-white/10" />

          {/* MEMBER COUNT */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5 hidden xs:flex">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-5 rounded-full border border-black bg-zinc-800 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-[11px] sm:text-xs font-black tracking-widest text-white uppercase">
              {members}+ <span className="text-white/40 font-medium ml-1">Active Members</span>
            </p>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-20" />
    </motion.div>
  );
}