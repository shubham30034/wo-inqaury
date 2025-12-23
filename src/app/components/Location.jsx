"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="relative py-20 bg-[#050505] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* HEADING SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-[1000] text-white tracking-tighter uppercase italic leading-none">
            Find the <span className="text-[#22c55e]">HQ</span>
          </h2>
          <p className="mt-4 text-gray-500 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
            Visit the floor • Feel the vibe
          </p>
        </div>

        {/* MAIN GRID: MAP + INFO */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* MAP CARD (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.4263435132335!2d77.98622837549642!3d30.31033227478959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909299496464521%3A0x673c68383c39ef69!2sIron%20Forge%20Fitness%20Academy!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, filter: "invert(90%) hue-rotate(150deg) brightness(90%) contrast(90%)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%]"
            />
            {/* Dark Overlay for better blending */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2rem]" />
          </motion.div>

          {/* INFO CARDS (Right Side) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* ADDRESS CARD */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center mb-4 text-[#22c55e]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-2">Location</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                G-Floor, IronForge Tower, Main Market Area,<br />
                Nearby Parking, Sector 5.
              </p>
            </motion.div>

            {/* TIMINGS CARD */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center mb-4 text-[#22c55e]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-2">Operation Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-medium">
                  <span className="text-gray-500">Mon - Sat:</span>
                  <span className="text-gray-300 tracking-tight">05:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm font-medium">
                  <span className="text-gray-500">Sunday:</span>
                  <span className="text-[#22c55e]">07:00 AM - 12:00 PM</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* MICRO TRUST TEXT */}
        <p className="mt-12 text-center text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          Easily accessible by Public Transport • Free Parking Available
        </p>
      </div>
    </section>
  );
}