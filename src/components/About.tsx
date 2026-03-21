import { motion, useInView } from "framer-motion";
import { User, GraduationCap, MapPin } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function Counter({
  from,
  to,
  label,
  duration = 2,
}: {
  from: number;
  to: number;
  label: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min(
          (timestamp - startTimestamp) / (duration * 1000),
          1,
        );
        setValue(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-black font-display text-foreground mb-1">
        {value}+
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,144,154,0.15)_0%,transparent_70%)] rounded-3xl blur-3xl"></div>
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-border shadow-[0_4px_40px_rgba(44,42,40,0.08)] bg-card"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/avatar.png`}
                alt="Yasmine Sassi"
                className="w-full h-full object-cover opacity-100 hover:scale-105 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-7/12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
            >
              About Me
            </motion.h2>
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-5xl font-display font-black mb-6 tracking-tight"
            >
              Engineering the <br />
              <span className="text-muted-foreground">future of software.</span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              Hello! I'm Yasmine, a dedicated software engineering student with
              an insatiable curiosity for technology. I specialize in building
              robust, full-stack applications that pair elegant user interfaces
              with powerful backend architectures. My journey in tech is driven
              by a desire to turn complex logic into intuitive digital
              experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
            >
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/30 hover:shadow-primary/10 transition-all">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Name
                  </p>
                  <p className="font-semibold text-foreground">Yasmine Sassi</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/30 hover:shadow-primary/10 transition-all">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Role
                  </p>
                  <p className="font-semibold text-foreground">SE Student</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/30 hover:shadow-primary/10 transition-all sm:col-span-2">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="font-semibold text-foreground">
                    Open to remote & relocation
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-8 border-t border-border"
            >
              <Counter from={0} to={10} label="Projects" />
              <Counter from={0} to={2} label="Years" />
              <Counter from={0} to={3} label="Goals" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
