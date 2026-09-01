import { business } from "@/lib/site-data";
import Reveal from "@/components/Reveal";

const reasons = [
  { label: "Fresh-cut daily", detail: "Nigiri and sashimi cut through service, not pre-portioned" },
  { label: "Order ahead", detail: "Skip the wait — your pickup order goes straight to the kitchen" },
  { label: "Full menu online", detail: "Combos, rolls, izakaya plates, ramen, and more" },
];

export default function OrderCTA() {
  return (
    <section className="bg-surface-raised border-y border-surface-line">
      <div className="section py-16 md:py-20">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <Reveal>
            <div className="eyebrow mb-3">Order Ahead</div>
            <h2 className="text-3xl md:text-4xl italic font-medium text-ink mb-4">
              Skip the wait. Order pickup online.
            </h2>
            <p className="text-ink-soft text-lg mb-8 max-w-[48ch]">
              Browse the full menu and place a pickup order in a couple of taps —
              or call ahead at {business.phone}.
            </p>
            <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-base transition-colors duration-300">
              Order Online
            </a>
          </Reveal>

          <ul className="flex flex-col gap-5">
            {reasons.map((r, i) => (
              <li key={r.label}>
                <Reveal
                  delayMs={100 + i * 100}
                  className="flex gap-4 items-start bg-surface border border-surface-line p-5 transition-shadow duration-300 hover:shadow-lg"
                >
                  <span className="mt-0.5 shrink-0 h-7 w-7 rounded-full bg-gold-soft text-gold flex items-center justify-center font-bold text-sm">
                    ✓
                  </span>
                  <div>
                    <div className="font-semibold text-ink">{r.label}</div>
                    <div className="text-sm text-ink-faint">{r.detail}</div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
