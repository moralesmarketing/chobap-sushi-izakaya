import { business } from "@/lib/site-data";
import Reveal from "@/components/Reveal";

export default function LocationSection() {
  return (
    <section id="location" className="bg-surface-raised border-t border-surface-line">
      <div className="section py-16 md:py-20">
        <Reveal>
          <div className="eyebrow mb-3">Visit Us</div>
          <h2 className="text-3xl md:text-4xl italic font-medium text-ink mb-10">Our Location</h2>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10">
          <Reveal delayMs={100} className="flex flex-col gap-8">
            <div>
              <div className="text-sm font-semibold text-ink-faint uppercase tracking-wide mb-2">
                Address
              </div>
              <p className="text-ink text-lg">{business.address.line1}</p>
              <p className="text-ink text-lg mb-3">{business.address.line2}</p>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red font-semibold hover:text-red-dark transition-colors duration-300"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-ink-faint uppercase tracking-wide mb-2">
                Contact
              </div>
              <a href={business.phoneHref} className="block text-ink text-lg hover:text-red transition-colors duration-300">
                {business.phone}
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-ink-faint uppercase tracking-wide mb-2">
                Hours
              </div>
              <ul className="text-ink-soft max-w-sm">
                {business.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-baseline justify-between gap-6 py-2.5 border-b border-surface-line/60"
                  >
                    <span className="text-ink font-medium shrink-0">{h.day}</span>
                    <span className="text-right tabular-nums">
                      {h.time.split(", ").map((part) => (
                        <span key={part} className="block whitespace-nowrap">
                          {part}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary self-start transition-colors duration-300">
              Order Online
            </a>
          </Reveal>

          <Reveal delayMs={200} className="overflow-hidden border border-surface-line min-h-[360px]">
            <iframe
              src={business.mapEmbedSrc}
              className="w-full h-full min-h-[360px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chobap Sushi & Izakaya location"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
