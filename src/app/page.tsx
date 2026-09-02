import Link from "next/link";
import {
  featuredMenu,
  testimonials,
  site,
  chefs,
  sourcingPrinciples,
} from "@/lib/data";
import { images } from "@/lib/images";
import FilteredMenuGrid from "@/components/FilteredMenuGrid";
import TestimonialCard from "@/components/TestimonialCard";
import SectionLabel from "@/components/SectionLabel";
import ReservationForm from "@/components/ReservationForm";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-green-950">
        <img
          src={images.heroInterior}
          alt="Umami dining room at golden hour"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/50 to-green-950/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-orange-400">
            Autumn Harvest Menu — Now Served
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.2rem)] font-bold leading-[1.02] text-white">
            Seasonal flavor, <br className="hidden sm:block" />
            built on <span className="text-orange-400">honest</span> ingredients.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-green-100">
            UMAMI. is a modern tasting-menu restaurant celebrating local micro-farms, day-boat
            seafood, and fire-driven technique — reimagined every season.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/reservations"
              className="rounded-full bg-orange-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-950/30 transition hover:bg-orange-700"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menus"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/20"
            >
              View Our Menus
            </Link>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <SectionLabel align="center">Curated Menu Preview</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-bold text-green-950 sm:text-4xl">
            A taste of the current season
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-green-900/70">
            Filter our best-loved dishes by course or dietary preference — every plate rotates
            with the harvest, sourced from the farms and waters closest to us.
          </p>
        </div>
        <div className="mt-12">
          <FilteredMenuGrid items={featuredMenu} />
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/menus"
            className="inline-block rounded-full border-2 border-green-900 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-green-950 transition hover:bg-green-900 hover:text-white"
          >
            Explore Full Menus
          </Link>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="bg-green-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={images.chefs.chefTwo} alt="Executive chef plating a dish" className="h-72 w-full rounded-3xl object-cover" />
            <img src={images.farm.basket} alt="Fresh harvest vegetables" className="mt-10 h-72 w-full rounded-3xl object-cover" />
          </div>
          <div>
            <SectionLabel>Brand Heritage & Curated Experience</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-bold text-green-950 sm:text-4xl">
              Since 2015, a table built on trust between farmer and diner.
            </h2>
            <p className="mt-5 leading-relaxed text-green-900/75">
              UMAMI. began as a single eight-seat counter and a promise: every dish would carry the
              name of the farm, boat, or mill it came from. A decade later, that promise still
              shapes every seasonal menu we write, guided by Chef {chefs[0].name} and a kitchen
              team obsessed with provenance.
            </p>
            <ul className="mt-8 space-y-5">
              {sourcingPrinciples.slice(0, 2).map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                  <div>
                    <p className="font-semibold text-green-950">{p.title}</p>
                    <p className="mt-1 text-sm text-green-900/70">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/our-story"
              className="mt-8 inline-block rounded-full bg-green-900 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-green-800"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <SectionLabel align="center">Social Proof & Editorial Critiques</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-bold text-green-950 sm:text-4xl">
            What critics and regulars are saying
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} item={t} />
          ))}
        </div>
      </section>

      {/* RESERVATION HOOK */}
      <section className="relative overflow-hidden bg-green-950 py-24">
        <img src={images.candlelitTable} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Quick Reservation Hook</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Tables are limited — reserve tonight in under a minute.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-green-100">
              Tell us your party size and preferred time, and our host stand will confirm by
              email. Need a private room or a group of 10+? Visit our{" "}
              <Link href="/reservations/private-events" className="text-orange-400 underline">
                private events page
              </Link>
              .
            </p>
            <div className="mt-8 flex items-center gap-4 text-green-100">
              <span className="text-3xl">📞</span>
              <div>
                <p className="text-xs uppercase tracking-wide text-green-300">Prefer to call?</p>
                <p className="font-display text-lg font-semibold text-white">{site.phone}</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-2xl sm:p-9">
            <ReservationForm compact />
          </div>
        </div>
      </section>
    </main>
  );
}
