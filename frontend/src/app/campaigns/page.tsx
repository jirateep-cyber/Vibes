import { SectionCard } from "@/components/section-card";
import { ArrowUpRight, BadgeCheck, Clock3, Search, Sparkles, Target } from "lucide-react";

const campaigns = [
  {
    title: "Beauty KOL Jul-Oct 26 [Standard]",
    detail: "Beauty KOL Jul-Oct 26 [Standard] : TikTok (Follower 0-1M)",
    platform: "TikTok",
    category: "ความงามและสุขภาพ",
    status: "กำลังรับสมัคร",
    remaining: "เหลือเวลาอีก 4 วัน",
    match: "Match 86%",
    followerRequirement: "0-1M",
    deliverables: ["TikTok Video 1 ชิ้น"],
    brandCategory: "Beauty",
    brief: "รีวิวผลิตภัณฑ์ความงามในสไตล์ creator-led พร้อมเล่าประสบการณ์ใช้งานจริง",
    requirements: ["มีช่อง TikTok ที่เชื่อมต่อแล้ว", "เล่า product benefit แบบเป็นธรรมชาติ", "ส่งงานตาม timeline"]
  },
  {
    title: "Bank เปิดบัญชีดิจิตอล ลุ้นรับบัตรคอนเสิร์ต",
    detail: "Bank เปิดบัญชีดิจิตอล ลุ้นรับบัตรคอนเสิร์ต (Follower 0-1M)",
    platform: "Instagram",
    category: "การเงินและธุรกิจ",
    status: "กำลังรับสมัคร",
    remaining: "เหลือเวลาอีก 14 วัน",
    match: "Match 72%",
    followerRequirement: "0-1M",
    deliverables: ["Instagram Reel 1 ชิ้น", "Instagram Story 1 Set"],
    brandCategory: "Banking",
    brief: "สื่อสารแคมเปญเปิดบัญชีดิจิตอลให้เข้าใจง่ายและน่าสนใจสำหรับผู้ติดตาม",
    requirements: ["มี Instagram ที่เชื่อมต่อแล้ว", "คอนเทนต์ต้องอ่านง่าย", "ระบุ disclosure ตาม guideline"]
  }
];

const platforms = ["ทั้งหมด (2)", "Instagram (1)", "TikTok (1)", "YouTube (0)", "Facebook (0)", "X (0)", "Lemon8 (0)"];

const workProfileItems = [
  ["LINE OA connection", "ยังไม่ได้เชื่อมต่อ", "เริ่มเชื่อมต่อ LINE OA"],
  ["Contact Information", "ใช้ข้อมูลจาก Buddy Profile สำหรับให้แบรนด์ติดต่อ", "ไปที่ Buddy Profile"],
  ["Work Preferences", "หมวดงานที่สนใจ, platform ที่พร้อมรับงาน, timeline และเงื่อนไขราคา", "ตั้งค่า Preferences"]
];

export const metadata = { title: "Campaign Hub" };

export default function CampaignHubPage() {
  return (
    <div>
      <section className="mb-5">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-buddy-pink">Matched jobs</p>
        <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">Campaigns that fit your creator profile</h1>
        <p className="mt-3 max-w-2xl text-zinc-400 light:text-zinc-600">
          ค้นหาแคมเปญที่เหมาะกับช่องของคุณ และสมัครงานกับแบรนด์ผ่าน Buddy Review
        </p>
      </section>
      <SectionCard className="mb-5 grid gap-5 lg:grid-cols-[.8fr_1fr_.8fr] lg:items-center">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-2xl br-gradient text-white shadow-glow">
            <Sparkles className="h-7 w-7" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-bold text-buddy-pink">Creator Progress</p>
            <h2 className="text-2xl font-extrabold">Creator · Level 3</h2>
            <p className="text-zinc-400 light:text-zinc-600">Creator Chameleon</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm font-bold">
            <span>4,200 / 7,000 XP</span>
            <span>60%</span>
          </div>
          <div className="br-progress-track mt-2 h-3 overflow-hidden rounded-full">
            <div className="br-progress-fill h-full w-[60%] rounded-full br-gradient" />
          </div>
          <p className="mt-2 text-sm text-zinc-400 light:text-zinc-600">อีก 2,800 XP เพื่อไปยัง Influencer tier</p>
        </div>
        <div className="grid gap-2 text-sm font-bold">
          <span className="rounded-2xl bg-white/[0.06] p-3 light:bg-purple-50">Reward Points 4,000</span>
          <span className="rounded-2xl bg-white/[0.06] p-3 light:bg-purple-50">Mission 2/5</span>
          <span className="rounded-2xl bg-white/[0.06] p-3 light:bg-purple-50">Profile Strength 82%</span>
        </div>
      </SectionCard>

      <div className="mb-5 flex flex-wrap gap-2">
        {["ค้นหางานใหม่", "งานของฉัน", "โปรไฟล์รับงาน"].map((tab, index) => (
          <button key={tab} className={`br-lift rounded-full px-4 py-2 text-sm font-extrabold ${index === 0 ? "br-gradient text-white shadow-glow" : "border border-white/10 bg-white/[0.055] text-zinc-300 light:border-purple-950/10 light:bg-purple-50 light:text-zinc-700"}`} type="button">
            {tab}
          </button>
        ))}
      </div>

      <SectionCard className="mb-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="br-focus flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 light:border-purple-950/10 light:bg-white">
            <Search className="h-5 w-5 text-buddy-pink" aria-hidden="true" />
            <input className="min-w-0 flex-1 bg-transparent outline-none" placeholder="ค้นหางานใหม่" />
          </label>
          <strong className="text-sm text-zinc-400 light:text-zinc-600">{campaigns.length} งาน</strong>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {platforms.map((platform, index) => (
            <button key={platform} className={`rounded-full px-3 py-1.5 text-sm font-bold ${index === 0 ? "bg-buddy-pink/15 text-buddy-pink" : "bg-white/10 text-zinc-300 light:bg-purple-50 light:text-zinc-700"}`} type="button">
              {platform}
            </button>
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-4">
        {campaigns.map((campaign) => (
          <SectionCard key={campaign.title} className="br-lift grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="grid h-14 w-14 place-items-center rounded-2xl br-gradient text-xl font-black text-white shadow-glow">
              {campaign.platform.slice(0, 1)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-extrabold">{campaign.title}</h2>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-bold text-emerald-300 light:text-emerald-700">{campaign.status}</span>
              </div>
              <p className="mt-1 text-zinc-400 light:text-zinc-600">{campaign.detail}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm font-bold">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 light:bg-purple-50"><Target className="h-3.5 w-3.5" aria-hidden="true" />{campaign.platform}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 light:bg-purple-50">Follower {campaign.followerRequirement}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 light:bg-purple-50">{campaign.brandCategory}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 light:bg-purple-50"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" />{campaign.remaining}</span>
                <span className="rounded-full bg-buddy-pink/15 px-3 py-1 text-buddy-pink">{campaign.match}</span>
              </div>
              <div className="mt-4 grid gap-3 lg:grid-cols-3">
                <div className="rounded-2xl bg-white/[0.055] p-3 light:bg-purple-50/70">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-buddy-pink">Brief</p>
                  <p className="mt-1 text-sm text-zinc-300 light:text-zinc-700">{campaign.brief}</p>
                </div>
                <div className="rounded-2xl bg-white/[0.055] p-3 light:bg-purple-50/70">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-buddy-pink">Deliverables</p>
                  <ul className="mt-1 space-y-1 text-sm text-zinc-300 light:text-zinc-700">
                    {campaign.deliverables.map((item) => <li key={item}>- {item}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl bg-white/[0.055] p-3 light:bg-purple-50/70">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-buddy-pink">Requirements</p>
                  <ul className="mt-1 space-y-1 text-sm text-zinc-300 light:text-zinc-700">
                    {campaign.requirements.map((item) => <li key={item}>- {item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <button className="br-lift inline-flex items-center justify-center gap-2 rounded-full br-gradient px-5 py-3 font-extrabold text-white shadow-glow" type="button">
              ดูรายละเอียด
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </SectionCard>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
        <SectionCard>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">งานของฉัน</p>
          <h2 className="mt-2 text-2xl font-extrabold">ยังไม่มีงานที่สมัคร</h2>
          <p className="mt-2 text-zinc-400 light:text-zinc-600">สมัครแคมเปญในแท็บค้นหางานใหม่ แล้วงานจะมาอยู่ที่นี่ พร้อมสถานะ, deliverables, due date และ content lab shortcut.</p>
        </SectionCard>
        <SectionCard>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">โปรไฟล์รับงาน</p>
          <h2 className="mt-2 text-2xl font-extrabold">Readiness checklist</h2>
          <div className="mt-4 grid gap-3">
            {workProfileItems.map(([title, detail, action]) => (
              <div key={title} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 light:border-purple-950/10 light:bg-purple-50/70">
                <div>
                  <p className="font-extrabold">{title}</p>
                  <p className="text-sm text-zinc-400 light:text-zinc-600">{detail}</p>
                </div>
                <span className="hidden rounded-full bg-white/10 px-3 py-1 text-xs font-bold light:bg-white sm:inline-flex">{action}</span>
              </div>
            ))}
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 light:border-purple-950/10 light:bg-purple-50/70">
              <p className="font-extrabold">ช่องทางรีวิว</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {["Instagram @mixjp", "X @mixjirat", "TikTok @mixjp", "Facebook ยังไม่ได้เชื่อมต่อ"].map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm text-zinc-300 light:text-zinc-700"><BadgeCheck className="h-4 w-4 text-buddy-pink" aria-hidden="true" />{item}</p>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
