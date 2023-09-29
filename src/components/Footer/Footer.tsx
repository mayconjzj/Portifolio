import { FooterConfig } from '@/config';

import { MainNav } from '../MainNav';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        <MainNav items={FooterConfig} />
      </S.Content>
    </S.Footer>
  );
};
