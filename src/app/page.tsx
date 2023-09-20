import { InputLength } from '@/components/InputLength';
import { Logo } from '@/components/Logo';
import { Password } from '@/components/Password';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <Logo />
      <InputLength />
      <Password />
    </S.Container>
  );
}
