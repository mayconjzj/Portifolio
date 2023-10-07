import * as S from './styles';

export const Section = ({
  children,
  id
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return <S.Container id={id}>{children}</S.Container>;
};
