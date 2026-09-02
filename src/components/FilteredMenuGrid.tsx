"use client";

import { useMemo, useState } from "react";
import { menuFilters, type MenuItem, type MenuTag } from "@/lib/data";
import MenuCard from "./MenuCard";

export default function FilteredMenuGrid({ items }: { items: MenuItem[] }) {
  const [active, setActive] = useState<MenuTag | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.tags.includes(active))),
    [active, items]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {(["All", ...menuFilters] as const).map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === tag
                ? "border-orange-600 bg-orange-600 text-white"
                : "border-green-900/15 bg-white text-green-900 hover:border-orange-400 hover:text-orange-600"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
