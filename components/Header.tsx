"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/lib/site-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#story", label: "Our Story" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#location", label: "Location" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid ? "bg-surface/95 backdrop-blur border-b border-surface-line" : "bg-transparent"
      }`}
    >
      <div className="section flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span
            className={`font-script text-3xl leading-none transition-colors ${
              solid ? "text-ink" : "text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]"
            }`}
          >
            Cho Bap
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                solid
                  ? "text-ink-soft hover:text-ink"
                  : "text-white/90 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={business.phoneHref}
            className={`text-xs font-medium tracking-wide transition-colors ${
              solid ? "text-ink-soft hover:text-ink" : "text-white/90 hover:text-white"
            }`}
          >
            {business.phone}
          </a>
          <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Order Online
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden flex flex-col justify-center gap-1.5 h-11 w-11 items-center rounded-full border transition-colors ${
            solid ? "border-surface-line" : "border-white/40"
          }`}
        >
          <span
            className={`block h-0.5 w-5 transition-transform ${solid ? "bg-ink" : "bg-white"} ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-5 transition-opacity ${solid ? "bg-ink" : "bg-white"} ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-5 transition-transform ${solid ? "bg-ink" : "bg-white"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-surface-line bg-surface">
          <nav className="section flex flex-col py-4 gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium uppercase tracking-[0.14em] text-ink-soft hover:text-ink border-b border-surface-line last:border-none"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a href={business.phoneHref} className="btn btn-ghost justify-center">
                Call {business.phone}
              </a>
              <a
                href={business.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary justify-center"
              >
                Order Online
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
