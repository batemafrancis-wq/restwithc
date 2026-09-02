import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import ShopActionButton from "@/components/ShopActionButton";
import { images } from "@/lib/images";
import { giftCards } from "@/lib/data";

export const metadata = { title: "Gift Cards — Umami At Home" };

export default function GiftCardsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Umami At Home"
        title="Premium Curated Gift Cards"
        description="Delivered instantly by email, redeemable for dining, tasting menus, and Umami At Home orders."
        image={images.candlelitTable}
        crumbs={[{ label: "Umami At Home", href: "/shop" }, { label: "Gift Cards" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel align="center">Choose an Amount</SectionLabel>
        <h2 className="mt-3 text-center font-display text-3xl font-bold text-green-950 sm:text-4xl">
          Give the gift of the table
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {giftCards.map((gc) => (
            <div
              key={gc.id}
              className={`flex flex-col overflow-hidden rounded-3xl border bg-white shadow-sm ${gc.popular ? "border-orange-400 ring-2 ring-orange-300" : "border-green-900/10"}`}
            >
              <div className="relative h-40 w-full">
                <img src={gc.image} alt={gc.amount} className="h-full w-full object-cover" />
                {gc.popular && (
                  <span className="absolute right-3 top-3 rounded-full bg-orange-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-display text-3xl font-bold text-green-950">{gc.amount}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-green-900/70">{gc.description}</p>
                <div className="mt-5">
                  <ShopActionButton label="Buy Gift Card" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-green-950">Custom amount</h2>
          <p className="mt-2 text-green-900/70">Prefer a specific value? Choose any amount between $25 and $1,000.</p>
          <form className="mx-auto mt-6 flex max-w-sm gap-2">
            <input
              type="number"
              min={25}
              max={1000}
              placeholder="$75"
              className="w-full rounded-full border border-green-900/15 bg-white px-4 py-3 text-sm focus:border-orange-500 focus:outline-none"
            />
            <ShopActionButton label="Add" className="shrink-0 rounded-full bg-orange-600 px-6 py-3 text-sm font-bold uppercase text-white hover:bg-orange-700" />
          </form>
        </div>
      </section>
    </main>
  );
}
