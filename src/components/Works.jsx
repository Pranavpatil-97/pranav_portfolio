import { projects } from "../data/content";

export default function Works() {
  return (
    <section id="works" className="section bg-slate-50">
      <div className="wrap">
        <h2 className="section-title text-center">
          My <span>Works</span>
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Replace this block with <img src={...} /> when you have screenshots */}
              <div className="flex h-44 items-center justify-center bg-linear-to-br from-primary to-blue-300 text-2xl font-bold text-white">
                {p.title}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm font-medium text-primary hover:underline"
                >
                  View project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}