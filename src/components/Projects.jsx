import React from "react";
import { FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Firebolt LeadsOffers (Full-Stack)",
    desc: "Offers + leads system with admin roles, auth, and real project structure.",
    tags: ["React", "Node/Express", "Firebase"],
  },
  {
    title: "SaaS Dashboard UI",
    desc: "Modern admin dashboard with tables, filters, charts, and role-based flows.",
    tags: ["React", "Tailwind", "RBAC"],
  },
  {
    title: "API Integrations",
    desc: "Payments, email/OTP, and third-party integrations with clean error handling.",
    tags: ["REST", "Webhooks", "Secure"],
  },
  {
    title: "Client Landing Pages",
    desc: "Fast, conversion-friendly single-page sites with smooth navigation.",
    tags: ["SPA", "SEO basics", "Performance"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-emerald-50/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              {/* apni image yaha lagao */}
              <img
                src="/profile.jpg"
                alt="Dimple Kumari"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT content */}
          <div>
            <p className="text-sm font-semibold text-slate-500">✦ Projects</p>
            <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
              Featured <span className="text-emerald-600">Work</span>
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              A few project highlights that reflect what I build — SaaS apps, dashboards,
              backend APIs, and integrations.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {projects.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <FaCheckCircle />
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {p.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Get In Touch <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">→</span>
              </a>

              {/* optional buttons */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                <FaExternalLinkAlt /> Live Demos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
