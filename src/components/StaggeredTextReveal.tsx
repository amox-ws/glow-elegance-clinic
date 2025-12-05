import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface StaggeredTextRevealProps {
  text: string;
  className?: string;
  wrapperClassName?: string;
  delay?: number; // Initial delay in ms before animation starts
  stagger?: number; // Delay in ms between each letter
}

const StaggeredTextReveal = ({ 
  text, 
  className, 
  wrapperClassName,
  delay = 0,
  stagger = 35 
}: StaggeredTextRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Split text into words to ensure proper line breaking
  const words = text.split(" ");
  let charCounter = 0;

  return (
    <div 
      ref={ref} 
      className={cn("flex flex-wrap justify-center gap-x-[0.5em] leading-tight", wrapperClassName)}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split("");
        
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIndex) => {
              // Calculate delay for this specific character
              const currentDelay = delay + (charCounter * stagger);
              charCounter++;

              return (
                <span 
                  key={charIndex} 
                  className="inline-block overflow-hidden align-bottom -mb-1 pb-1" // Extra padding helps avoid clipping descenders
                >
                  <span
                    className={cn("inline-block", className)}
                    style={{
                      transform: isVisible ? "translateY(0)" : "translateY(100%)",
                      opacity: isVisible ? 1 : 0,
                      // Slower 1s duration with a smooth ease-out curve
                      transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${currentDelay}ms, opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${currentDelay}ms`,
                    }}
                  >
                    {char}
                  </span>
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
};

export default StaggeredTextReveal;