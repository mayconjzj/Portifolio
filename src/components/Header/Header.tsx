import { LogoConfig, MainNavConfig } from '@/config';

import { Logo } from '@/components/Logo';
import { MainNav } from '@/components/MainNav';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Header>
      <Logo ContentLogo={LogoConfig.ContentLogo} />

      <MainNav items={MainNavConfig} />
    </S.Header>
  );
};
