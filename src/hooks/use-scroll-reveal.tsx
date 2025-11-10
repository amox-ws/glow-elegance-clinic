import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animations if user prefers reduced motion
      const allElements = document.querySelectorAll<HTMLElement>('[data-anim]');
      allElements.forEach(el => {
        el.classList.add('is-inview');
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
            // Unobserve after reveal for performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    // Select all elements with data-anim attribute
    const elements = document.querySelectorAll<HTMLElement>('[data-anim]');
    
    elements.forEach((el) => {
      let animDirection = el.dataset.anim;
      
      // Auto-detect direction if not specified
      if (!animDirection || animDirection === 'auto') {
        const rect = el.getBoundingClientRect();
        const mid = window.innerWidth / 2;
        animDirection = rect.left + rect.width / 2 < mid ? 'left' : 'right';
        el.dataset.anim = animDirection;
      }
      
      // Add appropriate classes
      el.classList.add('reveal');
      
      switch (animDirection) {
        case 'left':
          el.classList.add('reveal-left');
          break;
        case 'right':
          el.classList.add('reveal-right');
          break;
        case 'up':
          el.classList.add('reveal-up');
          break;
        default:
          el.classList.add('reveal-left');
      }
      
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};
