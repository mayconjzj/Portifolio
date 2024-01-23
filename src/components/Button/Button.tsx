import { twMerge } from 'tailwind-merge';

import { ButtonProps } from '@/models/Button';

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'text-white font-medium border-2 border-blue-500 rounded-lg min-w-[150px] py-2 px-4 transition-colors duration-300 hover:bg-blue-500',
        rest.className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
