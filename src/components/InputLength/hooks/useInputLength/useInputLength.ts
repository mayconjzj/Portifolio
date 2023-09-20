import { useState } from 'react';

export const useInputLength = (value: string) => {
  const [caractersLength, setCharactersLength] = useState(value);

  return {
    caractersLength,
    setCharactersLength
  };
};
