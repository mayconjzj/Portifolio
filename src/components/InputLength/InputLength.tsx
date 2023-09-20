'use client';

import { useInputLength } from './hooks';
import * as S from './styles';

export const InputLength = () => {
  const { caractersLength, setCharactersLength } = useInputLength('15');

  return (
    <S.Content>
      <span>
        Tamanho: <span>{caractersLength}</span> Caracteres
      </span>

      <input
        type="range"
        min={5}
        max={25}
        value={caractersLength}
        onChange={(e) => setCharactersLength(e.target.value)}
      />

      <button>Gerar Senha</button>
    </S.Content>
  );
};
