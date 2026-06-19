import { SectionCard } from "@/components/section-card";
import { BadgeCheck, Lightbulb } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: slug.replaceAll("-", " ") };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div>
      <SectionCard>
        <p className="inline-flex items-center gap-2 rounded-full bg-buddy-pink/15 px-3 py-1 text-sm font-extrabold text-buddy-pink">
          <Lightbulb className="h-4 w-4" aria-hidden="true" />
          Creator playbook
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight capitalize sm:text-4xl">{slug.replaceAll("-", " ")}</h1>
        <p className="mt-5 max-w-[68ch] text-zinc-300 light:text-zinc-700">
          Practical guidance for improving your profile, packaging creator work, and turning audience strengths into better brand conversations.
        </p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.055] p-4 light:border-purple-950/10 light:bg-purple-50/70">
          <p className="flex items-center gap-2 font-extrabold"><BadgeCheck className="h-5 w-5 text-buddy-mint" aria-hidden="true" /> Action step</p>
          <p className="mt-2 text-zinc-400 light:text-zinc-600">Save one proof point from this guide to your Buddy Profile before applying to your next campaign.</p>
        </div>
      </SectionCard>
    </div>
  );
}
