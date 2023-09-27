import { Link } from '@/components/Link';

import { LogoProps } from '@/models/Logo';

import * as S from './styles';

export const Logo = ({ ContentLogo, Description }: LogoProps) => {
  return (
    <S.Logo>
      <Link href="/">
        <S.ContentLogo>{ContentLogo}</S.ContentLogo>
        {Description && <S.Description>{Description}</S.Description>}
      </Link>
    </S.Logo>
  );
};
