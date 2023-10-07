import { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

export const useScrollReveal = () => {
  const sr = ScrollReveal();

  useEffect(() => {
    sr.reveal('.element', {
      origin: 'left',
      distance: '30px',
      duration: 1000,
      delay: 200,
      mobile: true,
      viewFactor: 0.2,
      reset: true
    });
  }, []);
};
