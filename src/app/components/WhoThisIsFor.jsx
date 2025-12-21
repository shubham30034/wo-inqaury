"use client";

import { motion } from "framer-motion";

export default function WhoThisIsFor() {
  return (
    <section className="ui-section py-6 sm:py-8">
      <motion.div
        className="mx-auto max-w-3xl px-5 sm:px-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h3 className="text-sm sm:text-base font-semibold text-center">
          Is this right for you?
        </h3>

        <ul className="mt-4 space-y-2 text-sm sm:text-[15px] text-center">
          <li className="ui-muted">
            First time joining a gym
          </li>
          <li className="ui-muted">
            Restarting after a long break
          </li>
          <li className="ui-muted">
            Want to try before full membership
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
