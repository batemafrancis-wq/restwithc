import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import ShopActionButton from "@/components/ShopActionButton";
import { images } from "@/lib/images";
import { takeoutMenu } from "@/lib/data";

export const metadata = { title: "Premium Takeout — Umami At Home" };

export default function TakeoutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Umami At Home"
        title="Curated Premium Takeout"
        description="Chef-packed, restaurant-quality meals designed to travel — order ahead for pickup or local delivery."
        image={images.takeout.pizzaBox}
        crumbs={[{ label: "Umami At Home", href: "/shop" }, { label: "Premium Takeout" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel align="center">Order Ahead</SectionLabel>
        <h2 className="mt-3 text-center font-display text-3xl font-bold text-green-950 sm:text-4xl">
          This week&apos;s takeout menu
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {takeoutMenu.map((item) => (
            <div key={item.id} className="flex flex-col overflow-hidden rounded-3xl border border-green-900/10 bg-white shadow-sm">
              <img src={item.image} alt={item.name} className="h-44 w-full object-cover" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-green-950">{item.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-green-900/70">{item.description}</p>
                <p className="mt-3 font-display text-lg font-semibold text-orange-600">{item.price}</p>
                <div className="mt-4">
                  <ShopActionButton label="Order for Pickup" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-green-900/50">
          Demo storefront — no live orders are processed. Pickup available at our Hillcrest flagship
          and Union Market Hall counter.
        </p>
      </section>
    </main>
  );
}
