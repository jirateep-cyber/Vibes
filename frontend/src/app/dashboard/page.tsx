import { SectionCard } from "@/components/section-card";
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, Circle, Gift, Lightbulb, Share2, Sparkles, WandSparkles } from "lucide-react";

const missions = [
  { title: "เชื่อมต่อ Instagram", detail: "1/1 · +200 XP", status: "completed", icon: BadgeCheck },
  { title: "ดูงานที่เหมาะกับคุณ", detail: "0/1 · +30 XP", status: "active", icon: BriefcaseBusiness },
  { title: "เพิ่ม Portfolio 1 งาน", detail: "0/1 · +300 XP", status: "active", icon: Sparkles },
  { title: "สมัครงานที่เหมาะกับคุณ", detail: "0/1 · +250 XP", status: "active", icon: Lightbulb }
];

const tiers = [
  { level: 1, name: "Rookie", thaiName: "ดาวรุ่งหน้าใหม่", range: "0-999 XP", benefits: ["Buddy Profile", "Creator Vibes", "Basic Content Lab"], unlocked: true },
  { level: 2, name: "Rising Star", thaiName: "ครีเอเตอร์น่าจับตา", range: "1,000-2,999 XP", benefits: ["Match Score", "Basic Rate Card", "Recommended Jobs"], unlocked: true },
  { level: 3, name: "Creator", thaiName: "ครีเอเตอร์ตัวจริง", range: "3,000-6,999 XP", benefits: ["Portfolio Export", "Brand Insights", "Advanced Content Lab"], unlocked: true, current: true },
  { level: 4, name: "Influencer", thaiName: "อินฟลูเอนเซอร์มาแรง", range: "7,000-14,999 XP", benefits: ["Priority Job Matching", "Featured Badge", "Advanced Rate Card"], unlocked: false },
  { level: 5, name: "Icon", thaiName: "ไอคอนแห่งวงการ", range: "15,000+ XP", benefits: ["Early Access Campaigns", "Premium Media Kit Export", "Featured Creator Opportunities"], unlocked: false }
];

const channels = [
  ["Instagram", "mixjp", "เชื่อมต่อแล้ว"],
  ["X (Twitter)", "mixjirat", "เชื่อมต่อแล้ว"],
  ["TikTok", "mixjp", "เชื่อมต่อแล้ว"],
  ["Facebook", "-", "ขาดการเชื่อมต่อ"],
  ["Facebook Page", "-", "ขาดการเชื่อมต่อ"],
  ["YouTube", "-", "ขาดการเชื่อมต่อ"]
];

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <div className="pb-2">
      <section className="br-enter rounded-[2rem] br-gradient p-6 text-white shadow-glow sm:p-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/75">Today&apos;s creator console</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h1 className="max-w-2xl text-3xl font-black leading-[1.05] sm:text-5xl">Your profile is close to brand-ready.</h1>
            <p className="mt-4 max-w-[60ch] text-base font-medium text-white/82">
              Finish the mission stack, then share a stronger Buddy Profile with brands that match your audience.
            </p>
          </div>
          <button className="br-lift inline-flex items-center justify-center gap-2 rounded-full bg-white/95 px-5 py-3 text-sm font-extrabold text-zinc-950" type="button">
            Share progress
            <Share2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.05fr_.95fr]">
        <SectionCard>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">Next best actions</p>
              <h2 className="mt-2 text-2xl font-extrabold">Move up before your next pitch</h2>
            </div>
            <WandSparkles className="h-6 w-6 text-buddy-yellow" aria-hidden="true" />
          </div>
          <div className="mt-5 grid gap-3">
            {missions.map((mission) => {
              const Icon = mission.icon;
              return (
                <button key={mission.title} className="br-lift flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-left light:border-purple-950/10 light:bg-purple-50/70" type="button">
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-buddy-pink/15 text-buddy-pink">
                      {mission.status === "completed" ? <BadgeCheck className="h-5 w-5 text-buddy-mint" aria-hidden="true" /> : <Icon className="h-5 w-5" aria-hidden="true" />}
                    </span>
                    <span>
                      <span className="block font-extrabold">{mission.title}</span>
                      <span className="text-sm text-zinc-400 light:text-zinc-600">{mission.detail}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500" aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </SectionCard>

        <SectionCard>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">Campaign pipeline</p>
          <h2 className="mt-2 text-2xl font-extrabold">Jobs moving this week</h2>
          <div className="mt-5 space-y-3">
            {[
              ["Applied", "4", "Waiting for brand review"],
              ["Accepted", "2", "Briefs ready to start"],
              ["Submitted", "1", "Payment review in progress"]
            ].map(([status, count, detail]) => (
              <div key={status} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 light:border-purple-950/10 light:bg-purple-50/70">
                <div>
                  <p className="font-extrabold">{status}</p>
                  <p className="text-sm text-zinc-400 light:text-zinc-600">{detail}</p>
                </div>
                <b className="text-3xl font-black text-buddy-yellow">{count}</b>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_.9fr]">
        <SectionCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">Tier roadmap</p>
              <h2 className="mt-2 text-2xl font-extrabold">Creator levels and unlocks</h2>
            </div>
            <Gift className="h-6 w-6 text-buddy-yellow" aria-hidden="true" />
          </div>
          <div className="mt-5 grid gap-3">
            {tiers.map((tier) => (
              <div key={tier.level} className={`rounded-2xl border p-4 ${tier.current ? "border-buddy-pink/50 bg-buddy-pink/10" : "border-white/10 bg-white/[0.045] light:border-purple-950/10 light:bg-purple-50/60"}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-extrabold">Level {tier.level} · {tier.name}</p>
                    <p className="text-sm text-zinc-400 light:text-zinc-600">{tier.thaiName} · {tier.range}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold light:bg-white">{tier.current ? "Current" : tier.unlocked ? "Unlocked" : "Locked"}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tier.benefits.map((benefit) => (
                    <span key={benefit} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-zinc-300 light:bg-white light:text-zinc-700">{benefit}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">Work readiness</p>
          <h2 className="mt-2 text-2xl font-extrabold">Channels and rewards</h2>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.055] p-4 light:border-purple-950/10 light:bg-purple-50/70">
            <p className="text-sm font-bold text-zinc-400 light:text-zinc-600">Reward Points</p>
            <p className="mt-1 text-3xl font-black text-buddy-yellow">4,000 แต้ม</p>
            <p className="mt-1 text-sm text-zinc-400 light:text-zinc-600">10 แต้ม = 1 บาท · มูลค่าประมาณ 400 บาท</p>
          </div>
          <div className="mt-4 grid gap-2">
            {channels.map(([platform, username, status]) => {
              const connected = status === "เชื่อมต่อแล้ว";
              return (
                <div key={platform} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3 light:border-purple-950/10 light:bg-purple-50/60">
                  <div className="min-w-0">
                    <p className="font-extrabold">{platform}</p>
                    <p className="text-sm text-zinc-400 light:text-zinc-600">{username === "-" ? "ยังไม่มี username" : `@${username}`}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-extrabold ${connected ? "bg-emerald-400/15 text-buddy-mint" : "bg-white/10 text-zinc-400 light:bg-white"}`}>
                    {connected ? <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" /> : <Circle className="h-3.5 w-3.5" aria-hidden="true" />}
                    {status}
                  </span>
                </div>
              );
            })}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
