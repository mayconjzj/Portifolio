'use client';

import NextLink from 'next/link';

import { LinkProps } from '@/models';

import * as S from './styles';

export const Link = ({ children, href, ...rest }: LinkProps) => {
  return (
    <NextLink href={href} {...rest} legacyBehavior>
      <S.ContentLink>{children}</S.ContentLink>
    </NextLink>
  );
};
