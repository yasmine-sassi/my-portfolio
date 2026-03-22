import { motion } from "framer-motion";
import { Briefcase, GraduationCap, CalendarDays } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "Software Engineering Intern",
    company: "TechCorp Solutions",
    period: "Jun 2025 – Sep 2025",
    location: "Remote",
    description: [
      "Built and shipped a React dashboard that reduced report generation time by 40%.",
      "Collaborated with a team of 5 engineers in an Agile environment using Jira and GitHub.",
      "Improved REST API response times by 25% through query optimization in PostgreSQL.",
    ],
  },
  {
    type: "education",
    role: "Software Engineering",
    company:
      "National Institute of Applied Science and Technology Tunis (INSAT)",
    period: "Sep 2022 – Jun 2027",
    location: "Tunis, Tunisia",
    description: [
      "Relevant coursework: Deep Learning, DevOps, Big Data, Software Architecture, Image Processing, Software Testing, Security Protocols...",
      "Active member of the university's CS Society and Hackathon team.",
      "Vice President of Lions Club INSAT, organizing community service and fundraising events.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            My Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-black tracking-tight"
          >
            Experience & Education
          </motion.h3>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                    delay: index * 0.1,
                  }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 pl-16 md:pl-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[18px] md:left-1/2 top-6 w-4 h-4 rounded-full bg-background border-2 border-primary md:-translate-x-2 shadow-[0_0_0_4px_hsl(var(--background))] z-10" />

                  {/* Date badge (desktop only) */}
                  <div
                    className={`hidden md:flex items-start w-1/2 ${
                      isLeft
                        ? "justify-end pr-10 pt-5"
                        : "justify-start pl-10 pt-5"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-1/2 ${isLeft ? "md:pl-10" : "md:pr-10"}`}
                  >
                    <div className="bg-card border border-border rounded-[1.5rem] p-6 shadow-sm hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 group">
                      {/* Icon + type */}
                      <div className="flex items-center gap-2 mb-4">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            exp.type === "work"
                              ? "bg-primary/10 text-primary"
                              : "bg-secondary/10 text-secondary"
                          }`}
                        >
                          {exp.type === "work" ? (
                            <Briefcase className="w-4 h-4" />
                          ) : (
                            <GraduationCap className="w-4 h-4" />
                          )}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          {exp.type === "work" ? "Work" : "Education"}
                        </span>

                        {/* Date (mobile) */}
                        <span className="ml-auto md:hidden inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border">
                          <CalendarDays className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold font-display tracking-tight text-foreground group-hover:text-primary transition-colors mb-1">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-muted-foreground mb-4">
                        {exp.company.includes("(INSAT)") ? (
                          <>
                            {exp.company.replace(" (INSAT)", "")} (
                            <a
                              href="https://www.insat.rnu.tn"
                              target="_blank"
                              rel="noreferrer"
                              className="text-primary hover:underline underline-offset-4"
                            >
                              INSAT
                            </a>
                            )
                          </>
                        ) : (
                          exp.company
                        )}{" "}
                        · {exp.location}
                      </p>

                      <ul className="flex flex-col gap-2">
                        {exp.description.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
