import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { chefs } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata = { title: "Meet the Chefs — UMAMI." };

export default function ChefsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="Meet the Chefs"
        description="Culinary visionaries with backgrounds spanning kaiseki tradition, Michelin-starred pastry kitchens, and California's farm-to-table movement."
        image={images.chefs.chefTeam}
        crumbs={[{ label: "Our Story", href: "/our-story" }, { label: "Meet the Chefs" }]}
      />

      <section className="mx-auto max-w-6xl space-y-16 px-6 py-20">
        {chefs.map((chef, i) => (
          <div
            key={chef.id}
            className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <img src={chef.image} alt={chef.name} className="h-96 w-full rounded-3xl object-cover shadow-lg" />
            <div>
              <SectionLabel>{chef.role}</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-bold text-green-950">{chef.name}</h2>
              <p className="mt-5 leading-relaxed text-green-900/75">{chef.bio}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-green-950 sm:text-3xl">
            Curious to taste the culinary team's craft in person?
          </h2>
          <p className="mt-3 text-green-900/70">
            Reserve a seat at our Chef&apos;s Table Omakase, guided in real time by Chef Mika Tanaka.
          </p>
          <a
            href="/reservations"
            className="mt-6 inline-block rounded-full bg-orange-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-orange-700"
          >
            Reserve the Chef&apos;s Table
          </a>
        </div>
      </section>
    </main>
  );
}
