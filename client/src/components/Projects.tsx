import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Swasthify",
    period: "March 2025 – April 2025",
    description:
      "Multi-hospital healthcare platform with 3 role-based portals and 31 REST API endpoints for patients, doctors, and nurses.",
    highlights: [
      "5-vital anomaly detection with real-time alerts via Socket.IO and AI-assisted clinical analysis using the Gemini API.",
      "Redis caching to eliminate redundant AI calls; cross-hospital patient record system with JWT role guards, refresh-token rotation, and write-ownership enforcement.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Socket.IO",
      "Gemini AI",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/aadi02anu07/Swasthify_2.0",
    live: "https://swasthify-v2.vercel.app/",
  },
  {
    title: "Amazon Go",
    period: "June 2026",
    description:
      "Quick-commerce platform with AI-first shopping — product discovery through photo, voice, and text input instead of traditional search.",
    highlights: [
      "Scalable AWS architecture using Amplify, Lambda, API Gateway, and Cognito JWT authentication for secure user access.",
      "Real-time per-pincode inventory system using DynamoDB Streams across 9 tables, plus a 3-tier cart engine with a Bedrock Claude 3 Haiku adapter layer enabling seamless switching between rule-based and LLM modes.",
    ],
    tech: [
      "Next.js 14",
      "React 18",
      "TypeScript 5",
      "Tailwind CSS",
      "Node.js",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "Amazon Cognito",
      "Amazon Bedrock",
      "Serverless Framework v3",
    ],
    github: "https://github.com/aadi02anu07/AmazonGo",
    live: "https://master.dogt4l5r4vcs.amplifyapp.com/",
  },
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="projects"
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
            // 03 projects
          </motion.div>

          {/* Section heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-foreground"
          >
            Case Studies
          </motion.h2>

          {/* Projects grid */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-cols-2 md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Project info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/60 font-mono">
                      {project.period}
                    </p>
                  </div>

                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-foreground/70 leading-relaxed flex gap-3"
                      >
                        <span className="text-primary mt-1 flex-shrink-0">
                          ✦
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 text-xs font-mono bg-secondary/10 text-secondary border border-secondary/30 rounded led-glow-blue"
                        whileHover={{
                          boxShadow: "0 0 12px rgba(61, 169, 252, 0.6)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono bg-secondary text-background rounded hover:bg-secondary/90 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        Live
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project visual (placeholder) */}
                <motion.div
                  className="relative h-64 md:h-80 bg-gradient-to-br from-primary/10 to-secondary/10 border border-border rounded overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {index === 0 ? (
                    <img
                      src="/manus-storage/swasthify-hero_d849ab7a.png"
                      alt="Swasthify"
                      className="w-full h-full object-cover"
                    />
                  ) : index === 1 ? (
                    <img
                      src="/manus-storage/amazongo-hero_32685246.png"
                      alt="Amazon Go"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-foreground/10 mb-2">
                          {index + 1}
                        </div>
                        <p className="text-foreground/30 font-mono text-sm">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/0"
                    animate={{
                      borderColor: [
                        "rgba(57, 255, 136, 0)",
                        "rgba(57, 255, 136, 0.3)",
                        "rgba(57, 255, 136, 0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
