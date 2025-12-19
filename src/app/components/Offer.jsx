"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/app/lib/analytics";

export default function Offer() {
  const whatsappNumber = "918279898128";

  const offerMessage = encodeURIComponent(
    "Hi, I want to join the ₹999 trial.\nSource: Offer"
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${offerMessage}`;

  return (
    <section
      className="py-10 sm:py-20"
      style={{ background: "var(--surface-section)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-5xl px-4 sm:px-6"
      >
        <div
          className="border px-5 py-6 sm:px-8 sm:py-10"
          style={{
            background: "var(--surface-card)",
            borderColor: "var(--border)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">

            {/* LEFT */}
            <div>
              <p
                className="text-[11px] sm:text-xs uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                Trial Offer
              </p>

              <h2 className="mt-2 sm:mt-3 text-xl sm:text-3xl font-semibold">
                Try IronForge Fitness for 3 Days
              </h2>

              <p
                className="mt-2 sm:hidden text-sm font-semibold"
                style={{ color: "var(--action-primary)" }}
              >
                ₹999 · One-time trial
              </p>

              <ul
                className="mt-4 space-y-2 text-sm sm:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                <li>• Full gym access for 3 days</li>
                <li>• One trainer interaction included</li>
                <li>• Experience the gym before committing</li>
              </ul>

              <p
                className="mt-4 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                No calls · No sales pressure · Decide at your own pace
              </p>

              {/* ===== OFFER CTA (OUTLINE STYLE) ===== */}
              <div className="mt-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("whatsapp_click", "offer_cta")
                  }
                  className="
                    inline-flex items-center justify-center
                    w-full sm:w-auto
                    px-8 py-4
                    text-base font-semibold
                    transition
                    rounded-[var(--radius-lg)]
                    border
                    bg-[var(--surface-card)]
                  "
                  style={{
                    borderColor: "var(--action-primary)",
                    color: "var(--action-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--action-primary)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "var(--surface-card)";
                    e.currentTarget.style.color =
                      "var(--action-primary)";
                  }}
                >
                  Claim ₹999 Trial on WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT PRICE BLOCK */}
            <div
              className="hidden sm:flex flex-col items-center justify-center px-8 py-6 text-center"
              style={{
                background: "var(--surface-section)",
                border:
                  "1px solid color-mix(in srgb, var(--action-primary) 30%, transparent)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <p
                className="text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                3-Day Trial
              </p>

              <p
                className="mt-1 text-3xl font-semibold"
                style={{ color: "var(--action-primary)" }}
              >
                ₹999
              </p>

              <p
                className="mt-1 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Limited slots each week
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
