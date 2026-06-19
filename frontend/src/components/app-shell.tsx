"use client";

import { usePathname } from "next/navigation";
import { CreatorProgressConsole } from "@/components/creator-progress-console";
import { Navbar } from "@/components/navbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLegacyCreatorApp = ["/", "/creator-vibes", "/creator-progress", "/jobs", "/buddy-profile"].includes(pathname);
  const showConsole = !["/login", "/register"].includes(pathname);

  return (
    <>
      {!isLegacyCreatorApp && <Navbar />}
      <main className={isLegacyCreatorApp ? "min-h-screen" : "min-h-screen pt-24"}>
        {showConsole && !isLegacyCreatorApp ? (
          <div className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <div className="min-w-0">{children}</div>
            <div className="lg:sticky lg:top-24">
              <CreatorProgressConsole />
            </div>
          </div>
        ) : (
          children
        )}
      </main>
    </>
  );
}
