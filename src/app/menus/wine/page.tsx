import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/images";
import { wineList } from "@/lib/data";

export const metadata = { title: "Wine & Spirits — UMAMI." };

export default function WineMenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="Culinary Menus"
        title="Sommelier's Wine & Spirits Curation"
        description="A tight, thoughtful cellar of 300+ labels curated by our head sommelier, Elena Roux, updated weekly by the glass."
        image={images.wine.cellar}
        crumbs={[{ label: "Culinary Menus", href: "/menus" }, { label: "Wine & Spirits" }]}
      />

      <section className="mx-auto max-w-5xl space-y-16 px-6 py-20">
        {wineList.map((section) => (
          <div key={section.section}>
            <SectionLabel>By the Glass / Bottle</SectionLabel>
            <h2 className="mt-2 font-display text-2xl font-bold text-green-950 sm:text-3xl">{section.section}</h2>
            <p className="mt-2 text-sm text-green-900/60">{section.description}</p>
            <div className="mt-6 divide-y divide-green-900/10 rounded-3xl border border-green-900/10">
              {section.items.map((wine) => (
                <div key={wine.id} className="flex flex-col justify-between gap-1 p-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-display font-semibold text-green-950">{wine.name}</p>
                    <p className="text-xs uppercase tracking-wide text-orange-600">{wine.type}</p>
                    <p className="mt-1 text-sm text-green-900/60">{wine.note}</p>
                  </div>
                  <p className="whitespace-nowrap font-display text-lg font-semibold text-green-900">{wine.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-green-950 py-16 text-center text-white">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">Ask about our reserve list</h2>
        <p className="mx-auto mt-3 max-w-xl text-green-200">
          Beyond our printed list, our cellar holds a rotating reserve selection of rare vintages —
          ask your sommelier for tonight&apos;s picks.
        </p>
      </section>
    </main>
  );
}
