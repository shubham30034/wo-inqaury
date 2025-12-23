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
    <section className="relative min-h-[100dvh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505] pt-12 pb-12 lg:py-0">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[100%] h-[40%] bg-[var(--primary)] opacity-[0.12] blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* --- IMAGE (Optimized for Mobile Viewport) --- */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full max-w-[280px] sm:max-w-[380px] lg:max-w-none mx-auto">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <Image
                src="/gym-hero-v2.png"
                alt="IronForge Gym"
                fill
                priority
                className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              
              {/* Floating Badge (Ultra Compact for Mobile) */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-xl border border-white/10 p-2.5 rounded-2xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-white font-black text-[9px] uppercase tracking-wider italic">Verified Entry</p>
              </div>
            </div>
          </div>

          {/* --- CONTENT --- */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="text-white/50 text-[10px] font-black tracking-[0.25em] uppercase">Premium Fitness Studio</span>
            </div>

            <h1 className="text-[12vw] sm:text-7xl lg:text-8xl xl:text-9xl font-[1000] text-white leading-[0.85] tracking-[calc(-0.05em)] mb-6">
              TRAIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-emerald-400 italic">HARDER.</span>
              <br />LIVE BETTER.
            </h1>

            <p className="text-gray-400 text-base sm:text-xl max-w-md mb-10 leading-relaxed font-medium">
              Grab your <span className="text-white font-bold">{offer.trialDays}-Day Free Pass</span>. 
              Pure training, zero pressure.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center lg:items-start gap-8 w-full">
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-[var(--primary)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <HeroCTA
                  whatsappLink={whatsappLink}
                  variant="primary"
                  className="ui-cta relative w-full sm:w-auto px-12 py-5 text-xl font-black uppercase tracking-tighter rounded-2xl"
                />
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user" className="w-9 h-9 rounded-full border-2 border-[#050505] bg-zinc-800" />
                  ))}
                </div>
                <div className="flex flex-col items-start leading-none">
                   <span className="text-white font-bold text-sm tracking-tight">500+ Members</span>
                   <span className="text-white/30 text-[9px] font-bold uppercase tracking-widest mt-1">Trust the process</span>
                </div>
              </div>
            </div>

            {/* Micro Stats (Mobile: Horizontal Scroll or Compact Grid) */}
            <div className="mt-12 flex gap-3 w-full max-w-sm">
              <div className="flex-1 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-[var(--primary)] font-black text-xl tracking-tighter italic leading-none">24/7</p>
                <p className="text-gray-600 text-[9px] uppercase font-bold tracking-widest mt-2">Access</p>
              </div>
              <div className="flex-1 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-white font-black text-xl tracking-tighter italic leading-none">PRO</p>
                <p className="text-gray-600 text-[9px] uppercase font-bold tracking-widest mt-2">Coaching</p>
              </div>
              <div className="flex-1 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-white font-black text-xl tracking-tighter italic leading-none">ELITE</p>
                <p className="text-gray-600 text-[9px] uppercase font-bold tracking-widest mt-2">Gear</p>
              </div>
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