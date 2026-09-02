import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";

export const metadata = { title: "Terms & Conditions — UMAMI." };

const sections = [
  {
    title: "Reservations",
    body: "Reservations are confirmed subject to availability. A credit card may be required to hold tasting menu bookings. Cancellations within 24 hours of the reservation time may be subject to a fee per guest, as outlined on our Policies page.",
  },
  {
    title: "Private Events",
    body: "Private event deposits are non-refundable within 14 days of the event date. Final guest counts and menu selections are due 5 business days prior to the event.",
  },
  {
    title: "Umami At Home Orders",
    body: "Gift cards, takeout, and pantry goods are sold as described. Gift cards do not expire and are non-refundable but transferable. Perishable goods are non-returnable once delivered.",
  },
  {
    title: "Website Use",
    body: "By using this website, you agree not to misuse the reservation or ordering systems, attempt unauthorized access, or use content from this site without permission.",
  },
  {
    title: "Limitation of Liability",
    body: "UMAMI. is not liable for indirect or consequential damages arising from use of this website or dining experience, to the extent permitted by law.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of the state in which UMAMI. is registered to operate.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Institutional"
        title="Terms & Conditions"
        description="Last updated January 2026. This is a demo policy for illustrative purposes."
        image={images.interior.dining}
        crumbs={[{ label: "Terms & Conditions" }]}
      />
      <section className="mx-auto max-w-3xl space-y-10 px-6 py-20">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl font-bold text-green-950">{s.title}</h2>
            <p className="mt-3 leading-relaxed text-green-900/75">{s.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
