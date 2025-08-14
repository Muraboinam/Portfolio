import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

interface ScrollRevealOptions {
  delay?: number;
  distance?: string;
  duration?: number;
  easing?: string;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  reset?: boolean;
  scale?: number;
  opacity?: number;
  interval?: number;
}

export const useScrollReveal = (
  selector: string,
  options: ScrollRevealOptions = {}
) => {
  useEffect(() => {
    const defaultOptions: ScrollRevealOptions = {
      delay: 200,
      distance: '50px',
      duration: 1000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'bottom',
      reset: true,
      scale: 1,
      opacity: 0,
      ...options,
    };

    ScrollReveal().reveal(selector, defaultOptions);

    return () => {
      ScrollReveal().clean(selector);
    };
  }, [selector, options]);
};

export default useScrollReveal;