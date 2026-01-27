// import {
//   FaArrowRight,
//   FaCode,
//   FaPalette,
//   FaRocket,
//   FaMobileAlt,
//   FaBolt,
//   FaServer,
//   FaCogs,
//   FaChartBar,
//   FaPlug,
// } from "react-icons/fa";

// const services = [
//   {
//     title: "Frontend Development",
//     desc: "React + Tailwind websites with clean UI, reusable components and best practices.",
//     icon: <FaCode />,
//   },
//   {
//     title: "SaaS Web Apps",
//     desc: "Subscription-ready apps with auth, roles, dashboard, and scalable structure.",
//     icon: <FaRocket />,
//   },
//   {
//     title: "Backend Development",
//     desc: "Node.js + Express APIs, secure auth, validations, and database integration.",
//     icon: <FaServer />,
//   },
//   {
//     title: "Admin Dashboards",
//     desc: "Role-based admin panels for managing users, content, orders, leads & analytics.",
//     icon: <FaChartBar />,
//   },
//   {
//     title: "API Integrations",
//     desc: "Payments, Email/SMS, Maps, CRMs, Webhooks, 3rd-party integrations & automation.",
//     icon: <FaPlug />,
//   },
//   {
//     title: "Performance + Polish",
//     desc: "Image optimization, Lighthouse improvements, smooth animations & clean UX.",
//     icon: <FaBolt />,
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
//       <div className="mb-10">
//   {/* Top label (same style as About Me) */}
//   <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
//     <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
//       ✦
//     </span>
//     Services
//   </div>

//   {/* Main heading */}
//   <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
//     Services <span className="text-emerald-600">Offered</span>
//   </h2>

//   {/* Description */}
//   <p className="mt-3 max-w-2xl text-slate-600">
//     Modern web solutions with clean UI, smooth user experiences, and reliable,
//     on-time delivery.
//   </p>
// </div>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {services.map((s, i) => (
//           <div
//             key={i}
//             className="
//               group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm
//               transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-lg
//             "
//           >
//             <div className="flex items-start justify-between">
//               <div
//                 className="
//                   grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-slate-50
//                   text-emerald-600 transition-colors duration-300
//                   group-hover:border-emerald-500/30 group-hover:bg-emerald-500/20 group-hover:text-white
//                 "
//               >
//                 {s.icon}
//               </div>

//               <button
//                 className="
//                   inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900
//                   transition-all duration-300
//                   group-hover:border-emerald-500/30 group-hover:bg-emerald-500/20 group-hover:text-white
//                 "
//                 type="button"
//               >
//                 Learn More
//                 <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-900 text-white transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700">
//                   <FaArrowRight size={12} />
//                 </span>
//               </button>
//             </div>

//             <h3 className="mt-5 text-xl font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-white">
//               {s.title}
//             </h3>

//             <p className="mt-2 text-slate-600 transition-colors duration-300 group-hover:text-white/90">
//               {s.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaLaptopCode,
  FaRocket,
  FaServer,
  FaChartBar,
  FaPlug,
  FaBolt,
} from "react-icons/fa";

const services = [
  {
    id: "frontend",
    title: "Frontend Development",
    desc: "React + Tailwind websites with clean UI, reusable components and best practices.",
    icon: <FaLaptopCode />,
    details: [
      "Responsive layouts (mobile → desktop)",
      "Reusable components & clean structure",
      "UI polish: spacing, typography, accessibility basics",
      "Performance-focused build approach",
    ],
    related: ["client-landing-pages", "saas-dashboard-ui"],
  },
  {
    id: "saas",
    title: "SaaS Web Apps",
    desc: "Subscription-ready apps with auth, roles, dashboard, and scalable structure.",
    icon: <FaRocket />,
    details: [
      "Auth + role-based access (RBAC)",
      "Dashboard UI + data-driven screens",
      "Scalable structure & reusable patterns",
      "Production-minded flows & edge cases",
    ],
    related: ["firebolt-leadsoffers", "saas-dashboard-ui"],
  },
  {
    id: "backend",
    title: "Backend Development",
    desc: "Node.js + Express APIs, secure auth, validations, and database integration.",
    icon: <FaServer />,
    details: [
      "REST APIs with validations & clean responses",
      "Auth flows (JWT/session depending on need)",
      "DB integration & secure server practices",
      "Error handling + scalable structure",
    ],
    related: ["firebolt-leadsoffers", "api-integrations"],
  },
  {
    id: "dashboards",
    title: "Admin Dashboards",
    desc: "Role-based admin panels for managing users, content, orders, leads & analytics.",
    icon: <FaChartBar />,
    details: [
      "Tables, filters, search, pagination patterns",
      "Role-based screens (RBAC)",
      "Reusable UI components system",
      "Analytics-friendly dashboard layout",
    ],
    related: ["saas-dashboard-ui", "firebolt-leadsoffers"],
  },
  {
    id: "integrations",
    title: "API Integrations",
    desc: "Payments, Email/SMS, Maps, CRMs, Webhooks, 3rd-party integrations & automation.",
    icon: <FaPlug />,
    details: [
      "3rd-party APIs & webhooks integration",
      "Payment/email/SMS/maps flows (as needed)",
      "Reliable error handling",
      "Secure request lifecycle",
    ],
    related: ["api-integrations", "firebolt-leadsoffers"],
  },
  {
    id: "performance",
    title: "Performance + Polish",
    desc: "Image optimization, Lighthouse improvements, smooth animations & clean UX.",
    icon: <FaBolt />,
    details: [
      "Image optimization + layout stability",
      "Better UX with subtle interactions",
      "Code cleanup + maintainability",
      "Performance checks + practical fixes",
    ],
    related: ["client-landing-pages", "saas-dashboard-ui"],
  },
];

export default function Services() {
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate();

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  const goRelated = (slug) => {
    navigate(`/projects?focus=${encodeURIComponent(slug)}`);
  };

  return (
    <section id="services" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              ✦
            </span>
            Services
          </div>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
            Services <span className="text-emerald-600">Offered</span>
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Clean UI, smooth user experience, and reliable delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => {
            const isOpen = openId === s.id;

            return (
              <div
                key={s.id}
                className={[
                  "group rounded-3xl border bg-white p-7 shadow-sm",
                  "border-slate-200 transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-md",
                  isOpen ? "ring-2 ring-emerald-200" : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-emerald-600 transition-transform duration-300 group-hover:scale-[1.03]">
                    {s.icon}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                  >
                    {isOpen ? "Close" : "Learn More"}

                    {/* arrow micro animation */}
                    <span
                      className={[
                        "grid h-7 w-7 place-items-center rounded-full bg-slate-900 text-white",
                        "transition-transform duration-300",
                        isOpen ? "rotate-90" : "rotate-0",
                      ].join(" ")}
                    >
                      <FaArrowRight size={12} />
                    </span>
                  </button>
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>

                {/* ✅ Smooth expand/collapse */}
                <div
                  className={[
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div
                      className={[
                        "rounded-2xl border border-slate-200 bg-slate-50 p-5",
                        "transition-all duration-300 ease-out",
                        isOpen ? "translate-y-0" : "-translate-y-2",
                      ].join(" ")}
                    >
                      <p className="text-sm font-semibold text-slate-800">
                        What’s included
                      </p>

                      <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                        {s.details.map((d) => (
                          <li key={d} className="mt-1.5">
                            {d}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => goRelated(s.related[0])}
                          className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:brightness-95 transition"
                        >
                          View related projects
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                            →
                          </span>
                        </button>

                        {s.related[1] && (
                          <button
                            type="button"
                            onClick={() => goRelated(s.related[1])}
                            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                          >
                            Another example →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* end expand */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}