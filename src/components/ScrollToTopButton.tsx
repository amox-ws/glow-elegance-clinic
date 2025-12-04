import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-background/60 backdrop-blur-sm border border-border/30 shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-background/80 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/30 md:bottom-8 md:right-8"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 text-foreground/70" />
    </button>
  );
};
