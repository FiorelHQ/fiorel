import Link from "next/link";

const signals = [
  {
    label: "Readiness",
    value: "91",
    detail: "Excellent",
    colour: "bg-emerald-400",
  },
  {
    label: "Recovery",
    value: "86%",
    detail: "Trending up",
    colour: "bg-teal-400",
  },
  {
    label: "Nutrition",
    value: "On track",
    detail: "Fuelled for today",
    colour: "bg-sky-400",
  },
  {
    label: "Training load",
    value: "Optimal",
    detail: "+4% this week",
    colour: "bg-violet-400",
  },
];

const pillars = [
  {
    number: "01",
    title: "Training Intelligence",
    description:
      "Adaptive plans that respond to completed sessions, fatigue, changing schedules and your next goal.",
    accent: "from-teal-400/20 to-transparent",
  },
  {
    number: "02",
    title: "Recovery Intelligence",
    description:
      "Sleep, fatigue, resting heart rate and recovery signals translated into clear daily guidance.",
    accent: "from-emerald-400/20 to-transparent",
  },
  {
    number: "03",
    title: "Nutrition Intelligence",
    description:
      "Calories, carbohydrates, protein and hydration targets shaped by the work your body needs to perform.",
    accent: "from-sky-400/20 to-transparent",
  },
  {
    number: "04",
    title: "Race Intelligence",
    description:
      "Readiness, pacing, fuelling, weather and performance predictions brought together for race day.",
    accent: "from-violet-400/20 to-transparent",
  },
];

const sources = [
  "Garmin",
  "Strava",
  "WHOOP",
  "Apple Health",
  "COROS",
  "Nutrition",
  "Sleep",
  "Weather",
];

const week = [
  {
    day: "MON",
    session: "Recovery",
    detail: "Mobility",
    status: "complete",
  },
  {
    day: "TUE",
    session: "Easy Run",
    detail: "8 km",
    status: "complete",
  },
  {
    day: "WED",
    session: "Strength",
    detail: "40 min",
    status: "complete",
  },
  {
    day: "THU",
    session: "Threshold",
    detail: "10 km",
    status: "active",
  },
  {
    day: "FRI",
    session: "Easy Run",
    detail: "6 km",
    status: "planned",
  },
  {
    day: "SAT",
    session: "Rest",
    detail: "Recovery",
    status: "planned",
  },
  {
    day: "SUN",
    session: "Long Run",
    detail: "22 km",
    status: "planned",
  },
];

function FiorelWordmark() {
  return (
    <>
      Fiorel<span className="text-[#14b8a6]">.</span>
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050d18] font-sans text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-26rem] h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-teal-400/[0.14] blur-[150px]" />
        <div className="absolute right-[-20rem] top-[34rem] h-[44rem] w-[44rem] rounded-full bg-blue-500/[0.1] blur-[160px]" />
        <div className="absolute bottom-[-24rem] left-[-16rem] h-[42rem] w-[42rem] rounded-full bg-violet-500/[0.08] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050d18]/75 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[#14b8a6] shadow-lg shadow-[#14b8a6]/20">
              <span className="relative z-10 text-xl font-black text-[#06101d]">
                F
              </span>
              <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
            </div>

            <div>
              <p className="text-lg font-bold tracking-[-0.04em]">
                <FiorelWordmark />
              </p>
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#5eead4]">
                Train with Purpose
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-400 lg:flex">
            <a href="#platform" className="transition hover:text-white">
              Platform
            </a>
            <a href="#intelligence" className="transition hover:text-white">
              Intelligence
            </a>
            <a href="#nutrition" className="transition hover:text-white">
              Nutrition
            </a>
            <a href="#vision" className="transition hover:text-white">
              Vision
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/training"
              className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-white sm:block"
            >
              Explore
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl bg-[#14b8a6] px-5 py-2.5 text-sm font-bold text-[#06101d] shadow-lg shadow-[#14b8a6]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#2dd4bf]"
            >
              Open Fiorel
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:py-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#14b8a6]/25 bg-[#14b8a6]/[0.08] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5eead4] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5eead4]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5eead4]">
              The athlete operating system
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-[5.7rem]">
            Become the athlete
            <span className="mt-2 block bg-gradient-to-r from-[#5eead4] via-[#14b8a6] to-[#60a5fa] bg-clip-text text-transparent">
              you know you can be.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            Fiorel connects training, recovery, nutrition and performance data
            to turn every athlete signal into one clear daily decision.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-[#14b8a6] px-8 text-base font-bold text-[#06101d] shadow-xl shadow-[#14b8a6]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#2dd4bf]"
            >
              Open Fiorel
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/training"
              className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.04] px-8 text-base font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
            >
              Explore the platform
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.08] pt-7 text-sm text-slate-500">
            {["Running first", "Multisport ready", "Nutrition-aware"].map(
              (item, index) => (
                <span key={item} className="flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index === 0
                        ? "bg-[#14b8a6]"
                        : index === 1
                          ? "bg-sky-400"
                          : "bg-violet-400"
                    }`}
                  />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Mission Control */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#14b8a6]/20 via-transparent to-blue-500/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[#0a1727]/90 shadow-2xl shadow-black/50 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(74,222,128,.8)]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                    Live
                  </p>
                </div>

                <h2 className="mt-2 text-xl font-bold tracking-tight">
                  Mission Control
                </h2>
              </div>

              <p className="text-xs text-slate-500">Monday · 03 August</p>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <div className="rounded-2xl border border-white/[0.08] bg-[#101f33] p-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5eead4]">
                      Good evening, Andrew
                    </p>
                    <p className="mt-3 text-2xl font-bold">
                      You are ready to perform.
                    </p>
                  </div>

                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#14b8a6_0deg,#14b8a6_328deg,rgba(255,255,255,.08)_328deg)]">
                    <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#101f33]">
                      <span className="text-2xl font-bold">91</span>
                      <span className="text-[8px] uppercase tracking-wider text-slate-500">
                        Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#14b8a6]/20 bg-gradient-to-br from-[#14b8a6]/[0.11] to-sky-500/[0.05]">
                <div className="h-1 bg-gradient-to-r from-[#14b8a6] via-sky-400 to-violet-400" />

                <div className="p-5">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5eead4]">
                        Today&apos;s mission
                      </p>
                      <p className="mt-3 text-2xl font-bold">
                        10 km Threshold Run
                      </p>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                        Improve lactate threshold while keeping the first two
                        kilometres controlled.
                      </p>
                    </div>

                    <div className="hidden rounded-xl border border-white/[0.08] bg-black/10 px-3 py-2 text-right sm:block">
                      <p className="text-[9px] uppercase tracking-wider text-slate-500">
                        Pace
                      </p>
                      <p className="mt-1 text-sm font-bold text-[#5eead4]">
                        5:05/km
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                    <span>Expected benefit</span>
                    <span className="font-bold text-[#5eead4]">
                      +0.4% fitness
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.055]"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-500">{signal.label}</p>
                      <span
                        className={`h-2 w-2 rounded-full ${signal.colour}`}
                      />
                    </div>

                    <p className="mt-3 text-xl font-bold">{signal.value}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {signal.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[#14b8a6]/20 bg-[#14b8a6]/[0.08] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#14b8a6] text-sm font-black text-[#06101d]">
                    F
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5eead4]">
                      Fiorel Coach
                    </p>
                    <p className="text-xs text-slate-500">
                      Updated moments ago
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-200">
                  Your sleep, recovery and fuelling all support today&apos;s
                  quality session. Start conservatively and let the pace settle
                  naturally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connected platform */}
      <section
        id="platform"
        className="relative z-10 border-y border-white/[0.08] bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#14b8a6]">
              Everything connected
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
              Your athlete data finally
              <span className="block text-slate-500">
                speaks the same language.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              Fiorel brings together the fragmented pieces of performance and
              translates them into guidance you can act upon.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="grid grid-cols-2 gap-3">
              {sources.map((source) => (
                <div
                  key={source}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-5 text-center text-sm font-semibold text-slate-300 transition hover:border-white/[0.16] hover:bg-white/[0.06]"
                >
                  {source}
                </div>
              ))}
            </div>

            <div className="hidden flex-col items-center gap-3 lg:flex">
              <div className="h-20 w-px bg-gradient-to-b from-transparent to-[#14b8a6]" />
              <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-[#14b8a6]/30 bg-[#14b8a6]/10 shadow-[0_0_60px_rgba(20,184,166,.18)]">
                <span className="text-3xl font-black text-[#5eead4]">F</span>
              </div>
              <div className="h-20 w-px bg-gradient-to-b from-[#14b8a6] to-transparent" />
            </div>

            <div className="rounded-[2rem] border border-[#14b8a6]/20 bg-gradient-to-br from-[#14b8a6]/10 to-sky-500/[0.04] p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5eead4]">
                Today&apos;s decision
              </p>

              <p className="mt-5 text-3xl font-bold tracking-tight">
                Complete the threshold session as planned.
              </p>

              <p className="mt-5 leading-7 text-slate-400">
                Recovery is high, fuelling is sufficient and recent load is
                controlled. The conditions support quality work today.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["High confidence", "Optimal load", "Well fuelled"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence */}
      <section
        id="intelligence"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#14b8a6]">
              Fiorel Intelligence
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
              Understand more.
              <span className="block text-slate-500">Guess less.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-400 lg:justify-self-end">
            Fiorel does not simply display your numbers. It explains what they
            mean, how they connect and what you should do next.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="group relative min-h-72 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#14b8a6]/30 hover:bg-white/[0.05]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
              />

              <div className="relative">
                <p className="text-sm font-bold text-[#14b8a6]">
                  {pillar.number}
                </p>

                <h3 className="mt-16 text-3xl font-bold tracking-[-0.04em]">
                  {pillar.title}
                </h3>

                <p className="mt-5 max-w-lg leading-7 text-slate-400">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Weekly plan */}
      <section className="relative z-10 border-y border-white/[0.08] bg-[#081421]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#14b8a6]">
                Adaptive training
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
                Life changes.
                <span className="block text-slate-500">
                  Your plan should too.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-400">
                Miss a session, feel unusually tired or change your race?
                Fiorel protects the goal while reshaping the path.
              </p>

              <Link
                href="/training"
                className="mt-9 inline-flex items-center gap-3 font-bold text-[#5eead4] transition hover:gap-5"
              >
                Explore training
                <span>→</span>
              </Link>
            </div>

            <div className="rounded-[2rem] border border-white/[0.08] bg-[#0c1a2b] p-4 shadow-2xl shadow-black/30 sm:p-6">
              <div className="mb-5 flex items-center justify-between px-1">
                <div>
                  <p className="font-bold">Marathon build</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Week 7 · Build phase
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-[#5eead4]">40 / 45 km</p>
                  <p className="mt-1 text-xs text-slate-500">Weekly target</p>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-7">
                {week.map((item) => (
                  <div
                    key={item.day}
                    className={`min-h-32 rounded-xl border p-3 ${
                      item.status === "active"
                        ? "border-[#14b8a6]/40 bg-[#14b8a6]/10"
                        : "border-white/[0.07] bg-white/[0.025]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-[10px] font-bold ${
                          item.status === "active"
                            ? "text-[#5eead4]"
                            : "text-slate-600"
                        }`}
                      >
                        {item.day}
                      </p>

                      {item.status === "complete" && (
                        <span className="text-[10px] text-emerald-400">✓</span>
                      )}

                      {item.status === "active" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#5eead4]" />
                      )}
                    </div>

                    <p className="mt-7 text-xs font-bold leading-5">
                      {item.session}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition */}
      <section
        id="nutrition"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8"
      >
        <div className="overflow-hidden rounded-[2.25rem] border border-white/[0.08] bg-gradient-to-br from-[#101f33] via-[#0b1828] to-[#07111f]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#14b8a6]">
                Athlete nutrition
              </p>

              <h2 className="mt-6 text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
                Fuel the work.
                <span className="block text-slate-500">
                  Not just the calorie target.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-400">
                Fiorel connects what you eat to what you are training for,
                helping you fuel performance without judgement or generic
                targets.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Targets that change with training demand",
                  "Pre-session carbohydrate recommendations",
                  "Recovery nutrition and hydration guidance",
                  "Performance trends connected to fuelling",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#14b8a6]/15 text-xs font-bold text-[#5eead4]">
                      ✓
                    </span>
                    <p className="leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/[0.08] bg-white/[0.02] p-8 sm:p-12 lg:border-l lg:border-t-0">
              <div className="rounded-[1.75rem] border border-white/[0.08] bg-[#081421] p-6 shadow-2xl shadow-black/20">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5eead4]">
                      Fuel today
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      Threshold training day
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-bold">2,840</p>
                    <p className="text-xs text-slate-500">kcal target</p>
                  </div>
                </div>

                <div className="mt-9 space-y-7">
                  {[
                    ["Carbohydrates", "365g", "78%", "bg-[#14b8a6]"],
                    ["Protein", "156g", "91%", "bg-sky-400"],
                    ["Fat", "72g", "64%", "bg-violet-400"],
                    ["Hydration", "3.1L", "82%", "bg-blue-400"],
                  ].map(([label, value, width, colour]) => (
                    <div key={label}>
                      <div className="flex items-center justify-between text-sm">
                        <p className="text-slate-400">{label}</p>
                        <p className="font-bold">{value}</p>
                      </div>

                      <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                        <div
                          className={`h-full rounded-full ${colour}`}
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-9 rounded-xl border border-[#14b8a6]/20 bg-[#14b8a6]/[0.08] p-4">
                  <p className="text-xs font-bold text-[#5eead4]">
                    Athlete insight
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Add a carbohydrate-rich meal before 15:00 to support
                    tonight&apos;s threshold session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        id="vision"
        className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8"
      >
        <div className="relative overflow-hidden rounded-[2.25rem] border border-[#14b8a6]/20 bg-[#14b8a6]/[0.065] px-7 py-20 text-center sm:px-14">
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#14b8a6]/20 blur-[110px]" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#5eead4]">
              The Fiorel vision
            </p>

            <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-[-0.055em] sm:text-7xl">
              One athlete.
              <span className="block text-slate-400">
                One intelligent platform.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Running is where Fiorel begins. Complete endurance performance
              across training, nutrition, recovery and racing is where it is
              going.
            </p>

            <Link
              href="/dashboard"
              className="mt-11 inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-[#14b8a6] px-9 text-base font-bold text-[#06101d] shadow-xl shadow-[#14b8a6]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#2dd4bf]"
            >
              Open Fiorel
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="font-bold text-slate-300">
              <FiorelWordmark />
            </p>
            <p className="mt-1 text-xs">Train with Purpose.</p>
          </div>

          <p>Built in Eastbourne for athletes everywhere.</p>

          <p>
            © 2026 Fiorel<span className="text-[#14b8a6]">.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}