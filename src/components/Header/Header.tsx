import { LogoConfig } from '@/config/Logo';

import { Logo } from '@/components/Logo';
import { MainNav } from '@/components/MainNav';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Header>
      <Logo
        ContentLogo={LogoConfig.ContentLogo}
        Description={LogoConfig.Description}
      />

      <MainNav />
    </S.Header>
  );
};
