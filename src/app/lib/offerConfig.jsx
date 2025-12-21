// ============================================
// SINGLE SOURCE OF TRUTH — OFFER CONFIG
// Touch ONLY this file
// ============================================

export const OFFERS = [
  // EVERGREEN — ALWAYS ON
  {
    id: "evergreen",
    label: "₹999 · Starter Plan",
    whatsappText: "₹999 starter plan",

    // 🔒 PRICING
    price: 999,
    billingCycle: "per month", // 👈 CLEAR

    // 🔒 TRY-OUT (NOT FREE TRIAL)
    tryoutDays: 3,

    priority: 99,
  },
];

// ============================================
// AUTO OFFER SELECTION (DO NOT TOUCH)
// ============================================

export function getActiveOffer() {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const validOffers = OFFERS.filter((offer) => {
    if (!offer.validFrom && !offer.validTill) return true;

    const fromOk = offer.validFrom
      ? new Date(offer.validFrom) <= now
      : true;

    const tillOk = offer.validTill
      ? new Date(offer.validTill) > now
      : true;

    return fromOk && tillOk;
  });

  validOffers.sort((a, b) => a.priority - b.priority);

  return validOffers[0] || OFFERS.find((o) => o.id === "evergreen");
}
