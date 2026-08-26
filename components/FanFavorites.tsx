import Image from "next/image";
import { fanFavorites } from "@/lib/site-data";

export default function FanFavorites() {
  return (
    <section className="bg-surface-raised border-y border-surface-line">
      <div className="section py-16 md:py-20">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden hidden md:block">
            <Image
              src="/images/lantern-bar.jpg"
              alt="Lantern-lit izakaya bar seating"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>

          <div>
            <div className="eyebrow mb-3">Most Ordered, Most Photographed</div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8">Fan Favorites</h2>

            <ul className="flex flex-col">
              {fanFavorites.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 py-4 border-b border-surface-line/60"
                >
                  <span>
                    <span className="text-ink font-medium text-lg">{item.name}</span>
                    {item.description && (
                      <span className="block text-sm text-ink-faint mt-0.5">{item.description}</span>
                    )}
                  </span>
                  <span className="text-gold font-display font-700 tabular-nums shrink-0">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
