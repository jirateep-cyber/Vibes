import { clsx } from "clsx";
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, Gauge, Sparkles, Target } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Creator Tier", value: "Level 3", detail: "Creator Chameleon", icon: BadgeCheck },
  { label: "XP Progress", value: "4.2k / 7k", detail: "60% to Influencer", icon: Sparkles },
  { label: "Profile Strength", value: "82%", detail: "Add 2 case studies", icon: Gauge },
  { label: "Job Match", value: "86%", detail: "Beauty KOL is ready", icon: Target }
];

export function CreatorProgressConsole({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={clsx("br-card br-enter overflow-hidden rounded-[1.5rem]", compact ? "p-4" : "p-5")}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-buddy-pink">Creator console</p>
          <h2 className="mt-2 text-xl font-extrabold leading-tight sm:text-2xl">Level up your brand-ready profile</h2>
        </div>
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl br-gradient text-sm font-black text-white shadow-glow">
          BR
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-sm font-bold">
          <span>XP to Influencer</span>
          <span className="text-buddy-yellow">60%</span>
        </div>
        <div className="br-progress-track mt-2 h-3 overflow-hidden rounded-full">
          <div className="br-progress-fill h-full w-[60%] rounded-full br-gradient" />
        </div>
      </div>

      <div className={clsx("mt-5 grid gap-3", compact ? "grid-cols-2" : "sm:grid-cols-2")}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 light:border-purple-950/10 light:bg-purple-50/70">
              <div className="flex items-center gap-2 text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-zinc-400 light:text-zinc-600">
                <Icon className="h-4 w-4 text-buddy-pink" aria-hidden="true" />
                {stat.label}
              </div>
              <p className="mt-2 text-lg font-extrabold leading-none">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-400 light:text-zinc-600">{stat.detail}</p>
            </div>
          );
        })}
      </div>

      <Link href="/campaigns" className="br-lift mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full br-gradient px-4 py-3 text-sm font-extrabold text-white shadow-glow">
        <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
        Find matched jobs
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </aside>
  );
}
