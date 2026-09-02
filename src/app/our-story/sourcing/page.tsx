import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { sourcingPartners, sourcingPrinciples } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata = { title: "Sourcing Philosophy — UMAMI." };

export default function SourcingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="Sourcing Philosophy"
        description="A radically local network of micro-farms and sustainable purveyors we consider co-authors of every menu."
        image={images.farm.arranging}
        crumbs={[{ label: "Our Story", href: "/our-story" }, { label: "Sourcing Philosophy" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel align="center">Our Principles</SectionLabel>
        <h2 className="mt-3 text-center font-display text-3xl font-bold text-green-950 sm:text-4xl">
          Sustainability isn&apos;t a garnish — it&apos;s the recipe
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sourcingPrinciples.map((p) => (
            <div key={p.title} className="rounded-3xl border border-green-900/10 bg-green-50 p-6">
              <p className="font-display text-lg font-semibold text-green-950">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-green-900/70">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel align="center">Our Micro-Farm Network</SectionLabel>
          <h2 className="mt-3 text-center font-display text-3xl font-bold text-green-950 sm:text-4xl">
            The names behind tonight&apos;s menu
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sourcingPartners.map((s) => (
              <div key={s.id} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img src={s.image} alt={s.name} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display font-semibold text-green-950">{s.name}</h3>
                  <p className="mt-1 text-sm text-orange-600">{s.focus}</p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-green-900/50">{s.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-2xl font-bold text-green-950 sm:text-3xl">
          Every menu lists its farm of origin
        </h2>
        <p className="mt-4 leading-relaxed text-green-900/70">
          We believe provenance should never be a secret. Ask your server about any ingredient on
          tonight&apos;s menu and they&apos;ll be able to tell you exactly which farm, boat, or mill it came
          from — often within the same week it was harvested.
        </p>
      </section>
    </main>
  );
}
