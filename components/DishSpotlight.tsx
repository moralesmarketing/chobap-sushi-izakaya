import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  price?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export default function DishSpotlight({
  eyebrow,
  title,
  description,
  price,
  image,
  imageAlt,
  reverse,
}: Props) {
  return (
    <div className="section py-16 md:py-20">
      <div
        className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <div className="eyebrow mb-3">{eyebrow}</div>
          <h2 className="text-3xl md:text-4xl italic font-medium text-ink mb-4">{title}</h2>
          <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-5">{description}</p>
          {price && (
            <div className="inline-flex items-center gap-2 text-gold font-display italic text-xl">
              {price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
