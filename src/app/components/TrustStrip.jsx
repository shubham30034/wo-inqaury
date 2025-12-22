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

    animate(0, 4.6, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (v) => setRating(v.toFixed(1)),
    });

    animate(0, 300, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (v) => setMembers(Math.floor(v)),
    });
  };

  return (
    <motion.div
      className="border-b"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface-page)",
      }}
      initial={{ opacity: 0, y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onViewportEnter={startCount}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        <p className="text-xs sm:text-sm text-center">
          <span className="font-semibold text-foreground">
            ★ {rating}
          </span>
          <span className="mx-1 text-muted-foreground">on</span>
          <span className="font-semibold text-foreground">
            Google Maps
          </span>
          <span className="mx-2 text-muted-foreground">·</span>
          <span className="text-muted-foreground">
            Trusted by {members}+ local members
          </span>
        </p>
      </div>
    </motion.div>
  );
}
