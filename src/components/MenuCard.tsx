import type { MenuItem } from "@/lib/data";

const tagStyles: Record<string, string> = {
  Starter: "bg-green-100 text-green-800",
  Main: "bg-green-800 text-white",
  Dessert: "bg-orange-100 text-orange-700",
  Vegetarian: "bg-green-50 text-green-700 border border-green-300",
  "Chef's Choice": "bg-orange-600 text-white",
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-green-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${tagStyles[tag] ?? "bg-white/80 text-green-900"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-green-950">{item.name}</h3>
          <span className="whitespace-nowrap font-display text-lg font-semibold text-orange-600">{item.price}</span>
        </div>
        <p className="text-sm leading-relaxed text-green-900/70">{item.description}</p>
      </div>
    </div>
  );
}
