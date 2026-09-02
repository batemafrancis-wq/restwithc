import RatingStars from "./RatingStars";
import type { testimonials } from "@/lib/data";

export default function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-green-900/10 bg-white p-7 shadow-sm">
      <div>
        <RatingStars rating={item.rating} />
        <p className="mt-4 font-display text-lg leading-snug text-green-950">“{item.quote}”</p>
      </div>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">{item.source}</p>
    </div>
  );
}
