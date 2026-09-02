import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import EventInquiryForm from "@/components/EventInquiryForm";
import { images } from "@/lib/images";
import { eventTypes } from "@/lib/data";

export const metadata = { title: "Private Events & Group Dining — UMAMI." };

export default function PrivateEventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Table Reservations"
        title="Private Events & Group Dining"
        description="From an intimate hearth-room dinner to a full restaurant buyout, our events team designs custom menus for every occasion."
        image={images.interior.hallway}
        crumbs={[{ label: "Reservations", href: "/reservations" }, { label: "Private Events" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel align="center">Spaces For Every Occasion</SectionLabel>
        <h2 className="mt-3 text-center font-display text-3xl font-bold text-green-950 sm:text-4xl">
          Choose your setting
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {eventTypes.map((e) => (
            <div key={e.title} className="rounded-3xl border border-green-900/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-orange-600">{e.capacity}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-green-950">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-green-900/70">{e.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-green-900/10 bg-white p-8 shadow-sm sm:p-10">
            <SectionLabel>Get a Custom Proposal</SectionLabel>
            <h2 className="mt-2 font-display text-2xl font-bold text-green-950">Tell us about your event</h2>
            <div className="mt-8">
              <EventInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
