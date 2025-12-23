"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 text-center text-[10px] sm:text-xs border-t bg-[var(--color-background)]"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* LOGO / BRANDING */}
        <p className="text-[var(--color-text-main)] font-[1000] uppercase tracking-[0.4em] italic mb-4">
          IronForge <span className="text-[var(--color-primary)]">Fitness</span>
        </p>

        {/* POLICY / INFO */}
        <div className="space-y-1.5">
          <p className="text-[var(--color-text-muted)] font-bold uppercase tracking-widest opacity-60">
            All inquiries are handled on WhatsApp only
          </p>
          <p className="text-[var(--color-text-muted)] font-medium opacity-40 italic">
            No calls · No spam · Serious inquiries only
          </p>
        </div>

        {/* DIVIDER LINE */}
        <div className="h-[1px] w-12 bg-[var(--color-border)] mx-auto my-6" />

        {/* COPYRIGHT */}
        <p className="text-[var(--color-text-muted)] text-[9px] font-bold uppercase tracking-widest opacity-30">
          © {currentYear} IronForge Fitness HQ. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}