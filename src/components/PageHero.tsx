import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-green-950">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/60 to-green-950/10" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-32">
        {crumbs && (
          <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-green-200">
            <Link href="/" className="hover:text-orange-400">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span>/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-orange-400">{c.label}</Link>
                ) : (
                  <span className="text-orange-400">{c.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-green-100">{description}</p>
        )}
      </div>
    </section>
  );
}
