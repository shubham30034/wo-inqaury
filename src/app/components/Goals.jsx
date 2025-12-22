"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/app/lib/analytics";
import { getActiveOffer } from "@/app/lib/offerConfig";

export default function Goals() {
  const whatsappNumber = "918279898128";
  const offer = getActiveOffer();

  const buildLink = (goal) => {
    let goalLine = "";

    if (goal === "Fat Loss") {
      goalLine = "My goal is fat loss and improving stamina.";
    }

    if (goal === "Muscle Gain") {
      goalLine = "My goal is muscle gain and strength training.";
    }

    if (goal === "General Fitness") {
      goalLine = "My goal is overall fitness and staying active.";
    }

    const msg = `Hi, I want to start the ${offer.trialDays}-day free trial.
${goalLine}
When is the best time to visit?`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const goals = [
    {
      name: "Fat Loss",
      desc: "Lose fat, improve stamina, and feel lighter",
    },
    {
      name: "Muscle Gain",
      desc: "Build strength with structured training",
    },
    {
      name: "General Fitness",
      desc: "Stay active, flexible, and injury-free",
    },
  ];

  const labelFromGoal = (goal) =>
    `goal_${goal.toLowerCase().replace(/\s+/g, "_")}_${offer.id}`;

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.06,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-10 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-lg sm:text-2xl font-semibold text-center">
          What’s your main training goal?
        </h2>

        <p className="mt-2 text-sm text-center text-muted-foreground">
          Selecting a goal opens WhatsApp instantly
        </p>

        <p className="mt-1 text-sm text-center text-muted-foreground">
          This helps us respond faster and more accurately
        </p>

        {/* MOBILE */}
        <motion.div
          className="mt-6 space-y-3 sm:hidden"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {goals.map((goal) => (
            <motion.a
              key={goal.name}
              variants={item}
              href={buildLink(goal.name)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", labelFromGoal(goal.name))
              }
              className="
                flex items-center justify-between
                w-full
                px-4 py-4
                rounded-xl
                border border-black/5
                bg-white
                active:scale-[0.98]
                transition
              "
            >
              <div className="pr-3">
                <p className="text-sm font-semibold text-gray-900">
                  {goal.name}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {goal.desc}
                </p>
              </div>

              <span className="text-xl font-semibold text-green-600">→</span>
            </motion.a>
          ))}
        </motion.div>

        {/* DESKTOP */}
        <motion.div
          className="hidden sm:grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {goals.map((goal) => (
            <motion.div key={goal.name} variants={item}>
              <a
                href={buildLink(goal.name)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", labelFromGoal(goal.name))
                }
                className="
                  flex h-full flex-col
                  rounded-xl
                  border border-border
                  p-8
                  bg-[var(--surface-card)]
                  transition-transform duration-300
                  hover:-translate-y-1 hover:shadow-md
                "
              >
                <p className="text-lg font-medium">{goal.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {goal.desc}
                </p>

                <p className="mt-auto pt-6 text-sm font-semibold text-[var(--action-primary)]">
                  Continue →
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* FOOTER NOTE */}
        <p className="mt-6 sm:mt-8 text-xs text-center text-muted-foreground">
          3-day free trial · No forms · No calls · WhatsApp only
        </p>
      </div>
    </section>
  );
}
