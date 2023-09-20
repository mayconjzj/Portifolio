import * as S from './styles';

export const InputLength = ({ ...props }) => {
  return (
    <S.Content>
      <span>
        Tamanho: <span>10</span> Caracteres
      </span>

      <input type="range" {...props} />

      <button>Gerar Senha</button>
    </S.Content>
  );
};
