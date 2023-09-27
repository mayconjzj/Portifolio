import * as S from './styles';

export const Button = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) => {
  return <S.Button {...rest}>{children}</S.Button>;
};
