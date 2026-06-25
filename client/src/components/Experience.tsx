import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Summer Trainee",
    company: "DRDO",
    location: "Delhi, India",
    period: "June 2025 – July 2025",
    description: [
      "Developed bare-metal SPI, I2C, and USART drivers for the STM32F446RE — peripheral initialization, clock configuration, and interrupt-driven communication without HAL.",
      "Designed modular, reusable drivers with clean APIs separating initialization, data transfer, and error handling.",
      "Validated functionality through hardware-in-the-loop testing; debugged I2C ACK/NACK handling and SPI clock-polarity mismatches using STM32CubeIDE.",
    ],
    tech: ["Embedded C", "STM32CubeIDE", "STM32 Nucleo-F446RE"],
    link: "#",
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="experience"
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
            // 02 experience
          </motion.div>

          {/* Section heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-foreground"
          >
            Professional Journey
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical circuit line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent" />

            {/* Experience items */}
            <div className="space-y-12 pl-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-3.25rem] top-2 w-3 h-3 bg-primary rounded-full border-2 border-background" />

                  {/* Card */}
                  <div className="p-6 border border-border rounded bg-card/50 hover:bg-card/80 transition-colors duration-200">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-mono">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-sm text-foreground/60 font-mono mt-2 md:mt-0">
                        {exp.period}
                      </div>
                    </div>

                    {/* Location */}
                    <p className="text-sm text-foreground/70 mb-4 font-mono">
                      📍 {exp.location}
                    </p>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((point, i) => (
                        <li
                          key={i}
                          className="text-foreground/80 leading-relaxed flex gap-3"
                        >
                          <span className="text-primary mt-1 flex-shrink-0">
                            ▸
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded led-glow"
                          whileHover={{ boxShadow: "0 0 12px rgba(57, 255, 136, 0.6)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Link */}
                    {exp.link && (
                      <motion.a
                        href={exp.link}
                        className="inline-block mt-4 text-sm text-secondary hover:text-secondary/80 font-mono underline"
                        whileHover={{ x: 4 }}
                      >
                        View Project →
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
