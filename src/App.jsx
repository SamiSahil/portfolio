import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import ResumeConnect from "./components/ResumeConnect";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import GitHubSection from "./components/GitHubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import Hatch from "./components/Hatch";

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Header onOpenPalette={() => setPaletteOpen(true)} />

      <main
        id="main"
        className="page-shell bg-[#fbf9f6]/90 backdrop-blur-[2px] dark:bg-[#0d0f13]/90"
      >
        <Hero />
        <Hatch />
        <Overview />
        <ResumeConnect />
        <Hatch />
        <About />
        <Hatch />
        <Projects />
        <Hatch />
        <Stack />
        <Hatch />
        <GitHubSection />
        <Hatch />
        <Contact />
      </main>

      <Footer />
      <CommandPalette
        open={paletteOpen}
        onOpen={() => setPaletteOpen(true)}
        onClose={() => setPaletteOpen(false)}
      />
    </div>
  );
}
