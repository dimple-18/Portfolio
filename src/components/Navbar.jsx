import { useEffect, useState } from "react";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50">
      <div
        className={[
          "mx-auto max-w-7xl px-4 sm:px-6",
          scrolled ? "pt-3" : "pt-4",
        ].join(" ")}
      >
        <div
          className={[
            "rounded-full border border-white/10",
            "bg-white/5 backdrop-blur-xl",
            scrolled ? "shadow-lg shadow-black/20" : "",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-5 py-3">
            <button
              onClick={() => go("home")}
              className="flex items-center gap-2 font-semibold tracking-wide"
            >
              <span className="h-8 w-8 rounded-full bg-white/10 grid place-items-center">
                DK
              </span>
              <span className="hidden sm:block">Dimple Kumari</span>
            </button>

            <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="hover:text-white transition"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => go("contact")}
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-[#062a2c] px-4 py-2 text-sm font-semibold hover:opacity-90"
              >
                Contact
              </button>

              <button
                className="md:hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm"
                onClick={() => setOpen((v) => !v)}
              >
                Menu
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden px-5 pb-4">
              <div className="grid gap-2 rounded-2xl border border-white/10 bg-black/10 p-3">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => go(l.id)}
                    className="rounded-xl px-3 py-2 text-left text-white/85 hover:bg-white/10"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
