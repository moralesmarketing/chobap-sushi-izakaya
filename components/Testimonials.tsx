import { business, reviews } from "@/lib/site-data";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-surface-raised border-y border-surface-line">
      <div className="section py-16 md:py-20">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="eyebrow mb-3">What Guests Are Saying</div>
              <h2 className="text-3xl md:text-4xl italic font-medium text-ink">
                {business.rating.yelp.score}★ average, {business.rating.yelp.count.toLocaleString()} reviews
              </h2>
            </div>
            <a
              href={business.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red font-semibold hover:text-red-dark shrink-0 transition-colors duration-300"
            >
              Read all reviews on Yelp →
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delayMs={i * 100}>
              <figure className="bg-surface border border-surface-line p-6 flex flex-col gap-4 h-full transition-shadow duration-300 hover:shadow-lg">
                <div className="text-gold text-lg leading-none" aria-hidden>
                  ★★★★★
                </div>
                <blockquote className="text-ink-soft leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="text-sm text-ink-faint mt-auto">
                  <span className="text-ink font-medium">{r.name}</span>
                  {r.location ? ` · ${r.location}` : ""} · {r.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
