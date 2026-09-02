"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/data";

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-green-900/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-2xl font-black tracking-tight text-green-900">{site.name}</span>
          <span className="hidden text-[11px] uppercase tracking-[0.25em] text-orange-600 sm:inline">
            Fine Dining
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item, idx) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-green-950 transition hover:bg-green-50 hover:text-green-700"
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="10" viewBox="0 0 10 10" className="mt-px opacity-60">
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </Link>
              {item.children && openIndex === idx && (
                <div className="absolute left-0 top-full w-64 rounded-2xl border border-green-900/10 bg-white p-2 shadow-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-4 py-2.5 text-sm text-green-950 transition hover:bg-orange-50 hover:text-orange-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/reservations"
            className="hidden rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 sm:inline-block"
          >
            Reserve a Table
          </Link>
          <button
            aria-label="Toggle navigation"
            className="grid h-10 w-10 place-items-center rounded-full border border-green-900/15 text-green-900 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-green-900/10 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item, idx) => (
              <div key={item.label} className="border-b border-green-900/5 py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="flex-1 py-2 text-sm font-semibold text-green-950"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      aria-label="Expand submenu"
                      className="px-2 py-2 text-green-700"
                      onClick={() => setMobileSubOpen(mobileSubOpen === idx ? null : idx)}
                    >
                      {mobileSubOpen === idx ? "−" : "+"}
                    </button>
                  )}
                </div>
                {item.children && mobileSubOpen === idx && (
                  <div className="ml-3 flex flex-col gap-1 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-lg px-3 py-2 text-sm text-green-800 hover:bg-orange-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/reservations"
              className="mt-3 rounded-full bg-orange-600 px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Reserve a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
