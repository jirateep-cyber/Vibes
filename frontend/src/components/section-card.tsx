import { clsx } from "clsx";

export function SectionCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={clsx("br-card br-enter rounded-[1.5rem] p-5 sm:p-6", className)}>{children}</section>;
}
