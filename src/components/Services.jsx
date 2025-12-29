import {
  FaArrowRight,
  FaCode,
  FaPalette,
  FaRocket,
  FaMobileAlt,
  FaBolt,
  FaServer,
  FaCogs,
  FaChartBar,
  FaPlug,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    desc: "React + Tailwind websites with clean UI, reusable components and best practices.",
    icon: <FaCode />,
  },
  {
    title: "SaaS Web Apps",
    desc: "Subscription-ready apps with auth, roles, dashboard, and scalable structure.",
    icon: <FaRocket />,
  },
  {
    title: "Backend Development",
    desc: "Node.js + Express APIs, secure auth, validations, and database integration.",
    icon: <FaServer />,
  },
  {
    title: "Admin Dashboards",
    desc: "Role-based admin panels for managing users, content, orders, leads & analytics.",
    icon: <FaChartBar />,
  },
  {
    title: "API Integrations",
    desc: "Payments, Email/SMS, Maps, CRMs, Webhooks, 3rd-party integrations & automation.",
    icon: <FaPlug />,
  },
  {
    title: "Performance + Polish",
    desc: "Image optimization, Lighthouse improvements, smooth animations & clean UX.",
    icon: <FaBolt />,
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="mb-10">
        <p className="text-sm font-semibold text-slate-500">+ Service</p>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight">
          Services <span className="text-emerald-600">Offered</span>
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Professional web services tailored to your needs — clean UI, smooth UX, and fast delivery.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={i}
            className="
              group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm
              transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-lg
            "
          >
            <div className="flex items-start justify-between">
              <div
                className="
                  grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-slate-50
                  text-emerald-600 transition-colors duration-300
                  group-hover:border-emerald-500/30 group-hover:bg-emerald-500/20 group-hover:text-white
                "
              >
                {s.icon}
              </div>

              <button
                className="
                  inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900
                  transition-all duration-300
                  group-hover:border-emerald-500/30 group-hover:bg-emerald-500/20 group-hover:text-white
                "
                type="button"
              >
                Learn More
                <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-900 text-white transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700">
                  <FaArrowRight size={12} />
                </span>
              </button>
            </div>

            <h3 className="mt-5 text-xl font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-white">
              {s.title}
            </h3>

            <p className="mt-2 text-slate-600 transition-colors duration-300 group-hover:text-white/90">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
