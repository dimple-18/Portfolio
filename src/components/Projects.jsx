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
    desc: "Fast, conversion-friendly websites with clean structure and quick load times.",
    tags: ["UI", "SEO basics", "Performance"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-emerald-50/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

        {/* HEADING */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-emerald-700">✦ Projects</p>
          <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
            Featured <span className="text-emerald-600">Work</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            A few project highlights that reflect what I build: SaaS apps, admin dashboards,
            backend APIs, and integrations.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div>
            {/* IMAGE */}
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/profile.jpg"
                alt="Dimple Kumari"
                className="h-[420px] w-full object-cover"
              />
            </div>

            {/* ✅ BUTTONS — image ke niche, left aligned */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Get In Touch
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                  →
                </span>
              </a>

              <a
                href="https://github.com/dimple-18"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                <FaExternalLinkAlt /> Explore
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — CARDS ONLY */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
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
          </div>
        </div>

      </div>
    </section>
  );
}
