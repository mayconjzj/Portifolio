'use client';

import tw from 'tailwind-styled-components';

export const ContentLink = tw.a<{ isactive: string }>`
  ${({ isactive }) => `
  ${isactive == 'true' ? 'text-blue-500' : 'text-[#222]'}
  hover:text-blue-500
  transition
  delay-150
  cursor-pointer
  font-medium
  `}
`;
