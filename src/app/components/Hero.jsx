"use client"
import Image from "next/image";
import HeroCTA from "./HeroCTA";
import { getActiveOffer } from "@/app/lib/offerConfig";

export default function Hero() {
  const whatsappNumber = "918279898128";
  const offer = getActiveOffer();

  const heroMessage = encodeURIComponent(
    `Hi, I want to start the ${offer.trialDays}-day free trial. When is the best time to visit?`
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${heroMessage}`;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[var(--color-background)]">
      
      {/* --- DYNAMIC BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[100%] h-[40%] bg-[var(--color-primary)] opacity-[0.12] blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      {/* Mobile-first padding adjustment (pt-8 on mobile vs pt-12 on desktop) */}
      <div className="container mx-auto max-w-7xl px-6 relative z-10 pt-8 lg:pt-12 pb-12">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* --- IMAGE SIDE --- */}
          {/* Mobile pe image thodi compact rakhi hai taaki button upar shift ho jaye */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full max-w-[240px] sm:max-w-[340px] lg:max-w-none mx-auto">
            <div className="relative aspect-[4/5] rounded-[var(--radius-gym-lg)] overflow-hidden border border-[var(--color-border)] shadow-2xl">
              <Image
                src="/gym-hero-v2.png"
                alt="IronForge Gym"
                fill
                priority
                className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-xl border border-[var(--color-border)] p-2.5 rounded-2xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-black">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-[var(--color-text-main)] font-black text-[9px] uppercase tracking-wider italic">Verified Entry</p>
              </div>
            </div>
          </div>

          {/* --- CONTENT SIDE --- */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[var(--color-border)] px-4 py-1.5 rounded-full mb-4 sm:mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              <span className="text-[var(--color-text-muted)] text-[10px] font-black tracking-[0.25em] uppercase">Premium Fitness Studio</span>
            </div>

            <h1 className="gym-heading mb-4 sm:mb-6 lg:text-left text-4xl sm:text-5xl lg:text-7xl">
              TRAIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-emerald-400 italic">HARDER.</span>
              <br />LIVE BETTER.
            </h1>

            <p className="gym-text-muted text-sm sm:text-xl max-w-md mb-6 sm:mb-10">
              Grab your <span className="text-[var(--color-text-main)] font-bold">{offer.trialDays}-Day Free Pass</span>. 
              Pure training, zero pressure.
            </p>

            {/* CTA BOX */}
            <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-8 w-full">
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-[var(--color-primary)] rounded-[var(--radius-button)] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                
                <HeroCTA
                  whatsappLink={whatsappLink}
                  variant="primary"
                  className="gym-button w-full sm:w-auto text-lg sm:text-xl"
                />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[var(--color-background)] bg-zinc-800" />
                  ))}
                </div>
                <div className="flex flex-col items-start leading-none">
                   <span className="text-[var(--color-text-main)] font-bold text-xs sm:text-sm tracking-tight">500+ Members</span>
                   <span className="text-[var(--color-text-muted)] text-[8px] sm:text-[9px] font-bold uppercase tracking-widest mt-1">Trust the process</span>
                </div>
              </div>
            </div>

            {/* Micro Stats (Mobile-optimized grid) */}
            <div className="mt-8 sm:mt-12 flex gap-2 sm:gap-3 w-full max-w-sm sm:max-w-md">
              {["24/7 Access", "PRO Coaching", "ELITE Gear"].map((stat, idx) => (
                <div key={idx} className="flex-1 p-3 sm:p-4 gym-card !bg-white/[0.02]">
                  <p className={`${idx === 0 ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-main)]'} font-black text-base sm:text-xl tracking-tighter italic leading-none`}>
                    {stat.split(' ')[0]}
                  </p>
                  <p className="gym-text-muted !text-[8px] sm:text-[9px] uppercase font-bold tracking-widest mt-1 sm:mt-2">
                    {stat.split(' ')[1]}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}