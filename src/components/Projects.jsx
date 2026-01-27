import React, { useEffect, useMemo, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import me4 from "../assets/me4.jpg";

const projects = [
  {
    slug: "firebolt-leadsoffers",
    title: "Firebolt LeadsOffers (Full-Stack)",
    desc: "Offers + leads system with admin roles, auth, and real project structure.",
    tags: ["React", "Node/Express", "Firebase"],
    images: ["/projects/firebolt/1.png", "/projects/firebolt/2.png"],
  },
  {
    slug: "saas-dashboard-ui",
    title: "SaaS Dashboard UI",
    desc: "Modern admin dashboard with tables, filters, charts, and role-based flows.",
    tags: ["React", "Tailwind", "RBAC"],
    images: ["/projects/saas/1.png"],
  },
  {
    slug: "api-integrations",
    title: "API Integrations",
    desc: "Payments, email/OTP, and third-party integrations with clean error handling.",
    tags: ["REST", "Webhooks", "Secure"],
    images: ["/projects/api/1.png"],
  },
  {
    slug: "client-landing-pages",
    title: "Client Landing Pages",
    desc: "Fast, conversion-friendly websites with clean structure and quick load times.",
    tags: ["UI", "SEO basics", "Performance"],
    images: ["/projects/landing/1.png"],
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const focus = searchParams.get("focus");
  const cardRefs = useRef({});

  const orderedProjects = useMemo(() => {
    if (!focus) return projects;
    const copy = [...projects];
    copy.sort((a, b) => (a.slug === focus ? -1 : b.slug === focus ? 1 : 0));
    return copy;
  }, [focus]);

  useEffect(() => {
    if (!focus) return;
    const el = cardRefs.current[focus];
    if (el) el.scrollIntoView({ behavior: "auto", block: "center" });
  }, [focus]);

  return (
    <section id="projects" className="bg-emerald-50/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* HEADING */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              ✦
            </span>
            Projects
          </div>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
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
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src={me4}
                alt="Dimple Kumari"
                className="w-full h-[420px] object-cover object-[80%_15%] rounded-[2rem]"
              />
            </div>

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

          {/* RIGHT COLUMN */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {orderedProjects.map((p) => {
                const isFocused = focus === p.slug;

                return (
                  <div
                    key={p.slug}
                    ref={(el) => (cardRefs.current[p.slug] = el)}
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(`/projects/${p.slug}`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate(`/projects/${p.slug}`);
                      }
                    }}
                    className={[
                      "cursor-pointer rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md",
                      isFocused
                        ? "border-emerald-300 ring-2 ring-emerald-200"
                        : "border-slate-200",
                    ].join(" ")}
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

                    <div className="mt-5 text-xs font-semibold text-emerald-700">
                      Click to view →
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}