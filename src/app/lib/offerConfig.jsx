// ============================================
// SINGLE SOURCE OF TRUTH — OFFER CONFIG
// ============================================

export const OFFERS = [
  {
    id: "evergreen",

    // DISPLAY
    label: "3-Day Free Trial",
    whatsappText: "3-day free trial",

    // PRICING (POST-TRIAL ONLY)
    price: 999,
    billingCycle: "per month",

    // TRIAL
    trialDays: 3,
    isTrialFree: true,

    priority: 99,
  },
];

// ============================================
// AUTO OFFER SELECTION
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

  return validOffers[0];
}
