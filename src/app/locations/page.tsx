import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/images";
import { locations } from "@/lib/data";

export const metadata = { title: "Locations & Hours — UMAMI." };

export default function LocationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Institutional"
        title="Locations & Operating Hours"
        description="Three ways to find us — flagship dining, riverside terrace, and our market counter."
        image={images.exterior.neonStreet}
        crumbs={[{ label: "Locations" }]}
      />

      <section className="mx-auto max-w-7xl space-y-14 px-6 py-20">
        {locations.map((loc, i) => (
          <div key={loc.id} className={`grid items-center gap-10 rounded-3xl border border-green-900/10 p-6 md:grid-cols-2 md:p-8 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <img src={loc.image} alt={loc.name} className="h-80 w-full rounded-2xl object-cover" />
            <div>
              <SectionLabel>Location {String(i + 1).padStart(2, "0")}</SectionLabel>
              <h2 className="mt-2 font-display text-2xl font-bold text-green-950">{loc.name}</h2>
              <p className="mt-3 text-green-900/75">{loc.address}</p>
              <p className="text-green-900/75">{loc.phone}</p>

              <div className="mt-5 space-y-1.5">
                {loc.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 border-b border-green-900/10 py-2 text-sm">
                    <span className="font-semibold text-green-950">{h.day}</span>
                    <span className="text-green-900/70">{h.time}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full bg-green-900 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-green-800"
              >
                Get Directions
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-green-50 py-4">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionLabel align="center">Interactive Map Hub</SectionLabel>
          <h2 className="mt-2 text-center font-display text-2xl font-bold text-green-950 sm:text-3xl">Find us on the map</h2>
          <div className="mt-8 overflow-hidden rounded-3xl border border-green-900/10 shadow-sm">
            <iframe
              title="Umami locations map"
              src="https://www.google.com/maps?q=restaurants&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
