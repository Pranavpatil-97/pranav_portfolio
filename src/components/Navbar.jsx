import { useState } from "react";
import { Link } from "react-scroll";
import { navLinks, profile } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "relative cursor-pointer pb-1 text-sm font-medium text-ink hover:text-primary " +
    "after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="wrap flex h-16 items-center justify-between">
        <Link
  to="home"
  smooth
  className="cursor-pointer text-2xl font-bold tracking-tight"
>
  {profile.name}
  <span className="text-primary">.</span>
</Link>

        {/* Desktop links */}
        <ul className="hidden gap-10 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link
                to={l.id}
                spy
                smooth
                offset={-64}
                duration={500}
                className={linkClass}
                activeClass="after:w-full! text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <div className="mb-1 h-0.5 w-6 bg-ink" />
          <div className="mb-1 h-0.5 w-6 bg-ink" />
          <div className="h-0.5 w-6 bg-ink" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="wrap flex flex-col gap-4 border-t border-slate-100 pb-6 pt-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link
                to={l.id}
                smooth
                offset={-64}
                className="cursor-pointer text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}