import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const textToAnimate = "Yasmine Sassi";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      currentIndex += 1;
      setTypedText(textToAnimate.slice(0, currentIndex));

      if (currentIndex >= textToAnimate.length) {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [textToAnimate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid-pattern"
    >
      {/* Abstract Glowing Orb Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 opacity-10 animate-orb">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(196,144,154,0.8)_0%,transparent_70%)] blur-3xl"></div>
      </div>
      <div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] pointer-events-none z-0 opacity-10 animate-orb"
        style={{ animationDelay: "-5s" }}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,181,162,0.8)_0%,transparent_70%)] blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex-1"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-background mb-8"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              Hello World
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight"
          >
            I'm{" "}
            <span className="inline-block">
              <motion.span
                variants={wordVariants}
                className="inline-block text-gradient"
              >
                {typedText}
              </motion.span>
              <span
                className={`inline-block w-1.5 h-12 md:h-16 lg:h-20 bg-primary translate-y-2 md:translate-y-3 ${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
              />
            </span>
            <br />
            <span className="text-foreground">Software Engineer.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            I'm a passionate student crafting elegant solutions to complex
            problems. Transforming ideas into beautifully engineered, scalable
            digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-5"
          >
            <a
              href="#projects"
              className="group px-8 py-4 rounded-full font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 animate-pulse-glow"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold border border-primary/30 bg-primary/10 text-foreground hover:bg-primary/20 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Code Card */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
          className="hidden lg:block w-96 relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-[2rem] overflow-hidden border border-border shadow-[0_10px_40px_rgba(44,42,40,0.08)] font-mono text-sm bg-[#fffdf9] text-[#3e3832] border-t-[#3e3832] border-r-[#3e3832] border-b-[#3e3832] border-l-[#3e3832]"
          >
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border bg-[#F2EDE7]">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-2 text-xs text-muted-foreground">
                engineer.ts
              </span>
            </div>
            <div className="p-6 leading-relaxed overflow-x-auto text-[#2f2b28]">
              <p className="text-[#2f2b28]">
                <span className="text-[#C4909A]">const</span>{" "}
                <span className="text-[#2f2b28]">engineer</span> = {"{"}
              </p>
              <p className="ml-4 text-[#2f2b28]">
                name: <span className="text-[#A8B5A2]">"Yasmine Sassi"</span>,
              </p>
              <p className="ml-4 text-[#2f2b28]">
                role:{" "}
                <span className="text-[#A8B5A2]">"Software Engineer"</span>,
              </p>
              <p className="ml-4 text-[#2f2b28]">
                skills: [<span className="text-[#A8B5A2]">"React"</span>,{" "}
                <span className="text-[#A8B5A2]">"Node.js"</span>,{" "}
                <span className="text-[#A8B5A2]">"TypeScript"</span>],
              </p>
              <p className="ml-4">
                passion: <span className="text-[#C4909A]">true</span>,
              </p>
              <p className="ml-4">
                build: <span className="text-[#2f2b28]">function</span>() {"{"}
              </p>
              <p className="ml-8">
                <span className="text-[#C4909A]">return</span>{" "}
                <span className="text-[#A8B5A2]">
                  "Beautiful digital experiences"
                </span>
                ;
              </p>
              <p className="ml-4">{"}"}</p>
              <p>{"};"}</p>
              <p className="mt-2 text-[#7A756E]">// Ready to collaborate</p>
              <p>
                <span className="text-[#2f2b28]">engineer</span>.
                <span className="text-[#C4909A]">build</span>();
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
}
