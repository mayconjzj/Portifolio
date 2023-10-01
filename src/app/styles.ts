import tw from 'tailwind-styled-components';

export const Container = tw.article`
  flex
  flex-col
`;

export const ContentHome = tw.section`
  h-screen
  flex
  flex-col
  items-center
  justify-center
  gap-y-10
`;

export const ContentTextTitle = tw.h1`
  md:text-6xl
  text-4xl
  font-black 
  text-slate-100
  md:max-w-2xl
  max-w-md
  flex
  flex-wrap
  md:gap-y-7
  gap-y-4
  mx-auto
  justify-center
`;

export const ContentTextGradient = tw.span`
  md:h-[70px]
  h-[43px]
  bg-gradient-to-r
  from-blue-500
  via-purple-500
  to-pink-500
  bg-clip-text
  text-transparent
  bg-[length:170%]
  animate-[gradient_5s_ease-in-out_infinite]
`;

export const ContentTextDescription = tw.p`
  text-gray-500
  md:w-[500px]
  w-[300px]
  text-center
`;

export const ContentBoxButton = tw.div`
  flex
  gap-4
  justify-center
`;
