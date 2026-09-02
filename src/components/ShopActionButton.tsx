"use client";

import { useState } from "react";

export default function ShopActionButton({
  label = "Add to Bag",
  successLabel = "Added ✓",
  className = "",
}: {
  label?: string;
  successLabel?: string;
  className?: string;
}) {
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2200);
      }}
      className={
        className ||
        `w-full rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition ${
          added ? "bg-green-700 text-white" : "bg-orange-600 text-white hover:bg-orange-700"
        }`
      }
    >
      {added ? successLabel : label}
    </button>
  );
}
