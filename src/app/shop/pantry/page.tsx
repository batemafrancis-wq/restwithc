import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import ShopActionButton from "@/components/ShopActionButton";
import { images } from "@/lib/images";
import { pantryGoods } from "@/lib/data";

export const metadata = { title: "Pantry Goods — Umami At Home" };

export default function PantryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Umami At Home"
        title="Signature Pantry Goods"
        description="Custom oils, brand knife sets, aprons, and tableware — the tools and flavors behind our kitchen."
        image={images.pantry.knife}
        crumbs={[{ label: "Umami At Home", href: "/shop" }, { label: "Pantry Goods" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel align="center">Shop the Kitchen</SectionLabel>
        <h2 className="mt-3 text-center font-display text-3xl font-bold text-green-950 sm:text-4xl">
          Take a piece of Umami home
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pantryGoods.map((p) => (
            <div key={p.id} className="flex flex-col overflow-hidden rounded-3xl border border-green-900/10 bg-white shadow-sm">
              <img src={p.image} alt={p.name} className="h-52 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] font-bold uppercase tracking-wide text-orange-600">{p.category}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-green-950">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-green-900/70">{p.description}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-display text-lg font-semibold text-green-900">{p.price}</span>
                  <ShopActionButton className="rounded-full bg-orange-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-orange-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
