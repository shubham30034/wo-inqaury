export const trackEvent = (action, label) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: action,
    event_label: label,
  });
};
