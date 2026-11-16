export default function HistoryHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="kh-history-hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
