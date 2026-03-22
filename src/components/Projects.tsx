import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "AI Task Manager",
      description:
        "A smart task management system that uses natural language processing to automatically categorize and prioritize daily tasks.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Crypto Dashboard",
      description:
        "Real-time cryptocurrency portfolio tracker with live websocket data, interactive charts, and predictive trend analytics.",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
      tags: ["TypeScript", "Vue", "WebSockets", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Microservices",
      description:
        "A scalable backend architecture for an e-commerce platform built with Spring Boot, handling authentication, inventory, and payments.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      tags: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
  ];

  const sectionTransition = { duration: 0.65, ease: "easeOut" as const };

  return (
    <section id="projects" className="py-24 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={sectionTransition}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...sectionTransition, delay: 0.08 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight"
          >
            Featured Projects
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...sectionTransition, delay: 0.15 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Selected work blending product design, performance, and clean
            engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
      className="h-full min-h-[460px] bg-card/90 border border-border shadow-sm hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 rounded-[2rem] group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 relative"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative h-48 overflow-hidden shrink-0 border-b border-border">
        <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%] group-hover:grayscale-0"
        />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-card/95">
        <h4 className="text-2xl font-semibold text-foreground mb-3 font-display tracking-tight group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-3 py-1 rounded-full border bg-primary/8 text-primary border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-4 border-t border-border mt-auto">
          <a
            href={project.github}
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group/link"
          >
            <Github className="w-4 h-4 group-hover/link:-translate-y-0.5 transition-transform" />
            Code
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group/link"
          >
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
