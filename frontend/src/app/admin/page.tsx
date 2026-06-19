import { SectionCard } from "@/components/section-card";
import { BriefcaseBusiness, Contact, FileText, ShieldCheck, Users, BarChart3 } from "lucide-react";

export const metadata = { title: "Admin Panel" };

const modules = [
  { title: "Creators", detail: "Review profile quality and creator readiness.", icon: Users },
  { title: "Campaigns", detail: "Keep matched jobs clear and actionable.", icon: BriefcaseBusiness },
  { title: "Blog Posts", detail: "Publish creator education and playbooks.", icon: FileText },
  { title: "Contact Messages", detail: "Route brand and creator support requests.", icon: Contact },
  { title: "Applications", detail: "Track submissions without table overload.", icon: ShieldCheck },
  { title: "Reports", detail: "Spot creator progress and campaign health.", icon: BarChart3 }
];

export default function AdminPage() {
  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-buddy-pink">Brand and admin ops</p>
      <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">Support creators without burying them in tables</h1>
      <p className="mt-3 max-w-2xl text-zinc-400 light:text-zinc-600">Manage users, campaigns, contacts, and content while keeping creator readiness visible.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {modules.map((item) => {
          const Icon = item.icon;
          return (
          <SectionCard key={item.title} className="br-lift">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-buddy-pink/15 text-buddy-pink">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl font-extrabold">{item.title}</h2>
                <p className="mt-2 text-zinc-400 light:text-zinc-600">{item.detail}</p>
              </div>
            </div>
          </SectionCard>
        );})}
      </div>
    </div>
  );
}
