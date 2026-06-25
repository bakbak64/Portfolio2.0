import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Users, FileText } from "lucide-react";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

const achievements: Achievement[] = [
  {
    icon: <Trophy size={32} />,
    title: "2nd Prize",
    description: "Among 50+ teams at Confluence 5.0",
    highlight: "Organized by BVCOE, New Delhi",
  },
  {
    icon: <Users size={32} />,
    title: "Web Development Head",
    description: "BVP-IOSC — Led initiatives and mentored",
    highlight: "60+ junior developers",
  },
  {
    icon: <FileText size={32} />,
    title: "Research Presentation",
    description: "Presented research at ICMSCI",
    highlight: "Organized by PGDAV College (2026)",
  },
];

export default function Achievements() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="container max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="section-label mb-6">
            // 05 achievements
          </motion.div>

          {/* Section heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-foreground"
          >
            Recognition & Leadership
          </motion.h2>

          {/* Achievement cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="p-8 border border-border rounded bg-card/50 hover:bg-card/80 transition-all duration-300 group"
              >
                {/* Icon */}
                <motion.div
                  className="text-primary mb-6 group-hover:text-secondary transition-colors duration-200"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {achievement.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Highlight */}
                <p className="text-sm font-mono text-primary font-semibold">
                  {achievement.highlight}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="mt-6 h-0.5 bg-gradient-to-r from-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
