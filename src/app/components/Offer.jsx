// NO "use client"
// PURE SERVER COMPONENT

import { getActiveOffer } from "@/app/lib/offerConfig";

export default function Offer() {
  const whatsappNumber = "918279898128";

  const offer = getActiveOffer();

  // 🔒 STATIC URGENCY
  const URGENCY_TEXT = "Limited seats this week";

  // 🔒 MESSAGE SENT TO OWNER (NOT SHOWN ON BUTTON)
  const WHATSAPP_MESSAGE =  `Hi, I want to start the ${offer.tryoutDays}-day free trial.
I understand the membership continues at ₹${offer.price}/month after the trial.
When is the best time to visit`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <section
      className="py-10 sm:py-20"
      style={{ background: "var(--surface-section)" }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
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
                Starter Membership
              </p>

              <h2 className="mt-2 sm:mt-3 text-xl sm:text-3xl font-semibold">
                Join IronForge Fitness at ₹{offer.price}
              </h2>

              {/* URGENCY */}
              <p
                className="mt-2 text-xs font-medium uppercase tracking-wide"
                style={{ color: "var(--action-primary)" }}
              >
                {URGENCY_TEXT}
              </p>

              {/* MOBILE PRICE */}
              <p
                className="mt-2 sm:hidden text-sm font-semibold"
                style={{ color: "var(--action-primary)" }}
              >
                ₹{offer.price} · Starter Plan
              </p>

              {/* BENEFITS */}
              <ul
                className="mt-4 space-y-2 text-sm sm:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                <li>• ₹{offer.price} starter membership</li>
                <li>• Full gym access for {offer.tryoutDays} days</li>
                <li>• Continue only if you like it</li>
              </ul>

              {/* PRESSURE REMOVAL */}
              <p
                className="mt-3 mb-1 text-xs leading-snug"
                style={{ color: "var(--text-muted)" }}
              >
                No long-term commitment.<br />
                Try the gym first. Decide later.
              </p>

              {/* CTA BUTTON (SHORT & CLEAN) */}
              <div className="mt-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_click"
                  data-label={`offer_cta_${offer.id}`}
                  className="
                    inline-flex items-center justify-center
                    w-full sm:w-auto
                    px-8 py-4
                    text-base font-semibold
                    rounded-[var(--radius-lg)]
                    border
                    transition-colors
                  "
                  style={{
                    borderColor: "var(--action-primary)",
                    color: "var(--action-primary)",
                  }}
                >
                  Start ₹{offer.price} Starter Plan
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
                Starter Price
              </p>

              <p
                className="mt-1 text-3xl font-semibold"
                style={{ color: "var(--action-primary)" }}
              >
                ₹{offer.price}
              </p>

              <p
                className="mt-1 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Includes {offer.tryoutDays}-day try-out window
              </p>

              <p
                className="mt-2 text-xs font-medium"
                style={{ color: "var(--action-primary)" }}
              >
                {URGENCY_TEXT}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
