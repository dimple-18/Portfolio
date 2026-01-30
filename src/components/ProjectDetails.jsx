import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaLayerGroup,
  FaBolt,
  FaTimes,
  FaServer,
  FaChartBar,
  FaPlug,
  FaRocket,
  FaGlobe,
} from "react-icons/fa";

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState({ open: false, src: "", index: 0 });

  const projectsBySlug = useMemo(
    () => ({
      // ✅ 1) FIREBOLT
      "firebolt-leadsoffers": {
        title: "Firebolt LeadsOffers",
        eyebrow: "Case Study • Full-Stack System",
        subtitle:
          "A production-style platform for managing offers and leads — built with role-based workflows, dashboard UX, and scalable architecture designed for real business usage.",
        tags: ["React", "Node/Express", "Firebase", "RBAC", "Webhooks"],
        role: "Full-Stack Developer",
        status: "Active build • Iterative releases",
        outcome: "Reliable workflows + clean architecture + maintainable scale.",
        highlights: [
          {
            icon: <FaShieldAlt />,
            title: "Role-based access control",
            desc: "Admin/user flows with guarded routes and permission-aware UI decisions.",
          },
          {
            icon: <FaLayerGroup />,
            title: "Dashboard-first UX",
            desc: "Reusable components, consistent spacing, and product-ready data patterns.",
          },
          {
            icon: <FaServer />,
            title: "Structured APIs + validation",
            desc: "Predictable responses, validations, and error states to reduce production surprises.",
          },
          {
            icon: <FaBolt />,
            title: "Performance + polish",
            desc: "Responsive layout, stable UI states, and smooth interactions for a premium feel.",
          },
        ],
        images: [
          "/projects/firebolt/1.png",
          "/projects/firebolt/2.png",
          "/projects/firebolt/3.png",
        ],
        github: "", // keep empty if private
      },

      // ✅ 2) SAAS DASHBOARD UI
      "saas-dashboard-ui": {
        title: "SaaS Dashboard UI",
        eyebrow: "Case Study • Dashboard UI",
        subtitle:
          "A modern SaaS dashboard interface built for real admin workflows — clean layout system, reusable UI patterns, and scalable structure.",
        tags: ["React", "Tailwind", "RBAC", "Tables", "UI System"],
        role: "Frontend / UI Developer",
        status: "Completed",
        outcome: "Clean dashboard foundation with reusable components and strong UX hierarchy.",
        highlights: [
          {
            icon: <FaChartBar />,
            title: "Dashboard structure",
            desc: "Layout system designed for admin flows with clear navigation and hierarchy.",
          },
          {
            icon: <FaLayerGroup />,
            title: "Reusable UI patterns",
            desc: "Cards, tables, chips and sections built for consistency and speed.",
          },
          {
            icon: <FaShieldAlt />,
            title: "Role-ready screens",
            desc: "UI planned to support role-based access and permission-driven navigation.",
          },
          {
            icon: <FaBolt />,
            title: "Responsive polish",
            desc: "Spacing, typography, and breakpoints tuned for a premium look on all devices.",
          },
        ],
        images: [
          "/projects/saas/1.png",
          "/projects/saas/2.png",
          "/projects/saas/3.png",
        ],
        github: "", // keep empty if private
      },

      // ✅ 3) API INTEGRATIONS
      "api-integrations": {
        title: "API Integrations",
        eyebrow: "Case Study • Integrations",
        subtitle:
          "Reliable third-party integrations (payments, email/OTP, webhooks) with clean error handling, secure patterns, and real-world edge cases.",
        tags: ["REST APIs", "Webhooks", "Auth", "Error Handling", "Secure"],
        role: "Backend / Integration Developer",
        status: "Completed",
        outcome: "Stable integration flow with predictable outcomes and strong reliability.",
        highlights: [
          {
            icon: <FaPlug />,
            title: "3rd-party integrations",
            desc: "Payment gateways, email/OTP services, maps/CRMs — depending on project needs.",
          },
          {
            icon: <FaServer />,
            title: "Clean API architecture",
            desc: "Organized request/response structure, validation, and readable modules.",
          },
          {
            icon: <FaShieldAlt />,
            title: "Security-first approach",
            desc: "Sensitive configs via env, safe handling of keys, and controlled access flows.",
          },
          {
            icon: <FaBolt />,
            title: "Reliability + edge cases",
            desc: "Graceful failure states and predictable behavior in real usage.",
          },
        ],
        images: [
          "/projects/api/1.png",
          "/projects/api/2.png",
        ],
        github: "", // keep empty if private
      },

      // ✅ 4) CLIENT LANDING PAGES
      "client-landing-pages": {
        title: "Client Landing Pages",
        eyebrow: "Case Study • Websites",
        subtitle:
          "Conversion-friendly websites built with premium UI, strong hierarchy, responsive sections, and performance-focused delivery. (Client-safe showcase.)",
        tags: ["UI/UX", "Performance", "Responsive", "SEO Basics", "Landing Pages"],
        role: "Frontend Developer",
        status: "Multiple projects",
        outcome: "Premium, responsive pages built to convert and load fast.",
        highlights: [
          {
            icon: <FaGlobe />,
            title: "Conversion-first layout",
            desc: "Clear sections, strong CTA placement, and a clean content hierarchy.",
          },
          {
            icon: <FaLayerGroup />,
            title: "Premium UI system",
            desc: "Consistent spacing, typography, and reusable blocks for fast iteration.",
          },
          {
            icon: <FaRocket />,
            title: "Performance focused",
            desc: "Optimized assets and smooth UX for a fast-loading experience.",
          },
          {
            icon: <FaBolt />,
            title: "Client-safe showcase",
            desc: "Some links are private — screenshots used for professional demonstration.",
          },
        ],
        images: [
          "/projects/landing/1.png",
          "/projects/landing/2.png",
        ],
        github: "", // keep empty if private
      },
    }),
    []
  );

  const project = projectsBySlug[slug];

  const openLightbox = (src, index) => setLightbox({ open: true, src, index });
  const closeLightbox = () => setLightbox({ open: false, src: "", index: 0 });

  const nextImg = () => {
    if (!project?.images?.length) return;
    const nextIndex = (lightbox.index + 1) % project.images.length;
    setLightbox({ open: true, src: project.images[nextIndex], index: nextIndex });
  };

  const prevImg = () => {
    if (!project?.images?.length) return;
    const prevIndex =
      (lightbox.index - 1 + project.images.length) % project.images.length;
    setLightbox({ open: true, src: project.images[prevIndex], index: prevIndex });
  };

  if (!project) {
    return (
      <div className="bg-[#F6FAF8] text-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:underline"
          >
            <FaArrowLeft /> Back
          </button>
          <h1 className="mt-6 text-3xl font-extrabold">Project not found</h1>
          <p className="mt-2 text-slate-600">This project page doesn’t exist yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F6FAF8] text-slate-900">
      {/* Premium hero header */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute -top-32 right-[-180px] h-[620px] w-[620px] rounded-full bg-sky-300/18 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-[#F6FAF8] to-[#F6FAF8]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur hover:bg-white transition"
          >
            <FaArrowLeft /> Back to Projects
          </button>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
            {/* Left hero text */}
            <div className="animate-[fadeUp_.6s_ease-out]">
              <p className="text-sm font-semibold text-emerald-700">
                {project.eyebrow}
              </p>

              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
                {project.title}
              </h1>

              <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
                {project.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                >
                  Get In Touch
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    <FaArrowRight size={12} />
                  </span>
                </a>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="text-xs text-slate-500">
                    *Code/private repo (client/internal)
                  </span>
                )}
              </div>
            </div>

            {/* Right sticky summary card */}
            <div className="lg:sticky lg:top-24 h-fit animate-[fadeUp_.75s_ease-out]">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-slate-800">
                  Project Summary
                </p>

                <div className="mt-4 grid gap-4">
                  <SummaryRow label="My Role" value={project.role} />
                  <SummaryRow label="Status" value={project.status} />
                  <SummaryRow label="Outcome" value={project.outcome} />
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xs font-semibold text-emerald-800">
                    Premium note
                  </p>
                  <p className="mt-1 text-sm text-emerald-900/80">
                    Designed like a real product — not just a demo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mt-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              ✦
            </span>
            What I built
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {project.highlights.map((h, i) => (
              <div
                key={h.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{ animation: `fadeUp .55s ease-out ${(i + 1) * 80}ms both` }}
              >
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  {h.icon}
                </div>
                <p className="text-base font-extrabold">{h.title}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="mt-14">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              ✦
            </span>
            Screenshots
          </div>

          <p className="mt-3 max-w-3xl text-slate-600">
            Click any screenshot to view it in full size. (Some client work can’t be shared publicly — screenshots are used for showcase.)
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {project.images.map((src, idx) => (
              <button
                key={src}
                type="button"
                onClick={() => openLightbox(src, idx)}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <img
                  src={src}
                  alt="Project screenshot"
                  className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="flex items-center justify-between px-4 py-3">
                  <p className="text-sm font-semibold text-slate-800">
                    Screenshot {idx + 1}
                  </p>
                  <span className="text-xs font-semibold text-emerald-700">
                    Click to view →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
            >
              <FaTimes /> Close
            </button>

            <div className="overflow-hidden rounded-3xl border border-white/15 bg-black/20 shadow-2xl">
              <img src={lightbox.src} alt="Preview" className="w-full" />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={prevImg}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
              >
                ← Prev
              </button>
              <div className="text-sm text-white/80">
                {lightbox.index + 1} / {project.images.length}
              </div>
              <button
                onClick={nextImg}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <p className="mt-1 font-bold text-slate-900">{value}</p>
    </div>
  );
}