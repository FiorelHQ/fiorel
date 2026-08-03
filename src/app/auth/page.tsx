"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase-client";

type AuthMode = "sign-in" | "sign-up";

export default function AuthPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setMessage("");
    setErrorMessage("");

    try {
      if (mode === "sign-up") {
        const emailRedirectTo =
          typeof window !== "undefined"
            ? `${window.location.origin}/dashboard`
            : undefined;

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo,
            data: {
              first_name: firstName.trim(),
            },
          },
        });

        if (error) {
          throw error;
        }

        if (data.session) {
          router.push("/dashboard");
          router.refresh();
          return;
        }

        setMessage(
          "Account created. Check your email and confirm your address before signing in.",
        );
        setPassword("");
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function changeMode(nextMode: AuthMode) {
    setMode(nextMode);
    setMessage("");
    setErrorMessage("");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050d18] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-16rem] top-[-18rem] h-[38rem] w-[38rem] rounded-full bg-[#14b8a6]/15 blur-[140px]" />
        <div className="absolute bottom-[-18rem] right-[-14rem] h-[40rem] w-[40rem] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 grid min-h-screen lg:grid-cols-[0.9fr_1.1fr]">
        <section className="hidden border-r border-white/[0.08] bg-white/[0.015] p-12 lg:flex lg:flex-col lg:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#14b8a6] text-xl font-black text-[#06101d] shadow-lg shadow-[#14b8a6]/20">
              F
            </div>

            <div>
              <p className="text-lg font-bold">
                Fiorel<span className="text-[#14b8a6]">.</span>
              </p>
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#5eead4]">
                Train with Purpose
              </p>
            </div>
          </Link>

          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#14b8a6]">
              Your athlete operating system
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-0.055em]">
              One place to understand your training, recovery and performance.
            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-400">
              Sign in to open Mission Control, review today&apos;s guidance and
              continue building towards your next goal.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Readiness", "91"],
                ["Training", "Optimal"],
                ["Recovery", "Strong"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-2 text-lg font-bold">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-600">
            © 2026 Fiorel<span className="text-[#14b8a6]">.</span>
          </p>
        </section>

        <section className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-8">
          <div className="w-full max-w-md">
            <div className="mb-10 flex items-center justify-between lg:hidden">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14b8a6] font-black text-[#06101d]">
                  F
                </div>

                <p className="font-bold">
                  Fiorel<span className="text-[#14b8a6]">.</span>
                </p>
              </Link>

              <Link href="/" className="text-sm text-slate-400 hover:text-white">
                Back home
              </Link>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#14b8a6]">
                {mode === "sign-in" ? "Welcome back" : "Create your account"}
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em]">
                {mode === "sign-in"
                  ? "Open Mission Control."
                  : "Start training with purpose."}
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                {mode === "sign-in"
                  ? "Sign in to continue your Fiorel journey."
                  : "Create your account and begin building your athlete profile."}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-1">
              <button
                type="button"
                onClick={() => changeMode("sign-in")}
                className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                  mode === "sign-in"
                    ? "bg-[#14b8a6] text-[#06101d]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sign in
              </button>

              <button
                type="button"
                onClick={() => changeMode("sign-up")}
                className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                  mode === "sign-up"
                    ? "bg-[#14b8a6] text-[#06101d]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Create account
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {mode === "sign-up" && (
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-sm font-semibold text-slate-300"
                  >
                    First name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="Andrew"
                    className="mt-2 h-13 w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-[#14b8a6]/60 focus:ring-4 focus:ring-[#14b8a6]/10"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-300"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 h-13 w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-[#14b8a6]/60 focus:ring-4 focus:ring-[#14b8a6]/10"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-300"
                  >
                    Password
                  </label>

                  {mode === "sign-in" && (
                    <span className="text-xs text-slate-600">
                      Reset coming next
                    </span>
                  )}
                </div>

                <input
                  id="password"
                  type="password"
                  autoComplete={
                    mode === "sign-in" ? "current-password" : "new-password"
                  }
                  required
                  minLength={8}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Minimum 8 characters"
                  className="mt-2 h-13 w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-[#14b8a6]/60 focus:ring-4 focus:ring-[#14b8a6]/10"
                />
              </div>

              {errorMessage && (
                <div className="rounded-xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                  {errorMessage}
                </div>
              )}

              {message && (
                <div className="rounded-xl border border-[#14b8a6]/20 bg-[#14b8a6]/10 px-4 py-3 text-sm leading-6 text-[#99f6e4]">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-14 w-full items-center justify-center rounded-2xl bg-[#14b8a6] px-6 font-bold text-[#06101d] shadow-xl shadow-[#14b8a6]/15 transition hover:-translate-y-0.5 hover:bg-[#2dd4bf] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting
                  ? "Please wait..."
                  : mode === "sign-in"
                    ? "Open Fiorel"
                    : "Create Fiorel account"}
              </button>
            </form>

            <p className="mt-7 text-center text-xs leading-5 text-slate-600">
              By continuing, you agree to Fiorel&apos;s future terms and privacy
              policy.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}