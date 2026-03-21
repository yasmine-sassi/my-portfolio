import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import React, { useRef, useState } from "react";

export function Projects() {
  const projects = [
    {
      title: "AI Task Manager",
      description: "A smart task management system that uses natural language processing to automatically categorize and prioritize daily tasks.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency portfolio tracker with live websocket data, interactive charts, and predictive trend analytics.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
      tags: ["TypeScript", "Vue", "WebSockets", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Microservices",
      description: "A scalable backend architecture for an e-commerce platform built with Spring Boot, handling authentication, inventory, and payments.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      tags: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-black tracking-tight"
          >
            Featured Projects
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        delay: index * 0.15 
      }}
      className="relative rounded-[2rem] bg-card border border-border shadow-md hover:shadow-xl hover:shadow-primary/10 overflow-hidden group flex flex-col h-[500px] transition-all duration-300"
    >
      {/* Number Indicator */}
      <div className="absolute top-4 right-6 text-7xl font-black text-foreground/[0.04] font-display pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
        0{index + 1}
      </div>

      {/* Hover Gradient Overlay */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 mix-blend-overlay"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(196, 144, 154, 0.25), transparent 40%)`
        }}
      />

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden shrink-0 border-b border-border">
        <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%] group-hover:grayscale-0"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-card/95">
        <h4 className="text-2xl font-bold text-foreground mb-3 font-display tracking-tight group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tags.map((tag: string, i: number) => (
            <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full border ${i % 2 === 0 ? 'bg-primary/8 text-primary border-primary/20' : 'bg-secondary/10 text-secondary border-secondary/20'}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 pt-4 border-t border-border mt-auto">
          <a 
            href={project.github}
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group/link"
          >
            <Github className="w-4 h-4 group-hover/link:-translate-y-0.5 transition-transform" /> Code
          </a>
          <a 
            href={project.demo}
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group/link"
          >
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
