import Image from "next/image";

export default function PhotoSection() {
  return (
    <section className="ui-section pt-14 pb-8 sm:pt-18 sm:pb-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* ===== HEADING ===== */}
        <h2 className="text-lg sm:text-2xl font-semibold text-center">
          Take a quick look inside the gym
        </h2>

        <p className="mt-2 text-xs text-center uppercase tracking-widest ui-muted">
          Real photos · No stock images
        </p>

        {/* ===== IMAGES ===== */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden border border-border rounded-xl">
            <Image
              src="/gym-1.jpg"
              alt="IronForge Fitness gym floor"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[4/3] overflow-hidden border border-border rounded-xl">
            <Image
              src="/gym-2.jpg"
              alt="IronForge Fitness training area"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ===== TRUST CONTEXT ===== */}
        <p className="mt-4 text-xs sm:text-sm text-center ui-muted max-w-xl mx-auto">
          These are actual photos of IronForge Fitness taken inside the gym.
          What you see here is exactly what you’ll experience when you visit.
        </p>

      </div>
    </section>
  );
}
