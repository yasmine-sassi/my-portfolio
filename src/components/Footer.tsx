import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="font-display font-bold tracking-wide text-foreground">YS.</span>
        </a>
        
        <p className="text-sm font-medium text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Yasmine Sassi. Engineered with precision.
        </p>
      </div>
    </footer>
  );
}
