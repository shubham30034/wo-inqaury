import Image from "next/image";
import HeroCTA from "./HeroCTA";
import { getActiveOffer } from "@/app/lib/offerConfig";

export default function Hero() {
  const whatsappNumber = "918279898128";
  const offer = getActiveOffer();

  const heroMessage = encodeURIComponent(
    `Hi, I want to start the ${offer.trialDays}-day free trial.
When is the best time to visit?`
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${heroMessage}`;

  return (
    <section
      id="hero-section"
      className="pt-6 pb-12 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-28"
      style={{ background: "var(--background)" }}
    >
      <div
        className="
          mx-auto max-w-6xl px-4 sm:px-6
          grid gap-8 lg:gap-12
          md:grid-cols-[1.15fr_0.85fr]
          items-center
        "
      >
        {/* LEFT — CONTENT */}
        <div className="text-center md:text-left">

          {/* EYEBROW */}
          <p
            className="text-[10px] uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            IronForge Fitness · WhatsApp Entry
          </p>

          {/* HEADLINE */}
          <h1
            className="
              mt-3
              text-[26px] leading-[1.15]
              sm:text-4xl lg:text-[44px] xl:text-5xl
              font-extrabold
            "
            style={{ color: "var(--foreground)" }}
          >
            <span className="block">
              {offer.trialDays}-Day Free Gym Trial
            </span>

            {/* Mobile spacing */}
            <span className="block sm:hidden h-1" />

            <span className="block">
              Start on WhatsApp
            </span>
          </h1>

          {/* SUBLINE */}
          <p
            className="mt-4 text-sm sm:text-base font-semibold"
            style={{ color: "var(--action-primary)" }}
          >
            No payment required · Visit before you decide
          </p>

          {/* TRUST */}
          <p
            className="mt-4 text-sm sm:text-base font-medium"
            style={{ color: "var(--foreground)" }}
          >
            Built for people who train consistently — not casual drop-ins.
          </p>

          {/* CTA */}
          <div className="mt-6 flex justify-center md:justify-start">
            <HeroCTA
              whatsappLink={whatsappLink}
              variant="primary"
            />
          </div>

          {/* FRICTION KILL */}
          <p
            className="mt-3 text-xs sm:text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            No forms · No calls · No sales pressure
          </p>
        </div>

        {/* RIGHT — IMAGE */}
        <div
          className="
            relative w-full
            aspect-[4/5]
            overflow-hidden
            rounded-[var(--radius-xl)]
            shadow-lg
          "
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0) 100%)",
            }}
          />

          <Image
            src="/gym-hero-v2.png"
            alt="IronForge Fitness gym interior"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
