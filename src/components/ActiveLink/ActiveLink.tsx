'use client';

import Link from 'next/link';

import { twMerge } from 'tailwind-merge';

import { ActiveLinkProps } from '@/models/ActiveLink';

import { useActiveLink } from './hooks';

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const { isActive } = useActiveLink({ href });

  return (
    <Link
      className={twMerge(
        `${isActive ? 'text-white' : 'text-[#aaa]'}`,
        'cursor-pointer py-[2px] font-medium hover:text-white transition-colors duration-300',

        rest.className
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};
