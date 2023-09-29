'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import * as S from './styles';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
  [key: string]: string | React.ReactNode;
};
export const Link = ({ children, href, target, ...rest }: LinkProps) => {
  const asPath = usePathname();
  const isActive = asPath === href;

  return (
    <NextLink href={href} {...rest} legacyBehavior>
      <S.ContentLink isactive={isActive.toString()} target={target}>
        {children}
      </S.ContentLink>
    </NextLink>
  );
};
