export const trackEvent = (action, label) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: "engagement",
      event_label: label,
    });
  }
};
