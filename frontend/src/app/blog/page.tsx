import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { ArrowUpRight, BookOpen } from "lucide-react";

const posts = [
  { slug: "creator-vibes-guide", title: "Creator Vibes Guide", excerpt: "How creators can position their content for better brand fit." },
  { slug: "rate-card-basics", title: "Rate Card Basics", excerpt: "A practical guide to building a brand-ready creator rate card." }
];

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-buddy-pink">Creator playbooks</p>
      <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">Ideas that help you get hired</h1>
      <div className="mt-6 grid gap-4">
        {posts.map((post) => (
          <SectionCard key={post.slug} className="br-lift">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-buddy-pink/15 px-3 py-1 text-sm font-extrabold text-buddy-pink">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Playbook
                </div>
                <Link href={`/blog/${post.slug}`} className="text-2xl font-extrabold">{post.title}</Link>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500" aria-hidden="true" />
            </div>
            <p className="mt-2 text-zinc-400 light:text-zinc-600">{post.excerpt}</p>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
