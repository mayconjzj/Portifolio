import tw from 'tailwind-styled-components';

export const Content = tw.h1`
  text-3xl
  font-bold
  relative
  z-10
  after:content-['']
  after:absolute
  after:bottom-[-6px]
  after:left-0 after:w-52
  after:h-[2px]
  after:bg-gradient-to-r
  after:from-blue-500
  after:to-black
`;
