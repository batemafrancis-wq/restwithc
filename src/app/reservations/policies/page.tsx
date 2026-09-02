import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/images";
import { reservationPolicies, dietaryGuidelines } from "@/lib/data";

export const metadata = { title: "Reservation Policies & Dietary Guidelines — UMAMI." };

export default function PoliciesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Table Reservations"
        title="Reservation Policies & Dietary Guidelines"
        description="A few details to help your visit go smoothly."
        image={images.interior.dining}
        crumbs={[{ label: "Reservations", href: "/reservations" }, { label: "Policies" }]}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <SectionLabel>Reservation Policies</SectionLabel>
          <h2 className="mt-2 font-display text-2xl font-bold text-green-950">Booking Guidelines</h2>
          <ul className="mt-6 space-y-4">
            {reservationPolicies.map((p, i) => (
              <li key={i} className="flex gap-3 rounded-2xl bg-green-50 p-4 text-sm leading-relaxed text-green-900/80">
                <span className="font-display font-bold text-orange-600">{String(i + 1).padStart(2, "0")}</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel>Dietary Guidelines</SectionLabel>
          <h2 className="mt-2 font-display text-2xl font-bold text-green-950">Allergies & Preferences</h2>
          <ul className="mt-6 space-y-4">
            {dietaryGuidelines.map((p, i) => (
              <li key={i} className="flex gap-3 rounded-2xl bg-orange-50 p-4 text-sm leading-relaxed text-green-900/80">
                <span className="font-display font-bold text-green-800">{String(i + 1).padStart(2, "0")}</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
