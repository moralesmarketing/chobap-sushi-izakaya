import Image from "next/image";
import { business } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/interior-dining-room.jpg"
          alt="Chobap Sushi & Izakaya dining room and sushi bar"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/45" />
      </div>

      <div className="section relative py-40 md:py-56 flex flex-col items-center text-center">
        <div className="uppercase tracking-[0.25em] text-[11px] text-gold-bright font-semibold mb-6">
          Chino Hills, California
        </div>
        <span className="font-script text-6xl md:text-8xl text-white leading-none mb-6 [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]">
          Cho Bap
        </span>
        <p className="text-white/90 text-base md:text-lg mb-10 max-w-[46ch] [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]">
          Sushi &amp; Izakaya — hand-cut nigiri, sashimi, and signature rolls from
          Chef Mason.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-ink hover:bg-white/90">
            Order Online
          </a>
          <a href="/menu" className="btn border border-white/70 text-white hover:bg-white hover:text-ink">
            View Menu
          </a>
        </div>

        <a
          href={business.yelpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
        >
          <span className="text-gold-bright font-semibold">★ {business.rating.yelp.score}</span>
          <span>{business.rating.yelp.count.toLocaleString()} reviews on Yelp</span>
        </a>
      </div>
    </section>
  );
}
