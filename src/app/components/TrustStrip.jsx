export default function TrustStrip() {
  return (
    <div
      className="border-b"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface-page)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        <p className="text-xs sm:text-sm text-center">
          <span className="font-semibold text-foreground">
            ★ 4.6 rating
          </span>
          <span className="mx-1 text-muted-foreground">on</span>
          <span className="font-semibold text-foreground">
            Google Maps
          </span>
          <span className="mx-2 text-muted-foreground">·</span>
          <span className="text-muted-foreground">
            Trusted by 300+ local members
          </span>
        </p>
      </div>
    </div>
  );
}
