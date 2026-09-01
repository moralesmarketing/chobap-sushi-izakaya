"use client";

import { useState } from "react";
import { faqs } from "@/lib/site-data";
import Reveal from "@/components/Reveal";

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section py-16 md:py-20">
      <Reveal>
        <div className="eyebrow mb-3">FAQ</div>
        <h2 className="text-3xl md:text-4xl italic font-medium text-ink mb-10">
          Frequently Asked Questions
        </h2>
      </Reveal>

      <Reveal delayMs={150} className="flex flex-col border-t border-surface-line">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={item.q} className="border-b border-surface-line">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-semibold text-ink text-lg">{item.q}</span>
                <span
                  className={`shrink-0 text-2xl text-ink-faint transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-ink-soft leading-relaxed pb-6 max-w-[65ch]">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
