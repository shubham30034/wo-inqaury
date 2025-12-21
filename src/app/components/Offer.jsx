// NO "use client"
// PURE SERVER COMPONENT

import { getActiveOffer } from "@/app/lib/offerConfig";

export default function Offer() {
  const whatsappNumber = "918279898128";

  // 🔥 ACTIVE OFFER (single source of truth)
  const offer = getActiveOffer();

  const offerMessage = encodeURIComponent(
    `Hi, I want to join the ${offer.whatsappText}`
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${offerMessage}`;

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
                Trial Offer
              </p>

              <h2 className="mt-2 sm:mt-3 text-xl sm:text-3xl font-semibold">
                Try IronForge Fitness for 3 Days
              </h2>

              {/* MOBILE PRICE */}
              <p
                className="mt-2 sm:hidden text-sm font-semibold"
                style={{ color: "var(--action-primary)" }}
              >
                {offer.label}
              </p>

              {/* BENEFITS */}
              <ul
                className="mt-4 space-y-2 text-sm sm:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                <li>• Full gym access for 3 days</li>
                <li>• Trainer guidance included during trial</li>
                <li>• Experience the gym before committing</li>
              </ul>

              {/* PRESSURE REMOVAL */}
              <p
                className="mt-3 mb-1 text-xs leading-snug"
                style={{ color: "var(--text-muted)" }}
              >
                No pressure to join.<br />
                Try first. Decide later.
              </p>

              {/* CTA */}
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
                  Claim {offer.whatsappText} on WhatsApp
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
                ₹{offer.price ?? offer.label.match(/\d+/)?.[0]}
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
      </div>
    </section>
  );
}
