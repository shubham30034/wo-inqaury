export default function Footer() {
  return (
    <footer
      className="py-8 text-center text-xs sm:text-sm border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <p
        className="font-medium"
        style={{ color: "var(--text-muted)" }}
      >
        © IronForge Fitness
      </p>

      <p
        className="mt-1"
        style={{ color: "var(--text-muted)" }}
      >
        All inquiries are handled on WhatsApp only
      </p>

      <p
        className="mt-1"
        style={{ color: "var(--text-muted)" }}
      >
        No calls · No spam · Serious inquiries only
      </p>
    </footer>
  );
}
