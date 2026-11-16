import type { HistoryBlockData } from "../../src/data/history";
import Reveal from "./Reveal";

export default function HistoryBlock({ block, number }: { block: HistoryBlockData; number: number }) {
  return (
    <Reveal className={`kh-history-step kh-history-step-${block.id}`}>
      <section className="kh-history-block" aria-labelledby={`history-${block.id}`}>
        <span className="kh-history-number" aria-hidden="true">{String(number).padStart(2, "0")}</span>
        <div className="kh-history-copy">
          <h2 id={`history-${block.id}`}>{block.title}</h2>
          <p>{block.text}</p>
        </div>
      </section>
    </Reveal>
  );
}
