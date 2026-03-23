import { motion } from "framer-motion";
import {
  Code2,
  Database,
  LayoutTemplate,
  Server,
  Container,
  BrainCircuit,
  Smartphone,
} from "lucide-react";

export function Skills() {
  const skills = [
    // Languages
    {
      name: "JavaScript / TS / Python / Java / C++ / PHP ",
      icon: <Code2 />,
      category: "Languages",
    },
    // Frameworks & Libraries
    {
      name: "SpringBoot / .NET / Django / Flask",
      icon: <Container />,
      category: "Frameworks",
    },

    // Frontend
    {
      name: "React / Angular",
      icon: <LayoutTemplate />,
      category: "Frontend",
    },

    // Backend
    {
      name: "NestJS / Laravel / Symfony",
      icon: <Server />,
      category: "Backend",
    },

    // Database
    {
      name: "MongoDB / PostgreSQL / Redis / MySQL / SQLite / Firebase / Supabase",
      icon: <Database />,
      category: "Database",
    },

    // Mobile
    {
      name: "Flutter",
      icon: <Smartphone />,
      category: "Mobile",
    },

    // DevOps & Tools
    {
      name: "Docker / Kubernetes / Git / Jenkins",
      icon: <Container />,
      category: "DevOps",
    },

    // ML & Data Science
    {
      name: "Scikit-learn / Pandas & NumPy / Matplotlib & Seaborn / OpenCV / MediaPipe",
      icon: <BrainCircuit />,
      category: "ML & Data",
    },
  ];

  const sectionTransition = { duration: 0.65, ease: "easeOut" as const };

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(168,181,162,0.05)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={sectionTransition}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...sectionTransition, delay: 0.08 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight"
          >
            Technical Arsenal
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...sectionTransition, delay: 0.15 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            A snapshot of the technologies I use to design, build, and ship
            modern products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-7 items-stretch">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              className="h-full min-h-[220px] sm:min-h-[248px] bg-card/90 border border-border shadow-sm hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 p-5 sm:p-6 md:p-8 rounded-[2rem] group flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-all duration-300 mb-5">
                {skill.icon}
              </div>
              <h4 className="relative z-10 font-semibold text-xl md:text-[1.35rem] leading-snug text-foreground mb-2 text-balance">
                {skill.name}
              </h4>
              <p className="relative z-10 text-sm md:text-base text-muted-foreground">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
