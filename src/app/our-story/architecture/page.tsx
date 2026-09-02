import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { architectureSections } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata = { title: "Architecture & Atmosphere — UMAMI." };

export default function ArchitecturePage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="Architecture & Atmosphere"
        description="Designed by Studio Ren, our dining rooms are built around fire, reclaimed wood, and living plants — the space is as intentional as the menu."
        image={images.interior.lounge}
        crumbs={[{ label: "Our Story", href: "/our-story" }, { label: "Architecture & Atmosphere" }]}
      />

      <section className="mx-auto max-w-6xl space-y-16 px-6 py-20">
        {architectureSections.map((a, i) => (
          <div
            key={a.title}
            className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <img src={a.image} alt={a.title} className="h-96 w-full rounded-3xl object-cover shadow-lg" />
            <div>
              <SectionLabel>Design Detail 0{i + 1}</SectionLabel>
              <h2 className="mt-3 font-display text-2xl font-bold text-green-950 sm:text-3xl">{a.title}</h2>
              <p className="mt-5 leading-relaxed text-green-900/75">{a.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-green-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Want to host your next milestone here?
          </h2>
          <p className="mt-4 text-green-200">
            Our Private Hearth Room and full-restaurant buyouts pair our architecture with a
            custom tasting experience.
          </p>
          <a
            href="/reservations/private-events"
            className="mt-6 inline-block rounded-full bg-orange-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-orange-700"
          >
            Inquire About Private Events
          </a>
        </div>
      </section>
    </main>
  );
}
