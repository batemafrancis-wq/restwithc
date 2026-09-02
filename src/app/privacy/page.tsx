import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";

export const metadata = { title: "Privacy Policy — UMAMI." };

const sections = [
  {
    title: "Information We Collect",
    body: "When you make a reservation, place an Umami At Home order, or join our mailing list, we collect your name, email, phone number, and relevant order or dining details such as party size, date, and dietary notes.",
  },
  {
    title: "How We Use Information",
    body: "We use this information to confirm reservations and orders, personalize your dining experience, send occasional newsletters (which you can unsubscribe from at any time), and improve our service.",
  },
  {
    title: "Data Sharing",
    body: "We do not sell personal information. We may share limited data with payment processors and reservation partners solely to complete your transaction.",
  },
  {
    title: "Cookies",
    body: "Our website uses essential cookies to operate the reservation system and analytics cookies to understand site usage. You can control cookie preferences through your browser settings.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by emailing hello@umami-restaurant.com.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be directed to our team at hello@umami-restaurant.com or by mail to 214 Maple Grove Ave, Hillcrest.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Institutional"
        title="Privacy Policy"
        description="Last updated January 2026. This is a demo policy for illustrative purposes."
        image={images.interior.hallway}
        crumbs={[{ label: "Privacy Policy" }]}
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
