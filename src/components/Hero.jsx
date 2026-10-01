import TypeWriter from "./TypeWriter";
import { Link } from "react-scroll";
import { profile, socials, roles } from "../data/content";
import SocialIcon from "./SocialIcon";
import me from "../assets/me.png";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center pt-16">
      <div className="wrap grid items-center gap-12 md:grid-cols-2">
        {/* Left: text */}
        <div className="order-2 md:order-1">
                    <h1 className="text-4xl font-bold leading-snug sm:text-5xl lg:text-6xl">
            Hi,
            <br />
            I'm <span className="text-primary">{profile.name}</span>
            <span className="block min-h-[2.75em]">
                <TypeWriter words={roles} />
            </span>
            </h1>
          <Link to="contact" smooth offset={-64} className="btn mt-10 cursor-pointer">
            Contact
          </Link>

          <div className="mt-16 flex items-center gap-4">
            {socials.map((s) => (
                <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-ink transition hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
                >
                <SocialIcon name={s.name} />
                </a>
            ))}
            </div>
        </div>

        {/* Right: blob + photo */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative h-72 w-72 sm:h-96 sm:w-96">
            <div className="blob absolute inset-0 bg-primary" />
            <img
              src={me}
              alt={profile.name}
              className="relative z-10 h-full w-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}