import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/images";
import { chefs, sourcingPrinciples, architectureSections } from "@/lib/data";

export const metadata = { title: "Our Story — UMAMI." };

export default function OurStoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="A decade of cooking with, not just for, our community."
        description="From an eight-seat counter to two dining rooms and a market stall, UMAMI. has never strayed from the same idea: food tastes better when you know where it came from."
        image={images.interior.dining}
        crumbs={[{ label: "Our Story" }]}
      />

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <SectionLabel align="center">Founded 2015</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-bold text-green-950 sm:text-4xl">
          Three pillars guide everything we serve
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-green-900/70">
          Our story is really three stories — the people who cook, the land that feeds us, and the
          room we built to bring them together.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-3">
        <StoryCard
          href="/our-story/chefs"
          image={images.chefs.chefOne}
          title="Meet the Chefs"
          description="Culinary visionaries with roots from Kyoto to Oaxaca, united by a single open kitchen."
        />
        <StoryCard
          href="/our-story/sourcing"
          image={images.farm.basket}
          title="Sourcing Philosophy"
          description="A radically local network of micro-farms, apiaries, and day-boats we call co-authors."
        />
        <StoryCard
          href="/our-story/architecture"
          image={images.interior.bar}
          title="Architecture & Atmosphere"
          description="A hearth-driven dining room designed by Studio Ren around fire, wood, and living plants."
        />
      </section>

      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>Leadership</SectionLabel>
              <h3 className="mt-3 font-display text-2xl font-bold text-green-950">{chefs[0].name}</h3>
              <p className="text-sm font-semibold text-orange-600">{chefs[0].role}</p>
              <p className="mt-4 leading-relaxed text-green-900/75">{chefs[0].bio}</p>
              <Link href="/our-story/chefs" className="mt-6 inline-block text-sm font-bold uppercase tracking-wide text-green-900 underline">
                Meet the full team →
              </Link>
            </div>
            <div>
              <SectionLabel>Our Commitments</SectionLabel>
              <div className="mt-3 space-y-5">
                {sourcingPrinciples.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-green-900/10 bg-white p-5">
                    <p className="font-display font-semibold text-green-950">{p.title}</p>
                    <p className="mt-1.5 text-sm text-green-900/70">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionLabel align="center">Design Concept</SectionLabel>
        <h2 className="mt-3 text-center font-display text-3xl font-bold text-green-950 sm:text-4xl">
          The room as part of the menu
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {architectureSections.slice(0, 2).map((a) => (
            <div key={a.title} className="overflow-hidden rounded-3xl border border-green-900/10">
              <img src={a.image} alt={a.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-green-950">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-green-900/70">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/our-story/architecture" className="inline-block rounded-full bg-green-900 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-green-800">
            Explore the Full Design Story
          </Link>
        </div>
      </section>
    </main>
  );
}

function StoryCard({ href, image, title, description }: { href: string; image: string; title: string; description: string }) {
  return (
    <Link href={href} className="group overflow-hidden rounded-3xl border border-green-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-green-950">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-green-900/70">{description}</p>
        <span className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-600">Read more →</span>
      </div>
    </Link>
  );
}
