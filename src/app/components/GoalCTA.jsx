"use client";

import { trackEvent } from "@/app/lib/analytics";

export default function GoalCTA({
  href,
  label,
  children,
  className,
  style,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", label)}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
