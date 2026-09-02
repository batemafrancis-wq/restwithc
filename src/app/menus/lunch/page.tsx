import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import MenuCard from "@/components/MenuCard";
import { images } from "@/lib/images";
import { lunchMenu } from "@/lib/data";
import Link from "next/link";

export const metadata = { title: "Lunch Menu — UMAMI." };

export default function LunchMenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="Culinary Menus"
        title="Lunch Menu"
        description={lunchMenu.intro}
        image={images.dishes.friedRice}
        crumbs={[{ label: "Culinary Menus", href: "/menus" }, { label: "Lunch Menu" }]}
      />

      <section className="mx-auto max-w-7xl space-y-16 px-6 py-20">
        {lunchMenu.courses.map((course) => (
          <div key={course.section}>
            <SectionLabel>Lunch</SectionLabel>
            <h2 className="mt-2 font-display text-2xl font-bold text-green-950 sm:text-3xl">{course.section}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {course.items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-orange-50 py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-green-950">Served Tuesday – Friday, 11:30am – 2:30pm</h2>
        <p className="mx-auto mt-3 max-w-xl text-green-900/70">
          Reservations recommended for parties of 4+. Walk-ins welcome at the counter.
        </p>
        <Link href="/reservations" className="mt-6 inline-block rounded-full bg-orange-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-orange-700">
          Reserve a Lunch Table
        </Link>
      </section>
    </main>
  );
}
