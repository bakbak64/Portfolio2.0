import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="container max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="section-label mb-6">
            // 01 about
          </motion.div>

          {/* Section heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 text-foreground"
          >
            Bridging Hardware & AI
          </motion.h2>

          {/* About content */}
          <motion.div
            variants={itemVariants}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I'm an electronics engineer who's equally comfortable debugging bare-metal drivers on an STM32 as I am architecting full-stack AI platforms. At the intersection of low-level systems and high-level abstractions, I build solutions that are both precise and scalable—whether that's interrupt-driven communication protocols or real-time anomaly detection pipelines.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Currently pursuing my B.Tech in Electronics & Communication Engineering at GGSIPU while leading development initiatives on campus. I'm driven by the challenge of making complex systems simple, and I obsess over clean code, hardware efficiency, and user experience in equal measure.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding or soldering, you'll find me exploring the intersection of embedded systems and machine learning—because the future belongs to engineers who can think across both domains.
            </p>
          </motion.div>

          {/* Highlight stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="p-4 border border-border rounded bg-card/50">
              <div className="text-2xl font-bold text-primary mb-2">8.75/10</div>
              <div className="text-sm text-foreground/60 font-mono">CGPA</div>
            </div>

            <div className="p-4 border border-border rounded bg-card/50">
              <div className="text-2xl font-bold text-secondary mb-2">60+</div>
              <div className="text-sm text-foreground/60 font-mono">Developers Mentored</div>
            </div>

            <div className="p-4 border border-border rounded bg-card/50">
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-foreground/60 font-mono">Projects Shipped</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
