'use client';

import tw from 'tailwind-styled-components';

export const ContentLink = tw.a<{ isactive: string }>`
  ${({ isactive }) => ` 
    ${
      isactive === 'true'
        ? 'border-b-2 border-white text-white'
        : 'text-gray-300'
    }
    cursor-pointer
    py-[2px]
    font-medium
    hover:text-white
    transition-colors
    duration-300
  `}
`;
