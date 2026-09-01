"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/hero-sushi-plate.avif", alt: "Signature roll plated at Chobap Sushi & Izakaya" },
  { src: "/images/interior-dining-room.jpg", alt: "Chobap Sushi & Izakaya dining room and sushi bar" },
  { src: "/images/sushi-platter-bar.jpg", alt: "Assorted nigiri sushi platter at the Chobap sushi bar" },
  { src: "/images/roll-stone-plate.jpg", alt: "Sushi roll plated at Chobap" },
];

const INTERVAL_MS = 5500;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/60" />

      <div className="absolute bottom-6 inset-x-0 flex items-center justify-center gap-2 z-10">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
