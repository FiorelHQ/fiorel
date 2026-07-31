export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#14B8A6]">
          Train with Purpose.
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Fiorel
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#94A3B8] sm:text-xl">
          Personalised training, recovery insights and clear daily guidance for
          runners who want to make every session count.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl bg-[#14B8A6] px-6 py-3 font-semibold text-[#0F172A] transition hover:opacity-90">
            Enter Fiorel
          </button>

          <button className="rounded-xl border border-[#334155] px-6 py-3 font-semibold text-[#F8FAFC] transition hover:bg-[#1E293B]">
            View Training
          </button>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            ["Recovery", "82%"],
            ["Fitness", "Improving"],
            ["Race countdown", "85 days"],
          ].map(([label, value]) => (
            <article
              key={label}
              className="rounded-2xl border border-[#334155] bg-[#1E293B] p-6"
            >
              <p className="text-sm text-[#94A3B8]">{label}</p>
              <p className="mt-2 text-2xl font-semibold">{value}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}