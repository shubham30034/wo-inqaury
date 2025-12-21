import Image from "next/image";
import HeroCTA from "./HeroCTA";
import { getActiveOffer } from "@/app/lib/offerConfig";

export default function Hero() {
  const whatsappNumber = "918279898128";

  // 🔥 ACTIVE OFFER (single source of truth)
  const offer = getActiveOffer();

  const heroMessage = encodeURIComponent(
    `Hi, I want to join the ${offer.whatsappText}.
When is the best time to visit today?`
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${heroMessage}`;

  return (
    <section
      id="hero-section"
      className="pt-10 pb-10 sm:pt-20 sm:pb-16"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-8 md:grid-cols-2 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <p
            className="text-[11px] sm:text-xs uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            WhatsApp Inquiry Engine
          </p>

          <h1 className="mt-2 sm:mt-4 text-2xl sm:text-4xl md:text-6xl font-semibold">
            Train at IronForge Fitness
          </h1>

          <p
            className="mt-2 text-sm sm:text-base"
            style={{ color: "var(--text-muted)" }}
          >
            For people serious about results
          </p>

          {/* MOBILE CTA */}
          <div className="mt-5 sm:hidden">
            <HeroCTA whatsappLink={whatsappLink} variant="mobile" />

            <p
              className="mt-2 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              {offer.label} · WhatsApp only
            </p>
          </div>

          <p
            className="mt-4 sm:mt-6 max-w-md mx-auto md:mx-0 text-sm sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            No forms. No calls. No sales pressure.
          </p>

          {/* DESKTOP CTA */}
          <div className="hidden sm:flex mt-8 gap-4 justify-center md:justify-start">
            <HeroCTA whatsappLink={whatsappLink} variant="desktop" />

            <div
              className="px-6 py-3 text-sm border rounded-[var(--radius-lg)]"
              style={{
                borderColor: "var(--action-primary)",
                color: "var(--action-primary)",
              }}
            >
              {offer.label}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE — FINAL POLISH */}
        <div
          className="
            relative w-full
            aspect-[3/4] md:aspect-[4/5]
            overflow-hidden
            transition-transform duration-700 ease-out
            scale-[1.02]
            md:hover:scale-[1.0]
          "
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          {/* soft light veil to match light theme */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(248,250,252,0.55) 0%, rgba(248,250,252,0.15) 40%, rgba(248,250,252,0) 100%)",
            }}
          />

          <Image
            src="/gym-hero-v2.png"
            alt="Gym training"
            fill
            priority
            className="
              object-cover
              brightness-[1.12]
              contrast-[0.95]
              saturate-[0.9]
            "
          />
        </div>

      </div>
    </section>
  );
}
