"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { SectionCard } from "@/components/section-card";
import { LogIn, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    try {
      const data = await api<{ token: string }>("/auth/login", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(form))
      });
      window.localStorage.setItem("buddy-token", data.token);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 pb-16">
      <SectionCard>
        <p className="inline-flex items-center gap-2 rounded-full bg-buddy-pink/15 px-3 py-1 text-sm font-extrabold text-buddy-pink">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Creator console
        </p>
        <h1 className="mt-4 text-3xl font-black leading-tight">Welcome back to your Buddy Review progress.</h1>
        <form onSubmit={submit} className="mt-6 grid gap-4">
          <input name="email" type="email" required placeholder="Email" className="br-focus rounded-2xl border border-white/10 bg-white/[0.06] p-4 light:border-purple-950/10 light:bg-white" />
          <input name="password" type="password" required placeholder="Password" className="br-focus rounded-2xl border border-white/10 bg-white/[0.06] p-4 light:border-purple-950/10 light:bg-white" />
          <button className="br-lift inline-flex items-center justify-center gap-2 rounded-full br-gradient px-6 py-3 font-extrabold text-white shadow-glow" type="submit">
            Open console
            <LogIn className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
        {error && <p className="mt-4 text-red-400">{error}</p>}
      </SectionCard>
    </div>
  );
}
