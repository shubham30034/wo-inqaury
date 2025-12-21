import Image from "next/image";
import HeroCTA from "./HeroCTA";
import { getActiveOffer } from "@/app/lib/offerConfig";

export default function Hero() {
  const whatsappNumber = "918279898128";
  const offer = getActiveOffer();

  const heroMessage = encodeURIComponent(
    `Hi, I want to start the ${offer.tryoutDays}-day free trial.
I understand the membership continues at ₹${offer.price}/month after the trial.
When is the best time to visit `
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${heroMessage}`;

  return (
    <section
      id="hero-section"
      className="pt-8 pb-10 sm:pt-24 sm:pb-24"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-6 sm:gap-10 md:grid-cols-2 items-center">

        {/* LEFT — CONTENT */}
        <div className="text-center md:text-left">

          {/* EYEBROW — BRAND PRESENCE */}
          <p
            className="text-[10px] sm:text-xs uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            IronForge Fitness · WhatsApp Inquiry
          </p>

          {/* HEADLINE */}
          <h1
            className="mt-1.5 sm:mt-4 text-[28px] sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            Serious Training Starts Here
          </h1>

          {/* SUBLINE — CLEAR, NON-REPETITIVE */}
          <p
            className="mt-2 sm:mt-3 text-sm sm:text-base font-medium"
            style={{ color: "var(--action-primary)" }}
          >
            {offer.tryoutDays}-Day Free Trial · Membership continues at ₹{offer.price}/month
          </p>

          {/* CTA — INTENT CLEAR */}
          <div className="mt-4 sm:mt-8 flex justify-center md:justify-start">
            <HeroCTA
              whatsappLink={whatsappLink}
              variant="primary"
              label={`Start ${offer.tryoutDays}-Day Free Trial on WhatsApp`}
            />
          </div>

          {/* TRUST FILTER — SHARP */}
          <p
            className="mt-4 sm:mt-8 text-sm sm:text-base font-medium"
            style={{ color: "var(--foreground)" }}
          >
            IronForge Fitness is for people who train consistently — not casual drop-ins.
          </p>

          {/* FRICTION KILL */}
          <p
            className="mt-1 sm:mt-2 text-xs sm:text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            No forms. No calls. No sales pressure.
          </p>
        </div>

        {/* RIGHT — IMAGE */}
        <div
          className="
            relative w-full
            aspect-[3/4] md:aspect-[4/5]
            overflow-hidden
            rounded-[var(--radius-xl)]
          "
        >
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 100%)",
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
