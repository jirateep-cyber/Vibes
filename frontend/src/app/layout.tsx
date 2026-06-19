import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: {
    default: "Buddy Review Creator Platform",
    template: "%s | Buddy Review"
  },
  description: "Creator Vibes, Campaign Hub, Buddy Profile, blog, dashboard, and admin tools for influencer marketing.",
  openGraph: {
    title: "Buddy Review Creator Platform",
    description: "A premium creator economy platform for Vibes analysis, campaigns, profiles, and brand collaboration.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className="bg-buddy-lavender font-kanit text-zinc-950 antialiased dark:bg-buddy-black dark:text-white">
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
