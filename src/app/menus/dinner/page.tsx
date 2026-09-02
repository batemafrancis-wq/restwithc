import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import MenuCard from "@/components/MenuCard";
import { images } from "@/lib/images";
import { tastingPackages, alaCarteDinner } from "@/lib/data";

export const metadata = { title: "Dinner & Tasting Menu — UMAMI." };

export default function DinnerMenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="Culinary Menus"
        title="Dinner & Tasting Menu"
        description="Our signature course packages — the heart of the UMAMI. experience."
        image={images.candlelitTable}
        crumbs={[{ label: "Culinary Menus", href: "/menus" }, { label: "Dinner & Tasting Menu" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel align="center">Tasting Packages</SectionLabel>
        <h2 className="mt-3 text-center font-display text-3xl font-bold text-green-950 sm:text-4xl">
          Choose your journey
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {tastingPackages.map((pkg) => (
            <div key={pkg.id} className={`flex flex-col overflow-hidden rounded-3xl border bg-white shadow-sm ${pkg.signature ? "border-orange-400 ring-2 ring-orange-300" : "border-green-900/10"}`}>
              <div className="relative h-52 w-full">
                <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover" />
                {pkg.signature && (
                  <span className="absolute right-3 top-3 rounded-full bg-orange-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Most Booked
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-green-950">{pkg.name}</h3>
                <p className="mt-1 text-sm font-semibold text-orange-600">{pkg.price} · {pkg.courses} courses</p>
                <p className="mt-3 text-sm leading-relaxed text-green-900/70">{pkg.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-green-900/80">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-green-900/50">{pkg.winePairing}</p>
                <Link
                  href="/reservations"
                  className="mt-6 rounded-full bg-green-900 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white hover:bg-green-800"
                >
                  Reserve This Menu
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel align="center">À La Carte</SectionLabel>
          <h2 className="mt-3 text-center font-display text-3xl font-bold text-green-950 sm:text-4xl">
            Dinner, plate by plate
          </h2>
          <div className="mt-12 space-y-14">
            {alaCarteDinner.map((course) => (
              <div key={course.section}>
                <h3 className="font-display text-2xl font-bold text-green-950">{course.section}</h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {course.items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
