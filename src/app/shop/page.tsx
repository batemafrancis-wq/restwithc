import Link from "next/link";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";

export const metadata = { title: "Umami At Home — UMAMI." };

export default function ShopIndexPage() {
  return (
    <main>
      <PageHero
        eyebrow="Umami At Home"
        title="Bring the tasting menu home"
        description="Premium takeout, curated gift cards, and signature pantry goods — everything you need to eat like a regular."
        image={images.takeout.boxes}
        crumbs={[{ label: "Umami At Home" }]}
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
        <ShopLink
          href="/shop/takeout"
          image={images.dishes.friedRice}
          title="Premium Takeout"
          description="Chef-packed family boxes and tasting menus ready to reheat at home."
        />
        <ShopLink
          href="/shop/gift-cards"
          image={images.candlelitTable}
          title="Gift Cards"
          description="The easiest way to introduce someone to UMAMI. Delivered digitally, any amount."
        />
        <ShopLink
          href="/shop/pantry"
          image={images.pantry.knife}
          title="Pantry Goods"
          description="Custom oils, brand knife sets, aprons, and tableware — as seen on our tasting menu."
        />
      </section>
    </main>
  );
}

function ShopLink({ href, image, title, description }: { href: string; image: string; title: string; description: string }) {
  return (
    <Link href={href} className="group overflow-hidden rounded-3xl border border-green-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-green-950">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-green-900/70">{description}</p>
        <span className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-600">Shop now →</span>
      </div>
    </Link>
  );
}
