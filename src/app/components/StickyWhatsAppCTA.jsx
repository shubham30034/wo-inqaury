"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { trackEvent } from "@/app/lib/analytics";
import { getActiveOffer } from "@/app/lib/offerConfig";

export default function StickyWhatsAppCTA() {
  const [show, setShow] = useState(false);
  const controls = useAnimationControls();
  const shouldReduceMotion = useReducedMotion();

  // 🔥 ACTIVE OFFER (single source of truth)
  const offer = getActiveOffer();
  const whatsappNumber = "918279898128";

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;

    const heroHeight = hero.offsetHeight;

    const onScroll = () => {
      setShow(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 URGENCY LOOP (Controlled Vibration)
  useEffect(() => {
    if (!show || shouldReduceMotion) return;

    let active = true;

    const pulse = async () => {
      if (!active) return;

      await controls.start({
        x: [0, -4, 4, -3, 3, -2, 2, 0],
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 12px 28px rgba(22,163,74,0.35)",
          "0 18px 40px rgba(22,163,74,0.6)",
          "0 12px 28px rgba(22,163,74,0.35)",
        ],
        transition: { duration: 0.45, ease: "easeInOut" },
      });

      setTimeout(pulse, 6000); // ⏱ every 6s
    };

    pulse();

    return () => {
      active = false;
    };
  }, [show, controls, shouldReduceMotion]);

  const stickyMessage = encodeURIComponent(
    `Hi, I want to join the ${offer.whatsappText}.
When is the best time to visit today?
Source: Sticky`
  );

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 sm:hidden"
      initial={false}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 20,
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${stickyMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("whatsapp_click", `sticky_${offer.id}`)
        }
        animate={controls}
        className="
          flex flex-col items-center justify-center
          w-[74px] h-[74px]
          text-center
          bg-[var(--cta-bg)]
          text-[var(--cta-text)]
          shadow-xl
          select-none
        "
        style={{
          borderRadius: "18px",
          boxShadow:
            "0 12px 28px rgba(22,163,74,0.35), inset 0 -2px 0 rgba(0,0,0,0.18)",
        }}
      >
        {/* PRICE */}
        <span className="text-lg font-extrabold leading-none">
          ₹{offer.price ?? offer.label.match(/\d+/)?.[0]}
        </span>

        {/* LABEL */}
        <span className="text-[11px] tracking-wide opacity-90">
          TRIAL
        </span>
      </motion.a>
    </motion.div>
  );
}
