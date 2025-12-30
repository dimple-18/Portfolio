import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#071A1F] text-white">
      <Hero />

      <section className="bg-white text-slate-900">
        <About />
      </section>

      <section className="bg-[#F5F7FA] text-slate-900">
        <Services />
      </section>

      <section className="bg-white text-slate-900">
        <Projects />
      </section>

      <section className="bg-[#071A1F] text-white">
        <Footer />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#071A1F] text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <div className="bg-white text-slate-900">
              <About />
            </div>
          }
        />
        <Route
          path="/services"
          element={
            <div className="bg-[#F5F7FA] text-slate-900">
              <Services />
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div className="bg-white text-slate-900">
              <Projects />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="bg-[#071A1F] text-white">
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
}
