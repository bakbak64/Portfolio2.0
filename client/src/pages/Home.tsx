import Navigation from "@/components/Navigation";
import CircuitBackground from "@/components/CircuitBackground";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

/**
 * Portfolio home page - scroll-driven single page with all sections
 * Design: Silicon & Signals - Brutalist Minimalism meets Glassmorphism
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Circuit background (fixed, parallax) */}
      <CircuitBackground />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Navigation (sticky) */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Achievements Section */}
      <Achievements />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

// Easter egg: Console message for recruiters
if (typeof window !== "undefined") {
  console.log(
    "%cWelcome, recruiter! 👋",
    "font-size: 16px; font-weight: bold; color: #39FF88;"
  );
  console.log(
    "%cI build systems that matter — from bare-metal drivers to AI-powered platforms.",
    "font-size: 12px; color: #3DA9FC;"
  );
  console.log(
    "%cLet's connect: aadi02anu07@gmail.com | +91-9560814638",
    "font-size: 12px; color: #F2F3F5;"
  );
}
