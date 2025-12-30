import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50">
      <div className={["mx-auto max-w-7xl px-4 sm:px-6", scrolled ? "pt-3" : "pt-4"].join(" ")}>
        <div
          className={[
            "rounded-full border border-white/10 backdrop-blur-xl",
            "bg-[#071A1F]/70",
            scrolled ? "shadow-lg shadow-black/20" : "",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-5 py-3">
            {/* Logo / Name (NO bg) */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 font-semibold tracking-wide text-white"
            >
              <span className="h-9 w-9 rounded-full border border-white/25 grid place-items-center">
                DK
              </span>
              <span className="hidden sm:block">Dimple Kumari</span>
            </Link>

            {/* Desktop links (NO bg) */}
            <nav className="hidden md:flex items-center gap-8 text-sm">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={[
                    "transition",
                    isActive(l.to) ? "text-white" : "text-white/75 hover:text-white",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-3">
              {/* Contact (WHITE bg only) */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-[#062a2c] px-4 py-2 text-sm font-semibold hover:opacity-90"
              >
                Contact
              </Link>

              {/* Mobile menu */}
              <button
                className="md:hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white"
                onClick={() => setOpen((v) => !v)}
              >
                Menu
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="md:hidden px-5 pb-4">
              <div className="grid gap-2 rounded-2xl border border-white/10 bg-black/25 p-3">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-left text-white/90 hover:bg-white/10"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-left bg-white text-[#062a2c] font-semibold"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
