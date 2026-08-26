import type { Metadata } from "next";
import Image from "next/image";
import { business, menu } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Menu | Chobap Sushi & Izakaya — Chino Hills",
  description:
    "Full menu for Chobap Sushi & Izakaya in Chino Hills: combos, nigiri, sashimi, signature rolls, ramen, katsu, izakaya appetizers, and more.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/roll-chopsticks.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/50" />
        </div>
        <div className="section relative py-36 md:py-48 text-center flex flex-col items-center">
          <div className="uppercase tracking-[0.25em] text-[11px] text-gold-bright font-semibold mb-4">
            Full Menu
          </div>
          <h1 className="font-script text-5xl md:text-7xl text-white mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
            Sushi, Sashimi &amp; Izakaya
          </h1>
          <p className="text-white/90 text-lg max-w-[52ch] mb-8 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            Order pickup online with the full menu below, or call ahead at{" "}
            {business.phone}.
          </p>
          <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-ink hover:bg-white/90">
            Order Online
          </a>
        </div>
      </section>

      <div className="section py-14 md:py-20">
        <div className="flex flex-col gap-14">
          {menu.map((category) => (
            <div key={category.id} id={category.id}>
              <h2 className="text-2xl md:text-3xl italic font-medium text-ink mb-1">{category.title}</h2>
              {category.note && (
                <p className="text-sm text-ink-faint mb-5 max-w-[60ch]">{category.note}</p>
              )}
              <ul className="grid sm:grid-cols-2 gap-x-10 mt-5">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-3 border-b border-surface-line/60"
                  >
                    <span>
                      <span className="text-ink font-medium">{item.name}</span>
                      {item.description && (
                        <span className="block text-sm text-ink-faint mt-0.5">{item.description}</span>
                      )}
                    </span>
                    <span className="text-gold font-display italic tabular-nums shrink-0">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
