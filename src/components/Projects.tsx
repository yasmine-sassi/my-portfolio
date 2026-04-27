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
  const imageUrl = (fileName: string) =>
    `${import.meta.env.BASE_URL}images/${fileName}`;

  const projects: Project[] = [
    {
      title: "Tunisian Arabic Spoken Dialogue System – ASR & LLM",
      description:
        "A voice assistant tailored for the Tunisian dialect, combining Automatic Speech Recognition and Large Language Models. Fine-tuned ASR models (Whisper, w2v-BERT, MMS) on 400 hours of speech data and adapted an LLM (Aya-8B) using QLoRA and RAG to generate natural, context-aware responses.",
      image: imageUrl("tun2.png"),
      tags: [
        "PyTorch",
        "Hugging Face",
        "Whisper",
        "ASR",
        "QLoRA",
        "RAG",
        "LLM",
        "Speech Processing",
      ],
      github: "https://github.com/yasmine-sassi/TunisianDialogSystem",
      demo: "#",
    },
    {
      title: "AI Voice Agent Platform",
      description:
        "A multi-tenant AI-powered customer support platform that handles inbound calls via Twilio, processes interactions using LLMs, and delivers real-time analytics. Supports multiple business domains with intelligent intent detection, sentiment analysis, multilingual responses (EN/FR/AR), and automatic escalation to human agents using RAG-based knowledge retrieval.",
      image: imageUrl("voice_agent.png"),
      tags: [
        "Python",
        "FastAPI",
        "LLM",
        "RAG",
        "Twilio",
        "Streamlit",
        "NLP",
        "Multilingual AI",
        "Analytics",
      ],
      github: "https://github.com/yasmine-sassi/Ai-customer-support-agent",
      demo: "#",
    },
    {
      title: "Tunisan Real Estate Price Prediction",
      description:
        "A machine learning-based platform for predicting real estate prices in Tunisia. Uses advanced ML algorithms trained on 12,000+ properties data and predict rental and sale prices with high accuracy (0.878 accuracy for rental models) through an intuitive full-stack web application.",
      image: imageUrl("Tun.png"),
      tags: [
        "Python",
        "scikit-learn",
        "Pandas",
        "Matplotlib",
        "ML",
        "Data Science",
        "Data engineering",
        "React",
        "NestJS",
      ],
      github:
        "https://github.com/yasmine-sassi/Tunisan-Real-Estate-Price-Prediction-Platform.git",
      demo: "#",
    },
    {
      title: "Real time Facial Expressions Recognition",
      description:
        "A deep learning-based system for detecting and classifying human emotions from facial expressions. The pipeline includes face detection, feature extraction, and emotion classification into core expressions such as happiness, sadness, anger,disgust and surprise.",
      image: imageUrl("FER.png"),
      tags: [
        "Python",
        "PyTorch",
        "Deep Learning",
        "CNN",
        "ResNet50",
        "Emotion Recognition",
      ],
      github: "https://github.com/yasmine-sassi/facial-expressions-recognition",
      demo: "#",
    },
    {
      title: "ai-package-delivery",
      description:
        "An intelligent package delivery solution that uses AI search algorithms to optimize routing, reduce delays, and improve delivery efficiency in a grid-based environment with traffic constraints, tunnels, and multiple delivery points.",
      image: imageUrl("Search.png"),
      tags: ["SpringBoot", "BFD", "DFS", "IDS", "UCS"],
      github: "https://github.com/yasmine-sassi/ai-package-delivery.git",
      demo: "#",
    },
    {
      title: "RumourCheck",
      description:
        "An AI-powered fact-checking platform that analyzes online claims and classifies potential misinformation.",
      image: imageUrl("RumourCheck.png"),
      tags: ["Python", "NLP", "FastAPI", "ML"],
      github: "https://github.com/yasmine-sassi/RumourCheck.git",
      demo: "#",
    },
    {
      title: "DinePilot",
      description:
        "A Computer Vision + AI solution for restaurant floor intelligence that tracks table occupancy in real time, measures customer wait times, detects personal belongings to mark tables as reserved, and generates predictive monthly insights. Delivered measurable impact: 30–40% higher table turnover and 20–30% lower guest wait times.",
      image: imageUrl("DinePlot.jpeg"),
      tags: [
        "YOLOv11x",
        "YOLOv8x-pose",
        "Computer Vision",
        "React Dashboard",
        "FastAPI",
        "Predictive Analytics",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "TaskFlow-Pro",
      description:
        "A task and project management platform that helps teams collaborate effectively. It enables teams to organize, assign, and track work through a unified workspace, centralizing projects, tasks, and team communication in one place.",
      image: imageUrl("Taskflow.png"),
      tags: [
        "Angular 21",
        "Tailwind CSS",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Supabase",
        "Prisma",
        "JWT",
        "WebSocket",
      ],
      github: "https://github.com/yasmine-sassi/TaskFlow-Pro-Frontend.git",
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
