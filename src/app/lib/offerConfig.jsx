// ============================================
// SINGLE SOURCE OF TRUTH — OFFER CONFIG
// Tum sirf IS FILE me changes karoge
// ============================================

export const OFFERS = [
  // 1️⃣ FESTIVAL / SPECIAL OFFER (Generic)
//   {
//     id: "festival",
//     label: "₹699 · Festival Special Trial",
//     whatsappText: "₹699 festival special trial",
//     validFrom: "2025-03-20T00:00:00", // example date
//     validTill: "2025-03-27T23:59:59",
//     priority: 1,
//   },

//   // 2️⃣ WEEKEND OFFER
//   {
//     id: "weekend",
//     label: "₹799 · Weekend Trial",
//     whatsappText: "₹799 weekend trial",
//     validFrom: "2025-01-01T00:00:00",
//     validTill: "2025-12-31T23:59:59",
//     priority: 2,
//   },

//   // 3️⃣ FIRST VISIT / NEW MEMBER OFFER
//   {
//     id: "new_member",
//     label: "₹899 · First Visit Trial",
//     whatsappText: "₹899 first visit trial",
//     validFrom: "2025-01-01T00:00:00",
//     validTill: "2025-12-31T23:59:59",
//     priority: 3,
//   },

//   // 4️⃣ LIMITED TIME / THIS WEEK
//   {
//     id: "limited",
//     label: "₹999 · Limited Time Trial",
//     whatsappText: "₹999 limited time trial",
//     validFrom: "2025-01-01T00:00:00",
//     validTill: "2025-01-31T23:59:59",
//     priority: 4,
//   },

  // 5️⃣ EVERGREEN (ALWAYS FALLBACK)
  {
    id: "evergreen",
    label: "₹999 · 3 Day Trial",
    whatsappText: "₹999 trial",
    priority: 99,
  },
];

// ============================================
// AUTO OFFER SELECTION LOGIC (DO NOT TOUCH)
// ============================================

export function getActiveOffer() {
  const now = new Date();

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
