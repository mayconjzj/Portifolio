'use client';

import tw from 'tailwind-styled-components';

export const ContentLink = tw.a<{ isactive: string }>`
  ${({ isactive }) => ` 
    ${isactive === 'true' ? 'border-b-2 border-white' : ''}
    hover:border-b-2
    hover:border-white
    cursor-pointer
    py-[2px]
    font-medium
    text-white
    transition-colors
    delay-150
  `}
`;
