import { LogoProps } from '@/models/Logo';

import * as S from './styles';

export const Logo = ({ ContentLogo, Description }: LogoProps) => {
  return (
    <S.Logo>
      <S.ContentLogo>{ContentLogo}</S.ContentLogo>
      {Description && <S.Description>{Description}</S.Description>}
    </S.Logo>
  );
};
