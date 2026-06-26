import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavigationProps {
  activeSection?: string;
}

export default function Navigation({ activeSection: propActiveSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(propActiveSection || "");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ["hero", "about", "experience", "projects", "skills", "achievements", "contact"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo Mark */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <div className="text-xl font-bold text-primary font-mono">
            AS_
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="inline-block"
            >
              |
            </motion.span>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              type="button"
              className={`text-sm font-medium transition-colors duration-200 font-mono cursor-pointer ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Right Side: Resume & Theme Toggle */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-4 py-2 text-sm font-mono border border-primary text-primary rounded hover:bg-primary/10 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>

          {/* Mobile Menu Indicator */}
          <motion.div
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-5 h-0.5 bg-foreground" />
            <div className="w-5 h-0.5 bg-foreground" />
            <div className="w-5 h-0.5 bg-foreground" />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
