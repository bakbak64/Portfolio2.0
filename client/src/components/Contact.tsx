import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container max-w-4xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="section-label mb-8 justify-center inline-block w-full">
            // 06 contact
          </motion.div>

          {/* Main headline */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight"
          >
            Let's build something great together.
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto"
          >
            Whether you're looking for a hardware engineer, full-stack developer, or AI integration specialist, I'm ready to collaborate. Let's create something that matters.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="mailto:aadi02anu07@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(57, 255, 136, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-background font-mono font-semibold rounded text-lg transition-all duration-200"
            >
              <Mail size={20} />
              Send Email
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="tel:+919560814638"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(61, 169, 252, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-secondary text-secondary font-mono font-semibold rounded text-lg transition-all duration-200 hover:bg-secondary/10"
            >
              <Phone size={20} />
              Call Me
            </motion.a>
          </motion.div>

          {/* Contact details */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 mb-16 text-foreground/70"
          >
            <p className="font-mono text-sm">
              📧 <a href="mailto:aadi02anu07@gmail.com" className="text-primary hover:text-primary/80 transition-colors">aadi02anu07@gmail.com</a>
            </p>
            <p className="font-mono text-sm">
              📱 <a href="tel:+919560814638" className="text-secondary hover:text-secondary/80 transition-colors">+91-9560814638</a>
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-16"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#39FF88" }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Github size={28} />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#3DA9FC" }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground/60 hover:text-secondary transition-colors"
            >
              <Linkedin size={28} />
            </motion.a>

            <motion.a
              href="mailto:aadi02anu07@gmail.com"
              whileHover={{ scale: 1.2, color: "#39FF88" }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail size={28} />
            </motion.a>

            <motion.a
              href="tel:+919560814638"
              whileHover={{ scale: 1.2, color: "#3DA9FC" }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground/60 hover:text-secondary transition-colors"
            >
              <Phone size={28} />
            </motion.a>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12"
          />

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-foreground/50 text-sm font-mono"
          >
            <p>
              Designed & built with precision by Aditya Srivastava
            </p>
            <p>
              © 2026 · Bridging bare-metal drivers with AI-powered platforms
            </p>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              ▸ ▸ ▸
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
