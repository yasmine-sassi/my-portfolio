import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative border-t border-border overflow-hidden"
    >
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(196,144,154,0.15)_0%,rgba(168,181,162,0.15)_50%,transparent_100%)] rounded-full blur-[120px] animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card border border-border rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-[0_10px_40px_rgba(44,42,40,0.05)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Info */}
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Get In Touch
              </h2>
              <h3 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tight">
                Let's build something <br className="hidden md:block" />
                <span className="text-gradient">amazing together.</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-md">
                Whether you have a question, a project idea, or just want to say
                hi, my inbox is always open. I'm currently looking for
                internship and junior engineering opportunities.
              </p>

              <div className="flex flex-col gap-6">
                <a
                  href="mailto:hello@yasminesassi.com"
                  className="flex items-center gap-4 group w-fit"
                >
                  <div className="w-12 h-12 rounded-full border border-border bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      Email
                    </p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      hello@yasminesassi.com
                    </p>
                  </div>
                </a>

                <div className="flex gap-4 mt-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:scale-110 hover:bg-foreground hover:text-background transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:scale-110 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-muted/50 p-8 rounded-2xl border border-border shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 group">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-muted-foreground group-focus-within:text-primary transition-colors"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-muted-foreground group-focus-within:text-primary transition-colors"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-muted-foreground group-focus-within:text-primary transition-colors"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-4 rounded-xl font-bold bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
