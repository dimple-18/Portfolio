export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* LEFT IMAGE CARD */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200">
            {/* Put your image in: /public/about.jpg */}
            <img
              src="/about.jpg"
              alt="About"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              ✦
            </span>
            About Me
          </div>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
            Dimple Kumari <span className="align-super text-sm">®</span>
          </h2>

          <p className="mt-4 max-w-xl text-slate-600">
            I’m a React developer focused on building clean UI, smooth
            single-page experiences, and responsive websites. I love converting
            Figma designs into pixel-perfect components and writing scalable,
            reusable code.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 transition"
            >
              Read My Full Story
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                →
              </span>
            </a>
          </div>

          {/* INFO CARDS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <InfoCard
              icon="🪪"
              title="Role"
              value="React Developer"
              sub="Frontend • UI • SPA"
            />
            <InfoCard
              icon="📍"
              title="Location"
              value="India"
              sub="Remote-friendly"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, value, sub }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
          <span className="text-lg">{icon}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">{title}</p>
          <p className="mt-1 text-sm font-bold text-slate-900">{value}</p>
          <p className="mt-1 text-xs text-slate-600">{sub}</p>
        </div>
      </div>
    </div>
  );
}
