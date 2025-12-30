import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// 🏠 HOME PAGE (hero + sections)
function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-white text-slate-900">
        <About />
      </section>

      <section className="bg-[#F5F7FA] text-slate-900">
        <Services />
      </section>

      <section className="bg-emerald-50/40 text-slate-900">
        <Projects />
      </section>

      <section className="bg-[#071A1F] text-white">
        <Footer />
      </section>
    </>
  );
}

// 📄 INDIVIDUAL PAGES
const AboutPage = () => (
  <section className="bg-white text-slate-900 min-h-screen">
    <About />
  </section>
);

const ServicesPage = () => (
  <section className="bg-[#F5F7FA] text-slate-900 min-h-screen">
    <Services />
  </section>
);

const ProjectsPage = () => (
  <section className="bg-emerald-50/40 text-slate-900 min-h-screen">
    <Projects />
  </section>
);

const ContactPage = () => (
  <section className="bg-[#071A1F] text-white min-h-screen">
    <Footer />
  </section>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#071A1F] text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
