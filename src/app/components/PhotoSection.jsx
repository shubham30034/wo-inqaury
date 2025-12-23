"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoSection() {
  const photos = [
    { src: "/gym-1.jpg", alt: "Main Gym Floor", className: "md:col-span-2 md:row-span-2" },
    { src: "/gym-2.jpg", alt: "Strength Training Area", className: "col-span-1" },
    { src: "/gym-3.jpg", alt: "Cardio Zone", className: "col-span-1" },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* HEADING SECTION - Connected to System */}
        <div className="text-center mb-12">
          <h2 className="gym-heading">
            The <span className="text-[var(--color-primary)]">Forge</span> Inside
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="h-[1px] w-8 bg-[var(--color-primary)] opacity-30" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] font-[1000]">
              Real Photos • No Stock Images
            </p>
            <span className="h-[1px] w-8 bg-[var(--color-primary)] opacity-30" />
          </div>
        </div>

        {/* BENTO GRID IMAGES - Using Global Radius & Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden border border-[var(--color-border)] group ${photo.className}`}
              style={{ borderRadius: 'var(--radius-gym-lg)' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
              />
              
              {/* Overlay on Hover - Using Primary Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-[var(--color-primary)]" />
                  <p className="text-white text-xs font-black uppercase tracking-widest">{photo.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER TEXT - Using System Muted Style */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 text-center"
        >
          <p className="gym-text-muted italic max-w-xl mx-auto leading-relaxed">
            "What you see is exactly what you get. Our facility is designed for high-performance training with zero distractions."
          </p>
        </motion.div>

      </div>
    </section>
  );
}