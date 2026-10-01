import { profile, projects, roles } from "../data/content";
import me from "../assets/me.png";

const stats = [
  { value: projects.length, label: "Projects built" },
  { value: "1", label: "Internship" },
  { value: roles.length, label: "Domains" },
];

export default function About() {
  return (
    <section id="about" className="section bg-slate-50">
      <div className="wrap grid items-center gap-12 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="h-72 w-72 overflow-hidden rounded-3xl bg-primary/10">
            <img src={me} alt="About" className="h-full w-full object-cover object-top" />
          </div>
        </div>

        <div>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted">{profile.about}</p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          <a href="/resume.pdf" download className="btn mt-8">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}