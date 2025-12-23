"use client";
import { getActiveOffer } from "@/app/lib/offerConfig";

export default function Offer() {
  const whatsappNumber = "918279898128";
  const offer = getActiveOffer();

  const URGENCY_TEXT = "Only 7 Passes Left for This Week";
  const WHATSAPP_MESSAGE = `Hi, I want to start the ${offer.trialDays}-day free trial. When is the best time to visit?`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      
      {/* --- DYNAMIC BACKGROUND DECOR --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)] opacity-[0.05] blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        
        {/* THE MAIN CARD (Uses gym-card system) */}
        <div 
          className="gym-card relative group p-8 sm:p-12 md:p-16 overflow-hidden !bg-gradient-to-br from-white/[0.03] to-white/[0.01]"
          style={{ borderRadius: 'var(--radius-gym-lg)' }}
        >
          {/* TOP DECOR LINE (Primary Color) */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-30" />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT SIDE — CONTENT */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 px-4 py-1.5 rounded-full mb-6">
                <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                <span className="text-[var(--color-primary)] text-[10px] font-black uppercase tracking-[0.3em]">
                  Limited Invitation
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-[1000] text-[var(--color-text-main)] leading-tight tracking-tighter mb-6 uppercase italic">
                Experience IronForge <br />
                <span className="text-[var(--color-primary)]">Free for {offer.trialDays} Days.</span>
              </h2>

              <ul className="space-y-4 mb-8">
                {[
                  `Full Access to Elite Equipment`,
                  `Zero Upfront Commitment`,
                  `Expert Vibe Check Included`
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm sm:text-base font-medium text-[var(--color-text-muted)]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* MOBILE PRICE VIEW */}
              <div className="lg:hidden mb-8 p-6 gym-card !bg-white/5">
                <p className="text-[var(--color-text-main)] font-black text-3xl tracking-tighter">₹{offer.price}<span className="text-xs text-[var(--color-text-muted)] font-normal ml-1">/month after trial</span></p>
                <p className="text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-widest mt-2">{URGENCY_TEXT}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* SYSTEM CTA BUTTON */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="gym-button relative w-full sm:w-auto px-10 py-5 text-lg overflow-hidden group"
                >
                  <span className="relative z-10">Get Your VIP Pass</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </a>
                
                <p className="gym-text-muted max-w-[180px] italic">
                  *No credit card or ID required to start trial.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE — FLOATING PRICE CARD */}
            <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center relative">
              <div className="w-full p-10 gym-card !bg-black/40 !backdrop-blur-3xl relative overflow-hidden">
                {/* Decorative Blur (Primary) */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-primary)] opacity-10 blur-[50px]" />
                
                <p className="text-[var(--color-text-muted)] text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                  Transparent Pricing
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-[1000] text-[var(--color-text-main)] tracking-tighter">₹{offer.price}</span>
                  <span className="text-[var(--color-text-muted)] font-bold uppercase text-xs">/month</span>
                </div>
                
                <div className="h-[1px] w-full bg-[var(--color-border)] my-6" />
                
                <div className="space-y-3">
                  <p className="text-xs text-[var(--color-text-muted)] font-medium leading-relaxed">
                    Post-trial membership includes 24/7 access, lockers, and personalized orientation.
                  </p>
                  <p className="text-[var(--color-primary)] text-[11px] font-black uppercase tracking-widest animate-pulse mt-4">
                    {URGENCY_TEXT}
                  </p>
                </div>
              </div>

              {/* Verified Sticker */}
              <div className="absolute -bottom-6 -right-6 bg-[var(--color-text-main)] text-[var(--color-background)] px-4 py-2 rounded-lg font-black text-[10px] uppercase italic -rotate-6 shadow-2xl">
                Verified Offer
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}