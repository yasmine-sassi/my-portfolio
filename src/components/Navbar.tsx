import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";

function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((d) => !d) };
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border shadow-[0_2px_20px_rgba(44,42,40,0.06)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-[1.25rem] bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm group-hover:shadow-primary/20 transition-all duration-300 group-hover:scale-105">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-3xl tracking-wide text-foreground">
            YS<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group flex items-center gap-2 ${
                activeSection === link.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeDot"
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  style={{ boxShadow: "0 0 10px 2px rgba(196, 144, 154, 0.5)" }}
                />
              )}
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className={`relative h-10 w-20 overflow-hidden rounded-full border transition-all duration-300 shadow-sm ${
              isDark
                ? "bg-primary/20 border-primary/30"
                : "bg-secondary/20 border-secondary/30"
            }`}
          >
            <motion.span
              initial={false}
              animate={{ x: isDark ? 40 : 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 26,
                mass: 1.1,
              }}
              className={`absolute left-1 top-1 grid h-8 w-8 place-items-center rounded-full ${
                isDark
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {isDark ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </motion.span>
          </button>
        </nav>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className={`relative h-10 w-24 overflow-hidden rounded-full border transition-all duration-300 shadow-sm ${
              isDark
                ? "bg-primary/20 border-primary/30"
                : "bg-secondary/20 border-secondary/30"
            }`}
          >
            <motion.span
              initial={false}
              animate={{ x: isDark ? 56 : 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 26,
                mass: 1.1,
              }}
              className={`absolute left-1 top-1 grid h-8 w-8 place-items-center rounded-full ${
                isDark
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {isDark ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </motion.span>
          </button>
          <button
            className="text-foreground p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden md:hidden shadow-lg"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors py-2 border-b border-border flex items-center gap-3 ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeSection === link.id && (
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(196,144,154,0.5)]" />
                  )}
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
