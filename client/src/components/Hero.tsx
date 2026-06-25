import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    "Embedded Systems Engineer",
    "Full-Stack Developer",
    "AI Integrations Builder",
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
      const timer = setTimeout(() => {
        setDisplayedRole((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setCharIndex(0);
        setDisplayedRole("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [charIndex, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 pointer-events-none" />

      <motion.div
        className="container relative z-10 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow tag */}
        <motion.div
          variants={itemVariants}
          className="section-label mb-6 inline-block"
        >
          // embedded systems x full-stack AI
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
        >
          Aditya Srivastava
        </motion.h1>

        {/* Typewriter subline */}
        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl font-mono text-primary mb-8 h-12 flex items-center"
        >
          {displayedRole}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="ml-2"
          >
            |
          </motion.span>
        </motion.div>

        {/* Supporting line */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/80 mb-12 max-w-2xl leading-relaxed"
        >
          B.Tech Electronics & Communication Engineering @ Guru Gobind Singh
          Indraprastha University (2023–2027) · CGPA 8.75/10
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(57, 255, 136, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-background font-mono font-semibold rounded text-sm transition-all duration-200 hover:shadow-lg"
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(61, 169, 252, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-secondary text-secondary font-mono font-semibold rounded text-sm transition-all duration-200 hover:bg-secondary/10"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6"
        >
          <motion.a
            href="https://github.com/aadi02anu07"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#39FF88" }}
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/aditya-srivastava-069b53287/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#3DA9FC" }}
            className="text-foreground/70 hover:text-secondary transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.2, color: "#39FF88" }}
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </motion.a>

          <motion.a
            href="tel:+1-555-0123"
            whileHover={{ scale: 1.2, color: "#3DA9FC" }}
            className="text-foreground/70 hover:text-secondary transition-colors"
          >
            <Phone size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
