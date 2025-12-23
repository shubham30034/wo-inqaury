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
      /* Ab ye gym-button class use karega jo globals.css mein define hai.
         Shadows aur background-color ab variables se aayenge.
      */
      className={`
        gym-button group relative overflow-hidden inline-flex gap-3
        ${isMobile ? "w-full text-base" : "w-full sm:w-auto text-lg"}
        ${className}
      `}
    >
      {/* SHIMMER EFFECT (Adaptive to Primary Color) */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      <span className="relative z-10 flex items-center gap-2">
        Start Free Trial on WhatsApp
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