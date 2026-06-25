import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillCategory {
  label: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Java", "JavaScript", "Python", "C", "SQL"],
  },
  {
    label: "Core CS",
    skills: ["DSA", "OOP", "DBMS", "Computer Networks", "Operating Systems", "Problem Solving"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["Next.js", "React.js", "Node.js", "Express.js", "REST APIs", "Socket.IO", "Prisma ORM"],
  },
  {
    label: "Databases & Caching",
    skills: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
  },
  {
    label: "Cloud & Infrastructure",
    skills: ["AWS Lambda", "API Gateway", "Amplify", "Amazon Cognito", "Serverless Framework"],
  },
  {
    label: "AI & Integrations",
    skills: ["Amazon Bedrock", "Claude 3 Haiku", "Gemini AI"],
  },
  {
    label: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "STM32CubeIDE"],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
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
          <motion.div variants={categoryVariants} className="section-label mb-6">
            // 04 skills
          </motion.div>

          {/* Section heading */}
          <motion.h2
            variants={categoryVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-foreground"
          >
            Technical Arsenal
          </motion.h2>

          {/* Skills by category */}
          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={categoryVariants}
                className="space-y-4"
              >
                {/* Category label */}
                <h3 className="text-lg font-bold text-primary font-mono">
                  {category.label}
                </h3>

                {/* Skills tag cloud */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 12px rgba(57, 255, 136, 0.6)",
                      }}
                      className="px-4 py-2 text-sm font-mono bg-primary/10 text-primary border border-primary/30 rounded cursor-pointer transition-all duration-200 hover:bg-primary/20"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Summary stats */}
          <motion.div
            variants={categoryVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-border"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <p className="text-sm text-foreground/60 font-mono">Languages</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">15+</div>
              <p className="text-sm text-foreground/60 font-mono">Frameworks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <p className="text-sm text-foreground/60 font-mono">Databases</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">AWS</div>
              <p className="text-sm text-foreground/60 font-mono">Certified</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
