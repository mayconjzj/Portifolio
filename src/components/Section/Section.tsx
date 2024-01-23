import { twMerge } from 'tailwind-merge';

import { SectionProps } from '@/models/Section';

export const Section = ({ children, id, ...rest }: SectionProps) => {
  return (
    <section
      id={id}
      className={twMerge(
        'element flex flex-col gap-5 px-[10%] py-20 border-t-2 border-t-[#111] min-h-[60vh]',
        rest.className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};
