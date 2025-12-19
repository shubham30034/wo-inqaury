"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/app/lib/analytics";

export default function StickyWhatsAppCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;

    const heroHeight = hero.offsetHeight;

    const onScroll = () => {
      if (window.scrollY > heroHeight - 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 sm:hidden">
      <div className="mx-auto max-w-md px-4">
        <a
          href={`https://wa.me/918279898128?text=${encodeURIComponent(
            "Hi, I want to join the ₹999 trial.\nSource: Sticky"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("whatsapp_click", "sticky_cta")
          }
          className="
            flex items-center justify-center
            w-full
            rounded-full
            py-4
            text-base
            font-semibold
            shadow-lg
            transition
            bg-[var(--cta-bg)]
            text-[var(--cta-text)]
            hover:bg-[var(--cta-hover)]
          "
        >
          Continue on WhatsApp
        </a>
      </div>
    </div>
  );
}
