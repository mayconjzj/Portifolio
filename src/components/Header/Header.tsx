import { LogoConfig } from '@/config/Logo';
import { MainNavConfig } from '@/config/MainNav';

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
