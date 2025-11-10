import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animations if user prefers reduced motion
      elementsRef.current.forEach(el => el?.classList.add('is-inview'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all elements with reveal classes
    const elements = document.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right, .reveal-up'
    );
    
    elementsRef.current = Array.from(elements);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
