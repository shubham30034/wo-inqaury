export default function Location() {
  return (
    <section
      className="pt-8 pb-14 sm:py-20"
      style={{ background: "var(--surface-section)" }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">

        {/* ===== HEADING ===== */}
        <h2 className="text-lg sm:text-2xl font-semibold">
          Visit the Gym Before You Commit
        </h2>

        <p
          className="mt-2 text-xs uppercase tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          See the place · Meet the environment
        </p>

        {/* ===== MAP CARD ===== */}
        <div
          className="mt-6 overflow-hidden border"
          style={{
            background: "var(--surface-card)",
            borderColor: "var(--border)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <iframe
            src="https://www.google.com/maps?q=IronForge%20Fitness&output=embed"
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          ></iframe>
        </div>

        {/* ===== TRUST REINFORCEMENT ===== */}
        <p
          className="mt-3 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          Easily accessible location with nearby parking and public transport
        </p>

        {/* ===== MICRO CTA ===== */}
        <p
          className="mt-4 text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          Most members visit once before starting the trial
        </p>

      </div>
    </section>
  );
}
