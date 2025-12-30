import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects"; // (agar file ka naam different ho toh adjust)
import Footer from "./components/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#071A1F] text-white">
      <Hero />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <About />
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-900">
      <Services />
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-900">
      <Projects />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#071A1F] text-white">
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
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
