import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/images";
import { tastingPackages } from "@/lib/data";

export const metadata = { title: "Culinary Menus — UMAMI." };

export default function MenusIndexPage() {
  return (
    <main>
      <PageHero
        eyebrow="Culinary Menus"
        title="Three ways to taste UMAMI."
        description="From a brisk weekday lunch to a twelve-course omakase, every menu is written around the current harvest."
        image={images.dishes.aspic}
        crumbs={[{ label: "Culinary Menus" }]}
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
        <MenuLink
          href="/menus/lunch"
          image={images.dishes.friedRice}
          title="Lunch Menu"
          description="A brisker, sunlit expression of the Umami pantry. Served Tuesday – Friday."
        />
        <MenuLink
          href="/menus/dinner"
          image={images.candlelitTable}
          title="Dinner & Tasting Menu"
          description="Our signature multi-course packages, from The Seasons to the Chef's Table Omakase."
        />
        <MenuLink
          href="/menus/wine"
          image={images.wine.shelf}
          title="Wine & Spirits"
          description="A sommelier-curated cellar of 300+ labels, sake, and craft cocktails."
        />
      </section>

      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel align="center">The Signature Course Packages</SectionLabel>
          <h2 className="mt-3 text-center font-display text-3xl font-bold text-green-950 sm:text-4xl">
            Tonight&apos;s tasting menus
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {tastingPackages.map((pkg) => (
              <div key={pkg.id} className={`flex flex-col overflow-hidden rounded-3xl border bg-white shadow-sm ${pkg.signature ? "border-orange-400 ring-2 ring-orange-300" : "border-green-900/10"}`}>
                <div className="relative h-48 w-full">
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
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-green-900/70">{pkg.description}</p>
                  <Link href="/menus/dinner" className="mt-5 inline-block text-sm font-bold uppercase tracking-wide text-green-900 underline">
                    View full details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function MenuLink({ href, image, title, description }: { href: string; image: string; title: string; description: string }) {
  return (
    <Link href={href} className="group overflow-hidden rounded-3xl border border-green-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-green-950">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-green-900/70">{description}</p>
        <span className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-600">View menu →</span>
      </div>
    </Link>
  );
}
