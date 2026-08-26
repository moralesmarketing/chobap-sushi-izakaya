import { business } from "@/lib/site-data";

const items = [
  {
    label: "Reserve",
    detail: `Call ${business.phone}`,
    href: business.phoneHref,
  },
  {
    label: "Hours",
    detail: "Open Mon – Sun",
    href: "/#location",
  },
  {
    label: "Order Online",
    detail: "Pickup, made fresh",
    href: business.orderUrl,
    external: true,
  },
];

export default function QuickActions() {
  return (
    <section className="border-b border-surface-line bg-surface">
      <div className="section grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-surface-line">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="group flex flex-col items-center text-center gap-1 py-8 px-4 hover:bg-surface-raised/50 transition-colors"
          >
            <span className="eyebrow">{item.label}</span>
            <span className="text-ink-soft text-sm group-hover:text-ink transition-colors">
              {item.detail}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
