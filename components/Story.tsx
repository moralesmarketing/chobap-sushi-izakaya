import Image from "next/image";
import { business } from "@/lib/site-data";

export default function Story() {
  return (
    <section id="story" className="section py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <div className="eyebrow mb-3">Meet the Chef</div>
          <h2 className="text-3xl md:text-4xl italic font-medium text-ink mb-5">
            Every piece, cut to order by Chef Mason.
          </h2>
          <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-4">
            Chobap pairs a traditional sushi counter with an izakaya small-plates
            menu — nigiri and sashimi cut fresh throughout service, signature rolls
            built in-house, and shareable plates like gyoza, tempura, and skewers
            meant for a table of drinks and friends.
          </p>
          <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-6">
            Chef Mason runs the counter and reads every review personally — guests
            regularly call out the same thing: consistently fresh fish, and a staff
            that treats every table like regulars.
          </p>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Visit Us on Chino Hills Pkwy
          </a>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/chef-story-stock.jpg"
            alt="Sushi chef plating at the counter"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
