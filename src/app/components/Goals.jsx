import GoalCTA from "./GoalCTA";

export default function Goals() {
  const whatsappNumber = "918279898128";

  const buildLink = (goal) => {
    const msg = `Hi, I want to join the ₹999 trial.
Goal: ${goal}
I’m ready to start this week.
Source: Goals`;
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
    `goal_${goal.toLowerCase().replace(" ", "_")}`;

  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">

        <h2 className="text-lg sm:text-2xl font-semibold">
          What’s your main training goal?
        </h2>

        <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
          Selecting a goal opens WhatsApp instantly
        </p>

        <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
          This helps us respond faster and more accurately
        </p>

        {/* ================= MOBILE ================= */}
        <div className="mt-6 sm:hidden space-y-3 text-left">
          {goals.map((goal) => (
            <GoalCTA
              key={goal.name}
              href={buildLink(goal.name)}
              label={labelFromGoal(goal.name)}
              className="
                flex flex-col gap-1
                px-4 py-4
                border
                transition
              "
              style={{
                background: "var(--surface-card)",
                borderColor: "var(--border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-medium">{goal.name}</span>
                <span
                  className="font-semibold"
                  style={{ color: "var(--action-primary)" }}
                >
                  →
                </span>
              </div>

              <p
                className="text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                {goal.desc}
              </p>
            </GoalCTA>
          ))}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="mt-10 hidden sm:grid gap-5 sm:grid-cols-2 md:grid-cols-3 text-left">
          {goals.map((goal) => (
            <GoalCTA
              key={goal.name}
              href={buildLink(goal.name)}
              label={labelFromGoal(goal.name)}
              className="group border transition p-6 sm:p-8"
              style={{
                background: "var(--surface-card)",
                borderColor: "var(--border)",
                borderRadius: "var(--radius-xl)",
              }}
            >
              <>
                <p className="text-lg font-medium">{goal.name}</p>

                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  {goal.desc}
                </p>

                <p
                  className="mt-6 text-sm font-medium group-hover:underline"
                  style={{ color: "var(--action-primary)" }}
                >
                  Continue →
                </p>
              </>
            </GoalCTA>
          ))}
        </div>

        <p className="mt-8 text-xs" style={{ color: "var(--text-muted)" }}>
          No forms · No calls · WhatsApp only
        </p>
      </div>
    </section>
  );
}
