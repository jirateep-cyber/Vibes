import { SectionCard } from "@/components/section-card";
import { BadgeCheck, Download, Link2, Mail, Share2, Sparkles } from "lucide-react";

export const metadata = { title: "User Profile" };

const scores = [
  ["Audience Fit", "86", "เหมาะกับ Beauty, Lifestyle, Marketplace"],
  ["Brand Safety", "92", "โทนสื่อสารชัดและเหมาะกับแบรนด์"],
  ["Content Consistency", "78", "ควรเพิ่ม portfolio เพื่อยืนยันผลงาน"],
  ["Conversion Potential", "74", "เหมาะกับ campaign ที่ต้องอธิบายสินค้า"]
];

const rates = [
  ["TikTok Video", "฿18,000", "1 video, creator-led review, usage 30 days"],
  ["Instagram Reel", "฿15,000", "1 reel, caption, brand mention"],
  ["Story Set", "฿6,000", "3 frames, swipe/link sticker"],
  ["Bundle Package", "฿32,000", "TikTok + IG Reel + Story Set"]
];

const portfolio = [
  ["Beauty Review", "Product benefit explained through real usage story", "TikTok · 128K views"],
  ["Lifestyle Mini Vlog", "Daily routine integration with natural brand mention", "Instagram · 42K reach"],
  ["Finance Explainer", "Simple digital account walkthrough for first-time users", "Reel · 7.8% save rate"]
];

const channels = [
  ["Instagram", "@mixjp", "เชื่อมต่อแล้ว", "42K reach"],
  ["TikTok", "@mixjp", "เชื่อมต่อแล้ว", "128K views"],
  ["X (Twitter)", "@mixjirat", "เชื่อมต่อแล้ว", "Insight thread"],
  ["YouTube", "ยังไม่ได้เชื่อมต่อ", "ขาดการเชื่อมต่อ", "Add channel"]
];

export default function ProfilePage() {
  return (
    <div>
      <SectionCard className="overflow-hidden p-0">
        <div className="br-gradient p-6 text-white sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-24 w-24 place-items-center rounded-[1.6rem] bg-white/95 text-4xl font-black text-zinc-950 shadow-glow">M</div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/72">Buddy Profile</p>
                <h1 className="mt-2 text-3xl font-black leading-none sm:text-5xl">mixjp</h1>
                <p className="mt-2 font-bold text-white/82">Creator Chameleon · Level 3</p>
              </div>
            </div>
            <button className="br-lift inline-flex items-center justify-center gap-2 rounded-full bg-white/95 px-5 py-3 text-sm font-extrabold text-zinc-950" type="button">
              Share profile
              <Share2 className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1fr_.8fr]">
          <div>
            <h2 className="text-2xl font-extrabold">Brand-ready media kit</h2>
            <p className="mt-3 max-w-[62ch] text-zinc-400 light:text-zinc-600">
              Portfolio, rate card, contact, connected channels, and proof points in one page brands can understand quickly.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["TikTok", "Instagram", "X"].map((item) => (
                <span key={item} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-center font-bold light:border-purple-950/10 light:bg-purple-50">
                  <Link2 className="h-4 w-4 text-buddy-pink" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-4 light:border-purple-950/10 light:bg-purple-50/70">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">Profile strength</p>
                <p className="mt-2 text-3xl font-black">82%</p>
              </div>
              <Sparkles className="h-7 w-7 text-buddy-yellow" aria-hidden="true" />
            </div>
            <div className="br-progress-track mt-4 h-3 overflow-hidden rounded-full">
              <div className="br-progress-fill h-full w-[82%] rounded-full br-gradient" />
            </div>
            <div className="mt-4 space-y-2 text-sm font-bold">
              <p className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-buddy-mint" aria-hidden="true" /> Connected channels</p>
              <p className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-buddy-mint" aria-hidden="true" /> Rate card drafted</p>
              <p className="text-zinc-400 light:text-zinc-600">Next: add portfolio case studies</p>
            </div>
          </div>
        </div>
      </SectionCard>

      <div className="mt-5 grid gap-5">
        <SectionCard>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">A. Profile setup</p>
              <h2 className="mt-2 text-2xl font-extrabold">ข้อมูลที่แบรนด์ต้องเห็นก่อนจ้างงาน</h2>
            </div>
            <button className="br-lift inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-extrabold light:border-purple-950/10" type="button">
              <Mail className="h-4 w-4 text-buddy-pink" aria-hidden="true" />
              Contact ready
            </button>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Creator Name", "jirateep supachaisamanpun"],
              ["Display Name", "mixjp"],
              ["Main Platform", "TikTok"],
              ["Content Categories", "Beauty, Lifestyle, Business"],
              ["Contact Email", "email@example.com"],
              ["Social Links", "linktr.ee/mixjp"],
              ["Bio", "Hybrid creator who turns product stories into practical, shareable content."],
              ["Brand Fit", "Marketplace, Lifestyle Platform, Telecom, Super App"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 light:border-purple-950/10 light:bg-purple-50/70">
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-zinc-500">{label}</p>
                <p className="mt-2 font-bold">{value}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="grid gap-5 xl:grid-cols-[.9fr_1.1fr]">
          <SectionCard>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">B. Creator score</p>
            <h2 className="mt-2 text-2xl font-extrabold">Brand readiness signals</h2>
            <div className="mt-5 grid gap-3">
              {scores.map(([label, value, detail]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 light:border-purple-950/10 light:bg-purple-50/70">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-extrabold">{label}</p>
                    <b className="text-2xl font-black text-buddy-yellow">{value}</b>
                  </div>
                  <div className="br-progress-track mt-3 h-2 overflow-hidden rounded-full">
                    <div className="br-progress-fill h-full rounded-full br-gradient" style={{ width: `${value}%` }} />
                  </div>
                  <p className="mt-2 text-sm text-zinc-400 light:text-zinc-600">{detail}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">C. Rate card</p>
            <h2 className="mt-2 text-2xl font-extrabold">Packages ready for brand discussion</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {rates.map(([name, price, detail]) => (
                <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 light:border-purple-950/10 light:bg-purple-50/70">
                  <p className="font-extrabold">{name}</p>
                  <p className="mt-2 text-2xl font-black text-buddy-yellow">{price}</p>
                  <p className="mt-1 text-sm text-zinc-400 light:text-zinc-600">{detail}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <SectionCard>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">D. Portfolio</p>
          <h2 className="mt-2 text-2xl font-extrabold">Proof brands can scan quickly</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {portfolio.map(([title, detail, result]) => (
              <div key={title} className="br-lift rounded-2xl border border-white/10 bg-white/[0.055] p-4 light:border-purple-950/10 light:bg-purple-50/70">
                <div className="grid aspect-[4/3] place-items-center rounded-2xl br-gradient text-3xl font-black text-white shadow-glow">{title.slice(0, 1)}</div>
                <h3 className="mt-4 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm text-zinc-400 light:text-zinc-600">{detail}</p>
                <p className="mt-3 rounded-full bg-white/10 px-3 py-1 text-sm font-bold light:bg-white">{result}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
          <SectionCard>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">E. Connected channel stats</p>
            <h2 className="mt-2 text-2xl font-extrabold">Review channels</h2>
            <div className="mt-5 grid gap-3">
              {channels.map(([platform, username, status, metric]) => (
                <div key={platform} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 light:border-purple-950/10 light:bg-purple-50/70">
                  <div>
                    <p className="font-extrabold">{platform}</p>
                    <p className="text-sm text-zinc-400 light:text-zinc-600">{username} · {status}</p>
                  </div>
                  <span className="rounded-full bg-buddy-pink/15 px-3 py-1 text-sm font-extrabold text-buddy-pink">{metric}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-buddy-pink">Export preview</p>
                <h2 className="mt-2 text-2xl font-extrabold">Shareable media kit</h2>
              </div>
              <Download className="h-6 w-6 text-buddy-yellow" aria-hidden="true" />
            </div>
            <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/[0.055] p-5 light:border-purple-950/10 light:bg-purple-50/70">
              <p className="text-sm font-bold text-buddy-pink">mixjp · Creator Chameleon</p>
              <h3 className="mt-2 text-2xl font-black">Hybrid creator for lifestyle, beauty, and business campaigns.</h3>
              <p className="mt-3 text-zinc-400 light:text-zinc-600">Includes creator score, rate card, portfolio proof, connected channels, and brand contact details.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Export PDF", "Export PNG", "Public Link"].map((item) => (
                  <button key={item} className="br-lift rounded-full br-gradient px-4 py-2 text-sm font-extrabold text-white shadow-glow" type="button">{item}</button>
                ))}
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
