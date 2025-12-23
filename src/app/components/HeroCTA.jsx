"use client";

import { trackEvent } from "@/app/lib/analytics";

export default function HeroCTA({ whatsappLink, variant, className = "" }) {
  const isMobile = variant === "mobile";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent(
          "whatsapp_click",
          isMobile ? "hero_mobile" : "hero_desktop"
        )
      }
      // Direct Tailwind colors use kiye hain taaki variable ka error na aaye
      className={`
        group relative overflow-hidden
        inline-flex items-center justify-center gap-3
        bg-[#22c55e] hover:bg-[#1eb054]
        text-black font-[950] uppercase tracking-tighter
        px-10 py-5 rounded-2xl
        shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)]
        hover:shadow-[0_15px_40px_-10px_rgba(34,197,94,0.7)]
        transition-all duration-300 active:scale-95
        ${isMobile ? "w-full text-base" : "w-full sm:w-auto text-lg"}
        ${className}
      `}
    >
      {/* SHIMMER EFFECT (Light swipe) */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <span className="relative z-10 flex items-center gap-2">
        Start Free Trial
        <svg 
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={4}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </a>
  );
}