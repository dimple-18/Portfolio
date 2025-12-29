import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects"; // ✅ NEW
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#071A1F] text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-white text-slate-900">
          <About />
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-[#F5F7FA] text-slate-900">
          <Services />
        </section>

        {/* PROJECTS (replaces “Why Choose Me”) */}
        <section id="projects" className="bg-emerald-50/40 text-slate-900">
          <Projects />
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#071A1F] text-white">
          <Footer />
        </section>
      </main>
    </div>
  );
}
