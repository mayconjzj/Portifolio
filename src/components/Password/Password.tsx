'use client';

import { usePassword } from './hooks';
import * as S from './styles';

export const Password = () => {
  const { password } = usePassword();

  return (
    <S.Content>
      {password && (
        <>
          <span>Sua senha gerada é:</span>
          <span>{password}</span>
          <span>Clique na senha para copiar.</span>
        </>
      )}
    </S.Content>
  );
};
