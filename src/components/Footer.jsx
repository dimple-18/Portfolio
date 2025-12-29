export default function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold">Let’s work together</h2>
        <p className="mt-3 text-white/75 max-w-2xl">
          Want a modern, smooth portfolio or a client website in React? Ping me and I’ll reply quickly.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-emerald-400/90 px-5 py-3 text-sm font-semibold text-[#062018] hover:bg-emerald-400 transition"
            href="mailto:yourmail@example.com"
          >
            Email Me
          </a>
          <a
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} Dimple Kumari • Built with React + Tailwind
        </div>
      </div>
    </div>
  );
}
