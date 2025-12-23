"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoSection() {
  const photos = [
    { 
      src: "/gym-1.jpg", 
      alt: "ELITE STRENGTH FLOOR", 
      label: "Heavy Lifting Zone",
      className: "md:col-span-2 md:row-span-2" 
    },
    { 
      src: "/gym-2.jpg", 
      alt: "PRO CONDITIONING", 
      label: "Cardio & Stamina",
      className: "col-span-1" 
    },
    { 
      src: "/gym-3.jpg", 
      alt: "RECOVERY AREA", 
      label: "Mind & Body",
      className: "col-span-1" 
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* HEADING SECTION - Aggressive Content */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-[1px] w-6 bg-[var(--color-primary)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-primary)]">The Facility</span>
            <span className="h-[1px] w-6 bg-[var(--color-primary)]" />
          </motion.div>

          <h2 className="gym-heading">
            WHERE <span className="text-[var(--color-primary)]">CHAMPIONS</span> ARE BORN
          </h2>
          
          <p className="gym-text-muted mt-4 max-w-md mx-auto text-sm sm:text-base">
            Photos stock nahi, <span className="text-white font-bold italic underline decoration-[var(--color-primary)]/40">Zameeni Haqiqat</span> hain. Experience the elite atmosphere of IronForge.
          </p>
        </div>

        {/* BENTO GRID IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] sm:auto-rows-[300px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden border border-[var(--color-border)] group ${photo.className}`}
              style={{ borderRadius: 'var(--radius-card)' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
              />
              
              {/* Overlay - Modern Industrial Style */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[var(--color-primary)] text-[8px] font-black tracking-[0.3em] uppercase mb-1">
                  {photo.label}
                </p>
                <h4 className="text-white text-lg sm:text-xl font-[1000] italic uppercase tracking-tighter leading-none">
                  {photo.alt}
                </h4>
                
                {/* View Details Line */}
                <div className="mt-4 h-[2px] w-0 bg-[var(--color-primary)] group-hover:w-full transition-all duration-700" />
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-[var(--color-primary)] transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* FOOTER QUOTE - High Authority Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center">
             <p className="gym-text-muted italic text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
              "No fancy lighting, no fake filters. Just pure iron, elite equipment, and a vibe that pushes you to your <span className="text-white font-black">ABSOLUTE LIMIT</span>."
            </p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-[var(--color-primary)] text-xs">★</span>
              ))}
              <span className="ml-2 text-[10px] font-black text-white uppercase tracking-widest italic">4.9/5 Google Rating</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}