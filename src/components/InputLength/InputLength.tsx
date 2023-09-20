import * as S from './styles';

export const InputLength = () => {
  return (
    <S.Content>
      <span>
        Tamanho: <span>10</span> Caracteres
      </span>

      <input type="range" min={5} max={25} />

      <button>Gerar Senha</button>
    </S.Content>
  );
};
