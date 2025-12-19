import Image from "next/image";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  const whatsappNumber = "918279898128";

  const heroMessage = encodeURIComponent(
    "Hi, I want to join the ₹999 trial.\nSource: Hero"
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
            <HeroCTA
              whatsappLink={whatsappLink}
              variant="mobile"
            />

            <p
              className="mt-2 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              ₹999 · 3 Day Trial · WhatsApp only
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
            <HeroCTA
              whatsappLink={whatsappLink}
              variant="desktop"
            />

            <div
              className="px-6 py-3 text-sm border rounded-[var(--radius-lg)]"
              style={{
                borderColor: "var(--action-primary)",
                color: "var(--action-primary)",
              }}
            >
              ₹999 · 3 Day Trial
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          <Image
            src="/gym-hero.jpg"
            alt="Gym training"
            fill
            priority
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
} 