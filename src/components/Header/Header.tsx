import { Logo } from '@/components/Logo';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Header>
      <Logo />

      <nav>
        <ul>
          <li>Home</li>
          <li>Sobre mim</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </nav>
    </S.Header>
  );
};
