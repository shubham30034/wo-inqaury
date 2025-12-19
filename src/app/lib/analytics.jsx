export const trackEvent = (action, label) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", action, {
    event_label: label,
  });
};
