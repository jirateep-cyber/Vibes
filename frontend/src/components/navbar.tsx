import Link from "next/link";
import Image from "next/image";
import { BarChart3, BriefcaseBusiness, ContactRound, LayoutDashboard, Newspaper, ShieldCheck } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/dashboard", label: "Today", icon: LayoutDashboard },
  { href: "/campaigns", label: "Jobs", icon: BriefcaseBusiness },
  { href: "/profile", label: "Profile", icon: ContactRound },
  { href: "/blog", label: "Ideas", icon: Newspaper },
  { href: "/admin", label: "Admin", icon: ShieldCheck }
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="surface mx-auto mt-3 flex max-w-7xl items-center justify-between gap-3 rounded-[1.35rem] px-3 py-3 backdrop-blur-xl sm:px-4">
        <Link href="/" className="br-lift flex items-center gap-3 rounded-2xl pr-2 font-extrabold tracking-wide">
          <Image src="/buddy-logo-navbar-transparent.png" alt="" aria-hidden="true" width={188} height={64} className="h-9 w-auto object-contain" priority />
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const Icon = link.icon;
            return (
            <Link key={link.href} href={link.href} className="br-lift inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-zinc-300 hover:bg-white/10 light:text-zinc-700 light:hover:bg-purple-50">
              <Icon className="h-4 w-4 text-buddy-pink" aria-hidden="true" />
              <span>{link.label}</span>
            </Link>
          );})}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/dashboard" className="br-lift hidden items-center gap-2 rounded-full br-gradient px-4 py-2 text-sm font-extrabold text-white shadow-glow md:inline-flex">
            <BarChart3 className="h-4 w-4" aria-hidden="true" />
            Console
          </Link>
          <Link href="/login" className="br-lift rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-zinc-200 light:border-purple-950/10 light:text-zinc-800">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
