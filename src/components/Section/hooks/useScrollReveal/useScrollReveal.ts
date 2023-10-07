import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default();

        sr.reveal('.element', {
          origin: 'left',
          distance: '30px',
          duration: 1000,
          delay: 200,
          mobile: true,
          viewFactor: 0.2,
          reset: true
        });
      });
    }
  }, []);
};
