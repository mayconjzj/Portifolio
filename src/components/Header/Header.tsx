import { LogoConfig, MainNavConfig } from '@/config';

import { Logo } from '@/components/Logo';
import { MainNav } from '@/components/MainNav';

export const Header = () => {
  return (
    <header className="z-50 flex justify-between items-center h-[60px] w-screen px-[10%] bg-black fixed top-0">
      <Logo ContentLogo={LogoConfig.ContentLogo} />

      <MainNav items={MainNavConfig} />
    </header>
  );
};
