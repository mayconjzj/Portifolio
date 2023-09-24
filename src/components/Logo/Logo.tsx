import { LogoConfig } from '@/config/Logo';

import * as S from './styles';

export const Logo = () => {
  return (
    <S.Logo>
      <S.ContentLogo>{LogoConfig.ContentLogo}</S.ContentLogo>
      <S.Description>{LogoConfig.Description}</S.Description>
    </S.Logo>
  );
};
