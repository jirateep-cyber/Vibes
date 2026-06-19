export function LegacyBuddyApp({ hash = "" }: { hash?: string }) {
  return (
    <iframe
      title="Buddy Review Creator Vibes"
      src={`/buddy-app/index.html${hash}`}
      className="block h-screen w-full border-0"
      loading="eager"
    />
  );
}
