"use client";

import { FormEvent, useState } from "react";
import { api } from "@/lib/api";
import { SectionCard } from "@/components/section-card";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    await api("/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(form))
    });
    setStatus("ส่งข้อความเรียบร้อยแล้ว");
    event.currentTarget.reset();
  }

  return (
    <div>
      <SectionCard>
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-buddy-pink">Creator support</p>
        <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">Need help getting brand-ready?</h1>
        <form onSubmit={submit} className="mt-6 grid gap-4">
          <input name="name" required placeholder="Name" className="br-focus rounded-2xl border border-white/10 bg-white/[0.06] p-4 light:border-purple-950/10 light:bg-white" />
          <input name="email" required type="email" placeholder="Email" className="br-focus rounded-2xl border border-white/10 bg-white/[0.06] p-4 light:border-purple-950/10 light:bg-white" />
          <textarea name="message" required placeholder="Message" rows={5} className="br-focus rounded-2xl border border-white/10 bg-white/[0.06] p-4 light:border-purple-950/10 light:bg-white" />
          <button className="br-lift inline-flex items-center justify-center gap-2 rounded-full br-gradient px-6 py-3 font-extrabold text-white shadow-glow" type="submit">
            Send message
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
        {status && <p className="mt-4 flex items-center gap-2 font-bold text-buddy-mint"><CheckCircle2 className="h-5 w-5" aria-hidden="true" />{status}</p>}
      </SectionCard>
    </div>
  );
}
