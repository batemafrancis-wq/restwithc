import Link from "next/link";
import { site } from "@/lib/data";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-green-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="text-2xl font-black tracking-tight text-white">{site.name}</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-green-200">{site.tagline}</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Join the table
            </p>
            <p className="mt-2 text-sm text-green-200">
              Seasonal menu drops, private-dining invites, and reservation openings.
            </p>
            <div className="mt-4">
              <NewsletterForm dark />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-400">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-green-200">
              <li><Link className="hover:text-white" href="/our-story">Our Story</Link></li>
              <li><Link className="hover:text-white" href="/our-story/chefs">Meet the Chefs</Link></li>
              <li><Link className="hover:text-white" href="/menus">Culinary Menus</Link></li>
              <li><Link className="hover:text-white" href="/reservations">Reservations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-400">Umami At Home</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-green-200">
              <li><Link className="hover:text-white" href="/shop/takeout">Premium Takeout</Link></li>
              <li><Link className="hover:text-white" href="/shop/gift-cards">Gift Cards</Link></li>
              <li><Link className="hover:text-white" href="/shop/pantry">Pantry Goods</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-400">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-green-200">
              <li><Link className="hover:text-white" href="/locations">Locations & Hours</Link></li>
              <li><Link className="hover:text-white" href="/careers">Careers</Link></li>
              <li><Link className="hover:text-white" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-white" href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-green-300 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name} All rights reserved. Demo site with mock data.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-orange-400">Instagram</a>
            <a href="#" aria-label="Facebook" className="hover:text-orange-400">Facebook</a>
            <a href="#" aria-label="Reservations partner" className="hover:text-orange-400">OpenTable</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
