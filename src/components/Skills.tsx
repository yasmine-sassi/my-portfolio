import { motion } from "framer-motion";
import { 
  Code2, Database, LayoutTemplate, Server, 
  TerminalSquare, Blocks, Box, Container
} from "lucide-react";

export function Skills() {
  const skills = [
    { name: "JavaScript / TS", icon: <Code2 />, category: "Languages" },
    { name: "Python", icon: <TerminalSquare />, category: "Languages" },
    { name: "Java", icon: <Box />, category: "Languages" },
    { name: "React & Next.js", icon: <LayoutTemplate />, category: "Frontend" },
    { name: "Node.js & Express", icon: <Server />, category: "Backend" },
    { name: "PostgreSQL", icon: <Database />, category: "Database" },
    { name: "Docker", icon: <Container />, category: "DevOps" },
    { name: "Git & CI/CD", icon: <Blocks />, category: "Tools" },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(168,181,162,0.05)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            My Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Technical Arsenal
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border shadow-sm hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 p-6 rounded-[2rem] group flex flex-col items-center text-center relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-300 mb-4">
                {skill.icon}
              </div>
              <h4 className="font-semibold text-lg text-foreground mb-1">{skill.name}</h4>
              <p className="text-sm text-muted-foreground">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
