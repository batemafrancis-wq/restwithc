import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import ReservationForm from "@/components/ReservationForm";
import { images } from "@/lib/images";
import { locations, reservationPolicies } from "@/lib/data";

export const metadata = { title: "Table Reservations — UMAMI." };

export default function ReservationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Table Reservations"
        title="Book Your Table"
        description="Select a date, time, and party size. We'll confirm by email within 24 hours."
        image={images.wineTable}
        crumbs={[{ label: "Reservations" }]}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-green-900/10 bg-white p-7 shadow-sm sm:p-10">
          <SectionLabel>Booking Allocation System</SectionLabel>
          <h2 className="mt-2 font-display text-2xl font-bold text-green-950">Reserve a table</h2>
          <p className="mt-2 text-sm text-green-900/60">
            Demo booking form — submissions are saved for this preview and no live confirmation
            email is sent.
          </p>
          <div className="mt-8">
            <ReservationForm />
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl bg-green-50 p-7">
            <h3 className="font-display text-lg font-semibold text-green-950">Need a bigger table?</h3>
            <p className="mt-2 text-sm leading-relaxed text-green-900/70">
              Groups of 8 or more, buyouts, and celebrations are best handled by our events team.
            </p>
            <Link href="/reservations/private-events" className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-600 underline">
              Private Events & Group Dining →
            </Link>
          </div>

          <div className="rounded-3xl bg-orange-50 p-7">
            <h3 className="font-display text-lg font-semibold text-green-950">Policies at a glance</h3>
            <ul className="mt-3 space-y-2 text-sm text-green-900/75">
              {reservationPolicies.slice(0, 3).map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/reservations/policies" className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-green-900 underline">
              View full policies & dietary guidelines →
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-green-900/10">
            <img src={locations[0].image} alt={locations[0].name} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="font-display font-semibold text-green-950">{locations[0].name}</h3>
              <p className="mt-1 text-sm text-green-900/70">{locations[0].address}</p>
              <p className="mt-1 text-sm text-green-900/70">{locations[0].phone}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
