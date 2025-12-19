"use client";

import { trackEvent } from "@/app/lib/analytics";

export default function HeroCTA({ whatsappLink, variant }) {
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
      className={`
        inline-flex items-center justify-center
        font-semibold transition
        rounded-[var(--radius-xl)]
        bg-[var(--cta-bg)]
        text-[var(--cta-text)]
        hover:bg-[var(--cta-hover)]
        ${isMobile ? "w-full py-4 text-base" : "px-8 py-4 whitespace-nowrap"}
      `}
    >
      Start on WhatsApp
    </a>
  );
}
