import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-24 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,144,154,0.22)_0%,transparent_70%)] blur-2xl animate-orb" />
        <div
          className="absolute top-[28%] -right-28 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,181,162,0.2)_0%,transparent_70%)] blur-2xl animate-orb"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="absolute bottom-[-120px] left-[24%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,144,154,0.16)_0%,transparent_70%)] blur-2xl animate-orb"
          style={{ animationDelay: "-13s" }}
        />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
