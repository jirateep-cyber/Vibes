"use client";

import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex rounded-full border border-white/10 bg-white/10 p-1 text-xs font-bold light:border-purple-950/10 light:bg-purple-50">
      {(["light", "dark"] as const).map((item) => (
        <button
          key={item}
          onClick={() => setTheme(item)}
          aria-label={`Use ${item} theme`}
          className={`br-lift grid h-9 w-9 place-items-center rounded-full transition ${theme === item ? "br-gradient text-white shadow-glow" : "text-zinc-400 light:text-zinc-600"}`}
          type="button"
        >
          {item === "light" ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
        </button>
      ))}
    </div>
  );
}
