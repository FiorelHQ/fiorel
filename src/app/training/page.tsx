import Link from "next/link";

export default function TrainingPage() {
  const sessions = [
    { day: "Tuesday", session: "Easy Run", distance: "8 km" },
    { day: "Thursday", session: "Tempo Run", distance: "10 km" },
    { day: "Saturday", session: "Recovery Run", distance: "6 km" },
    { day: "Sunday", session: "Long Run", distance: "20 km" },
  ];

  return (
    <main className="min-h-screen bg-[#0F172A] px-6 py-16 text-[#F8FAFC]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-[#14B8A6]">
          ← Back home
        </Link>

        <h1 className="mt-12 text-4xl font-bold">Your training</h1>

        <div className="mt-10 space-y-4">
          {sessions.map((item) => (
            <article
              key={item.day}
              className="flex items-center justify-between rounded-2xl border border-[#334155] bg-[#1E293B] p-6"
            >
              <div>
                <p className="text-sm text-[#94A3B8]">{item.day}</p>
                <p className="mt-1 text-xl font-semibold">{item.session}</p>
              </div>

              <p className="font-semibold text-[#14B8A6]">{item.distance}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}