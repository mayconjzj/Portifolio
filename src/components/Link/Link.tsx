'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import * as S from './styles';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};
export const Link = ({ children, href, ...rest }: LinkProps) => {
  const asPath = usePathname();
  const isActive = asPath === href;

  return (
    <NextLink href={href} {...rest} legacyBehavior>
      <S.ContentLink isactive={isActive.toString()}>{children}</S.ContentLink>
    </NextLink>
  );
};
