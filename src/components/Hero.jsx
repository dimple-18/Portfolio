import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-10 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/35" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-white/70 text-sm mb-4">
              React Developer • Full Stack • UI
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Building modern, fast &{" "}
              <span className="text-white">professional</span> web experiences.
            </h1>

            <p className="mt-5 text-white/75 max-w-xl">
              I build responsive websites and web apps with clean UI and
              real-world features — designed to look premium and perform well.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#062a2c] px-5 py-3 text-sm font-semibold hover:opacity-90"
              >
                Explore →
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Book a Call
              </Link>
            </div>

            {/* small badge cards */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2 max-w-xl">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-sm font-semibold">⭐ Quality-first builds</p>
                <p className="text-xs text-white/60 mt-1">
                  Clean code + reliable delivery
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-sm font-semibold">⚡ Performance focused</p>
                <p className="text-xs text-white/60 mt-1">
                  Fast, responsive experience
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-white/10 blur-2xl" />
            <div className="relative rounded-[2.5rem] border border-white/15 bg-white/5 p-4 backdrop-blur-xl">
              <img
                src="/me.jpg"
                alt="Profile"
                className="w-full h-[420px] object-cover rounded-[2rem]"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-black/35 border border-white/10 px-4 py-3 backdrop-blur">
                <p className="text-sm font-semibold">Available for freelance</p>
                <p className="text-xs text-white/70 mt-1">
                  React • Tailwind • API Integrations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
