import SocialIcon from "./SocialIcon";
import { profile, socials } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8">
      <div className="wrap flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="hover:text-primary"
            >
              <SocialIcon name={s.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}