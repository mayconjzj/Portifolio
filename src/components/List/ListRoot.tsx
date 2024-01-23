import { twMerge } from 'tailwind-merge';

import { ListRootProps } from '@/models/List';

export const ListRoot = ({ children, ...rest }: ListRootProps) => {
  return (
    <ul className={twMerge('flex gap-7', rest.className)} {...rest}>
      {children}
    </ul>
  );
};
