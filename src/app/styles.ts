import tw from 'tailwind-styled-components';

export const Container = tw.section`
  h-[calc(100vh-60px)]
  flex
  flex-col
  gap-y-10
  items-center
  justify-center
`;

export const ContentTextTitle = tw.h1`
  md:text-6xl
  text-5xl
  font-black 
  text-slate-100
  md:max-w-2xl
  max-w-lg
  flex
  flex-wrap
  md:gap-y-7
  gap-y-4
  mx-auto
  justify-center
`;

export const ContentTextGradient = tw.span`
  h-[70px]
  bg-gradient-to-r
  from-blue-500
  to-pink-500
  bg-clip-text
  text-transparent
`;

export const ContentTextDescription = tw.p`
  text-gray-500
  md:w-[500px]
  w-96
  text-center
`;

export const ContentBoxButton = tw.div`
  flex
  gap-4
  justify-center
`;
