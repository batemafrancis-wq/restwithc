import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { images } from "@/lib/images";
import { careers } from "@/lib/data";

export const metadata = { title: "Careers — UMAMI." };

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Institutional"
        title="Career Opportunities"
        description="We hire for curiosity, craft, and hospitality — join a team of twelve nationalities united by a love of good food."
        image={images.chefs.chefTeam}
        crumbs={[{ label: "Careers" }]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <SectionLabel align="center">Why Umami</SectionLabel>
        <h2 className="mt-2 font-display text-2xl font-bold text-green-950 sm:text-3xl">
          Culinary & hospitality careers, built to grow
        </h2>
        <p className="mt-4 text-green-900/70">
          Every team member gets a quarterly stage at a partner farm, subsidized culinary
          education, and a clear path from line cook to sous chef. We believe great hospitality
          starts with taking care of our own team first.
        </p>
      </section>

      <section className="mx-auto max-w-5xl space-y-5 px-6 pb-24">
        {careers.map((job) => (
          <div key={job.id} className="flex flex-col justify-between gap-4 rounded-3xl border border-green-900/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-lg font-semibold text-green-950">{job.title}</h3>
                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-green-800">{job.department}</span>
                <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-700">{job.type}</span>
              </div>
              <p className="mt-1 text-sm text-green-900/60">{job.location}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-green-900/75">{job.description}</p>
            </div>
            <a
              href={`mailto:careers@umami-restaurant.com?subject=Application: ${encodeURIComponent(job.title)}`}
              className="shrink-0 rounded-full bg-orange-600 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white hover:bg-orange-700"
            >
              Apply Now
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
