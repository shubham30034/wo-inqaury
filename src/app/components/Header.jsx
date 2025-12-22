import Image from "next/image";

export default function Header() {
  return (
    <header
      className="border-b"
      style={{ borderColor: "var(--border)", background: "var(--surface-page)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center gap-3">

        {/* LOGO */}
        <div className="relative w-9 h-9 sm:w-10 sm:h-10">
          <Image
            src="/logo.png"   // 👈 owner ka logo
            alt="IronForge Fitness logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* BRAND NAME */}
        <div className="leading-tight">
          <p className="text-sm sm:text-base font-semibold text-foreground">
            IronForge Fitness
          </p>
          <p className="text-[11px] sm:text-xs ui-muted">
            Official WhatsApp Inquiry
          </p>
        </div>

      </div>
    </header>
  );
}
