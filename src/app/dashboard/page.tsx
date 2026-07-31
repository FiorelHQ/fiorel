import Link from "next/link";

export default function DashboardPage() {
  const metrics = [
    { label: "Recovery", value: "82%" },
    { label: "Fitness", value: "Improving" },
    { label: "Race countdown", value: "85 days" },
  ];

  return (
    <main className="min-h-screen bg-[#0F172A] px-6 py-16 text-[#F8FAFC]">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-[#14B8A6]">
          ← Back home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#14B8A6]">
          Mission Control
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
          Good evening, Andrew.
        </h1>

        <p className="mt-4 text-[#94A3B8]">
          Here is what your training looks like today.
        </p>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl border border-[#334155] bg-[#1E293B] p-6"
            >
              <p className="text-sm text-[#94A3B8]">{metric.label}</p>
              <p className="mt-3 text-3xl font-bold">{metric.value}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}