import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <h2 className="section-title text-center">
          My <span>Skills</span>
        </h2>

        <div className="mx-auto mt-12 grid max-w-4xl gap-x-12 gap-y-8 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="mb-2 flex justify-between text-sm font-medium">
                <span>{s.name}</span>
                <span className="text-primary">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}